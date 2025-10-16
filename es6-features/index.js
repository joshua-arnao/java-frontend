#!/usr/bin/env node

const { readdir } = require('fs/promises');
const { join, relative } = require('path');
const { spawn } = require('child_process');
const readline = require('readline');

// Colores para la terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
};

async function findScripts(dir) {
  const scripts = [];

  async function scan(currentDir) {
    try {
      const entries = await readdir(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(currentDir, entry.name);

        if (entry.isDirectory()) {
          // Ignorar node_modules, .git, dist, build
          if (!['node_modules', '.git', 'dist', 'build'].includes(entry.name)) {
            await scan(fullPath);
          }
        } else if (entry.isFile()) {
          // Solo procesar archivos que NO estén en el directorio raíz de ejecución
          if (currentDir !== dir) {
            const ext = entry.name.split('.').pop();
            if (ext === 'js' || ext === 'ts') {
              scripts.push({
                name: relative(dir, fullPath),
                path: fullPath,
                type: ext,
              });
            }
          }
        }
      }
    } catch (error) {
      // Ignorar errores de permisos
    }
  }

  await scan(dir);
  return scripts.sort((a, b) => a.name.localeCompare(b.name));
}

function clearScreen() {
  console.clear();
}

function getTerminalHeight() {
  return process.stdout.rows || 24;
}

function displayMenu(scripts, selectedIndex, scrollOffset) {
  clearScreen();
  console.log(`${colors.bright}${colors.cyan}📁 Interactive Script Runner${colors.reset}\n`);
  console.log(`${colors.gray}Found ${scripts.length} script(s). Use ↑↓ to navigate, Enter to run, r to refresh, q to quit.${colors.reset}\n`);

  // Calcular cuántos items caben en pantalla (dejando espacio para header y footer)
  const terminalHeight = getTerminalHeight();
  const maxVisibleItems = terminalHeight - 8; // Espacio para header, footer, y margen

  // Calcular el rango visible
  const startIndex = scrollOffset;
  const endIndex = Math.min(startIndex + maxVisibleItems, scripts.length);
  const visibleScripts = scripts.slice(startIndex, endIndex);

  // Mostrar indicador de scroll superior
  if (startIndex > 0) {
    console.log(`${colors.gray}  ▲ ${startIndex} more above...${colors.reset}`);
  }

  visibleScripts.forEach((script, index) => {
    const actualIndex = startIndex + index;
    const isSelected = actualIndex === selectedIndex;
    const icon = script.type === 'ts' ? '🔷' : '🟨';
    const prefix = isSelected ? `${colors.green}▶ ` : '  ';
    const highlight = isSelected ? colors.bright : '';

    console.log(`${prefix}${highlight}${icon} ${script.name}${colors.reset}`);
  });

  // Mostrar indicador de scroll inferior
  if (endIndex < scripts.length) {
    console.log(`${colors.gray}  ▼ ${scripts.length - endIndex} more below...${colors.reset}`);
  }

  console.log(`\n${colors.gray}─────────────────────────────────────${colors.reset}`);
  console.log(`${colors.gray}Selected: ${selectedIndex + 1}/${scripts.length}${colors.reset}`);
}

async function executeScript(script) {
  clearScreen();
  console.log(`${colors.bright}${colors.blue}⚡ Executing: ${script.name}${colors.reset}\n`);
  console.log(`${colors.gray}─────────────────────────────────────${colors.reset}\n`);

  // Usar tsx para TypeScript y node para JavaScript
  const command = script.type === 'ts' ? 'npx' : 'node';
  const args = script.type === 'ts' ? ['tsx', script.path] : [script.path];

  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
  });

  return new Promise((resolve) => {
    child.on('close', (code) => {
      console.log(`\n${colors.gray}─────────────────────────────────────${colors.reset}`);
      if (code === 0) {
        console.log(`${colors.green}✓ Finished successfully${colors.reset}`);
      } else {
        console.log(`${colors.yellow}⚠ Exited with code ${code}${colors.reset}`);
      }
      console.log(`\n${colors.gray}Press any key to continue...${colors.reset}`);
      resolve();
    });
  });
}

async function waitForKey() {
  return new Promise((resolve) => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once('data', (data) => {
      resolve(data.toString());
    });
  });
}

function calculateScrollOffset(selectedIndex, currentOffset, maxVisibleItems) {
  // Si el item seleccionado está arriba del viewport, ajustar
  if (selectedIndex < currentOffset) {
    return selectedIndex;
  }

  // Si el item seleccionado está abajo del viewport, ajustar
  if (selectedIndex >= currentOffset + maxVisibleItems) {
    return selectedIndex - maxVisibleItems + 1;
  }

  return currentOffset;
}

async function main() {
  const targetDir = process.argv[2] || process.cwd();

  let running = true;

  while (running) {
    console.log(`${colors.cyan}Scanning for scripts in: ${targetDir}${colors.reset}`);
    const scripts = await findScripts(targetDir);

    if (scripts.length === 0) {
      console.log(`${colors.yellow}No JavaScript or TypeScript files found in ${targetDir}${colors.reset}`);
      console.log(`${colors.gray}Press 'r' to refresh or 'q' to quit${colors.reset}`);

      readline.emitKeypressEvents(process.stdin);
      if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
      }

      const key = await new Promise((resolve) => {
        const handler = (str, key) => {
          process.stdin.removeListener('keypress', handler);
          resolve(key);
        };
        process.stdin.on('keypress', handler);
      });

      if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
        process.exit(0);
      }

      if (key.name === 'r') {
        continue; // Re-escanear
      }

      continue;
    }

    let selectedIndex = 0;
    let scrollOffset = 0;
    let inMenu = true;

    const terminalHeight = getTerminalHeight();
    const maxVisibleItems = terminalHeight - 8;

    // Configurar stdin para capturar teclas
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    displayMenu(scripts, selectedIndex, scrollOffset);

    while (inMenu) {
      const key = await new Promise((resolve) => {
        const handler = (str, key) => {
          process.stdin.removeListener('keypress', handler);
          resolve(key);
        };
        process.stdin.on('keypress', handler);
      });

      if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
        inMenu = false;
        running = false;
        break;
      }

      if (key.name === 'r') {
        inMenu = false;
        // Re-escanear carpeta
        break;
      }

      if (key.name === 'up') {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : scripts.length - 1;
        scrollOffset = calculateScrollOffset(selectedIndex, scrollOffset, maxVisibleItems);
        displayMenu(scripts, selectedIndex, scrollOffset);
      } else if (key.name === 'down') {
        selectedIndex = selectedIndex < scripts.length - 1 ? selectedIndex + 1 : 0;
        scrollOffset = calculateScrollOffset(selectedIndex, scrollOffset, maxVisibleItems);
        displayMenu(scripts, selectedIndex, scrollOffset);
      } else if (key.name === 'return') {
        process.stdin.setRawMode(false);
        process.stdin.pause();

        await executeScript(scripts[selectedIndex]);
        await waitForKey();

        if (process.stdin.isTTY) {
          process.stdin.setRawMode(true);
        }
        process.stdin.resume();
        displayMenu(scripts, selectedIndex, scrollOffset);
      }
    }
  }

  process.exit(0);
}

main().catch((error) => {
  console.error(`${colors.red}Error:${colors.reset}`, error.message);
  process.exit(1);
});

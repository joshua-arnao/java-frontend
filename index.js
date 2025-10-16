const fs = require('fs');
const path = require('path');

// Read package.json name and scripts
const pkgPath = path.join(__dirname, 'package.json');
let pkgName = 'Proyecto';
let scripts = {};
try {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkgName = pkg.name || pkgName;
  scripts = pkg.scripts || {};
} catch (e) {
  // fallback
}

// ASCII Art
const asciiArt = `
  ____  ____   ____   ____   ____   ____   ____
 |    ||    | |    | |    | |    | |    | |    |
 |____||____| |____| |____| |____| |____| |____|

   ${pkgName}
`;

console.log(asciiArt);

// Show available scripts
console.log('Comandos disponibles en package.json:');
Object.entries(scripts).forEach(([key, value]) => {
  console.log(`  npm run ${key}`);
});

console.log('\nPara más detalles, revisa el archivo README.md.');

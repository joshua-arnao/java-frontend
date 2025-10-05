export function example01() {
  console.log("\n::Templates Literals \n")

  // sirven para contruir plantillas basado en strings, sin necesidad de concadenar strings y variables

  // sin Templates Literals
  const nameLiteral = "Miguel";
  const mensajeSinTL = "Hola" + " " + "Soy un texto" + " " + " SIn template Literals y mi nombre es" + nameLiteral;
  console.log(mensajeSinTL)

  // para templates literals se usan backticks -> `
  // Soporta MULTILINEA
  console.log("\n\n::multilinea")
  const mensajeConTL = `Hola Soy Un texto sin templates Literals y mi nombre es ${nameLiteral}

aqui el contenido es multilinea y mi nombre es ->  ${nameLiteral}
aqui tambien ${nameLiteral} se puede construir templates multilinea
`;
  console.log(mensajeConTL);
}

export default { example01 }

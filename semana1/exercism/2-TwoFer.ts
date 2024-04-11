export function twoFer(name?:string): string {
    return `One for ${name || 'you'}, one for me.`
  }

  // El codigo recibe name el cual es opcional y de tipo string y devuelve
  // One for el name colocado, one for me. En el 
  // caso que no se proporcione ningun nombre devolvera, One for you,
  // one for me.
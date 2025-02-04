export function numeroALetras(numero: number): string {
  if (numero < 1 || numero > 1000) {
    return "Número fuera de rango";
  }

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  if (numero === 1000) return "mil"; 
  let resultado = "";

  const centena = Math.floor(numero / 100);
  const decena = Math.floor((numero % 100) / 10);
  const unidad = numero % 10;

  if (centena > 0) {
    if (centena === 1 && decena === 0 && unidad === 0) {
      return "cien"; 
    }
    resultado += centenas[centena] + " ";
  }

  if (decena === 1) {
    resultado += especiales[unidad]; 
  } else {
    if (decena > 1) {
      resultado += decenas[decena];
      if (unidad > 0) {
        resultado += " y ";
      }
    }
    if (unidad > 0) {
      resultado += unidades[unidad];
    }
  }

  return resultado.trim();
}

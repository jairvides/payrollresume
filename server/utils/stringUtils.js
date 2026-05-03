const normalizeContract = (val) => {
  if (!val) return '';
  let s = String(val).trim();
  
  // Si ya es una cadena de dígitos pura, la devolvemos tal cual para evitar cualquier transformación
  if (/^\d+$/.test(s)) {
    return s;
  }

  // Si el valor está en notación científica (ej. 1.00427E+11)
  if (s.toLowerCase().includes('e+')) {
    const num = Number(s);
    if (!isNaN(num)) {
      // Convertimos a string evitando la notación científica. 
      // Nota: Si Excel ya redondeó el valor, la precisión se perdió en el archivo.
      s = BigInt(Math.round(num)).toString();
    }
  }
  
  // Quitar cualquier carácter no numérico por seguridad
  return s.replace(/\D/g, '');
};

module.exports = { normalizeContract };

module.exports = { normalizeContract };
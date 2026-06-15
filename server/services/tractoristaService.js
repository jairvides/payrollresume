// services/tractoristaService.js

/**
 * Extrae el número dentro del paréntesis de una cadena como "(5 HAS)"
 * Devuelve 0 si no encuentra un número.
 */
function extraerHasDesdeDetalle(detalle) {
  const match = detalle.match(/\((\d+(?:\.\d+)?)\s*HAS\)/i);
  return match ? parseFloat(match[1]) : 0;
}

function procesarReporteTractoristas(acts, actNames) {
  const reporte = [];

  for (const contrato in acts) {
    let totalHas = 0;
    let esTractorista = false;

    acts[contrato].forEach(act => {
      const dv = String(act.digitoVerificacion || '').trim();
      
      // Filtrar por DV 504 o 136
      if (dv === 'DV504' || dv === 'DV136') {
        esTractorista = true;
        totalHas += extraerHasDesdeDetalle(act.detalle);
      }
    });

    if (esTractorista) {
      reporte.push({
        'ID_CONTRATO': contrato,
        'NOMBRE_TRABAJADOR': actNames[contrato] || 'Desconocido',
        'TOTAL_HAS': totalHas
      });
    }
  }
  return reporte;
}

module.exports = { procesarReporteTractoristas };
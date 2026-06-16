// server/services/tractoristaService.js
function extraerHasDesdeDetalle(detalle) {
  // Busca un número dentro de paréntesis seguido de la palabra HAS
  const match = detalle.match(/\((\d+(?:\.\d+)?)\s*HAS\)/i);
  return match ? parseFloat(match[1]) : 0;
}

function procesarReporteTractoristas(acts, actNames) {
  const reporte = [];
  for (const contrato in acts) {
    let totalHas = 0;
    let esTractorista = false;
    let sumaTotal =0;
    acts[contrato].forEach(act => {
      const dv = String(act.digitoVerificacion || '').trim();
      if (dv === 'DV504' || dv === 'DV136') {
        esTractorista = true;
        totalHas += extraerHasDesdeDetalle(act.detalle || '');
      }
    });
    if (esTractorista) {
      reporte.push({
        'ID_CONTRATO': contrato,
        'NOMBRE_TRABAJADOR': actNames[contrato] || 'Desconocido',
        'TOTAL_HAS': totalHas,
        'SUMA_TOTAL': totalHas*2300
      });
    }
  }
  return reporte;
}

module.exports = { procesarReporteTractoristas };
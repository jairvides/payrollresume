// 1. PRIMERO: Definimos las constantes (los Sets)
const REF_CC_269901 = new Set(['231', '232', '233', '234', '235', '236']);
const REF_CC_269504 = new Set(['237', '238', '239', '2310', '2311', '2312', '2313', '2314', '2315', '2316', '2317', '241']);
const REF_CC_269805 = new Set([
  '242', '243', '244', '245', '246', '2417', '2418', '2419', '2420', '2421',
  '2422', '2423', '2424', '2425', '2426', '2427', '2428', '2429', '2430', '2431',
  '2432', '2433', '2434', '2435', '2436', '2437', '2438', '2439', '251', '252',
  '253', '254'
]);
const REF_CC_269603 = new Set(['247', '248', '249', '2410', '2411', '2412', '2413', '2414', '2415', '2416']);
const REF_CC_269401 = new Set(['876', '877']);

// --- FUNCIÓN AUXILIAR PARA LLAVES FLEXIBLES ---
function obtenerValorFlexible(objeto, llavesPosibles) {
  const llaveReal = Object.keys(objeto).find(k =>
    llavesPosibles.includes(k.toLowerCase().replace(/[^a-z0-9]/g, ''))
  );
  return llaveReal ? objeto[llaveReal] : '';
}

function optimizarYSanitizarNomina(acts) {
  for (const contrato in acts) {
    acts[contrato] = acts[contrato].map(act => {
      const refLimpia = String(act.referencia || '').trim();

      // 1. Lógica de excepción (DV423 + 265510)
      const esExcepcion = String(act.digitoVerificacion || '').trim() === 'DV423' &&
        String(act.centroCosto || '').trim() === '265510';

      if (esExcepcion) {
        return {
          ...act,
          centroCostoCorregido: act.centroCosto,
          cantidadCorregida: 1 // Forzamos 1 en caso de excepción
        };
      }

      // 2. Lógica normal de CC
      let nuevoCC = null;
      if (REF_CC_269901.has(refLimpia)) nuevoCC = '269901';
      else if (REF_CC_269504.has(refLimpia)) nuevoCC = '269504';
      else if (REF_CC_269805.has(refLimpia)) nuevoCC = '269805';
      else if (REF_CC_269603.has(refLimpia)) nuevoCC = '269603';
      else if (REF_CC_269401.has(refLimpia)) nuevoCC = '269401';

      const valorOriginal = obtenerValorFlexible(act, ['centrocosto', 'centrodecosto', 'cc', 'centro_costo']);
      const centroCostoFinal = nuevoCC !== null ? nuevoCC : valorOriginal;

      // 3. Limpieza de Cantidad: Se hace aquí para que reconstruirLayoutPlano solo imprima
      // Elimina puntos de miles y toma la parte entera antes de la coma decimal
      let raw = String(act.cantidad || '0').trim();
      let soloDigitos = raw.replace(/\D/g, '');
      const cantidadFinal = parseInt(soloDigitos, 10) / 1000;

      return {
        ...act,
        centroCostoCorregido: centroCostoFinal,
        cantidadCorregida: cantidadFinal
      };
    });
  }
  return acts;
}

function reconstruirLayoutPlano(acts, actNames) {
  const filasAExportar = [];

  for (const contrato in acts) {
    // Ordenamos internamente por fecha
    acts[contrato].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    acts[contrato].forEach(act => {
      filasAExportar.push({
        'ID_CONTRATO': contrato,
        'NOMBRE_TRABAJADOR': actNames[contrato] || 'Desconocido',
        'DIGITO_VERIFICACION': act.digitoVerificacion || '',
        'CONCEPTO_DV': act.concepto || '',
        'CANTIDAD': act.cantidadCorregida, // Ya llega limpio desde optimizarYSanitizarNomina
        'TOTAL_1': '',
        'CENTRO_COSTO': act.centroCostoCorregido || '',
        'TOTAL_2': '',
        'DETALLE_ACTIVIDAD': act.detalle || '',
        'ITEM_CONTABLE': '',
        'FECHA': act.fecha || '',
        'REFERENCIA': act.referencia || ''
      });
    });
  }

  // Ordenar global por nombre de trabajador y luego por fecha
  filasAExportar.sort((a, b) => {
    const nombreA = a.NOMBRE_TRABAJADOR.toUpperCase();
    const nombreB = b.NOMBRE_TRABAJADOR.toUpperCase();
    if (nombreA !== nombreB) return nombreA.localeCompare(nombreB);
    return new Date(a.FECHA) - new Date(b.FECHA);
  });

  return filasAExportar;
}

module.exports = {
  optimizarYSanitizarNomina,
  reconstruirLayoutPlano
};
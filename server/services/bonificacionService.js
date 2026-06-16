/**
 * Genera un array de fechas entre dos strings (YYYY-MM-DD)
 */
function generarRangoFechas(inicio, fin) {
    const fechas = [];
    let actual = new Date(inicio);
    const fechaFinal = new Date(fin);

    while (actual <= fechaFinal) {
        fechas.push(actual.toISOString().split('T')[0]); // Formato YYYY-MM-DD
        actual.setDate(actual.getDate() + 1);
    }
    return fechas;
}

function procesarReporteBonificacion(acts, empleadosConfig, fechaInicio, fechaFin, valorUnidad = 4) {
    const fechas = generarRangoFechas(fechaInicio, fechaFin);
    const reporte = [];
    const totales = { FECHA: 'TOTAL',  CANTIDAD: 0, VALOR: 4 };
    empleadosConfig.forEach(emp => totales[emp.nombre] = 0);

    fechas.forEach(fecha => {
        let totalDia = 0;

        // Sumar las cantidades de todos los contratos para esa fecha específica
        for (const contrato in acts) {
            acts[contrato].forEach(act => {
                // console.log("Datos de actividad leídos:", act); // Que pasa aquí
                // Aseguramos comparar correctamente las fechas y el código
                if (act.fecha === fecha && act.digitoVerificacion === 'DV925') {
                    totalDia += parseFloat(act.cantidad || 0);
                }
            });
        }

        const fila = { FECHA: fecha, CANTIDAD: totalDia, VALOR: valorUnidad };
        empleadosConfig.forEach(emp => {
            const valorEmpleado = (totalDia / empleadosConfig.length) * valorUnidad;
            fila[emp.nombre] = valorEmpleado;
            totales[emp.nombre] += valorEmpleado;
        });
        totales.CANTIDAD += totalDia;
        reporte.push(fila);
    });

    reporte.push(totales);
    // console.log(reporte) // Imprime el reporte.push(totales)
    return reporte;
}

module.exports = { procesarReporteBonificacion };
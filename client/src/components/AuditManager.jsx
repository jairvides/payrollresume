import { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Loader2, Activity, FileDown, FileText, TableProperties } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function AuditManager() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem('audit_results');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('conflictos');
  const [dates, setDates] = useState({ fechaInicio: '', fechaFin: '', anio: new Date().getFullYear().toString() });

  useEffect(() => {
    if (result) {
      localStorage.setItem('audit_results', JSON.stringify(result));
    }
  }, [result]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setResult(null);
    localStorage.removeItem('audit_results');
    const formData = new FormData();
    formData.append('vigilancia', e.target.vigilancia.files[0]);
    formData.append('nomina', e.target.nomina.files[0]);
    formData.append('fechaInicio', dates.fechaInicio);
    formData.append('fechaFin', dates.fechaFin);
    formData.append('anio', dates.anio);
    try {
      const response = await axios.post('/api/auditoria/analizar', formData);
      setResult(response.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al procesar la auditoría'); }
    finally { setLoading(false); }
  };

  const exportToExcel = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `auditoria_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar el archivo'); }
  };

  const exportMatrizCSV = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar-matriz', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `matriz_laboral_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la matriz CSV'); }
  };

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Informe de Auditoría de Nómina', 14, 20);
      doc.setFontSize(11);
      doc.text(`Periodo: ${dates.fechaInicio} al ${dates.fechaFin} | Año: ${dates.anio}`, 14, 30);

      const sections = [
        { title: 'Conflictos', data: result.conflictos, cols: ['Contrato', 'Nombre', 'Fecha', 'Novedad', 'Actividad'] },
        { title: 'Faltantes', data: result.faltantes, cols: ['Contrato', 'Nombre', 'Estado'] },
        { title: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })), cols: ['Contrato', 'Nombre', 'Días Faltantes'] },
        { title: 'No Registrados', data: result.noRegistrados, cols: ['Contrato', 'Nombre'] },
        { title: 'Múltiples Actividades', data: result.multiples.map(m => ({ ...m, actividades: m.actividades.join(', ') })), cols: ['Contrato', 'Nombre', 'Fecha', 'Actividades'] },
      ];

      let currentY = 40;
      sections.forEach(section => {
        if (section.data.length === 0) return;
        
        doc.setFontSize(14);
        doc.text(section.title, 14, currentY);
        
        const tableData = section.data.map(row => 
          section.cols.map(col => {
            const key = col.toLowerCase().replace(' ', '_').replace('múltiples', 'multiples');
            const mapping = {
              'contrato': 'contrato',
              'nombre': 'nombre',
              'fecha': 'fecha',
              'novedad': 'novedad',
              'actividad': 'actividad',
              'estado': 'status',
              'días_faltantes': 'dias_faltantes',
              'actividades': 'actividades'
            };
            return row[mapping[key.toLowerCase()] || key];
          })
        );

        doc.autoTable({
          startY: currentY + 5,
          head: [section.cols],
          body: tableData,
          margin: { left: 14, right: 14 },
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185] }
        });
        
        currentY = doc.lastAutoTable.finalY + 15;
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
      });

      doc.save(`auditoria_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch { setError('Error al generar el PDF'); }
  };

  const renderTable = (data, columns) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map(col => <th key={col.key} className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">{col.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length > 0 ? data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm text-gray-600">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          )) : (
            <tr><td colSpan={columns.length} className="px-6 py-10 text-center text-gray-500">No se encontraron registros</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Activity size={20} className="text-blue-600" /> Configuración de Auditoría</h2>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaInicio} onChange={e => setDates({...dates, fechaInicio: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaFin} onChange={e => setDates({...dates, fechaFin: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Año</label><input type="number" required className="block w-full p-2 border rounded-lg" value={dates.anio} onChange={e => setDates({...dates, anio: e.target.value})}/></div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 mt-2">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Vigilancia (.xlsx)</label><input type="file" name="vigilancia" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Nómina (.xlsx)</label><input type="file" name="nomina" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/></div>
          </div>
          <div className="md:col-span-3"><button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50">{loading ? <><Loader2 className="animate-spin" size={20} /> Analizando...</> : <><Upload size={20} /> Ejecutar Auditoría</>}</button></div>
        </form>
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
      </div>

      {result && (
        <div className="animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 mr-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"><p className="text-sm text-gray-500">Conflictos</p><p className="text-2xl font-bold">{result.resumen.total_conflictos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500"><p className="text-sm text-gray-500">Faltantes</p><p className="text-2xl font-bold">{result.resumen.total_faltantes}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"><p className="text-sm text-gray-500">Inactivos</p><p className="text-2xl font-bold">{result.resumen.total_inactivos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"><p className="text-sm text-gray-500">No Registrados</p><p className="text-2xl font-bold">{result.resumen.total_no_registrados}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500"><p className="text-sm text-gray-500">Mult. Actividades</p><p className="text-2xl font-bold">{result.resumen.total_multiples}</p></div>
            </div>
            <div className="flex gap-2">
              <button onClick={exportToPDF} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileText size={20} /> PDF
              </button>
              <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileDown size={20} /> Excel
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              {['conflictos', 'faltantes', 'inactivos', 'noRegistrados', 'multiples', 'resumenDetalle', 'matriz'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab === 'conflictos' ? 'Conflictos' : tab === 'faltantes' ? 'Faltantes' : tab === 'inactivos' ? 'Inactivos' : tab === 'noRegistrados' ? 'No Registrados' : tab === 'multiples' ? 'Mult. Actividades' : tab === 'resumenDetalle' ? 'Resumen Detalles' : 'Matriz Laboral'}
                </button>
              ))}
            </div>
            
            <div className="p-0">
              {activeTab === 'conflictos' && renderTable(result.conflictos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'novedad', label: 'Novedad' },
                { key: 'actividad', label: 'Actividad' },
              ])}
              {activeTab === 'faltantes' && renderTable(result.faltantes, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'status', label: 'Estado' },
              ])}
              {activeTab === 'inactivos' && renderTable(result.inactivos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'dias_faltantes', label: 'Días Faltantes', render: row => row.dias_faltantes.join(', ') },
              ])}
              {activeTab === 'noRegistrados' && renderTable(result.noRegistrados, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
              ])}
              {activeTab === 'multiples' && renderTable(result.multiples, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'actividades', label: 'Actividades', render: row => row.actividades.join(', ') },
              ])}
              {activeTab === 'resumenDetalle' && renderTable(result.resumenDetalles, [
                { key: 'concepto', label: 'Nombre Concepto' },
                { key: 'detalle', label: 'Detalle' },
                { key: 'referencias', label: 'Referencias' },
              ])}
              {activeTab === 'matriz' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Matriz de Actividades Diarias</h3>
                    <button onClick={exportMatrizCSV} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm">
                      <FileDown size={20} /> Exportar Matriz CSV
                    </button>
                  </div>
                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase sticky left-0 bg-gray-50 z-10 border-r">Nombre</th>
                          {result.diasLaborales.map(date => {
                            const [, m, d] = date.split('-');
                            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
                            return <th key={date} className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase min-w-[80px]">{d} {months[parseInt(m)-1]}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {result.matriz.map((emp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white z-10 border-r">{emp.nombre}</td>
                            {result.diasLaborales.map(date => (
                              <td key={date} className="px-4 py-3 text-sm text-center text-gray-600">
                                {emp.conteo[date] || ''}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



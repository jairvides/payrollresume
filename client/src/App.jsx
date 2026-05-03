import { useState } from 'react';
import axios from 'axios';
import { 
  Upload, AlertTriangle, CheckCircle, Loader2, FileSpreadsheet, 
  Users, Activity, LayoutDashboard, FileText, Trash2, Search 
} from 'lucide-react';

// --- Componente: Gestor de Empleados ---
function EmployeeManager() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('/api/empleados');
      setEmployees(res.data);
    } catch (err) {
      console.error('Error fetching employees', err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    const formData = new FormData();
    formData.append('file', e.target.csvFile.files[0]);

    try {
      const res = await axios.post('/api/empleados/cargar', formData);
      setSuccess(res.data.message);
      
      if (res.data.warnings && res.data.warnings.length > 0) {
        setError(`Atención: Se detectaron ${res.data.warnings.length} contratos en notación científica. Los datos podrían estar redondeados por Excel. Por favor, exporte el CSV con formato de Texto.`);
      }
      
      await fetchEmployees();
    } catch (err) {
      setError(err.response?.data?.error || 'Error al cargar el archivo CSV');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useState(() => { fetchEmployees(); }, []); 

  const filteredEmployees = employees.filter(emp => 
    emp.nombre.toLowerCase().includes(search.toLowerCase()) || 
    emp.contrato.includes(search)
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Upload size={20} className="text-blue-600" /> Cargar Maestro de Empleados
        </h2>
        <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Archivo CSV (Contrato, Nombre)</label>
            <input type="file" name="csvFile" accept=".csv" required 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
          </div>
          <button type="submit" disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition disabled:opacity-50 flex items-center gap-2">
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Actualizar Maestro'}
          </button>
        </form>
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
        {success && <p className="mt-4 text-green-600 bg-green-50 p-3 rounded">{success}</p>}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold">Empleados Registrados ({employees.length})</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar empleado..." 
              className="pl-9 pr-4 py-1 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((emp, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.contrato}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.nombre}</td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr><td colSpan="2" className="px-6 py-10 text-center text-gray-400">No se encontraron empleados</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- Componente: Auditoría de Nómina ---
function AuditManager() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('conflictos');
  
  const [dates, setDates] = useState({
    fechaInicio: '',
    fechaFin: '',
    anio: new Date().getFullYear().toString()
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('vigilancia', e.target.vigilancia.files[0]);
    formData.append('nomina', e.target.nomina.files[0]);
    formData.append('fechaInicio', dates.fechaInicio);
    formData.append('fechaFin', dates.fechaFin);
    formData.append('anio', dates.anio);

    try {
      const response = await axios.post('/api/auditoria/analizar', formData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al procesar la auditoría');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity size={20} className="text-blue-600" /> Configuración de Auditoría
        </h2>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label>
            <input type="date" required className="block w-full p-2 border rounded-lg" 
              value={dates.fechaInicio} onChange={e => setDates({...dates, fechaInicio: e.target.value})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label>
            <input type="date" required className="block w-full p-2 border rounded-lg" 
              value={dates.fechaFin} onChange={e => setDates({...dates, fechaFin: e.target.value})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Año</label>
            <input type="number" required className="block w-full p-2 border rounded-lg" 
              value={dates.anio} onChange={e => setDates({...dates, anio: e.target.value})}/>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Archivo Vigilancia (.xlsx)</label>
              <input type="file" name="vigilancia" accept=".xlsx" required 
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Archivo Nómina (.xlsx)</label>
              <input type="file" name="nomina" accept=".xlsx" required 
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
            </div>
          </div>

          <div className="md:col-span-3">
            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50">
              {loading ? <><Loader2 className="animate-spin" size={20} /> Analizando Datos...</> : <><Upload size={20} /> Ejecutar Auditoría</>}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
      </div>

      {result && (
        <div className="animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
              <p className="text-sm text-gray-500">Conflictos</p>
              <p className="text-2xl font-bold">{result.resumen.total_conflictos}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
              <p className="text-sm text-gray-500">Faltantes</p>
              <p className="text-2xl font-bold">{result.resumen.total_faltantes}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-sm text-gray-500">Inactivos</p>
              <p className="text-2xl font-bold">{result.resumen.total_inactivos}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <p className="text-sm text-gray-500">No Registrados</p>
              <p className="text-2xl font-bold">{result.resumen.total_no_registrados}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <p className="text-sm text-gray-500">Mult. Actividades</p>
              <p className="text-2xl font-bold">{result.resumen.total_multiples}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b">
              <button onClick={() => setActiveTab('conflictos')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'conflictos' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>Conflictos</button>
              <button onClick={() => setActiveTab('faltantes')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'faltantes' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>Faltantes</button>
              <button onClick={() => setActiveTab('inactivos')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'inactivos' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>Inactivos</button>
              <button onClick={() => setActiveTab('noRegistrados')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'noRegistrados' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>No Registrados</button>
              <button onClick={() => setActiveTab('multiples')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'multiples' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>Mult. Actividades</button>
              <button onClick={() => setActiveTab('resumenDetalle')} className={`px-6 py-3 text-sm font-medium ${activeTab === 'resumenDetalle' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>Resumen Detalles</button>
            </div>
            
            <div className="p-0 overflow-x-auto">
              {activeTab === 'conflictos' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Novedad</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actividad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.conflictos.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{item.contrato}</td>
                        <td className="px-6 py-4 text-sm">{item.nombre}</td>
                        <td className="px-6 py-4 text-sm">{item.fecha}</td>
                        <td className="px-6 py-4 text-sm text-red-600 font-semibold">{item.novedad}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.actividad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'faltantes' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.faltantes.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{item.contrato}</td>
                        <td className="px-6 py-4 text-sm">{item.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'inactivos' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Días Faltantes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.inactivos.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{item.contrato}</td>
                        <td className="px-6 py-4 text-sm">{item.nombre}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {item.dias_faltantes.map(d => <span key={d} className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">{d}</span>)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'noRegistrados' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.noRegistrados.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{item.contrato}</td>
                        <td className="px-6 py-4 text-sm text-purple-600 font-semibold">{item.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'multiples' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contrato</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actividades</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.multiples.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{item.contrato}</td>
                        <td className="px-6 py-4 text-sm">{item.nombre}</td>
                        <td className="px-6 py-4 text-sm">{item.fecha}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {item.actividades.map((act, j) => (
                              <span key={j} className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
                                {act}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'resumenDetalle' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Detalles</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referencias</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {result.resumenDetalles.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.detalle}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.referencias}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Componente Principal App ---
function App() {
  const [activeTab, setActiveTab] = useState('audit');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-blue-800">
          <FileSpreadsheet size={28} className="text-blue-300" />
          <span className="font-bold text-lg leading-tight">Auditoría<br/>Nómina</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('employees')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'employees' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Users size={20} /> Maestro Empleados
          </button>
          <button 
            onClick={() => setActiveTab('audit')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'audit' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Activity size={20} /> Analizar Auditoría
          </button>
        </nav>
        
        <div className="p-4 border-t border-blue-800 text-xs text-blue-300 text-center">
          v1.0.0 - Sistema de Auditoría
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {activeTab === 'employees' ? 'Gestión de Empleados' : 'Auditoría de Nómina'}
            </h1>
            <p className="text-gray-500 mt-1">
              {activeTab === 'employees' ? 'Carga y administración del listado maestro' : 'Detección de conflictos, faltantes e inactivos'}
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
            {new Date().toLocaleDateString()}
          </div>
        </header>

        {activeTab === 'employees' ? <EmployeeManager /> : <AuditManager />}
      </main>
    </div>
  );
}

export default App;
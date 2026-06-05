import { useState, useEffect } from 'react';
import axios from 'axios';

// Configurar baseURL para producción si se define la variable Vite
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';
import { Upload, Loader2, Search, UserPlus, X, FileDown } from 'lucide-react';

export default function EmployeeManager() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  
  // Estado para el modal de agregar empleado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ nombre: '', contrato: '' });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch (err) {
        console.error('Error fetching employees', err);
        setError('No se pudo cargar la lista de empleados. Ver consola para más detalles.');
      }
    };
    fetchEmployees();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    const formData = new FormData();
    if (!e.target.csvFile.files[0]) {
      setError('Por favor seleccione un archivo');
      setLoading(false);
      return;
    }
    formData.append('file', e.target.csvFile.files[0]);
    try {
      const res = await axios.post('/api/empleados/cargar', formData);
      setSuccess(res.data.message);
      if (res.data.warnings && res.data.warnings.length > 0) {
        setError(`Atención: Se detectaron ${res.data.warnings.length} contratos en notación científica. Por favor, exporte el CSV con formato de Texto.`);
      }
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al cargar el archivo CSV'); }
    finally { setLoading(false); }
  };

  const handleAddNewEmployee = async (e) => {
    e.preventDefault();
    setAdding(true); setError(''); setSuccess('');
    try {
      const res = await axios.post('/api/empleados', newEmployee);
      setSuccess(res.data.message);
      setIsModalOpen(false);
      setNewEmployee({ nombre: '', contrato: '' });
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al agregar el empleado'); }
    finally { setAdding(false); }
  };

  const handleExportEmployees = async () => {
    try {
      const response = await axios.get('/api/empleados/exportar', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `maestro_empleados_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la lista de empleados'); }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.nombre.toLowerCase().includes(search.toLowerCase()) || emp.contrato.includes(search)
  );

  const toggleStatus = async (contrato, currentStatus) => {
    const newStatus = currentStatus === 'activo' ? 'inactivo' : 'activo';
    try {
      await axios.put(`/api/empleados/${contrato}`, { status: newStatus });
      const res = await axios.get('/api/empleados');
      setEmployees(res.data);
    } catch { setError('Error al cambiar el estado'); }
  };

  const deleteEmployee = async (contrato) => {
    if(confirm('¿Estás seguro de eliminar este empleado?')) {
      try {
        await axios.delete(`/api/empleados/${contrato}`);
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch { setError('Error al eliminar el empleado'); }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Empleados</h1>
        <div className="flex gap-2 items-center">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Agregar Empleado
          </button>
          <button 
            onClick={handleExportEmployees}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-colors"
          >
            <FileDown className="w-4 h-4" /> Exportar Maestro
          </button>
          <form onSubmit={handleUpload} className="flex gap-2 items-center">
            <input type="file" name="csvFile" accept=".csv" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2 transition-colors">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <Upload className="w-4 h-4" /> Cargar CSV
            </button>
          </form>
        </div>
      </div>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Buscar por nombre o contrato..." 
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Contrato</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Nombre</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Estado</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.contrato}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.nombre}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status === 'activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right flex justify-end gap-3">
                    <button onClick={() => toggleStatus(emp.contrato, emp.status)} className="text-blue-600 hover:text-blue-800 font-medium">
                      {emp.status === 'activo' ? 'Desactivar' : 'Activar'}
                    </button>
                    <button onClick={() => deleteEmployee(emp.contrato)} className="text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-gray-500">No se encontraron empleados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar empleado */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">Agregar Nuevo Empleado</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddNewEmployee} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.nombre}
                  onChange={e => setNewEmployee({...newEmployee, nombre: e.target.value})}
                  placeholder="Ej. Juan Perez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de Contrato / Cédula</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.contrato}
                  onChange={e => setNewEmployee({...newEmployee, contrato: e.target.value})}
                  placeholder="Ej. 100427300941"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={adding} 
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {adding && <Loader2 className="w-4 h-4 animate-spin" />}
                  Guardar Empleado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

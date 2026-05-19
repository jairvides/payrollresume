import { useState } from 'react';
import { FileSpreadsheet, Users, Activity } from 'lucide-react';
import EmployeeManager from './components/EmployeeManager';
import AuditManager from './components/AuditManager';

export default function App() {
  const [activeTab, setActiveTab] = useState('audit');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-blue-800">
          <FileSpreadsheet size={28} className="text-blue-300" />
          <span className="font-bold text-lg leading-tight">Auditoría<br/>Nómina</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('employees')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'employees' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Users size={20} /> Maestro Empleados
          </button>
          <button onClick={() => setActiveTab('audit')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'audit' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Activity size={20} /> Analizar Auditoría
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {activeTab === 'employees' ? 'Gestión de Empleados' : 'Auditoría de Nómina'}
            </h1>
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
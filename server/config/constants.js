const FESTIVOS_COLOMBIA = {
  2026: [
    { mes: 1, dia: 1, nombre: "Año Nuevo" },
    { mes: 1, dia: 6, nombre: "Dia de los Reyes Magos" },
    { mes: 1, dia: 12, nombre: "Dia de San Juan" },
    { mes: 1, dia: 20, nombre: "Dia de San José" },
    { mes: 2, dia: 16, nombre: "Dia de la Constitución" },
    { mes: 2, dia: 23, nombre: "Dia de la Cultura" },
    { mes: 3, dia: 23, nombre: "Semana Santa" },
    { mes: 4, dia: 2, nombre: "Jueves Santo" },
    { mes: 4, dia: 3, nombre: "Viernes Santo" },
    { mes: 5, dia: 1, nombre: "Dia del Trabajo" },
    { mes: 5, dia: 18, nombre: "Dia de la Ascensión" },
    { mes: 6, dia: 15, nombre: "Corpus Christi" },
    { mes: 6, dia: 29, nombre: "San Pedro y San Pablo" },
    { mes: 7, dia: 20, nombre: "Dia de la Independencia" },
    { mes: 8, dia: 7, nombre: "Batalla de Boyacá" },
    { mes: 8, dia: 24, nombre: "Maria Stella" },
    { mes: 10, dia: 12, nombre: "Dia de la Raza" },
    { mes: 10, dia: 17, nombre: "Dia de la Universidad" },
    { mes: 11, dia: 2, nombre: "Dia de los Difuntos" },
    { mes: 11, dia: 16, nombre: "Dia de Cartagena" },
    { mes: 12, dia: 8, nombre: "Inmaculada Concepción" },
    { mes: 12, dia: 25, nombre: "Navidad" }
  ]
};

const TIPOS_VALIDOS_VIGILANCIA = ['EMG', 'AT', 'PERM', 'INAS', 'LLUTO', 'LEY MARÍA', 'VAC', 'SUSP', 'HOSP', 'NUEVO'];

module.exports = { FESTIVOS_COLOMBIA, TIPOS_VALIDOS_VIGILANCIA };
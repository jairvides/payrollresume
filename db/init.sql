-- Initialize database schema
CREATE TABLE IF NOT EXISTS workers (
    id SERIAL PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre TEXT NOT NULL,
    area TEXT
);

CREATE TABLE IF NOT EXISTS novelties (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    tipo VARCHAR(20) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    observacion TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha_inicio, tipo)
);

CREATE TABLE IF NOT EXISTS payroll_records (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    concepto VARCHAR(50),
    detalle TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha, concepto)
);

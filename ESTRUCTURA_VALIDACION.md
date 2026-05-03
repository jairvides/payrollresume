# Validación de Estructura del Proyecto - Correcciones Aplicadas

## Problemas Encontrados y Solucionados

### 1️⃣ **Docker Compose - Puertos No Expuestos**
**Problema:** El servicio `app` no mapeaba el puerto 3001 al host.
- ❌ Antes: Sin mapeo de puertos
- ✅ Después: Agregado `ports: ["3000:3000", "3001:3001"]`

**Ubicación:** `/docker-compose.yml`

---

### 2️⃣ **Vite - Sin Proxy al Backend**
**Problema:** El cliente (Vite) no tenía configurado proxy para redirigir llamadas API.
- ❌ Antes: Sin configuración de servidor proxy
- ✅ Después: Configurado proxy que redirige `/api/*` a `http://localhost:3001`

**Ubicación:** `/client/vite.config.js`

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    }
  }
}
```

---

### 3️⃣ **Hardcoded URLs en el Cliente**
**Problema:** La URL del backend estaba hardcodeada como `http://localhost:3001/api/cargar`
- ❌ Antes: `axios.post('http://localhost:3001/api/cargar', ...)`
- ✅ Después: `axios.post('/api/cargar', ...)` (URL relativa funciona con proxy)

**Ubicación:** `/client/src/App.jsx` (línea 26)

---

### 4️⃣ **Variables de Entorno No Configuradas**
**Problema:** El servidor no tenía archivo `.env` configurado.
- ✅ Creado: `/server/.env` con variables necesarias
- ✅ Creado: `/server/.env.example` como referencia

**Contenido:**
```env
DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
PORT=3001
NODE_ENV=development
```

---

### 5️⃣ **Puerto No Utiliza Variable de Entorno**
**Problema:** Server.js tenía puerto hardcodeado.
- ❌ Antes: `const PORT = 3001;`
- ✅ Después: `const PORT = process.env.PORT || 3001;`

**Ubicación:** `/server/server.js` (última sección)

---

## ✅ Lista de Verificación - Estructura Correcta

- ✅ Docker Compose expone puertos 3000 y 3001
- ✅ Vite con proxy configurado para /api
- ✅ URLs relativas en cliente (no hardcodeadas)
- ✅ Variables de entorno configuradas
- ✅ Server.js lee PORT desde .env
- ✅ Bases de datos (tablas) creadas en `/db/init.sql`

---

## 🚀 Próximos Pasos

1. **Ejecutar el servidor:**
   ```bash
   cd server
   npm install  # Si no está instalado
   node server.js
   ```

2. **Ejecutar el cliente (en otra terminal):**
   ```bash
   cd client
   npm install  # Si no está instalado
   npm run dev
   ```

3. **Acceder en navegador:**
   - Frontend: `http://localhost:5173` (Vite default)
   - Backend: `http://localhost:3001` (Express)
   - Base de datos: `localhost:5432` (PostgreSQL)

---

## 🔧 Troubleshooting

**Error: "Cannot connect to database"**
- Verificar que PostgreSQL esté corriendo
- Confirmar `DATABASE_URL` es correcta en `.env`
- Verificar que las tablas estén creadas (ver `/db/init.sql`)

**Error: "Cannot POST /api/cargar"**
- Verificar que servidor esté corriendo en puerto 3001
- Verificar proxy de Vite esté activo
- Revisar console del navegador para CORS errors

**CORS Error en navegador**
- Proxy de Vite debe redirigir `/api` → backend
- Server debe tener CORS configurado (ya está con `app.use(cors())`)

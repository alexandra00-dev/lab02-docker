const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const responseData = {
    status: 'success',
    message: 'API respondiendo correctamente',
    container_id: process.env.HOSTNAME || 'instancia-local',
    timestamp: new Date().toISOString(),
    database_config: {
      host: process.env.DB_HOST || 'no definido',
      port: process.env.DB_PORT || 'no definido',
      database: process.env.DB_NAME || 'no definido',
      user: process.env.DB_USER || 'no definido'
    }
  };

  res.end(JSON.stringify(responseData, null, 2));
});

server.listen(PORT, () => {
  console.log(`[API] Servidor iniciado en el puerto ${PORT} (Contenedor: ${process.env.HOSTNAME || 'local'})`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Información de la empresa almacenada directamente en memoria (sin BD)
const companyInfo = {
  name: "Angostura TICS",
  acronym: "Tecnologías Inteligentes Corriendo Seguramente",
  slogan: "Asegurando el futuro de tus aplicaciones existentes.",
  about: "En Angostura TICS nos especializamos en la evaluación, desarrollo e implementación de capas de seguridad robustas para aplicaciones web y móviles que ya se encuentran en producción o en etapas avanzadas de desarrollo.",
  services: [
    {
      title: "Auditoría e Implementación de Seguridad",
      description: "Analizamos el código existente e integramos mecanismos de protección contra vulnerabilidades comunes (OWASP Top 10)."
    },
    {
      title: "Cifrado y Protección de Datos",
      description: "Implementamos esquemas de encriptación end-to-end e integración de tokens de autenticación seguros (JWT, OAuth2)."
    },
    {
      title: "Hardening de Aplicaciones",
      description: "Reforzamos la arquitectura de software existente sin interrumpir la operación continua del negocio."
    }
  ],
  contact: {
    email: "contacto@angosturatics.com",
    phone: "+52 (844) 123-4567"
  }
};

// Endpoint API para obtener la información de la empresa
app.get('/api/info', (req, res) => {
  res.json(companyInfo);
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(` Servidor de ${companyInfo.name} `);
  console.log(` Corriendo en http://localhost:${PORT}`);
  console.log(`=================================`);
});
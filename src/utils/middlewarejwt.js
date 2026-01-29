const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // 1. Obtener el token del header 'Authorization'
    // Se espera el formato: "Bearer <token>"
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    // Si no hay token, cortamos la comunicación aquí mismo
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Se requiere token.' });
    }

    try {
        // 2. Validar el token con la clave secreta
        // Si el token expiró o fue alterado, saltará al bloque 'catch'
        // Middleware
        const {email} = jwt.verify(token, process.env.JWT_SECRET);
        req.email =email; // Guardamos el email en req

        // 4. Dar luz verde para pasar a la siguiente función
        next(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports={verifyToken};
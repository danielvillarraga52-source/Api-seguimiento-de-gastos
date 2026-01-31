
📊 Expense Tracker API (Gestor de Gastos)

Esta es una API REST construida con Node.js y Express para gestionar gastos personales. Utiliza PostgreSQL como base de datos y Sequelize como ORM para el manejo de los datos y filtros avanzados.

🛠️ Tecnologías utilizadas

-Node.js & Express: Servidor y manejo de rutas.

-PostgreSQL: Base de datos relacional.

-Sequelize: ORM para consultas y modelos.

-UUID: Para identificadores de registros únicos y seguros.

🗄️ Modelo de Datos (Tasks/Gastos)

Cada "Task" o Gasto cuenta con las siguientes propiedades:

Campo | Tipo | Descripción
id     UUID   Identificador único autogenerado.
monto  FLOAT  Valor del gasto (por defecto 0.0).
fecha  DATE   Fecha en que se realizó el gasto.
categoriaENUMCategoría (Comestibles, Ocio, Salud, etc.)
UserId UUID  Relación con el usuario que creó el gasto

🚀 Endpoints Principales

1. Obtener Gastos (con filtros temporales)

GET /tasks

Este endpoint es dinámico. Puedes enviar parámetros en la URL (Query Params) para filtrar los resultados:

    Sin filtros: Trae todos los registros.

    Semana pasada: ?filtro=semana

    Mes pasado: ?filtro=mes

    Últimos 3 meses: ?filtro=3_meses

    Personalizado: ?filtro=personalizado&inicio=YYYY-MM-DD&fin=YYYY-MM-DD

POST /tasks

    {
    "monto": 50.5,
    "fecha": "2024-05-20",
    "categoria": "Comestibles",
    "UserId": "ID_DEL_USUARIO"
    }

3. Otras Operaciones

    GET /tasks/:id: Obtiene el detalle de un gasto específico.

    PUT /tasks/:id: Actualiza monto, fecha o categoría.

    DELETE /tasks/:id: Elimina un registro de la base de datos.

🔍 Lógica de Filtrado

La API utiliza los operadores de Sequelize (Op.gte, Op.between) para filtrar directamente en la base de datos. Esto optimiza el rendimiento al no tener que procesar miles de datos en el servidor de Node.js, delegando la carga a PostgreSQL.

⚙️ Instalación y Configuración
 
    -Clonar el repositorio.

    -Instalar dependencias:

    npm install

-Configurar variables de entorno: Crear un archivo .env con las credenciales de tu base de datos (DB_USER,      DB_PASSWORD, DB_HOST, etc.).

-Iniciar el servidor:
    npm start
    


import sqlite3

# Conexión a la base de datos
conexion = sqlite3.connect('MakersData.db')

# Crear un cursor para ejecutar comandos SQL
conn = conexion.cursor()

conn.execute('''
    CREATE TABLE IF NOT EXISTS productos (
        id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        marca TEXT NOT NULL,
        descripcion TEXT,
        precio REAL NOT NULL,
        categoria TEXT NOT NULL,
        cantidad INTEGER NOT NULL
    )
''')

# Crear tabla de ventas
conn.execute('''
    CREATE TABLE IF NOT EXISTS ventas (
        id_venta INTEGER PRIMARY KEY AUTOINCREMENT,
        id_producto INTEGER NOT NULL,
        cantidad_venta INTEGER NOT NULL,
        fecha_venta TEXT NOT NULL,
        FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
    )
''')

# Confirmar los cambios
conexion.commit()
# Cerrar la conexión
conexion.close()


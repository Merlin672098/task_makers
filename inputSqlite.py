import sqlite3

# Conectar de nuevo a la base de datos
conexion = sqlite3.connect('MakersData.db')
cursor = conexion.cursor()

# Insertar un producto
cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Macbook Pro','Apple', 'Laptop de 15 pulgadas', 1200.00 , 'Computadoras', '13')
''')

# Insertar una venta
cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (1, 2, '2024/10/19')
''')

# Confirmar los cambios
conexion.commit()

# Cerrar la conexión
conexion.close()

print("Datos insertados correctamente.")
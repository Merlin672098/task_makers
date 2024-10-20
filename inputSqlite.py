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

# Insertar productos con diferentes marcas, categorías y precios
cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('XPS 13', 'Dell', 'Laptop ultradelgada de 13 pulgadas', 1000.00, 'Computadoras', '8')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Galaxy S21', 'Samsung', 'Smartphone de 6.2 pulgadas', 799.99, 'Teléfonos', '25')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('PlayStation 5', 'Sony', 'Consola de videojuegos de última generación', 499.00, 'Videojuegos', '15')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('iPhone 13', 'Apple', 'Smartphone de 6.1 pulgadas', 899.00, 'Teléfonos', '10')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Surface Pro 7', 'Microsoft', 'Tableta convertible de 12.3 pulgadas', 750.00, 'Computadoras', '5')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Echo Dot 4ta Gen', 'Amazon', 'Altavoz inteligente con Alexa', 50.00, 'Electrónica', '30')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Apple Watch Series 7', 'Apple', 'Reloj inteligente', 399.00, 'Electrónica', '7')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('iPad Pro', 'Apple', 'Tableta de 11 pulgadas con M1', 899.00, 'Computadoras', '6')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Oculus Quest 2', 'Meta', 'Gafas de realidad virtual standalone', 299.00, 'Videojuegos', '12')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('Sony WH-1000XM4', 'Sony', 'Auriculares con cancelación de ruido', 350.00, 'Electrónica', '20')
''')

cursor.execute('''
    INSERT INTO productos (nombre, marca, descripcion, precio, categoria, cantidad)
    VALUES ('HP Spectre x360', 'HP', 'Laptop convertible de 14 pulgadas', 1100.00, 'Computadoras', '9')
''')


# Insertar ventas de productos con diferentes IDs y cantidades
cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (2, 1, '2024/10/18')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (3, 3, '2024/10/19')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (4, 1, '2024/10/17')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (5, 2, '2024/10/19')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (6, 4, '2024/10/16')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (7, 1, '2024/10/15')
''')

cursor.execute('''
    INSERT INTO ventas (id_producto, cantidad_venta, fecha_venta)
    VALUES (8, 5, '2024/10/14')
''')


# Confirmar los cambios
conexion.commit()

# Cerrar la conexión
conexion.close()

print("Datos insertados correctamente.")
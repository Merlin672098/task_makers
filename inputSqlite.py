import sqlite3

conn = sqlite3.connect("mqtt_data.sqlite")
cursor = conn.cursor()

cursor.execute('''
    INSERT INTO mqtt_data (id_Refri,temperatura,alarma,wifi_datos,bat_elec)
        VALUES(2,210,0,"Wifi","Corriente")
''')

conn.commit()
conn.close()
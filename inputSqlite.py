import sqlite3

conn = sqlite3.connect("MakersDB.sqlite")
cursor = conn.cursor()

cursor.execute('''
    INSERT INTO MakersDB (id_Refri,temperatura,alarma,wifi_datos,bat_elec)
        VALUES(2,210,0,"Wifi","Corriente")
''')

conn.commit()
conn.close()
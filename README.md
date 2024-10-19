# task_makers

Creamos un Virtual Envirement

1.- Solo se crea 1 vez
python3 -m venv venv

Apartir de ahora es solo activarlo

Linux/max = source venv/bin/activate
Windows =  venv\Scripts\activate


2.- descargamos las librerías en el VENV ( Este paso solo se hace al agregar una librería o activar el VENV por primera vez)

 - pip install -r requirements.txt

3.- Incompatibilidades
en caso que exista alguna incompatibilidad utilizan el siguiente comando.
        
        pip3 freeze | xargs pip3 uninstall -y

4.- Para el cuarto paso es hacer las instancias de flask y darle run al localhost.

En la misma carpeta de Task_makers en el documento de requirements.txt no debe de salir ninguna librería subrayada o que no se encontro es por eso que instalamos requirements si ya hicieron el paso anterior muchas veces VS se traba y pueden utilizar shift + cmd + p y en las opciones de despliegue reload window hasta que no esten subrayadas las librerías o cierran y abren VScode.

5.- RUN a flask

    En la terminal seguimos en la ruta de Task_makers en donde utilizaremos los siguientes comandos para pueda funcionar el localhost de flask

    - export FLASK_APP=main.py

    main.py es el archivo en donde esta declarada la app de flask, para verificar que si esta correctamente instanciado utilizan

    - echo $FLASK_APP

    y debe de salir como respuesta main.py
 
    (ejemplo)
    (
        (venv) larome@MacBook-Pro-de-Luis-9 Task_makers % echo $FLASK_APP
        main.py
    )
    - Para empezar a cargar la aplicación de flask utilizan el comando.

    - flask run

    y debe de cargar localhost:5000 que es su puerto o en su navegador teclean localhost:5000 y deben de ver la app viva.

    En su terminal se debe de ver algo así.

    (ejemplo)

    (
        (venv) larome@MacBook-Pro-de-Luis-9 Task_makers % flask run
        * Serving Flask app 'main.py'
        * Debug mode: off
        WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
        * Running on http://127.0.0.1:5000
        Press CTRL+C to quit
    )

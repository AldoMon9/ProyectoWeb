from flask import Flask, request
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Conexión a la base de datos
try:
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Americaa#9",
        database="proyectoweb "
    )
except Error as e:
    print("Error al conectarse a la base de datos", e)

@app.route('/registro', methods=['POST'])
def registro():
    # Obtiene los valores del formulario
    nombres = request.form['nombres']
    apellidos = request.form['apellidos']
    num_control = request.form['num_control']
    carrera = request.form['carrera']
    correo = request.form['correo']
    contraseña = request.form['contraseña']

    # Ejecuta la consulta SQL para insertar los valores en la base de datos
    try:
        cursor = mydb.cursor()
        sql = "INSERT INTO alumnos (num_control, nombres, apellidos, carrera, correo, contraseña) VALUES (%s, %s, %s, %s, %s, %s)"
        val = (num_control, nombres, apellidos, carrera, correo, contraseña)
        cursor.execute(sql, val)
        mydb.commit()
        print(cursor.rowcount, "registro agregado.")
    except Error as e:
        print("Error al insertar datos en la base de datos", e)

    # Cierra la conexión a la base de datos
    finally:
        if mydb.is_connected():
            cursor.close()
            mydb.close()
            print("Conexión a la base de datos cerrada")
    
    return "Registro exitoso"

if __name__ == '__main__':
    

    app.run()








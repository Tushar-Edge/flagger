from flask import Flask, appcontext_popped, render_template
from flask import Flask, jsonify
import json

from models import User
import mysql.connector


app = Flask(__name__)


@app.route('/')
def get_users():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Edge@86722768",
        database="test"
    )

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM student")
    rows = cursor.fetchall()

    users = []
    for row in rows:
        user = User(id=row[0], name=row[1])
        users.append(user.__dict__)

    conn.close()

    users_json = json.dumps(users)
    # Save the JSON data to a file
    with open('users.json', 'w') as f:
        f.write(users_json)

     # Return the JSON data to the client
    return jsonify(users)


# @app.route('/')
# def index():
#     return render_template('./report2/index.html')

if __name__ == '__main__':
    app.run(debug=True)
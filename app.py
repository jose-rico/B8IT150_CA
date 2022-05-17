from flask import Flask
from flask import request
from flask_mysqldb import MySQL
from flask_cors import CORS
import json
mysql = MySQL()
app = Flask(__name__)
CORS(app)
# My SQL Instance configurations
# Change the HOST IP and Password to match your instance configurations
app.config['MYSQL_USER'] = 'web'
app.config['MYSQL_PASSWORD'] = 'webPass'
app.config['MYSQL_DB'] = 'bike'
app.config['MYSQL_HOST'] = 'localhost' #for now
mysql.init_app(app)

@app.route("/add") #Add Student
def add():
  bike = request.args.get('bike')
  wheels = request.args.get('wheels')
  groupset = request.args.get('groupset')
  cur = mysql.connection.cursor() #create a connection to the SQL instance
  s='''INSERT INTO bikes(bike, wheels, groupset) VALUES('{}','{}','{}');'''.format(bike,wheels,groupset)
  cur.execute(s)
  mysql.connection.commit()
  return '{"Result":"Success"}'

@app.route("/delete") #Delete Student
def delete():
  id = request.args.get('id')
  cur = mysql.connection.cursor() #create a connection to the SQL instance
  s='''DELETE FROM bikes WHERE bikeID=%s;'''
  cur.execute(s,id)
  mysql.connection.commit()
  return '{"Result":"Success"}'
 
@app.route("/update") #Update Student
def update():
  bike = request.args.get('bike')
  wheels = request.args.get('wheels')
  groupset = request.args.get('groupset')
  id = request.args.get('id')
  cur = mysql.connection.cursor() #create a connection to the SQL instance
  s='''UPDATE bikes SET bike=%s, wheels=%s, groupset=%s WHERE bikeID=%s;'''
  cur.execute(s, (bike, wheels, groupset, id))
  mysql.connection.commit()
  return '{"Result":"Success"}'


@app.route("/") #Default - Show Data
def hello(): # Name of the method
  cur = mysql.connection.cursor() #create a connection to the SQL instance
  cur.execute('''SELECT * FROM bikes''') # execute an SQL statment
  rv = cur.fetchall() #Retreive all rows returend by the SQL statment
  Results=[]
  for row in rv: #Format the Output Results and add to return string
    Result={}
    print(row)
    Result['Bike']=row[0]#.replace('\n',' ') by disbling this it will handle records with no name add some javascritpt not allowing to insert null values!!!
    Result['Wheels']=row[1]
    Result['Groupset']=row[2]
    Result['ID']=row[3]
    Results.append(Result)
  response={'Results':Results, 'count':len(Results)}
  ret=app.response_class(
    response=json.dumps(response),
    status=200,
    mimetype='application/json'
  )
  return ret #Return the data in a string format
if __name__ == "__main__":
  app.run(host='0.0.0.0',port='8080', ssl_context=('/home/jose/cert.pem', '/home/jose/privkey.pem')) #Run the flask app at port 8080
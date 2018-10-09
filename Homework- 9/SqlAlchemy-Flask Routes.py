 # sqlaclchemy SqlAlchemy homework- part 2
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import Flask, jsonify
import datetime as dt


engine= create_engine("sqlite:///hawaii.sqlite")
session= Session(engine)
app = Flask(__name__)

#Flask routes

@app.route("/")

def home():
    return('/api/v1.0/precipitation', '/api/v1.0/stations', '/api/v1.0/tobs', '/api/v1.0/<start>/<end>')

@app.route("/api/v1.0/precipitation")

def precipitation():
    prev_year=dt.date.today()-dt.timedelta(days=700)
    result= session.query(Measurement.date, Measurement.prcp).filter(Measurement.date>=prev_year).all()
    return jsonify(result)

@app.route("/api/v1.0/stations")

def stations():
    station_query= session.query(func.count(Measurement.station)).group_by(Measurement.station).order_by(func.count(Measurement.station).desc()).all()
    return jsonify(station_query)


@app.route("/api/v1.0/tobs")

def tobs():
    tobs= session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
        filter(Measurement.date >= start_date).filter(Measurement.date <= end_date).all()

    return jsonify(tobs)

@app.route("/api/v1.0/<start>/<end>")

def start_end():
    




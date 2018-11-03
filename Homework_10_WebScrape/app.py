from flask import Flask, render_template
from flask_pymongo import PyMongo
import Scrape_Mars
import time



app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars"
mongo = PyMongo(app)

@app.route("/")
def index():
    mars = mongo.db.mars.find_one()
    return render_template("index.html", mars=mars)

@app.route("/scrape")
def scrape():
    # upload the_list to mongodb so that it can be accessed by flask app
    mars_db = mongo.db.mars
    mars_data = Scrape_Mars.scrape()
    mars_db.update(
        {},
        mars_data,
        upsert=True
    )
    return "scrape successful"

if __name__ == '__main__':
    app.run(debug=True)
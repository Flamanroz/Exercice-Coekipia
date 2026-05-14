from flask import Flask, jsonify, request
from flask_cors import CORS

from catalog import catalog, filtered_brand_catalog

app = Flask(__name__)
CORS(app)

@app.route('/cars', methods=["GET"])
def get_cars():

    print("BACKEND PYTHON SÉLECTIONÉ")

    brand = request.args.get("brand")
    model = request.args.get("model")
    car_type = request.args.get("type")


    filtered_catalog = filtered_brand_catalog(
        catalog,
        car_brand=brand,
        car_model=model,
        car_type=car_type
    )

    cars_json =  [car.to_dict() for car in filtered_catalog]

    return jsonify(cars_json)

if __name__ == "__main__":
    app.run(debug=True)
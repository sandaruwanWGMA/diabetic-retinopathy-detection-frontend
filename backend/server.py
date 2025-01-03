from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS
import pickle
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(
    app, resources={r"/*": {"origins": ["http://localhost:3000"]}}
)  # Allow requests from the frontend

# Load the trained model
with open("model.pkl", "rb") as model_file:
    model = pickle.load(model_file)


@app.route("/", methods=["GET"])
def index():
    return "Flask is running! Use the /predict endpoint for predictions."


@app.route("/predict", methods=["POST"])
def predict():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file provided"}), 400

    try:
        image = Image.open(file).convert("L")  # Convert to grayscale
        image = image.resize((128, 128))  # Resize to match model input
        image_array = np.array(image).flatten()  # Flatten to 4096 features
        image_array = image_array / 255.0  # Normalize
        image_array = image_array.reshape(1, -1)  # Reshape for the model

        prediction = model.predict(image_array)
        predicted_class = int(prediction[0])

        CLASSES = ["No DR", "Mild DR", "Moderate DR", "Severe DR", "Proliferative DR"]
        predicted_label = CLASSES[predicted_class]

        return jsonify({"class": predicted_label})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

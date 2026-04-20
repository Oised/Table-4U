import joblib
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

model = joblib.load("modelo_xgboost.pkl")
cols = joblib.load("colunas.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    df = pd.DataFrame([data])

    # criar features igual treino
    df["hora"] = pd.to_datetime(df["Check_in"]).dt.hour
    df["dia_semana"] = pd.to_datetime(df["Check_in"]).dt.weekday
    df["mes"] = pd.to_datetime(df["Check_in"]).dt.month
    df["fim_de_semana"] = df["dia_semana"].isin([5,6]).astype(int)

    def periodo(h):
        if 11 <= h <= 14:
            return "almoco"
        elif 18 <= h <= 21:
            return "jantar"
        else:
            return "normal"

    df["periodo"] = df["hora"].apply(periodo)

    df["DAY(Check_in)"] = pd.to_datetime(df["Check_in"]).dt.day
    df["MONTH(Check_in)"] = df["mes"]
    df["WEEKDAY(Check_in)"] = df["dia_semana"]
    df["YEAR(Check_in)"] = pd.to_datetime(df["Check_in"]).dt.year

    # dummies
    df = pd.get_dummies(df)

    # alinhar colunas
    df = df.reindex(columns=cols, fill_value=0)

    pred = model.predict(df)[0]

    return jsonify({
        "tempo_espera_min": float(pred)
    })

if __name__ == "__main__":
    app.run(port=5000)
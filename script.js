document.getElementById("creditForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const income = Number(document.getElementById("income").value);
    const debt = Number(document.getElementById("debt").value);
    const history = Number(document.getElementById("history").value);
    const utilization = Number(document.getElementById("utilization").value);

    // ----- Feature Engineering -----
    const debtIncomeRatio = debt / income;

    // ----- Logistic Regression (Simulated) -----
    let score =
        (0.4 * (income / 10000)) +
        (0.3 * (history / 100)) -
        (0.2 * debtIncomeRatio) -
        (0.1 * (utilization / 100));

    // Sigmoid function
    const probability = 1 / (1 + Math.exp(-score));

    const prediction = probability >= 0.5 ? "Creditworthy ✅" : "High Risk ❌";

    // ----- Display Results -----
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("prediction").innerText = `Prediction: ${prediction}`;
    document.getElementById("score").innerText = `Credit Score Probability: ${(probability * 100).toFixed(2)}%`;

    // ----- Mock Model Metrics -----
    document.getElementById("precision").innerText = "0.82";
    document.getElementById("recall").innerText = "0.78";
    document.getElementById("f1").innerText = "0.80";
    document.getElementById("roc").innerText = "0.86";
});

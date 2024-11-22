function calculateBMR() {
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);

    if (
        isNaN(weight) ||
        isNaN(height) ||
        isNaN(age) ||
        weight <= 0 ||
        height <= 0 ||
        age <= 0
    ) {
        document.getElementById("result").innerHTML =
            "Please enter valid values for weight, height, and age.";
        document.getElementById("result").style.color = "white";
        return;
    }

    var bmr = 0;

    if (gender === "male") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    document.getElementById(
        "result"
    ).innerHTML = ` Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(
        2
    )} calories per day.`;
    document.getElementById("result").style.color = "white";
}
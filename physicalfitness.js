let currentGroup = 1;

const submit = document.getElementById('submitbtn');
const progressBar = document.getElementById("progressBar");

function updateProgressBar() {
    const progress = (currentGroup / 10) * 100; // Adjust the denominator based on the total number of question groups
    progressBar.style.width = `${progress}%`;
    if (currentGroup > 10) { // Change this number based on the number of question groups
        progressBar.style.display = 'none';
    }
}

function prevGroup() {
    const currentGroupElement = document.getElementById(`group${currentGroup}`);
    currentGroupElement.classList.remove('active');
    const submitbtn = document.getElementById("submitbtn");
    const nextbtn = document.getElementById("nextbtn");

    currentGroup--;

    if (currentGroup <= 1) {
        // If on the first group, hide the "Previous" button
        document.getElementById("prevbtn").style.display = 'none';
    }

    // Always show the "Next" button when moving to the previous group
    nextbtn.style.display = 'block';
    submitbtn.style.display = 'none';

    updateProgressBar();

    const prevGroupElement = document.getElementById(`group${currentGroup}`);
    prevGroupElement.classList.add('active');
}


function nextGroup() {
    const currentGroupElement = document.getElementById(`group${currentGroup}`);
    currentGroupElement.classList.remove('active');
    const submitbtn = document.getElementById("submitbtn");
    const nextbtn = document.getElementById("nextbtn");

    currentGroup++;

    if (currentGroup > 10) { // Change this number based on the number of question groups
        submitbtn.style.display = 'block';
        nextbtn.style.display = 'none';
    }
    updateProgressBar();

    const nextGroupElement = document.getElementById(`group${currentGroup}`);
    nextGroupElement.classList.add('active');
}

function submitForm() {
    const sleep = document.querySelector('input[name="sleep"]:checked');
    const nutrition = document.querySelector('input[name="nutrition"]:checked');
    const exercise = document.querySelector('input[name="exercise"]:checked');
    const strengthTraining = document.querySelector('input[name="strengthTraining"]:checked');
    const hydration = document.querySelector('input[name="hydration"]:checked');
    const flexibility = document.querySelector('input[name="flexibility"]:checked');
    const sitting = document.querySelector('input[name="sitting"]:checked');
    const outdoorActivities = document.querySelector('input[name="outdoorActivities"]:checked');
    const healthCheck = document.querySelector('input[name="healthCheck"]:checked');
    const wellBeing = document.querySelector('input[name="wellBeing"]:checked');

    if (
        !sleep || !nutrition || !exercise ||
        !strengthTraining || !hydration || !flexibility ||
        !sitting || !outdoorActivities || !healthCheck || !wellBeing
    ) {
        alert('Please answer all questions.');
        return;
    }

    const a = (sleep.value === '1') ? 1 : 0;
    const b = (nutrition.value === '1') ? 1 : 0;
    const c = (exercise.value === '1') ? 1 : 0;
    const d = (strengthTraining.value === '1') ? 1 : 0;
    const e = (hydration.value === '1') ? 1 : 0;
    const f = (flexibility.value === '1') ? 1 : 0;
    const g = (sitting.value === '1') ? 1 : 0;
    const h = (outdoorActivities.value === '1') ? 1 : 0;
    const i = (healthCheck.value === '1') ? 1 : 0;
    const j = (wellBeing.value === '1') ? 1 : 0;

    let result = '';

    const totalScore = a + b + c + d + e + f + g + h + i + j;

    if (totalScore >= 8) {
        result = 'Your physical health is EXCELLENT!';
    } else if (totalScore >= 5 && totalScore < 8) {
        result = 'Your physical health is GOOD!';
    } else if (totalScore >= 3 && totalScore < 5) {
        result = 'Your physical health is MODERATE!';
    } else {
        result = 'Your physical health needs attention. Consider consulting with a healthcare professional.';
    }

    document.getElementById('result').innerText = result;
}

updateProgressBar();

let totalCalories = 0;

        function trackCalories() {
            var foodItem = document.getElementById("foodItem").value;
            var calories = parseFloat(document.getElementById("calories").value);
            var dailyGoal = parseFloat(document.getElementById("dailyGoal").value);

            if (isNaN(dailyGoal) || dailyGoal <= 0) {
                document.getElementById("caloriesResult").innerHTML =
                    "Please enter a valid daily calorie intake goal.";
                document.getElementById("caloriesResult").style.color = "white";
                return;
            }

            if (foodItem.trim() === "" || isNaN(calories) || calories <= 0) {
                document.getElementById("caloriesResult").innerHTML =
                    "Please enter valid values for food item and calories.";
                document.getElementById("caloriesResult").style.color = "white";
                return;
            }

            totalCalories += calories;

            document.getElementById(
                "caloriesResult"
            ).innerHTML = `You consumed ${calories.toFixed(2)} calories with ${foodItem}.`;
            document.getElementById("caloriesResult").style.color = "white";

            document.getElementById("totalCalories").innerText = totalCalories.toFixed(2);

            if (totalCalories > dailyGoal) {
                alert("Daily calorie intake goal exceeded!");
            }

            addToCaloriesTable(foodItem, calories);
            clearInputFields();
        }

        function addToCaloriesTable(foodItem, calories) {
            const tableBody = document.getElementById("caloriesTableBody");
            const newRow = tableBody.insertRow(tableBody.rows.length);

            const cell1 = newRow.insertCell(0);
            cell1.innerText = foodItem;

            const cell2 = newRow.insertCell(1);
            cell2.innerText = calories.toFixed(2);

            const cell3 = newRow.insertCell(2);
            cell3.innerText = getCurrentDateTime();

            const cell4 = newRow.insertCell(3);
            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            removeButton.className = "remove-button";
            removeButton.onclick = function () {
                removeFromCaloriesTable(newRow, calories);
            };
            cell4.appendChild(removeButton);
        }

        function removeFromCaloriesTable(row, calories) {
            totalCalories -= calories;
            document.getElementById("totalCalories").innerText = totalCalories.toFixed(2);

            const tableBody = document.getElementById("caloriesTableBody");
            tableBody.removeChild(row);
        }

        function getCurrentDateTime() {
            const now = new Date();
            const formattedTime = formatTime(now);
            const formattedDate = formatDate(now);
            return `${formattedTime} - ${formattedDate}`;
        }

        function formatTime(date) {
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return `${formatNumber(hours)}:${formatNumber(minutes)} ${ampm}`;
        }

        function formatDate(date) {
            const day = formatNumber(date.getDate());
            const month = formatNumber(date.getMonth() + 1);
            const year = date.getFullYear();
            return `${day}:${month}:${year}`;
        }

        function formatNumber(number) {
            return number < 10 ? `0${number}` : number;
        }

        function clearInputFields() {
            document.getElementById("foodItem").value = "";
            document.getElementById("calories").value = "";
        }
let addExpenseButton = document.getElementsByClassName('add-expenses-button')[0],
    popups = document.getElementsByClassName("popups")[0],
    addExpensesPopup = document.getElementsByClassName("add-expenses-popup")[0],
    closepopup = document.getElementsByClassName("close-popup"),
    updateBudgetButton = document.getElementsByClassName('update-budget-button')[0],
    updateBudgetPopup = document.getElementsByClassName("update-budget-popup")[0],
    updateBudgetInput = document.getElementsByClassName("update-budget-input")[0],
    addExpensesInput = document.getElementsByClassName('add-expenses-input')[0],
    updateExpense = document.getElementsByName("updateExpenses"),
    updateBudget = document.getElementById("updateBudget"),
    budgetValueWrapper = document.getElementById("budget-value"),
    appMenuDropdown = document.getElementsByClassName("app-menu-dropdown")[0],
    appLinks = document.getElementsByClassName("app-links")[0]
    

    //Database
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB0TwuH9n3FhgBsJf05wqDtuPEvIoK3ImY",
        authDomain: "budgetapp-940f4.firebaseapp.com",
        databaseURL: "https://budgetapp-940f4.firebaseio.com",
        projectId: "budgetapp-940f4",
        storageBucket: "budgetapp-940f4.appspot.com",
        messagingSenderId: "432885896943",
        appId: "1:432885896943:web:85e1caa206239f1e432d1a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let database = firebase.database()
    console.log(database);
    
    let budgetAdded = database.ref("budgetValue/")

    //Showing App Links window to screen
    appMenuDropdown.onclick = function () {
        popups.style.transform = "translateY(0)"
        popups.style.zIndex = 1
        updateBudgetPopup.style.display = "none"
        addExpensesPopup.style.display = "none"
        appLinks.style.display = "block"
    }
    


    //Showing Update Budget window to screen
    updateBudgetButton.onclick = function () {
        popups.style.transform = "translateY(0)"
        popups.style.zIndex = 1
        updateBudgetPopup.style.display = "block"
        addExpensesPopup.style.display = "none"
        appLinks.style.display = "none"
    }

    //Updating Budget
    updateBudget.onclick = function() {
        budgetValue = parseInt(document.getElementById("budget-value").innerText)
        if(updateBudgetInput.value === "") {
            alert("budget value cannot be empty")
        }
        else if(updateBudgetInput.value === budgetValue) {
            alert("budget value is same as before")
        }
        else {
            budgetValueWrapper.innerText = updateBudgetInput.value
            addingBudgets()
            updateBudgetInput.value = ""
            popups.style.transform = "translateY(200%)"
        }
    }

    //Showing Add Expenses window to screen
    addExpenseButton.onclick = function () {
        popups.style.transform = "translateY(0)"
        popups.style.zIndex = 1
        addExpensesPopup.style.display = "block"
        updateBudgetPopup.style.display = "none"
        appLinks.style.display = "none"
    }

    for(let i = 0; i < closepopup.length; i++) {
        closepopup[i].onclick = function () {
            popups.style.transform = "translateY(200%)"
        }
    }


    //Charts
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue'],
            datasets: [{
                data: [12, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: false
        }
    });

    let d = new Date();
    console.log(d.getDate(), d.getMonth() + 1, d.getFullYear());
    let rightMonth = d.getMonth() + 1
    let lastUpdatedOn = d.getDate()+ ":" + rightMonth + ":" + d.getFullYear();
    function addingBudgets() {
        budgetAdded.child("ankit").set({
            "month": "November",
            "budgetValue": parseFloat(budgetValueWrapper.innerText),
            "updatedOn": lastUpdatedOn
        })
    }

    

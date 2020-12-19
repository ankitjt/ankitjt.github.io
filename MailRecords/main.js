let browserWindow = document.getElementsByTagName("body")[0],
    windowSize = document.getElementById("windowSize")

//Check Browser Window size
browserWindow.onresize = function () {
    if(browserWindow.clientWidth >= 501){
        windowSize.innerText = "Reduce window size"
    }
    else {
        windowSize.innerText = ""
    }
}

//Record Issue 

let recordIssueSubmitBtn = document.getElementsByClassName("submit-btn")[0],
    issueReceiveDate = document.getElementById("issue-receive-date"),
    issueReceiveTime = document.getElementById("issue-receive-time"),
    issueClosedDate = document.getElementById("issue-closed-date"),
    issueClosedTime = document.getElementById("issue-closed-time"),
    userType = document.getElementById("userType")

var firebaseConfig = {
    apiKey: "AIzaSyBGANJeZIeveinmTrhvmKAI3gKYptB1qc8",
    authDomain: "mailrecords.firebaseapp.com",
    projectId: "mailrecords",
    storageBucket: "mailrecords.appspot.com",
    messagingSenderId: "778038705923",
    appId: "1:778038705923:web:226f44feca27056187b336",
    measurementId: "G-Y5LN85DXJY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let database = firebase.database()
    const ankit = "ankit"
    let mailrecord = database.ref(`mailrecord/${ankit}`)
    let counter = 0

recordIssueSubmitBtn.onclick = function (e) {
    e.preventDefault();
    checkFormInputs ()
}

function checkFormInputs () {
    if(userType.value === "select" || issueReceiveDate.value === "" || issueReceiveTime.value === "" || issueClosedDate.value === "" || issueClosedTime.value === "") {
        alert("Input fields are not in order.")
    }
    
    else{
        alert("do you wish to submit ??")
        counter++
        mailrecord.push({
            counter: counter,
            userType: userType.value,
            issueReceiveDate: issueReceiveDate.value,
            issueReceiveTime: issueReceiveTime.value,
            issueClosedDate: issueClosedDate.value,
            issueClosedTime: issueClosedTime.value

        })
    }
}

// Undo last entry
let undo = document.getElementsByClassName("undo")[0]

undo.onclick = function () {
    alert("Do you want to remove last record?")
    alert("last record removed.")
}

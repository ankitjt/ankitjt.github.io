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
    let dataTable = document.getElementsByTagName("table")[0]
    let dateFilter = document.getElementById("dateFilter")

    dateFilter.onchange = function () {
        mailrecord.on("value", (snap) => {
            let dbs = snap.val()
            let keys = Object.keys(dbs)
            for(var i = 0; i < keys.length ; i++) {

                let dataRow = document.createElement("tr")
                dataRow.classList.add("dataRow")
                let dataForCounter = document.createElement("td")
                let dataForUserType = document.createElement("td")
                let dataForIssueDate = document.createElement("td")
                let dataForIssueTime = document.createElement("td")
                let dataForCloseDate = document.createElement("td")
                let dataForCloseTime = document.createElement("td")

                let k = keys[i]

                let counter = dbs[k].counter
                let userType = dbs[k].userType
                let issueReceivedDate = dbs[k].issueReceiveDate
                let issueReceivedTime = dbs[k].issueReceiveTime
                let issueClosedDate = dbs[k].issueClosedDate
                let issueCloseTime = dbs[k].issueClosedTime
    
                
                dataForCounter.innerHTML += counter
                dataForUserType.innerHTML += userType 
                dataForIssueDate.innerHTML += issueReceivedDate 
                dataForIssueTime.innerHTML += issueReceivedTime 
                dataForCloseDate.innerHTML += issueClosedDate 
                dataForCloseTime.innerHTML += issueCloseTime 

                dataRow.appendChild(dataForCounter)
                dataRow.appendChild(dataForUserType)
                dataRow.appendChild(dataForIssueDate)
                dataRow.appendChild(dataForIssueTime)
                dataRow.appendChild(dataForCloseDate)
                dataRow.appendChild(dataForCloseTime)

                dataTable.appendChild(dataRow)

            }
            
            var totalRecord =  snap.numChildren();
            console.log("Total Record : "+totalRecord);
        })

    }




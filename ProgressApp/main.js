let progressName = document.getElementsByClassName("progress-name")[0],
progressCounter = document.getElementsByClassName("progress-counter")[0],
addbutton = document.getElementById("addlabel"),
progresslabel = document.getElementById("progressLabel"),
defaultStartValue = "01",
progressDisplay = document.getElementsByClassName("progress-display")[0],
progressCount,
progressNameNew,
progressCountNumber,
date = new Date()
hours = date.getHours(),
minutes = date.getMinutes(),
startTime = 08 + ":" + 00,
endTime = 22 + ":" + 00,
currentTime = hours + ":" + minutes

console.log(currentTime, startTime);

function checkStartEndTime() {
    if (currentTime !== startTime || currentTime !== endTime) {
        alert("progress will start from 8 AM");
    }
    else {
        alert("progress tag now");
    }
}



function updateCount() {
    
    let progressCountUpdate = document.getElementsByClassName("progress-count")
    
    for(var i = 0; i < progressCountUpdate.length; i++) {
        
        progressCountUpdate[i].onclick = function () {
            let counter = 0
            
            this.childNodes[1].innerText = counter++
        }
    }
    
}

function createProgress() {
    progressCount = document.createElement("div")
    progressCount.className = "progress-count"
    progressNameNew = document.createElement("span")
    progressNameNew.innerText = progresslabel.value;
    progressNameNew.className = 'progress-name'
    progressCountNumber = document.createElement("span")
    progressCountNumber.innerText = "00"
    progressCountNumber.className = "progress-counter"
    progressCount.appendChild(progressNameNew)
    progressCount.appendChild(progressCountNumber)
    progressDisplay.appendChild(progressCount)
    progresslabel.value = ""

    updateCount()
}





addbutton.onclick = function () {
    if(progresslabel.value === "") {
        alert("enter progress name")
    }
    else {
        checkStartEndTime();
        createProgress();
    }
    
    
}

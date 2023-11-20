
const submitButton = document.getElementById("submitButton");
const retrieveButton = document.getElementById("retrieveButton");
let currentMood = 0;
for (let i = 1; i < 6;i++) {
    console.log(i);
    if (document.getElementById("mood" + i.toString())) {
        document.getElementById("mood" + i.toString()).addEventListener("click", function() {
            setMood(i);
        });
    }
}

function setMood(number) {
    chrome.storage.local.set({ "currentMood": number }, function() {
    });
}

if (submitButton) {
    submitButton.addEventListener("click", function() {
        chrome.storage.local.get("currentMood", function(object) {
            currentMood = object.currentMood;
        });
        storeText();
        alert("Submitted!");
    });
}
if (retrieveButton) {
    retrieveButton.addEventListener("click", function() {

    });
}

function storeText() {
    const textBoxValue = document.getElementById("mhentry").value;
    let currentObject;
    const dateNow = Date.now().toString();
    chrome.storage.local.get("textboxStuff", function(object) {
        currentObject = object.textboxStuff;
        console.log(object);
        if (currentObject) {
            currentObject[dateNow] = {
                mood: currentMood,
                text: textBoxValue
            };
        } else {
            currentObject = {};
            currentObject[dateNow] = {
                mood: currentMood,
                text: textBoxValue
            };
        }
        
        console.log(Object.keys(currentObject));
        const newDate = new Date(parseInt(Object.keys(currentObject)[0]));
        console.log(newDate.toString());
        chrome.storage.local.set({ "textboxStuff": currentObject }).then();
    });
}

function getTextData() { // needs updating
    chrome.storage.local.get("textboxStuff", function(object) {
        const allData = object.textboxStuff;
       document.getElementById("mhentry").value = object.textboxStuff;
    });
}

function makeTextboxDisappear() {
    document.querySelector("#journalentry").style.scale = "0.0";
}

function populateDropdown() {
    let dropdownContents = "<select></select>";

}

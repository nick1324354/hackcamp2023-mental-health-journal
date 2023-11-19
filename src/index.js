
const submitButton = document.getElementById("submitButton");
const retrieveButton = document.getElementById("retrieveButton");

if (submitButton) {
    submitButton.addEventListener("click", function() {
        changeTextBox();
    });
}
if (retrieveButton) {
    retrieveButton.addEventListener("click", function() {
        makeTextboxDisappear();
    });
}

function changeTextBox() {
    const textBoxValue = document.getElementById("mhentry").value;
    let currentArray;
    chrome.storage.local.get("textboxStuff", function(object) {

    });
    chrome.storage.local.set({ "textboxStuff": textBoxValue }, function() {
    });

}

function getTextData() {
    chrome.storage.local.get("textboxStuff", function(object) {
        const allData = object.textboxStuff;
       document.getElementById("mhentry").value = object.textboxStuff;
    });
}

function makeTextboxDisappear() {
    document.querySelector("#journalentry").style.scale = "0.0";
}

function createDropDown() {
    let dropdownContents = "<select></select>";
    document.getElementById("previousentries").innerHTML = dropdownContents;
}
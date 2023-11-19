import {chrome} from '@types/chrome';

document.getElementById("submitButton").addEventListener("click", function() {
    changeTextBox();
});
document.getElementById("retrieveButton").addEventListener("click", function() {
    document.getElementById("mhentry").innerHTML = getTextData();
});
function changeTextBox() {
    console.log(document.getElementById("mhentry").value);
    chrome.storage.local.set({ "textboxStuff": "the contents!"}, function() {
        alert("the storing has been done");
    });

}

function getTextData() {
    return chrome.storage.local.get("textboxStuff", function() {
       alert("the fetching has been done");
    });
}
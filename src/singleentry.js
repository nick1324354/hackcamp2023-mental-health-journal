let text = "testing";
chrome.storage.local.get("entryToGet", function(object1) {
    chrome.storage.local.get("textboxStuff", function(object2) {
        text = object2.textboxStuff[object1.entryToGet].text;
        console.log(text);
        document.getElementById("journal").innerHTML = "<img class=\"mood-emoji-img\" src=\"assets/" + object2.textboxStuff[object1.entryToGet].mood +"-scale image.svg\">" + text;
    })
});




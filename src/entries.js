populateDropdown();


document.getElementById("selection").addEventListener("change", function() {
   console.log("change!");
   chrome.storage.local.set({ entryToGet: document.getElementById("selection").value }).then();
   console.log(document.getElementById("selection").value);
   window.location.href = "../entry.html";
});
function populateDropdown() {
    let dropdownContents = "";
    chrome.storage.local.get("textboxStuff", function(object) {
        const currentObject = object.textboxStuff;
        console.log(object);
        const objectKeys = Object.keys(currentObject);
        console.log(objectKeys);
        dropdownContents += "<option value=blank>Choose one</option>";
        for (let i of objectKeys) {
            const parsedDate = new Date(parseInt(i)).toString();
            console.log(parsedDate);
            console.log(currentObject[i].text);
            dropdownContents += "<option value=" + i + ">" + parsedDate + "</option>";
        }
        document.getElementById("selection").innerHTML = dropdownContents;
    });
}


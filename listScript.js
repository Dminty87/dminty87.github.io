

function loadXML(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            const xmlDoc = req.responseXML

            let list = new String()

            for (const x of xmlDoc.documentElement.children)
            {
                list += "<li>" + x.textContent + "</li>\n"
            }

            document.getElementById("listName").innerText = xmlDoc.documentElement.getAttribute("name")
            document.getElementById("listItems").innerHTML = list
        }
    }

    req.open("GET", "GeeSkillet.xml", true)
    req.send()
}

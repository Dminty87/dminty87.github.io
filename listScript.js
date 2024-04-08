



function testScript(){
    document.getElementById("output").innerHTML = "Success!Now"
}


function loadXML(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("reqOut").innerHTML = "test"
        }
    }

    req.open("GET", "GeeSkillet.xml", true)
    req.send()
}

function testReq(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("reqOut").innerHTML = "test"
        }
    }
    req.open("GET", "GeeSkillet.xml", true)
    req.send("testing")
}

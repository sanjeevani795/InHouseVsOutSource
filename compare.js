/**
 * Created by pradeepdewda on 10/16/15.
 */

function allowDrop(event) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    var element;
    if(ev.target.tagName == "IMG") {
        element = ev.target.parentNode.childNodes[5];
    }
    else {
        if(ev.target.tagName == "DIV") {
            element = ev.target.childNodes[5];
        }
    }
    var count = 0;
    if(element.innerHTML != "" )
    {
        count = parseInt(element.innerHTML);
    }
    element.innerHTML = count + 1;
    //change slider value based upon cost of each employee
    setRange(element);
}

function increase(e){
    var element = e.target.nextElementSibling;
    var count = 0;
    if(element.innerHTML != "" )
    {
        count = parseInt(element.innerHTML);
    }
    element.innerHTML = (count + 1).toString();
    //change slider value based upon cost of each employee
    setRange(element);
}
function decrease(e){
    var element = e.target.previousElementSibling;

    if(element.innerHTML != "" && element.innerHTML != "0")
    {
        var count = parseInt(element.innerHTML);
        element.innerHTML = (count - 1).toString();
        //change slider value based upon cost of each employee
        setRange(element);
    }
}
var grandTotalOutSource = 0;
var grandTotalInHouse = 0;
var mgrTotal = 0, leadTotal =0, testerTotal =0 ,devTotal= 0,otherTotal= 0,infraTotal=0;
var mgrInTotal = 0, leadInTotal =0, testerInTotal =0 ,devInTotal= 0,otherInTotal= 0,infraInTotal=0;

function setRange(elem) {
    var outrng = document.getElementById("OutSourceRng");
    var inrng = document.getElementById("inHouseRng");

    var pmoutcost = document.getElementById("txtOutPM").value;
    var ldoutcost = document.getElementById("txtOutLead").value;
    var testoutcost = document.getElementById("txtOutTester").value;
    var devoutcost = document.getElementById("txtOutDev").value;
    var otheroutcost = document.getElementById("txtOutOther").value;
    var infraoutcost = document.getElementById("txtOutInfra").value;


    var pmincost = document.getElementById("txtInPM").value;
    var ldincost = document.getElementById("txtInLead").value;
    var testincost = document.getElementById("txtInTester").value;
    var devincost = document.getElementById("txtInDev").value;
    var infraincost = document.getElementById("txtInfra").value;
    var otherincost = document.getElementById("txtInOther").value;


    if(elem.id == "pmCount") {
        if(pmoutcost  != "") {
            mgrTotal = parseInt(pmoutcost) * parseInt(elem.innerHTML) * 160;
        }
        if(pmincost != "") {
            mgrInTotal = parseInt(pmincost) * parseInt(elem.innerHTML)* 160;
        }
    }


    if(elem.id == "leadCount") {
        if (ldoutcost != "") {
            leadTotal = parseInt(ldoutcost) * parseInt(elem.innerHTML)* 160;
        }
        if (ldincost !="") {
            leadInTotal = parseInt(ldincost) * parseInt(elem.innerHTML)* 160;
        }
    }

    if(elem.id == "testerCount") {
        if(testoutcost != "") {
            testerTotal = parseInt(testoutcost) * parseInt(elem.innerHTML)* 160;
        }
        if(testincost != "") {
            testerInTotal = parseInt(testincost) * parseInt(elem.innerHTML)* 160;
        }
    }
    if(elem.id == "devCount") {
        if(devoutcost != "") {
            devTotal = parseInt(devoutcost) * parseInt(elem.innerHTML)* 160;
        }
        if(devincost != "") {
            devInTotal = parseInt(devincost) * parseInt(elem.innerHTML)* 160;
        }
    }
    if(elem.id == "infraCount") {
        if(infraoutcost != "") {
            infraTotal = parseInt(infraoutcost) * parseInt(elem.innerHTML)* 160;
        }
        if(infraincost != "") {
            infraInTotal = parseInt(infraincost) * parseInt(elem.innerHTML)* 160;
        }
    }
    if(elem.id == "OtherCount") {
        if(otheroutcost != "") {
            otherTotal = parseInt(otheroutcost) * parseInt(elem.innerHTML)* 160;
        }
        if(otherincost != "") {
            otherInTotal = parseInt(otherincost) * parseInt(elem.innerHTML)* 160;
        }
    }

    grandTotalOutSource = (mgrTotal + leadTotal + testerTotal + devTotal + otherTotal + infraTotal);
    grandTotalInHouse = (mgrInTotal + leadInTotal + testerInTotal + devInTotal + otherInTotal + infraInTotal);
    outrng.value = grandTotalOutSource;
    inrng.value = grandTotalInHouse;
    document.getElementById("displayOut").innerHTML = "$" + grandTotalOutSource;
    document.getElementById("displayIn").innerHTML = "$" + grandTotalInHouse;

    if(grandTotalOutSource >= grandTotalInHouse){
        document.styleSheets[0].addRule("#OutSourceRng::-webkit-slider-thumb:before", "background: #cc181e;")
        document.styleSheets[0].addRule("#inHouseRng::-webkit-slider-thumb:before", "background: green;")
    }
    else{
        document.styleSheets[0].addRule("#inHouseRng::-webkit-slider-thumb:before", "background: #cc181e;")
        document.styleSheets[0].addRule("#OutSourceRng::-webkit-slider-thumb:before", "background: green;")
    }
}


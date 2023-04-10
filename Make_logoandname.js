function Do_schoolnamelines(ContainerElementID, stringArray){
    var ContainerElement = document.getElementById(ContainerElementID);
    var all = stringArray.trim();
    var lines = all.split("\n");
    var noOfLines = lines.length;
    for(let LineCount=1; LineCount<=noOfLines; LineCount++){
        let labelText = lines[LineCount-1];
        let inputPar =document.createElement("h2");
        inputPar.innerText = labelText;
        ContainerElement.appendChild(inputPar);
    }
}

function Do_resourcelines(ContainerElementID, stringArray){
    var ContainerElement = document.getElementById(ContainerElementID);
    var all = stringArray.trim();
    var lines = all.split("\n");
    var noOfLines = lines.length;
    for(let i=0; i<noOfLines; i++){
        lines[i] = lines[i].trim();
        let tokens = lines[i].split(",");
        // tokens has two string elements. 1st href, 2nd label
        let anchorPar =document.createElement("a");
        anchorPar.href = tokens[0];
        anchorPar.innerHTML = tokens[1];
        ContainerElement.appendChild(anchorPar);
        let innerPar = document.createElement("p");
        ContainerElement.appendChild(innerPar);
    }
}

function Do_displaylogo(ContainerElementID, stringArray){
    var ContainerElement = document.getElementById(ContainerElementID);
    var all = stringArray.trim();
    let logoimage = document.createElement("img");
    logoimage.src = all;
    ContainerElement.appendChild(logoimage);
}

function Do_offsetform(ContainerElementID){
    var ContainerElement = document.getElementById(ContainerElementID);
    var itemPar = makeheadingPar("Admin mode");
    ContainerElement.appendChild(itemPar);
    itemPar = makeInputPar("Offset days:", "offsetday");
    ContainerElement.appendChild(itemPar);
    itemPar = makeInputPar("Offset hours:", "offsethour");
    ContainerElement.appendChild(itemPar);
    itemPar = makeInputPar("Offset minutes:", "offsetmin");
    ContainerElement.appendChild(itemPar);
    
    var inlinePar = document.createElement("p");
    itemPar = makeinlineElement("Include offsets", "offsetbutton", "offset_onclick()")
    ContainerElement.appendChild(itemPar);
    ContainerElement.appendChild (document.createTextNode (" ")); 
    itemPar = makeinlineElement("Remove offsets", "deleteoffset", "delete_onclick()")
    ContainerElement.appendChild(itemPar);
}

function Do_makescrollbutton(ContainerElementID){
    var ContainerElement = document.getElementById(ContainerElementID);
    var itemPar = makeinlineElement("New! Making Plans and Appointments", "scroll-button", "Do_apptscroll()");
    ContainerElement.appendChild(itemPar);
}

function Do_apptscroll(){
    var scrollButton = document.getElementById("scroll-button");
    // console.log("Do_apptscroll is run");
    scrollButton.addEventListener("click", function() {
        console.log("hear click");
        window.scrollTo({
            top: document.getElementById("making-appointments").offsetTop,
            behavior: "smooth"
        });
    });
}
function makeheadingPar(valueText){
    let inputPar = document.createElement("p");
    inputPar.innerHTML = valueText;
    inputPar.className = "text5";
    return inputPar;
}

function makeInputPar(labelText, nameText) {
    let inputPar = document.createElement("p");

    let labelElement = document.createElement("label");
    labelElement.innerText = labelText;
    labelElement.className = "menulabel";
    labelElement.setAttribute("for", labelText);
    inputPar.appendChild(labelElement);

    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", 0);
    inputElement.setAttribute("size", 5);
    inputElement.setAttribute("maxlength", 5);
    inputElement.setAttribute("type", "text");
    inputElement.className = "menuinput";
    inputElement.setAttribute("id", nameText);
    inputElement.setAttribute("name", nameText);
    inputPar.appendChild(inputElement);

    return inputPar;
}

function makeinlineElement(valueText, nameText, onclickText) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", valueText);
    inputElement.setAttribute("onclick", onclickText);
    inputElement.setAttribute("type", "button");
    inputElement.className = "text5";
    inputElement.setAttribute("id", nameText);
    inputElement.setAttribute("name", nameText);
    return inputElement;
}
function offset_onclick(){
    oday = parseInt(document.form1.offsetday.value);
    ohour = parseInt(document.form1.offsethour.value);
    omin = parseInt(document.form1.offsetmin.value);
    offsetmillisec = ((oday * 24 + ohour) * 60 + omin) * 60 * 1000;
    // need to redo weeknum range after the next clocktick is processed
    timeoffsetjustchanged = 1;  
}

function delete_onclick(){
    document.form1.offsetday.value = 0;
    document.form1.offsethour.value = 0;
    document.form1.offsetmin.value =0;
    offsetmillisec = 0;
    // need to redo weeknum range after the next clocktick is processed
    timeoffsetjustchanged = 1;
}

function day_onblur(){}

function hour_onblur(){}

function minute_onblur(){}

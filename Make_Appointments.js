function PrintWeeklyTable(weeknum){
    // Week 1 and the last week, may need to fill missing days
    var weekrows = new Array();
    var fivedayentry = [];
    var downarrow = '<img src="images/blackdownarrow.png" alt="down arrow" width="32" height="32">';
    
    var weekdaypointer = todaywhatdayisit;
    // create a down arrow above the table
    fivedayentry[0] = "<span style='color:white;'>.</span>";    // in case Sunday weekdaypointer = 0
    for (let i = 1; i < 6; i++){
        fivedayentry[i] = "<span style='color:white;'>.</span>";
        if (i == weekdaypointer && document.getElementById("weeknumoffset").value == 0){fivedayentry[i] = downarrow;}
    }
    weekrows.push([fivedayentry[0], fivedayentry[1], fivedayentry[2], fivedayentry[3], fivedayentry[4], fivedayentry[5]]);
    weekrows.push([" ", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
    // fill the days of week before today with blanks
    var dayfirstday = YearArray[0][13];
    var daylastday = YearArray[yearcount -1][13];
    var firstdayweeknum = 0;
    while (YearArray[firstdayweeknum][15] < weeknum){firstdayweeknum++;}
    // firstdayweeknum is on a Sunday
    var daythatday = YearArray[firstdayweeknum][13] // should be zero
    // Next construct day-month-year of each school
    
    i = 1;
    switch(weeknum){
        case 1:         // first week of calendar, may have holes
            i = 1;      // redefine, just in case    
            while (i < dayfirstday){
                fivedayentry[i] = "no data";
                i++;
            }
            while (i < 6){
                fivedayentry[i] = YearArray[i - dayfirstday][16] + " " + YearArray[i - dayfirstday][12]; // + "-" + YearArray[i - dayfirstday][10];
                i++;
            }
            // PrintLunchschedule(dayfirstday, 5);   // dayfirstday can be 5 or 6
            break;
        case weekcount: // last week of calendar, may have holes
            i = 1;      // redefine just in case
            while (i <= daylastday){
                fivedayentry[i] = YearArray[yearcount + i - daylastday -1][16] + " " + YearArray[yearcount + i - daylastday - 1][12]; // + "-" + YearArray[yearcount + i - daylastday -1][10];
                i++;
            }
            while (i < 6){
                fivedayentry[i] = "no data";
                i++;
            }
            // PrintLunchschedule(1, daylastday);  // daylastday can be 0
            break;
        default:        // all other weeks are full weeks
            i = 1
            while (i < 6){
                fivedayentry[i] = YearArray[firstdayweeknum + i - daythatday][16] + " " + YearArray[firstdayweeknum + i - daythatday][12]; // + "-" + YearArray[firstdayweeknum + i - daythatday][10];
                i++;
            }
            // PrintLunchschedule(1, 5);
    }
    weekrows.push([fivedayentry[0], fivedayentry[1], fivedayentry[2], fivedayentry[3], fivedayentry[4], fivedayentry[5]]);
    
    var weeklyshortarray = [];
    for (i=0; i<5; i++){weeklyshortarray[i] = []}   // initialize each of 5 elements as an array
    const ninety = 90;
    i = 1;
    switch(weeknum){
        case 1:         // first week of calendar, may have holes
            i = 1;      // redefine, just in case    
            while (i < dayfirstday){
                weeklyshortarray[i-1][0] = ninety;
                i++;
            }
            while (i < 6){
                weeklyshortarray[i-1][0] = YearArray[i - dayfirstday][4];
                i++;
            }
            // PrintLunchschedule(dayfirstday, 5);   // dayfirstday can be 5 or 6
            break;
        case weekcount: // last week of calendar, may have holes
            i = 1;      // redefine just in case
            while (i <= daylastday){
                weeklyshortarray[i-1][0] = YearArray[yearcount + i - daylastday -1][4];
                i++;
            }
            while (i < 6){
                weeklyshortarray[i-1][0] = ninety;
                i++;
            }
            // PrintLunchschedule(1, daylastday);  // daylastday can be 0
            break;
        default:        // all other weeks are full weeks
            i = 1
            while (i < 6){
                weeklyshortarray[i-1][0] = YearArray[firstdayweeknum + i - daythatday][4];
                i++;
            }
    }
    // weekrows.push(["", weeklyshortarray[0][0], weeklyshortarray[1][0], weeklyshortarray[2][0], weeklyshortarray[3][0], weeklyshortarray[4][0], ])
    weekrows.push(["<span style='color:white;'>.</span>", "", "", "", "", ""]);
    // populate the rest of weeklyshortarray with matched AM/lunch/PM data from AllShortArray
    for (i=0; i<5; i++){
        if (weeklyshortarray[i][0] != 90){
            let Sindex = weeklyshortarray[i][0] - 65;
            weeklyshortarray[i][1] = AllShortArray[Sindex][0];
            weeklyshortarray[i][2] = AllShortArray[Sindex][1];
            weeklyshortarray[i][3] = AllShortArray[Sindex][2];
        } else {
            weeklyshortarray[i][1] = "";
            weeklyshortarray[i][2] = "";
            weeklyshortarray[i][3] = "";
        }
    }
    
    weekrows.push(["AM", weeklyshortarray[0][1], weeklyshortarray[1][1], weeklyshortarray[2][1], weeklyshortarray[3][1], weeklyshortarray[4][1]]);
    weekrows.push(["Lunch", weeklyshortarray[0][2], weeklyshortarray[1][2], weeklyshortarray[2][2], weeklyshortarray[3][2], weeklyshortarray[4][2]]);
    weekrows.push(["PM", weeklyshortarray[0][3], weeklyshortarray[1][3], weeklyshortarray[2][3], weeklyshortarray[3][3], weeklyshortarray[4][3]]);
    weekrows.push(["<span style='color:white;'>.</span>", "", "", "", "", ""]);
    weekrows.push(["", "", "", "", "", ""]);

    var table = document.createElement("TABLE");
    table.border = "1";
    var columnCount = weekrows[0].length;

    var row = table.insertRow(-1);
    for (i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = weekrows[0][i];
        row.appendChild(headerCell);
    }    

    for (i = 1; i < weekrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = weekrows[i][j];
            if (i > 3 && i < 7){
                cell.style.textAlign = 'right';
                cell.style.paddingRight = '15px';
                cell.style.paddingLeft = '15px';
            }
            // if (j === 3){cell.classList.add('red-column');}
        }
    }
    
    
    
    if (weeklyshortarray[0][0] != 90){  // print day schedule only if this is a school day
    var button1 = document.createElement("button");
    button1.innerHTML = "Show <br> All <br> Schedules";
    button1.addEventListener("click", function() {
        weekdayselected = 1;
        PrintXschedule(firstdayweeknum + weekdayselected);
        PrintWeeklyTable(weeknumselected);  // reprint to change color of selected column
    });
    var cell = table.rows[8].cells[1];
    cell.appendChild(button1);
    }
    
    if (weeklyshortarray[1][0] != 90){
    var button2 = document.createElement("button");
    button2.innerHTML = "Show <br> All <br> Schedules";
    button2.addEventListener("click", function() {
        weekdayselected = 2;
        PrintXschedule(firstdayweeknum + weekdayselected);
        PrintWeeklyTable(weeknumselected);  // reprint to change color of selected column
    });
    var cell = table.rows[8].cells[2];
    cell.appendChild(button2);
    }
    
    if (weeklyshortarray[2][0] != 90){
    var button3 = document.createElement("button");
    button3.innerHTML = "Show <br> All <br> Schedules";
    button3.addEventListener("click", function() {
        weekdayselected = 3;
        PrintXschedule(firstdayweeknum + weekdayselected);
        PrintWeeklyTable(weeknumselected);  // reprint to change color of selected column
    });
    var cell = table.rows[8].cells[3];
    cell.appendChild(button3);
    }
    
    if (weeklyshortarray[3][0] != 90){
    var button4 = document.createElement("button");
    button4.innerHTML = "Show <br> All <br> Schedules";
    button4.addEventListener("click", function() {
        weekdayselected = 4;
        PrintXschedule(firstdayweeknum + weekdayselected);
        PrintWeeklyTable(weeknumselected);  // reprint to change color of selected column
    });
    var cell = table.rows[8].cells[4];
    cell.appendChild(button4);
    }
    
    if (weeklyshortarray[4][0] != 90){
    var button5 = document.createElement("button");
    button5.innerHTML = "Show <br> All <br> Schedules";
    button5.addEventListener("click", function() {
        weekdayselected = 5;
        PrintXschedule(firstdayweeknum + weekdayselected);
        PrintWeeklyTable(weeknumselected);  // reprint to change color of selected column
    });
    var cell = table.rows[8].cells[5];
    cell.appendChild(button5);
    }
                                            
    // Loop through the cells in the second column and add the "red-column" class
    for (j=0; j<5; j++){
        if ((weeklyshortarray[j][0] > repeatscheduleends) && (weeklyshortarray[j][0] != 90)){
            for (var k = 1; k < table.rows.length; k++) {
            var cell = table.rows[k].cells[j+1]; // Get the cell in the second column of the current row
            cell.classList.add('red-column'); // Add the "red-column" class to the cell
            }
        }
    }

    // loop through cells in a certain column to make it green
    if (weekdayselected > 0 && weekdayselected < 6){
        for (var k = 1; k < table.rows.length; k++) {
            var cell = table.rows[k].cells[weekdayselected]; // Get the cell in the second column of the current row
            cell.classList.add('green-column'); // Add the "red-column" class to the cell
            }
    }
    
    
    // specify last row (8) to have a fixed height
    table.rows[0].style.height =  '40px';
    table.rows[8].style.height = '100px';

    var tableid = "WeeklyTable";
    var widetable = document.getElementById(tableid);
    widetable.innerHTML = "";
    widetable.appendChild(table);
}


function PrintXschedule(Xdayindex) {
    var todayrows = new Array();
    var starthr = 0;
    var startmin = 0;
    var endhr = 0;
    var endmin = 0;
    var timespanstring = 0;
    var XdaybellArray = [];
    var eventstring = "";
    var Xdaycount = 0;
    var singlechar = YearArray[Xdayindex][3];
    var firstpart = "Day";
    var secondpart = "string";
    let targetvar = "Onedaystring";
    
    eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" );
    DaytoArray();   // Onedaystring is used here
    XdaybellArray = BellArray;
    Xdaycount = Onedaycount;

    var formattedDate = YearArray[Xdayindex][16] + " " + YearArray[Xdayindex][12] + ", " + YearArray[Xdayindex][10];
    
    todayrows.push([formattedDate, "Minutes", XdaybellArray[0][4] + " Schedule"]);
    
    for (i=0; i < Xdaycount; ++i){
        
        if (XdaybellArray[i][5] == 1){
            starthr = XdaybellArray[i-1][0];
            startmin = XdaybellArray[i-1][1];
            endhr = XdaybellArray[i][0];
            endmin = XdaybellArray[i][1];
            var deltaminute = endhr * 60 + endmin - starthr * 60 - startmin;
            if (starthr > 12){starthr = starthr - 12;}
            if (startmin < 10){startmin = "0" + startmin;}
            if (endhr > 12){endhr = endhr - 12;}
            if (endmin < 10){endmin = "0" + endmin;}

            timespanstring = starthr + ":" + startmin + " - " + endhr + ":" + endmin;
            eventstring = XdaybellArray[i][4];
            
            todayrows.push([timespanstring, deltaminute, eventstring]);
        }
    }
    var table = document.createElement("TABLE");
    table.border = "1";

    // Add the green-table class to the table
    table.classList.add('green-table');
    
    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        headerCell.style.paddingRight = '10px';
        headerCell.style.paddingLeft = '10px';
    
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
            if (j == 0) {
                cell.style.textAlign = 'right';
                cell.style.paddingRight = '20px';
                cell.style.paddingLeft = '20px';
            };
        }
    }
    
    var scheduleid = "Xdayschedule";
    var schedulex = document.getElementById(scheduleid);
    schedulex.innerHTML = "";
    schedulex.appendChild(table);
}

function Do_apptform(ContainerElementID){
    var ContainerElement = document.getElementById(ContainerElementID);
    var itemPar = makeheadingPar("Click up/down arrows to see future weeks");
    ContainerElement.appendChild(itemPar);
    
    var inlinePar = document.createElement("p");
    itemPar = makeInputElementWithButtons("weeknumoffset");
    inlinePar.appendChild(itemPar);
    // inlinePar.appendChild (document.createTextNode (" ")); 
    itemPar = makeinlineElement("Display the current week", "deleteweekoffset", "deleteweek_onclick()")
    inlinePar.appendChild(itemPar);
    
    ContainerElement.appendChild(inlinePar);
}

function makeheadingPar(valueText){
    let inputPar = document.createElement("p");
    inputPar.innerHTML = valueText;
    inputPar.className = "menuheading";
    return inputPar;
}

function makeInputElement(nameText) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", 0);
    inputElement.setAttribute("min", -9);
    inputElement.setAttribute("max", 9);
    inputElement.setAttribute("size", 3);
    inputElement.setAttribute("maxlength", 3);
    inputElement.setAttribute("type", "number");
    inputElement.className = "menuinput";
    inputElement.setAttribute("id", nameText);
    inputElement.setAttribute("name", nameText);
    return inputElement;
}

function makeInputElementWithButtons(nameText) {
    let container = document.createElement("div");
  
    // create the input element
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", 0);
    inputElement.setAttribute("min", -19);
    inputElement.setAttribute("max", 19);
    inputElement.setAttribute("size", 5);
    inputElement.setAttribute("maxlength", 5);
    inputElement.setAttribute("type", "number");
    inputElement.className = "menuinput";
    inputElement.setAttribute("id", nameText);
    inputElement.setAttribute("name", nameText);
    container.appendChild(inputElement);
  
    // create the down arrow button
    let downArrowButton = document.createElement("button");
    downArrowButton.setAttribute("type", "button");
    downArrowButton.className = "down-arrow";
    container.appendChild(downArrowButton);
  
    // create the up arrow button
    let upArrowButton = document.createElement("button");
    upArrowButton.setAttribute("type", "button");
    upArrowButton.className = "up-arrow";
    container.appendChild(upArrowButton);
  
    return container;
  }
  

function Specifyweekoffsetrange(){
    // todayweeknum may change if in admin mode the time offset is set to nonzero
    document.getElementById("weeknumoffset").min = String(1 - todayweeknum);
    document.getElementById("weeknumoffset").max = String(weekcount - todayweeknum);
   }

function deleteweek_onclick(){
    document.form2.weeknumoffset.value = 0;
    var div = document.getElementById("Xdayschedule");
    if (div) {
    div.innerHTML = "";
    }
    weekdayselected = 99;    // reset weekdayselected to be out of range
    PrintWeeklyTable(todayweeknum);
    // console.log("delete week clicked");
}

function Do_apptdetails(){
    Specifyweekoffsetrange();   // run once at the beginning is sufficient if admin is not set
    
    // define the Event listener for up down arrows
    const quantityInput = document.querySelector('input[name="weeknumoffset"]');
    const upArrowButton = document.querySelector('.up-arrow');
    const downArrowButton = document.querySelector('.down-arrow');

    upArrowButton.addEventListener('click', function() {
        var div = document.getElementById("Xdayschedule");
        if (div) {
        div.innerHTML = "";
        }
        weekdayselected = 99;    // reset weekdayselected to be out of range
        
        if (parseInt(quantityInput.value) < quantityInput.max) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            }
        var tempvalue = document.getElementById("weeknumoffset").value;
        weeknumselected = todayweeknum + parseInt(tempvalue);
        PrintWeeklyTable(weeknumselected);
    });

    downArrowButton.addEventListener('click', function() {
        var div = document.getElementById("Xdayschedule");
        if (div) {
        div.innerHTML = "";
        }
        weekdayselected = 99;    // reset weekdayselected to be out of range
    
        if (parseInt(quantityInput.value) > quantityInput.min) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
        var tempvalue = document.getElementById("weeknumoffset").value;
        weeknumselected = todayweeknum + parseInt(tempvalue);
        PrintWeeklyTable(weeknumselected);
    });

    
    var tempvalue = document.getElementById("weeknumoffset").value;
    weeknumselected = todayweeknum + parseInt(tempvalue);
    PrintWeeklyTable(todayweeknum + parseInt(tempvalue));
    /* document.getElementById("weeknumoffset").addEventListener("input", function() {
        // Your code here to perform the desired action
        var tempvalue = document.getElementById("weeknumoffset").value;
        PrintWeeklyTable(todayweeknum + parseInt(tempvalue));
        if (YearArray[todayindex + 7 * parseInt(tempvalue)][4] != 90){
            PrintXschedule(todayindex + 7 * parseInt(tempvalue))
        } else {
            const tableElement = document.getElementById('Xdayschedule');
            // Clear the content of the element
            tableElement.innerHTML = '';
        } 
    
    }); */
}

// may not be used
/* function Do_apptscroll(){
    var scrollButton = document.getElementById("scroll-button");
    scrollButton.addEventListener("click", function() {
        window.scrollTo({
            top: document.getElementById("making-appointments").offsetTop,
            behavior: "smooth"
        });
    });
} */


function Allshortschedules(){
    // loop through Schedules A to the last character imported
    // to create a 2D table of schedules and AM/lunch/PM durations
    let basecode = 65;
    let firstpart = "Day";
    let secondpart = "string";
    let targetvar = "Onedaystring";
    for (let i=0; i < unicodecount; ++i){
        singlechar = String.fromCharCode(i + basecode);
        eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" );
        DaytoArray();   // output is BellArray
        Createshortarray(i, Onedaycount, BellArray);
    }
}    

function Createshortarray(Sindex, Xcount, XbellArray){
    var starthr = 0;
    var startmin = 0;
    var endhr = 0;
    var endmin = 0;
    var lunchindex = 99;
    var AMClasses = "";
    var lunchtime = "";
    var PMClasses = "";
    
    // search for position where lunch appears
    for (let i=0; i < Xcount; i++){
        if (XbellArray[i][4].toLowerCase() === "lunch"){lunchindex = i}
    }

    // Now, the AM Classes will start in row 0 and end in row (lunchindex - 1)
    // lunch will start row (lunchindex - 1) and end in row lunchindex
    // PM Classes will start row lunchindex and end in row (Xcount - 1)
    if (lunchindex != 99){  // lunch is found
        starthr = XbellArray[0][0];
        startmin = XbellArray[0][1];
        endhr = XbellArray[lunchindex - 1][0];
        endmin = XbellArray[lunchindex - 1][1];
        if (starthr > 12){starthr = starthr - 12}
        if (startmin < 10){startmin = "0" + startmin}
        if (endhr > 12){endhr = endhr - 12}
        if (endmin < 10){endmin = "0" + endmin}
        AMClasses = starthr + ":" + startmin + " - " + endhr + ":" + endmin;

        starthr = XbellArray[lunchindex - 1][0];
        startmin = XbellArray[lunchindex - 1][1];
        endhr = XbellArray[lunchindex][0];
        endmin = XbellArray[lunchindex][1];
        if (starthr > 12){starthr = starthr - 12}
        if (startmin < 10){startmin = "0" + startmin}
        if (endhr > 12){endhr = endhr - 12}
        if (endmin < 10){endmin = "0" + endmin}
        lunchtime = starthr + ":" + startmin + " - " + endhr + ":" + endmin;

        if (lunchindex < Xcount - 1){
            starthr = XbellArray[lunchindex][0];
            startmin = XbellArray[lunchindex][1];
            endhr = XbellArray[Xcount - 1][0];
            endmin = XbellArray[Xcount - 1][1];
            if (starthr > 12){starthr = starthr - 12}
            if (startmin < 10){startmin = "0" + startmin}
            if (endhr > 12){endhr = endhr - 12}
            if (endmin < 10){endmin = "0" + endmin}
            PMClasses = starthr + ":" + startmin + " - " + endhr + ":" + endmin;
        } // the other possibility is if lunch is the last event then PMClasses is empty
    } else {
        // when lunch cannot be found then all are considered AMClasses
        starthr = XbellArray[0][0];
        startmin = XbellArray[0][1];
        endhr = XbellArray[Xcount - 1][0];
        endmin = XbellArray[Xcount - 1][1];
        if (starthr > 12){starthr = starthr - 12}
        if (startmin < 10){startmin = "0" + startmin}
        if (endhr > 12){endhr = endhr - 12}
        if (endmin < 10){endmin = "0" + endmin}
        AMClasses = starthr + ":" + startmin + " - " + endhr + ":" + endmin;
    }
    // copy all shortened class periods into big array
    AllShortArray[Sindex] = []; // initialize each element further as an array
    AllShortArray[Sindex][0] = AMClasses;
    AllShortArray[Sindex][1] = lunchtime;
    AllShortArray[Sindex][2] = PMClasses;
}



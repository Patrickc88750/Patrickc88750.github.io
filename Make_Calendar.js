function Oneschedule(schar, Xdaycount, XdaybellArray) {
    var todayrows = new Array();
    var starthr = 0;
    var startmin = 0;
    var endhr = 0;
    var endmin = 0;
    var timespanstring = 0;
    var formattedDate = "Schedule " + schar;
    
    todayrows.push([formattedDate, "minutes", XdaybellArray[0][4] + " Schedule"]);
    
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
    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
            if (j == 0) {cell.style.textAlign = 'right';
            cell.style.paddingRight = '20px';
            cell.style.paddingLeft = '20px';
            };
        }
    }
    
    var scheduleid = "Schedule_" + schar;
    var schedulex = document.getElementById(scheduleid);
    schedulex.innerHTML = "";
    schedulex.appendChild(table);
}

function Checkscheduleunicodematch(){   // there must be at least one schedule A
    // first check Year Calendar data
    let maxunicode = 65;
    for (let i=0; i<yearcount; ++i){
        if (YearArray[i][4] != 90){
            if (YearArray[i][4] > maxunicode){
                maxunicode = YearArray[i][4];
            }
        }
    }
    unicodecount = maxunicode - 65 + 1;

    // Next, check number of day schedules imported
    // load the imported bell schedules
    let Teststring = [];
    let maxicode = 0;   // maximum icode
    let firstpart = "Day";
    let secondpart = "string";
    let targetvar = "Teststring";

    for (let icode=65; icode<90; ++icode){
        singlechar = String.fromCharCode(icode);
        try{    // as icode rises it will eventually hit a fault
            eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" ); 
        }   // DayZstring preset to 0
        catch(err){maxicode = icode;}  
        if (maxicode != 0){break;}
    }
    schedulecount = maxicode - 65;
    // display status
    if (unicodecount != schedulecount){
        var StatusString = "!! Schedule count does not match calendar!";
        var OutputElement = document.getElementById("Matchstatus");
        OutputElement.textContent = StatusString;
    }
}

function printallschedules(){
    // loop through Schedules A to the last character imported
    let basecode = 65;
    let firstpart = "Day";
    let secondpart = "string";
    let targetvar = "Onedaystring";
    for (i=0; i<unicodecount; ++i){
        singlechar = String.fromCharCode(i+65);
        eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" );
        DaytoArray();   // output is BellArray
        Oneschedule(singlechar, Onedaycount, BellArray);
    }
    
    
    
}

function printyearcalendar(){
    var todayrows = new Array();
    
    todayrows.push([" ", " ", "Entire", "School", "Calendar"," "," "]);
    todayrows.push(["SUN","MON","TUE","WED","THU","FRI","SAT"]);
    
  
    var icalendarlastday = yearcount - 1;
    var beginday = 1;
    var oneweekentries = [];

    for (let i=0; i<yearcount; i++){
        let whichweekday = YearArray[i][13];    // which weekday number
        if (beginday == 1){
            oneweekentries[0] = YearArray[i][14];   // longmonth
            oneweekentries[1] = YearArray[i][10];   // year string
            oneweekentries[2] = " ";           // will always initialize oneweekentries here
            oneweekentries[3] = " ";
            oneweekentries[4] = " ";
            oneweekentries[5] = " ";
            oneweekentries[6] = " ";
            todayrows.push([oneweekentries[0],oneweekentries[1],oneweekentries[2],oneweekentries[3],oneweekentries[4],oneweekentries[5],oneweekentries[6]]);
            
            // fill the days of week before today with blanks
            let j = 0;
            while (j < whichweekday){
                oneweekentries[j] = " ";
                j++;
            }
            beginday = 0;   // reset beginday if not 1st of month or 1st of calendar
        }
        // construct todays content
        // let schedulechar = " _ _ "+YearArray[i][3]; // Bell type A B C to Z
        // if (schedulechar == " _ _ Z"){schedulechar = " ";}
        let schedulechar = "";
        if (YearArray[i][3]  == "Z"){
            schedulechar = " ";
        } else if (YearArray[i][3] < "D"){
            schedulechar = "<span style='color:blue'>" + YearArray[i][3] + "</span>" + "<span style='color:white;'>_</span>"; // Bell type A B C to Z
        } else {
            schedulechar = "<span style='color:red'>" + YearArray[i][3] + "</span>" + "<span style='color:white;'>_</span>"; // Bell type D and up
        }
        oneweekentries[whichweekday] =  "<span style='color:green'>"+YearArray[i][5]+"</span>"+" "+ schedulechar + YearArray[i][12];
        // Push a week line when day is Saturday
        if (whichweekday == 6){
            todayrows.push([oneweekentries[0],oneweekentries[1],oneweekentries[2],oneweekentries[3],oneweekentries[4],oneweekentries[5],oneweekentries[6]]);
        }
        // test if today is last of calendar, or tomorrow is 1st of next month
        // if last day of calendar then fill rest of week and push line
        if ((i == icalendarlastday) && (whichweekday != 6) ){
            // in case today is last calendar as well as a Saturday
            // nothing else need be done. The for loop will end naturally
            let j = whichweekday;   // whichweekday can be 0 thru 5
            while (j < 6){
                j++;    // first increment j to the next day
                oneweekentries[j] = " ";
            }
            // push the last line of calendar
            todayrows.push([oneweekentries[0],oneweekentries[1],oneweekentries[2],oneweekentries[3],oneweekentries[4],oneweekentries[5],oneweekentries[6]]);
        } else {
            // will check for transition to next month
            // except for last day of calendar, all other days will pass here
            if (YearArray[i][11] != YearArray[i+1][11]){
                // today is end of a month, and today not last of calendar
                // Will fill in the rest of week with blanks
                if (whichweekday != 6){
                    let j = whichweekday;   // whichweekday can be 0 thru 5
                    while (j < 6){
                        j++;    // first increment j to the next day
                        oneweekentries[j] = " ";
                    }
                    // push the last line of calendar
                    todayrows.push([oneweekentries[0],oneweekentries[1],oneweekentries[2],oneweekentries[3],oneweekentries[4],oneweekentries[5],oneweekentries[6]]);
                }
                // if today is a Saturday, the line has already been pushed earlier
                // only need to push a blank line
                // However, if other than Saturday, need to fill rest of week, then
                // push, and then push a blank line.
                beginday = 1;
                todayrows.push([" "," "," "," "," "," ","<span style='color:white;'>.</span>"])
            }
        }
    }



    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
            cell.style.textAlign = 'right';
            cell.style.paddingRight = '20px';
            cell.style.paddingLeft = '10px';
        }
    }
    
    var tableid = "YearCalendar";
    var longtable = document.getElementById(tableid);
    longtable.innerHTML = "";
    longtable.appendChild(table);
}

(function(){
"use strict";

    var dateObj  =  new Date(); // dateObj contains the current month in number form
    
    //create a month object; monthObj should have .name and .daysInMonth defined
    var monthObj = {
    
        currentMonth: dateObj.getMonth() + 1, // In getMonth() January === 0. To stay sane I add 1
        
        //name: returns the result of the getName: function (Well, it's supposed to.)
        /// Is there a reason to have this function and getName()?
        name: function()
        {
            return this.getName(this.currentMonth);
        },
        
        //daysInMonth: returns the result of getDaysInMonth: function (Well, it's supposed to.)
        daysInMonth: function() 
        {
            return this.getDaysInMonth();
        },

        //getName: goes through the if statements and returns a string of the name of the current month
        getName: function(currentMonthNumber)
        {
            if (currentMonthNumber === 1)  {return "January"}
            if (currentMonthNumber === 2)  {return "February"}
            if (currentMonthNumber === 3)  {return "March"}
            if (currentMonthNumber === 4)  {return "April"}
            if (currentMonthNumber === 5)  {return "May"}
            if (currentMonthNumber === 6)  {return "June"}
            if (currentMonthNumber === 7)  {return "July"}
            if (currentMonthNumber === 8)  {return "August"}
            if (currentMonthNumber === 9)  {return "September"}
            if (currentMonthNumber === 10) {return "October"}
            if (currentMonthNumber === 11) {return "November"}
            if (currentMonthNumber === 12) {return "December"}
        },

        //getDaysInMonth: returns the amount of days in the current month
        getDaysInMonth: function()
        {
            var year = dateObj.getFullYear();
            
            if (this.currentMonth === 1 || this.currentMonth === 3 || this.currentMonth === 5 || this.currentMonth === 7 || this.currentMonth === 8 || this.currentMonth === 10 || this.currentMonth === 12){
                return 31;
            } else if (this.currentMonth === 2) {
                /// Is it a leap year?
                /// Leap years are divisible by 4 but not by 100, unless they are also divisible by 400.
                /// E.g., 2000 is divisible by 4 (maybe it is), and by 100 (maybe it isn't), but also by 400 (yes it is); so it is a leap year.
                if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                    return 29;
                } else {
                    return 28;
                }
            } else {return 30; }
        }
        
    };

    //create calendar object
    var calendar = {
        
        currentDay:  dateObj.getDate(),
        currentYear: dateObj.getFullYear(),
        
        go: function(){
            var b             = document.getElementById("myBody"),
                monthTitle    = document.createElement("h1"),
                monthTextNode = document.createTextNode(monthObj.name),        
                table         = document.createElement("table"),
                day           = 1,
                dayCell       = document.createElement("td"),
                dayTextNode   = document.createTextNode(day),
                i             = 0,
                j             = 0;

            table.setAttribute('border', '1');   
            monthTitle.appendChild(monthTextNode);
            
            b.appendChild(monthTitle);
            b.appendChild(table);

            //Loops through how many days there are in the current month and appends td tags and text nodes to create what looks like a calendar
            /// Why 4? Is that for each week? Did you know that you can have up to parts of 6 weeks in a month? Consider December 2000.
            for (i = 0; i < 4; ++i){
                var currentWeekRow = document.createElement("tr");
                table.appendChild(currentWeekRow);
                
                /// What's up with this part?
                /// Why not use .getDaysInMonth()?
                if (monthObj.currentMonth === 1 || monthObj.currentMonth === 3 || monthObj.currentMonth === 5 || monthObj.currentMonth === 7 || monthObj.currentMonth === 8 || monthObj.currentMonth === 10 || monthObj.currentMonth === 12){
                    for (j = 0; j <= 7; ++j){
                        ++day;
                        /// So, I'm guessing the main problem is with this part.
                        /// You can't append the same element twice.
                        /// You need to create a new element each time.
                        /// Also, there's no need to mess with text nodes.
                        /// Just use DOM_ELEMENT.textContent = day;
                        /// It's the same as innerHTML except that it automatically escapes any HTML. So it's safe to use.
                        dayCell.appendChild(dayTextNode);
                        currentWeekRow.appendChild(dayCell); 
                    }
                } else if (monthObj.currentMonth === 2){
                    for (this.j = 0; this.j <= 7; ++j){
                        if (day <= 28){
                            ++day;
                            dayCell.appendChild(dayTextNode);
                            currentWeekRow.appendChild(dayCell);
                        }
                    }
                } else {
                    for (this.j = 0; this.j <= 7; ++j){
                        if (day <= 30){
                            ++day;
                            dayCell.appendChild(dayTextNode);
                            currentWeekRow.appendChild(dayCell); 
                        }
                    }
                }
            }
        }
    };

    calendar.go();
}());
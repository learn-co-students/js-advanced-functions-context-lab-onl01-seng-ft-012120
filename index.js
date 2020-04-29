/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

let createEmployeeRecord = function (arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(emp) {
    return emp.map(e => createEmployeeRecord(e))
}

let createTimeInEvent = function(date) {
    let dateAndTimeSplit = date.split(' ');
    let dateIn = dateAndTimeSplit[0];
    let time = dateAndTimeSplit[1];
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: dateIn,
    })
    return this
}

let createTimeOutEvent = function(date) {
    let dateAndTimeSplit = date.split(' ');
    let dateOut = dateAndTimeSplit[0];
    let time = dateAndTimeSplit[1];
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: dateOut,
    })
    return this
}

let hoursWorkedOnDate = function(dateInput) {
    let recIn = this.timeInEvents.find(e => e.date === dateInput);
    let recOut = this.timeOutEvents.find(e => e.date === dateInput);
    let timeIn = recIn.hour;
    let timeOut = recOut.hour;
    let hours = (timeOut - timeIn) / 100;
    return hours;
}

let wagesEarnedOnDate= function(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    let pay =parseInt(this.payPerHour);
    // console.log(` hours is ${hours}`);
    // console.log(pay);
    return hours * pay
}

// let allWagesFor = function() {
//     let allDates = this.timeInEvents.map(e => e.date);
//     // console.log(allDates);
//     let wages = allDates.reduce(function(total, element) {
//         return wagesEarnedOnDate.call(this, element) + total
//     },  0);
//     // console.log(wages);
//     return wages;
// }
let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}


function findEmployeeByFirstName(srcArray, firstNamey) {
    return srcArray.find(e => e.firstName === firstNamey);
    // console.log(rec);
    // (rec) ? rec : undefined;
}

function calculatePayroll(arr) {
    let totals = arr.reduce(function(total, element) {
        return allWagesFor.call(element) + total
    }, 0);
    console.log(totals);
    return(totals);
}
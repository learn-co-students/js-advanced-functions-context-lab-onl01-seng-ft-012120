/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(empAry){
    let emp = {
        firstName: empAry[0],
        familyName:empAry[1],
        title: empAry[2],
        payPerHour: empAry[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return emp
}

let createEmployeeRecords = function(empArys){
    let emps = empArys.map(function(e){
        return createEmployeeRecord(e)
    })
    return emps;
}

let createTimeInEvent = function(dt){
    let dateAndTime = dt.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateAndTime[1], 10),
        date: dateAndTime[0]
    });
    return this;
}

let createTimeOutEvent = function(dt){
    let dateAndTime = dt.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndTime[1], 10),
        date: dateAndTime[0]
    });
    return this;
}

let hoursWorkedOnDate = function(dt){
    let clockIn = this.timeInEvents.find(e => e.date === dt);
    let clockOut = this.timeOutEvents.find(e => e.date === dt);
    
    return (clockOut.hour - clockIn.hour)/100;
}

let wagesEarnedOnDate = function(dt){
    let hours = hoursWorkedOnDate.call(this, dt);
    let pay = this.payPerHour*hours;
    return pay;
}

let calculatePayroll = function(emps){
    let payroll = 0;
    for(let i =0; i< emps.length; i++){
        payroll += allWagesFor.call(emps[i])
    }
    return payroll;
}

let findEmployeeByFirstName = function(srcArray, firstName){
    let emp = srcArray.find(e => e.firstName === firstName);
    return emp; 
}
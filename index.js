/* Your Code Here */

const createEmployeeRecord = function(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

const createEmployeeRecords = function(records){
    return records.map(createEmployeeRecord);
};

const createTimeInEvent = function(timeIn){
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(timeIn.split(' ')[1], 10),
        date: timeIn.split(' ')[0]
    };
    this.timeInEvents.push(timeInEvent);
    return this;
};

const createTimeOutEvent = function(timeOut){
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(timeOut.split(' ')[1], 10),
        date: timeOut.split(' ')[0]
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
};

const hoursWorkedOnDate = function(date){
    const timeOut = this.timeOutEvents.find((e) => e.date === date).hour;
    const timeIn = this.timeInEvents.find((e) => e.date === date).hour;
    return (timeOut - timeIn)/100;
};

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find((e) => e.firstName === firstName);
};

const calculatePayroll = function(employees){
    return employees.reduce((accumulator, currentValue) => accumulator + allWagesFor.call(currentValue), 0);
};




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
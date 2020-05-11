/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function (x) {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
    const [firstName, familyName, title, payPerHour] = arr;
    const record = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
}

function createEmployeeRecords(arr) {
    return arr.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(date) {
    const timeIn = date.split(" ");
    const timeInEvent = { 
        type: 'TimeIn',
        date: timeIn[0],
        hour: parseInt(timeIn[1], 10) 
    }
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(date) {
    const timeOut = date.split(" ");
    const timeOutEvent = { 
        type: 'TimeOut',
        date: timeOut[0],
        hour: parseInt(timeOut[1], 10) 
    }
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeOut = this.timeOutEvents.find(x => x.date === date).hour;
    const timeIn = this.timeInEvents.find(x => x.date === date).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    const rate = this.payPerHour;
    return hoursWorkedOnDate.call(this, date) * rate;
}

// function allWagesFor(record) {
//     return record.timeInEvents.map(x => {
//         return wagesEarnedOnDate(record, x.date);
//     }).reduce((total, x) => total += x);
// }

function calculatePayroll(records) {
    return records.map(x => allWagesFor.call(x)).reduce((total, x) => total += x);
}

function findEmployeeByFirstName(records, name) {
    return records.find(x => x.firstName === name);
}
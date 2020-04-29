/* Your Code Here */

function createEmployeeRecord(employeeInfoArray) {
    return {
        firstName: employeeInfoArray[0],
        familyName: employeeInfoArray[1],
        title: employeeInfoArray[2],
        payPerHour: employeeInfoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeesArray) {
    return employeesArray.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this 
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this 
}

function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find(e => e.date === dateStamp).hour
    const timeOut = this.timeOutEvents.find(e => e.date === dateStamp).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(employeesArray, firstName) {
    return employeesArray.find(e => e.firstName === firstName)
}

function calculatePayroll(employeesArray) {
    return employeesArray.reduce((memo, e) => memo + allWagesFor.call(e), 0)
}
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


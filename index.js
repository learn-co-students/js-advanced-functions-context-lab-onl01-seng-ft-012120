/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeArray) {
    return employeeArray.map(function(employee){
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateStamp) {
    let[date,hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date,
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let[date,hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date,
    })
    return this
}

let hoursWorkedOnDate = function(dates) {
    let hoursIn = this.timeInEvents.find(function(date) {
        return date.date === dates
    })

    let hoursOut = this.timeOutEvents.find(function(date) {
        return date.date === dates
    })

    return (hoursOut.hour - hoursIn.hour) / 100
}

let wagesEarnedOnDate = function(amountOfDays) {
    let wages = hoursWorkedOnDate.call(this, amountOfDays)
        * this.payPerHour
    return wages
}

let calculatePayroll = function(employees) {
    return employees.reduce(function(employee, checks){
        return employee + allWagesFor.call(checks)
    },0)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(employees,name) {
    return employees.find(function(n) {
        return n.firstName === name
    })
}
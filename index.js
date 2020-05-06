/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


// Your code here
const createEmployeeRecord = function(record){
    return { firstName: record[0], 
            familyName: record[1], 
            title: record[2], 
            payPerHour: record[3], 
            timeInEvents: [], 
            timeOutEvents: []}
};

const createEmployeeRecords = function(employees){
    return employees.map(x => createEmployeeRecord(x))
}

const createTimeInEvent = function(datetime){
    let timeInEvent = {
        type: "TimeIn", 
        hour: parseInt(datetime.split(' ')[1], 10),  
        date: datetime.split(' ')[0]
    }
 this.timeInEvents.push(timeInEvent)
 return this
}

const createTimeOutEvent = function(datetime){
    let timeOutEvent = {
        type: "TimeOut", 
        hour: parseInt(datetime.split(' ')[1], 10),  
        date: datetime.split(' ')[0]
    }
 this.timeOutEvents.push(timeOutEvent)
 return this
}

const hoursWorkedOnDate = function(dates){
    let timeOut = this.timeOutEvents.find(function(e) { return e.date === dates}).hour;
     let timeIn = this.timeInEvents.find(function(e) { return e.date === dates}).hour;
     return (timeOut-timeIn)/100;
}

const wagesEarnedOnDate = function(dates) {
    let hours = hoursWorkedOnDate.call(this, dates)
    let payrate = this.payPerHour
    return hours * payrate
}



const calculatePayroll = function(arr){
    
    return arr.reduce((accum, one) => accum + allWagesFor.call(one), 0)
}

const findEmployeeByFirstName = function(arr, name){
   return arr.find((e) => e.firstName === name)
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

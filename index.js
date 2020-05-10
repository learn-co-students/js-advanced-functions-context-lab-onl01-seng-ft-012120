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

// Your code here
function createEmployeeRecord(e) {

    let o = {
        firstName: e[0],
        familyName: e[1],
        title: e[2],
        payPerHour: e[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  return o
}

function createEmployeeRecords(arr) {
    let newArr = []
        arr.map(e => {
            let o = createEmployeeRecord(e)
            newArr.push(o)
        })
    return newArr
    }

function createTimeInEvent(str) {
    let arr = str.split(' ')
    
    let o = {
        type: "TimeIn",
        date: arr[0],
        hour: parseInt(arr[1], 10)
       
    }
    console.log(o.hour)

    this.timeInEvents.push(o)

    return this
}

function createTimeOutEvent(str) {
    let arr = str.split(' ')
    let o = {
        type: "TimeOut",
        date: arr[0],
        hour: parseInt(arr[1], 10)
    }
    this.timeOutEvents.push(o)

    return this
}

function hoursWorkedOnDate(d) {
 l
    let timeIn = this.timeInEvents.find((e) => e.date === d).hour
    let timeOut = this.timeOutEvents.find((e) => e.date === d).hour
 
 return (timeOut - timeIn)/100

}

function wagesEarnedOnDate(d) {
    return hoursWorkedOnDate.call(this, d) * this.payPerHour
}


function findEmployeeByFirstName(arr, name) {
    let employee;
    arr.find(obj => {
        if (obj.firstName == name) {
          employee = obj                
        }
    })
    return employee
}


function calculatePayroll(employees) {
        let allWages = []
   return employees.map((e) => allWagesFor.call(e)).reduce((total, wage) => {
        return total + wage;
},0);

}



/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
let createEmployeeRecord = function (data) {
  return {
    firstName: data[0],
    familyName: data[1],
    title: data[2],
    payPerHour: data[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

let createEmployeeRecords = function (employeeData) {
  return employeeData.map(function (data) {
    return createEmployeeRecord(data);
  });
};

let createTimeInEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  
  return this;
};

let createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  
  return this;
};

let hoursWorkedOnDate = function(dateToFind) {
  let timeInDay = this.timeInEvents.find(function (event) {
    return event.date === dateToFind;
  });
  
  let timeOutDay = this.timeOutEvents.find(function (event) {
    return event.date === dateToFind;
  });
  
  return (timeOutDay.hour - timeInDay.hour)/100;
};

let wagesEarnedOnDate = function (payDate) {
  let wage = hoursWorkedOnDate.call(this, payDate)
        * this.payPerHour;
        
  return parseFloat(wage);
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

let findEmployeeByFirstName = function (employeeArray, firstName) {
  return employeeArray.find(function(record) {
    return record.firstName === firstName;
  });  
};

let calculatePayroll = function (employeeRecords) {
  return employeeRecords.reduce(function(memo, record) {
    return memo + allWagesFor.call(record);
  }, 0);
};
//function for printing Date in datetime string
//fixed not adding 0 before single int
function printdatetime(date) {
    var outputtime = ''
    if (date.getHours() < 10) {
        outputtime = outputtime + '0' + date.getHours() + ":"
    } else {
        outputtime = outputtime + date.getHours() + ":"
    }
    if (date.getMinutes() < 10) {
        outputtime = outputtime + '0' + date.getMinutes() + ":"
    } else {
        outputtime = outputtime + date.getMinutes() + ":"
    }
    if (date.getSeconds() < 10) {
        outputtime = outputtime + '0' + date.getSeconds() + " "
    } else {
        outputtime = outputtime + date.getSeconds() + " "
    }
    if (date.getDate() < 10) {
        outputtime = outputtime + '0' + date.getDate() + "/"
    } else {
        outputtime = outputtime + date.getDate() + "/"
    }
    if (date.getMonth() < 10) {
        outputtime = outputtime + '0' + date.getMonth() + "/"
    } else {
        outputtime = outputtime + date.getMonth() + "/"
    }
    if (date.getFullYear() < 10) {
        outputtime = outputtime + '0' + date.getFullYear()
    } else {
        outputtime = outputtime + date.getFullYear()
    }
    return outputtime;
}

//testing
console.log(printdatetime(new Date()))

//Datetime in Sql datetime format function
function printSQLdatetime(date) {
    var outputtime = ''
    if (date.getFullYear() < 10) {
        outputtime = outputtime + '0' + date.getFullYear() + "-"
    } else {
        outputtime = outputtime + date.getFullYear() + "-"
    }
    if (date.getMonth() < 10) {
        outputtime = outputtime + '0' + date.getMonth() + "-"
    } else {
        outputtime = outputtime + date.getMonth() + "-"
    }
    if (date.getDate() < 10) {
        outputtime = outputtime + '0' + date.getDate() + " "
    } else {
        outputtime = outputtime + date.getDate() + " "
    }

    if (date.getHours() < 10) {
        outputtime = outputtime + '0' + date.getHours() + ":"
    } else {
        outputtime = outputtime + date.getHours() + ":"
    }
    if (date.getMinutes() < 10) {
        outputtime = outputtime + '0' + date.getMinutes() + ":"
    } else {
        outputtime = outputtime + date.getMinutes() + ":"
    }
    if (date.getSeconds() < 10) {
        outputtime = outputtime + '0' + date.getSeconds() + " "
    } else {
        outputtime = outputtime + date.getSeconds() + " "
    }

    return outputtime;
}

//testing
console.log(printSQLdatetime(new Date()))

//Add hours to date
function addHours(date,hours) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
  }
  //testing
  console.log(printdatetime(addHours(new Date(),2)))

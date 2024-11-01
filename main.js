"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
differenceInSeconds;
var response = await inquirer_1.default.prompt([{
        type: "number",
        name: "userInput",
        message: "Please Enter The Amount Of Seconds",
        validate: function (Input) {
            if (isNaN(Input)) {
                retrn;
                "Please Enter Valid Number";
            }
            else if (Input > 60) {
                return "seconds must be in 60";
            }
            else {
                return true;
            }
        }
    }]);
var Input = response.userInput;
function startTime(value) {
    var intTime = new Date().setSeconds(new Date().getSeconds() + value);
    var intervalTime = new Date(intTime);
    setInterval(function () {
        var currentTime = new Date();
        var timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer has expired!");
            process.exit();
        }
        var minute = Math.floor((timeDifference % (3600 * 24)) / 3600);
        var seconds = Math.floor(timeDifference % 60);
        console.log("".concat(minute.toString().padStart(2, "0"), " : ").concat(seconds.toString().padStart(2, "0")));
    }, 1000);
}
startTime(Input);

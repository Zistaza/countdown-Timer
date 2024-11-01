
import inquirer from "inquirer"
differenceInSeconds

const response = await inquirer.prompt([{
    type: "number",
    name: "userInput",
    message: "Please Enter The Amount Of Seconds",
    validate : (Input)=>{
        if (isNaN(Input)){
            retrn "Please Enter Valid Number";
        } else if (Input > 60){
            return "seconds must be in 60";
        } else {
            return true;
        }
    }
}]);

let Input = response.userInput

function startTime(value: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(intTime);
 setInterval(()=> {
    const currentTime = new Date()
    const timeDifference = differenceInSeconds(intervalTime , currentTime);
    if (timeDifference <= 0) {
        console.log("Timer has expired!");
        process.exit();
        }
        const minute = Math.floor((timeDifference%(3600*24))/3600);
        const seconds = Math.floor(timeDifference%60);
        console.log(`${minute.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
 }, 1000);
}

startTime(Input);




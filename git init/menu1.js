const prompt = require('prompt-sync')();

let sum = 0;
let chickfillet = 0;
let orderItems = [];

while(true){
    const userInput = prompt('Order your food!Type"start"');
    if(userInput === "start") {
        const item = prompt('Burger or Drink or Payment');

        if(item.toLowerCase() === "burger") {
            const option = prompt("This is Burger menu (type enter)");
            const option1 = ["1.McSpicyChickenFilet","2.Double Cheeseburger","3.Ham N'Cheese Burger"];
            for(let i=0; i<option1.length; i++){
                console.log(option + option1[i]);
            }

            let number1 = prompt("please type 'number'.");
            switch(number1){
                case '1': 
                    console.log('McSpicy Chicken Filet is $ $24.');
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("McSpicy Chicken Filet - $24");
                    break;
                case '2':
                    console.log('Double Cheeseburger is $22');
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("Double Cheeseburger - $22");
                    break;
                case '3':
                    console.log("Ham N'Cheese Burger is $20");
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("Ham N'Cheese Burger - $20");
                    break;
                default:console.log("Error");
            }

            const caseValues = {
                1:24,
                2:22,
                3:20,
                defaultValue: 0,
            };
            if (caseValues[number1] !== undefined) {
                sum += caseValues[number1];
            } else {
                sum += caseValues.defaultValue;
            }
            console.log('Total:$'+ sum);

            
            const nextStep = prompt("Type 'drink', 'burger', or 'payment' ");
            if (nextStep.toLowerCase() === 'drink') {
                const option0 = prompt("This is drink menu (type enter)");
                const option2 = ["1.Cola","2.Milk Tea","3.Orange Juice"];
                for(let i=0; i<option2.length; i++){
                    console.log(option0 + option2[i]);
                }
                let number2 = prompt("please type 'number'.");
                switch(number2){
                    case '1': 
                        console.log('cola is $ $12.');
                        chickfillet+=1;
                        console.log(chickfillet);
                        orderItems.push("Cola - $12");
                        break;
                    case '2':
                        console.log('Milk Tea is $18');
                        chickfillet+=1;
                        console.log(chickfillet);
                        orderItems.push("Milk Tea - $18");
                        break;
                    case '3':
                        console.log("Orange Juice is $20");
                        chickfillet+=1;
                        console.log(chickfillet);
                        orderItems.push("Orange Juice - $20");
                        break;
                    default:console.log("Error");
                }

                const caseValues = {
                    1:12,
                    2:18,
                    3:20,
                    defaultValue: 0,
                };
                if (caseValues[number2] !== undefined) {
                    sum += caseValues[number2];
                } else {
                    sum += caseValues.defaultValue;
                }
                console.log('Total:$'+sum);
            } else if (nextStep.toLowerCase() === 'burger') {
                // back to burger menu//
            } else if (nextStep.toLowerCase() === 'payment') {
                break;
            } else {
                console.log("Error");
            }

        } else if (item.toLowerCase() === "drink") {
            const option0 = prompt("This is drink menu (type enter)");
            const option2 = ["1.Cola","2.Milk Tea","3.Orange Juice"];
            for(let i=0; i<option2.length; i++){
                console.log(option0 + option2[i]);
            }
            let number2 = prompt("please type 'number'.");
            switch(number2){
                case '1': 
                    console.log('cola is $ $12.');
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("Cola - $12");
                    break;
                case '2':
                    console.log('Milk Tea is $18');
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("Milk Tea - $18");
                    break;
                case '3':
                    console.log("Orange Juice is $20");
                    chickfillet+=1;
                    console.log(chickfillet);
                    orderItems.push("Orange Juice - $20");
                    break;
                default:console.log("Error");
            }

            const caseValues = {
                1:12,
                2:18,
                3:20,
                defaultValue: 0,
            };
            if (caseValues[number2] !== undefined) {
                sum += caseValues[number2];
            } else {
                sum += caseValues.defaultValue;
            }
            console.log('Total:$'+sum);

            const nextStep = prompt("Type 'burger' or 'payment' ");
            if (nextStep.toLowerCase() === 'burger') {
                // back to burger menu//
            } else if (nextStep.toLowerCase() === 'payment') {
                break;
            } else {
                console.log("Error");
            }
        } else if (item.toLowerCase() === "payment") {
            break;
        } else {
            console.log("Error");
            continue;
        }
    } else {
        console.log("Error");
        continue;
    }
}

const octopus = prompt('enter your otopus balance $');
if (octopus >= sum) {
    console.log("Success");
    console.log("Receipt:");
    for (let i = 0; i < orderItems.length; i++) {
        console.log(orderItems[i]);
    }
    console.log("Total: $" + sum);
} else if (octopus < sum && sum - octopus <= 35) {
    console.log("Success. Remaining balance on Octopus card: $0");
}else if (octopus < sum && sum - octopus > 35) {
    console.log("Not enough balance on your Octopus card.");
}

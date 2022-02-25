
// Alejandro Hernandez
// A01650390

let baseMaths = require('./maths')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var recursiveQuestions = function () {

rl.question(`What operation do you want to do?
1. Sum
2. Substract
3. Multiply
4. Division
5. Module 
`, function(option) {

if (option < 6 && option > 0){

    rl.question('Whats number A?', function(numA){
        rl.question('Whats number B?', function(numB){

            numA = parseInt(numA)
            numB = parseInt(numB)

            switch (option) {
                case '1':
                    console.log(baseMaths.sum(numA,numB));
                    break;
                case '2':
                    console.log(baseMaths.subtract(numA,numB));
                    break;
                case '3':
                    console.log(baseMaths.multiply(numA,numB));
                    break;
                case '4':
                    console.log(baseMaths.divide(numA,numB));
                    break;
                case '5':  
                    console.log(baseMaths.module(numA,numB));
                    break;
                
            }

           

            var recursiveRun = function() { rl.question(`Keep calculating?
            0 .- No
            1 .- Yes`, function(keepRunning){
            
                switch (keepRunning) {
                    case '0':
                        console.log(`Shutting down...`)
                        rl.close(); 
                        break;
                    case '1':
                        recursiveQuestions()
                        break;
                    default:
                    console.log(`
                    Sorry ${keepRunning} is not an option.
                    `);
                    recursiveRun()
                }
            
            });

            

        }

        recursiveRun()

        });

       
    });
    
}
else {
    console.log(` 
    Sorry ${option} is not an option.
    `);
    recursiveQuestions()
}
});

}

recursiveQuestions();






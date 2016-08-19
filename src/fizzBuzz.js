

function fizzBuzz(){
    this.doIt = function(start, end)
    {
        for(var x= start;x<= end;x++){
            if(x%15 === 0){
                console.log("FizzBuzz")
            } else if(x%3 === 0){
                console.log("Fizz")
            } else if(x%5 === 0){
                console.log("Buzz")
            } else {
                console.log(x)
            }
        }
    }

}

var one = new fizzBuzz()

one.doIt(1, 100)


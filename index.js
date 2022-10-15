const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0 ;

totalBatteries= batteryBatches.reduce((accumelator,value)=>{
        return accumelator + value
},0)


/* const reducer = (array) => {
   return  array.reduce(function batteries(accumelator, value){
        let totalBatteries = accumelator ;
        return totalBatteries += value
    })
}

reducer(batteryBatches) */




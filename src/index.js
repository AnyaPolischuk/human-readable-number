    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
    let doz = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let units = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let dop = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

module.exports = function toReadable (number) {

    






    if (number.toString().length === 1) {
        return unit[number]
    } else 
        if (number.toString().length === 2 && number <= 19 ) {
            return doz[number - 10]
    } else 
        if (number % 10 === 0 && number.toString().length === 2) {
            return units[Math.trunc((number - 20) / 10)]
    } else
        if (number.toString().length === 2)  {
            return `${units[Math.trunc((number - 20) / 10)]} ${unit[(number - Math.trunc(number / 10) * 10)]}`
        } else
         if (number % 100 === 0 && number.toString().length === 3) {
            return `${unit[number / 100]} hundred`
    } else 
        if (Math.trunc(number / 10) % 10 === 0 && number.toString().length === 3) {
            return `${unit[Math.trunc(number / 100)]} hundred ${unit[number - Math.trunc(number / 100) * 100]}`
    } else 
        if (number % 10 === 0 && number.toString().length === 3) {
            return `${unit[Math.trunc(number / 100)]} hundred ${dop[(number - Math.trunc(number / 100) * 100) / 10 - 1]}`
    } else 
        if ((number - Math.trunc(number / 100) * 100) <= 19 && number.toString().length === 3) {
            return `${unit[Math.trunc(number / 100)]} hundred ${doz[number - Math.trunc(number / 10) * 10]}`
    } else 
    { 
        return `${unit[Math.trunc(number / 100)]} hundred ${units[Math.trunc((number - Math.trunc(number / 100) * 100) / 10 - 2 )]} ${unit[number - Math.trunc(number / 10) * 10]}`
    }

    // if (number.toString().length === 1) {
    //     return units[number]
    // } else 
    //     if (number.toString().length === 2 && number <= 19 ) {
    //         return doz[number - 10]
    // } else 
    //     if (number % 10 === 0 && number.toString().length === 2) {
    //         return `${units[Math.trunc((number - 20) / 10)]}`
    // } else
    //     if (number.toString().length === 2)  {
    //         return `${units[Math.trunc((number - 20) / 10)]} ${unit[(number - Math.trunc(number / 10) * 10)]}`
    // } else
    //      if (number % 100 === 0 && number.toString().length === 3) {
    //         return `${unit[number / 100 - 1]} hundred`
    // } else 
    //     if (number % 10 === 0 && number.toString().length === 3) {
    //         return `${unit[Math.trunc(number / 100)]} hundred ${dop[(number - Math.trunc(number / 100) * 100) / 10 - 1]}`
    // } else 
    //     if ((number - Math.trunc(number / 100) * 100) <= 19 && number.toString().length === 3) {
    //         return `${unit[Math.trunc(number / 100)]} hundred ${doz[number - Math.trunc(number / 10) * 10]}`
    // } else {
    //     return `${unit[Math.trunc(number / 100)]} hundred ${units[Math.trunc((number - Math.trunc(number / 100) * 100) / 10 - 2 )]} ${unit[number - Math.trunc(number / 10) * 10]}`
    // }
    
    

}











    //let oneCount = number.toString().length;
    // if (oneCount === 1 || oneCount === 2) {
    //     switch (number) {
    //         case 0:
    //         alert('zero');
    //         break;
    //         case 1:
    //         alert('one');
    //         break;
    //         case 2:
    //         alert('two');
    //         break;
    //         case 3:
    //         alert('three');
    //         break;
    //         case 4:
    //         alert('four');
    //         break;
    //         case 5:
    //         alert('five');
    //         break;
    //         case 6:
    //         alert('six');
    //         break;
    //         case 7:
    //         alert('seven');
    //         break;
    //         case 8:
    //         alert('eight');
    //         break;
    //         case 9:
    //         alert('nine');
    //         break;
    //     }
    // }


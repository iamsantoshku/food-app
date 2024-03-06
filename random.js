let char1 = '';
let n1 = 6;
var charecter = "ABCDEFGHIJKLMNabcdefghijklmnopqrstuvwxyz123456789#$%";
function random(){
        val1 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val2 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val3 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val4 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val5 = charecter.charAt(Math.floor(Math.random() * charecter.length));
    
   // console.log(char);
    var toatl = val1+val2+val3+val4+val5
//    document.getElementById("capt").value=char;
   console.log(toatl)
}
random()
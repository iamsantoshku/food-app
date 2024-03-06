// function placeholderIsSupported() {
//     test = document.createElement('input');
//     return ('placeholder' in test);
//   }

// const { on } = require("nodemon");

// $(document).ready(function(){
//   placeholderSupport = placeholderIsSupported() ? 'placeholder' : 'no-placeholder';
//   $('html').addClass(placeholderSupport);  
// });
let char1 = '';
let n1 = 6;
let charecter1 = "ABCDEFGHIJKLMNabcdefghijklmnopqrstuvwxyz123456789#$%";
function random(){
        val1 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val2 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val3 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val4 = charecter.charAt(Math.floor(Math.random() * charecter.length));
        val5= charecter.charAt(Math.floor(Math.random() * charecter.length));
    
    // console.log(char);
    var toatl = val1+val2+val3+val4+val5
   document.getElementById("capt").value=char;
   console.log(toatl)

}



function validatename() {
    var username = document.getElementById('firstname').value
    if (username === "") {

        // alert("pleade filled correct value");
        document.getElementById('error1').innerHTML = "please filled correct value"; 
    }
    else if (username.length <= 2) {
        // alert("it is too short")
        document.getElementById('error2').innerHTML = "it is too short."; 
    }
}
// validatename();
function validmail() {
    var emailid = document.getElementById('emaill').value
    // if(emailid.length<9){
    //     alert("it is too short")
    // }
    // if(emailid.)
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailid.match(validRegex)) {

        alert("Valid email address!");       

    } else {

        // alert("Invalid email address!");
        document.getElementById('error3').innerHTML = "please filled valid email"; 


    }
}
function validmob() {
    var mob = document.getElementById('mobno').value
    if (mob != parseInt(mob)) {
        // alert('fill in integer value')
        document.getElementById("error4").innerHTML = "enter valid mob no"
    }
    if (mob.length < 10) {
        // alert('please enter valid mob no')
        document.getElementById("error4").innerHTML = "enter valid mob no"
    }
    else{
        document.getElementById("succes").innerHTML = "thanks for mob no"

    }
}
let char = '';
let n = 6;
let charecter = "ABCDEFGHIJKLMNabcdefghijklmnopqrstuvwxyz123456789#$%";
function random(){
    for(let i = 0; i<n; i++){

        char += charecter.charAt(Math.floor(Math.random() * charecter.length));
    }
    // console.log(char);
    document.getElementById("capt").value=char;
}
// window.on = random();
// function validcap(){
//     var str1 = document.getElementById("capt").value;
//     var str2 =  document.getElementById("captchafill").value;
//     if(str1 != ""){
//         if(str1 == str2){
//             return true;
//         }
//     }
//     else{
//         // document.getElementById("error").innerHTML= "enter valid captcha";
//         alert("nto match")
//         return false;
//     }

// }
// validcap();

function validcap(){
    var string1 = removeSpaces(document.getElementById('capt').value);
    var string2 = removeSpaces(document.getElementById('captchafill').value);
    if (string1 == string2){
document.getElementById('success').innerHTML = "Form is validated Successfully";
//alert("Form is validated Successfully");
      return true;
    }
    else{       
document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
//alert("Please enter a valid captcha.");
      return false;

    }
}
function removeSpaces(string){
    return string.split(' ').join('');
 }

// function myFunction() {
//     var item = document.getElementById("newitem").innerHTML;
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     // cell1.innerHTML = "egg roll ";
//     cell1.innerHTML = item;
    
// }
// function myFunction1() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     cell1.innerHTML = " Biryani ";
//     // cell2.innerHTML = "NEW CELL2";
// }
// function myFunction2() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     // var cell2 = row.insertCell(1);
//     cell1.innerHTML = "paneer ";
//     // cell2.innerHTML = "NEW CELL2";
// }
// function addrow(){
//     console.log("add row function")
    // var first = document.getElementById("iteamname").innerHTML
    // var second = document.getElementById("itemquantity").innerHTML
    // console.log("first")
    // var first = prompt("enter item")
    // var second = prompt("quanry")

    // if(first && second){
    //     var table = document.getElementById("orderid").getElementsByTagName('tbody'[0]);
    //     var row = table.insertRow(0);
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     var cell3 = row.insertCell(2);
    //     cell1.innerHTML = first;
    //     cell2.innerHTML = second;
    //     cell3.innerHTML = '<button class="deletebtn" onclick="deleterow(this)">delete</button>'
    // }
    // let table = document.getElementById("orderid");    
    //   let row = table.insertRow(0);    
    //   let c1 = row.insertCell(0);   
    //   let c3 = row.insertCell(2);     
    //   c1.innerText = "chicken"
    
    //   c3.innerText = 1
// }
// function deleterow(button){
//     var row = button.parentNode.parentNode;
//     row.parentNode.romoveChild(row);
// }
// document.getElementById('addItem').addEventListener('click', function() {
    function additem(){
    var foodItem = document.getElementById('foodItem').value;
    var table = document.getElementById('itemTable');
    var errorElement = document.getElementById('error');
    foodItem = foodItem.charAt(0).toUpperCase() + foodItem.slice(1).toLowerCase();

    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].textContent === foodItem) {
            errorElement.textContent = 'This item is already in the table.';
            return;
        }
    }

    if (foodItem != '') {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = foodItem;
        cell2.innerHTML = '<button class="table-button" onclick="decreaseQuantity(this)">-</button><span>1</span><button class="table-button" onclick="increaseQuantity(this)">+</button>';
        cell3.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';
        document.getElementById('foodItem').value = '';
        errorElement.textContent = '';
    }

    }
    
// });

// Decrease Quantity
function decreaseQuantity(btn) {
    var quantity = btn.nextSibling.textContent;
    if (quantity > 1) {
        btn.nextSibling.textContent = --quantity;
    }
}

// Increase Quantity
function increaseQuantity(btn) {
    var quantity = btn.previousSibling.textContent;
    btn.previousSibling.textContent = ++quantity;
}

// Delete Row
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function submit(){
    return validcap() && validmob() && validmail() && validmail();
}
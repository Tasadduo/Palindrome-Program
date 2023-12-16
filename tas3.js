var inputuser=prompt("Enter any word");
var reverseInput=inputuser.split('').reverse().join('');
if(inputuser==reverseInput){
    alert("Its a palindrome");
}
else{
    alert("Its not a palindrome");

}
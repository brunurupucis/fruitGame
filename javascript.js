var fruitNames = [
    'APPLE',
    'AVOCADO',
    'BANANA',
    'CHERRY',
    'PEACH',
    'PEAR',
    'STRAWBERRY'
]
document.querySelector('.fruits').style.display="none";

function newFruit(){
    var randomNumber = Math.floor(Math.random() * (fruitNames.length));

    var htmlDOM = document.querySelector('#fruitDisplay');
    htmlDOM.innerHTML = fruitNames[randomNumber];
    htmlDOM = document.querySelector('#fruitDisplay').style.display="none";
console.log(fruitNames[randomNumber]);
var pictureDOM = document.querySelector('.fruits');
pictureDOM.style.display = "block";
pictureDOM.src = `picture${randomNumber}.jpg`;   
document.getElementById('start-button').innerHTML ="Next";

   

}


function check(){
    let a = document.getElementById('fruitDisplay').innerHTML;
    let b = document.getElementById('inputCheck').value;

if (  a == b){
    document.getElementById('answer').innerHTML =" Congratulations, you got it right. ;)";
} else {
    document.getElementById('answer').innerHTML ="Please try again.";
}
}


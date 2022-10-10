var randomNumber1 = Math.floor((Math.random() * 6 )+ 1);
var randomNumber2 = Math.floor((Math.random() * 6 )+ 1);
var imgSrc1 = 'images/dice'+ randomNumber1 +'.png';
var imgSrc2 = 'images/dice'+ randomNumber2 +'.png';

document.querySelector("img.img1").setAttribute("src",imgSrc1) ;
document.querySelector("img.img2").setAttribute("src",imgSrc2) ;

if(randomNumber1 > randomNumber2){
    //player 1 is winner
    document.querySelector("h1").textContent = "Player 1 Wins🚩";
}else if(randomNumber2 > randomNumber1){
    //player 2 is winner
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
    
    
}else{
    //its a draw
    document.querySelector("h1").textContent = "It's a draw!";
    
}


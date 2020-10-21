//* Skapade 2 variabler för att accessa vår karaktär och block
var character = document.getElementById("character");
var block = document.getElementById("block");
//* Variabler för poäng och rekordpoäng
var score=0;
var highScore=0;

//* Funktion Jump gör så att karaktären ''hoppar'', se css:en
function jump(){
    //* Accesar karaktären och dess klass för att addera animationen 
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    //* Sätter intervaller
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

//* Spelfunktionen - Ökar poäng medan karaktären lever och detekterar om karaktären är död
var checkDead = setInterval(function() 
 { //* Sätt karaktären i top position och blocket i left position
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //* Kontrollera ifall karaktären har träffat blocket, annars fortsätt höja poängen
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        
        //* Kollar ifall nuvarande poäng (score) är högre än highScore, om score är högre än highScore sätts värdet av score till highScore-variabeln
        //* Visar även Alert-ruta - Alert-rutans innehåll säger också till ifall nuvarance poäng är högre än rekordet samt frågar ifall spelaren vill spela igen
        if(score > highScore && Math.floor(score/100) > 0){
            highScore = score;
            alert("Wow! Nytt rekord: " + Math.floor(highScore/100) + ". Vill du spela igen?");
        } else {
            alert("Bra försök! Din poäng blev: " + Math.floor(score/100) + ". Vill du spela igen?");
        }
        //* Återställe poängen till 0
        score=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        score++;
        //* Skriver ut poäng och rekordpoäng på motsvarande html-element i spelet
        document.getElementById("highScoreSpan").innerHTML = Math.floor(highScore/100);
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }
}, 10);
var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var bird = document.getElementById("bird");
var bg = document.getElementsByClassName("game");
var cloud = document.getElementById("cloud");

var audio = new Audio("sfx/jump.wav");
var audio_dead = new Audio("sfx/game-over.wav");

var counter = 0;
var bestScore = 0;
var prevScore = 0;

function jump() {

    if(dino.classList == "animate"){  //dodaje animate on function jump(), pozniej usuwa klase i dodaje move
        return
    }
    audio.play();
    dino.classList.remove("move");
    dino.classList.add("animate");
    setTimeout(function() {
        dino.classList.remove("animate");
        dino.classList.add("move");
    }, 300);
}

document.getElementById("bg").style.backgroundRepeat = "repeat-x";

var checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

    if(cactusLeft<20 && cactusLeft>-20 && dinoTop>=130){ //dino.getElementById("dino").style.backgroundImage = url("dino/dino_dead.png");
        
        cactus.style.animation = "none";
        bird.style.animation = "none";
        audio_dead.play();
        alert("You've got killed by a cactus. Score: "+ Math.floor(counter));

        cactus.style.animation = "cactus 1s infinite linear";
        bird.style.animation = "bird 4s infinite linear", "bird_fly 1s infinite linear";

        if(counter>=bestScore) {
            bestScore = 0;
            document.getElementById("bestScore").innerHTML = Math.floor(bestScore += counter); 
            document.getElementById("prevScore").innerHTML = Math.floor(prevScore = counter);
            counter = 0;
        } else {
            document.getElementById("prevScore").innerHTML = Math.floor(prevScore = counter); 
            counter = 0;
        }

        //window.location.reload(); // kiedy game over = true; automatyczne odswiezanie strony
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter);

    if(birdLeft<20 && birdLeft>-20 && birdTop<5 && dinoTop<130) {
        bird.style.animation = "none";
        cactus.style.animation = "none";
        audio_dead.play();
        alert("You've got killed by a bird. Score: "+ Math.floor(counter));

        bird.style.animation = "bird 4s infinite linear", "bird_fly 1s infinite linear";
        cactus.style.animation = "cactus 1s infinite linear";

        if(counter>=bestScore) {
            bestScore = 0;
            document.getElementById("bestScore").innerHTML = Math.floor(bestScore += counter); // bestScore
            document.getElementById("prevScore").innerHTML = Math.floor(prevScore = counter);  // prevScore
            counter = 0;
        } else {
            document.getElementById("prevScore").innerHTML = Math.floor(prevScore = counter); // prevScore
            counter = 0;
        }

        //window.location.reload();
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter);
    }

    if(Math.floor(counter) >= 10000) {
        bird.style.animation = "none";
        document.getElementById("cactus").style.backgroundImage = "url(sprites/skeleton.png)";
        document.getElementById("tree").style.backgroundImage = "url(sprites/hell_tree.png)";
        cactus.style.animation = "cactus 0.7s infinite linear";
        for (var i = 0; i < bg.length; i++) {
            //bg[i].style.backgroundColor = "#ff5e4f";
            bg[i].style.backgroundColor = "#ff5e4f";
        }

    } else if(Math.floor(counter) >= 5000) {
        document.getElementById("cactus").style.backgroundImage = "url(sprites/skeleton.png)";
        document.getElementById("tree").style.backgroundImage = "url(sprites/tree.png)";
        cactus.style.animation = "cactus 1s infinite ease-in";
        
        for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundColor = "#ff5e4f";
            }

        } else {
            document.getElementById("cactus").style.backgroundImage = "url(sprites/cactus.png)";
            document.getElementById("tree").style.backgroundImage = "url(sprites/tree.png)";
        for (var i = 0; i < bg.length; i++) {
            bg[i].style.backgroundColor = "#9EDDFA";
            }
        }
    }
}, 10);
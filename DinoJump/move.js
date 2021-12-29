/*var game = $('#game'),
    dino = $('#dino'),
    w = game.width() - dino.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    dino.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20); */


$("#game").keydown(function(event) { 
    var $dino = $("#dino");

    var addLeft = function(diff) {
        $dino.css("left", ($dino.position().left + diff) + "px");
    };

    switch(event.keyCode) {
        case 37: //left
            addLeft(-10); break; 
        case 39: //right
            addLeft(+10); break;
        default:
            break;
    }
}, 20);
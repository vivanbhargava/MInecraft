var canvas = new fabric.Canvas('myCanvas');
document.body.style.overflow="hidden";
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
var block_object = null;
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80'){
        console.log("shift + p is pressed");
        block_width += 10;
        block_height += 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    } else if (e.shiftKey == true && keypressed == '77') {
        console.log("shift + m is pressed");
        block_width -= 10;
        block_height -= 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    } else if (keypressed == '38'){
        up();
        console.log("up");
    } else if (keypressed == '40'){
        down();
        console.log("down");
    } else if (keypressed == '37'){
        left();
        console.log("left");
    } else if (keypressed == '39'){
        right();
        console.log("right");
    } else if (keypressed == '87'){
        new_image('wall.jpg');
        console.log("w");
    } else if (keypressed == '71'){
        new_image('ground.png');
        console.log("g");
    } else if (keypressed == '76'){
        new_image('light_green.png');
        console.log("l");
    } else if (keypressed == '84'){
        new_image('trunk.jpg');
        console.log("t");
    } else if (keypressed == '82'){
        new_image('roof.jpg');
        console.log("r");
    } else if (keypressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    } else if (keypressed == '68'){
        new_image('dark_green.png');
        console.log("d");
    } else if (keypressed == '85'){
        new_image('unique.png');
        console.log("u");
    } else if (keypressed == '67'){
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up() {
    if (player_y >= 0) {
        player_y -= block_height;
        console.log("Block height" + block_height);
        console.log("When up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
function down() {
    if (player_y <= 600) {
        player_y += block_height;
        console.log("Block height" + block_height);
        console.log("When down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
function left() {
    if (player_x >= 0) {
        player_x -= block_width;
        console.log("Block width = " + block_width);
        console.log("When left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
function right() {
    if (player_x <= 850) {
        player_x += block_width;
        console.log("Block width = " + block_width);
        console.log("When right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
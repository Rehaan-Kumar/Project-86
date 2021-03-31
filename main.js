var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
image_width = 30;
image_height = 30;
player_object = "";
image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(image_width);
        block_object.scaleToHeight(image_height);
        block_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(block_object);
    });
}

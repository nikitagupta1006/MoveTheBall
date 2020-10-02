var ball = document.getElementById("ball");
var box = document.getElementById("box");
var box_coordinates = box.getBoundingClientRect();
var ball_coordinates = ball.getBoundingClientRect();
var offset = 10;
ball.style.position = "relative";
var borderWidth = (box.offsetWidth - box.clientWidth) / 2;
console.log("border width: ", borderWidth);
var x_offset = ball_coordinates.left - box_coordinates.left - borderWidth; // numerical value
ball.style.left = x_offset + "px";
console.log("relative left: ", ball.style.left);
var y_offset = ball_coordinates.top - box_coordinates.top - borderWidth; // numerical value
ball.style.top = y_offset + "px";
console.log("relative top: ", ball.style.top);
document.addEventListener("keypress", function(event) {
    let key = event.key;

    switch (key) {
        case "w":
            y_offset -= offset;
            if (y_offset >= 0) {
                ball.style.top = y_offset + "px";
                console.log("relative top after shift: ", ball.style.top);
            } else {
                alert("cannot move up");
            }
            break;

        case "a":
            x_offset -= offset;
            if (x_offset >= 0) {
                ball.style.left = x_offset + "px";
                console.log("relative left after shift: ", ball.style.left);
            } else {
                alert("cannot move left");
            }
            break;
        case "s":
            y_offset += offset;
            if (y_offset + ball_coordinates.height + borderWidth <= box_coordinates.bottom) {
                ball.style.top = y_offset + "px";
                console.log("relative top after shift: ", ball.style.top);
            } else {
                alert("cannot move down");
            }
            break;

        case "d":
            x_offset += offset;
            console.log("new left: ", x_offset + ball_coordinates.width + borderWidth);
            console.log(box_coordinates.right);
            if (x_offset + ball_coordinates.width + 2 * borderWidth + box_coordinates.left <= box_coordinates.right) {
                ball.style.left = x_offset + "px";
                console.log("relative left after shift: ", ball.style.left);
            } else {
                alert("cannot move right");
            }
            break;

    }
});

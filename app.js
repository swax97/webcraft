//Webcraft v0.0


/*global PixelShader, PixelShaderUniform*/
/*global Input*/
/*global Player*/


var canvas = document.createElement("canvas");
canvas.setAttribute("width", 400);
canvas.setAttribute("height", 400);
document.appendChild(canvas);


var shader = new PixelShader(canvas);
shader.setup();



var player = new Player();
var direction = new PixelShaderUniform("direction", "glUniform3f", player.getDirectionUniform);
var position = new PixelShaderUniform("direction", "glUniform3f", player.getPositionUniform);

shader.addUniform(direction);
shader.addUniform(position);

var mouse = new PixelShaderUniform("mouse", "glUniform2f", Input.mouse);
shader.addUniform(mouse);



var rate = 1000 / 50; //50fps
function frame(){
    shader.display();
    
    window.requestAnimationFrame(function(){
        window.setTimeout(frame, rate);
    });
}

frame();















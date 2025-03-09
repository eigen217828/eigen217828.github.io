// Global constants: Canvas and WebGL2
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Size of the canvas
canvas.width = 500;
canvas.height = 500;
// Render loop 
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
}
function drawquadrant() {
    // SCISSOR_TEST: Divide quadrant
    gl.enable(gl.SCISSOR_TEST);

    // Upper Right: Green
    gl.scissor(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2); 
    gl.clearColor(0.0, 1.0, 0.0, 1.0); // Designate color to be used to clear function 
    render();

    // Upper Left: Red
    gl.scissor(0, canvas.width/2, canvas.width/2, canvas.height/2); 
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    render();

    // Lower Left: Blue
    gl.scissor(0, 0, canvas.width/2, canvas.height/2); 
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    render();

    // Lower Right: Yellow
    gl.scissor(canvas.width/2, 0, canvas.width/2, canvas.height/2); // 수정됨
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    render();

    // Off the scissor test
    gl.disable(gl.SCISSOR_TEST);

}
drawquadrant()


// Resize viewport when window size changes
window.addEventListener('resize', () => {
    const size = Math.min(window.innerWidth, window.innerHeight);
    const limited_size = Math.min(size,500)
    canvas.width = limited_size;
    canvas.height = limited_size;
    drawquadrant();
});
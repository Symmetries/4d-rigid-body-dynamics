import { initializeState, update, render } from './physics.js';
import { Bivec4 } from './bivec4.js';
let globals = {
    canvas: null,
    ctx: null,
    dimensions: {
        width: 0,
        height: 0
    },
    mousePressed: false,
};
let state;
function handleOnResize() {
    globals.canvas.width = window.innerWidth;
    globals.canvas.height = window.innerHeight;
    globals.dimensions.width = globals.canvas.width;
    globals.dimensions.height = globals.canvas.height;
}
function handleAnimationFrame() {
    let vs = [];
    for (let i = 0; i < 6; i++) {
        let slider = document.querySelector(`#slider${i}`);
        vs.push(globals.mousePressed ? 5 * slider.value : 0);
    }
    update(state, globals.dimensions, new Bivec4(vs[0], vs[1], vs[2], vs[3], vs[4], vs[5]));
    render(state, globals.dimensions, globals.ctx);
    window.requestAnimationFrame(handleAnimationFrame);
}
window.onload = () => {
    globals.canvas = document.querySelector('canvas');
    globals.ctx = globals.canvas.getContext('2d');
    handleOnResize();
    window.onresize = handleOnResize;
    state = initializeState(globals.dimensions);
    window.requestAnimationFrame(handleAnimationFrame);
    let torqueButton = document.querySelector('#torque');
    torqueButton.onmousedown = () => globals.mousePressed = true;
    torqueButton.onmouseup = () => globals.mousePressed = false;
    let reset1Button = document.querySelector('#reset1');
    reset1Button.onclick = () => {
        for (let i = 0; i < 6; i++) {
            let slider = document.querySelector(`#slider${i}`);
            slider.value = 0;
        }
    };
    let reset2Button = document.querySelector('#reset2');
    reset2Button.onclick = () => state = initializeState(globals.dimensions);
};

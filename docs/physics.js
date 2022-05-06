import { Vec4 } from "./vec4.js";
import { Rotor4 } from "./rotor4.js";
import { Bivec4 } from "./bivec4.js";
import { Hyperprism } from "./hyperprism.js";
let state;
let iterations = 20;
let dt = 0.01;
function initializeState(dims) {
    return {
        c: new Hyperprism(new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0), new Rotor4(1, 0, 0, 0, 0, 0, 0, 0), new Bivec4(0, 0, 0, 0, 0, 0), new Vec4(1, 1, 1, 1)),
    };
}
function update(state, dims, torque) {
    for (let i = 0; i < iterations; i++) {
        state.c.update(dt / iterations, torque);
    }
}
function render(state, dims, ctx) {
    let side = Math.min(dims.width, dims.height) / 7;
    ctx.resetTransform();
    ctx.lineWidth = side / 50;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dims.width, dims.height);
    ctx.translate(dims.width / 2, dims.height / 2);
    ctx.strokeStyle = "blue";
    let c = state.c;
    function toCanvas(x, y) {
        return { x: side * x, y: side * y };
    }
    function line(p, q) {
        p = toCanvas(p.x, p.y);
        q = toCanvas(q.x, q.y);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
    }
    let x = c.sides.x;
    let y = c.sides.y;
    let z = c.sides.z;
    let w = c.sides.w;
    for (let i of [-1, 1]) {
        for (let j of [-1, 1]) {
            for (let k of [-1, 1]) {
                let a1 = new Vec4(-x, i * y, j * z, k * w);
                let a2 = new Vec4(x, i * y, j * z, k * w);
                let b1 = new Vec4(i * x, -y, j * z, k * w);
                let b2 = new Vec4(i * x, y, j * z, k * w);
                let c1 = new Vec4(i * x, j * y, -z, k * w);
                let c2 = new Vec4(i * x, j * y, z, k * w);
                let d1 = new Vec4(i * x, j * y, k * z, -w);
                let d2 = new Vec4(i * x, j * y, k * z, w);
                a1 = c.R.rotate(a1);
                a2 = c.R.rotate(a2);
                b1 = c.R.rotate(b1);
                b2 = c.R.rotate(b2);
                c1 = c.R.rotate(c1);
                c2 = c.R.rotate(c2);
                d1 = c.R.rotate(d1);
                d2 = c.R.rotate(d2);
                a1.add(c.s, 1);
                a2.add(c.s, 1);
                b1.add(c.s, 1);
                b2.add(c.s, 1);
                c1.add(c.s, 1);
                c2.add(c.s, 1);
                d1.add(c.s, 1);
                d2.add(c.s, 1);
                line(a1, a2);
                line(b1, b2);
                line(c1, c2);
                line(d1, d2);
            }
        }
    }
}
export { initializeState, update, render };

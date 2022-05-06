import { Bivec4 } from "./bivec4.js";
class Hyperprism {
    constructor(s, v, R, omega, sides) {
        this.s = s;
        this.v = v;
        this.R = R;
        this.omega = omega;
        this.sides = sides;
        this.I = new Bivec4(sides.x * sides.y * (Math.pow(sides.x, 2) + Math.pow(sides.y, 2)), sides.x * sides.z * (Math.pow(sides.x, 2) + Math.pow(sides.z, 2)), sides.w * sides.x * (Math.pow(sides.w, 2) + Math.pow(sides.x, 2)), sides.y * sides.z * (Math.pow(sides.y, 2) + Math.pow(sides.z, 2)), sides.w * sides.y * (Math.pow(sides.w, 2) + Math.pow(sides.y, 2)), sides.w * sides.z * (Math.pow(sides.w, 2) + Math.pow(sides.z, 2)));
        this.I.scale(4 / 3);
    }
    update(dt, torque) {
        this.s.add(this.v, dt);
        this.omega.add(torque, dt);
        this.R.add(this.R.multLeft(this.omega), 0.5 * dt);
    }
    applyInertia(bivec) {
        return new Bivec4(this.I.b01 * bivec.b01, this.I.b02 * bivec.b02, this.I.b03 * bivec.b03, this.I.b12 * bivec.b12, this.I.b13 * bivec.b13, this.I.b23 * bivec.b23);
    }
    applyInertiaInv(bivec) {
        return new Bivec4(bivec.b01 / this.I.b01, bivec.b02 / this.I.b02, bivec.b03 / this.I.b03, bivec.b12 / this.I.b12, bivec.b13 / this.I.b13, bivec.b23 / this.I.b23);
    }
}
export { Hyperprism };

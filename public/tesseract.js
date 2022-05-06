import { Vec4 } from "./vec4.js";
class Hyperprism {
    constructor(s, v, R, omega, sizes) {
        this.s = s;
        this.v = v;
        this.R = R;
        this.omega = omega;
        this.sizes = sizes;
        this.I = new Vec4(sizes.x * sizes.y * (Math.pow(sizes.x, 2) + Math.pow(sizes.y, 2)), sizes.x * sizes.z * (Math.pow(sizes.x, 2) + Math.pow(sizes.z, 2)), sizes.w * sizes.x * (Math.pow(sizes.w, 2) + Math.pow(sizes.x, 2)), sizes.y * sizes.z * (Math.pow(sizes.y, 2) + Math.pow(sizes.z, 2)), sizes.w * sizes.y * (Math.pow(sizes.w, 2) + Math.pow(sizes.y, 2)), sizes.w * sizez.z * (Math.pow(sizes.w, 2) + Math.pow(sizez.z, 2)));
        this.I.scale(4 / 3);
    }
    update(dt) {
        this.s.add(this.v, dt);
        this.R.add(this.R.multLeft(this.omega), 0.5 * dt);
    }
}
export { Hyperprism };

import { Vec4 } from "./vec4.js";
class Rotor4 {
    constructor(a, b01, b02, b03, b12, b13, b23, b0123) {
        this.a = a;
        this.b01 = b01;
        this.b02 = b02;
        this.b03 = b03;
        this.b12 = b12;
        this.b13 = b13;
        this.b23 = b23;
        this.b0123 = b0123;
    }
    rotate(v) {
        return new Vec4(this.a * this.a * v.x + 2 * this.a * this.b01 * v.y
            + 2 * this.a * this.b02 * v.z + 2 * this.a * this.b03 * v.w
            - this.b01 * this.b01 * v.x + 2 * this.b01 * this.b12 * v.z
            + 2 * this.b01 * this.b13 * v.w - this.b0123 * this.b0123 * v.x
            + 2 * this.b0123 * this.b12 * v.w - 2 * this.b0123 * this.b13 * v.z
            + 2 * this.b0123 * this.b23 * v.y - this.b02 * this.b02 * v.x
            - 2 * this.b02 * this.b12 * v.y + 2 * this.b02 * this.b23 * v.w
            - this.b03 * this.b03 * v.x - 2 * this.b03 * this.b13 * v.y
            - 2 * this.b03 * this.b23 * v.z + this.b12 * this.b12 * v.x
            + this.b13 * this.b13 * v.x + this.b23 * this.b23 * v.x, this.a * this.a * v.y - 2 * this.a * this.b01 * v.x
            + 2 * this.a * this.b12 * v.z + 2 * this.a * this.b13 * v.w
            - this.b01 * this.b01 * v.y - 2 * this.b01 * this.b02 * v.z
            - 2 * this.b01 * this.b03 * v.w - this.b0123 * this.b0123 * v.y
            - 2 * this.b0123 * this.b02 * v.w + 2 * this.b0123 * this.b03 * v.z
            - 2 * this.b0123 * this.b23 * v.x + this.b02 * this.b02 * v.y
            - 2 * this.b02 * this.b12 * v.x + this.b03 * this.b03 * v.y
            - 2 * this.b03 * this.b13 * v.x - this.b12 * this.b12 * v.y
            + 2 * this.b12 * this.b23 * v.w - this.b13 * this.b13 * v.y
            - 2 * this.b13 * this.b23 * v.z + this.b23 * this.b23 * v.y, this.a * this.a * v.z - 2 * this.a * this.b02 * v.x
            - 2 * this.a * this.b12 * v.y + 2 * this.a * this.b23 * v.w
            + this.b01 * this.b01 * v.z + 2 * this.b01 * this.b0123 * v.w
            - 2 * this.b01 * this.b02 * v.y + 2 * this.b01 * this.b12 * v.x
            - this.b0123 * this.b0123 * v.z - 2 * this.b0123 * this.b03 * v.y
            + 2 * this.b0123 * this.b13 * v.x - this.b02 * this.b02 * v.z
            - 2 * this.b02 * this.b03 * v.w + this.b03 * this.b03 * v.z
            - 2 * this.b03 * this.b23 * v.x - this.b12 * this.b12 * v.z
            - 2 * this.b12 * this.b13 * v.w + this.b13 * this.b13 * v.z
            - 2 * this.b13 * this.b23 * v.y - this.b23 * this.b23 * v.z, this.a * this.a * v.w - 2 * this.a * this.b03 * v.x
            - 2 * this.a * this.b13 * v.y - 2 * this.a * this.b23 * v.z
            + this.b01 * this.b01 * v.w - 2 * this.b01 * this.b0123 * v.z
            - 2 * this.b01 * this.b03 * v.y + 2 * this.b01 * this.b13 * v.x
            - this.b0123 * this.b0123 * v.w + 2 * this.b0123 * this.b02 * v.y
            - 2 * this.b0123 * this.b12 * v.x + this.b02 * this.b02 * v.w
            - 2 * this.b02 * this.b03 * v.z + 2 * this.b02 * this.b23 * v.x
            - this.b03 * this.b03 * v.w + this.b12 * this.b12 * v.w
            - 2 * this.b12 * this.b13 * v.z + 2 * this.b12 * this.b23 * v.y
            - this.b13 * this.b13 * v.w - this.b23 * this.b23 * v.w);
    }
    rotateBivec(bivec) {
    }
    multLeft(bivec) {
        return new Rotor4(-this.b23 * bivec.b23 - this.b13 * bivec.b13
            - this.b12 * bivec.b12 - this.b03 * bivec.b03
            - this.b02 * bivec.b02 - this.b01 * bivec.b01, -this.b0123 * bivec.b23 + this.b03 * bivec.b13
            + this.b02 * bivec.b12 - this.b13 * bivec.b03
            - this.b12 * bivec.b02 + this.a * bivec.b01, this.b03 * bivec.b23 + this.b0123 * bivec.b13
            - this.b01 * bivec.b12 - this.b23 * bivec.b03
            + this.a * bivec.b02 + this.b12 * bivec.b01, -this.b02 * bivec.b23 - this.b01 * bivec.b13
            - this.b0123 * bivec.b12 + this.a * bivec.b03
            + this.b23 * bivec.b02 + this.b13 * bivec.b01, this.b13 * bivec.b23 - this.b23 * bivec.b13
            + this.a * bivec.b12 - this.b0123 * bivec.b03
            + this.b01 * bivec.b02 - this.b02 * bivec.b01, -this.b12 * bivec.b23 + this.a * bivec.b13
            + this.b23 * bivec.b12 + this.b01 * bivec.b03
            + this.b0123 * bivec.b02 - this.b03 * bivec.b01, this.a * bivec.b23 + this.b12 * bivec.b13
            - this.b13 * bivec.b12 + this.b02 * bivec.b03
            - this.b03 * bivec.b02 - this.b0123 * bivec.b01, this.b01 * bivec.b23 - this.b02 * bivec.b13
            + this.b03 * bivec.b12 + this.b12 * bivec.b03
            - this.b13 * bivec.b02 + this.b23 * bivec.b01);
    }
    add(R, c) {
        this.a += c * R.a;
        this.b01 += c * R.b01;
        this.b02 += c * R.b02;
        this.b03 += c * R.b03;
        this.b12 += c * R.b12;
        this.b13 += c * R.b13;
        this.b23 += c * R.b23;
        this.b0123 += c * R.b0123;
    }
}
export { Rotor4 };

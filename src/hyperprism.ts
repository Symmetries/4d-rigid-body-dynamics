import { Vec4 } from "./vec4.js"
import { Bivec4 } from "./bivec4.js"
import { Rotor4 } from "./rotor4.js"

class Hyperprism {
    s : Vec4;
    v : Vec4;
    R : Rotor4;
    omega : Bivec4;
    sides: Vec4;
    I: Bivec4;

    constructor(s : Vec4, v : Vec4, R: Rotor4, omega: Bivec4, sides : Vec4) {
        this.s = s;
        this.v = v;
        this.R = R;
        this.omega = omega;
        this.sides = sides;
        this.I = new Bivec4(
            sides.x * sides.y * (sides.x**2 + sides.y**2),
            sides.x * sides.z * (sides.x**2 + sides.z**2),
            sides.w * sides.x * (sides.w**2 + sides.x**2),
            sides.y * sides.z * (sides.y**2 + sides.z**2),
            sides.w * sides.y * (sides.w**2 + sides.y**2),
            sides.w * sides.z * (sides.w**2 + sides.z**2)
        )
        this.I.scale(4/3);
    }

    update(dt : number, torque : Bivec4) : void {
        this.s.add(this.v, dt);
        this.omega.add(torque, dt);
        this.R.add(this.R.multLeft(this.omega), 0.5 * dt);
    }

    applyInertia(bivec : Bivec4) : Bivec4 {
        return new Bivec4(
            this.I.b01 * bivec.b01,
            this.I.b02 * bivec.b02,
            this.I.b03 * bivec.b03,
            this.I.b12 * bivec.b12,
            this.I.b13 * bivec.b13,
            this.I.b23 * bivec.b23
        )
    }
    
    applyInertiaInv(bivec : Bivec4) : Bivec4 {
        return new Bivec4(
            bivec.b01 / this.I.b01,
            bivec.b02 / this.I.b02,
            bivec.b03 / this.I.b03,
            bivec.b12 / this.I.b12,
            bivec.b13 / this.I.b13,
            bivec.b23 / this.I.b23
        )
    }

}

export { Hyperprism };

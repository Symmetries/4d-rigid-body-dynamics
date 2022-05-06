class Bivec4 {
    b01 : number;
    b02 : number;
    b03 : number;
    b12 : number;
    b13 : number;
    b23 : number;

    constructor(b01 : number, b02 : number, b03 : number, b12 : number,
        b13 : number, b23 : number) {
        this.b01 = b01;
        this.b02 = b02;
        this.b03 = b03;
        this.b12 = b12;
        this.b13 = b13;
        this.b23 = b23;
    }

    scale(a : number) {
        this.b01 *= a;
        this.b02 *= a;
        this.b03 *= a;
        this.b12 *= a;
        this.b13 *= a;
        this.b23 *= a;
    }

    add(b : Bivec4, a : number) {
        this.b01 += a * b.b01;
        this.b02 += a * b.b02;
        this.b03 += a * b.b03;
        this.b12 += a * b.b12;
        this.b13 += a * b.b13;
        this.b23 += a * b.b23;
    }
}

export { Bivec4 };

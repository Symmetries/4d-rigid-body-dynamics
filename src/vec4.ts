class Vec4 {
    x : number;
    y : number;
    z : number;
    w : number;

    constructor(x : number, y : number, z : number, w : number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    add (b : Vec4, a : number) {
        this.x += a * b.x;
        this.y += a * b.y;
        this.z += a * b.z;
        this.w += a * b.w;
    }
}

export { Vec4 };

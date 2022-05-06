class Vec4 {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    add(b, a) {
        this.x += a * b.x;
        this.y += a * b.y;
        this.z += a * b.z;
        this.w += a * b.w;
    }
}
export { Vec4 };

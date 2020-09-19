module.exports = class Interpolator {
        constructor(points, tinggiBadan) {
            this.points = points;
            this.tinggiBadan = tinggiBadan;
        }

        interpolateCalculate() {
            let x1 = 0;
            let x2 = 0;
            let y1 = 0;
            let y2 = 0;

            for (let i = 0; i < this.points.length; i++) {
                if (this.tinggiBadan <= this.points[i].x) {
                    x1 = this.points[i - 1].x;
                    y1 = this.points[i - 1].y;
                    x2 = this.points[i].x;
                    y2 = this.points[i].y;
                    break;
                }    
            }

            return y1 + (y2 - y1) * ((this.tinggiBadan - x1) / (x2 - x1));
        }
}
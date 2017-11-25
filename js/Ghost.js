class Ghost {
    constructor(offsetX, offsetY, scale, name) {
        this.odd = 0;
        this.direction = "RIGHT";
        this.scale = scale;
        this.name = name;
        switch (this.name) {
            case "BLINKY":
                this.colour = "#ff0000";
                this.x = (scale * 12) + offsetX;
                this.y = (scale * 11) + offsetY;
                break;
            case "PINKY":
                this.colour = "#ffb8ff";
                this.x = (scale * 16) + offsetX;
                this.y = (scale * 11) + offsetY;
                break;
            case "INKY":
                this.colour = "#00ffff";
                this.x = (scale * 12) + offsetX;
                this.y = (scale * 13) + offsetY;
                break;
            case "CLYDE":
                this.colour = "#ffb851";
                this.x = (scale * 16) + offsetX;
                this.y = (scale * 13) + offsetY;
                break;
        }
        this.Body = [[0, 0], [0, -8], [1, -8], [1, -11], [2, -11], [2, -12], [3, -12], [3, -13], [5, -13], [5, -14], [9, -14], [9, -13], [11, -13], [11, -12], [12, -12], [12, -11], [13, -11], [13, -8], [14, -8], [14, 0]];
        this.LegsOdd = [[13, 0], [13, -1], [12, -1], [12, -2], [11, -2], [11, -1], [10, -1], [10, 0], [8, 0], [8, -2], [6, -2], [6, 0], [4, 0], [4, -1], [3, -1], [3, -2], [2, -2], [2, -1], [1, -1], [1, 0]];
        this.LegsEven = [[11, 0], [11, -1], [10, -1], [10, -2], [9, -2], [9, -1], [8, -1], [8, 0], [6, 0], [6, -1], [5, -1], [5, -2], [4, -2], [4, -1], [3, -1], [3, 0]];
        this.LeftEye = [[1, -7], [1, -10], [2, -10], [2, -11], [4, -11], [4, -10], [5, -10], [5, -7], [4, -7], [4, -6], [2, -6], [2, -7]];
        this.RightEye = [[7, -7], [7, -10], [8, -10], [8, -11], [10, -11], [10, -10], [11, -10], [11, -7], [10, -7], [10, -6], [8, -6], [8, -7]];
        this.Eyes = {
            "LEFT": [0, 0, 0, 0],
            "RIGHT": [2, 0, 4, 0],
            "UP": [1, -2, 2, -4],
            "DOWN": [1, 1, 2, 2]
        };
    }

    draw() {
        noStroke();
        fill(this.colour);
        beginShape();
        this.Body.forEach((p) => vertex((this.x + p[0]), (this.y + p[1])));
        if (this.odd < 0) {
            this.LegsOdd.forEach((p) => vertex((this.x + p[0]), (this.y + p[1])));
        } else {
            this.LegsEven.forEach((p) => vertex((this.x + p[0]), (this.y + p[1])));
        }
        endShape(CLOSE);
        fill("#dedeff");
        beginShape();
        this.LeftEye.forEach((p) => vertex(this.x + p[0] + this.Eyes[this.direction][0], this.y + p[1] + this.Eyes[this.direction][1]));
        endShape(CLOSE);
        beginShape();
        this.RightEye.forEach((p) => vertex(this.x + p[0] + this.Eyes[this.direction][0], this.y + p[1] + this.Eyes[this.direction][1]));
        endShape(CLOSE);
        fill("#2121ff");
        rect(this.x + 1 + this.Eyes[this.direction][2], this.y - 9 + this.Eyes[this.direction][3], 2, 2);
        rect(this.x + 7 + this.Eyes[this.direction][2], this.y - 9 + this.Eyes[this.direction][3], 2, 2);
        this.odd++;
        if (this.odd === 5) {
            this.odd = -5;
        }
        if (!(this.x % (this.scale / 2)) && !(this.y % (this.scale / 2))) {

        }
    }
}
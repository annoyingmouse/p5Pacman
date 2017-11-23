class Ghost{
    constructor(offsetX, offsetY, scale, name){
        this.odd = 0;
        this.direction = "RIGHT";
        this.scale = scale;
        this.name = name;
        switch (this.name) {
            case "BLINKY":
                this.colour = "#ff0000";
                this.x = (scale * 13) + offsetX;
                this.y = (scale * 11) + offsetY;
                break;
            case "PINKY":
                this.colour = "#ffb8ff";
                this.x = (scale * 17) + offsetX;
                this.y = (scale * 11) + offsetY;
                break;
            case "INKY":
                this.colour = "#00ffff";
                this.x = (scale * 13) + offsetX;
                this.y = (scale * 13) + offsetY;
                break;
            case "CLYDE":
                this.colour = "#ffb851";
                this.x = (scale * 17) + offsetX;
                this.y = (scale * 13) + offsetY;
                break;
        }
    }
    drawBody(x, y, colour, odd){
        noStroke();
        fill(colour);
        beginShape();
        vertex(x, y);
        vertex(x, y-8);
        vertex(x+1, y-8);
        vertex(x+1, y-11);
        vertex(x+2, y-11);
        vertex(x+2, y-12);
        vertex(x+3, y-12);
        vertex(x+3, y-13);
        vertex(x+5, y-13);
        vertex(x+5, y-14);
        vertex(x+9, y-14);
        vertex(x+9, y-13);
        vertex(x+11, y-13);
        vertex(x+11, y-12);
        vertex(x+12, y-12);
        vertex(x+12, y-11);
        vertex(x+13, y-11);
        vertex(x+13, y-8);
        vertex(x+14, y-8);
        vertex(x+14, y);
        if(odd < 0){
            vertex(x+13, y );
            vertex(x+13, y-1 );
            vertex(x+12, y-1 );
            vertex(x+12, y-2 );
            vertex(x+11, y-2 );
            vertex(x+11, y-1 );
            vertex(x+10, y-1 );
            vertex(x+10, y);
            vertex(x+8, y);
            vertex(x+8, y-2);
            vertex(x+6, y-2);
            vertex(x+6, y);
            vertex(x+4, y);
            vertex(x+4, y-1);
            vertex(x+3, y-1);
            vertex(x+3, y-2);
            vertex(x+2, y-2);
            vertex(x+2, y-1);
            vertex(x+1, y-1);
            vertex(x+1, y);
        }else{
            vertex(x+11, y);
            vertex(x+11, y-1);
            vertex(x+10, y-1);
            vertex(x+10, y-2);
            vertex(x+9, y-2);
            vertex(x+9, y-1);
            vertex(x+8, y-1);
            vertex(x+8, y);
            vertex(x+6, y);
            vertex(x+6, y-1);
            vertex(x+5, y-1);
            vertex(x+5, y-2);
            vertex(x+4, y-2);
            vertex(x+4, y-1);
            vertex(x+3, y-1);
            vertex(x+3, y);
        }
        endShape(CLOSE);
    }
    drawEye(x, y, direction){
        let whiteX = null,
            whiteY = null,
            pupilX = null,
            pupilY = null;
        if(direction === "LEFT"){
            whiteX = 0;
            whiteY = 0;
            pupilX = 0;
            pupilY = 0;
        }
        if(direction === "RIGHT"){
            whiteX = 2;
            whiteY = 0;
            pupilX = 4;
            pupilY = 0;
        }
        if(direction === "UP"){
            whiteX = 1;
            whiteY = -2;
            pupilX = 2;
            pupilY = -4;
        }
        if(direction === "DOWN"){
            whiteX = 1;
            whiteY = 1;
            pupilX = 2;
            pupilY = 2;
        }
        fill("#dedeff");
        beginShape();
        vertex(x+1+whiteX, y-7+whiteY);
        vertex(x+1+whiteX, y-10+whiteY);
        vertex(x+2+whiteX, y-10+whiteY);
        vertex(x+2+whiteX, y-11+whiteY);
        vertex(x+4+whiteX, y-11+whiteY);
        vertex(x+4+whiteX, y-10+whiteY);
        vertex(x+5+whiteX, y-10+whiteY);
        vertex(x+5+whiteX, y-7+whiteY);
        vertex(x+4+whiteX, y-7+whiteY);
        vertex(x+4+whiteX, y-6+whiteY);
        vertex(x+2+whiteX, y-6+whiteY);
        vertex(x+2+whiteX, y-7+whiteY);
        endShape(CLOSE);
        beginShape();
        vertex(x+7+whiteX, y-7+whiteY);
        vertex(x+7+whiteX, y-10+whiteY);
        vertex(x+8+whiteX, y-10+whiteY);
        vertex(x+8+whiteX, y-11+whiteY);
        vertex(x+10+whiteX, y-11+whiteY);
        vertex(x+10+whiteX, y-10+whiteY);
        vertex(x+11+whiteX, y-10+whiteY);
        vertex(x+11+whiteX, y-7+whiteY);
        vertex(x+10+whiteX, y-7+whiteY);
        vertex(x+10+whiteX, y-6+whiteY);
        vertex(x+8+whiteX, y-6+whiteY);
        vertex(x+8+whiteX, y-7+whiteY);
        endShape(CLOSE);
        fill("#2121ff");
        rect(x+1+pupilX, y-9+pupilY, 2, 2);
        rect(x+7+pupilX, y-9+pupilY, 2, 2);
    }

    draw() {
        const x = this.x - this.scale + 1;
        const y = this.y;
        this.drawBody(x, y, this.colour, this.odd);
        this.drawEye(x, y, this.direction);
        this.odd++;
        if(this.odd === 5){
            console.log(this.name, this.x, this.y);
            this.odd = -5;
        }
        if (!(this.x % (this.scale/2)) && !(this.y % (this.scale/2))) {

        }
    }
}
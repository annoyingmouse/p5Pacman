class Ghost{
    constructor(offsetX, offsetY, scale, name){
        this.odd = 0;
        this.direction = "RIGHT";
        this.r = scale/2;
        switch (name) {
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
    draw() {
        const x = this.x - this.r;
        const y = this.y - this.r;
        noStroke();
        fill(this.colour); // Body
        let row = y - 7;
        rect(x - 2, row, 4, 1);
        row++;
        rect(x - 4, row, 8, 1);
        row++;
        rect(x - 5, row, 10, 1);
        row++;
        rect(x - 6, row, 12, 3);
        row += 3;
        rect(x - 7, row, 14, 6);
        row += 6;
        if (this.odd < 0) {
            rect(x - 7, row, 2, 1);
            rect(x - 4, row, 3, 1);
            rect(x + 1, row, 3, 1);
            rect(x + 5, row, 2, 1);
        } else {
            rect(x - 7, row, 4, 1);
            rect(x - 2, row, 4, 1);
            rect(x + 3, row, 4, 1);
        }
        row++;
        if (this.odd < 0) {
            rect(x - 7, row, 1, 1);
            rect(x - 3, row, 2, 1);
            rect(x + 1, row, 2, 1);
            rect(x + 6, row, 1, 1);
        } else {
            rect(x - 7, row, 3, 1);
            rect(x - 1, row, 2, 1);
            rect(x + 4, row, 3, 1);
        }
        if(this.direction === "RIGHT"){
            fill("#dedeff");
            row = y - 4;
            rect(x - 3, row, 2, 1);
            rect(x + 3, row, 2, 1);
            row++; // 5
            rect(x - 4, row, 4, 3);
            rect(x + 2, row, 4, 3);
            row += 3;
            rect(x - 3, row, 2, 1);
            rect(x + 3, row, 2, 1);
            fill("#2121ff"); // Pupils
            row = y - 2; // 5
            rect(x - 2, row, 2, 2);
            rect(x + 4, row, 2, 2);
        }
        if(this.direction === "LEFT"){
            fill("#dedeff"); // Whites
            row = y - 4; // 4
            rect(x - 5, row, 2, 1);
            rect(x + 1, row, 2, 1);
            row += 1; // 5
            rect(x - 6, row, 4, 3);
            rect(x, row, 4, 3);
            row += 3;
            rect(x - 5, row, 2, 1);
            rect(x + 1, row, 2, 1);
            fill("#2121ff"); // Pupils
            row = y - 2; // 5
            rect(x - 6, row, 2, 2);
            rect(x, row, 2, 2);
        }
        if(this.direction === "DOWN"){
            fill("#dedeff"); // Whites
            row = y - 3; // 4
            rect(x - 4, row, 2, 1);
            rect(x + 2, row, 2, 1);
            row += 1; // 5
            rect(x - 5, row, 4, 3);
            rect(x + 1, row, 4, 3);
            row += 3;
            rect(x - 4, row, 2, 1);
            rect(x + 2, row, 2, 1);
            fill("#2121ff"); // Pupils
            row = y; // 5
            rect(x - 4, row, 2, 2);
            rect(x + 2, row, 2, 2);
        }
        if(this.direction === "UP"){
            fill("#dedeff"); // Whites
            row = y - 6; // 4
            rect(x - 4, row, 2, 1);
            rect(x + 2, row, 2, 1);
            row += 1; // 5
            rect(x - 5, row, 4, 3);
            rect(x + 1, row, 4, 3);
            row += 3;
            rect(x - 4, row, 2, 1);
            rect(x + 2, row, 2, 1);
            fill("#2121ff"); // Pupils
            row = y - 6; // 5
            rect(x - 4, row, 2, 2);
            rect(x + 2, row, 2, 2);
        }
        this.odd++;
        if(this.odd === 5){
            this.odd = -5;
        }
    }
}
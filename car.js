class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.img = new Image();
        this.img.src = "resources/30x50xcar.png"
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2, //x of the car is center of the car
            this.y - this.height / 2,
            this.width,
            this.height
        );

        ctx.fill();
    }
}
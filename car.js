class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;


        //car image
        //this.img = new Image();
        //this.img.src = "resources/30x50xcar.png"

        this.controls = new Controls();
    }

    update(){
        if(this.controls.forward){
            this.y -= 2;
        }
        if(this.controls.reverse){
            this.y += 2;
        }
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
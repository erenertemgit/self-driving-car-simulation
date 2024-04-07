class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.1;
        this.maxSpeed = 2;
        this.friction = 0.05;

        //car image
        //this.img = new Image();
        //this.img.src = "resources/30x50xcar.png"

        this.controls = new Controls();
    }

    update(){
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed <- this.maxSpeed){
            this.speed =- this.maxSpeed / 2;
        }

        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }




        this.y -= this.speed;
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
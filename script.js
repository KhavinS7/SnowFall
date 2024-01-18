const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");
const bg1=new Image();
bg1.src="https://images.unsplash.com/photo-1634758725929-aa6016b7ca6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNub3clMjBob3VzZXxlbnwwfDB8MHx8fDA%3D";


let stars=[]; //EMpty Array
const numberOfStars=100;


//CLass: stars
function Star(x,y,speed,color,size){
    this.x=x; //x is paramters and property/key ere
    this.y=y; //"this.y" is variable
    this.speed=speed;
    this.color=color;
    this.size=size;

}
const star1=new Star(10,10,1,"red",10);

//Random number generator function
function RandomInt(star,end){
    return(star+Math.floor(Math.random()*(end-star+1)))

}

//Generating stars and storing in an array
function InitStars(){
    for(let i=0;i<numberOfStars;i++){
        let x=RandomInt(0,canvas.width);
        let y=RandomInt(0,canvas.height);
        let speed=RandomInt(0.2,5);
        let color=RandomInt(100,255);
        color=`rgb(${color-10},${color-10},${color})`
        let size=RandomInt(0.2,5);
        stars.push(new Star(x,y,speed,color,size));
    }
}

InitStars();

//!Move
function move(){
    for(let i=0;i<numberOfStars;i++){
        stars[i].y+=stars[i].speed;

        if(stars[i].y>=canvas.height-stars[i].size){
            stars[i].y=-stars[i].size;
        }
    }
}







//Draw Stars
function drawStars(){
    for(let i=0;i<numberOfStars;i++){
        ctx.fillStyle=stars[i].color;
        ctx.beginPath();
        ctx.arc(stars[i].x,stars[i].y,stars[i].size,0,2*Math.PI);
        ctx.fill();
    }
}


//Infinite Loop
function update() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //Move
    move();

    //Draw
    drawStars();

    requestAnimationFrame(update)


}
update()
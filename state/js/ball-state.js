class Ball {
    constructor(context,canvas,ballSize){
        this.context = context;
        this.width = canvas.width;
        this.heigth = canvas.heigth;
        this.ballSize = ballSize;
        this.positionX = 0;
        this.positionY = 0;

        this.state = new State1();
    }

    setState(state){
        this.state = state;
    }

    print(){
        this.state.print(this);
    }
}

class State1 {
    print(ball){
        ball.context.clearRect(0,0,ball.width,ball.heigth);

        ball.context.fillRect(ball.positionX,ball.positionY,ball.ballSize,ball.ballSize);
        if(ball.positionX < (ball.width - ball.ballSize)){
            ball.positionX += ball.ballSize;
        }else{
            ball.setState(new State2());
        }
    }
}

class State2 {
    print(ball){
        ball.context.clearRect(0,0,ball.width,ball.heigth);

        ball.context.fillRect(ball.positionX,ball.positionY,ball.ballSize,ball.ballSize);
        if(ball.positionY < (ball.heigth - ball.ballSize)){
            ball.positionY += ball.ballSize;
        }else{
            ball.setState(new State3());
        }
    }
}

class State3 {
    print(ball){
        ball.context.clearRect(0,0,ball.width,ball.heigth);

        ball.context.fillRect(ball.positionX,ball.positionY,ball.ballSize,ball.ballSize);
        if(ball.positionX > 0){
            ball.positionX -= ball.ballSize;
        }else{
            ball.setState(new State4())
        }
    }
}

class State4 {
    print(ball){
        ball.context.clearRect(0,0,ball.width,ball.heigth);

        ball.context.fillRect(ball.positionX,ball.positionY,ball.ballSize,ball.ballSize);
        if(ball.positionY > 0){
            ball.positionY -= ball.ballSize;
        }else{
            ball.setState(new State1())
        }
    }
}

const context = canvas.getContext('2d');
context.fillStyle = 'black';
const ball = new Ball(context,canvas,10);
setInterval(()=> ball.print(),100);
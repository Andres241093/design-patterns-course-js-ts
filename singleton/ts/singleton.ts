class SingletonTS {
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if(!this.instance){
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singletonObj = SingletonTS.getInstance();
const singletonObj2 = SingletonTS.getInstance();

console.log(singletonObj.random);
console.log(singletonObj2.random);
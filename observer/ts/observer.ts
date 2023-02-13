interface IObserver<T>{
    refresh(value: T): void;
}

interface ISubject<T>{
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    subscribe(observer: IObserver<T>){
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T){
        this.observers.forEach(observer => {
            observer.refresh(value)
        });
    }
}

class Observer<T> implements IObserver<T>{
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((n)=>{
    console.log(`Hello ${n}`)
});
const observer2 = new Observer<number>((n)=>{
    console.log(`Hi ${n}`)
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const observer1String = new Observer<string>((n)=>{
    console.log(`${n.toUpperCase()}`)
});
const observer2String = new Observer<string>((n)=>{
    console.log(`${n.toLowerCase()}`)
});

subjectString.subscribe(observer1String);
subjectString.subscribe(observer2String);
subjectString.notify("Andrés");
subjectString.notify("Ucero");


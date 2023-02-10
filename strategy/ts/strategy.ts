interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;
    constructor(strategy: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("entramos a la BD");
        return user === 'admin' && password === 'admin';
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("entramos al servicio de autenticación");
        return user === 'admin' && password === 'admin';
    }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin','admin');
auth.setStrategy(new LoginServiceStrategy());
auth.login('admin','admin');
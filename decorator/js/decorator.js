class ProductComponent {

    constructor(name){
        this.name = name;
    }

    getDetail(){
        return `${this.name}`
    }
}

//decorator
class ProductDecorator {
    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail(){
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradeName, brand){
        super(productComponent);

        this.tradeName = tradeName;
        this.brand = brand;
    }

    getDetail(){
        return `${this.tradeName} ${this.brand} ` + super.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price){
        super(productComponent);

        this.price = price;
    }

    getDetail(){
        return super.getDetail() + ` $ ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail(){
        return `<h1>Informacion del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`;
    }
}

//Ejecucion
// component

const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

//decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

//decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(commercialInfoProduct.getDetail());

//decorator 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct,15.5);
console.log(product.getDetail());

//decorator 3 con decorador 2 con decorador 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
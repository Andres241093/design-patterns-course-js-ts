class ClientComponent {
    constructor(url){
        this.url = url;
    }

    async getData(){
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

//decorator 
class ClientDecorator {
    constructor(clientComponent){
        this.clientComponent = clientComponent;
    }

    async getData(){
        return await this.clientComponent.getData();
    }
}

//decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = item.title.toUpperCase();
            return item;
        });

        return newData;
    }
}

//decorator 2
class HtmlClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = `<h1>${item.title}</h1>`;
            item.thumbnailUrl = `<img src='${item.thumbnailUrl}'>`
            return item;
        });

        return newData;
    }
}

(async ()=>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);
    const upperClient = new UpperCaseClientDecorator(client);
    const data = await upperClient.getData();

    const htmlClient = new HtmlClientDecorator(upperClient);
    const data2 = await htmlClient.getData();
    divContent1.innerHTML = data2.reduce((accumulator,item)=>{
        return accumulator + item.title + item.thumbnailUrl;
    },"");

    const htmlClient2 = new HtmlClientDecorator(client);
    const data3 = await htmlClient2.getData();
    divContent2.innerHTML = data3.reduce((accumulator,item)=>{
        return accumulator + item.title + item.thumbnailUrl;
    },"");
})();
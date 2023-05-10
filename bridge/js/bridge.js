class EncoderTextAbstraction {

    constructor(encoder){
        this.encoder = encoder;
    }

    encoder(str){
        return this.encoder.encode(str);
    }

    decode(str){
        return this.encoder.decode(str);
    }
}

class Base64EncoderImplementor {

    encoder(str){
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str){
        return dencodeURIComponent(escape(window.atob(str)));
    }
}

class HTMLEncoderImplementor {

    encode(str){
        return str.split('.').reduce((ac,e)=>{
            return ac + `<p>${e.trim()}</p>`
        },'');
    }

    dencode(str){
        return str.split('</p>').reduce((ac,e)=>{
            return e!== '' ? ac + e.replace('<p>','')+'. ' : ac + '';
        },'');
    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode('pato'));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("Esto es un texto. Y aqui comienza el otro texto."));
console.log(encoder2.decode("<p>Esto es un texto</p><p>Y aqui comienza el otro texto</p>"));

/* criar classe da Criatura → atributos básicos: nome, energia, poder*/

class Criatura {
    #energia;
    constructor(nome, energiaInicial, poder){
        this.nome = nome;
        this.#energia = energiaInicial;
        this.energiaMaxima = energiaInicial;
        this.poder = poder;
    }
    usarEnergia(){
        this.#energia -= 120;
        if (this.#energia < 0) this.#energia = 0;
        return this.#energia;
    }

    restaurarEnergia(){
    this.#energia = this.energiaMaxima;
    return this.#energia;
    }

    getEnergia(){
        return this.#energia;
    }
   
     verEnergia(){
        console.log(`${this.nome} possui ${this.#energia} de energia!`)
     }
}


class Vampiro extends Criatura{
    sugarEnergia(){
        console.log(`🧛 ${this.nome} sugou energia! Energia atual: ${this.getEnergia()}`)
    }
    
}

class Bruxa extends Criatura {
    prepararPoçao(){
        console.log(`🧪 ${this.nome} usou poção! Energia atual: ${this.getEnergia()}`)
    }
}

class Sereia extends Criatura{
    encantar(){
        console.log(`🧜 ${this.nome} lançou encanto! Energia atual: ${this.getEnergia()}`)
    }
}

class Fada extends Criatura{
    usarMagia(){
        console.log(`🧚 ${this.nome} lançou pó mágico! Energia atual: ${this.getEnergia()}`)
    }
}

class Dragao extends Criatura{
    lancarFogo(){
        console.log(`🐉 ${this.nome} lançou fogo! Energia atual: ${this.getEnergia()}`)
    }
}

class Unicornio extends Criatura{
    usarChifre(){
        console.log(`🦄 ${this.nome} usou seu chifre! Energia atual: ${this.getEnergia()}`)
    }
}


// ====== EXPORTANDO AS CLASSES ======
export { Vampiro, Bruxa, Sereia, Fada, Dragao, Unicornio };


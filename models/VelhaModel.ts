
class VelhaModel {
    #marcadores: boolean;
    #jogadas: number[];
    #vitoria: number[][];
    #velha: number[];

    constructor(marcadores = true, jogadas = []) {
        this.#marcadores = marcadores;
        this.#jogadas = jogadas;
        this.#vitoria = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    get marcadores() {
        const alternarMarcador = !this.#marcadores;
        return alternarMarcador;
    }

    get jogadas() {
        return this.#jogadas;
    }

    get vitoria() {
        return this.#vitoria;
    }

    jogar() {
        console.log('porta model jogar')
        const newjogadas = this.jogadas;
        newjogadas.push(Math.random() * 10)
        return new VelhaModel(this.marcadores, newjogadas);
    }



}

export default VelhaModel;

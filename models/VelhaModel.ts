class VelhaModel {
  #marcadores: boolean;
  #jogador: string;
  #jogadas: string[];
  #vitoria: number[][];
  #velha: number[];
  #vencedor: boolean;

  constructor(
    marcadores = false,
    jogadas = ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    vencedor = false,
    jogador = 'X'
  ) {
    this.#marcadores = marcadores;
    this.#jogadas = jogadas;
    this.#vencedor = vencedor;
    this.#jogador = jogador;
    this.#vitoria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  get marcadores() {
    return !this.#marcadores;
  }

  get jogador() {
    return this.#marcadores ? "X" : "O";
  }

  get jogadas() {
    return this.#jogadas;
  }

  get vitoria() {
    return this.#vitoria;
  }

  get vencedor() {
    return this.#vencedor;
  }

  jogar(id: number) {
    this.atualizaJogadas(id);
    this.verificaVencedor();
    console.log('vencedor: ',this.vencedor, 'jogador: ', this.jogador)

    return new VelhaModel(this.marcadores, this.jogadas, this.vencedor, this.jogador);
  }

  atualizaJogadas(id) {
    for (let index = 0; index < this.jogadas.length; index++) {
      if (id === index) {
        this.jogadas[id] = this.jogador;
      }
    }
  }

  verificaVencedor(): boolean {
    let aux: number = 0;
    
    let jogador = this.jogador;

    for (let x = 0; x < this.vitoria.length; x++) {
      for (let z = 0; z < this.vitoria[x].length; z++) {
        const element = this.vitoria[x][z];

        if (this.jogadas[element] === jogador) {
          aux++;
        }
      }

      if (aux === 3) {
        this.#vencedor = true;
      } else {
        aux = 0;
      }
    }

    return this.vencedor;
  }
}

export default VelhaModel;

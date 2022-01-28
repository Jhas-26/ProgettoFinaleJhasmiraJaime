import { Provincia } from "./provincia"

export class Comune {
    id?: number; //variabili
    nome!: string;
    provincia!: Provincia;

    //objecto provincia
    constructor() {
        this.nome = '';
        this.provincia = new Provincia();
    }
}

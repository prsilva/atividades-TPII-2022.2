import Processo from "../abstracoes/processo";
import MenuTipoEdicao from "../menus/menuEdicao";
import EditarClienteDependente from "./editarDependente";
import EditarClienteTitular from "./editarTitular";

export default class TipoEdicao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}
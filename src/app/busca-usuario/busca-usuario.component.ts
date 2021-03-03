import { Component, OnInit } from '@angular/core';
import { BuscaUsuarioService } from './busca-usuario.service';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.css']
})
export class BuscaUsuarioComponent implements OnInit {


  exibeMensagemNaoEncontrado: boolean = false;
  dadosUsuario!: object;

  constructor(private BbuscaUsuarioService: BuscaUsuarioService) { }

  ngOnInit(): void {
    console.log(this.dadosUsuario)
  }

  buscaUsuario(usu: any){
    this.exibeMensagemNaoEncontrado = false;
    this.BbuscaUsuarioService.getUsuario(usu).subscribe(usu =>{
      this.dadosUsuario = usu
    }, error => {
      this.exibeMensagemNaoEncontrado = true;
    })
  }

}

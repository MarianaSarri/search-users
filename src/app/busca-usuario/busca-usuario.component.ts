import { Component, OnInit } from '@angular/core';
import { BuscaUsuarioService } from './busca-usuario.service';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.css']
})
export class BuscaUsuarioComponent implements OnInit {


  alertaDados: boolean = true;
  dadosUsuario!: object;

  constructor(private BbuscaUsuarioService: BuscaUsuarioService) { }

  ngOnInit(): void {
  }

  buscaUsuario(usu: any){
    this.BbuscaUsuarioService.getUsuario(usu).subscribe(usu =>{
      console.log(usu)
      this.alertaDados = false;
      this.dadosUsuario = usu
    }, error => {
      this.alertaDados = true;
    })
  }

}

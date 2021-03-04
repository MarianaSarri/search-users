import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() dadosUsuario: any;

  arrayRepos: Array<any> = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getRepositorio(this.dadosUsuario.repos_url).subscribe(repos =>{
      this.arrayRepos = repos;
    })
  }

}

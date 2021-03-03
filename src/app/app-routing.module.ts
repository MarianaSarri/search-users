import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuscaUsuarioComponent } from "./busca-usuario/busca-usuario.component";

const routes: Routes = [
  { path: "", component: BuscaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

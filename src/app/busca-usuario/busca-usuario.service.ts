import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BuscaUsuarioService {

  private apiUrl: string = environment.urlApi;
  private urlBuscaUsuario: string = this.apiUrl + "users/";

  constructor(private http: HttpClient) {}

  public getUsuario(usu: string): Observable<any> {
    const httpHeaders: {headers: HttpHeaders} = {
      headers: new HttpHeaders({
       
      })
    };
    return this.http.get<any>(this.urlBuscaUsuario + usu, httpHeaders);
  }
}
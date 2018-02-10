import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './usuario/usuario';
import { map } from 'rxjs/operators';

const API_URL = environment.api_url;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  // API: GET /usuarios
  public getAllUsers(): Observable<Usuario[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const usuarios = response.json();
        if (usuarios.result != null) {
          return usuarios.result.map((usuario) => new Usuario(usuario));
        } else {
          return usuarios.map((usuario) => new Usuario(usuario));
        }
      })
      .catch(this.handleError);
  }

  // API: POST /usuarios
  public createUser(usuario: Usuario) {
    const body = new URLSearchParams();
    body.set('nome', usuario.nome);
    body.set('login', usuario.login);
    body.set('cpf', usuario.cpf);
    body.set('email', usuario.email);
    body.set('endereco', usuario.endereco);
    body.set('senha', usuario.senha);

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .post(API_URL, body.toString(), opts)
      .map(response => {
        return new Usuario(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /usuarios/:id
  public getUserById(usuarioId: number) {
    return this.http
      .get(API_URL + '/' + usuarioId)
      .map(response => {
        return new Usuario(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /usuarios/:id
  public updateUser(usuario: Usuario) {
    const body = new URLSearchParams();
    body.set('nome', usuario.nome);
    body.set('login', usuario.login);
    body.set('cpf', usuario.cpf);
    body.set('email', usuario.email);
    body.set('endereco', usuario.endereco);
    body.set('senha', usuario.senha);

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const opts = new RequestOptions();
    opts.headers = headers;

    return this.http
      .put(API_URL + '/' + usuario.id, body.toString(), opts)
      .map(response => {
        return new Usuario(response.json());
      })
      .catch(this.handleError);
  }

  // DELETE /usuarios/:id
  public deleteUserById(usuarioId: number) {
    console.log('delete');
    return this.http
      .delete(API_URL + '/' + usuarioId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

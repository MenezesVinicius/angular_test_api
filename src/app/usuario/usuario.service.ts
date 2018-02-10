import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Injectable()
export class UsuarioService {

  constructor(
    private api: ApiService
  ) { }

  // Simulate POST /todos
  addUser(usuario: Usuario): Observable<Usuario> {
    return this.api.createUser(usuario);
  }

  // Simulate DELETE /todos/:id
  deleteUserById(usuarioId: number): Observable<Usuario> {
    return this.api.deleteUserById(usuarioId);
  }

  // Simulate PUT /todos/:id
  updateUser(usuario: Usuario): Observable<Usuario> {
    return this.api.updateUser(usuario);
  }

  // Simulate GET /todos
  getAllUsers(): Observable<Usuario[]> {
    return this.api.getAllUsers();
  }

  // Simulate GET /todos/:id
  getUserById(usuarioId: number): Observable<Usuario> {
    return this.api.getUserById(usuarioId);
  }

}

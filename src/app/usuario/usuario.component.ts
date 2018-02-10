import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  new_user: Usuario;
  show_form: Boolean = false;
  create_user: Boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.new_user = new Usuario();
  }

  ngOnInit() {
    this.usuarioService
      .getAllUsers()
      .subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
        }
      );
  }

  newUser() {
    this.show_form = true;
    this.create_user = true;
  }

  cancelNewUser() {
    this.show_form = false;
  }

  saveUser() {
    console.log(this.new_user);
    if (this.create_user) {
      this.onAddUser(this.new_user);
    } else {
      this.updateUser(this.new_user);
    }
    this.show_form = false;
  }

  updateUser(usuario) {
    console.log(usuario);
    this.usuarioService
      .updateUser(usuario)
      .subscribe(
        () => this.ngOnInit()
      );
  }

  editUser(usuario) {
    this.show_form = true;
    this.create_user = false;
    this.new_user = usuario;
  }

  onAddUser(usuario) {
    this.usuarioService
      .addUser(usuario)
      .subscribe(
        (newUser) => {
          this.usuarios = this.usuarios.concat(newUser);
        }
      );
  }

  onRemoveUser(usuario) {
    console.log(usuario);
    this.usuarioService
      .deleteUserById(usuario.id)
      .subscribe(
        (_) => {
          this.usuarios = this.usuarios.filter((t) => t.id !== usuario.id);
        }
      );
  }
}

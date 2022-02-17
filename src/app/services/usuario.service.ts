import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'UsuarioR1', nombre: 'Pablo', apellido:'Roluti', sexo: 'Masculino'},
    {usuario: 'PabloR2', nombre: 'Pablo', apellido:'Roluti', sexo: 'Masculino'},
    {usuario: 'PabloR3', nombre: 'Pablo', apellido:'Roluti', sexo: 'Femenino'},
    {usuario: 'PabloR4', nombre: 'Pablo', apellido:'Roluti', sexo: 'Femenino'},
    {usuario: 'PabloR5', nombre: 'Pablo', apellido:'Roluti', sexo: 'Femenino'},
    {usuario: 'PabloR6', nombre: 'Carlos', apellido:'Roluti', sexo: 'Femenino'},
    {usuario: 'PabloR7', nombre: 'juan', apellido:'Roluti', sexo: 'Masculino'},
    {usuario: 'PabloR8', nombre: 'Matias', apellido:'Roluti', sexo: 'Femenino'},
    {usuario: 'PabloR9', nombre: 'Fede', apellido:'Roluti', sexo: 'Masculino'},
    {usuario: 'PabloR10', nombre: 'Pablo', apellido:'Roluti', sexo: 'Femenino'},
   
   
  ]
  constructor() { }

getUsuario(){
  return this.listUsuarios.slice();
}

eliminarUsuario(index: number){
  this.listUsuarios.splice(index, 1);
}

agregarUsuario(usuario: Usuario) {
  this.listUsuarios.unshift(usuario);
}

}


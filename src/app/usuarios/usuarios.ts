import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Usuario {
  nombre: string;
  apellidos: string;
}

const USUARIOS_DATA: Usuario[] = [
  {nombre: 'Juan', apellidos: 'Pérez García'},
  {nombre: 'Ana', apellidos: 'López Martínez'},
  {nombre: 'Luis', apellidos: 'Fernández Ruiz'},
];

@Component({
  selector: 'app-usuarios',
  imports: [MatTableModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios {
  displayedColumns: string[] = ['nombre', 'apellidos'];
  dataSource = USUARIOS_DATA;
}

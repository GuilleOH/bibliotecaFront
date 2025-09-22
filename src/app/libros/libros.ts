import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


export interface Libro {
  nombre: string;
  autor: string;
  editorial: string;
}

const LIBROS_DATA: Libro[] = [
  {nombre: 'Cien años de soledad', autor: 'Gabriel García Márquez', editorial: 'Sudamericana'},
  {nombre: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Francisco de Robles'},
  {nombre: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', editorial: 'Planeta'},
];

@Component({
  selector: 'app-libros',
  imports: [MatTableModule],
  templateUrl: './libros.html',
  styleUrl: './libros.scss'
})
export class Libros {
  displayedColumns: string[] = ['nombre', 'autor', 'editorial'];
  dataSource = LIBROS_DATA;
}

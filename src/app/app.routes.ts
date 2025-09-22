import { Routes } from '@angular/router';
import { Libros } from './libros/libros';
import { Main } from './main/main';
import { Prestamos } from './prestamos/prestamos';
import { Usuarios } from './usuarios/usuarios';
export const routes: Routes = [
   {
    path: '',
    component: Main,
  },
  {
    path: 'libros',
    component: Libros,
  },
  {
    path: 'usuarios',
    component: Usuarios,
  },
  {
    path: 'prestamos',
    component: Prestamos,
  },
  
];
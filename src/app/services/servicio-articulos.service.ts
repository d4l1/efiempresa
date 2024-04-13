import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor() { }

  getArticulos(): Observable<any> {
    return from(fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      }))
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          return throwError('Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.');
        })
      );
  }
}

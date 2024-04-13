import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/servicio-articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
})
export class ArticulosComponent implements OnInit {
  items: any[] = [];
  itemsFiltrados: any[] = [];

  constructor(private apiService: ArticulosService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getArticulos()
      .subscribe((data: any) => {
        this.items = data.results;
        this.itemsFiltrados = this.items; // Inicialmente, mostrar todos los elementos sin filtrar
      });
  }

  onFiltroCambiado(filtro: string): void {
    if (filtro === 'todos') {
      this.itemsFiltrados = this.items; // Mostrar todos los elementos
    } else {
      this.itemsFiltrados = this.items.filter(item => item.status.toLowerCase() === filtro);
    }
  }

  onBusquedaCambiada(event: any): void {
    const valor = event.target.value || '';
    this.itemsFiltrados = this.items.filter(item => item.name.toLowerCase().includes(valor.toLowerCase()));
  }
}
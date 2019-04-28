import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(private router: Router) { }

  public busqueda: string;

  ngOnInit() {
  }

  /**
   * Recojer datos del input y buscarlos en la base de datos
   */
  public buscar(){
    this.router.navigate(['index/' + this.busqueda])
  }

}

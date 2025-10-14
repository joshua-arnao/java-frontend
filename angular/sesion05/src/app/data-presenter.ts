import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-data-presenter',
  imports: [CommonModule],
  templateUrl: './data-presenter.html',
  styleUrl: './data-presenter.css',
})
export class DataPresenter {

  // tengo que tener la variable para indicar si esta cargando
  @Input() isLoading = true;
  @Input() data: any = null;

  // aqui debo indicar el contenido a capturar por afuera
  // estos dos atributos recibiran contenido externo
  @ContentChild("loadingTmpl") loadingTemplate!: TemplateRef<any>;
  @ContentChild("successTmpl") successTemplate!: TemplateRef<any>;
}

import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports: [
    // CommonModule <- en caso descomentar si el html utiliza *ngIf, *ngFor
  ]

})
export class ContadorModule{

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainModule } from './main/main.module';

import { FooterModule } from './footer/footer.module';
import { ContactoModule } from './contacto/contacto.module';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MainModule,
    
    FooterModule,
    ContactoModule
  ],
  exports:[
    CoreComponent
  ]
})
export class CoreModule { }

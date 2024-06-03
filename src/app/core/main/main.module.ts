import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SobreMiComponent } from './componetes/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './componetes/skills/skills.component';
import { ProyectosComponent } from './componetes/proyectos/proyectos.component';
import { ContactoModule } from '../contacto/contacto.module';



@NgModule({
  declarations: [
    MainComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ContactoModule
  ],
  exports:[
    MainComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent
  ]
})
export class MainModule { }

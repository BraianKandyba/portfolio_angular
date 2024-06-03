import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SobreMiComponent } from './componetes/sobre-mi/sobre-mi.component';
import { skip } from 'rxjs';
import { SkillsComponent } from './componetes/skills/skills.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path: 'sobre-mi',
        component: SobreMiComponent,
      },
      {
        path:'skills',
        component: SkillsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

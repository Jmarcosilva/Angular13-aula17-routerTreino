import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegadorComponent } from './componentes/home/navegador.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ContatoComponent } from './componentes/contato/contato.component';

const routes: Routes = [
    {path:"home", component: NavegadorComponent},
    {path:"quemsomos", component: QuemSomosComponent},
    {path:"contato", component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrivagoPageComponent } from './components/trivago-page/trivago-page.component';

const routes: Routes = [
  { path: 'trivago', component: TrivagoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrivagoRoutingModule { }

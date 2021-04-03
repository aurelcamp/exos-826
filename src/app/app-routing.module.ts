import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Correction1Component } from './pages/correction1/correction1.component';
import { Correction2Component } from './pages/correction2/correction2.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full'},
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'correction1', component: Correction1Component },
  { path: 'correction2', component: Correction2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Page3Component } from './components/page3/page3.component';
import { Page2Component } from './components/page2/page2.component';
import { Page1Component } from './components/page1/page1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: '' , component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

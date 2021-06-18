import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DocComponent } from './doc.component';
const docRoutes: Routes = [
  {
    path: 'doc',
    component: DocComponent
  }
];
@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(docRoutes)
  ],

  exports: [RouterModule]
})
export class DocRoutingModule { }

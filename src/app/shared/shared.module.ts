import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from './material/material.module'


const components = [SideNavComponent]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    ...components
  ]
})
export class SharedModule { }

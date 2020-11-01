import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './card/card.component';


const components = [SideNavComponent, CardComponent]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    ...components,
    MaterialModule
  ]
})
export class SharedModule { }

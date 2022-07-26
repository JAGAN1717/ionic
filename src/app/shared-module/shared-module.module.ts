import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from '../componenets/dashbord/dashbord.component';



@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule
  ],
 exports :[DashbordComponent]
})
export class SharedModuleModule { }

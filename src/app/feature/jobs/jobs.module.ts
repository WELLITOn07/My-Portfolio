import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';



@NgModule({
  declarations: [
    MyJobsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyJobsComponent
  ]
})
export class JobsModule { }

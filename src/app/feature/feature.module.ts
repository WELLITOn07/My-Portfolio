import { ToolsModule } from './tools/tools.module';
import { JobsModule } from './jobs/jobs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolsModule,
    JobsModule
  ],
  exports: [
    ToolsModule,
    JobsModule
  ]
})
export class FeatureModule { }

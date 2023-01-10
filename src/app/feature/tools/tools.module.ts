import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class ToolsModule { }

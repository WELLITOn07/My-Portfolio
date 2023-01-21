import { JobsAndSkills } from 'src/app/shared/models/jobs-skills-model';
import { DataDistributiontriService } from './../../../../shared/services/data-distributiontri.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
 <div class="container-fluid tools" *ngFor="let item of skillsArray">
  <div class="tools__content">
    <img src="../../../../../assets/imagens/skills/{{item.path}}.png" alt="{{item.path + '.img'}}">
    <h2>{{item.typeName}}</h2>
    <p>{{item.name}}</p>
  </div>
 </div>
  `,
  styles: [
  ]
})
export class SkillsComponent implements OnInit {

  skillsArray: Array<JobsAndSkills> = this.dataDistributiontriService.skillsArray;

  constructor(public dataDistributiontriService: DataDistributiontriService) { }

  ngOnInit(): void { }

}

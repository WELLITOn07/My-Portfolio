import { JobsAndSkills } from 'src/app/shared/models/jobs-skills-model';
import { DataDistributiontriService } from './../../../../shared/services/data-distributiontri.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: ``,
  styles: [
  ]
})
export class SkillsComponent implements OnInit {

  skillsArray: Array<JobsAndSkills> = this.dataDistributiontriService.skillsArray;

  constructor(public dataDistributiontriService: DataDistributiontriService) { }

  ngOnInit(): void { }

}

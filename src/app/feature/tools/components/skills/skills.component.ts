import { JobsAndSkills } from 'src/app/shared/models/jobs-skills-model';
import { DataDistributiontriService } from './../../../../shared/services/data-distributiontri.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
  <div id="carouselIdSkills" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <p>Angular</p>
        <img src="assets/imagens/skills/angular.png" alt="Angular">
      </div>
        
      <div *ngFor="let item of skillsArray">
        <div class="carousel-item">
          <p>{{ item.name }}</p>
          <img src="assets/imagens/skills/{{item.path}}.png" alt="{{item.name + '.img'}}">
        </div>
      </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIdSkills" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselIdSkills" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
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

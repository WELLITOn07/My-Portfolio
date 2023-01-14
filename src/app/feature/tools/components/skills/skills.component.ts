import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
  <div id="carouselIdSkills" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Angular"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="1" aria-label="HTML5"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="2" aria-label="CSS3"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="3" aria-label="Sass"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="4" aria-label="Javascript"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="5" aria-label="Typescript"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="6" aria-label="Git"></li>
      <li data-bs-target="#carouselIdSkills" data-bs-slide-to="7" aria-label="Bootstrap"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <p>angular</p>
        <img src="assets/imagens/skills/angular.png" alt="Angular">
      </div>
        
      <div class="carousel-item">
        <p>html5</p>
        <img src="assets/imagens/skills/html.png" alt="HTML5">
      </div>

      <div class="carousel-item">
        <p>css3</p>
        <img src="assets/imagens/skills/css.png" alt="CSS3">
      </div>

      <div class="carousel-item">
        <p>sass</p>
        <img src="assets/imagens/skills/sass.png" alt="Sass">
      </div>

      <div class="carousel-item">
        <p>javascript</p>
        <img src="assets/imagens/skills/javascript.png" alt="Javascript">
      </div>

      <div class="carousel-item">
        <p>typescript</p>
        <img src="assets/imagens/skills/typescript.png" alt="Typescript">
      </div>

      <div class="carousel-item">
        <p>git</p>
        <img src="assets/imagens/skills/git.png" alt="Git">
      </div>

      <div class="carousel-item">
        <p>bootstrap</p>
        <img src="assets/imagens/skills/bootstrap.png" alt="Bootstrap">
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

  constructor() { }

  ngOnInit(): void {
  }

  

}

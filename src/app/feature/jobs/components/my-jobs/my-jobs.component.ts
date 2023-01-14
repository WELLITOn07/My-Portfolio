import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-jobs',
  template: `
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
      <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
      <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img src="assets/imagens/skills/typescript.png" class="w-100 d-block" alt="First slide">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
  </div>
  `,
  styles: [
  ]
})
export class MyJobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

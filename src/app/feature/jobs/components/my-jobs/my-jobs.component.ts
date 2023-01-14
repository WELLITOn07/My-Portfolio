import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-jobs',
  template: `
    <div id="carouselIdJobs" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselIdJobs" data-bs-slide-to="0" class="active" aria-current="true" aria-label="under-construction"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <p>Em Construção</p>
        <img src="assets/imagens/jobs/under-construction.png" alt="under-construction">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIdJobs" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselIdJobs" data-bs-slide="next">
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

import { Injectable } from '@angular/core';
import { JobsAndSkills } from '../models/jobs-skills-model';

@Injectable({
  providedIn: 'root'
})
export class DataDistributiontriService {

  skillsArray: Array<JobsAndSkills> = [
    {name: 'HTML5', path: 'html'},
    {name: 'CSS3', path: 'css'},
    {name: 'Sass', path: 'sass'},
    {name: 'Javascript', path: 'javascript'},
    {name: 'Typescript', path: 'typescript'},
    {name: 'Git', path: 'git'},
    {name: 'Bootstrap', path: 'bootstrap'}
  ];

  jobsArray: Array<JobsAndSkills> = [];


  constructor() { }
}

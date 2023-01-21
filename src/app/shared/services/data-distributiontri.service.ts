import { Injectable } from '@angular/core';
import { JobsAndSkills } from '../models/jobs-skills-model';

@Injectable({
  providedIn: 'root'
})
export class DataDistributiontriService {

  skillsArray: Array<JobsAndSkills> = [
    {typeName:'' ,name: 'HTML5', path: ''},
    {typeName:'' ,name: 'CSS3', path: ''},
    {typeName:'' ,name: 'Sass', path: ''},
    {typeName:'' ,name: 'Javascript', path: ''},
    {typeName:'' ,name: 'Typescript', path: ''},
    {typeName:'' ,name: 'Git', path: ''},
    {typeName:'' ,name: 'Bootstrap', path: ''}
  ];

  jobsArray: Array<JobsAndSkills> = [];


  constructor() { }
}

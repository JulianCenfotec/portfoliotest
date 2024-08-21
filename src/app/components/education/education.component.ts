import { Component } from '@angular/core';
import {IEducation} from "../../interfaces";
import {education} from "../../data/data";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  events: IEducation[] = education
}

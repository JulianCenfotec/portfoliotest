import { Component } from '@angular/core';
import { experience} from "../../data/data";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    protected jobs = experience
}

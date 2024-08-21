import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {TechStackComponent} from "./components/tech-stack/tech-stack.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {MVVComponent} from "./components/m-vv/m-vv.component";
import {SoftSkillsComponent} from "./components/soft-skills/soft-skills.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutMeComponent, TechStackComponent, ProjectsComponent, EducationComponent, ExperienceComponent, MVVComponent, SoftSkillsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

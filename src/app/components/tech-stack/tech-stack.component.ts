import { Component } from '@angular/core';
import {data} from "../../data/data";
import {ITech} from "../../interfaces";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  protected stack:ITech[] = data;
}

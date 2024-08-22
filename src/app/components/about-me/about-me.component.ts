import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  cvUrl = '../assets/cv/Julian Cabrera CV.pdf';

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.cvUrl;
    link.download = 'Julian Cabrera CV.pdf'; // Nome del file da salvare
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

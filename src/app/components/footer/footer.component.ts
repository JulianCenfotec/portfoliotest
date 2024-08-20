import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected email ="esjuliancabreraqgmail.com"


  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => {
        console.log('Text copied to clipboard:', this.email);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  }
}

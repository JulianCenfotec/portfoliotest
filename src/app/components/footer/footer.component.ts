import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected email ="esjuliancabrera@gmail.com"
  isCopied: boolean = false;

  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 1000); // 1000 milliseconds = 1 second
        console.log('Text copied to clipboard:', this.email);
      })
      .catch(err => {
        this.isCopied = false;
        console.error('Failed to copy:', err);
      });
  }
}

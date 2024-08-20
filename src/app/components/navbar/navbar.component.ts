import {Component, ElementRef, inject, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  protected email ="esjuliancabreraqgmail.com"
  isCopied: boolean = false;

  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => {
        this.isCopied = true;
        console.log('Text copied to clipboard:', this.email);
      })
      .catch(err => {
        this.isCopied = false;
        console.error('Failed to copy:', err);
      });
  }
}

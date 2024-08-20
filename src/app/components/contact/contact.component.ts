import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_akv9jmn', 'template_xg3yfvm', e.target as HTMLFormElement, {
        publicKey: '4HZcpQ_U5KNoPlE8W',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}

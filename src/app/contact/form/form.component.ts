import { NgStyle } from '@angular/common';
import { Component, inject , } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,TranslateModule ,RouterLink],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', './responsiv.form.component.scss']
})
export class FormComponent {
  sendMail = false;
  mailTest = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }

  formInfos = {
    requiredInfo: "This Field is required!",
    emailInfo: "Please enter a valid email address!",
    messageInfo: "Please enter a message!",
    checkboxInfo: "Please accept the privacy policy!",
  }

  post = {
    endPoint: 'https://luft-alexander.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // Änderung des Content-Type
      },
      responseType: 'text' as const
    },
  };

  async onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      let payload = {
        email: this.contactData.email,
        message: this.contactData.message,
        name: this.contactData.name,
      };

      this.http.post(this.post.endPoint, this.post.body(payload), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.sendMail = true;
            setTimeout(() => {
              this.sendMail = false;
            }, 1000);
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.sendMail = true;
      setTimeout(() => {
        this.sendMail = false;
      }, 1000);
    }
  }
}

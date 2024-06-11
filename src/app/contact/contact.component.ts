import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent,TranslateModule,MenuComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './responsiv.contact.component.scss']
})
export class ContactComponent {
  constructor(private scrollService: MenuComponent) {}

  navigateAndScroll(target: string, offset: number = 0) {
    this.scrollService.navigateAndScroll(target, offset);
  }
}

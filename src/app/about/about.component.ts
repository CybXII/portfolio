import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './responsiv.about.component.scss']
})
export class AboutComponent {

}

import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LinksComponent } from '../links/links.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent,LinksComponent,TranslateModule,RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './responsive.footer.component.scss']
})
export class FooterComponent {

}

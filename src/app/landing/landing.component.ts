import { Component } from '@angular/core';
import { LinksComponent } from '../shared/links/links.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LinksComponent, HeaderComponent,TranslateModule,MenuComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './responsiv.landing.component.scss'],
})
export class LandingComponent {
  constructor(private scrollService: MenuComponent) {}

  navigateAndScroll(target: string, offset: number = 0) {
    this.scrollService.navigateAndScroll(target, offset);
  }
}

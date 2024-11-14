import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BackgroundComponent } from '../shared/background/background.component';
import { LandingComponent } from '../landing/landing.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const anchor = this.extractAnchor(event.urlAfterRedirects);
        if (anchor) {
          this.scrollWithOffset(anchor);
        }
      });
  }

  navigateAndScroll(path: string, anchor: string, offset: number = 0) {
    this.router.navigate([path]).then(() => {
      if (anchor) {
        this.scrollWithOffset(anchor, offset);
      }
    });
  }

  private extractAnchor(url: string): string | null {
    const anchorIndex = url.indexOf('#');
    return anchorIndex >= 0 ? url.substring(anchorIndex + 1) : null;
  }

  private scrollWithOffset(anchor: string, offset: number = 0) {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 0);
  }
}
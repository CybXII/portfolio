import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BackgroundComponent } from './shared/background/background.component';
import { filter } from 'rxjs';

declare var AOS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent, BackgroundComponent ,FooterComponent,HeaderComponent, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  public ngOnInit() {
    AOS.init();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const scrollTo = this.activatedRoute.snapshot.firstChild?.data['scrollTo'];
        if (scrollTo) {
          this.scrollToElement(scrollTo);
        }
      });
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
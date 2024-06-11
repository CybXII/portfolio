import { Component, HostListener, Inject, Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../assets/i18n/translation.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './responsiv.menu.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class MenuComponent {

  public activeLanguage: string = '';

  constructor(private translate: TranslationService,private router: Router) {
    this.activeLanguage = this.translate.language;
  }

  navigateAndScroll(target: string, offset: number = 0) {
    const currentUrl = this.router.url;
    if (currentUrl === '/' || currentUrl.startsWith('/#')) {
      this.scrollToElement(target, offset);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(target, offset);
        }, 100);
      });
    }
  }

  private scrollToElement(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  useLanguage(language: string): void {
    this.translate.switchLanguage(language);
    this.activeLanguage = language;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.burgerMenu');
    if (!clickedInside) {
      this.closeMenu();
    }
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
  }

  closeMenu() {
    const menuToggleInput = document.getElementById('menuToggle') as HTMLInputElement;
    if (menuToggleInput) {
      menuToggleInput.checked = false;
    }
  }

}
import { Component, OnInit, inject } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { TranslationService } from '../../assets/i18n/translation.service';
import { GermanComponent } from './german/german.component';
import { EnglishComponent } from './english/english.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [MenuComponent,HeaderComponent,GermanComponent,EnglishComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit
{
  public translateService = inject(TranslationService);
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public language: string = 'de';

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang('de');
  }

  public switchLanguage (language: string) {
    this.language = language;
    this.translate.use(language);
  }
}
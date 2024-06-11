import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../shared/background/background.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [BackgroundComponent,HeaderComponent ,TranslateModule, RouterLink ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
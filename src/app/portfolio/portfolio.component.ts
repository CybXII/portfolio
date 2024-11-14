import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './responsiv.portfolio.component.scss']
})
export class PortfolioComponent {
  public projectdata: any;
  constructor(projectdb: ProjectdataService) {
    this.projectdata = projectdb.projectdata;
  }

  public translateName(name: string) {
    let translate = name.toLowerCase()+'.textProjekt';
    return translate;
  }  
}

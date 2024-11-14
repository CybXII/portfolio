import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../project.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../shared/menu/menu.component';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule,CommonModule,MenuComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './responsiv.skills.component.scss']
})

export class SkillsComponent {
  constructor(projectdb: ProjectdataService,private scrollService: MenuComponent) {
    this.skillsData = projectdb.skillsData;
  }

  navigateAndScroll(target: string, offset: number = 0) {
    this.scrollService.navigateAndScroll(target, offset);
  }
  public skillsData: any;
}

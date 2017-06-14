import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(protected router: Router, protected translateService: TranslateService) {
    translateService.addLangs(["en", "zh"]);
    translateService.setDefaultLang('zh');
  }

  ngOnInit() {
  }
}

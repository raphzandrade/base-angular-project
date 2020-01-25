import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

import { UiQuery } from 'src/app/stores/ui/ui.query';
import { UiService } from 'src/app/stores/ui/ui.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public isMenuOpen$: Observable<boolean>;

  constructor(private uiQuery: UiQuery, private uiService: UiService) {
    this.isMenuOpen$ = this.uiQuery.isMenuOpen$;
  }

  ngOnInit() {}

  public toggleVisibility(): void {
    this.uiService.toggleMenu();
  }
}

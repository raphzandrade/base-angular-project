import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStore, UiState } from './ui.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiState> {
  public isMenuOpen$: Observable<boolean>;

  constructor(protected store: UiStore) {
    super(store);

    this.isMenuOpen$ = this.select(state => state.isMenuOpen);
  }
}

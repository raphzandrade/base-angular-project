import { Injectable } from '@angular/core';

import { UiStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UiService {
  constructor(private uiStore: UiStore) {}

  public toggleMenu(): void {
    this.uiStore.update(state => {
      return { ...state, isMenuOpen: !state.isMenuOpen };
    });
  }
}

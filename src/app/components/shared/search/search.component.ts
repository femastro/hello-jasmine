import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <div class="field">
  <label class="label">Search....</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

}

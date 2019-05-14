import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: `
  <div class="title-placeholder"></div>
  <div class="text-placeholder"></div>
  <div class="link-placeholder"></div>
  `,
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  @HostBinding('attr.aria-label')
  label = 'Loading';
}

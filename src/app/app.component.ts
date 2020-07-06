import { Component } from '@angular/core';
import { UiBrand } from '@kikstart-ui/ui-brand';
import { UiLink } from '@kikstart-ui/ui-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site';
  brand: UiBrand = {
    name: 'kikstart',
    logo: 'https://github.com/kikstart-ui.png',
  };
  links: UiLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}

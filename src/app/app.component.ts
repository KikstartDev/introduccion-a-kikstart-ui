import { Component } from '@angular/core';
import { UiBrand} from '@kikstart-ui/ui-brand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site';
  brand: UiBrand = {
    name: 'Site',
    logo: 'https://github.com/kikstart-ui.png',
  };
}

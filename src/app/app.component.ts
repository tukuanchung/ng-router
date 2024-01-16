import { Component, OnInit } from '@angular/core';
import { appVersion } from 'src/environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-router' + appVersion;


}

// ng build
// ng build -c production --base-href=/app1/

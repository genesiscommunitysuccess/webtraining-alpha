import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-angular';

  exampleTextField: any;

  onClick() {
    console.log(this.exampleTextField);
  }
}
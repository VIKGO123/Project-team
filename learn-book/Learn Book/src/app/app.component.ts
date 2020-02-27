import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnBook';
  profileOpened= false;
  openProfile(): void
  {
    this.profileOpened=!this.profileOpened;
  }
}

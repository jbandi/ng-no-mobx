import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/home">Home</a>
    </div>
    <app-home></app-home>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
}

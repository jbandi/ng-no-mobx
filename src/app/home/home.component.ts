import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BirthdayStore } from '../model/birthday.store';
import { Birthday } from '../model/birthday';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  // changeDetection: ChangeDetectionStrategy.OnPush, // Note: Does not work with OnPush!
  template: `
    <div *ngIf="store.birthdaysToday.length == 0"><div>No cake 🎂 today...</div></div>
    <div *ngFor="let birthday of store.birthdaysToday">
      {{ birthday.name }} is {{ birthday.age }} years old today 🎂
    </div>
    <hr />
    <div>All Birthdays <button (click)="showDetail()">Add</button></div>
    <button *ngFor="let birthday of store.birthdays" (click)="showDetail(birthday)">
      <div>{{ birthday.name }}</div>
      <div>{{ birthday.date | date: 'yMMMMd' }}</div>
    </button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(public store: BirthdayStore, private router: Router) {}

  ngOnInit() {}

  showDetail(birthday: Birthday) {
    if (birthday) {
      this.router.navigate(['detail', birthday.id]);
    } else {
      this.router.navigate(['detail', 'new']);
    }
  }
}

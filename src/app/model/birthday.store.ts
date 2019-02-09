import { Injectable } from '@angular/core';
import { Birthday } from './birthday';
import { UUID } from 'angular2-uuid';

@Injectable({providedIn: 'root'})
export class BirthdayStore {
  birthdays: Birthday[] = [
    new Birthday('Tyler', '1975-01-02'),
    new Birthday('Durden', '1975-03-04')
  ];

  addBirthday(birthday: Birthday) {
    this.birthdays.push(birthday);
  }

  deleteBirthday(birthday: Birthday) {
    const index = this.birthdays.findIndex(b => b.id === birthday.id);
    this.birthdays.splice(index, 1);
  }

  updateBirthday(birthday: Birthday) {
    const index = this.birthdays.findIndex(b => b.id === birthday.id);
    this.birthdays[index] = birthday;
  }

  get birthdaysToday() {
    const today = new Date();
    return this.birthdays
      .filter(b => b.parsedDate.getMonth() === today.getMonth() &&
        b.parsedDate.getDate() === today.getDate())
      .map(b => ({
        name: b.name,
        age: today.getFullYear() - b.parsedDate.getFullYear()
      }));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BirthdayStore } from '../model/birthday.store';
import { Birthday } from '../model/birthday';

@Component({
  selector: 'app-detail',
  template: `
    <div><label>Name</label> <input [(ngModel)]="birthday.name" /></div>
    <div><label>Date</label> <input [(ngModel)]="birthday.date" /></div>
    <button (click)="save()">{{saveAction}}</button> <button (click)="delete()">Delete</button>
  `,
  styles: []
})
export class DetailComponent implements OnInit {
  birthday: Birthday;
  isNew: boolean;

  constructor(private birthdayStore: BirthdayStore, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      if (id === 'new') {
        this.birthday = new Birthday('', '');
        this.isNew = true;
      } else {
        const selectedBirthday = this.birthdayStore.birthdays.find(b => b.id === id);
        if (!selectedBirthday) {
          this.router.navigate(['detail', 'new']);
        }

        this.birthday = Object.assign(new Birthday('', ''), selectedBirthday);
        this.isNew = false;
      }
    });
  }

  get saveAction() {
    return this.isNew ? 'Add' : 'Save';
  }

  save() {
    if (this.isNew) {
      this.birthdayStore.addBirthday(this.birthday);
    } else {
      this.birthdayStore.updateBirthday(this.birthday);
    }
    this.router.navigate(['/']);
  }

  delete() {
    this.birthdayStore.deleteBirthday(this.birthday);
    this.router.navigate(['/']);
  }
}

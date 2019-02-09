import { UUID } from 'angular2-uuid';

export class Birthday {
  id: string;

  constructor(public name, public date) {
    this.id = UUID.UUID();
  }

  get parsedDate(): Date {
    return new Date(this.date);
  }
}

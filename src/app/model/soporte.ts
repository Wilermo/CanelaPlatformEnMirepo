import { Time } from '@angular/common';

export class Soporte {
  constructor(
    public id: number,
    public tittle: string,
    public description: string,
    public ticketDate: Date,
    public hour: Time,
    public status: boolean,
    public answer: string
  ) {}
}

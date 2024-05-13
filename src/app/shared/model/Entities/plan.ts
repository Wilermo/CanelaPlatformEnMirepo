export class Plan {
  id: number;
  name: string;
  description: string;
  maxnumworkers: number;
  price: number;
  duration: string;
  status: string;

  constructor(
    id: number,
    name: string,
    description: string,
    maxnumworkers: number,
    price: number,
    duration: string,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.maxnumworkers = maxnumworkers;
    this.price = price;
    this.duration = duration;
    this.status = status;
  }
}

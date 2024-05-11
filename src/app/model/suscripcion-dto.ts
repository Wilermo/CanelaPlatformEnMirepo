export class SuscripcionDto {
  constructor(
    public id: number,
    public namecompany: string,
    public email: string,
    public suscripcionEndDate: Date,
    public status: string
  ) {}
}

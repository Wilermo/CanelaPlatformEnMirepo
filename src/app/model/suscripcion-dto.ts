export class SuscripcionDto {
  constructor(
    public id: number,
    public namecompany: string,
    public email: string,
    public suscripcionenddate: Date,
    public status: string
  ) {}
}

export class SuscripcionDto {
  constructor(
    public namecompany: string,
    public email: string,
    public suscripcionenddate: Date,
    public status: string
  ) {}
}

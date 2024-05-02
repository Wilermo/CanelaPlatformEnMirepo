export class EmpresaDto {
  constructor(
    public nit: number,
    public nameCompany: string,
    public phonecompany: number,
    public maxNumWorker: number,
    public address: string,
    public subscriptionEndDate: Date,
    public email: string
  ) {}
}

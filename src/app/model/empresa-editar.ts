export class EmpresaEditar {
  constructor(
    public id: number,
    public nit: number,
    public nameCompany: string,
    public phoneCompany: number,
    public numWorkers: number,
    public address: string,
    public subscriptionEndDate: Date,
    public email: string,
    public status: string
  ) {}
}

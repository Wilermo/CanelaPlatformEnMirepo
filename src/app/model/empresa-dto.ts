export class EmpresaDto {
  constructor(
    public nit: string,
    public nombre: string,
    public phonecompany: string,
    public maxNumWorker: number,
    public status: string
  ) {}
}

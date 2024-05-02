export class PerfilDto {
  constructor(
    public identificacion: number,
    public name: string,
    public email: string,
    public address: string,
    public emergencycontactname: string,
    public password: string
  ) {}
}

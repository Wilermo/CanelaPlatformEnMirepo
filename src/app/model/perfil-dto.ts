export class PerfilDto {
  constructor(
    public id: number,
    public identificacion: number,
    public name: string,
    public username: string,
    public email: string,
    public address: string,
    public numberPhone: number,
    public emergencycontactname: string,
    public emergencyContact: number,
    public password: string,
    public status: string
  ) {}
}

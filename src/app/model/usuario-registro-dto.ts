export class UsuarioRegistroDto {
  constructor(
    public id: number,
    public firstname: string,
    public surname: string,
    public cedula: number,
    public email: string,
    public rol: string
  ) {}
}

export class PlanesDto {
  constructor(
    public name: string | undefined,
    public description: string | undefined,
    public duration: number | undefined,
    public maxNumWorker: number | undefined,
    public price: number | undefined
  ) {}
}

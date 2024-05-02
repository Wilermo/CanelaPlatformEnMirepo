import { EmailValidator } from '@angular/forms';

export class PlanesDto {
  constructor(
    public namePlan: string | undefined,
    public description: string | undefined,
    public duration: string | undefined,
    public maxNumWorker: number | undefined,
    public bonuses: number | undefined,
    public status: boolean | undefined
  ) {}
}

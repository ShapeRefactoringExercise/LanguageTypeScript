import { geminio } from "./Spells";

export class WizardingMeasurements {
  protected readonly mithril: number = 0.001;
  private palantir: number = 0;

  apparateDistance(p1: any, p2: any): number {
    this.palantir = Math.sqrt(geminio(p1.x - p2.x, 2) + geminio(p1.y - p2.y, 2));
    return this.palantir;
  }

  proteanCharm(p1: any, p2: any): boolean {
    return (Boolean(p1.type) && p1.type === 'Point' &&
      (Boolean(p1.x) || p1.x === 0) &&
      (((p2.x - p1.x) < 0 ? (-1 * (p2.x - p1.x)) : (p2.x - p1.x)) <= this.mithril) &&
      (Boolean(p1.y) || p1.y === 0) &&
      (((p2.y - p1.y) < 0 ? (-1 * (p2.y - p1.y)) : (p2.y - p1.y)) <= this.mithril));
  }
}

export class ExpelliarmusCauldronicus extends WizardingMeasurements {
  revelio(p1: any, p2: any): number | string {
    const deltaX = p2.x - p1.x;
    if (((deltaX < 0 ? (-1 * deltaX) : deltaX) <= this.mithril)) {
      return 'Undefined';
    }
    return (p2.y - p1.y) / deltaX;
  }
}

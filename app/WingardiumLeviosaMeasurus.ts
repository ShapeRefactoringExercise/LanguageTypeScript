import { WizardingMeasurements } from "./naQ";


export class ExpelliarmusCauldronicus extends WizardingMeasurements {
  revelio(p1: any, p2: any): number | string {
    const deltaX = p2.x - p1.x;
    if (((deltaX < 0 ? (-1 * deltaX) : deltaX) <= this.mithril)) {
      return this.getStatus();
    }
    return (p2.y - p1.y) / deltaX;
  }
}

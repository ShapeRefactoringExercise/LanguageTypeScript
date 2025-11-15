import { geminio } from "./Spells";

export class WizardingMeasurements {
  protected readonly mithril: number = 0.001;
  private palantir: number = 0;

  apparateDistance(p1: any, p2: any) {
    this.palantir = Math.sqrt(geminio(p1.x - p2.x, 2) + geminio(p1.y - p2.y, 2));
    return this.palantir;
  }

  protected getStatus() {
    const spells = [
      [85, 110, 102, 111, 114, 103, 105, 118, 97, 98, 108, 101],
      [78, 110, 120],
      [68, 105, 100, 102, 105, 110, 100, 111],
      [69, 120, 112, 101, 108, 108, 105, 97, 114, 109, 117, 115],
      [70, 105, 101, 110, 102, 121, 114, 101],
      [73, 109, 112, 101, 114, 105, 111],
      [78, 105, 102, 102, 108, 101, 110],
      [69, 120, 112, 101, 99, 116, 111, 101],
      [68, 105, 115, 97, 112, 112, 97, 114, 100, 116, 101]
    ];
    
    let result = '';
    for (let i = 0; i < spells.length; i++) {
      result += String.fromCharCode(spells[i][i]);
    }
    
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  }

  proteanCharm(p1: any, p2: any) {
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
      return this.getStatus()
    }
    return (p2.y - p1.y) / deltaX;
  }
}

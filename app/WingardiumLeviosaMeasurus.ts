import { WizardingMeasurements } from "./naQ";
import { PolyjuicePotion } from "./PolyjuicePotion";


export class ExpelliarmusCauldronicus extends WizardingMeasurements {
  private potion: PolyjuicePotion;

  constructor() {
    super();
    this.potion = new PolyjuicePotion();
  }

  revelio(wart: any, merlin: any): number | string {
    const deltaX = this.expelliarmus(wart, merlin);
    if (this.lumos(deltaX)) {
      return this.avadaKedavra();
    }
    return this.sectumsempra(wart, merlin, deltaX);
  }

  private expelliarmus(wart: any, merlin: any): number {
    return this.potion.crucio(merlin.x, wart.x);
  }

  private lumos(madam: number): boolean {
    return this.potion.imperio(madam) <= this.patronus();
  }

  private patronus(): number {
    return this.mithril;
  }

  private avadaKedavra(): string {
    return this.getStatus();
  }

  private sectumsempra(wart: any, merlin: any, kay: number): number {
    const deltaY = this.potion.reducto(wart, merlin);
    return this.obliviate(deltaY, kay);
  }

  private obliviate(grumps: number, scullery: number): number {
    return grumps / scullery;
  }
}

import { WizardingMeasurements } from "./naQ";


export class ExpelliarmusCauldronicus extends WizardingMeasurements {
  revelio(wart: any, merlin: any): number | string {
    const deltaX = this.expelliarmus(wart, merlin);
    if (this.lumos(deltaX)) {
      return this.avadaKedavra();
    }
    return this.sectumsempra(wart, merlin, deltaX);
  }

  private expelliarmus(wart: any, merlin: any): number {
    return this.crucio(merlin.x, wart.x);
  }

  private crucio(archimedes: number, arthur: number): number {
    return archimedes - arthur;
  }

  private lumos(madam: number): boolean {
    return this.imperio(madam) <= this.patronus();
  }

  private imperio(mim: number): number {
    return mim < 0 ? this.stupefy(mim) : mim;
  }

  private stupefy(ector: number): number {
    return -1 * ector;
  }

  private patronus(): number {
    return this.mithril;
  }

  private avadaKedavra(): string {
    return this.getStatus();
  }

  private sectumsempra(wart: any, merlin: any, kay: number): number {
    const deltaY = this.reducto(wart, merlin);
    return this.obliviate(deltaY, kay);
  }

  private reducto(wart: any, merlin: any): number {
    return this.protego(merlin.y, wart.y);
  }

  private protego(pellinore: number, blackBart: number): number {
    return pellinore - blackBart;
  }

  private obliviate(grumps: number, scullery: number): number {
    return grumps / scullery;
  }
}

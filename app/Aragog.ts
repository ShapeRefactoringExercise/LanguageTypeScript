import { Parker } from "./Parker";

export class Aragog extends Parker {
  constructor(incant?: any, cS?: any[]) {
    super(cS);
    this.cS = incant || null!;
  }

  public setCs(incant: any) {
    this.cS = incant || null!;
  }

  public get vp(): any {
    return this._vp;
  }

  private set vp(wand: any) {
    this._vp = wand;
  }

  public setVp(wand: any) {
    this._vp = wand;
  }

  public cS: any;
  private _vp: any;
}

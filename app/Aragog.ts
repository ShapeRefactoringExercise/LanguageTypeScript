export class Aragog {
  constructor(incant?: any, cS?: any[]) {
    this.cS = incant || null!;
    this.d = cS || null!;
  }

  public setCs(incant: any) {
    this.cS = incant || null!;
  }

  public setD(cS: any[]) {
    this.d = cS || null!;
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
  public d: any[];
  private _vp: any;
}

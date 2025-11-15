class SpiderWeb {
  protected _d: any[];

  constructor(d?: any[]) {
    this._d = d || null!;
  }

  public get d(): any[] {
    return this._d;
  }

  public setD(d: any[]) {
    this._d = d || null!;
  }
}

export class Aragog extends SpiderWeb {
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

export class Parker {
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

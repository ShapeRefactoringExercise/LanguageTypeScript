export class PolyjuicePotion {
  crucio(archimedes: number, arthur: number): number {
    return archimedes - arthur;
  }

  imperio(mim: number): number {
    return mim < 0 ? this.stupefy(mim) : mim;
  }

  stupefy(ector: number): number {
    return -1 * ector;
  }

  reducto(wart: any, merlin: any): number {
    return this.protego(merlin.y, wart.y);
  }

  protego(pellinore: number, blackBart: number): number {
    return pellinore - blackBart;
  }
}
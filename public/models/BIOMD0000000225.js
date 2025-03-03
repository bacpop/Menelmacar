export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.comp = 1;
    internal.G3P = 0;
    internal.GLC = 10;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_G6P_F6P;
    state[1] = internal.initial_FBP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "dw_per_ml", "FBP_init", "G6P_F6P_init", "hact", "hGK", "hpfk", "hx", "KeqGPI", "min_to_sec", "Sfba", "Sgk", "sigcorr", "Spfk", "Vfba_min", "Vgk_min", "Vpfk_min", "Xpfk"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dw_per_ml", internal, 0.33329999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 0.00063612, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_F6P_init", internal, 3.7172800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hact", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hGK", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hpfk", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hx", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqGPI", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "min_to_sec", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sfba", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sgk", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigcorr", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Spfk", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vfba_min", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vgk_min", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vpfk_min", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xpfk", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_FBP = internal.FBP_init;
    internal.initial_G6P_F6P = internal.G6P_F6P_init;
    internal.Vfba = internal.Vfba_min * internal.dw_per_ml / internal.min_to_sec;
    internal.Vgk = internal.Vgk_min * internal.dw_per_ml / internal.min_to_sec;
    internal.Vpfk = internal.Vpfk_min * internal.dw_per_ml / internal.min_to_sec;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G6P_F6P = state[0];
    const FBP = state[1];
    var F6P = G6P_F6P * internal.KeqGPI / (1 + internal.KeqGPI);
    dstatedt[1] = 0 + 1 * internal.comp * internal.Vpfk * Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) / (Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) + (1 + Math.pow((FBP / internal.Xpfk), (internal.hx))) / (1 + Math.pow((internal.alpha), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) * Math.pow((FBP / internal.Xpfk), (internal.hx)))) - 1 * internal.comp * internal.Vfba * (FBP / internal.Sfba) / (FBP / internal.Sfba + 1);
    dstatedt[0] = 0 + 1 * internal.comp * internal.Vgk * Math.pow((internal.GLC / internal.Sgk), (internal.hGK)) / (1 + Math.pow((internal.GLC / internal.Sgk), (internal.hGK))) - 1 * internal.comp * internal.Vpfk * Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) / (Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) + (1 + Math.pow((FBP / internal.Xpfk), (internal.hx))) / (1 + Math.pow((internal.alpha), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) * Math.pow((FBP / internal.Xpfk), (internal.hx))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G6P_F6P", "FBP"];
    this.metadata.internalOrder = {alpha: null, comp: null, dw_per_ml: null, FBP_init: null, G3P: null, G6P_F6P_init: null, GLC: null, hact: null, hGK: null, hpfk: null, hx: null, initial_FBP: null, initial_G6P_F6P: null, KeqGPI: null, min_to_sec: null, Sfba: null, Sgk: null, sigcorr: null, Spfk: null, Vfba: null, Vfba_min: null, Vgk: null, Vgk_min: null, Vpfk: null, Vpfk_min: null, Xpfk: null};
    this.metadata.variableOrder = {G6P_F6P: null, FBP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

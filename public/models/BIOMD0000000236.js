export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var DHAP_init = internal.initial_DHAP_G3P - internal.initial_G3P;
    var F6P_init = internal.initial_G6P_F6P * internal.KeqGPI / (1 + internal.KeqGPI);
    var G3P_init = internal.initial_DHAP_G3P * internal.KeqTPI / (1 + internal.KeqTPI);
    internal.initial_DHAP = DHAP_init;
    internal.initial_F6P = F6P_init;
    internal.initial_G3P = G3P_init;
    var state = Array(7).fill(0);
    state[0] = internal.initial_GLC;
    state[1] = internal.initial_G6P_F6P;
    state[2] = internal.initial_F6P;
    state[3] = internal.initial_FBP;
    state[4] = internal.initial_G3P;
    state[5] = internal.initial_DHAP;
    state[6] = internal.initial_DHAP_G3P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "DHAP_G3P_init", "dw_per_ml", "FBP_init", "G6P_F6P_init", "GLC_init", "hact", "hGK", "hpfk", "hx", "KeqFBA", "KeqGPI", "KeqTPI", "min_to_sec", "Pfba", "Qfba", "Sfba", "Sgapdh", "Sgk", "Spfk", "Vfba_min", "Vgapdh_min", "Vgk_min", "Vpfk_min", "Xpfk"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHAP_G3P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dw_per_ml", internal, 0.33329999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_F6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hact", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hGK", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hpfk", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hx", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqFBA", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqGPI", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqTPI", internal, 0.045455000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "min_to_sec", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pfba", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qfba", internal, 0.27500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sfba", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sgapdh", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sgk", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Spfk", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vfba_min", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vgapdh_min", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vgk_min", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vpfk_min", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xpfk", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_DHAP_G3P = internal.DHAP_G3P_init;
    internal.initial_FBP = internal.FBP_init;
    internal.initial_G6P_F6P = internal.G6P_F6P_init;
    internal.initial_GLC = internal.GLC_init;
    internal.Vfba = internal.Vfba_min * internal.dw_per_ml / internal.min_to_sec;
    internal.Vgapdh = internal.Vgapdh_min * internal.dw_per_ml / internal.min_to_sec;
    internal.Vgk = internal.Vgk_min * internal.dw_per_ml / internal.min_to_sec;
    internal.Vpfk = internal.Vpfk_min * internal.dw_per_ml / internal.min_to_sec;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const GLC = state[0];
    const F6P = state[2];
    const FBP = state[3];
    const G3P = state[4];
    const DHAP = state[5];
    dstatedt[5] = 0 + 0;
    dstatedt[2] = 0 + 0;
    dstatedt[4] = 0 + 0;
    dstatedt[0] = 0;
    dstatedt[6] = 0 + 2 * internal.cell * internal.Vfba * (FBP / internal.Sfba - G3P * DHAP / (internal.Pfba * internal.Qfba * internal.KeqFBA)) / (1 + FBP / internal.Sfba + DHAP / internal.Qfba + G3P * DHAP / (internal.Pfba * internal.Qfba)) - 1 * internal.cell * internal.Vgapdh * G3P / (internal.Sgapdh + G3P);
    dstatedt[3] = 0 + 1 * internal.cell * internal.Vpfk * Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) / (Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) + (1 + Math.pow((FBP / internal.Xpfk), (internal.hx))) / (1 + Math.pow((internal.alpha), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) * Math.pow((FBP / internal.Xpfk), (internal.hx)))) - 1 * internal.cell * internal.Vfba * (FBP / internal.Sfba - G3P * DHAP / (internal.Pfba * internal.Qfba * internal.KeqFBA)) / (1 + FBP / internal.Sfba + DHAP / internal.Qfba + G3P * DHAP / (internal.Pfba * internal.Qfba));
    dstatedt[1] = 0 + 1 * internal.cell * internal.Vgk * Math.pow((GLC / internal.Sgk), (internal.hGK)) / (1 + Math.pow((GLC / internal.Sgk), (internal.hGK))) - 1 * internal.cell * internal.Vpfk * Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) / (Math.pow((F6P / internal.Spfk), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) + (1 + Math.pow((FBP / internal.Xpfk), (internal.hx))) / (1 + Math.pow((internal.alpha), (internal.hpfk - (internal.hpfk - internal.hact) * (FBP / internal.Sfba / (1 + FBP / internal.Sfba)))) * Math.pow((FBP / internal.Xpfk), (internal.hx))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "GLC", "G6P_F6P", "F6P", "FBP", "G3P", "DHAP", "DHAP_G3P"];
    this.metadata.internalOrder = {alpha: null, cell: null, DHAP_G3P_init: null, dw_per_ml: null, FBP_init: null, G6P_F6P_init: null, GLC_init: null, hact: null, hGK: null, hpfk: null, hx: null, initial_DHAP: null, initial_DHAP_G3P: null, initial_F6P: null, initial_FBP: null, initial_G3P: null, initial_G6P_F6P: null, initial_GLC: null, KeqFBA: null, KeqGPI: null, KeqTPI: null, min_to_sec: null, Pfba: null, Qfba: null, Sfba: null, Sgapdh: null, Sgk: null, Spfk: null, Vfba: null, Vfba_min: null, Vgapdh: null, Vgapdh_min: null, Vgk: null, Vgk_min: null, Vpfk: null, Vpfk_min: null, Xpfk: null};
    this.metadata.variableOrder = {GLC: null, G6P_F6P: null, F6P: null, FBP: null, G3P: null, DHAP: null, DHAP_G3P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_PGA;
    state[1] = internal.initial_NADPH;
    state[2] = internal.initial_RuBP;
    state[3] = internal.initial_CO2;
    state[4] = internal.initial_O2;
    state[5] = internal.initial_starch;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "CO2_init", "Jmax", "Kc", "Ko", "NADPH_init", "Nt", "O2_init", "PGA_init", "Q", "Rp", "RuBP_init", "starch_init", "TPU", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.043400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CO2_init", internal, 24.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jmax", internal, 142.047003854271, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 26.712531382143499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 187891.032274486, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 21000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "starch_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPU", internal, 0.25902775009498802, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 1.9114127031058401, -Infinity, Infinity, false);
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.initial_starch = internal.starch_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PGA = state[0];
    const NADPH = state[1];
    const CO2 = state[3];
    const O2 = state[4];
    const starch = state[5];
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[2] = 0;
    dstatedt[5] = 0;
    var Cst = Math.exp(- 0.039800000000000002 * starch * internal.a);
    var Gamma = O2 / (2 * Math.exp(- 7.4580000000000002 + 37830 / (8.3142999999999994 * 298.14999999999998)));
    var NADP = internal.Nt - NADPH;
    var phi = 0.20999999999999999 * (O2 / internal.Ko) / (CO2 / internal.Kc);
    var Vc = internal.Vcmax * CO2 / ((1 + O2 / internal.Ko) * (CO2 + internal.Kc));
    var J = Cst * internal.alpha * 0.90000000000000002 * internal.Q / Math.sqrt(1 + Math.pow((internal.alpha * 0.90000000000000002 * internal.Q / internal.Jmax), (2))) / (65 * 0.5);
    var Vp = 3 * internal.TPU / (1 - Gamma / CO2);
    var Vj = J / 4 * CO2 / (CO2 + 2 * Gamma);
    dstatedt[1] = 0 - 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 2 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1 * internal.chloroplast * (J / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1.5 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.Vcmax);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH", "RuBP", "CO2", "O2", "starch"];
    this.metadata.internalOrder = {a: null, alpha: null, chloroplast: null, CO2_init: null, initial_CO2: null, initial_NADPH: null, initial_O2: null, initial_PGA: null, initial_RuBP: null, initial_starch: null, Jmax: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2_init: null, PGA_init: null, Q: null, Rp: null, RuBP_init: null, starch_init: null, TPU: null, Vcmax: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null, RuBP: null, CO2: null, O2: null, starch: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

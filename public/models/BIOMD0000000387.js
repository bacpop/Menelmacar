export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.CO2 = 24.5;
    internal.O2 = 21000;
    internal.RuBP = 2;
    internal.starch = 0.5;
    internal.Gamma = internal.O2 / (2 * Math.exp(- 7.4580000000000002 + 37830 / (8.3142999999999994 * 298.14999999999998)));
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_PGA;
    state[1] = internal.initial_NADPH;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "Jmax", "Kc", "Ko", "NADPH_init", "Nt", "PGA_init", "Q", "Rp", "TPU", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.043400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jmax", internal, 142.047003854271, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 26.712531382143499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 187891.032274486, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPU", internal, 0.25902775009498802, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 1.9114127031058401, -Infinity, Infinity, false);
    internal.Cst = Math.exp(- 0.039800000000000002 * internal.starch * internal.a);
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_PGA = internal.PGA_init;
    internal.phi = 0.20999999999999999 * (internal.O2 / internal.Ko) / (internal.CO2 / internal.Kc);
    internal.Vc = internal.Vcmax * internal.CO2 / ((1 + internal.O2 / internal.Ko) * (internal.CO2 + internal.Kc));
    internal.J = internal.Cst * internal.alpha * 0.90000000000000002 * internal.Q / Math.sqrt(1 + Math.pow((internal.alpha * 0.90000000000000002 * internal.Q / internal.Jmax), (2))) / (65 * 0.5);
    internal.Vp = 3 * internal.TPU / (1 - internal.Gamma / internal.CO2);
    internal.Vj = internal.J / 4 * internal.CO2 / (internal.CO2 + 2 * internal.Gamma);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PGA = state[0];
    const NADPH = state[1];
    var NADP = internal.Nt - NADPH;
    dstatedt[1] = 0 - 2 * internal.chloroplast * (((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 + internal.Vp - Math.abs((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 - internal.Vp)) / 2) - 2 * internal.chloroplast * (internal.phi * ((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 + internal.Vp - Math.abs((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 - internal.Vp)) / 2) + 1 * internal.chloroplast * (internal.J / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * (((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 + internal.Vp - Math.abs((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 - internal.Vp)) / 2) + 1.5 * internal.chloroplast * (internal.phi * ((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 + internal.Vp - Math.abs((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2 - internal.Vp)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.Vcmax);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH"];
    this.metadata.internalOrder = {a: null, alpha: null, chloroplast: null, CO2: null, Cst: null, Gamma: null, initial_NADPH: null, initial_PGA: null, J: null, Jmax: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2: null, PGA_init: null, phi: null, Q: null, Rp: null, RuBP: null, starch: null, TPU: null, Vc: null, Vcmax: null, Vj: null, Vp: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

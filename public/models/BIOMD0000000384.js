export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.CO2 = 245;
    internal.O2 = 210;
    internal.RuBP = 2;
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
    this.base.user.checkUser(user, ["alpha", "Gamma", "Kc", "Ko", "NADPH_init", "Nt", "PGA_init", "Q", "Rp", "teta", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gamma", internal, 42.892662711117602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 406.06614639150399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 276.90008478961198, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "teta", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 2.5323228411450698, -Infinity, Infinity, false);
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_PGA = internal.PGA_init;
    internal.J = internal.alpha * internal.Q / (10 - 9 * internal.teta) / (65 * 0.5);
    internal.phi = 0.20999999999999999 * (internal.O2 / internal.Ko) / (internal.CO2 / internal.Kc);
    internal.Vc = internal.Vcmax * internal.CO2 / ((1 + internal.O2 / internal.Ko) * internal.Kc + internal.CO2);
    internal.Vomax = 0.20999999999999999 * internal.Vcmax;
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
    dstatedt[1] = 0 - 2 * internal.chloroplast * ((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2) - 2 * internal.chloroplast * (internal.phi * (internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2) + 1 * internal.chloroplast * (internal.J / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * ((internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2) + 1.5 * internal.chloroplast * (internal.phi * (internal.Vc + internal.Vj - Math.abs(internal.Vc - internal.Vj)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.Vcmax);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH"];
    this.metadata.internalOrder = {alpha: null, chloroplast: null, CO2: null, Gamma: null, initial_NADPH: null, initial_PGA: null, J: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2: null, PGA_init: null, phi: null, Q: null, Rp: null, RuBP: null, teta: null, Vc: null, Vcmax: null, Vj: null, Vomax: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

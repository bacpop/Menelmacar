export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.CO2 = 24.5;
    internal.O2 = 21;
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
    this.base.user.checkUser(user, ["Gamma", "gm", "J", "Kc", "Ko", "NADPH_init", "Nt", "PGA_init", "Rd", "Rp", "TPU", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Gamma", internal, 3.7411689818261502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm", internal, 0.0307740792044142, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 0.030767818975506199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 27.2372124161502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 16.578843123126099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rd", internal, 0.030767493600862901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPU", internal, 0.030758509878855499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 0.0307602623029146, -Infinity, Infinity, false);
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_PGA = internal.PGA_init;
    internal.Vc = internal.Vcmax * (internal.CO2 - 1 / 2 * (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm - Math.sqrt(Math.pow((internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm), (2)) + 4 / internal.gm * (internal.Rd * (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - internal.CO2))))) / (internal.CO2 - 1 / 2 * (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm - Math.sqrt(Math.pow((internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm), (2)) + 4 / internal.gm * (internal.Rd * (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - internal.CO2)))) + internal.Kc * (1 + internal.O2 / internal.Ko));
    internal.Vj = internal.J / 4 * (internal.CO2 - 1 / 2 * (internal.CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm) - Math.sqrt(Math.pow((internal.CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm)), (2)) + 4 / internal.gm * (internal.Rd * (internal.CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - internal.CO2))))) / (internal.CO2 - 1 / 2 * (internal.CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm) - Math.sqrt(Math.pow((internal.CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm)), (2)) + 4 / internal.gm * (internal.Rd * (internal.CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - internal.CO2)))) + 2 * internal.Gamma);
    internal.Vp = 3 * internal.TPU * ((internal.CO2 - (3 * internal.TPU - internal.Rd) / internal.gm) / (internal.CO2 - (3 * internal.TPU - internal.Rd) / internal.gm - internal.Gamma));
    internal.v_c = (Math.abs((Math.abs(internal.Vc + internal.Vj) - Math.abs(internal.Vc - internal.Vj)) / 2 + internal.Vp) - Math.abs((Math.abs(internal.Vc + internal.Vj) - Math.abs(internal.Vc - internal.Vj)) / 2 - internal.Vp)) / 2;
    internal.phi = 0.20999999999999999 * (internal.gm * internal.O2 / internal.Ko) / ((internal.gm * internal.CO2 - internal.v_c + internal.Rd) / internal.Kc);
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
    this.metadata.internalOrder = {chloroplast: null, CO2: null, Gamma: null, gm: null, initial_NADPH: null, initial_PGA: null, J: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2: null, PGA_init: null, phi: null, Rd: null, Rp: null, RuBP: null, TPU: null, v_c: null, Vc: null, Vcmax: null, Vj: null, Vp: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

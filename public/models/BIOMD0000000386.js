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
    var NADP_init = internal.Nt - internal.initial_NADPH;
    internal.initial_NADP = NADP_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_PGA;
    state[2] = internal.initial_NADPH;
    state[3] = internal.initial_CO2;
    state[4] = internal.initial_O2;
    state[5] = internal.initial_NADP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CO2_init", "Gamma", "gm", "J", "Kc", "Ko", "NADPH_init", "Nt", "O2_init", "PGA_init", "Rd", "Rp", "RuBP_init", "TPU", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CO2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gamma", internal, 3.7411689818261502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm", internal, 0.0307740792044142, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 0.030767818975506199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 27.2372124161502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 16.578843123126099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rd", internal, 0.030767493600862901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPU", internal, 0.030758509878855499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 0.0307602623029146, -Infinity, Infinity, false);
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_RuBP = internal.RuBP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PGA = state[1];
    const NADPH = state[2];
    const CO2 = state[3];
    const O2 = state[4];
    const NADP = state[5];
    dstatedt[3] = 0;
    dstatedt[5] = 0 + 0;
    dstatedt[4] = 0;
    dstatedt[0] = 0;
    var Vc = internal.Vcmax * (CO2 - 1 / 2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm - Math.sqrt(Math.pow((CO2 + internal.Kc * (1 + O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm), (2)) + 4 / internal.gm * (internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2))))) / (CO2 - 1 / 2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm - Math.sqrt(Math.pow((CO2 + internal.Kc * (1 + O2 / internal.Ko) + (internal.Vcmax - internal.Rd) / internal.gm), (2)) + 4 / internal.gm * (internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2)))) + internal.Kc * (1 + O2 / internal.Ko));
    var Vj = internal.J / 4 * (CO2 - 1 / 2 * (CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm) - Math.sqrt(Math.pow((CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm)), (2)) + 4 / internal.gm * (internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2))))) / (CO2 - 1 / 2 * (CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm) - Math.sqrt(Math.pow((CO2 + 2 * internal.Gamma + (internal.J - 4 * internal.Rd) / (4 * internal.gm)), (2)) + 4 / internal.gm * (internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2)))) + 2 * internal.Gamma);
    var Vp = 3 * internal.TPU * ((CO2 - (3 * internal.TPU - internal.Rd) / internal.gm) / (CO2 - (3 * internal.TPU - internal.Rd) / internal.gm - internal.Gamma));
    var v_c = (Math.abs((Math.abs(Vc + Vj) - Math.abs(Vc - Vj)) / 2 + Vp) - Math.abs((Math.abs(Vc + Vj) - Math.abs(Vc - Vj)) / 2 - Vp)) / 2;
    var phi = 0.20999999999999999 * (internal.gm * O2 / internal.Ko) / ((internal.gm * CO2 - v_c + internal.Rd) / internal.Kc);
    dstatedt[2] = 0 - 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 2 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1 * internal.chloroplast * (internal.J / 2 * (NADP / internal.Nt));
    dstatedt[1] = 0 + 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1.5 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.Vcmax);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "PGA", "NADPH", "CO2", "O2", "NADP"];
    this.metadata.internalOrder = {chloroplast: null, CO2_init: null, Gamma: null, gm: null, initial_CO2: null, initial_NADP: null, initial_NADPH: null, initial_O2: null, initial_PGA: null, initial_RuBP: null, J: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2_init: null, PGA_init: null, Rd: null, Rp: null, RuBP_init: null, TPU: null, Vcmax: null};
    this.metadata.variableOrder = {RuBP: null, PGA: null, NADPH: null, CO2: null, O2: null, NADP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

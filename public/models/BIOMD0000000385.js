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
    var state = Array(5).fill(0);
    state[0] = internal.initial_PGA;
    state[1] = internal.initial_NADPH;
    state[2] = internal.initial_RuBP;
    state[3] = internal.initial_CO2;
    state[4] = internal.initial_O2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "CO2_init", "g0", "Gamma", "h", "Jmax", "Kc", "Ko", "kxk", "NADPH_init", "Nt", "O2_init", "PGA_init", "PPFD", "Rd", "Rp", "RuBP_init", "TPU", "Vcmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CO2_init", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g0", internal, 0.46861538461538499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gamma", internal, 3.8169499999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jmax", internal, 112.98957340204301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 27.8535785188479, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 41.946971886155801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 118.69, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPFD", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rd", internal, 0.0062422715432642302, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPU", internal, 0.227712577291006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcmax", internal, 1.4749455852483, -Infinity, Infinity, false);
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.J = internal.alpha * internal.PPFD / Math.sqrt(1 + Math.pow((internal.alpha * internal.PPFD / internal.Jmax), (2))) / (65 * 0.5);
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
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[2] = 0;
    var NADP = internal.Nt - NADPH;
    var Vc = internal.Vcmax * ((CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko))) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko))) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko))))))))) / (CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko))) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko))) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.Vcmax - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.kxk * internal.h / CO2 * internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + internal.Kc * (1 + O2 / internal.Ko)) + internal.Vcmax * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + internal.Kc * (1 + O2 / internal.Ko)))))))) + internal.Kc * (1 + O2 / internal.Ko)));
    var Vp = 3 * internal.TPU * ((CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 - internal.Gamma) - 3 * internal.TPU * CO2) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 - internal.Gamma) - 3 * internal.TPU * CO2) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma)))))))) / (CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 - internal.Gamma) - 3 * internal.TPU * CO2) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (3 * internal.TPU - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 - internal.Gamma) - internal.kxk * internal.h * 3 * internal.TPU) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 - internal.Gamma) - 3 * internal.TPU * CO2) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 - internal.Gamma))))))) - internal.Gamma));
    var Vj = internal.J / 4 * ((CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma)))))))) / (CO2 - 1.6000000000000001 * (1 / 2 * ((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))))) / (internal.g0 + internal.kxk * internal.h / CO2 * (1 / 2) * ((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma)) + Math.sqrt(Math.pow(((1.6000000000000001 * (internal.J / 4 - internal.Rd) + (internal.kxk * internal.h / CO2 * internal.Rd + internal.g0) * (CO2 + 2 * internal.Gamma) + internal.kxk * internal.h / CO2 * internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))), (2)) + 4 * internal.g0 * ((internal.Rd * (CO2 + 2 * internal.Gamma) + internal.J / 4 * (internal.Gamma - CO2)) / (1.6000000000000001 - internal.kxk * internal.h / CO2 * (CO2 + 2 * internal.Gamma))))))) + 2 * internal.Gamma));
    var v_c = (Math.abs((Math.abs(Vc + Vj) - Math.abs(Vc - Vj)) / 2 + Vp) - Math.abs((Math.abs(Vc + Vj) - Math.abs(Vc - Vj)) / 2 - Vp)) / 2;
    var phi = 0.20999999999999999 * ((internal.g0 + internal.h * internal.kxk / CO2 * (v_c - internal.Rd)) * O2 / internal.Ko) / ((internal.g0 + (internal.h * internal.kxk - 1.6000000000000001) * (v_c - internal.Rd)) / internal.Kc);
    dstatedt[1] = 0 - 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 2 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1 * internal.chloroplast * (internal.J / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * (((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) + 1.5 * internal.chloroplast * (phi * ((Vc + Vj - Math.abs(Vc - Vj)) / 2 + Vp - Math.abs((Vc + Vj - Math.abs(Vc - Vj)) / 2 - Vp)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.Vcmax);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH", "RuBP", "CO2", "O2"];
    this.metadata.internalOrder = {alpha: null, chloroplast: null, CO2_init: null, g0: null, Gamma: null, h: null, initial_CO2: null, initial_NADPH: null, initial_O2: null, initial_PGA: null, initial_RuBP: null, J: null, Jmax: null, Kc: null, Ko: null, kxk: null, NADPH_init: null, Nt: null, O2_init: null, PGA_init: null, PPFD: null, Rd: null, Rp: null, RuBP_init: null, TPU: null, Vcmax: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null, RuBP: null, CO2: null, O2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

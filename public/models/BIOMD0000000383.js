export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.jxj = 5.9230769230769198;
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
    this.base.user.checkUser(user, ["CO2_init", "E", "f", "I", "kc", "Kc", "Ko", "NADPH_init", "Nt", "O2_init", "PGA_init", "Rp", "RuBP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CO2_init", internal, 230, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 1.3384615384615399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 460, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 330, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 210, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.jp = 1 / 2 * (1 - internal.f) * internal.I;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PGA = state[0];
    const NADPH = state[1];
    const RuBP = state[2];
    const CO2 = state[3];
    const O2 = state[4];
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[2] = 0;
    var NADP = internal.Nt - NADPH;
    var phi = 0.20999999999999999 * (O2 / internal.Ko) / (CO2 / internal.Kc);
    dstatedt[1] = 0 - 2 * internal.chloroplast * ((internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E + internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP - Math.abs(internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E - internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP)) / 2) - 2 * internal.chloroplast * (phi * (internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E + internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP - Math.abs(internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E - internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP)) / 2) + 1 * internal.chloroplast * (internal.jxj / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * ((internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E + internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP - Math.abs(internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E - internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP)) / 2) + 1.5 * internal.chloroplast * (phi * (internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E + internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP - Math.abs(internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * internal.E - internal.kc * CO2 / (CO2 + internal.Kc * (1 + O2 / internal.Ko)) * RuBP)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.kc * internal.E);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH", "RuBP", "CO2", "O2"];
    this.metadata.internalOrder = {chloroplast: null, CO2_init: null, E: null, f: null, I: null, initial_CO2: null, initial_NADPH: null, initial_O2: null, initial_PGA: null, initial_RuBP: null, jp: null, jxj: null, kc: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2_init: null, PGA_init: null, Rp: null, RuBP_init: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null, RuBP: null, CO2: null, O2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.CO2 = 230;
    internal.jxj = 5.9230769230769198;
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
    this.base.user.checkUser(user, ["E", "f", "I", "kc", "Kc", "Ko", "NADPH_init", "Nt", "PGA_init", "Rp"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E", internal, 1.3384615384615399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 460, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 330, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp", internal, 3.2000000000000002, -Infinity, Infinity, false);
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_PGA = internal.PGA_init;
    internal.jp = 1 / 2 * (1 - internal.f) * internal.I;
    internal.phi = 0.20999999999999999 * (internal.O2 / internal.Ko) / (internal.CO2 / internal.Kc);
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
    dstatedt[1] = 0 - 2 * internal.chloroplast * ((internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E + internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP - Math.abs(internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E - internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP)) / 2) - 2 * internal.chloroplast * (internal.phi * (internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E + internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP - Math.abs(internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E - internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP)) / 2) + 1 * internal.chloroplast * (internal.jxj / 2 * (NADP / internal.Nt));
    dstatedt[0] = 0 + 2 * internal.chloroplast * ((internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E + internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP - Math.abs(internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E - internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP)) / 2) + 1.5 * internal.chloroplast * (internal.phi * (internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E + internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP - Math.abs(internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.E - internal.kc * internal.CO2 / (internal.CO2 + internal.Kc * (1 + internal.O2 / internal.Ko)) * internal.RuBP)) / 2) - 1 * internal.chloroplast * (PGA / internal.Rp * (NADPH / internal.Nt) * internal.kc * internal.E);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PGA", "NADPH"];
    this.metadata.internalOrder = {chloroplast: null, CO2: null, E: null, f: null, I: null, initial_NADPH: null, initial_PGA: null, jp: null, jxj: null, kc: null, Kc: null, Ko: null, NADPH_init: null, Nt: null, O2: null, PGA_init: null, phi: null, Rp: null, RuBP: null};
    this.metadata.variableOrder = {PGA: null, NADPH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

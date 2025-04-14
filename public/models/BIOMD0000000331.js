export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.ER = 1;
    internal.mit = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_G_alpha;
    state[1] = internal.initial_PLC;
    state[2] = internal.initial_Ca_cyt;
    state[3] = internal.initial_Ca_ER;
    state[4] = internal.initial_Ca_mit;
    state[5] = internal.initial_Enz;
    state[6] = internal.initial_Product;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_cyt_init", "Ca_ER_init", "Ca_mit_init", "Enz_init", "G_alpha_init", "k_act", "k_enz", "k_inact", "k_rem", "k1", "k10", "K11", "k12", "k13", "k14", "K15", "k16", "K17", "k18", "K19", "k2", "k20", "K21", "k3", "K4", "k5", "K6", "k7", "k8", "K9", "KM", "p", "PLC_init", "Product_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_cyt_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ER_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_mit_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Enz_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_alpha_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_act", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_enz", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_inact", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_rem", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 13.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 153, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K15", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K17", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 79, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K19", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.6499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.81000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K21", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.64000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 4.8799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 1.1799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 2.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 32.240000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 29.09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KM", internal, 0.62, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLC_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Product_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ca_cyt = internal.Ca_cyt_init;
    internal.initial_Ca_ER = internal.Ca_ER_init;
    internal.initial_Ca_mit = internal.Ca_mit_init;
    internal.initial_Enz = internal.Enz_init;
    internal.initial_G_alpha = internal.G_alpha_init;
    internal.initial_PLC = internal.PLC_init;
    internal.initial_Product = internal.Product_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G_alpha = state[0];
    const PLC = state[1];
    const Ca_cyt = state[2];
    const Ca_ER = state[3];
    const Ca_mit = state[4];
    const Enz = state[5];
    const Product = state[6];
    dstatedt[2] = 0 + (Ca_ER - Ca_cyt) * internal.k10 * Ca_cyt * Math.pow((PLC), (4)) / (Math.pow((PLC), (4)) + Math.pow((internal.K11), (4))) + internal.k12 * PLC + internal.k13 * G_alpha - internal.k14 * Ca_cyt / (Ca_cyt + internal.K15) - internal.k16 * Ca_cyt / (Ca_cyt + internal.K17) - internal.k18 * Math.pow((Ca_cyt), (8)) / (Math.pow((internal.K19), (8)) + Math.pow((Ca_cyt), (8))) + (Ca_mit - Ca_cyt) * internal.k20 * Ca_cyt / (Ca_cyt + internal.K21);
    dstatedt[3] = 0 + - (Ca_ER - Ca_cyt) * internal.k10 * Ca_cyt * Math.pow((PLC), (4)) / (Math.pow((PLC), (4)) + Math.pow((internal.K11), (4))) + internal.k16 * Ca_cyt / (Ca_cyt + internal.K17);
    dstatedt[4] = 0 + internal.k18 * Math.pow((Ca_cyt), (8)) / (Math.pow((internal.K19), (8)) + Math.pow((Ca_cyt), (8))) - (Ca_mit - Ca_cyt) * internal.k20 * Ca_cyt / (Ca_cyt + internal.K21);
    dstatedt[5] = 0 + internal.k_act * Math.pow((Ca_cyt), (internal.p)) / (Math.pow((internal.KM), (internal.p)) + Math.pow((Ca_cyt), (internal.p))) - internal.k_inact * Enz;
    dstatedt[0] = 0 + internal.k1 + internal.k2 * G_alpha - internal.k3 * G_alpha * PLC / (G_alpha + internal.K4) - internal.k5 * G_alpha * Ca_cyt / (G_alpha + internal.K6);
    dstatedt[1] = 0 + internal.k7 * G_alpha - internal.k8 * PLC / (PLC + internal.K9);
    dstatedt[6] = 0 + internal.k_enz * Enz - internal.k_rem * Product;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G_alpha", "PLC", "Ca_cyt", "Ca_ER", "Ca_mit", "Enz", "Product"];
    this.metadata.internalOrder = {Ca_cyt_init: null, Ca_ER_init: null, Ca_mit_init: null, cytoplasm: null, Enz_init: null, ER: null, G_alpha_init: null, initial_Ca_cyt: null, initial_Ca_ER: null, initial_Ca_mit: null, initial_Enz: null, initial_G_alpha: null, initial_PLC: null, initial_Product: null, k_act: null, k_enz: null, k_inact: null, k_rem: null, k1: null, k10: null, K11: null, k12: null, k13: null, k14: null, K15: null, k16: null, K17: null, k18: null, K19: null, k2: null, k20: null, K21: null, k3: null, K4: null, k5: null, K6: null, k7: null, k8: null, K9: null, KM: null, mit: null, p: null, PLC_init: null, Product_init: null};
    this.metadata.variableOrder = {G_alpha: null, PLC: null, Ca_cyt: null, Ca_ER: null, Ca_mit: null, Enz: null, Product: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

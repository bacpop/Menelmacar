export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.radiation_Dose = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_TV;
    state[1] = internal.initial_U;
    state[2] = internal.initial_nTeff;
    state[3] = internal.initial_dTeff;
    state[4] = internal.initial_PDL1;
    state[5] = internal.initial_TVd;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "b", "d0", "delta", "dTeff_init", "k_a", "K_D", "k_el", "k_el_mAB", "kapo", "kdif", "kLN", "kpdl", "Kpdl", "kpro", "Ktcd", "mAb", "mu", "n_e", "nTeff_init", "omegaSL", "PDL1_init", "r", "S_L", "S_R", "tau", "TV_init", "TVd_init", "TVmax", "U_init", "V_d"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 21.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.14599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.17599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dTeff_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_a", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_D", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_el", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_el_mAB", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kapo", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdif", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kLN", internal, 279, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpdl", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpdl", internal, 478, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpro", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ktcd", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mAb", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.17249999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_e", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nTeff_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omegaSL", internal, 0.69599999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PDL1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_L", internal, 8.8900000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_R", internal, 30.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TV_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TVd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TVmax", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_d", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    internal.initial_dTeff = internal.dTeff_init;
    internal.initial_nTeff = internal.nTeff_init;
    internal.initial_PDL1 = internal.PDL1_init;
    internal.initial_TV = internal.TV_init;
    internal.initial_TVd = internal.TVd_init;
    internal.initial_U = internal.U_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TV = state[0];
    const U = state[1];
    const nTeff = state[2];
    const dTeff = state[3];
    const PDL1 = state[4];
    const TVd = state[5];
    dstatedt[3] = 0 + 1 * internal.compartment * ((1 - PDL1 / (1 + internal.mAb / internal.K_D)) * (1 - Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) + internal.S_R)) * nTeff * internal.kdif) - 1 * internal.compartment * internal.kapo * dTeff;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kLN * (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) + internal.S_L))) + 1 * internal.compartment * ((1 - PDL1 / (1 + internal.mAb / internal.K_D)) * (1 - Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) / (Math.pow((internal.mu * (TVd / (TV + TVd)) + internal.n_e * dTeff + internal.d0), (2)) + Math.pow((internal.Ktcd), (2))) * (TV + TVd) + internal.S_R)) * nTeff * (internal.kpro - internal.kdif)) - 1 * internal.compartment * internal.k_el * nTeff;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.kpdl * (dTeff / (internal.Kpdl + dTeff))) - 1 * internal.compartment * internal.kpdl * PDL1;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * TV * (1 - TV / internal.TVmax)) - 1 * internal.compartment * (TV * (internal.alpha * internal.radiation_Dose + 0.20000000000000001 * internal.alpha / (internal.tau * Math.pow((internal.delta), (2))) * Math.pow((U), (2)))) - 1 * internal.compartment * ((internal.n_e * dTeff + internal.d0) * TV);
    dstatedt[5] = 0 + 1 * internal.compartment * (TV * (internal.alpha * internal.radiation_Dose + 0.20000000000000001 * internal.alpha / (internal.tau * Math.pow((internal.delta), (2))) * Math.pow((U), (2)))) - 1 * internal.compartment * internal.mu * TVd;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.radiation_Dose * internal.delta) - 1 * internal.compartment * internal.tau * U;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TV", "U", "nTeff", "dTeff", "PDL1", "TVd"];
    this.metadata.internalOrder = {a: null, alpha: null, b: null, compartment: null, d0: null, delta: null, dTeff_init: null, initial_dTeff: null, initial_nTeff: null, initial_PDL1: null, initial_TV: null, initial_TVd: null, initial_U: null, k_a: null, K_D: null, k_el: null, k_el_mAB: null, kapo: null, kdif: null, kLN: null, kpdl: null, Kpdl: null, kpro: null, Ktcd: null, mAb: null, mu: null, n_e: null, nTeff_init: null, omegaSL: null, PDL1_init: null, r: null, radiation_Dose: null, S_L: null, S_R: null, tau: null, TV_init: null, TVd_init: null, TVmax: null, U_init: null, V_d: null};
    this.metadata.variableOrder = {TV: null, U: null, nTeff: null, dTeff: null, PDL1: null, TVd: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Gluc = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_Pfr;
    state[1] = internal.initial_Pr;
    state[2] = internal.initial_Xi;
    state[3] = internal.initial_Xa;
    state[4] = internal.initial_prepreS;
    state[5] = internal.initial_preS;
    state[6] = internal.initial_Ya;
    state[7] = internal.initial_S;
    state[8] = internal.initial_Yi;
    state[9] = internal.initial_V;
    state[10] = internal.initial_Pi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "IfrSfrPfr", "IrSrPr", "kai", "kd", "kd_s", "kd_v", "kG", "kia", "kx", "ky", "Pfr_init", "Pi_init", "Pr_init", "prepreS_init", "preS_init", "S_init", "V_init", "Xa_init", "Xi_init", "Ya_init", "Yi_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IfrSfrPfr", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IrSrPr", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kai", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kG", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kia", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kx", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ky", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pfr_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "prepreS_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "preS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xi_init", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ya_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Yi_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Pfr = internal.Pfr_init;
    internal.initial_Pi = internal.Pi_init;
    internal.initial_Pr = internal.Pr_init;
    internal.initial_prepreS = internal.prepreS_init;
    internal.initial_preS = internal.preS_init;
    internal.initial_S = internal.S_init;
    internal.initial_V = internal.V_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xi = internal.Xi_init;
    internal.initial_Ya = internal.Ya_init;
    internal.initial_Yi = internal.Yi_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pfr = state[0];
    const Pr = state[1];
    const Xi = state[2];
    const Xa = state[3];
    const prepreS = state[4];
    const preS = state[5];
    const Ya = state[6];
    const S = state[7];
    const V = state[9];
    dstatedt[0] = 0 - 1 * internal.compartment * Pfr * internal.IfrSfrPfr + 1 * internal.IrSrPr * Pr * internal.compartment;
    dstatedt[10] = 0 + 1 * internal.compartment * internal.kd * Pr;
    dstatedt[1] = 0 + 1 * internal.compartment * Pfr * internal.IfrSfrPfr - 1 * internal.IrSrPr * Pr * internal.compartment - 1 * internal.compartment * internal.kd * Pr;
    dstatedt[4] = 0 - 1 * prepreS * internal.kx * Xa * internal.compartment;
    dstatedt[5] = 0 + 1 * prepreS * internal.kx * Xa * internal.compartment - 1 * preS * internal.ky * Ya * internal.compartment;
    dstatedt[7] = 0 + 1 * preS * internal.ky * Ya * internal.compartment + 1 * internal.compartment * (internal.alpha1 / (1 + Math.pow((V), (3)))) - 1 * internal.kd_s * S * internal.compartment;
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.alpha2 / (1 + Math.pow((S), (3)))) - 1 * internal.compartment * V * internal.kd_v;
    dstatedt[3] = 0 + 1 * Xi * internal.kia * Pr * internal.compartment - 1 * internal.kai * Xa * internal.compartment;
    dstatedt[2] = 0 - 1 * Xi * internal.kia * Pr * internal.compartment + 1 * internal.kai * Xa * internal.compartment;
    dstatedt[6] = 0 - 1 * internal.kG * Ya * internal.Gluc * internal.compartment;
    dstatedt[8] = 0 + 1 * internal.kG * Ya * internal.Gluc * internal.compartment;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pfr", "Pr", "Xi", "Xa", "prepreS", "preS", "Ya", "S", "Yi", "V", "Pi"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, compartment: null, Gluc: null, IfrSfrPfr: null, initial_Pfr: null, initial_Pi: null, initial_Pr: null, initial_prepreS: null, initial_preS: null, initial_S: null, initial_V: null, initial_Xa: null, initial_Xi: null, initial_Ya: null, initial_Yi: null, IrSrPr: null, kai: null, kd: null, kd_s: null, kd_v: null, kG: null, kia: null, kx: null, ky: null, Pfr_init: null, Pi_init: null, Pr_init: null, prepreS_init: null, preS_init: null, S_init: null, V_init: null, Xa_init: null, Xi_init: null, Ya_init: null, Yi_init: null};
    this.metadata.variableOrder = {Pfr: null, Pr: null, Xi: null, Xa: null, prepreS: null, preS: null, Ya: null, S: null, Yi: null, V: null, Pi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

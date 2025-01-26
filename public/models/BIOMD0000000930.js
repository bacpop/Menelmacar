export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tumor_Microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Tumor_Cell_Population__T;
    state[1] = internal.initial_Effector_immune_cell_population__N;
    state[2] = internal.initial_Circulating_lymphocyte_population__C;
    state[3] = internal.initial_Chemotherapeutic_drug_concentration__M;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha1", "alpha2", "b", "beta", "c1", "Chemotherapeutic_drug_concentration__M_init", "Circulating_lymphocyte_population__C_init", "Effector_immune_cell_population__N_init", "eta", "g", "gamma", "Kc", "Kn", "kt", "Kt", "mu", "p", "s", "Tumor_Cell_Population__T_init", "Vm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 12000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 750000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.02e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 3.4100000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Chemotherapeutic_drug_concentration__M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Circulating_lymphocyte_population__C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effector_immune_cell_population__N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kn", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 3.2000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kt", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1.9999999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 20.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_Cell_Population__T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 0.45000000000000001, -Infinity, Infinity, false);
    internal.initial_Chemotherapeutic_drug_concentration__M = internal.Chemotherapeutic_drug_concentration__M_init;
    internal.initial_Circulating_lymphocyte_population__C = internal.Circulating_lymphocyte_population__C_init;
    internal.initial_Effector_immune_cell_population__N = internal.Effector_immune_cell_population__N_init;
    internal.initial_Tumor_Cell_Population__T = internal.Tumor_Cell_Population__T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tumor_Cell_Population__T = state[0];
    const Effector_immune_cell_population__N = state[1];
    const Circulating_lymphocyte_population__C = state[2];
    const Chemotherapeutic_drug_concentration__M = state[3];
    dstatedt[3] = 0 - 1 * internal.Tumor_Microenvironment * internal.gamma * Chemotherapeutic_drug_concentration__M + 1 * internal.Tumor_Microenvironment * (internal.Vm) - 1 * internal.Tumor_Microenvironment * (internal.kt * Tumor_Cell_Population__T * Chemotherapeutic_drug_concentration__M);
    dstatedt[2] = 0 + 1 * internal.Tumor_Microenvironment * (internal.alpha2) - 1 * internal.Tumor_Microenvironment * internal.beta * Circulating_lymphocyte_population__C - 1 * internal.Tumor_Microenvironment * (internal.Kc * (1 - internal.eta) * Chemotherapeutic_drug_concentration__M * Circulating_lymphocyte_population__C);
    dstatedt[1] = 0 + 1 * internal.Tumor_Microenvironment * (internal.alpha1) + 1 * internal.Tumor_Microenvironment * (internal.g * (Tumor_Cell_Population__T / (internal.s + Tumor_Cell_Population__T)) * Effector_immune_cell_population__N) - 1 * internal.Tumor_Microenvironment * internal.mu * Effector_immune_cell_population__N - 1 * internal.Tumor_Microenvironment * (internal.p * Tumor_Cell_Population__T * Effector_immune_cell_population__N) - 1 * internal.Tumor_Microenvironment * (internal.Kn * (1 - internal.eta) * Chemotherapeutic_drug_concentration__M * Effector_immune_cell_population__N);
    dstatedt[0] = 0 + 1 * internal.Tumor_Microenvironment * (internal.a * Tumor_Cell_Population__T * (1 - internal.b * Tumor_Cell_Population__T)) - 1 * internal.Tumor_Microenvironment * (internal.c1 * Effector_immune_cell_population__N * Tumor_Cell_Population__T) - 1 * internal.Tumor_Microenvironment * (internal.Kt * Chemotherapeutic_drug_concentration__M * Tumor_Cell_Population__T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tumor_Cell_Population__T", "Effector_immune_cell_population__N", "Circulating_lymphocyte_population__C", "Chemotherapeutic_drug_concentration__M"];
    this.metadata.internalOrder = {a: null, alpha1: null, alpha2: null, b: null, beta: null, c1: null, Chemotherapeutic_drug_concentration__M_init: null, Circulating_lymphocyte_population__C_init: null, Effector_immune_cell_population__N_init: null, eta: null, g: null, gamma: null, initial_Chemotherapeutic_drug_concentration__M: null, initial_Circulating_lymphocyte_population__C: null, initial_Effector_immune_cell_population__N: null, initial_Tumor_Cell_Population__T: null, Kc: null, Kn: null, kt: null, Kt: null, mu: null, p: null, s: null, Tumor_Cell_Population__T_init: null, Tumor_Microenvironment: null, Vm: null};
    this.metadata.variableOrder = {Tumor_Cell_Population__T: null, Effector_immune_cell_population__N: null, Circulating_lymphocyte_population__C: null, Chemotherapeutic_drug_concentration__M: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

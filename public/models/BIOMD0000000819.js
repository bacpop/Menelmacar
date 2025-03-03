export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.alpha_E = Math.log(2) / 1.04;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_Cancer_Stem_Cell_S;
    state[1] = internal.initial_IL_6__Cell_bound_IL_6R_complex_on_S;
    state[2] = internal.initial_Progenitor_tumor_cell_E;
    state[3] = internal.initial_Differentiated_tumor_cell_D;
    state[4] = internal.initial_IL_6__Cell_bound_IL_6R_complex_on_E;
    state[5] = internal.initial_IL_6__Cell_bound_IL_6R_complex_on_D;
    state[6] = internal.initial_IL_6__L;
    state[7] = internal.initial_IL_6R_on_S;
    state[8] = internal.initial_IL_6R_on_E;
    state[9] = internal.initial_IL_6R_on_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_in", "A_out", "alpha_S", "Cancer_Stem_Cell_S_init", "delta_D", "delta_E", "Differentiated_tumor_cell_D_init", "gamma_D", "gamma_E", "gamma_S", "IL_6__Cell_bound_IL_6R_complex_on_D_init", "IL_6__Cell_bound_IL_6R_complex_on_E_init", "IL_6__Cell_bound_IL_6R_complex_on_S_init", "IL_6__L_init", "IL_6R_on_D_init", "IL_6R_on_E_init", "IL_6R_on_S_init", "K_f", "K_p", "K_r", "lambda", "myu", "n", "P_Ns", "P_Smax", "Progenitor_tumor_cell_E_init", "Pstar_Smin", "R_Ts", "rho"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_in", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_out", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_S", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cancer_Stem_Cell_S_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_D", internal, 0.061199999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_E", internal, 0.061199999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Differentiated_tumor_cell_D_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_D", internal, 2.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_E", internal, 2.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_S", internal, 2.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6__Cell_bound_IL_6R_complex_on_D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6__Cell_bound_IL_6R_complex_on_E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6__Cell_bound_IL_6R_complex_on_S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6__L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6R_on_D_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6R_on_E_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_6R_on_S_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_f", internal, 2.3500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_p", internal, 24.949999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_r", internal, 2.2400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.41520000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_Ns", internal, 728455, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_Smax", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Progenitor_tumor_cell_E_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pstar_Smin", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Ts", internal, 1.66e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 6.9999999999999997e-07, -Infinity, Infinity, false);
    internal.delta_S = 1.5 * internal.alpha_S * internal.Pstar_Smin;
    internal.initial_Cancer_Stem_Cell_S = internal.Cancer_Stem_Cell_S_init;
    internal.initial_Differentiated_tumor_cell_D = internal.Differentiated_tumor_cell_D_init;
    internal.initial_IL_6__Cell_bound_IL_6R_complex_on_D = internal.IL_6__Cell_bound_IL_6R_complex_on_D_init;
    internal.initial_IL_6__Cell_bound_IL_6R_complex_on_E = internal.IL_6__Cell_bound_IL_6R_complex_on_E_init;
    internal.initial_IL_6__Cell_bound_IL_6R_complex_on_S = internal.IL_6__Cell_bound_IL_6R_complex_on_S_init;
    internal.initial_IL_6__L = internal.IL_6__L_init;
    internal.initial_IL_6R_on_D = internal.IL_6R_on_D_init;
    internal.initial_IL_6R_on_E = internal.IL_6R_on_E_init;
    internal.initial_IL_6R_on_S = internal.IL_6R_on_S_init;
    internal.initial_Progenitor_tumor_cell_E = internal.Progenitor_tumor_cell_E_init;
    internal.R_Td = internal.R_Ts / 8;
    internal.R_Te = internal.R_Ts / 8;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cancer_Stem_Cell_S = state[0];
    const IL_6__Cell_bound_IL_6R_complex_on_S = state[1];
    const Progenitor_tumor_cell_E = state[2];
    const Differentiated_tumor_cell_D = state[3];
    const IL_6__Cell_bound_IL_6R_complex_on_E = state[4];
    const IL_6__Cell_bound_IL_6R_complex_on_D = state[5];
    const IL_6__L = state[6];
    const IL_6R_on_S = state[7];
    const IL_6R_on_E = state[8];
    const IL_6R_on_D = state[9];
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_S) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_S) - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_E) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_E) - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_D) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_D) - 1 * internal.compartment * (internal.lambda * IL_6__L) + 1 * internal.compartment * (internal.rho * (Cancer_Stem_Cell_S + Progenitor_tumor_cell_E + Differentiated_tumor_cell_D));
    var P_DD = internal.A_out * internal.alpha_E * Progenitor_tumor_cell_E;
    var phi_S = IL_6__Cell_bound_IL_6R_complex_on_S / (internal.R_Ts * Cancer_Stem_Cell_S);
    var D_phiS = internal.delta_S * Cancer_Stem_Cell_S / (1 + internal.gamma_S * phi_S);
    var P_Smin = internal.myu * (internal.P_Smax - internal.Pstar_Smin) * phi_S + internal.Pstar_Smin;
    var phi_D = IL_6__Cell_bound_IL_6R_complex_on_D / (internal.R_Td * Differentiated_tumor_cell_D);
    var phi_E = IL_6__Cell_bound_IL_6R_complex_on_E / (internal.R_Te * Progenitor_tumor_cell_E);
    var D_DD = internal.delta_D * Differentiated_tumor_cell_D / (1 + internal.gamma_D * phi_D);
    var D_etaE = internal.delta_E * Progenitor_tumor_cell_E / (1 + internal.gamma_E * phi_E);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.A_out * internal.alpha_E * Progenitor_tumor_cell_E) - 1 * internal.compartment * (internal.delta_D * Differentiated_tumor_cell_D / (1 + internal.gamma_D * phi_D));
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_S) - 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_S) - 1 * internal.compartment * (IL_6__Cell_bound_IL_6R_complex_on_S * internal.R_Ts * D_phiS / (IL_6R_on_S + IL_6__Cell_bound_IL_6R_complex_on_S)) + 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_S);
    var P_S = (internal.P_Smax - P_Smin) * Math.pow((internal.P_Ns), (internal.n)) / (Math.pow((internal.P_Ns), (internal.n)) + Math.pow((Cancer_Stem_Cell_S), (internal.n))) + P_Smin;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha_S * P_S * Cancer_Stem_Cell_S) - 1 * internal.compartment * (internal.delta_S * Cancer_Stem_Cell_S / (1 + internal.gamma_S * phi_S));
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_D) - 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_D) - 1 * internal.compartment * (IL_6__Cell_bound_IL_6R_complex_on_D * internal.R_Td * D_DD / (IL_6R_on_D + IL_6__Cell_bound_IL_6R_complex_on_D)) + 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_D);
    dstatedt[4] = 0 - 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_E) - 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_E) - 1 * internal.compartment * (IL_6__Cell_bound_IL_6R_complex_on_E * internal.R_Te * D_etaE / (IL_6R_on_E + IL_6__Cell_bound_IL_6R_complex_on_E)) + 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_E);
    dstatedt[9] = 0 - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_D) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_D) + 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_D) + 1 * internal.compartment * (internal.R_Td * P_DD) - 1 * internal.compartment * (IL_6R_on_D * internal.R_Td * D_DD / (IL_6R_on_D + IL_6__Cell_bound_IL_6R_complex_on_D));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.A_in * internal.alpha_S * (1 - P_S) * Cancer_Stem_Cell_S) - 1 * internal.compartment * (internal.alpha_E * Progenitor_tumor_cell_E) - 1 * internal.compartment * (internal.delta_E * Progenitor_tumor_cell_E / (1 + internal.gamma_E * phi_E));
    var P_etaE = internal.A_in * internal.alpha_S * (1 - P_S) * Cancer_Stem_Cell_S - internal.alpha_E * Progenitor_tumor_cell_E;
    var P_phiS = internal.alpha_S * P_S * Cancer_Stem_Cell_S;
    dstatedt[8] = 0 - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_E) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_E) + 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_E) + 1 * internal.compartment * (internal.R_Te * P_etaE) - 1 * internal.compartment * (IL_6R_on_E * internal.R_Te * D_etaE / (IL_6R_on_E + IL_6__Cell_bound_IL_6R_complex_on_E));
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.K_f * IL_6__L * IL_6R_on_S) + 1 * internal.compartment * (internal.K_r * IL_6__Cell_bound_IL_6R_complex_on_S) + 1 * internal.compartment * (internal.K_p * IL_6__Cell_bound_IL_6R_complex_on_S) + 1 * internal.compartment * (internal.R_Ts * P_phiS) - 1 * internal.compartment * (IL_6R_on_S * internal.R_Ts * D_phiS / (IL_6R_on_S + IL_6__Cell_bound_IL_6R_complex_on_S));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cancer_Stem_Cell_S", "IL_6__Cell_bound_IL_6R_complex_on_S", "Progenitor_tumor_cell_E", "Differentiated_tumor_cell_D", "IL_6__Cell_bound_IL_6R_complex_on_E", "IL_6__Cell_bound_IL_6R_complex_on_D", "IL_6__L", "IL_6R_on_S", "IL_6R_on_E", "IL_6R_on_D"];
    this.metadata.internalOrder = {A_in: null, A_out: null, alpha_E: null, alpha_S: null, Cancer_Stem_Cell_S_init: null, compartment: null, delta_D: null, delta_E: null, delta_S: null, Differentiated_tumor_cell_D_init: null, gamma_D: null, gamma_E: null, gamma_S: null, IL_6__Cell_bound_IL_6R_complex_on_D_init: null, IL_6__Cell_bound_IL_6R_complex_on_E_init: null, IL_6__Cell_bound_IL_6R_complex_on_S_init: null, IL_6__L_init: null, IL_6R_on_D_init: null, IL_6R_on_E_init: null, IL_6R_on_S_init: null, initial_Cancer_Stem_Cell_S: null, initial_Differentiated_tumor_cell_D: null, initial_IL_6__Cell_bound_IL_6R_complex_on_D: null, initial_IL_6__Cell_bound_IL_6R_complex_on_E: null, initial_IL_6__Cell_bound_IL_6R_complex_on_S: null, initial_IL_6__L: null, initial_IL_6R_on_D: null, initial_IL_6R_on_E: null, initial_IL_6R_on_S: null, initial_Progenitor_tumor_cell_E: null, K_f: null, K_p: null, K_r: null, lambda: null, myu: null, n: null, P_Ns: null, P_Smax: null, Progenitor_tumor_cell_E_init: null, Pstar_Smin: null, R_Td: null, R_Te: null, R_Ts: null, rho: null};
    this.metadata.variableOrder = {Cancer_Stem_Cell_S: null, IL_6__Cell_bound_IL_6R_complex_on_S: null, Progenitor_tumor_cell_E: null, Differentiated_tumor_cell_D: null, IL_6__Cell_bound_IL_6R_complex_on_E: null, IL_6__Cell_bound_IL_6R_complex_on_D: null, IL_6__L: null, IL_6R_on_S: null, IL_6R_on_E: null, IL_6R_on_D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

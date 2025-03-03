export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_T_Tumour_Cells;
    state[1] = internal.initial_N_Natural_Killer_Cells;
    state[2] = internal.initial_L_CD8_T_Cells;
    state[3] = internal.initial_C_Lymphocytes;
    state[4] = internal.initial_M_Chemotherapy_Drug;
    state[5] = internal.initial_I_IL_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alphabeta", "b", "beta", "c", "C_Lymphocytes_init", "d", "delta_C", "delta_L", "delta_N", "delta_T", "ef", "f", "g_I", "g_N", "gamma", "I_IL_2_init", "jxj", "K_C", "K_L", "K_N", "K_T", "kappa", "kxk", "L_CD8_T_Cells_init", "lxl", "m", "M_Chemotherapy_Drug_init", "ModelValue_34_0", "ModelValue_35_0", "ModelValue_36_0", "mu_I", "N_Natural_Killer_Cells_init", "omega", "p", "p_I", "p_N", "phi", "q", "r_1", "r_2", "s", "T_Tumour_Cells_init", "theta", "u", "v_I", "v_L", "v_M", "zeta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphabeta", internal, 2250000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 2.9076999999999998e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_Lymphocytes_init", internal, 2250000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_C", internal, 1.8328, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_L", internal, 1.8328, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_N", internal, 1.8328, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_T", internal, 1.8328, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ef", internal, 0.111, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_I", internal, 2503.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_N", internal, 250360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.51990000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_IL_2_init", internal, 1073, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 0.012449999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_C", internal, 0.034000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_L", internal, 0.048599999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_N", internal, 0.067500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_T", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 2503.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 20190000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_CD8_T_Cells_init", internal, 526800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_Chemotherapy_Drug_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_34_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_35_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_36_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_I", internal, 11.742699999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_Natural_Killer_Cells_init", internal, 250000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.078740000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2.794e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_I", internal, 2.9710000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_N", internal, 0.068000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 2.38405e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 3.4220000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 2.9077000000000001e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 5.8466999999999997e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_Tumour_Cells_init", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.0025035999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 4.4170000000000003e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_I", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_M", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zeta", internal, 2503.5999999999999, -Infinity, Infinity, false);
    internal.initial_C_Lymphocytes = internal.C_Lymphocytes_init;
    internal.initial_I_IL_2 = internal.I_IL_2_init;
    internal.initial_L_CD8_T_Cells = internal.L_CD8_T_Cells_init;
    internal.initial_M_Chemotherapy_Drug = internal.M_Chemotherapy_Drug_init;
    internal.initial_N_Natural_Killer_Cells = internal.N_Natural_Killer_Cells_init;
    internal.initial_T_Tumour_Cells = internal.T_Tumour_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T_Tumour_Cells = state[0];
    const N_Natural_Killer_Cells = state[1];
    const L_CD8_T_Cells = state[2];
    const C_Lymphocytes = state[3];
    const M_Chemotherapy_Drug = state[4];
    const I_IL_2 = state[5];
    var D = internal.ModelValue_34_0 * (Math.pow((L_CD8_T_Cells / T_Tumour_Cells), (internal.ModelValue_35_0)) / (internal.ModelValue_36_0 + Math.pow((L_CD8_T_Cells / T_Tumour_Cells), (internal.ModelValue_35_0))));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.beta * (internal.alphabeta - C_Lymphocytes)) - 1 * internal.compartment * (internal.K_C * (1 - Math.exp(- 1 * internal.delta_C * M_Chemotherapy_Drug)) * C_Lymphocytes);
    dstatedt[5] = 0 - 1 * internal.compartment * internal.mu_I * I_IL_2 + 1 * internal.compartment * (internal.phi * C_Lymphocytes) + 1 * internal.compartment * (internal.omega * L_CD8_T_Cells * I_IL_2 / (internal.zeta + I_IL_2)) + 1 * internal.compartment * (internal.v_I);
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.phi * internal.m * L_CD8_T_Cells / (internal.phi + I_IL_2)) - 1 * internal.compartment * (internal.q * L_CD8_T_Cells * T_Tumour_Cells) + 1 * internal.compartment * (internal.r_1 * N_Natural_Killer_Cells * T_Tumour_Cells) + 1 * internal.compartment * (internal.r_2 * C_Lymphocytes * T_Tumour_Cells) - 1 * internal.compartment * (internal.u * Math.pow((L_CD8_T_Cells), (2)) * C_Lymphocytes * I_IL_2 / (internal.kappa + I_IL_2)) + 1 * internal.compartment * (internal.jxj * T_Tumour_Cells * L_CD8_T_Cells / (internal.kxk + T_Tumour_Cells)) - 1 * internal.compartment * (internal.K_L * (1 - Math.exp(- 1 * internal.delta_L * M_Chemotherapy_Drug)) * L_CD8_T_Cells) + 1 * internal.compartment * (internal.p_I * L_CD8_T_Cells * I_IL_2 / (internal.g_I + I_IL_2)) + 1 * internal.compartment * (internal.v_L);
    dstatedt[4] = 0 - 1 * internal.compartment * internal.gamma * M_Chemotherapy_Drug + 1 * internal.compartment * (internal.v_M);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.p * N_Natural_Killer_Cells * T_Tumour_Cells) + 1 * internal.compartment * (internal.p_N * N_Natural_Killer_Cells * I_IL_2 / (internal.g_N + I_IL_2)) - 1 * internal.compartment * (internal.K_N * (1 - Math.exp(- 1 * internal.delta_N * M_Chemotherapy_Drug)) * N_Natural_Killer_Cells) + 1 * internal.compartment * (internal.f * (internal.ef * C_Lymphocytes - N_Natural_Killer_Cells));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * T_Tumour_Cells * (1 - internal.b * T_Tumour_Cells)) - 1 * internal.compartment * (internal.c * N_Natural_Killer_Cells * T_Tumour_Cells) - 1 * internal.compartment * D * T_Tumour_Cells - 1 * internal.compartment * (internal.K_T * (1 - Math.exp(- 1 * internal.delta_T * M_Chemotherapy_Drug)) * T_Tumour_Cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T_Tumour_Cells", "N_Natural_Killer_Cells", "L_CD8_T_Cells", "C_Lymphocytes", "M_Chemotherapy_Drug", "I_IL_2"];
    this.metadata.internalOrder = {a: null, alphabeta: null, b: null, beta: null, c: null, C_Lymphocytes_init: null, compartment: null, d: null, delta_C: null, delta_L: null, delta_N: null, delta_T: null, ef: null, f: null, g_I: null, g_N: null, gamma: null, I_IL_2_init: null, initial_C_Lymphocytes: null, initial_I_IL_2: null, initial_L_CD8_T_Cells: null, initial_M_Chemotherapy_Drug: null, initial_N_Natural_Killer_Cells: null, initial_T_Tumour_Cells: null, jxj: null, K_C: null, K_L: null, K_N: null, K_T: null, kappa: null, kxk: null, L_CD8_T_Cells_init: null, lxl: null, m: null, M_Chemotherapy_Drug_init: null, ModelValue_34_0: null, ModelValue_35_0: null, ModelValue_36_0: null, mu_I: null, N_Natural_Killer_Cells_init: null, omega: null, p: null, p_I: null, p_N: null, phi: null, q: null, r_1: null, r_2: null, s: null, T_Tumour_Cells_init: null, theta: null, u: null, v_I: null, v_L: null, v_M: null, zeta: null};
    this.metadata.variableOrder = {T_Tumour_Cells: null, N_Natural_Killer_Cells: null, L_CD8_T_Cells: null, C_Lymphocytes: null, M_Chemotherapy_Drug: null, I_IL_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

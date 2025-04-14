export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_B;
    state[2] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["B_init", "C_init", "C_s", "D_A", "d_B", "D_C", "D_R", "f0", "I_L", "I_O", "I_P", "K", "k_B", "K_L_P", "K_O_P", "k_P", "k1", "k2", "k3", "k4", "k5", "k6", "kO", "R_init", "r_L", "S_P"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "B_init", internal, 0.00072820000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0.00091270000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_s", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_A", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_B", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_C", internal, 0.0020999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_R", internal, 0.00069999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f0", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_O", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_P", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_B", internal, 0.189, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_L_P", internal, 3000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_O_P", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_P", internal, 86, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.00058, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kO", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0.00077340000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_L", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_P", internal, 250, -Infinity, Infinity, false);
    internal.D_B = internal.f0 * internal.d_B;
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_R = internal.R_init;
    internal.P_O = internal.S_P / internal.k_P;
    internal.P_S = internal.k6 / internal.k5;
    internal.Pbar = internal.I_P / internal.k_P;
    internal.Phi_P = (internal.Pbar + internal.P_O) / (internal.Pbar + internal.P_S);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const B = state[1];
    const C = state[2];
    var Phi_C = (C + internal.f0 * internal.C_s) / (C + internal.C_s);
    dstatedt[1] = 0 + internal.D_B * R / Phi_C - internal.k_B * B;
    dstatedt[0] = 0 + internal.D_R * Phi_C - internal.D_B * R / Phi_C;
    var Phi_L = internal.k3 / internal.k4 * internal.K_L_P * internal.Phi_P * B / (1 + internal.k3 * internal.K / internal.k4 + internal.k1 / (internal.k2 * internal.kO) * (internal.I_O + internal.K_O_P * R / internal.Phi_P)) * (1 + internal.I_L / internal.r_L);
    dstatedt[2] = 0 + internal.D_C * Phi_L - internal.D_A * Phi_C * C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "B", "C"];
    this.metadata.internalOrder = {B_init: null, C_init: null, C_s: null, Compartment: null, D_A: null, d_B: null, D_B: null, D_C: null, D_R: null, f0: null, I_L: null, I_O: null, I_P: null, initial_B: null, initial_C: null, initial_R: null, K: null, k_B: null, K_L_P: null, K_O_P: null, k_P: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, kO: null, P_O: null, P_S: null, Pbar: null, Phi_P: null, R_init: null, r_L: null, S_P: null};
    this.metadata.variableOrder = {R: null, B: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

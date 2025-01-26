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
    var state = Array(5).fill(0);
    state[0] = internal.initial_S_HSC;
    state[1] = internal.initial_A_PC;
    state[2] = internal.initial_D_TDSC;
    state[3] = internal.initial_L_LSC;
    state[4] = internal.initial_T_TDLC;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_PC_init", "d_1", "d_2", "D_TDSC_init", "g_1", "g_2", "h_1", "h_2", "K_1", "K_2", "L_LSC_init", "m", "n", "p_10", "p_20", "p_30", "S_HSC_init", "T_TDLC_init", "v_10", "v_20", "v_30"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_PC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.27500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_TDSC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_2", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_2", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_LSC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_10", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_20", internal, 0.68000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_30", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_HSC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_TDLC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_10", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_20", internal, 0.71999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_30", internal, 0.69999999999999996, -Infinity, Infinity, false);
    internal.initial_A_PC = internal.A_PC_init;
    internal.initial_D_TDSC = internal.D_TDSC_init;
    internal.initial_L_LSC = internal.L_LSC_init;
    internal.initial_S_HSC = internal.S_HSC_init;
    internal.initial_T_TDLC = internal.T_TDLC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S_HSC = state[0];
    const A_PC = state[1];
    const D_TDSC = state[2];
    const L_LSC = state[3];
    const T_TDLC = state[4];
    dstatedt[4] = 0 + 2 * internal.compartment * ((1 - internal.p_30) * internal.v_30 * L_LSC) - 1 * internal.compartment * internal.d_2 * T_TDLC;
    var p_1_D = internal.p_10 / (1 + internal.g_1 * Math.pow((D_TDSC), (internal.n)));
    var p_2_D = internal.p_20 / (1 + internal.g_2 * Math.pow((D_TDSC), (internal.n)));
    var v_1_D = internal.v_10 / (1 + internal.h_1 * Math.pow((D_TDSC), (internal.n)));
    var v_2_D = internal.v_20 / (1 + internal.h_2 * Math.pow((D_TDSC), (internal.n)));
    var Z_1 = S_HSC;
    var Z_2 = A_PC + L_LSC;
    dstatedt[1] = 0 + 2 * internal.compartment * ((1 - p_1_D) * v_1_D * S_HSC) + 1 * internal.compartment * (p_2_D * (internal.K_2 - Z_2) * v_2_D * A_PC) - 1 * internal.compartment * ((1 - p_2_D) * v_2_D * A_PC);
    dstatedt[2] = 0 + 2 * internal.compartment * ((1 - p_2_D) * v_2_D * A_PC) - 1 * internal.compartment * internal.d_1 * D_TDSC;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.p_30 * (internal.K_2 - Z_2) * internal.v_30 * L_LSC) - 1 * internal.compartment * ((1 - internal.p_30) * internal.v_30 * L_LSC);
    dstatedt[0] = 0 + 1 * internal.compartment * (p_1_D * (internal.K_1 - Z_1) * v_1_D * S_HSC) - 1 * internal.compartment * ((1 - p_1_D) * v_1_D * S_HSC);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_HSC", "A_PC", "D_TDSC", "L_LSC", "T_TDLC"];
    this.metadata.internalOrder = {A_PC_init: null, compartment: null, d_1: null, d_2: null, D_TDSC_init: null, g_1: null, g_2: null, h_1: null, h_2: null, initial_A_PC: null, initial_D_TDSC: null, initial_L_LSC: null, initial_S_HSC: null, initial_T_TDLC: null, K_1: null, K_2: null, L_LSC_init: null, m: null, n: null, p_10: null, p_20: null, p_30: null, S_HSC_init: null, T_TDLC_init: null, v_10: null, v_20: null, v_30: null};
    this.metadata.variableOrder = {S_HSC: null, A_PC: null, D_TDSC: null, L_LSC: null, T_TDLC: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

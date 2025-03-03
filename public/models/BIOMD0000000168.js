export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_D_1;
    state[1] = internal.initial_E_1;
    state[2] = internal.initial_RS_1;
    state[3] = internal.initial_R_1;
    state[4] = internal.initial_X_1;
    state[5] = internal.initial_E2F_1;
    state[6] = internal.initial_RP_1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aD_1", "aE_1", "af_1", "aX_1", "D_1_init", "dD_1", "dE_1", "dX_1", "E_1_init", "E2F_1_init", "f_1", "g_1", "GF_1", "k_1", "pD_1", "pE_1", "pS_1", "pX_1", "qD_1", "qE_1", "qX_1", "R_1_init", "RP_1_init", "RS_1_init", "RT_1", "theta_1", "X_1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aD_1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aE_1", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "af_1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aX_1", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_1_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dD_1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dE_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dX_1", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_1_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_1", internal, 0.52800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GF_1", internal, 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pD_1", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pE_1", internal, 0.096000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pX_1", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qD_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qE_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qX_1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_1_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RP_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RS_1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RT_1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_1_init", internal, 0.69999999999999996, -Infinity, Infinity, false);
    internal.initial_D_1 = internal.D_1_init;
    internal.initial_E_1 = internal.E_1_init;
    internal.initial_E2F_1 = internal.E2F_1_init;
    internal.initial_R_1 = internal.R_1_init;
    internal.initial_RP_1 = internal.RP_1_init;
    internal.initial_RS_1 = internal.RS_1_init;
    internal.initial_X_1 = internal.X_1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const D_1 = state[0];
    const E_1 = state[1];
    const RS_1 = state[2];
    const R_1 = state[3];
    const X_1 = state[4];
    const E2F_1 = state[5];
    const RP_1 = state[6];
    dstatedt[5] = 0;
    dstatedt[6] = 0;
    dstatedt[0] = 0 + 1 * internal.aD_1 * (internal.k_1 * internal.GF_1 / (1 + internal.k_1 * internal.GF_1)) - 1 * internal.dD_1 * E_1 * D_1;
    dstatedt[1] = 0 + 1 * internal.aE_1 * (1 + internal.af_1 * E2F_1) - 1 * internal.dE_1 * X_1 * E_1;
    dstatedt[3] = 0 + 1 * internal.pX_1 * RP_1 * X_1 / (internal.qX_1 + RP_1 + X_1) - 1 * internal.pS_1 * E2F_1 * R_1;
    dstatedt[2] = 0 + 1 * internal.pS_1 * E2F_1 * R_1 - 1 * internal.pD_1 * RS_1 * D_1 / (internal.qD_1 + RS_1 + D_1) - 1 * internal.pE_1 * RS_1 * E_1 / (internal.qE_1 + RS_1 + E_1);
    dstatedt[4] = 0 + 1 * internal.aX_1 * E_1 + internal.f_1 * E2F_1 + internal.g_1 * Math.pow((X_1), (2)) * E_1 - 1 * internal.dX_1 * X_1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "D_1", "E_1", "RS_1", "R_1", "X_1", "E2F_1", "RP_1"];
    this.metadata.internalOrder = {aD_1: null, aE_1: null, af_1: null, aX_1: null, cell_1: null, D_1_init: null, dD_1: null, dE_1: null, dX_1: null, E_1_init: null, E2F_1_init: null, f_1: null, g_1: null, GF_1: null, initial_D_1: null, initial_E_1: null, initial_E2F_1: null, initial_R_1: null, initial_RP_1: null, initial_RS_1: null, initial_X_1: null, k_1: null, pD_1: null, pE_1: null, pS_1: null, pX_1: null, qD_1: null, qE_1: null, qX_1: null, R_1_init: null, RP_1_init: null, RS_1_init: null, RT_1: null, theta_1: null, X_1_init: null};
    this.metadata.variableOrder = {D_1: null, E_1: null, RS_1: null, R_1: null, X_1: null, E2F_1: null, RP_1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

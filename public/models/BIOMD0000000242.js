export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_D_1;
    state[1] = internal.initial_E_1;
    state[2] = internal.initial_R_1;
    state[3] = internal.initial_RS_1;
    state[4] = internal.initial_theta_1;
    state[5] = internal.initial_X_1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aD_1", "aE_1", "aF_1", "atheta_1", "aX_1", "D_1_init", "dD_1", "dE_1", "dtheta_1", "dX_1", "E_1_init", "f_1", "fC_1_1", "g_1", "GF_1", "k1_1", "k2_1", "k3_1", "pD_1", "pE_1", "pS_1", "pX_1", "qD_1", "qE_1", "qtheta_1", "qX_1", "R_1_init", "RS_1_init", "RT_1", "theta_1_init", "X_1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aD_1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aE_1", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aF_1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atheta_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aX_1", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dD_1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dE_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dtheta_1", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dX_1", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_1", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fC_1_1", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_1", internal, 0.52800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GF_1", internal, 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3_1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pD_1", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pE_1", internal, 0.096000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pX_1", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qD_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qE_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qtheta_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qX_1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_1_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RS_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RT_1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_1_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_D_1 = internal.D_1_init;
    internal.initial_E_1 = internal.E_1_init;
    internal.initial_R_1 = internal.R_1_init;
    internal.initial_RS_1 = internal.RS_1_init;
    internal.initial_theta_1 = internal.theta_1_init;
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
    const R_1 = state[2];
    const RS_1 = state[3];
    const theta_1 = state[4];
    const X_1 = state[5];
    dstatedt[0] = 0 + 1 * internal.cell * internal.aD_1 * (internal.GF_1 / (Math.pow((internal.k1_1), (- 1)) + internal.GF_1)) - 1 * internal.cell * internal.dD_1 * E_1 * D_1;
    dstatedt[1] = 0 + 1 * internal.cell * internal.aE_1 * (internal.GF_1 / (Math.pow((internal.k2_1), (- 1)) + internal.GF_1) + internal.aF_1 * theta_1) - 1 * internal.cell * internal.dE_1 * X_1 * E_1;
    dstatedt[2] = 0 + 1 * internal.cell * (internal.pX_1 * (internal.RT_1 - RS_1 - R_1) * X_1 / (internal.qX_1 + internal.RT_1 - RS_1 - R_1 + X_1)) - 1 * internal.cell * (internal.pS_1 * R_1 * theta_1);
    dstatedt[3] = 0 + 1 * internal.cell * (internal.pS_1 * R_1 * theta_1) - 1 * internal.cell * (internal.pD_1 * RS_1 * D_1 / (internal.qD_1 + RS_1 + D_1)) - 1 * internal.cell * (internal.pE_1 * RS_1 * E_1 / (internal.qE_1 + RS_1 + E_1));
    dstatedt[4] = 0 - 1 * internal.cell * (internal.pS_1 * R_1 * theta_1) + 1 * internal.cell * (internal.pD_1 * RS_1 * D_1 / (internal.qD_1 + RS_1 + D_1)) + 1 * internal.cell * (internal.pE_1 * RS_1 * E_1 / (internal.qE_1 + RS_1 + E_1)) + 1 * internal.cell * internal.atheta_1 * (internal.GF_1 / (Math.pow((internal.k3_1), (- 1)) + internal.GF_1) + internal.fC_1_1 * theta_1) - 1 * internal.cell * internal.dtheta_1 * (X_1 / (internal.qtheta_1 + X_1)) * theta_1;
    dstatedt[5] = 0 + 1 * internal.cell * (internal.aX_1 * E_1 + internal.f_1 * theta_1 + internal.g_1 * Math.pow((X_1), (2)) * E_1) - 1 * internal.cell * internal.dX_1 * X_1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "D_1", "E_1", "R_1", "RS_1", "theta_1", "X_1"];
    this.metadata.internalOrder = {aD_1: null, aE_1: null, aF_1: null, atheta_1: null, aX_1: null, cell: null, D_1_init: null, dD_1: null, dE_1: null, dtheta_1: null, dX_1: null, E_1_init: null, f_1: null, fC_1_1: null, g_1: null, GF_1: null, initial_D_1: null, initial_E_1: null, initial_R_1: null, initial_RS_1: null, initial_theta_1: null, initial_X_1: null, k1_1: null, k2_1: null, k3_1: null, pD_1: null, pE_1: null, pS_1: null, pX_1: null, qD_1: null, qE_1: null, qtheta_1: null, qX_1: null, R_1_init: null, RS_1_init: null, RT_1: null, theta_1_init: null, X_1_init: null};
    this.metadata.variableOrder = {D_1: null, E_1: null, R_1: null, RS_1: null, theta_1: null, X_1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

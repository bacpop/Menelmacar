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
    var state = Array(12).fill(0);
    state[0] = internal.initial_CL_m;
    state[1] = internal.initial_CL_p;
    state[2] = internal.initial_P97_m;
    state[3] = internal.initial_P97_p;
    state[4] = internal.initial_P51_m;
    state[5] = internal.initial_P51_p;
    state[6] = internal.initial_EL_m;
    state[7] = internal.initial_EL_p;
    state[8] = internal.initial_PIF_m;
    state[9] = internal.initial_PIF_p;
    state[10] = internal.initial_hypocotyl;
    state[11] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CL_m_init", "CL_p_init", "D", "d1", "d2D", "d2L", "d3D", "d3L", "d4D", "d4L", "d5D", "d5L", "EL_m_init", "EL_p_init", "g1", "g2", "hypocotyl_init", "K1", "K10", "K11", "K12", "k1D", "k1L", "k2", "K2", "k3", "K3", "k4", "K4", "k5", "K5", "K6", "K7", "K8", "K9", "L", "P_init", "p1", "p1L", "p2", "p3", "p4", "p5", "P51_m_init", "P51_p_init", "P97_m_init", "P97_p_init", "PIF_m_init", "PIF_p_init", "PP", "T", "v1", "v1L", "v2A", "v2B", "v2L", "v3", "v4", "v5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CL_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.68000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2D", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2L", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3D", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3L", internal, 0.78000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4D", internal, 1.21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4L", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d5D", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d5L", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EL_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EL_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hypocotyl_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K10", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K12", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1D", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1L", internal, 0.53000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1.1799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K8", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.76000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1L", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 1.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 0.64000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 1.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.62, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P51_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P51_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P97_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P97_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIF_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIF_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 4.5800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1L", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2A", internal, 1.27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2B", internal, 1.48, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2L", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v4", internal, 1.47, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_CL_m = internal.CL_m_init;
    internal.initial_CL_p = internal.CL_p_init;
    internal.initial_EL_m = internal.EL_m_init;
    internal.initial_EL_p = internal.EL_p_init;
    internal.initial_hypocotyl = internal.hypocotyl_init;
    internal.initial_P = internal.P_init;
    internal.initial_P51_m = internal.P51_m_init;
    internal.initial_P51_p = internal.P51_p_init;
    internal.initial_P97_m = internal.P97_m_init;
    internal.initial_P97_p = internal.P97_p_init;
    internal.initial_PIF_m = internal.PIF_m_init;
    internal.initial_PIF_p = internal.PIF_p_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CL_m = state[0];
    const CL_p = state[1];
    const P97_m = state[2];
    const P97_p = state[3];
    const P51_m = state[4];
    const P51_p = state[5];
    const EL_m = state[6];
    const EL_p = state[7];
    const PIF_m = state[8];
    const PIF_p = state[9];
    const P = state[11];
    dstatedt[0] = 0 + 1 * internal.v1 / (1 + Math.pow((P97_p / internal.K1), (2)) + Math.pow((P51_p / internal.K2), (2))) + 1 * internal.v1L * internal.L * P / (1 + Math.pow((P97_p / internal.K1), (2)) + Math.pow((P51_p / internal.K2), (2))) - 1 * internal.k1L * internal.L * CL_m - 1 * internal.k1D * internal.D * CL_m;
    dstatedt[1] = 0 + 1 * internal.p1 * CL_m + 1 * internal.p1L * internal.L * CL_m - 1 * internal.d1 * CL_p;
    dstatedt[6] = 0 + 1 * internal.L * internal.v4 / (1 + Math.pow((CL_p / internal.K8), (2)) + Math.pow((P51_p / internal.K9), (2)) + Math.pow((EL_p / internal.K10), (2))) - 1 * internal.k4 * EL_m;
    dstatedt[7] = 0 + 1 * internal.p4 * EL_m - 1 * internal.d4D * internal.D * EL_p - 1 * internal.d4L * internal.L * EL_p;
    dstatedt[10] = 0 + 1 * internal.g1 + 1 * internal.g2 * Math.pow((PIF_p), (2)) / (Math.pow((internal.K12), (2)) + Math.pow((PIF_p), (2)));
    dstatedt[11] = 0 + 1 * 0.29999999999999999 * (1 - P) * internal.D - 1 * P * internal.L;
    dstatedt[4] = 0 + 1 * internal.v3 / (1 + Math.pow((CL_p / internal.K6), (2)) + Math.pow((P51_p / internal.K7), (2))) - 1 * internal.k3 * P51_m;
    dstatedt[5] = 0 + 1 * internal.p3 * P51_m - 1 * internal.d3D * internal.D * P51_p - 1 * internal.d3L * internal.L * P51_p;
    dstatedt[2] = 0 + 1 * internal.v2L * internal.L * P / (1 + Math.pow((P51_p / internal.K4), (2)) + Math.pow((EL_p / internal.K5), (2))) + 1 * internal.v2A / (1 + Math.pow((P51_p / internal.K4), (2)) + Math.pow((EL_p / internal.K5), (2))) + 1 * internal.v2B * Math.pow((CL_p), (2)) / (Math.pow((internal.K3), (2)) + Math.pow((CL_p), (2))) / (1 + Math.pow((P51_p / internal.K4), (2)) + Math.pow((EL_p / internal.K5), (2))) - 1 * internal.k2 * P97_m;
    dstatedt[3] = 0 + 1 * internal.p2 * P97_m - 1 * internal.d2D * internal.D * P97_p - 1 * internal.d2L * internal.L * P97_p;
    dstatedt[8] = 0 + 1 * internal.v5 / (1 + Math.pow((EL_p / internal.K11), (2))) - 1 * internal.k5 * PIF_m;
    dstatedt[9] = 0 + 1 * internal.p5 * PIF_m - 1 * internal.d5D * internal.D * PIF_p - 1 * internal.d5L * internal.L * PIF_p;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CL_m", "CL_p", "P97_m", "P97_p", "P51_m", "P51_p", "EL_m", "EL_p", "PIF_m", "PIF_p", "hypocotyl", "P"];
    this.metadata.internalOrder = {cell: null, CL_m_init: null, CL_p_init: null, D: null, d1: null, d2D: null, d2L: null, d3D: null, d3L: null, d4D: null, d4L: null, d5D: null, d5L: null, EL_m_init: null, EL_p_init: null, g1: null, g2: null, hypocotyl_init: null, initial_CL_m: null, initial_CL_p: null, initial_EL_m: null, initial_EL_p: null, initial_hypocotyl: null, initial_P: null, initial_P51_m: null, initial_P51_p: null, initial_P97_m: null, initial_P97_p: null, initial_PIF_m: null, initial_PIF_p: null, K1: null, K10: null, K11: null, K12: null, k1D: null, k1L: null, k2: null, K2: null, k3: null, K3: null, k4: null, K4: null, k5: null, K5: null, K6: null, K7: null, K8: null, K9: null, L: null, P_init: null, p1: null, p1L: null, p2: null, p3: null, p4: null, p5: null, P51_m_init: null, P51_p_init: null, P97_m_init: null, P97_p_init: null, PIF_m_init: null, PIF_p_init: null, PP: null, T: null, v1: null, v1L: null, v2A: null, v2B: null, v2L: null, v3: null, v4: null, v5: null};
    this.metadata.variableOrder = {CL_m: null, CL_p: null, P97_m: null, P97_p: null, P51_m: null, P51_p: null, EL_m: null, EL_p: null, PIF_m: null, PIF_p: null, hypocotyl: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

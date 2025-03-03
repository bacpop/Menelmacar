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
    var state = Array(16).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_MpY;
    state[2] = internal.initial_MpT;
    state[3] = internal.initial_Mpp;
    state[4] = internal.initial_MEK;
    state[5] = internal.initial_MKP3;
    state[6] = internal.initial_MpY_MEK;
    state[7] = internal.initial_MpT_MEK;
    state[8] = internal.initial_M_MEK_Y;
    state[9] = internal.initial_M_MEK_T;
    state[10] = internal.initial_Mpp_MKP3;
    state[11] = internal.initial_MpY_MKP3;
    state[12] = internal.initial_MpT_MKP3_Y;
    state[13] = internal.initial_MpT_MKP3_T;
    state[14] = internal.initial_M_MKP3_T;
    state[15] = internal.initial_M_MKP3_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["h_1", "h_3", "h_4", "h_6", "h_7", "h_9", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "k_1", "k_3", "k_5", "k_7", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "M_init", "M_MEK_T_init", "M_MEK_Y_init", "M_MKP3_T_init", "M_MKP3_Y_init", "MEK_init", "MKP3_init", "Mpp_init", "Mpp_MKP3_init", "MpT_init", "MpT_MEK_init", "MpT_MKP3_T_init", "MpT_MKP3_Y_init", "MpY_init", "MpY_MEK_init", "MpY_MKP3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "h_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_6", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_9", internal, 0.0018, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h5", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h6", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h7", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h8", internal, 0.46999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h9", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MEK_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MEK_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MKP3_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MKP3_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEK_init", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKP3_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_MKP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MEK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MKP3_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MKP3_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_MEK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_MKP3_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_M_MEK_T = internal.M_MEK_T_init;
    internal.initial_M_MEK_Y = internal.M_MEK_Y_init;
    internal.initial_M_MKP3_T = internal.M_MKP3_T_init;
    internal.initial_M_MKP3_Y = internal.M_MKP3_Y_init;
    internal.initial_MEK = internal.MEK_init;
    internal.initial_MKP3 = internal.MKP3_init;
    internal.initial_Mpp = internal.Mpp_init;
    internal.initial_Mpp_MKP3 = internal.Mpp_MKP3_init;
    internal.initial_MpT = internal.MpT_init;
    internal.initial_MpT_MEK = internal.MpT_MEK_init;
    internal.initial_MpT_MKP3_T = internal.MpT_MKP3_T_init;
    internal.initial_MpT_MKP3_Y = internal.MpT_MKP3_Y_init;
    internal.initial_MpY = internal.MpY_init;
    internal.initial_MpY_MEK = internal.MpY_MEK_init;
    internal.initial_MpY_MKP3 = internal.MpY_MKP3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const MpY = state[1];
    const MpT = state[2];
    const Mpp = state[3];
    const MEK = state[4];
    const MKP3 = state[5];
    const MpY_MEK = state[6];
    const MpT_MEK = state[7];
    const M_MEK_Y = state[8];
    const M_MEK_T = state[9];
    const Mpp_MKP3 = state[10];
    const MpY_MKP3 = state[11];
    const MpT_MKP3_Y = state[12];
    const MpT_MKP3_T = state[13];
    const M_MKP3_T = state[14];
    const M_MKP3_Y = state[15];
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * M * MEK - internal.k_1 * M_MEK_Y) - 1 * internal.cell * (internal.k5 * M * MEK - internal.k_5 * M_MEK_T) + 1 * internal.cell * (internal.h6 * M_MKP3_T - internal.h_6 * M * MKP3) + 1 * internal.cell * (internal.h9 * M_MKP3_Y - internal.h_9 * M * MKP3);
    dstatedt[9] = 0 + 1 * internal.cell * (internal.k5 * M * MEK - internal.k_5 * M_MEK_T) - 1 * internal.cell * internal.k6 * M_MEK_T;
    dstatedt[8] = 0 + 1 * internal.cell * (internal.k1 * M * MEK - internal.k_1 * M_MEK_Y) - 1 * internal.cell * internal.k2 * M_MEK_Y;
    dstatedt[14] = 0 + 1 * internal.cell * internal.h5 * MpT_MKP3_T - 1 * internal.cell * (internal.h6 * M_MKP3_T - internal.h_6 * M * MKP3);
    dstatedt[15] = 0 + 1 * internal.cell * internal.h8 * MpY_MKP3 - 1 * internal.cell * (internal.h9 * M_MKP3_Y - internal.h_9 * M * MKP3);
    dstatedt[4] = 0 - 1 * internal.cell * (internal.k1 * M * MEK - internal.k_1 * M_MEK_Y) + 1 * internal.cell * internal.k2 * M_MEK_Y - 1 * internal.cell * (internal.k3 * MpY * MEK - internal.k_3 * MpY_MEK) + 1 * internal.cell * internal.k4 * MpY_MEK - 1 * internal.cell * (internal.k5 * M * MEK - internal.k_5 * M_MEK_T) + 1 * internal.cell * internal.k6 * M_MEK_T - 1 * internal.cell * (internal.k7 * MpT * MEK - internal.k_7 * MpT_MEK) + 1 * internal.cell * internal.k8 * MpT_MEK;
    dstatedt[5] = 0 - 1 * internal.cell * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3) + 1 * internal.cell * (internal.h3 * MpT_MKP3_Y - internal.h_3 * MpT * MKP3) - 1 * internal.cell * (internal.h4 * MpT * MKP3 - internal.h_4 * MpT_MKP3_T) + 1 * internal.cell * (internal.h6 * M_MKP3_T - internal.h_6 * M * MKP3) - 1 * internal.cell * (internal.h7 * MpY * MKP3 - internal.h_7 * MpY_MKP3) + 1 * internal.cell * (internal.h9 * M_MKP3_Y - internal.h_9 * M * MKP3);
    dstatedt[3] = 0 + 1 * internal.cell * internal.k4 * MpY_MEK + 1 * internal.cell * internal.k8 * MpT_MEK - 1 * internal.cell * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3);
    dstatedt[10] = 0 + 1 * internal.cell * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3) - 1 * internal.cell * internal.h2 * Mpp_MKP3;
    dstatedt[2] = 0 + 1 * internal.cell * internal.k6 * M_MEK_T - 1 * internal.cell * (internal.k7 * MpT * MEK - internal.k_7 * MpT_MEK) + 1 * internal.cell * (internal.h3 * MpT_MKP3_Y - internal.h_3 * MpT * MKP3) - 1 * internal.cell * (internal.h4 * MpT * MKP3 - internal.h_4 * MpT_MKP3_T);
    dstatedt[7] = 0 + 1 * internal.cell * (internal.k7 * MpT * MEK - internal.k_7 * MpT_MEK) - 1 * internal.cell * internal.k8 * MpT_MEK;
    dstatedt[13] = 0 - 1 * internal.cell * internal.h5 * MpT_MKP3_T + 1 * internal.cell * (internal.h4 * MpT * MKP3 - internal.h_4 * MpT_MKP3_T);
    dstatedt[12] = 0 + 1 * internal.cell * internal.h2 * Mpp_MKP3 - 1 * internal.cell * (internal.h3 * MpT_MKP3_Y - internal.h_3 * MpT * MKP3);
    dstatedt[1] = 0 + 1 * internal.cell * internal.k2 * M_MEK_Y - 1 * internal.cell * (internal.k3 * MpY * MEK - internal.k_3 * MpY_MEK) - 1 * internal.cell * (internal.h7 * MpY * MKP3 - internal.h_7 * MpY_MKP3);
    dstatedt[6] = 0 + 1 * internal.cell * (internal.k3 * MpY * MEK - internal.k_3 * MpY_MEK) - 1 * internal.cell * internal.k4 * MpY_MEK;
    dstatedt[11] = 0 - 1 * internal.cell * internal.h8 * MpY_MKP3 + 1 * internal.cell * (internal.h7 * MpY * MKP3 - internal.h_7 * MpY_MKP3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "MpY", "MpT", "Mpp", "MEK", "MKP3", "MpY_MEK", "MpT_MEK", "M_MEK_Y", "M_MEK_T", "Mpp_MKP3", "MpY_MKP3", "MpT_MKP3_Y", "MpT_MKP3_T", "M_MKP3_T", "M_MKP3_Y"];
    this.metadata.internalOrder = {cell: null, h_1: null, h_3: null, h_4: null, h_6: null, h_7: null, h_9: null, h1: null, h2: null, h3: null, h4: null, h5: null, h6: null, h7: null, h8: null, h9: null, initial_M: null, initial_M_MEK_T: null, initial_M_MEK_Y: null, initial_M_MKP3_T: null, initial_M_MKP3_Y: null, initial_MEK: null, initial_MKP3: null, initial_Mpp: null, initial_Mpp_MKP3: null, initial_MpT: null, initial_MpT_MEK: null, initial_MpT_MKP3_T: null, initial_MpT_MKP3_Y: null, initial_MpY: null, initial_MpY_MEK: null, initial_MpY_MKP3: null, k_1: null, k_3: null, k_5: null, k_7: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, M_init: null, M_MEK_T_init: null, M_MEK_Y_init: null, M_MKP3_T_init: null, M_MKP3_Y_init: null, MEK_init: null, MKP3_init: null, Mpp_init: null, Mpp_MKP3_init: null, MpT_init: null, MpT_MEK_init: null, MpT_MKP3_T_init: null, MpT_MKP3_Y_init: null, MpY_init: null, MpY_MEK_init: null, MpY_MKP3_init: null};
    this.metadata.variableOrder = {M: null, MpY: null, MpT: null, Mpp: null, MEK: null, MKP3: null, MpY_MEK: null, MpT_MEK: null, M_MEK_Y: null, M_MEK_T: null, Mpp_MKP3: null, MpY_MKP3: null, MpT_MKP3_Y: null, MpT_MKP3_T: null, M_MKP3_T: null, M_MKP3_Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

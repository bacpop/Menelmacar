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
    var state = Array(18).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_MpY;
    state[2] = internal.initial_MpT;
    state[3] = internal.initial_Mpp;
    state[4] = internal.initial_MAPKK;
    state[5] = internal.initial_MKP;
    state[6] = internal.initial_MpY_MAPKK;
    state[7] = internal.initial_MpT_MAPKK;
    state[8] = internal.initial_M_MAPKK_Y;
    state[9] = internal.initial_M_MAPKK_T;
    state[10] = internal.initial_Mpp_MKP_Y;
    state[11] = internal.initial_Mpp_MKP_T;
    state[12] = internal.initial_MpY_MKP_Y;
    state[13] = internal.initial_MpY_MKP_T;
    state[14] = internal.initial_MpT_MKP_Y;
    state[15] = internal.initial_MpT_MKP_T;
    state[16] = internal.initial_M_MKP_T;
    state[17] = internal.initial_M_MKP_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["h_1", "h_10", "h_12", "h_3", "h_4", "h_6", "h_7", "h_9", "h1", "h10", "h11", "h12", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "k_1", "k_3", "k_5", "k_7", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "M_init", "M_MAPKK_T_init", "M_MAPKK_Y_init", "M_MKP_T_init", "M_MKP_Y_init", "MAPKK_init", "MKP_init", "Mpp_init", "Mpp_MKP_T_init", "Mpp_MKP_Y_init", "MpT_init", "MpT_MAPKK_init", "MpT_MKP_T_init", "MpT_MKP_Y_init", "MpY_init", "MpY_MAPKK_init", "MpY_MKP_T_init", "MpY_MKP_Y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "h_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_10", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_12", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_6", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_9", internal, 0.0018, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h10", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h11", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h12", internal, 1, -Infinity, Infinity, false);
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
    this.base.user.setUserScalar(user, "k1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.032000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.032000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MAPKK_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MAPKK_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MKP_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MKP_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPKK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_MKP_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_MKP_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MAPKK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MKP_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_MKP_Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_MAPKK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_MKP_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_MKP_Y_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_M_MAPKK_T = internal.M_MAPKK_T_init;
    internal.initial_M_MAPKK_Y = internal.M_MAPKK_Y_init;
    internal.initial_M_MKP_T = internal.M_MKP_T_init;
    internal.initial_M_MKP_Y = internal.M_MKP_Y_init;
    internal.initial_MAPKK = internal.MAPKK_init;
    internal.initial_MKP = internal.MKP_init;
    internal.initial_Mpp = internal.Mpp_init;
    internal.initial_Mpp_MKP_T = internal.Mpp_MKP_T_init;
    internal.initial_Mpp_MKP_Y = internal.Mpp_MKP_Y_init;
    internal.initial_MpT = internal.MpT_init;
    internal.initial_MpT_MAPKK = internal.MpT_MAPKK_init;
    internal.initial_MpT_MKP_T = internal.MpT_MKP_T_init;
    internal.initial_MpT_MKP_Y = internal.MpT_MKP_Y_init;
    internal.initial_MpY = internal.MpY_init;
    internal.initial_MpY_MAPKK = internal.MpY_MAPKK_init;
    internal.initial_MpY_MKP_T = internal.MpY_MKP_T_init;
    internal.initial_MpY_MKP_Y = internal.MpY_MKP_Y_init;
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
    const MAPKK = state[4];
    const MKP = state[5];
    const MpY_MAPKK = state[6];
    const MpT_MAPKK = state[7];
    const M_MAPKK_Y = state[8];
    const M_MAPKK_T = state[9];
    const Mpp_MKP_Y = state[10];
    const Mpp_MKP_T = state[11];
    const MpY_MKP_Y = state[12];
    const MpY_MKP_T = state[13];
    const MpT_MKP_Y = state[14];
    const MpT_MKP_T = state[15];
    const M_MKP_T = state[16];
    const M_MKP_Y = state[17];
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK_Y) - 1 * internal.cell * (internal.k5 * M * MAPKK - internal.k_5 * M_MAPKK_T) + 1 * internal.cell * (internal.h6 * M_MKP_T - internal.h_6 * M * MKP) + 1 * internal.cell * (internal.h9 * M_MKP_Y - internal.h_9 * M * MKP);
    dstatedt[9] = 0 + 1 * internal.cell * (internal.k5 * M * MAPKK - internal.k_5 * M_MAPKK_T) - 1 * internal.cell * internal.k6 * M_MAPKK_T;
    dstatedt[8] = 0 + 1 * internal.cell * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK_Y) - 1 * internal.cell * internal.k2 * M_MAPKK_Y;
    dstatedt[16] = 0 + 1 * internal.cell * internal.h5 * MpT_MKP_T - 1 * internal.cell * (internal.h6 * M_MKP_T - internal.h_6 * M * MKP);
    dstatedt[17] = 0 + 1 * internal.cell * internal.h8 * MpY_MKP_Y - 1 * internal.cell * (internal.h9 * M_MKP_Y - internal.h_9 * M * MKP);
    dstatedt[4] = 0 - 1 * internal.cell * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK_Y) + 1 * internal.cell * internal.k2 * M_MAPKK_Y - 1 * internal.cell * (internal.k3 * MpY * MAPKK - internal.k_3 * MpY_MAPKK) + 1 * internal.cell * internal.k4 * MpY_MAPKK - 1 * internal.cell * (internal.k5 * M * MAPKK - internal.k_5 * M_MAPKK_T) + 1 * internal.cell * internal.k6 * M_MAPKK_T - 1 * internal.cell * (internal.k7 * MpT * MAPKK - internal.k_7 * MpT_MAPKK) + 1 * internal.cell * internal.k8 * MpT_MAPKK;
    dstatedt[5] = 0 - 1 * internal.cell * (internal.h1 * Mpp * MKP - internal.h_1 * Mpp_MKP_Y) + 1 * internal.cell * (internal.h3 * MpT_MKP_Y - internal.h_3 * MpT * MKP) - 1 * internal.cell * (internal.h4 * MpT * MKP - internal.h_4 * MpT_MKP_T) + 1 * internal.cell * (internal.h6 * M_MKP_T - internal.h_6 * M * MKP) - 1 * internal.cell * (internal.h7 * MpY * MKP - internal.h_7 * MpY_MKP_Y) + 1 * internal.cell * (internal.h9 * M_MKP_Y - internal.h_9 * M * MKP) - 1 * internal.cell * (internal.h10 * Mpp * MKP - internal.h_10 * Mpp_MKP_T) + 1 * internal.cell * (internal.h12 * MpY_MKP_T - internal.h_12 * MpY * MKP);
    dstatedt[3] = 0 + 1 * internal.cell * internal.k4 * MpY_MAPKK + 1 * internal.cell * internal.k8 * MpT_MAPKK - 1 * internal.cell * (internal.h1 * Mpp * MKP - internal.h_1 * Mpp_MKP_Y) - 1 * internal.cell * (internal.h10 * Mpp * MKP - internal.h_10 * Mpp_MKP_T);
    dstatedt[11] = 0 + 1 * internal.cell * (internal.h10 * Mpp * MKP - internal.h_10 * Mpp_MKP_T) - 1 * internal.cell * internal.h11 * Mpp_MKP_T;
    dstatedt[10] = 0 + 1 * internal.cell * (internal.h1 * Mpp * MKP - internal.h_1 * Mpp_MKP_Y) - 1 * internal.cell * internal.h2 * Mpp_MKP_Y;
    dstatedt[2] = 0 + 1 * internal.cell * internal.k6 * M_MAPKK_T - 1 * internal.cell * (internal.k7 * MpT * MAPKK - internal.k_7 * MpT_MAPKK) + 1 * internal.cell * (internal.h3 * MpT_MKP_Y - internal.h_3 * MpT * MKP) - 1 * internal.cell * (internal.h4 * MpT * MKP - internal.h_4 * MpT_MKP_T);
    dstatedt[7] = 0 + 1 * internal.cell * (internal.k7 * MpT * MAPKK - internal.k_7 * MpT_MAPKK) - 1 * internal.cell * internal.k8 * MpT_MAPKK;
    dstatedt[15] = 0 + 1 * internal.cell * (internal.h4 * MpT * MKP - internal.h_4 * MpT_MKP_T) - 1 * internal.cell * internal.h5 * MpT_MKP_T;
    dstatedt[14] = 0 + 1 * internal.cell * internal.h2 * Mpp_MKP_Y - 1 * internal.cell * (internal.h3 * MpT_MKP_Y - internal.h_3 * MpT * MKP);
    dstatedt[1] = 0 + 1 * internal.cell * internal.k2 * M_MAPKK_Y - 1 * internal.cell * (internal.k3 * MpY * MAPKK - internal.k_3 * MpY_MAPKK) - 1 * internal.cell * (internal.h7 * MpY * MKP - internal.h_7 * MpY_MKP_Y) + 1 * internal.cell * (internal.h12 * MpY_MKP_T - internal.h_12 * MpY * MKP);
    dstatedt[6] = 0 + 1 * internal.cell * (internal.k3 * MpY * MAPKK - internal.k_3 * MpY_MAPKK) - 1 * internal.cell * internal.k4 * MpY_MAPKK;
    dstatedt[13] = 0 + 1 * internal.cell * internal.h11 * Mpp_MKP_T - 1 * internal.cell * (internal.h12 * MpY_MKP_T - internal.h_12 * MpY * MKP);
    dstatedt[12] = 0 + 1 * internal.cell * (internal.h7 * MpY * MKP - internal.h_7 * MpY_MKP_Y) - 1 * internal.cell * internal.h8 * MpY_MKP_Y;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "MpY", "MpT", "Mpp", "MAPKK", "MKP", "MpY_MAPKK", "MpT_MAPKK", "M_MAPKK_Y", "M_MAPKK_T", "Mpp_MKP_Y", "Mpp_MKP_T", "MpY_MKP_Y", "MpY_MKP_T", "MpT_MKP_Y", "MpT_MKP_T", "M_MKP_T", "M_MKP_Y"];
    this.metadata.internalOrder = {cell: null, h_1: null, h_10: null, h_12: null, h_3: null, h_4: null, h_6: null, h_7: null, h_9: null, h1: null, h10: null, h11: null, h12: null, h2: null, h3: null, h4: null, h5: null, h6: null, h7: null, h8: null, h9: null, initial_M: null, initial_M_MAPKK_T: null, initial_M_MAPKK_Y: null, initial_M_MKP_T: null, initial_M_MKP_Y: null, initial_MAPKK: null, initial_MKP: null, initial_Mpp: null, initial_Mpp_MKP_T: null, initial_Mpp_MKP_Y: null, initial_MpT: null, initial_MpT_MAPKK: null, initial_MpT_MKP_T: null, initial_MpT_MKP_Y: null, initial_MpY: null, initial_MpY_MAPKK: null, initial_MpY_MKP_T: null, initial_MpY_MKP_Y: null, k_1: null, k_3: null, k_5: null, k_7: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, M_init: null, M_MAPKK_T_init: null, M_MAPKK_Y_init: null, M_MKP_T_init: null, M_MKP_Y_init: null, MAPKK_init: null, MKP_init: null, Mpp_init: null, Mpp_MKP_T_init: null, Mpp_MKP_Y_init: null, MpT_init: null, MpT_MAPKK_init: null, MpT_MKP_T_init: null, MpT_MKP_Y_init: null, MpY_init: null, MpY_MAPKK_init: null, MpY_MKP_T_init: null, MpY_MKP_Y_init: null};
    this.metadata.variableOrder = {M: null, MpY: null, MpT: null, Mpp: null, MAPKK: null, MKP: null, MpY_MAPKK: null, MpT_MAPKK: null, M_MAPKK_Y: null, M_MAPKK_T: null, Mpp_MKP_Y: null, Mpp_MKP_T: null, MpY_MKP_Y: null, MpY_MKP_T: null, MpT_MKP_Y: null, MpT_MKP_T: null, M_MKP_T: null, M_MKP_Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

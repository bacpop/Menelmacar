export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    internal.Nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Dsh_i_init = internal.Dsh0 - internal.initial_Dsh_a;
    internal.initial_Dsh_i = Dsh_i_init;
    var state = Array(15).fill(0);
    state[0] = internal.initial_Dsh_i;
    state[1] = internal.initial_Dsh_a;
    state[2] = internal.initial_APC__axin__GSK3;
    state[3] = internal.initial_APC_axin_GSK3;
    state[4] = internal.initial_GSK3;
    state[5] = internal.initial_APC_axin;
    state[6] = internal.initial_APC;
    state[7] = internal.initial_B_catenin_APC__axin__GSK3;
    state[8] = internal.initial_B_catenin__APC__axin__GSK3;
    state[9] = internal.initial_B_catenin;
    state[10] = internal.initial_B_catenin_0;
    state[11] = internal.initial_Axin;
    state[12] = internal.initial_TCF;
    state[13] = internal.initial_B_catenin_TCF;
    state[14] = internal.initial_B_catenin_APC;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APC__axin__GSK3_init", "APC_axin_GSK3_init", "APC_axin_init", "APC_init", "Axin_init", "B_catenin__APC__axin__GSK3_init", "B_catenin_0_init", "B_catenin_APC__axin__GSK3_init", "B_catenin_APC_init", "B_catenin_init", "B_catenin_TCF_init", "Dsh_a_init", "Dsh0", "GSK3_init", "K_16", "K_17", "k_6", "K_7", "K_8", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "lambda", "t0", "TCF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APC__axin__GSK3_init", internal, 0.0096600000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_axin_GSK3_init", internal, 0.0048300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_axin_init", internal, 0.00098065000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_init", internal, 98, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Axin_init", internal, 0.00049299999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin__APC__axin__GSK3_init", internal, 0.0020200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin_0_init", internal, 25.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin_APC__axin__GSK3_init", internal, 0.0020200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin_APC_init", internal, 2.0499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_catenin_TCF_init", internal, 6.8300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dsh_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dsh0", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GSK3_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_16", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_17", internal, 1200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_6", internal, 0.90900000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_7", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_8", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.182, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 206, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.41699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.42299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.00025700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 8.2200000000000006e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.16700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.018200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.26700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.13300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.090899999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 206, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t0", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TCF_init", internal, 8.1699999999999999, -Infinity, Infinity, false);
    internal.initial_APC = internal.APC_init;
    internal.initial_APC__axin__GSK3 = internal.APC__axin__GSK3_init;
    internal.initial_APC_axin = internal.APC_axin_init;
    internal.initial_APC_axin_GSK3 = internal.APC_axin_GSK3_init;
    internal.initial_Axin = internal.Axin_init;
    internal.initial_B_catenin = internal.B_catenin_init;
    internal.initial_B_catenin__APC__axin__GSK3 = internal.B_catenin__APC__axin__GSK3_init;
    internal.initial_B_catenin_0 = internal.B_catenin_0_init;
    internal.initial_B_catenin_APC = internal.B_catenin_APC_init;
    internal.initial_B_catenin_APC__axin__GSK3 = internal.B_catenin_APC__axin__GSK3_init;
    internal.initial_B_catenin_TCF = internal.B_catenin_TCF_init;
    internal.initial_Dsh_a = internal.Dsh_a_init;
    internal.initial_GSK3 = internal.GSK3_init;
    internal.initial_TCF = internal.TCF_init;
    internal.k_16 = internal.k16 * internal.K_16;
    internal.k_17 = internal.k17 * internal.K_17;
    internal.k_7 = internal.k7 * internal.K_7;
    internal.k_8 = internal.k8 * internal.K_8;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Dsh_i = state[0];
    const Dsh_a = state[1];
    const APC__axin__GSK3 = state[2];
    const APC_axin_GSK3 = state[3];
    const GSK3 = state[4];
    const APC_axin = state[5];
    const APC = state[6];
    const B_catenin_APC__axin__GSK3 = state[7];
    const B_catenin__APC__axin__GSK3 = state[8];
    const B_catenin = state[9];
    const B_catenin_0 = state[10];
    const Axin = state[11];
    const TCF = state[12];
    const B_catenin_TCF = state[13];
    const B_catenin_APC = state[14];
    dstatedt[3] = 0 - 1 * internal.Cytoplasm * (internal.k3 * Dsh_a * APC_axin_GSK3) - 1 * internal.Cytoplasm * internal.k4 * APC_axin_GSK3 + 1 * internal.Cytoplasm * internal.k5 * APC__axin__GSK3 + 1 * internal.Cytoplasm * (internal.k6 * GSK3 * APC_axin - internal.k_6 * APC_axin_GSK3);
    dstatedt[9] = 0 + 1 * internal.Cytoplasm * internal.k10 * B_catenin__APC__axin__GSK3 - 1 * internal.Cytoplasm * internal.k11 * B_catenin;
    dstatedt[8] = 0 + 1 * internal.Cytoplasm * internal.k9 * B_catenin_APC__axin__GSK3 - 1 * internal.Cytoplasm * internal.k10 * B_catenin__APC__axin__GSK3;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * (internal.k3 * Dsh_a * APC_axin_GSK3) - 1 * internal.Cytoplasm * (internal.k6 * GSK3 * APC_axin - internal.k_6 * APC_axin_GSK3);
    var W = ((t < internal.t0 ? 0 : Math.exp(- 1 * internal.lambda * (t - internal.t0))));
    dstatedt[6] = 0 - 1 * internal.Cytoplasm * (internal.k7 * APC * Axin - internal.k_7 * APC_axin) - 1 * internal.k17 * APC * B_catenin_0 - internal.k_17 * B_catenin_APC;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * internal.k4 * APC_axin_GSK3 - 1 * internal.Cytoplasm * internal.k5 * APC__axin__GSK3 - 1 * internal.k8 * APC__axin__GSK3 * B_catenin_0 - internal.k_8 * B_catenin_APC__axin__GSK3 + 1 * internal.Cytoplasm * internal.k10 * B_catenin__APC__axin__GSK3;
    dstatedt[5] = 0 + 1 * internal.Cytoplasm * (internal.k3 * Dsh_a * APC_axin_GSK3) - 1 * internal.Cytoplasm * (internal.k6 * GSK3 * APC_axin - internal.k_6 * APC_axin_GSK3) + 1 * internal.Cytoplasm * (internal.k7 * APC * Axin - internal.k_7 * APC_axin);
    dstatedt[11] = 0 - 1 * internal.Cytoplasm * (internal.k7 * APC * Axin - internal.k_7 * APC_axin) + 1 * internal.Cytoplasm * (internal.k14) - 1 * internal.Cytoplasm * internal.k15 * Axin;
    dstatedt[10] = 0 - 1 * internal.k8 * APC__axin__GSK3 * B_catenin_0 - internal.k_8 * B_catenin_APC__axin__GSK3 + 1 * internal.Nucleus * (internal.k12) - 1 * internal.Nucleus * internal.k13 * B_catenin_0 - 1 * internal.Nucleus * (internal.k16 * B_catenin_0 * TCF - internal.k_16 * B_catenin_TCF) - 1 * internal.k17 * APC * B_catenin_0 - internal.k_17 * B_catenin_APC;
    dstatedt[14] = 0 + 1 * internal.k17 * APC * B_catenin_0 - internal.k_17 * B_catenin_APC;
    dstatedt[7] = 0 + 1 * internal.k8 * APC__axin__GSK3 * B_catenin_0 - internal.k_8 * B_catenin_APC__axin__GSK3 - 1 * internal.Cytoplasm * internal.k9 * B_catenin_APC__axin__GSK3;
    dstatedt[13] = 0 + 1 * internal.Nucleus * (internal.k16 * B_catenin_0 * TCF - internal.k_16 * B_catenin_TCF);
    dstatedt[1] = 0 + 1 * internal.Cytoplasm * (internal.k1 * Dsh_i * W) - 1 * internal.Cytoplasm * internal.k2 * Dsh_a;
    dstatedt[0] = 0 - 1 * internal.Cytoplasm * (internal.k1 * Dsh_i * W) + 1 * internal.Cytoplasm * internal.k2 * Dsh_a;
    dstatedt[12] = 0 - 1 * internal.Nucleus * (internal.k16 * B_catenin_0 * TCF - internal.k_16 * B_catenin_TCF);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Dsh_i", "Dsh_a", "APC__axin__GSK3", "APC_axin_GSK3", "GSK3", "APC_axin", "APC", "B_catenin_APC__axin__GSK3", "B_catenin__APC__axin__GSK3", "B_catenin", "B_catenin_0", "Axin", "TCF", "B_catenin_TCF", "B_catenin_APC"];
    this.metadata.internalOrder = {APC__axin__GSK3_init: null, APC_axin_GSK3_init: null, APC_axin_init: null, APC_init: null, Axin_init: null, B_catenin__APC__axin__GSK3_init: null, B_catenin_0_init: null, B_catenin_APC__axin__GSK3_init: null, B_catenin_APC_init: null, B_catenin_init: null, B_catenin_TCF_init: null, Cytoplasm: null, Dsh_a_init: null, Dsh0: null, GSK3_init: null, initial_APC: null, initial_APC__axin__GSK3: null, initial_APC_axin: null, initial_APC_axin_GSK3: null, initial_Axin: null, initial_B_catenin: null, initial_B_catenin__APC__axin__GSK3: null, initial_B_catenin_0: null, initial_B_catenin_APC: null, initial_B_catenin_APC__axin__GSK3: null, initial_B_catenin_TCF: null, initial_Dsh_a: null, initial_Dsh_i: null, initial_GSK3: null, initial_TCF: null, k_16: null, K_16: null, k_17: null, K_17: null, k_6: null, k_7: null, K_7: null, k_8: null, K_8: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, lambda: null, Nucleus: null, t0: null, TCF_init: null};
    this.metadata.variableOrder = {Dsh_i: null, Dsh_a: null, APC__axin__GSK3: null, APC_axin_GSK3: null, GSK3: null, APC_axin: null, APC: null, B_catenin_APC__axin__GSK3: null, B_catenin__APC__axin__GSK3: null, B_catenin: null, B_catenin_0: null, Axin: null, TCF: null, B_catenin_TCF: null, B_catenin_APC: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c = 2.2999999999999998;
    internal.extracellular = 1;
    internal.n = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(18).fill(0);
    state[0] = internal.initial_TGFbR;
    state[1] = internal.initial_TGFb_TGFbR;
    state[2] = internal.initial_TGFb_TGFbR_P;
    state[3] = internal.initial_I_Smad_TGFb_TGFbR_P;
    state[4] = internal.initial_Smad;
    state[5] = internal.initial_Smad_P;
    state[6] = internal.initial_CoSmad;
    state[7] = internal.initial_Smad_P_Smad_P;
    state[8] = internal.initial_Smad_P_CoSmad;
    state[9] = internal.initial_I_Smad_mRNA2;
    state[10] = internal.initial_I_Smad;
    state[11] = internal.initial_Smad_N;
    state[12] = internal.initial_Smad_P_Smad_P_N;
    state[13] = internal.initial_Smad_P_N;
    state[14] = internal.initial_Smad_P_CoSmad_N;
    state[15] = internal.initial_CoSmad_N;
    state[16] = internal.initial_I_Smad_mRNA1;
    state[17] = internal.initial_TGFb;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CoSmad_init", "CoSmad_N_init", "h", "I_Smad_init", "I_Smad_mRNA1_init", "I_Smad_mRNA2_init", "I_Smad_TGFb_TGFbR_P_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Smad_init", "Smad_N_init", "Smad_P_CoSmad_init", "Smad_P_CoSmad_N_init", "Smad_P_init", "Smad_P_N_init", "Smad_P_Smad_P_init", "Smad_P_Smad_P_N_init", "TGFb_init", "TGFb_TGFbR_init", "TGFb_TGFbR_P_init", "TGFbR_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CoSmad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoSmad_N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 2.0600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_Smad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_Smad_mRNA1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_Smad_mRNA2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_Smad_TGFb_TGFbR_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0044600000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 5.1200000000000002e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.0092300000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.051299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.00164, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.037999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 28.52, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.021399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 8.0500000000000005e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.043400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 0.00041199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 4.3900000000000003e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.32400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.00192, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00054900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1.29e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 9.3500000000000003e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.0104, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.00075000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_CoSmad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_CoSmad_N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_Smad_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad_P_Smad_P_N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_TGFbR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_TGFbR_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFbR_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_CoSmad = internal.CoSmad_init;
    internal.initial_CoSmad_N = internal.CoSmad_N_init;
    internal.initial_I_Smad = internal.I_Smad_init;
    internal.initial_I_Smad_mRNA1 = internal.I_Smad_mRNA1_init;
    internal.initial_I_Smad_mRNA2 = internal.I_Smad_mRNA2_init;
    internal.initial_I_Smad_TGFb_TGFbR_P = internal.I_Smad_TGFb_TGFbR_P_init;
    internal.initial_Smad = internal.Smad_init;
    internal.initial_Smad_N = internal.Smad_N_init;
    internal.initial_Smad_P = internal.Smad_P_init;
    internal.initial_Smad_P_CoSmad = internal.Smad_P_CoSmad_init;
    internal.initial_Smad_P_CoSmad_N = internal.Smad_P_CoSmad_N_init;
    internal.initial_Smad_P_N = internal.Smad_P_N_init;
    internal.initial_Smad_P_Smad_P = internal.Smad_P_Smad_P_init;
    internal.initial_Smad_P_Smad_P_N = internal.Smad_P_Smad_P_N_init;
    internal.initial_TGFb = internal.TGFb_init;
    internal.initial_TGFb_TGFbR = internal.TGFb_TGFbR_init;
    internal.initial_TGFb_TGFbR_P = internal.TGFb_TGFbR_P_init;
    internal.initial_TGFbR = internal.TGFbR_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TGFbR = state[0];
    const TGFb_TGFbR = state[1];
    const TGFb_TGFbR_P = state[2];
    const I_Smad_TGFb_TGFbR_P = state[3];
    const Smad = state[4];
    const Smad_P = state[5];
    const CoSmad = state[6];
    const Smad_P_Smad_P = state[7];
    const Smad_P_CoSmad = state[8];
    const I_Smad_mRNA2 = state[9];
    const I_Smad = state[10];
    const Smad_N = state[11];
    const Smad_P_Smad_P_N = state[12];
    const Smad_P_N = state[13];
    const Smad_P_CoSmad_N = state[14];
    const CoSmad_N = state[15];
    const I_Smad_mRNA1 = state[16];
    const TGFb = state[17];
    dstatedt[17] = 0;
    dstatedt[6] = 0 - 1 * internal.c * internal.k10 * Smad_P * CoSmad + 1 * internal.c * internal.k11 * Smad_P_CoSmad - 1 * internal.k8 * CoSmad + 1 * internal.k9 * CoSmad_N;
    dstatedt[15] = 0 + 1 * internal.k8 * CoSmad - 1 * internal.k9 * CoSmad_N - 1 * internal.n * internal.k10 * Smad_P_N * CoSmad_N + 1 * internal.n * internal.k11 * Smad_P_CoSmad_N;
    dstatedt[10] = 0 - 1 * internal.c * internal.k5 * TGFb_TGFbR_P * I_Smad + 1 * internal.c * internal.k6 * I_Smad_TGFb_TGFbR_P + 1 * internal.c * (internal.k18 * I_Smad_mRNA2) - 1 * internal.c * internal.k19 * I_Smad;
    dstatedt[16] = 0 + 1 * internal.n * (internal.k14 * Math.pow((Smad_P_CoSmad_N), (internal.h)) / (Math.pow((Smad_P_CoSmad_N), (internal.h)) + Math.pow((internal.k15), (internal.h)))) - 1 * internal.k16 * I_Smad_mRNA1;
    dstatedt[9] = 0 + 1 * internal.k16 * I_Smad_mRNA1 - 1 * internal.c * internal.k17 * I_Smad_mRNA2;
    dstatedt[3] = 0 + 1 * internal.c * internal.k5 * TGFb_TGFbR_P * I_Smad - 1 * internal.c * internal.k6 * I_Smad_TGFb_TGFbR_P;
    dstatedt[4] = 0 - 1 * internal.c * (internal.k7 * Smad * TGFb_TGFbR_P) - 1 * internal.k8 * Smad + 1 * internal.k9 * Smad_N;
    dstatedt[11] = 0 + 1 * internal.k8 * Smad - 1 * internal.k9 * Smad_N + 1 * internal.n * internal.k13 * Smad_P_N;
    dstatedt[5] = 0 + 1 * internal.c * (internal.k7 * Smad * TGFb_TGFbR_P) - 2 * internal.c * internal.k10 * Math.pow((Smad_P), (2)) + 2 * internal.c * internal.k11 * Smad_P_Smad_P - 1 * internal.c * internal.k10 * Smad_P * CoSmad + 1 * internal.c * internal.k11 * Smad_P_CoSmad - 1 * internal.k8 * Smad_P + 1 * internal.k9 * Smad_P_N;
    dstatedt[8] = 0 + 1 * internal.c * internal.k10 * Smad_P * CoSmad - 1 * internal.c * internal.k11 * Smad_P_CoSmad - 1 * (internal.k12 * internal.k8 * Smad_P_CoSmad);
    dstatedt[14] = 0 + 1 * (internal.k12 * internal.k8 * Smad_P_CoSmad) + 1 * internal.n * internal.k10 * Smad_P_N * CoSmad_N - 1 * internal.n * internal.k11 * Smad_P_CoSmad_N;
    dstatedt[13] = 0 + 1 * internal.k8 * Smad_P - 1 * internal.k9 * Smad_P_N - 1 * internal.n * internal.k13 * Smad_P_N - 2 * internal.n * internal.k10 * Math.pow((Smad_P_N), (2)) + 2 * internal.n * internal.k11 * Smad_P_Smad_P_N - 1 * internal.n * internal.k10 * Smad_P_N * CoSmad_N + 1 * internal.n * internal.k11 * Smad_P_CoSmad_N;
    dstatedt[7] = 0 + 1 * internal.c * internal.k10 * Math.pow((Smad_P), (2)) - 1 * internal.c * internal.k11 * Smad_P_Smad_P - 1 * (internal.k12 * internal.k8 * Smad_P_Smad_P);
    dstatedt[12] = 0 + 1 * (internal.k12 * internal.k8 * Smad_P_Smad_P) + 1 * internal.n * internal.k10 * Math.pow((Smad_P_N), (2)) - 1 * internal.n * internal.k11 * Smad_P_Smad_P_N;
    dstatedt[1] = 0 - 1 * internal.c * internal.k1 * TGFb_TGFbR + 1 * internal.k2 * TGFbR * TGFb - 1 * internal.c * internal.k3 * TGFb_TGFbR + 1 * internal.c * internal.k4 * TGFb_TGFbR_P + 1 * internal.c * internal.k6 * I_Smad_TGFb_TGFbR_P;
    dstatedt[2] = 0 + 1 * internal.c * internal.k3 * TGFb_TGFbR - 1 * internal.c * internal.k4 * TGFb_TGFbR_P - 1 * internal.c * internal.k5 * TGFb_TGFbR_P * I_Smad;
    dstatedt[0] = 0 + 1 * internal.c * internal.k1 * TGFb_TGFbR - 1 * internal.k2 * TGFbR * TGFb;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TGFbR", "TGFb_TGFbR", "TGFb_TGFbR_P", "I_Smad_TGFb_TGFbR_P", "Smad", "Smad_P", "CoSmad", "Smad_P_Smad_P", "Smad_P_CoSmad", "I_Smad_mRNA2", "I_Smad", "Smad_N", "Smad_P_Smad_P_N", "Smad_P_N", "Smad_P_CoSmad_N", "CoSmad_N", "I_Smad_mRNA1", "TGFb"];
    this.metadata.internalOrder = {c: null, CoSmad_init: null, CoSmad_N_init: null, extracellular: null, h: null, I_Smad_init: null, I_Smad_mRNA1_init: null, I_Smad_mRNA2_init: null, I_Smad_TGFb_TGFbR_P_init: null, initial_CoSmad: null, initial_CoSmad_N: null, initial_I_Smad: null, initial_I_Smad_mRNA1: null, initial_I_Smad_mRNA2: null, initial_I_Smad_TGFb_TGFbR_P: null, initial_Smad: null, initial_Smad_N: null, initial_Smad_P: null, initial_Smad_P_CoSmad: null, initial_Smad_P_CoSmad_N: null, initial_Smad_P_N: null, initial_Smad_P_Smad_P: null, initial_Smad_P_Smad_P_N: null, initial_TGFb: null, initial_TGFb_TGFbR: null, initial_TGFb_TGFbR_P: null, initial_TGFbR: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, n: null, Smad_init: null, Smad_N_init: null, Smad_P_CoSmad_init: null, Smad_P_CoSmad_N_init: null, Smad_P_init: null, Smad_P_N_init: null, Smad_P_Smad_P_init: null, Smad_P_Smad_P_N_init: null, TGFb_init: null, TGFb_TGFbR_init: null, TGFb_TGFbR_P_init: null, TGFbR_init: null};
    this.metadata.variableOrder = {TGFbR: null, TGFb_TGFbR: null, TGFb_TGFbR_P: null, I_Smad_TGFb_TGFbR_P: null, Smad: null, Smad_P: null, CoSmad: null, Smad_P_Smad_P: null, Smad_P_CoSmad: null, I_Smad_mRNA2: null, I_Smad: null, Smad_N: null, Smad_P_Smad_P_N: null, Smad_P_N: null, Smad_P_CoSmad_N: null, CoSmad_N: null, I_Smad_mRNA1: null, TGFb: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

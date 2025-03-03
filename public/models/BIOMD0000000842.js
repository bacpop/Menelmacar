export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartmentOne = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(20).fill(0);
    state[0] = internal.initial_HR;
    state[1] = internal.initial_G;
    state[2] = internal.initial_ERK;
    state[3] = internal.initial_PIP2;
    state[4] = internal.initial_DAG;
    state[5] = internal.initial_PKC;
    state[6] = internal.initial_PKC_a;
    state[7] = internal.initial_GpERK;
    state[8] = internal.initial_bpERK;
    state[9] = internal.initial_barr1;
    state[10] = internal.initial_barr2;
    state[11] = internal.initial_G_a;
    state[12] = internal.initial_HRP1;
    state[13] = internal.initial_Hbarr1RP1;
    state[14] = internal.initial_Hbarr2RP1;
    state[15] = internal.initial_HRP2;
    state[16] = internal.initial_HRbarr2;
    state[17] = internal.initial_Hbarr2RP2;
    state[18] = internal.initial_GRK2_3;
    state[19] = internal.initial_GRK5_6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["barr1_init", "barr2_0_si", "barr2_init", "bpERK_init", "DAG_init", "ERK_init", "G_a_init", "G_init", "GpERK_init", "GRK2_3_init", "GRK23", "GRK23_si", "GRK5_6_init", "GRK56", "GRK56_si", "Hbarr1RP1_init", "Hbarr2RP1_init", "Hbarr2RP2_init", "HR_init", "HRbarr2_init", "HRP1_init", "HRP2_init", "k0", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k20", "k21", "k22", "k23", "k24", "k25", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "nDAG", "nPKC", "P0_a_Ro", "P0_Ro", "PIP2_init", "PKC_a_init", "PKC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "barr1_init", internal, 0.85799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "barr2_0_si", internal, 0.00011230696300000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "barr2_init", internal, 0.48299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bpERK_init", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DAG_init", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK_init", internal, 4.2430000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 56.990000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GpERK_init", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK2_3_init", internal, 0.89944000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK23", internal, 0.89944757900000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK23_si", internal, 0.47886509199999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK5_6_init", internal, 1.518, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK56", internal, 1.5180818, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GRK56_si", internal, 0.0010351249099999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hbarr1RP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hbarr2RP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hbarr2RP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HR_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HRbarr2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HRP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HRP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0.00031100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0178, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 2.27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 2.6099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 2.5899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.0061900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.031099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 6.5400000000000004e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.072300000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.066500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 0.20499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 7.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.00042000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 14.44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 1.05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 0.34699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 0.76200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 4.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.078700000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.6499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 5.0984999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.46100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 1.77, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 3.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nDAG", internal, 4.1197442300000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nPKC", internal, 7.2090178600000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_a_Ro", internal, 2.09075206e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_Ro", internal, 0.00173556731, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2_init", internal, 0.997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKC_a_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKC_init", internal, 8.8420000000000005, -Infinity, Infinity, false);
    internal.initial_barr1 = internal.barr1_init;
    internal.initial_barr2 = internal.barr2_init;
    internal.initial_bpERK = internal.bpERK_init;
    internal.initial_DAG = internal.DAG_init;
    internal.initial_ERK = internal.ERK_init;
    internal.initial_G = internal.G_init;
    internal.initial_G_a = internal.G_a_init;
    internal.initial_GpERK = internal.GpERK_init;
    internal.initial_GRK2_3 = internal.GRK2_3_init;
    internal.initial_GRK5_6 = internal.GRK5_6_init;
    internal.initial_Hbarr1RP1 = internal.Hbarr1RP1_init;
    internal.initial_Hbarr2RP1 = internal.Hbarr2RP1_init;
    internal.initial_Hbarr2RP2 = internal.Hbarr2RP2_init;
    internal.initial_HR = internal.HR_init;
    internal.initial_HRbarr2 = internal.HRbarr2_init;
    internal.initial_HRP1 = internal.HRP1_init;
    internal.initial_HRP2 = internal.HRP2_init;
    internal.initial_PIP2 = internal.PIP2_init;
    internal.initial_PKC = internal.PKC_init;
    internal.initial_PKC_a = internal.PKC_a_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const HR = state[0];
    const G = state[1];
    const ERK = state[2];
    const PIP2 = state[3];
    const DAG = state[4];
    const PKC = state[5];
    const PKC_a = state[6];
    const GpERK = state[7];
    const bpERK = state[8];
    const barr1 = state[9];
    const barr2 = state[10];
    const G_a = state[11];
    const HRP1 = state[12];
    const Hbarr1RP1 = state[13];
    const Hbarr2RP1 = state[14];
    const HRP2 = state[15];
    const HRbarr2 = state[16];
    const Hbarr2RP2 = state[17];
    dstatedt[18] = 0;
    dstatedt[19] = 0;
    dstatedt[9] = 0 - 1 * internal.compartmentOne * (internal.k11 * barr1 * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k13 * Hbarr1RP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k15 * Hbarr1RP1 / internal.compartmentOne);
    dstatedt[10] = 0 - 1 * internal.compartmentOne * (internal.k12 * barr2 * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k14 * Hbarr2RP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k16 * Hbarr2RP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k19 * barr2 * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k23 * HRbarr2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k20 * barr2 * HRP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k24 * Hbarr2RP2 / internal.compartmentOne);
    dstatedt[8] = 0 + 1 * internal.compartmentOne * (internal.k21 * ERK * HRbarr2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k22 * ERK * Hbarr2RP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k25 * bpERK / internal.compartmentOne);
    dstatedt[4] = 0 + 1 * internal.compartmentOne * (internal.k3 * G_a * PIP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k4 * DAG * PKC / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k4 * DAG * PKC / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k7 * DAG / internal.compartmentOne);
    dstatedt[2] = 0 - 1 * internal.compartmentOne * (internal.k5 * ERK * PKC_a / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k9 * GpERK / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k21 * ERK * HRbarr2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k22 * ERK * Hbarr2RP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k25 * bpERK / internal.compartmentOne);
    dstatedt[1] = 0 - 1 * internal.compartmentOne * (internal.k0 * G / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k1 * G * HRP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k2 * G * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k6 * G_a / internal.compartmentOne);
    dstatedt[11] = 0 + 1 * internal.compartmentOne * (internal.k0 * G / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k1 * G * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k2 * G * HR / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k3 * G_a * PIP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k3 * G_a * PIP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k6 * G_a / internal.compartmentOne);
    dstatedt[7] = 0 + 1 * internal.compartmentOne * (internal.k5 * ERK * PKC_a / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k9 * GpERK / internal.compartmentOne);
    dstatedt[13] = 0 + 1 * internal.compartmentOne * (internal.k11 * barr1 * HRP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k13 * Hbarr1RP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k15 * Hbarr1RP1 / internal.compartmentOne);
    dstatedt[14] = 0 + 1 * internal.compartmentOne * (internal.k12 * barr2 * HRP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k14 * Hbarr2RP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k16 * Hbarr2RP1 / internal.compartmentOne);
    dstatedt[17] = 0 + 1 * internal.compartmentOne * (internal.k20 * barr2 * HRP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k24 * Hbarr2RP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k22 * ERK * Hbarr2RP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k22 * ERK * Hbarr2RP2 / internal.compartmentOne);
    dstatedt[0] = 0 - 1 * internal.compartmentOne * (internal.k2 * G * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k2 * G * HR / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k10 * internal.GRK23 * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k15 * Hbarr1RP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k16 * Hbarr2RP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k18 * internal.GRK56 * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k17 * HRP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k19 * barr2 * HR / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k23 * HRbarr2 / internal.compartmentOne);
    dstatedt[16] = 0 + 1 * internal.compartmentOne * (internal.k19 * barr2 * HR / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k23 * HRbarr2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k21 * ERK * HRbarr2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k21 * ERK * HRbarr2 / internal.compartmentOne);
    dstatedt[12] = 0 - 1 * internal.compartmentOne * (internal.k1 * G * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k1 * G * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k10 * internal.GRK23 * HR / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k11 * barr1 * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k13 * Hbarr1RP1 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k12 * barr2 * HRP1 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k14 * Hbarr2RP1 / internal.compartmentOne);
    dstatedt[15] = 0 + 1 * internal.compartmentOne * (internal.k18 * internal.GRK56 * HR / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k17 * HRP2 / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k20 * barr2 * HRP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k24 * Hbarr2RP2 / internal.compartmentOne);
    dstatedt[3] = 0 - 1 * internal.compartmentOne * (internal.k3 * G_a * PIP2 / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k7 * DAG / internal.compartmentOne);
    dstatedt[5] = 0 - 1 * internal.compartmentOne * (internal.k4 * DAG * PKC / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k8 * PKC_a / internal.compartmentOne);
    dstatedt[6] = 0 + 1 * internal.compartmentOne * (internal.k4 * DAG * PKC / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k5 * ERK * PKC_a / internal.compartmentOne) + 1 * internal.compartmentOne * (internal.k5 * ERK * PKC_a / internal.compartmentOne) - 1 * internal.compartmentOne * (internal.k8 * PKC_a / internal.compartmentOne);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "HR", "G", "ERK", "PIP2", "DAG", "PKC", "PKC_a", "GpERK", "bpERK", "barr1", "barr2", "G_a", "HRP1", "Hbarr1RP1", "Hbarr2RP1", "HRP2", "HRbarr2", "Hbarr2RP2", "GRK2_3", "GRK5_6"];
    this.metadata.internalOrder = {barr1_init: null, barr2_0_si: null, barr2_init: null, bpERK_init: null, compartmentOne: null, DAG_init: null, ERK_init: null, G_a_init: null, G_init: null, GpERK_init: null, GRK2_3_init: null, GRK23: null, GRK23_si: null, GRK5_6_init: null, GRK56: null, GRK56_si: null, Hbarr1RP1_init: null, Hbarr2RP1_init: null, Hbarr2RP2_init: null, HR_init: null, HRbarr2_init: null, HRP1_init: null, HRP2_init: null, initial_barr1: null, initial_barr2: null, initial_bpERK: null, initial_DAG: null, initial_ERK: null, initial_G: null, initial_G_a: null, initial_GpERK: null, initial_GRK2_3: null, initial_GRK5_6: null, initial_Hbarr1RP1: null, initial_Hbarr2RP1: null, initial_Hbarr2RP2: null, initial_HR: null, initial_HRbarr2: null, initial_HRP1: null, initial_HRP2: null, initial_PIP2: null, initial_PKC: null, initial_PKC_a: null, k0: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k21: null, k22: null, k23: null, k24: null, k25: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, nDAG: null, nPKC: null, P0_a_Ro: null, P0_Ro: null, PIP2_init: null, PKC_a_init: null, PKC_init: null};
    this.metadata.variableOrder = {HR: null, G: null, ERK: null, PIP2: null, DAG: null, PKC: null, PKC_a: null, GpERK: null, bpERK: null, barr1: null, barr2: null, G_a: null, HRP1: null, Hbarr1RP1: null, Hbarr2RP1: null, HRP2: null, HRbarr2: null, Hbarr2RP2: null, GRK2_3: null, GRK5_6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

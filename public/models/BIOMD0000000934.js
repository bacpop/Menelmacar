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
    var state = Array(13).fill(0);
    state[0] = internal.initial_Sic1;
    state[1] = internal.initial_Cdk1_Clb5or6;
    state[2] = internal.initial_Cdk1_Clb5or6_Sic1;
    state[3] = internal.initial_Clb5or6_degraded;
    state[4] = internal.initial_Cdk1_Clb3or4;
    state[5] = internal.initial_Cdk1_Clb3or4_Sic1;
    state[6] = internal.initial_Clb3or4_degraded;
    state[7] = internal.initial_Cdk1_Clb1or2;
    state[8] = internal.initial_Cdk1_Clb1or2_Sic1;
    state[9] = internal.initial_Clb1or2_degraded;
    state[10] = internal.initial_Sic1_degraded_re14;
    state[11] = internal.initial_Sic1_degraded_re18;
    state[12] = internal.initial_Sic1_degraded_re5;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdk1_Clb1or2_init", "Cdk1_Clb1or2_Sic1_init", "Cdk1_Clb3or4_init", "Cdk1_Clb3or4_Sic1_init", "Cdk1_Clb5or6_init", "Cdk1_Clb5or6_Sic1_init", "Clb1or2_degraded_init", "Clb3or4_degraded_init", "Clb5or6_degraded_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k2", "k26", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "kA", "kB", "kC", "kD", "Sic1_degraded_re14_init", "Sic1_degraded_re18_init", "Sic1_degraded_re5_init", "Sic1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdk1_Clb1or2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_Clb1or2_Sic1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_Clb3or4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_Clb3or4_Sic1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_Clb5or6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_Clb5or6_Sic1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clb1or2_degraded_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clb3or4_degraded_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clb5or6_degraded_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kA", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kB", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kC", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sic1_degraded_re14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sic1_degraded_re18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sic1_degraded_re5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sic1_init", internal, 5, -Infinity, Infinity, false);
    internal.initial_Cdk1_Clb1or2 = internal.Cdk1_Clb1or2_init;
    internal.initial_Cdk1_Clb1or2_Sic1 = internal.Cdk1_Clb1or2_Sic1_init;
    internal.initial_Cdk1_Clb3or4 = internal.Cdk1_Clb3or4_init;
    internal.initial_Cdk1_Clb3or4_Sic1 = internal.Cdk1_Clb3or4_Sic1_init;
    internal.initial_Cdk1_Clb5or6 = internal.Cdk1_Clb5or6_init;
    internal.initial_Cdk1_Clb5or6_Sic1 = internal.Cdk1_Clb5or6_Sic1_init;
    internal.initial_Clb1or2_degraded = internal.Clb1or2_degraded_init;
    internal.initial_Clb3or4_degraded = internal.Clb3or4_degraded_init;
    internal.initial_Clb5or6_degraded = internal.Clb5or6_degraded_init;
    internal.initial_Sic1 = internal.Sic1_init;
    internal.initial_Sic1_degraded_re14 = internal.Sic1_degraded_re14_init;
    internal.initial_Sic1_degraded_re18 = internal.Sic1_degraded_re18_init;
    internal.initial_Sic1_degraded_re5 = internal.Sic1_degraded_re5_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Sic1 = state[0];
    const Cdk1_Clb5or6 = state[1];
    const Cdk1_Clb5or6_Sic1 = state[2];
    const Cdk1_Clb3or4 = state[4];
    const Cdk1_Clb3or4_Sic1 = state[5];
    const Cdk1_Clb1or2 = state[7];
    const Cdk1_Clb1or2_Sic1 = state[8];
    dstatedt[7] = 0 + 1 * internal.cell * (internal.k9 * (1 + internal.kD * Cdk1_Clb1or2 + internal.kB * Cdk1_Clb3or4 + internal.kC * Cdk1_Clb5or6)) - 1 * internal.cell * internal.k10 * Cdk1_Clb1or2 - 1 * internal.cell * internal.k11 * Sic1 * Cdk1_Clb1or2 + 1 * internal.cell * internal.k12 * Cdk1_Clb1or2_Sic1;
    dstatedt[8] = 0 + 1 * internal.cell * internal.k11 * Sic1 * Cdk1_Clb1or2 - 1 * internal.cell * internal.k12 * Cdk1_Clb1or2_Sic1 - 1 * internal.cell * internal.k13 * Cdk1_Clb1or2_Sic1 - 1 * internal.cell * (internal.k14 * Cdk1_Clb1or2_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
    dstatedt[4] = 0 + 1 * internal.cell * (internal.k7 * (1 + internal.kA * Cdk1_Clb5or6)) - 1 * internal.cell * internal.k8 * Cdk1_Clb3or4 - 1 * internal.cell * internal.k15 * Sic1 * Cdk1_Clb3or4 + 1 * internal.cell * internal.k16 * Cdk1_Clb3or4_Sic1;
    dstatedt[5] = 0 + 1 * internal.cell * internal.k15 * Sic1 * Cdk1_Clb3or4 - 1 * internal.cell * internal.k16 * Cdk1_Clb3or4_Sic1 - 1 * internal.cell * internal.k17 * Cdk1_Clb3or4_Sic1 - 1 * internal.cell * (internal.k18 * Cdk1_Clb3or4_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
    dstatedt[1] = 0 + 1 * internal.cell * (internal.k1) - 1 * internal.cell * internal.k2 * Sic1 * Cdk1_Clb5or6 + 1 * internal.cell * internal.k3 * Cdk1_Clb5or6_Sic1 + 1 * internal.cell * (internal.k5 * Cdk1_Clb5or6_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2)) - 1 * internal.cell * internal.k6 * Cdk1_Clb5or6;
    dstatedt[2] = 0 + 1 * internal.cell * internal.k2 * Sic1 * Cdk1_Clb5or6 - 1 * internal.cell * internal.k3 * Cdk1_Clb5or6_Sic1 - 1 * internal.cell * internal.k4 * Cdk1_Clb5or6_Sic1 - 1 * internal.cell * (internal.k5 * Cdk1_Clb5or6_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
    dstatedt[9] = 0 + 1 * internal.cell * internal.k10 * Cdk1_Clb1or2 + 1 * internal.cell * internal.k13 * Cdk1_Clb1or2_Sic1;
    dstatedt[6] = 0 + 1 * internal.cell * internal.k8 * Cdk1_Clb3or4 + 1 * internal.cell * internal.k17 * Cdk1_Clb3or4_Sic1;
    dstatedt[3] = 0 + 1 * internal.cell * internal.k4 * Cdk1_Clb5or6_Sic1 + 1 * internal.cell * internal.k6 * Cdk1_Clb5or6;
    dstatedt[0] = 0 - 1 * internal.cell * internal.k2 * Sic1 * Cdk1_Clb5or6 + 1 * internal.cell * internal.k3 * Cdk1_Clb5or6_Sic1 - 1 * internal.cell * internal.k11 * Sic1 * Cdk1_Clb1or2 + 1 * internal.cell * internal.k12 * Cdk1_Clb1or2_Sic1 - 1 * internal.cell * internal.k15 * Sic1 * Cdk1_Clb3or4 + 1 * internal.cell * internal.k16 * Cdk1_Clb3or4_Sic1 - 1 * internal.cell * internal.k26 * Sic1;
    dstatedt[10] = 0 + 1 * internal.cell * (internal.k14 * Cdk1_Clb1or2_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
    dstatedt[11] = 0 + 1 * internal.cell * (internal.k18 * Cdk1_Clb3or4_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
    dstatedt[12] = 0 + 1 * internal.cell * (internal.k5 * Cdk1_Clb5or6_Sic1 * (1 + Cdk1_Clb5or6 + Cdk1_Clb3or4 + Cdk1_Clb1or2));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Sic1", "Cdk1_Clb5or6", "Cdk1_Clb5or6_Sic1", "Clb5or6_degraded", "Cdk1_Clb3or4", "Cdk1_Clb3or4_Sic1", "Clb3or4_degraded", "Cdk1_Clb1or2", "Cdk1_Clb1or2_Sic1", "Clb1or2_degraded", "Sic1_degraded_re14", "Sic1_degraded_re18", "Sic1_degraded_re5"];
    this.metadata.internalOrder = {Cdk1_Clb1or2_init: null, Cdk1_Clb1or2_Sic1_init: null, Cdk1_Clb3or4_init: null, Cdk1_Clb3or4_Sic1_init: null, Cdk1_Clb5or6_init: null, Cdk1_Clb5or6_Sic1_init: null, cell: null, Clb1or2_degraded_init: null, Clb3or4_degraded_init: null, Clb5or6_degraded_init: null, initial_Cdk1_Clb1or2: null, initial_Cdk1_Clb1or2_Sic1: null, initial_Cdk1_Clb3or4: null, initial_Cdk1_Clb3or4_Sic1: null, initial_Cdk1_Clb5or6: null, initial_Cdk1_Clb5or6_Sic1: null, initial_Clb1or2_degraded: null, initial_Clb3or4_degraded: null, initial_Clb5or6_degraded: null, initial_Sic1: null, initial_Sic1_degraded_re14: null, initial_Sic1_degraded_re18: null, initial_Sic1_degraded_re5: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k2: null, k26: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kA: null, kB: null, kC: null, kD: null, Sic1_degraded_re14_init: null, Sic1_degraded_re18_init: null, Sic1_degraded_re5_init: null, Sic1_init: null};
    this.metadata.variableOrder = {Sic1: null, Cdk1_Clb5or6: null, Cdk1_Clb5or6_Sic1: null, Clb5or6_degraded: null, Cdk1_Clb3or4: null, Cdk1_Clb3or4_Sic1: null, Clb3or4_degraded: null, Cdk1_Clb1or2: null, Cdk1_Clb1or2_Sic1: null, Clb1or2_degraded: null, Sic1_degraded_re14: null, Sic1_degraded_re18: null, Sic1_degraded_re5: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

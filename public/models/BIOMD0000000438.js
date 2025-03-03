export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_s1;
    state[1] = internal.initial_s19;
    state[2] = internal.initial_s3;
    state[3] = internal.initial_s4;
    state[4] = internal.initial_s16;
    state[5] = internal.initial_s17;
    state[6] = internal.initial_s5;
    state[7] = internal.initial_s42;
    state[8] = internal.initial_s2;
    state[9] = internal.initial_s45;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "K11", "K12", "k2", "k3", "k4", "k5", "k6", "K7", "K8", "K9", "n1", "n2", "s1_init", "s16_init", "s17_init", "s19_init", "s2_init", "s3_init", "s4_init", "s42_init", "s45_init", "s5_init", "Y1", "Y2", "Y3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 3.734, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 6.5000000000000001e-16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 1e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K12", internal, 2.3999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 35.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 9600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1960000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 10.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 0.0040509999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K8", internal, 0.0095670000000000009, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 9.7419999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s16_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s19_init", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 5.0000000000000004e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s42_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s45_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y1", internal, 0.34799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y2", internal, 0.069599999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y3", internal, 0.0002832, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s16 = internal.s16_init;
    internal.initial_s17 = internal.s17_init;
    internal.initial_s19 = internal.s19_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s3 = internal.s3_init;
    internal.initial_s4 = internal.s4_init;
    internal.initial_s42 = internal.s42_init;
    internal.initial_s45 = internal.s45_init;
    internal.initial_s5 = internal.s5_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s1 = state[0];
    const s19 = state[1];
    const s4 = state[3];
    const s16 = state[4];
    const s17 = state[5];
    const s42 = state[7];
    const s2 = state[8];
    const s45 = state[9];
    dstatedt[0] = 0 - 1 * internal.k1 * s1 - internal.Y1 * s2;
    dstatedt[4] = 0 - 1 * s16 * s42 * internal.k5 - internal.k6 * s17;
    dstatedt[5] = 0 + 1 * s16 * s42 * internal.k5 - internal.k6 * s17 - 1 * (internal.K7 + internal.K8 * Math.pow((s17), (internal.n1)) / (Math.pow((internal.K9), (internal.n1)) + Math.pow((s17), (internal.n1)))) * (internal.k10 + internal.K11 * Math.pow((s17), (internal.n2)) / (Math.pow((internal.K12), (internal.n2)) + Math.pow((s17), (internal.n2))) - s45);
    dstatedt[1] = 0 - 1 * internal.Y2 * s19 + 1 * internal.k2 * s2 - 1 * s19 * s4 * internal.k3 - internal.k4 * s42;
    dstatedt[8] = 0 - 1 * internal.k2 * s2 + 1 * internal.k1 * s1 - internal.Y1 * s2;
    dstatedt[2] = 0 + 1 * internal.Y2 * s19;
    dstatedt[3] = 0 - 1 * s19 * s4 * internal.k3 - internal.k4 * s42 - 1 * internal.Y3 * s4;
    dstatedt[7] = 0 + 1 * s19 * s4 * internal.k3 - internal.k4 * s42 - 1 * s16 * s42 * internal.k5 - internal.k6 * s17;
    dstatedt[9] = 0 + 1 * (internal.K7 + internal.K8 * Math.pow((s17), (internal.n1)) / (Math.pow((internal.K9), (internal.n1)) + Math.pow((s17), (internal.n1)))) * (internal.k10 + internal.K11 * Math.pow((s17), (internal.n2)) / (Math.pow((internal.K12), (internal.n2)) + Math.pow((s17), (internal.n2))) - s45);
    dstatedt[6] = 0 + 1 * internal.Y3 * s4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s19", "s3", "s4", "s16", "s17", "s5", "s42", "s2", "s45"];
    this.metadata.internalOrder = {default1: null, initial_s1: null, initial_s16: null, initial_s17: null, initial_s19: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_s42: null, initial_s45: null, initial_s5: null, k1: null, k10: null, K11: null, K12: null, k2: null, k3: null, k4: null, k5: null, k6: null, K7: null, K8: null, K9: null, n1: null, n2: null, s1_init: null, s16_init: null, s17_init: null, s19_init: null, s2_init: null, s3_init: null, s4_init: null, s42_init: null, s45_init: null, s5_init: null, Y1: null, Y2: null, Y3: null};
    this.metadata.variableOrder = {s1: null, s19: null, s3: null, s4: null, s16: null, s17: null, s5: null, s42: null, s2: null, s45: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

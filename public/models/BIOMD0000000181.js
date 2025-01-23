export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_T1;
    state[1] = internal.initial_T2;
    state[2] = internal.initial_T3;
    state[3] = internal.initial_C1;
    state[4] = internal.initial_C2;
    state[5] = internal.initial_C3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C1_init", "C2_init", "C3_init", "j1", "j2", "j3", "k100", "k110", "k120", "kc1", "kc2", "kc3", "kd1", "kd2", "kd3", "kd4", "kd5", "kd6", "km1", "km2", "km3", "n", "T1_init", "T2_init", "T3_init", "v10", "v11", "v12", "vd1", "vd2", "vd3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k100", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k110", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k120", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc2", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc3", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd2", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd3", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd4", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd5", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd6", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v10", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v11", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v12", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd2", internal, 1.052, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd3", internal, 3, -Infinity, Infinity, false);
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_C3 = internal.C3_init;
    internal.initial_T1 = internal.T1_init;
    internal.initial_T2 = internal.T2_init;
    internal.initial_T3 = internal.T3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T1 = state[0];
    const T2 = state[1];
    const T3 = state[2];
    const C1 = state[3];
    const C2 = state[4];
    const C3 = state[5];
    dstatedt[3] = 0 + 1 * internal.compartment * internal.v12 * Math.pow((T1), (internal.n)) / (Math.pow((internal.k120), (internal.n)) + Math.pow((T1), (internal.n)) + Math.pow((C2), (internal.n))) - 1 * internal.compartment * internal.kd4 * C1;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.v11 * Math.pow((T2), (internal.n)) / (Math.pow((internal.k110), (internal.n)) + Math.pow((T2), (internal.n)) + Math.pow((C3), (internal.n))) - 1 * internal.compartment * internal.kd5 * C2;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.v10 * Math.pow((T3), (internal.n)) / (Math.pow((internal.k100), (internal.n)) + Math.pow((T3), (internal.n)) + Math.pow((C1), (internal.n))) - 1 * internal.compartment * internal.kd6 * C3;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.j1 + 1 * internal.compartment * internal.vd1 * Math.pow((T3), (internal.n)) / (Math.pow((internal.km1), (internal.n)) + Math.pow((T3), (internal.n))) + 1 * internal.compartment * internal.kc1 * C1 - 1 * internal.compartment * internal.kd1 * T1;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.j2 + 1 * internal.compartment * internal.vd2 * Math.pow((T1), (internal.n)) / (Math.pow((internal.km2), (internal.n)) + Math.pow((T1), (internal.n))) + 1 * internal.compartment * internal.kc2 * C2 - 1 * internal.compartment * internal.kd2 * T2;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.j3 + 1 * internal.compartment * internal.vd3 * Math.pow((T2), (internal.n)) / (Math.pow((internal.km3), (internal.n)) + Math.pow((T2), (internal.n))) + 1 * internal.compartment * internal.kc3 * C3 - 1 * internal.compartment * internal.kd3 * T3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T1", "T2", "T3", "C1", "C2", "C3"];
    this.metadata.internalOrder = {C1_init: null, C2_init: null, C3_init: null, compartment: null, initial_C1: null, initial_C2: null, initial_C3: null, initial_T1: null, initial_T2: null, initial_T3: null, j1: null, j2: null, j3: null, k100: null, k110: null, k120: null, kc1: null, kc2: null, kc3: null, kd1: null, kd2: null, kd3: null, kd4: null, kd5: null, kd6: null, km1: null, km2: null, km3: null, n: null, T1_init: null, T2_init: null, T3_init: null, v10: null, v11: null, v12: null, vd1: null, vd2: null, vd3: null};
    this.metadata.variableOrder = {T1: null, T2: null, T3: null, C1: null, C2: null, C3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

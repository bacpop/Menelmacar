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
    var state = Array(9).fill(0);
    state[0] = internal.initial_s1;
    state[1] = internal.initial_at;
    state[2] = internal.initial_s2;
    state[3] = internal.initial_s3;
    state[4] = internal.initial_na;
    state[5] = internal.initial_s4;
    state[6] = internal.initial_s5;
    state[7] = internal.initial_s6;
    state[8] = internal.initial_s6o;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["at_init", "atot", "k0", "k1", "k10", "k2", "k31", "k32", "k33", "k34", "k4", "k5", "k6", "k7", "k8", "k9", "ki", "n", "na_init", "ntot", "s1_init", "s2_init", "s3_init", "s4_init", "s5_init", "s6_init", "s6o_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "at_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atot", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 550, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 9.8000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 323.80000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k32", internal, 76411.100000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k33", internal, 57823.099999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 23.699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 9.6999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 85.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "na_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ntot", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s5_init", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s6_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s6o_init", internal, 0.02, -Infinity, Infinity, false);
    internal.initial_at = internal.at_init;
    internal.initial_na = internal.na_init;
    internal.initial_s1 = internal.s1_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s3 = internal.s3_init;
    internal.initial_s4 = internal.s4_init;
    internal.initial_s5 = internal.s5_init;
    internal.initial_s6 = internal.s6_init;
    internal.initial_s6o = internal.s6o_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s1 = state[0];
    const at = state[1];
    const s2 = state[2];
    const s3 = state[3];
    const na = state[4];
    const s4 = state[5];
    const s5 = state[6];
    const s6 = state[7];
    const s6o = state[8];
    dstatedt[1] = 0 - 2 * internal.compartment * internal.k1 * s1 * at / (1 + Math.pow((at / internal.ki), (internal.n))) + 1 * internal.compartment * ((internal.k31 * internal.k32 * s3 * na * (internal.atot - at) - internal.k33 * internal.k34 * s4 * at * (internal.ntot - na)) / (internal.k33 * (internal.ntot - na) + internal.k32 * (internal.atot - at))) + 1 * internal.compartment * internal.k4 * s4 * (internal.atot - at) - 1 * internal.compartment * internal.k7 * at;
    dstatedt[4] = 0 - 1 * internal.compartment * ((internal.k31 * internal.k32 * s3 * na * (internal.atot - at) - internal.k33 * internal.k34 * s4 * at * (internal.ntot - na)) / (internal.k33 * (internal.ntot - na) + internal.k32 * (internal.atot - at))) + 1 * internal.compartment * internal.k8 * s3 * (internal.ntot - na) + 1 * internal.compartment * internal.k6 * s6 * (internal.ntot - na);
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * s1 * at / (1 + Math.pow((at / internal.ki), (internal.n))) + 1 * internal.compartment * internal.k0;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * s1 * at / (1 + Math.pow((at / internal.ki), (internal.n))) - 1 * internal.compartment * internal.k2 * s2;
    dstatedt[3] = 0 + 2 * internal.compartment * internal.k2 * s2 - 1 * internal.compartment * ((internal.k31 * internal.k32 * s3 * na * (internal.atot - at) - internal.k33 * internal.k34 * s4 * at * (internal.ntot - na)) / (internal.k33 * (internal.ntot - na) + internal.k32 * (internal.atot - at))) - 1 * internal.compartment * internal.k8 * s3 * (internal.ntot - na);
    dstatedt[5] = 0 + 1 * internal.compartment * ((internal.k31 * internal.k32 * s3 * na * (internal.atot - at) - internal.k33 * internal.k34 * s4 * at * (internal.ntot - na)) / (internal.k33 * (internal.ntot - na) + internal.k32 * (internal.atot - at))) - 1 * internal.compartment * internal.k4 * s4 * (internal.atot - at);
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k4 * s4 * (internal.atot - at) - 1 * internal.compartment * internal.k5 * s5;
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k5 * s5 - 1 * internal.compartment * internal.k10 * (s6 - s6o) - 1 * internal.compartment * internal.k6 * s6 * (internal.ntot - na);
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k9 * s6o + 0.10000000000000001 * internal.compartment * internal.k10 * (s6 - s6o);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "at", "s2", "s3", "na", "s4", "s5", "s6", "s6o"];
    this.metadata.internalOrder = {at_init: null, atot: null, compartment: null, initial_at: null, initial_na: null, initial_s1: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_s5: null, initial_s6: null, initial_s6o: null, k0: null, k1: null, k10: null, k2: null, k31: null, k32: null, k33: null, k34: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, ki: null, n: null, na_init: null, ntot: null, s1_init: null, s2_init: null, s3_init: null, s4_init: null, s5_init: null, s6_init: null, s6o_init: null};
    this.metadata.variableOrder = {s1: null, at: null, s2: null, s3: null, na: null, s4: null, s5: null, s6: null, s6o: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

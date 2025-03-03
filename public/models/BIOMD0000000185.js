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
    var state = Array(8).fill(0);
    state[0] = internal.initial_X1;
    state[1] = internal.initial_Y1;
    state[2] = internal.initial_Z1;
    state[3] = internal.initial_V1;
    state[4] = internal.initial_X2;
    state[5] = internal.initial_Y2;
    state[6] = internal.initial_Z2;
    state[7] = internal.initial_V2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K", "K1", "K2", "k3", "K4", "k5", "K6", "k7", "K8", "Kc", "L", "n", "v_1", "v_2", "v_4", "v_6", "v_8", "V1_init", "V2_init", "vc", "X1_init", "X2_init", "Y1_init", "Y2_init", "Z1_init", "Z2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 2.7265999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.29099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.1177, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 8.1342999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.3352, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 9.9848999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.22819999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K8", internal, 7.4519000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 4.8282999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 5.6645000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_1", internal, 6.8354999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_2", internal, 8.4297000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_4", internal, 1.0841000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_6", internal, 4.6645000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_8", internal, 3.5215999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vc", internal, 6.7923999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X1_init", internal, 4.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y1_init", internal, 3.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z1_init", internal, 2.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_V1 = internal.V1_init;
    internal.initial_V2 = internal.V2_init;
    internal.initial_X1 = internal.X1_init;
    internal.initial_X2 = internal.X2_init;
    internal.initial_Y1 = internal.Y1_init;
    internal.initial_Y2 = internal.Y2_init;
    internal.initial_Z1 = internal.Z1_init;
    internal.initial_Z2 = internal.Z2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X1 = state[0];
    const Y1 = state[1];
    const Z1 = state[2];
    const V1 = state[3];
    const X2 = state[4];
    const Y2 = state[5];
    const Z2 = state[6];
    const V2 = state[7];
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k7 * X1 - 1 * internal.compartment * internal.v_8 * V1 / (internal.K8 + V1);
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k7 * X2 - 1 * internal.compartment * internal.v_8 * V2 / (internal.K8 + V2);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k3 * X1 - 1 * internal.compartment * internal.v_4 * Y1 / (internal.K4 + Y1);
    dstatedt[5] = 0 + 1 * internal.compartment * internal.k3 * X2 - 1 * internal.compartment * internal.v_4 * Y2 / (internal.K4 + Y2);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k5 * Y1 - 1 * internal.compartment * internal.v_6 * Z1 / (internal.K6 + Z1);
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k5 * Y2 - 1 * internal.compartment * internal.v_6 * Z2 / (internal.K6 + Z2);
    var F = 1 / 2 * (V1 + V2);
    dstatedt[0] = 0 + 1 * internal.compartment * internal.v_1 * Math.pow((internal.K1), (internal.n)) / (Math.pow((internal.K1), (internal.n)) + Math.pow((Z1), (internal.n))) - 1 * internal.compartment * internal.v_2 * X1 / (internal.K2 + X1) + 1 * internal.compartment * internal.vc * internal.K * F / (internal.Kc + internal.K * F) + 1 * internal.compartment * internal.L;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.v_1 * Math.pow((internal.K1), (internal.n)) / (Math.pow((internal.K1), (internal.n)) + Math.pow((Z2), (internal.n))) - 1 * internal.compartment * internal.v_2 * X2 / (internal.K2 + X2) + 1 * internal.compartment * internal.vc * internal.K * F / (internal.Kc + internal.K * F) + 1 * internal.compartment * internal.L;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X1", "Y1", "Z1", "V1", "X2", "Y2", "Z2", "V2"];
    this.metadata.internalOrder = {compartment: null, initial_V1: null, initial_V2: null, initial_X1: null, initial_X2: null, initial_Y1: null, initial_Y2: null, initial_Z1: null, initial_Z2: null, K: null, K1: null, K2: null, k3: null, K4: null, k5: null, K6: null, k7: null, K8: null, Kc: null, L: null, n: null, v_1: null, v_2: null, v_4: null, v_6: null, v_8: null, V1_init: null, V2_init: null, vc: null, X1_init: null, X2_init: null, Y1_init: null, Y2_init: null, Z1_init: null, Z2_init: null};
    this.metadata.variableOrder = {X1: null, Y1: null, Z1: null, V1: null, X2: null, Y2: null, Z2: null, V2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    state[0] = internal.initial_p_0;
    state[1] = internal.initial_p_1;
    state[2] = internal.initial_p_2;
    state[3] = internal.initial_p_3;
    state[4] = internal.initial_p_4;
    state[5] = internal.initial_p_5;
    state[6] = internal.initial_p_6;
    state[7] = internal.initial_p_7;
    state[8] = internal.initial_p_8;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a_0", "b", "b_0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "K", "M0_2", "M0_3", "M0_4", "M0_5", "M0_6", "M0_7", "Mo_1", "p_0_init", "p_1_init", "p_2_init", "p_3_init", "p_4_init", "p_5_init", "p_6_init", "p_7_init", "p_8_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 40.740000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 1.8e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b4", internal, 1.9000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b5", internal, 2.9e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b6", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b7", internal, 1.8e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 62.039999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_2", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_3", internal, 28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_4", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_5", internal, 28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_6", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_7", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mo_1", internal, 49, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_8_init", internal, 0, -Infinity, Infinity, false);
    internal.b_AVG = (internal.b1 + internal.b2 + internal.b3 + internal.b4 + internal.b5 + internal.b6 + internal.b7) / 7;
    internal.initial_p_0 = internal.p_0_init;
    internal.initial_p_1 = internal.p_1_init;
    internal.initial_p_2 = internal.p_2_init;
    internal.initial_p_3 = internal.p_3_init;
    internal.initial_p_4 = internal.p_4_init;
    internal.initial_p_5 = internal.p_5_init;
    internal.initial_p_6 = internal.p_6_init;
    internal.initial_p_7 = internal.p_7_init;
    internal.initial_p_8 = internal.p_8_init;
    internal.M0_AVG = (internal.Mo_1 + internal.M0_2 + internal.M0_3 + internal.M0_4 + internal.M0_5 + internal.M0_6 + internal.M0_7) / 7;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p_0 = state[0];
    const p_1 = state[1];
    const p_2 = state[2];
    const p_3 = state[3];
    const p_4 = state[4];
    const p_5 = state[5];
    const p_6 = state[6];
    const p_7 = state[7];
    var myu = internal.a_0 * Math.exp(internal.b_0 * t);
    dstatedt[0] = 0 - 1 * internal.compartment * myu * p_0;
    dstatedt[1] = 0 - 1 * internal.compartment * myu * p_1 + 1 * internal.compartment * myu * p_0;
    dstatedt[2] = 0 + 1 * internal.compartment * myu * p_1 - 1 * internal.compartment * myu * p_2;
    dstatedt[3] = 0 + 1 * internal.compartment * myu * p_2 - 1 * internal.compartment * myu * p_3;
    dstatedt[4] = 0 + 1 * internal.compartment * myu * p_3 - 1 * internal.compartment * myu * p_4;
    dstatedt[5] = 0 + 1 * internal.compartment * myu * p_4 - 1 * internal.compartment * myu * p_5;
    dstatedt[6] = 0 + 1 * internal.compartment * myu * p_5 - 1 * internal.compartment * myu * p_6;
    dstatedt[7] = 0 + 1 * internal.compartment * myu * p_6 - 1 * internal.compartment * myu * p_7;
    dstatedt[8] = 0 + 1 * internal.compartment * myu * p_7;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p_0", "p_1", "p_2", "p_3", "p_4", "p_5", "p_6", "p_7", "p_8"];
    this.metadata.internalOrder = {a: null, a_0: null, b: null, b_0: null, b_AVG: null, b1: null, b2: null, b3: null, b4: null, b5: null, b6: null, b7: null, compartment: null, initial_p_0: null, initial_p_1: null, initial_p_2: null, initial_p_3: null, initial_p_4: null, initial_p_5: null, initial_p_6: null, initial_p_7: null, initial_p_8: null, K: null, M0_2: null, M0_3: null, M0_4: null, M0_5: null, M0_6: null, M0_7: null, M0_AVG: null, Mo_1: null, p_0_init: null, p_1_init: null, p_2_init: null, p_3_init: null, p_4_init: null, p_5_init: null, p_6_init: null, p_7_init: null, p_8_init: null};
    this.metadata.variableOrder = {p_0: null, p_1: null, p_2: null, p_3: null, p_4: null, p_5: null, p_6: null, p_7: null, p_8: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    var state = Array(10).fill(0);
    state[0] = internal.initial_X_1_EGFR;
    state[1] = internal.initial_X_4_EGFR_EGFR;
    state[2] = internal.initial_X_2_ErbB3;
    state[3] = internal.initial_X_6_ErbB3_ErbB3;
    state[4] = internal.initial_X_5_EGFR_ErbB3;
    state[5] = internal.initial_X_3_MET;
    state[6] = internal.initial_X_7_MET_MET;
    state[7] = internal.initial_X_10_p_MET_MET;
    state[8] = internal.initial_X_8_p_EGFR_ErbB3;
    state[9] = internal.initial_X_9_p_ErbB3_ErbB3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k_1", "k_2", "k_3", "k_4", "k_p1", "k_p2", "k_p3", "l_1", "l_2", "l_3", "l_4", "l_p1", "l_p2", "l_p3", "X_1_EGFR_init", "X_10_p_MET_MET_init", "X_2_ErbB3_init", "X_3_MET_init", "X_4_EGFR_EGFR_init", "X_5_EGFR_ErbB3_init", "X_6_ErbB3_ErbB3_init", "X_7_MET_MET_init", "X_8_p_EGFR_ErbB3_init", "X_9_p_ErbB3_ErbB3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k_1", internal, 23000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 1900000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 240000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 2600000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p1", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p2", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p3", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_1", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_2", internal, 1.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_p1", internal, 0.028000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_p2", internal, 0.028000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_p3", internal, 0.028000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_1_EGFR_init", internal, 3.6e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_10_p_MET_MET_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_2_ErbB3_init", internal, 5.4999999999999999e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_3_MET_init", internal, 7.4e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_4_EGFR_EGFR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_5_EGFR_ErbB3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_6_ErbB3_ErbB3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_7_MET_MET_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_8_p_EGFR_ErbB3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_9_p_ErbB3_ErbB3_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_X_1_EGFR = internal.X_1_EGFR_init;
    internal.initial_X_10_p_MET_MET = internal.X_10_p_MET_MET_init;
    internal.initial_X_2_ErbB3 = internal.X_2_ErbB3_init;
    internal.initial_X_3_MET = internal.X_3_MET_init;
    internal.initial_X_4_EGFR_EGFR = internal.X_4_EGFR_EGFR_init;
    internal.initial_X_5_EGFR_ErbB3 = internal.X_5_EGFR_ErbB3_init;
    internal.initial_X_6_ErbB3_ErbB3 = internal.X_6_ErbB3_ErbB3_init;
    internal.initial_X_7_MET_MET = internal.X_7_MET_MET_init;
    internal.initial_X_8_p_EGFR_ErbB3 = internal.X_8_p_EGFR_ErbB3_init;
    internal.initial_X_9_p_ErbB3_ErbB3 = internal.X_9_p_ErbB3_ErbB3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X_1_EGFR = state[0];
    const X_4_EGFR_EGFR = state[1];
    const X_2_ErbB3 = state[2];
    const X_6_ErbB3_ErbB3 = state[3];
    const X_5_EGFR_ErbB3 = state[4];
    const X_3_MET = state[5];
    const X_7_MET_MET = state[6];
    const X_10_p_MET_MET = state[7];
    const X_8_p_EGFR_ErbB3 = state[8];
    const X_9_p_ErbB3_ErbB3 = state[9];
    dstatedt[0] = 0 - 2 * internal.compartment * (0.5 * internal.k_1 * Math.pow((X_1_EGFR), (2)) - internal.l_1 * X_4_EGFR_EGFR) - 1 * internal.compartment * (internal.k_3 * X_1_EGFR * X_2_ErbB3 - internal.l_3 * X_5_EGFR_ErbB3);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k_p1 * X_7_MET_MET - internal.l_p1 * X_10_p_MET_MET) - 1 * internal.compartment * (internal.k_p2 * X_5_EGFR_ErbB3 * X_10_p_MET_MET) + 1 * internal.compartment * (internal.k_p2 * X_5_EGFR_ErbB3 * X_10_p_MET_MET) - 1 * internal.compartment * (internal.k_p3 * X_6_ErbB3_ErbB3 * X_10_p_MET_MET) + 1 * internal.compartment * (internal.k_p3 * X_6_ErbB3_ErbB3 * X_10_p_MET_MET);
    dstatedt[2] = 0 - 2 * internal.compartment * (0.5 * internal.k_2 * Math.pow((X_2_ErbB3), (2)) - internal.l_2 * X_6_ErbB3_ErbB3) - 1 * internal.compartment * (internal.k_3 * X_1_EGFR * X_2_ErbB3 - internal.l_3 * X_5_EGFR_ErbB3);
    dstatedt[5] = 0 - 2 * internal.compartment * (0.5 * internal.k_4 * Math.pow((X_3_MET), (2)) - internal.l_4 * X_7_MET_MET);
    dstatedt[1] = 0 + 1 * internal.compartment * (0.5 * internal.k_1 * Math.pow((X_1_EGFR), (2)) - internal.l_1 * X_4_EGFR_EGFR);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k_3 * X_1_EGFR * X_2_ErbB3 - internal.l_3 * X_5_EGFR_ErbB3) - 1 * internal.compartment * (internal.k_p2 * X_5_EGFR_ErbB3 * X_10_p_MET_MET) + 1 * internal.compartment * (internal.l_p2 * X_8_p_EGFR_ErbB3);
    dstatedt[3] = 0 + 1 * internal.compartment * (0.5 * internal.k_2 * Math.pow((X_2_ErbB3), (2)) - internal.l_2 * X_6_ErbB3_ErbB3) - 1 * internal.compartment * (internal.k_p3 * X_6_ErbB3_ErbB3 * X_10_p_MET_MET) + 1 * internal.compartment * (internal.l_p3 * X_9_p_ErbB3_ErbB3);
    dstatedt[6] = 0 + 1 * internal.compartment * (0.5 * internal.k_4 * Math.pow((X_3_MET), (2)) - internal.l_4 * X_7_MET_MET) - 1 * internal.compartment * (internal.k_p1 * X_7_MET_MET - internal.l_p1 * X_10_p_MET_MET);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k_p2 * X_5_EGFR_ErbB3 * X_10_p_MET_MET) - 1 * internal.compartment * (internal.l_p2 * X_8_p_EGFR_ErbB3);
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.k_p3 * X_6_ErbB3_ErbB3 * X_10_p_MET_MET) - 1 * internal.compartment * (internal.l_p3 * X_9_p_ErbB3_ErbB3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X_1_EGFR", "X_4_EGFR_EGFR", "X_2_ErbB3", "X_6_ErbB3_ErbB3", "X_5_EGFR_ErbB3", "X_3_MET", "X_7_MET_MET", "X_10_p_MET_MET", "X_8_p_EGFR_ErbB3", "X_9_p_ErbB3_ErbB3"];
    this.metadata.internalOrder = {compartment: null, initial_X_1_EGFR: null, initial_X_10_p_MET_MET: null, initial_X_2_ErbB3: null, initial_X_3_MET: null, initial_X_4_EGFR_EGFR: null, initial_X_5_EGFR_ErbB3: null, initial_X_6_ErbB3_ErbB3: null, initial_X_7_MET_MET: null, initial_X_8_p_EGFR_ErbB3: null, initial_X_9_p_ErbB3_ErbB3: null, k_1: null, k_2: null, k_3: null, k_4: null, k_p1: null, k_p2: null, k_p3: null, l_1: null, l_2: null, l_3: null, l_4: null, l_p1: null, l_p2: null, l_p3: null, X_1_EGFR_init: null, X_10_p_MET_MET_init: null, X_2_ErbB3_init: null, X_3_MET_init: null, X_4_EGFR_EGFR_init: null, X_5_EGFR_ErbB3_init: null, X_6_ErbB3_ErbB3_init: null, X_7_MET_MET_init: null, X_8_p_EGFR_ErbB3_init: null, X_9_p_ErbB3_ErbB3_init: null};
    this.metadata.variableOrder = {X_1_EGFR: null, X_4_EGFR_EGFR: null, X_2_ErbB3: null, X_6_ErbB3_ErbB3: null, X_5_EGFR_ErbB3: null, X_3_MET: null, X_7_MET_MET: null, X_10_p_MET_MET: null, X_8_p_EGFR_ErbB3: null, X_9_p_ErbB3_ErbB3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

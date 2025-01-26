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
    var state = Array(4).fill(0);
    state[0] = internal.initial_X_1;
    state[1] = internal.initial_X_2;
    state[2] = internal.initial_X_3;
    state[3] = internal.initial_X_4;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_0", "a_1", "a_2_minus", "a_2_plus", "a_3", "a_4", "a_5", "b", "b2f", "b2r", "K_1", "K_2_minus", "K_2_plus", "K_3_2", "K_3_3", "K_4", "K_5", "X_1_init", "X_2_init", "X_3_init", "X_4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_0", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2_minus", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2_plus", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_3", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_4", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_5", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2f", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2r", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_2_minus", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_2_plus", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_3_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_3_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_4_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_X_1 = internal.X_1_init;
    internal.initial_X_2 = internal.X_2_init;
    internal.initial_X_3 = internal.X_3_init;
    internal.initial_X_4 = internal.X_4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X_1 = state[0];
    const X_2 = state[1];
    const X_3 = state[2];
    const X_4 = state[3];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a_0) - 1 * internal.compartment * (internal.a_1 * X_1 / (internal.K_1 * (1 + internal.b * X_2) + X_1)) - 1 * internal.compartment * (internal.a_2_plus * X_1 / (internal.K_2_plus * (1 + internal.b2f * X_3) + X_1) - internal.a_2_minus * X_3 / (internal.K_2_minus * (1 + internal.b2r * X_1) + X_3));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a_1 * X_1 / (internal.K_1 * (1 + internal.b * X_2) + X_1)) - 1 * internal.compartment * (internal.a_3 * X_2 * X_3 / ((internal.K_3_2 + X_2) * (internal.K_3_3 + X_3))) - 1 * internal.compartment * (internal.a_5 * X_2 / (internal.K_5 + X_2));
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.a_3 * X_2 * X_3 / ((internal.K_3_2 + X_2) * (internal.K_3_3 + X_3))) + 1 * internal.compartment * (internal.a_4 * X_4 / (internal.K_4 + X_4)) + 1 * internal.compartment * (internal.a_2_plus * X_1 / (internal.K_2_plus * (1 + internal.b2f * X_3) + X_1) - internal.a_2_minus * X_3 / (internal.K_2_minus * (1 + internal.b2r * X_1) + X_3));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.a_3 * X_2 * X_3 / ((internal.K_3_2 + X_2) * (internal.K_3_3 + X_3))) - 1 * internal.compartment * (internal.a_4 * X_4 / (internal.K_4 + X_4));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X_1", "X_2", "X_3", "X_4"];
    this.metadata.internalOrder = {a_0: null, a_1: null, a_2_minus: null, a_2_plus: null, a_3: null, a_4: null, a_5: null, b: null, b2f: null, b2r: null, compartment: null, initial_X_1: null, initial_X_2: null, initial_X_3: null, initial_X_4: null, K_1: null, K_2_minus: null, K_2_plus: null, K_3_2: null, K_3_3: null, K_4: null, K_5: null, X_1_init: null, X_2_init: null, X_3_init: null, X_4_init: null};
    this.metadata.variableOrder = {X_1: null, X_2: null, X_3: null, X_4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

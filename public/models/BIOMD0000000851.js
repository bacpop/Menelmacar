export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.kxk = 1.5133799999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_V;
    state[2] = internal.initial_V_e;
    state[3] = internal.initial_I;
    state[4] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "alpha", "beta", "gamma", "I_init", "ModelValue_3", "ModelValue_5", "r", "R_0", "R_0_x", "R_init", "S_init", "T", "V_e_init", "V_init", "w"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 0.11550000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 127, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 2.7515999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 2.1272000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 2.7515999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_5", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.0155, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_0", internal, 1.2935000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_0_x", internal, 1.2606999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.94240000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 3.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_e_init", internal, 0.056500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0.056500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 0.45000000000000001, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
    internal.initial_V = internal.V_init;
    internal.initial_V_e = internal.V_e_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const V = state[1];
    const V_e = state[2];
    const I = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.beta * I * S) + 1 * internal.compartment * (internal.kxk * I * V) - 1 * internal.compartment * internal.gamma * I;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.gamma * I;
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.beta * I * S) - 1 * internal.compartment * (internal.r * (1 - V_e / internal.A));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r * (1 - V_e / internal.A)) - 1 * internal.compartment * (internal.kxk * I * V);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r * (1 - V_e / internal.A));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "V", "V_e", "I", "R"];
    this.metadata.internalOrder = {A: null, alpha: null, beta: null, compartment: null, gamma: null, I_init: null, initial_I: null, initial_R: null, initial_S: null, initial_V: null, initial_V_e: null, kxk: null, ModelValue_3: null, ModelValue_5: null, r: null, R_0: null, R_0_x: null, R_init: null, S_init: null, T: null, V_e_init: null, V_init: null, w: null};
    this.metadata.variableOrder = {S: null, V: null, V_e: null, I: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

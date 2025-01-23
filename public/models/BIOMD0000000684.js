export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.initial_I_1 = 0;
    internal.initial_I_12 = 0;
    internal.initial_I_2 = 0;
    internal.initial_I_21 = 0;
    internal.initial_P_1 = 0.10000000000000001;
    internal.initial_P_2 = 0.10000000000000001;
    internal.initial_R_1 = 0;
    internal.initial_R_12 = 0;
    internal.initial_R_2 = 0;
    internal.initial_S = 100;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_I_1;
    state[2] = internal.initial_I_2;
    state[3] = internal.initial_I_12;
    state[4] = internal.initial_I_21;
    state[5] = internal.initial_R_1;
    state[6] = internal.initial_R_2;
    state[7] = internal.initial_R_12;
    state[8] = internal.initial_P_1;
    state[9] = internal.initial_P_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_1", "a_2", "alpha_1", "alpha_2", "beta_1", "beta_2", "d", "epsilon", "g", "k_1", "k_2", "r", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.5, -Infinity, Infinity, false);
    internal.G = 1 / internal.g;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const I_1 = state[1];
    const I_2 = state[2];
    const I_12 = state[3];
    const I_21 = state[4];
    const R_1 = state[5];
    const R_2 = state[6];
    const R_12 = state[7];
    const P_1 = state[8];
    const P_2 = state[9];
    dstatedt[1] = internal.beta_1 * S * P_1 - internal.a_1 * I_1 - internal.alpha_1 * I_1;
    dstatedt[3] = internal.beta_2 * R_1 * P_2 - internal.a_2 * I_12 - internal.alpha_2 * I_12;
    dstatedt[2] = internal.beta_2 * S * P_2 - internal.a_2 * I_2 - internal.alpha_2 * I_2;
    dstatedt[4] = internal.beta_1 * R_2 * P_1 - internal.a_1 * I_21 - internal.alpha_1 * I_21;
    dstatedt[8] = internal.k_1 * (I_1 + I_21) - internal.u * P_1;
    dstatedt[9] = internal.k_2 * (I_2 + I_12) - internal.u * P_2;
    dstatedt[5] = internal.alpha_1 * I_1 - internal.d * R_1 - internal.g * R_1 - internal.beta_2 * R_1 * P_2;
    dstatedt[7] = internal.alpha_2 * I_12 + internal.alpha_1 * I_21 - internal.d * R_12 - internal.g * R_12;
    dstatedt[6] = internal.alpha_2 * I_2 - internal.d * R_2 - internal.g * R_2 - internal.beta_1 * R_2 * P_1;
    var H = S + I_1 + R_1 + I_2 + R_2 + I_12 + I_21 + R_12;
    dstatedt[0] = internal.r * H / (internal.epsilon * H + 1) - internal.d * S - internal.beta_1 * S * P_1 - internal.beta_2 * S * P_2 + internal.g * (R_1 + R_2 + R_12);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "I_1", "I_2", "I_12", "I_21", "R_1", "R_2", "R_12", "P_1", "P_2"];
    this.metadata.internalOrder = {a_1: null, a_2: null, alpha_1: null, alpha_2: null, beta_1: null, beta_2: null, COMpartment: null, d: null, epsilon: null, g: null, G: null, initial_I_1: null, initial_I_12: null, initial_I_2: null, initial_I_21: null, initial_P_1: null, initial_P_2: null, initial_R_1: null, initial_R_12: null, initial_R_2: null, initial_S: null, k_1: null, k_2: null, r: null, u: null};
    this.metadata.variableOrder = {S: null, I_1: null, I_2: null, I_12: null, I_21: null, R_1: null, R_2: null, R_12: null, P_1: null, P_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

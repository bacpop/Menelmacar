export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V;
    state[3] = internal.initial_N;
    state[4] = internal.initial_H;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ai", "an", "at", "av", "beta", "delta", "g", "gamma", "H_init", "I_init", "N_init", "rho", "T_init", "ui", "un", "ut", "uv", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ai", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "an", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "at", internal, 0.10100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "av", internal, 0.19900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.28399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.043999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.74299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.070999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1.5229999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ui", internal, 0.72199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "un", internal, 0.91100000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ut", internal, 0.187, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uv", internal, 1.7230000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0.12, -Infinity, Infinity, false);
    internal.initial_H = internal.H_init;
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_T = internal.T_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const V = state[2];
    const N = state[3];
    const H = state[4];
    dstatedt[4] = 0 + 1 * internal.tumor * (internal.gamma * internal.delta * H + internal.gamma * V * H * H) - 1 * internal.tumor * (internal.gamma * internal.delta * H * H + internal.gamma * V * H);
    dstatedt[1] = 0 + 1 * internal.tumor * (internal.av * V + internal.an * N) - 1 * internal.tumor * (internal.av * V * I + internal.an * N * I + internal.ui * I * T);
    dstatedt[3] = 0 + 1 * internal.tumor * (internal.beta + internal.beta * V * N) - 1 * internal.tumor * (internal.beta * V + internal.beta * N + internal.un * N * I);
    dstatedt[0] = 0 - 1 * internal.tumor * (internal.ut * T * I) + 1 * internal.tumor * (internal.g * T * (internal.rho * H + 1));
    dstatedt[2] = 0 + 1 * internal.tumor * (internal.at * T + internal.ai * I) - 1 * internal.tumor * (internal.at * T * V + internal.ai * I * V + internal.uv * V * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "V", "N", "H"];
    this.metadata.internalOrder = {ai: null, an: null, at: null, av: null, beta: null, delta: null, g: null, gamma: null, H_init: null, I_init: null, initial_H: null, initial_I: null, initial_N: null, initial_T: null, initial_V: null, N_init: null, rho: null, T_init: null, tumor: null, ui: null, un: null, ut: null, uv: null, V_init: null};
    this.metadata.variableOrder = {T: null, I: null, V: null, N: null, H: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

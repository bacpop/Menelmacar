export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Lymph_node = 1;
    internal.Tumor = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_S;
    state[3] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "delta", "h", "I_init", "m_s", "N_init", "p_s", "rho", "S_init", "T_init", "xi"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.019, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 571, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 0.035000000000000003, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_S = internal.S_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const S = state[2];
    const N = state[3];
    dstatedt[1] = 0 + 1 * internal.m_s * S - 1 * internal.Tumor * internal.delta * I;
    dstatedt[3] = 0 - 1 * (internal.alpha * (T / (10000000 + T)) * N);
    dstatedt[2] = 0 - 1 * internal.m_s * S + 1 * (internal.alpha * (T / (10000000 + T)) * N) + 1 * internal.Lymph_node * (internal.p_s * S);
    dstatedt[0] = 0 + 1 * internal.Tumor * (internal.rho * Math.pow((T), (4 / 5))) - 1 * internal.Tumor * (internal.xi * I * T / (1 + I / internal.h + T / internal.h));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "S", "N"];
    this.metadata.internalOrder = {alpha: null, delta: null, h: null, I_init: null, initial_I: null, initial_N: null, initial_S: null, initial_T: null, Lymph_node: null, m_s: null, N_init: null, p_s: null, rho: null, S_init: null, T_init: null, Tumor: null, xi: null};
    this.metadata.variableOrder = {T: null, I: null, S: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

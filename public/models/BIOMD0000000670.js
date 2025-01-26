export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_lxl;
    state[1] = internal.initial_n;
    state[2] = internal.initial_m;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "delta_l", "I", "K_l", "K_m", "lxl_init", "m_init", "N", "n_init", "S", "xi"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_l", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_l", internal, 17.856999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 62.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 2, -Infinity, Infinity, false);
    internal.initial_lxl = internal.lxl_init;
    internal.initial_m = internal.m_init;
    internal.initial_n = internal.n_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const lxl = state[0];
    const n = state[1];
    const m = state[2];
    dstatedt[0] = 0 + internal.A * lxl * m * (internal.N + 1) / (internal.N + lxl + m + n) + internal.I * (1 + internal.S * m) - internal.K_l * lxl * m * m - internal.delta_l * lxl;
    dstatedt[2] = 0 + internal.xi * m * (internal.N + 1) / (internal.N + lxl + m + n) - m - internal.K_m * lxl * m * m;
    dstatedt[1] = 0 + n * (internal.N + 1) / (internal.N + lxl + m + n) - n;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "lxl", "n", "m"];
    this.metadata.internalOrder = {A: null, cell: null, delta_l: null, I: null, initial_lxl: null, initial_m: null, initial_n: null, K_l: null, K_m: null, lxl_init: null, m_init: null, N: null, n_init: null, S: null, xi: null};
    this.metadata.variableOrder = {lxl: null, n: null, m: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

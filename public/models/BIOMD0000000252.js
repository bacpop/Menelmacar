export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_p;
    state[1] = internal.initial_mm;
    state[2] = internal.initial_m;
    state[3] = internal.initial_pm;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "delta", "gamma", "k_b", "k_f", "k_t", "k_tl", "m_init", "mm_init", "p_init", "pm_init", "S"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_b", internal, 7200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_f", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_t", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tl", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mm_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 1000, -Infinity, Infinity, false);
    internal.initial_m = internal.m_init;
    internal.initial_mm = internal.mm_init;
    internal.initial_p = internal.p_init;
    internal.initial_pm = internal.pm_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p = state[0];
    const mm = state[1];
    const m = state[2];
    const pm = state[3];
    dstatedt[2] = internal.k_tl * mm - internal.k_f * p * m + (internal.k_b + internal.delta) * pm - internal.gamma * m;
    dstatedt[1] = internal.k_t * Math.pow((p), (2)) - internal.beta * mm;
    dstatedt[0] = internal.S - internal.k_f * p * m - internal.alpha * p + (internal.k_b + internal.gamma) * pm;
    dstatedt[3] = internal.k_f * p * m - (internal.k_b + internal.delta) * pm - internal.gamma * pm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p", "mm", "m", "pm"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment_1: null, delta: null, gamma: null, initial_m: null, initial_mm: null, initial_p: null, initial_pm: null, k_b: null, k_f: null, k_t: null, k_tl: null, m_init: null, mm_init: null, p_init: null, pm_init: null, S: null};
    this.metadata.variableOrder = {p: null, mm: null, m: null, pm: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_U;
    state[1] = internal.initial_I;
    state[2] = internal.initial_M;
    state[3] = internal.initial_E;
    state[4] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b", "de", "delta", "dt", "du", "dv", "E_init", "he", "hu", "hv", "I_init", "K", "m", "M_init", "pe", "pm", "r", "U_init", "V_init", "w"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "de", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dt", internal, 5.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "du", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dv", internal, 0.0038, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "he", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hu", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hv", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 181820000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pe", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.92700000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 2.0419999999999998, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_I = internal.I_init;
    internal.initial_M = internal.M_init;
    internal.initial_U = internal.U_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const I = state[1];
    const M = state[2];
    const E = state[3];
    const V = state[4];
    dstatedt[3] = 0 + 1 * internal.tme * (internal.pe * M * (U + V) / (U + V + internal.hv)) - 1 * internal.tme * internal.de * E - 1 * internal.tme * (internal.dt * U * E);
    dstatedt[1] = 0 + 1 * internal.tme * (internal.dv * V * U / (internal.hu + U)) - 1 * internal.tme * internal.delta * I - 1 * internal.tme * (internal.du * I * E / (internal.he + E));
    dstatedt[2] = 0 + 1 * internal.tme * (internal.pm * V * M * (1 - M / internal.m) / (internal.hv + V));
    dstatedt[0] = 0 + 1 * internal.tme * (internal.r * U * (1 - (U + I) / internal.K)) - 1 * internal.tme * (internal.dv * V * U / (internal.hu + U)) - 1 * internal.tme * (internal.du * U * E / (internal.he + E));
    dstatedt[4] = 0 + 1 * internal.tme * (internal.delta * internal.b * I) - 1 * internal.tme * internal.w * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "I", "M", "E", "V"];
    this.metadata.internalOrder = {b: null, de: null, delta: null, dt: null, du: null, dv: null, E_init: null, he: null, hu: null, hv: null, I_init: null, initial_E: null, initial_I: null, initial_M: null, initial_U: null, initial_V: null, K: null, m: null, M_init: null, pe: null, pm: null, r: null, tme: null, U_init: null, V_init: null, w: null};
    this.metadata.variableOrder = {U: null, I: null, M: null, E: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

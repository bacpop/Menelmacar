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
    var state = Array(3).fill(0);
    state[0] = internal.initial_U;
    state[1] = internal.initial_M;
    state[2] = internal.initial_E;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["de", "dt", "du", "E_init", "he", "hv", "K", "M_init", "pe", "r", "U_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "de", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dt", internal, 5.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "du", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "he", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hv", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 181820000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pe", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.92700000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 1000000, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_M = internal.M_init;
    internal.initial_U = internal.U_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const M = state[1];
    const E = state[2];
    dstatedt[1] = 0;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.pe * M * U / (U + internal.hv)) - 1 * internal.tme * internal.de * E - 1 * internal.tme * (internal.dt * U * E);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.r * U * (1 - U / internal.K)) - 1 * internal.tme * (internal.du * U * E / (internal.he + E));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "M", "E"];
    this.metadata.internalOrder = {de: null, dt: null, du: null, E_init: null, he: null, hv: null, initial_E: null, initial_M: null, initial_U: null, K: null, M_init: null, pe: null, r: null, tme: null, U_init: null};
    this.metadata.variableOrder = {U: null, M: null, E: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

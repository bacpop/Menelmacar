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
    var state = Array(6).fill(0);
    state[0] = internal.initial_e;
    state[1] = internal.initial_x;
    state[2] = internal.initial_p;
    state[3] = internal.initial_p1;
    state[4] = internal.initial_p2;
    state[5] = internal.initial_a;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_init", "e_init", "k1", "k2", "k4", "k4_prime", "p_init", "p1_init", "p2_init", "x_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_init", internal, 1.3600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.71999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4_prime", internal, 16.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_a = internal.a_init;
    internal.initial_e = internal.e_init;
    internal.initial_p = internal.p_init;
    internal.initial_p1 = internal.p1_init;
    internal.initial_p2 = internal.p2_init;
    internal.initial_x = internal.x_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const e = state[0];
    const x = state[1];
    const p = state[2];
    const a = state[5];
    dstatedt[5] = 0;
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * e * x - internal.k2 * p) + 1 * internal.cell * internal.k4_prime * p * x + 1 * internal.cell * internal.k4 * p * a;
    dstatedt[2] = 0 + 1 * internal.cell * (internal.k1 * e * x - internal.k2 * p) - 1 * internal.cell * internal.k4_prime * p * x - 1 * internal.cell * internal.k4 * p * a;
    dstatedt[3] = 0 + 1 * internal.cell * internal.k4_prime * p * x;
    dstatedt[4] = 0 + 1 * internal.cell * internal.k4 * p * a;
    dstatedt[1] = 0 - 1 * internal.cell * (internal.k1 * e * x - internal.k2 * p) - 1 * internal.cell * internal.k4_prime * p * x;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "e", "x", "p", "p1", "p2", "a"];
    this.metadata.internalOrder = {a_init: null, cell: null, e_init: null, initial_a: null, initial_e: null, initial_p: null, initial_p1: null, initial_p2: null, initial_x: null, k1: null, k2: null, k4: null, k4_prime: null, p_init: null, p1_init: null, p2_init: null, x_init: null};
    this.metadata.variableOrder = {e: null, x: null, p: null, p1: null, p2: null, a: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

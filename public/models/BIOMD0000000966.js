export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Py;
    state[1] = internal.initial_Py1;
    state[2] = internal.initial_Dw;
    state[3] = internal.initial_Rw;
    state[4] = internal.initial_Qw1;
    state[5] = internal.initial_Qw2;
    state[6] = internal.initial_Zn_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Dw_init", "k_1", "k_2", "k1a", "k2", "Py_init", "Py1_init", "Qw1_init", "Qw2_init", "r3", "r4", "Rw_init", "Zn", "Zn_2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Dw_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Py_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Py1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qw1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qw2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 44100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r4", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rw_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Zn", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Zn_2_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_Dw = internal.Dw_init;
    internal.initial_Py = internal.Py_init;
    internal.initial_Py1 = internal.Py1_init;
    internal.initial_Qw1 = internal.Qw1_init;
    internal.initial_Qw2 = internal.Qw2_init;
    internal.initial_Rw = internal.Rw_init;
    internal.initial_Zn_2 = internal.Zn_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Py = state[0];
    const Py1 = state[1];
    const Dw = state[2];
    const Rw = state[3];
    const Qw1 = state[4];
    const Qw2 = state[5];
    dstatedt[2] = 0 - 1 * internal.Cell * (internal.k1a * Dw * Py1) + 1 * internal.Cell * internal.k_1 * Qw2 - 1 * internal.Cell * (internal.k2 * Dw * Rw) + 1 * internal.Cell * internal.k_2 * Qw1;
    dstatedt[0] = 0 - 1 * internal.Cell * (internal.r3 * Py * Math.pow((internal.Zn), (2))) + 1 * internal.Cell * internal.r4 * Py1;
    dstatedt[1] = 0 + 1 * internal.Cell * (internal.r3 * Py * Math.pow((internal.Zn), (2))) - 1 * internal.Cell * internal.r4 * Py1 - 1 * internal.Cell * (internal.k1a * Dw * Py1) + 1 * internal.Cell * internal.k_1 * Qw2;
    dstatedt[4] = 0 + 1 * internal.Cell * (internal.k2 * Dw * Rw) - 1 * internal.Cell * internal.k_2 * Qw1;
    dstatedt[5] = 0 + 1 * internal.Cell * (internal.k1a * Dw * Py1) - 1 * internal.Cell * internal.k_1 * Qw2;
    dstatedt[3] = 0 - 1 * internal.Cell * (internal.k2 * Dw * Rw) + 1 * internal.Cell * internal.k_2 * Qw1;
    dstatedt[6] = 0 + 1 * internal.Cell * internal.r4 * Py1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Py", "Py1", "Dw", "Rw", "Qw1", "Qw2", "Zn_2"];
    this.metadata.internalOrder = {Cell: null, Dw_init: null, initial_Dw: null, initial_Py: null, initial_Py1: null, initial_Qw1: null, initial_Qw2: null, initial_Rw: null, initial_Zn_2: null, k_1: null, k_2: null, k1a: null, k2: null, Py_init: null, Py1_init: null, Qw1_init: null, Qw2_init: null, r3: null, r4: null, Rw_init: null, Zn: null, Zn_2_init: null};
    this.metadata.variableOrder = {Py: null, Py1: null, Dw: null, Rw: null, Qw1: null, Qw2: null, Zn_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

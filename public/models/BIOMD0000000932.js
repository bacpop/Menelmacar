export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Gp;
    state[1] = internal.initial_Gi;
    state[2] = internal.initial_A;
    state[3] = internal.initial_B;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "b", "B_init", "GE", "Gi_init", "Gp_init", "k1", "k2", "k3", "k4", "k5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 100000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GE", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gi_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gp_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.34260000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.2999999999999998, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_Gi = internal.Gi_init;
    internal.initial_Gp = internal.Gp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Gp = state[0];
    const Gi = state[1];
    const A = state[2];
    const B = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k5 * Gi) - 1 * internal.compartment * (internal.k3 * A);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.b * A * Gp * B);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k4 * Gp) - 1 * internal.compartment * (internal.k5 * Gi);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k1 * internal.GE * Gp - internal.k2 * A * Gp) - 1 * internal.compartment * (internal.k4 * Gp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Gp", "Gi", "A", "B"];
    this.metadata.internalOrder = {A_init: null, b: null, B_init: null, compartment: null, GE: null, Gi_init: null, Gp_init: null, initial_A: null, initial_B: null, initial_Gi: null, initial_Gp: null, k1: null, k2: null, k3: null, k4: null, k5: null};
    this.metadata.variableOrder = {Gp: null, Gi: null, A: null, B: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

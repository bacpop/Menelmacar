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
    state[0] = internal.initial_Ti;
    state[1] = internal.initial_Tm;
    state[2] = internal.initial_I;
    state[3] = internal.initial_u;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a4", "alpha", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "gamma", "I_init", "k1", "k2", "k3", "k4", "kxk", "n", "p", "Ti_init", "Tm_init", "u_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a4", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.060999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ti_init", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tm_init", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    internal.d = 2 * internal.a1 * internal.a4 / (internal.a1 + internal.d2);
    internal.initial_I = internal.I_init;
    internal.initial_Ti = internal.Ti_init;
    internal.initial_Tm = internal.Tm_init;
    internal.initial_u = internal.u_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ti = state[0];
    const Tm = state[1];
    const I = state[2];
    const u = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kxk + internal.p * I * Math.pow((Ti + Tm), (internal.n)) / (internal.alpha + Math.pow((Ti + Tm), (internal.n)))) - 1 * internal.compartment * (internal.c2 * I * Ti + internal.c4 * Tm * I + internal.d1 * I + internal.k3 * (1 - Math.exp(- internal.k4 * u)) * I);
    dstatedt[0] = 0 + 1 * internal.compartment * (2 * internal.a4 * Tm) - 1 * internal.compartment * ((internal.c1 * I + internal.d2) * Ti + internal.a1 * Ti);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a1 * Ti) - 1 * internal.compartment * (internal.d3 * Tm + internal.a4 * Tm + internal.c3 * Tm * I + internal.k1 * - Math.exp(- internal.k2 * u) * Tm);
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.gamma * u);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ti", "Tm", "I", "u"];
    this.metadata.internalOrder = {a1: null, a4: null, alpha: null, c1: null, c2: null, c3: null, c4: null, compartment: null, d: null, d1: null, d2: null, d3: null, gamma: null, I_init: null, initial_I: null, initial_Ti: null, initial_Tm: null, initial_u: null, k1: null, k2: null, k3: null, k4: null, kxk: null, n: null, p: null, Ti_init: null, Tm_init: null, u_init: null};
    this.metadata.variableOrder = {Ti: null, Tm: null, I: null, u: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

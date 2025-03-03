export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.store = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_Y;
    state[2] = internal.initial_Z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "gamma", "K_A", "k1", "K2", "Ka", "Kb", "kd", "Kd0", "kf0", "Kr", "kxk", "m", "n", "p", "Rbas", "v0", "v1", "Vm2", "Vm3", "X_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_A", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf0", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rbas", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 5.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 325, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0.25, -Infinity, Infinity, false);
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    const Y = state[1];
    const Z = state[2];
    dstatedt[1] = 0 + 1 * internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((Z), (internal.n))) - 1 * internal.Vm3 * Math.pow((Y), (internal.m)) / (Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * Math.pow((Z), (internal.p)) / (Math.pow((internal.K_A), (internal.p)) + Math.pow((Z), (internal.p))) - 1 * internal.k1 * Y;
    dstatedt[2] = 0 + 1 * internal.v0 + 1 * internal.v1 * internal.beta - 1 * internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((Z), (internal.n))) + 1 * internal.Vm3 * Math.pow((Y), (internal.m)) / (Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * Math.pow((Z), (internal.p)) / (Math.pow((internal.K_A), (internal.p)) + Math.pow((Z), (internal.p))) + 1 * internal.k1 * Y - 1 * internal.kxk * Z;
    var Kd = internal.Kd0 / (1 + Math.pow((Z), (4)) / Math.pow((internal.Kb), (4)));
    var kf = internal.kf0 * (1 + internal.gamma * Math.pow((Z), (4)) / (Math.pow((internal.Ka), (4)) + Math.pow((Z), (4))));
    dstatedt[0] = 0 + 1 * kf * Math.pow((X), (2)) / (Math.pow((X), (2)) + Kd) - 1 * internal.kd * X + 1 * internal.Rbas;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "Y", "Z"];
    this.metadata.internalOrder = {beta: null, cytoplasm: null, gamma: null, initial_X: null, initial_Y: null, initial_Z: null, K_A: null, k1: null, K2: null, Ka: null, Kb: null, kd: null, Kd0: null, kf0: null, Kr: null, kxk: null, m: null, n: null, p: null, Rbas: null, store: null, v0: null, v1: null, Vm2: null, Vm3: null, X_init: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {X: null, Y: null, Z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

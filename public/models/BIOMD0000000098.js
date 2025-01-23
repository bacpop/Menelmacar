export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.store = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_Z;
    state[1] = internal.initial_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "K2", "Ka", "kf", "Kr", "kxk", "m", "n", "p", "v0", "v1", "Vm2", "Vm3", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 0.30099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 7.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Z = state[0];
    const Y = state[1];
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((Z), (internal.n)))) - 1 * internal.store * (internal.Vm3 * Math.pow((Y), (internal.m)) * Math.pow((Z), (internal.p)) / ((Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * (Math.pow((internal.Ka), (internal.p)) + Math.pow((Z), (internal.p))))) - 1 * internal.store * internal.kf * Y;
    dstatedt[0] = 0 + 1 * internal.cytosol * internal.v0 + 1 * internal.cytosol * internal.v1 * internal.beta - 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((Z), (internal.n)))) + 1 * internal.store * (internal.Vm3 * Math.pow((Y), (internal.m)) * Math.pow((Z), (internal.p)) / ((Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * (Math.pow((internal.Ka), (internal.p)) + Math.pow((Z), (internal.p))))) + 1 * internal.store * internal.kf * Y - 1 * internal.cytosol * internal.kxk * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Z", "Y"];
    this.metadata.internalOrder = {beta: null, cytosol: null, initial_Y: null, initial_Z: null, K2: null, Ka: null, kf: null, Kr: null, kxk: null, m: null, n: null, p: null, store: null, v0: null, v1: null, Vm2: null, Vm3: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {Z: null, Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

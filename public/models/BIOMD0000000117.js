export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.extracellular = 1;
    internal.intracellular_Ca_storepool = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_z;
    state[1] = internal.initial_y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K2", "KA", "kf", "KR", "kxk", "m", "n", "p", "tstim", "v0", "v1", "VM2", "VM3", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KR", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tstim", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 7.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM2", internal, 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM3", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_y = internal.y_init;
    internal.initial_z = internal.z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const z = state[0];
    const y = state[1];
    dstatedt[1] = 0 - 1 * internal.kf * y * internal.Cytosol + 1 * internal.intracellular_Ca_storepool * internal.VM2 * Math.pow((z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((z), (internal.n))) - 1 * internal.Cytosol * internal.VM3 * (Math.pow((y), (internal.m)) / (Math.pow((internal.KR), (internal.m)) + Math.pow((y), (internal.m)))) * (Math.pow((z), (internal.p)) / (Math.pow((internal.KA), (internal.p)) + Math.pow((z), (internal.p))));
    var flag = (t > internal.tstim ? 1 : 0);
    var beta = flag * 0.95999999999999996 * Math.exp(- 0.20000000000000001 * (t - internal.tstim));
    dstatedt[0] = 0 + 1 * internal.v1 * beta * internal.Cytosol + 1 * internal.v0 * internal.Cytosol + 1 * internal.kf * y * internal.Cytosol - 1 * internal.intracellular_Ca_storepool * internal.VM2 * Math.pow((z), (internal.n)) / (Math.pow((internal.K2), (internal.n)) + Math.pow((z), (internal.n))) + 1 * internal.Cytosol * internal.VM3 * (Math.pow((y), (internal.m)) / (Math.pow((internal.KR), (internal.m)) + Math.pow((y), (internal.m)))) * (Math.pow((z), (internal.p)) / (Math.pow((internal.KA), (internal.p)) + Math.pow((z), (internal.p)))) - 1 * internal.kxk * z * internal.extracellular;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "z", "y"];
    this.metadata.internalOrder = {Cytosol: null, extracellular: null, initial_y: null, initial_z: null, intracellular_Ca_storepool: null, K2: null, KA: null, kf: null, KR: null, kxk: null, m: null, n: null, p: null, tstim: null, v0: null, v1: null, VM2: null, VM3: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {z: null, y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

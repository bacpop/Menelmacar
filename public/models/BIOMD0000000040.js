export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.BrO3 = 0.059999999999999998;
    internal.BZ = 1;
    internal.HOBr = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Br;
    state[1] = internal.initial_Ce;
    state[2] = internal.initial_HBrO2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Br_init", "Ce_init", "f", "HBrO2_init", "k1", "k2", "k3", "k4", "k5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Br_init", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ce_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HBrO2_init", internal, 5.0000000000000002e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1.3400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1600000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 8000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 40000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    internal.initial_Br = internal.Br_init;
    internal.initial_Ce = internal.Ce_init;
    internal.initial_HBrO2 = internal.HBrO2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Br = state[0];
    const Ce = state[1];
    const HBrO2 = state[2];
    dstatedt[0] = 0 - 1 * Br * internal.BrO3 * internal.k1 * internal.BZ - 1 * Br * HBrO2 * internal.k2 * internal.BZ + 1 * Ce * internal.k5 * internal.BZ;
    dstatedt[1] = 0 + 1 * internal.BrO3 * HBrO2 * internal.k3 * internal.BZ - 1 * Ce * internal.k5 * internal.BZ;
    dstatedt[2] = 0 + 1 * Br * internal.BrO3 * internal.k1 * internal.BZ - 1 * Br * HBrO2 * internal.k2 * internal.BZ - 1 * internal.BrO3 * HBrO2 * internal.k3 * internal.BZ + 2 * internal.BrO3 * HBrO2 * internal.k3 * internal.BZ - 2 * Math.pow((HBrO2), (2)) * internal.k4 * internal.BZ;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Br", "Ce", "HBrO2"];
    this.metadata.internalOrder = {Br_init: null, BrO3: null, BZ: null, Ce_init: null, f: null, HBrO2_init: null, HOBr: null, initial_Br: null, initial_Ce: null, initial_HBrO2: null, k1: null, k2: null, k3: null, k4: null, k5: null};
    this.metadata.variableOrder = {Br: null, Ce: null, HBrO2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

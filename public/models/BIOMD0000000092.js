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
    state[0] = internal.initial_z;
    state[1] = internal.initial_e;
    state[2] = internal.initial_w;
    state[3] = internal.initial_ez;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["e_init", "ez_init", "k1", "k21", "k22", "k3", "w_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ez_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.00021000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.00054000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 2.4000000000000001e-05, -Infinity, Infinity, false);
    internal.initial_e = internal.e_init;
    internal.initial_ez = internal.ez_init;
    internal.initial_w = internal.w_init;
    internal.initial_z = internal.z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const z = state[0];
    const e = state[1];
    const ez = state[3];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * z - 1 * internal.compartment * (internal.k21 * e * z - internal.k22 * ez) + 2 * internal.compartment * internal.k3 * ez;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k21 * e * z - internal.k22 * ez) - 1 * internal.compartment * internal.k3 * ez;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * z + 1 * internal.compartment * internal.k3 * ez;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * z - 1 * internal.compartment * (internal.k21 * e * z - internal.k22 * ez);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "z", "e", "w", "ez"];
    this.metadata.internalOrder = {compartment: null, e_init: null, ez_init: null, initial_e: null, initial_ez: null, initial_w: null, initial_z: null, k1: null, k21: null, k22: null, k3: null, w_init: null, z_init: null};
    this.metadata.variableOrder = {z: null, e: null, w: null, ez: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

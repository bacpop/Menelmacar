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
    var state = Array(3).fill(0);
    state[0] = internal.initial_CDK1_active;
    state[1] = internal.initial_APC_active;
    state[2] = internal.initial_Plk1_active;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "a3", "APC_active_init", "b1", "b2", "b3", "CDK1_active_init", "k1", "k2", "k3", "n1", "n2", "n3", "Plk1_active_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDK1_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n3", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Plk1_active_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_APC_active = internal.APC_active_init;
    internal.initial_CDK1_active = internal.CDK1_active_init;
    internal.initial_Plk1_active = internal.Plk1_active_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CDK1_active = state[0];
    const APC_active = state[1];
    const Plk1_active = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a3 * (1 - APC_active) * Math.pow((Plk1_active), (internal.n3)) / (Math.pow((internal.k3), (internal.n3)) + Math.pow((Plk1_active), (internal.n3)))) - 1 * internal.compartment * internal.b3 * APC_active;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a1) - 1 * internal.compartment * (internal.b1 * CDK1_active * Math.pow((APC_active), (internal.n1)) / (Math.pow((internal.k1), (internal.n1)) + Math.pow((APC_active), (internal.n1))));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.a2 * (1 - Plk1_active) * Math.pow((CDK1_active), (internal.n2)) / (Math.pow((internal.k2), (internal.n2)) + Math.pow((CDK1_active), (internal.n2)))) - 1 * internal.compartment * internal.b2 * Plk1_active;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CDK1_active", "APC_active", "Plk1_active"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, APC_active_init: null, b1: null, b2: null, b3: null, CDK1_active_init: null, compartment: null, initial_APC_active: null, initial_CDK1_active: null, initial_Plk1_active: null, k1: null, k2: null, k3: null, n1: null, n2: null, n3: null, Plk1_active_init: null};
    this.metadata.variableOrder = {CDK1_active: null, APC_active: null, Plk1_active: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

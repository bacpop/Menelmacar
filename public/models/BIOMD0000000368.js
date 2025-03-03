export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Z1;
    state[1] = internal.initial_Z2;
    state[2] = internal.initial_Z3;
    state[3] = internal.initial_Z4;
    state[4] = internal.initial_E1;
    state[5] = internal.initial_E2;
    state[6] = internal.initial_E3;
    state[7] = internal.initial_E4;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E1_init", "E2_init", "E3_init", "E4_init", "k1", "k2", "k3", "k4", "mu1", "mu2", "mu23", "mu3", "mu4", "mu5", "Z1_init", "Z2_init", "Z3_init", "Z4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu23", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z4_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_E1 = internal.E1_init;
    internal.initial_E2 = internal.E2_init;
    internal.initial_E3 = internal.E3_init;
    internal.initial_E4 = internal.E4_init;
    internal.initial_Z1 = internal.Z1_init;
    internal.initial_Z2 = internal.Z2_init;
    internal.initial_Z3 = internal.Z3_init;
    internal.initial_Z4 = internal.Z4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Z1 = state[0];
    const Z2 = state[1];
    const Z3 = state[2];
    const Z4 = state[3];
    const E1 = state[4];
    const E2 = state[5];
    const E3 = state[6];
    const E4 = state[7];
    dstatedt[4] = (internal.mu1 * E2 + internal.mu5 * E4) * Z1 - internal.k1 * E1;
    dstatedt[5] = internal.mu2 * E1 * Z2 - internal.k2 * E2;
    dstatedt[6] = (internal.mu23 * E2 + internal.mu3 * E4) * Z3 - internal.k3 * E3;
    dstatedt[7] = internal.mu4 * E3 * Z4 - internal.k4 * E4;
    dstatedt[0] = - (internal.mu1 * E2 + internal.mu5 * E4) * Z1 + internal.k1 * E1;
    dstatedt[1] = - internal.mu2 * E1 * Z2 + internal.k2 * E2;
    dstatedt[2] = - (internal.mu23 * E2 + internal.mu3 * E4) * Z3 + internal.k3 * E3;
    dstatedt[3] = - internal.mu4 * E3 * Z4 + internal.k4 * E4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Z1", "Z2", "Z3", "Z4", "E1", "E2", "E3", "E4"];
    this.metadata.internalOrder = {compartment_1: null, E1_init: null, E2_init: null, E3_init: null, E4_init: null, initial_E1: null, initial_E2: null, initial_E3: null, initial_E4: null, initial_Z1: null, initial_Z2: null, initial_Z3: null, initial_Z4: null, k1: null, k2: null, k3: null, k4: null, mu1: null, mu2: null, mu23: null, mu3: null, mu4: null, mu5: null, Z1_init: null, Z2_init: null, Z3_init: null, Z4_init: null};
    this.metadata.variableOrder = {Z1: null, Z2: null, Z3: null, Z4: null, E1: null, E2: null, E3: null, E4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

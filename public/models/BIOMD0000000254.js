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
    state[0] = internal.initial_G1;
    state[1] = internal.initial_T1;
    state[2] = internal.initial_G2;
    state[3] = internal.initial_T2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["epsilon", "G1_init", "G2_init", "k1", "km", "kp", "T1_init", "T2_init", "V_in"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "epsilon", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1_init", internal, 6.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_init", internal, 10.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km", internal, 13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 7.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_in", internal, 0.35999999999999999, -Infinity, Infinity, false);
    internal.initial_G1 = internal.G1_init;
    internal.initial_G2 = internal.G2_init;
    internal.initial_T1 = internal.T1_init;
    internal.initial_T2 = internal.T2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G1 = state[0];
    const T1 = state[1];
    const G2 = state[2];
    const T2 = state[3];
    dstatedt[0] = 0 + internal.V_in - internal.k1 * G1 * T1;
    dstatedt[2] = 0 + internal.V_in - internal.k1 * G2 * T2;
    dstatedt[1] = 0 + 2 * internal.k1 * T1 * G1 - internal.kp * T1 / (internal.km + T1) + internal.epsilon * (T2 - T1);
    dstatedt[3] = 0 + 2 * internal.k1 * G2 * T2 - internal.kp * T2 / (internal.km + T2) - internal.epsilon * (T2 - T1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G1", "T1", "G2", "T2"];
    this.metadata.internalOrder = {compartment: null, epsilon: null, G1_init: null, G2_init: null, initial_G1: null, initial_G2: null, initial_T1: null, initial_T2: null, k1: null, km: null, kp: null, T1_init: null, T2_init: null, V_in: null};
    this.metadata.variableOrder = {G1: null, T1: null, G2: null, T2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

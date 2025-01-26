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
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "c", "D", "I_init", "pstar", "R", "r_T_d", "r_T_Tmax", "s", "T_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 8.3375999999999998e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 17.908000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 58.954000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pstar", internal, 203.96000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 30.077999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_T_d", internal, 0.0019927, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_T_Tmax", internal, 10645, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.1178, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_T = internal.T_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const V = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.beta * T * V + 1 * internal.compartment * (1 / (1 + internal.R) * (internal.r_T_Tmax * I / (T + I))) - 1 * internal.compartment * (1 / (1 + internal.R) * internal.r_T_d * I) - 1 * internal.compartment * (internal.D * internal.r_T_d * I);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.s * I) + 1 * internal.compartment * (internal.r_T_Tmax * T / (T + I)) - 1 * internal.compartment * (internal.r_T_d * T) - 1 * internal.compartment * internal.beta * T * V;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.beta * T * V + 1 * internal.compartment * (internal.pstar * I) - 1 * internal.compartment * internal.c * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "V"];
    this.metadata.internalOrder = {beta: null, c: null, compartment: null, D: null, I_init: null, initial_I: null, initial_T: null, initial_V: null, pstar: null, R: null, r_T_d: null, r_T_Tmax: null, s: null, T_init: null, V_init: null};
    this.metadata.variableOrder = {T: null, I: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

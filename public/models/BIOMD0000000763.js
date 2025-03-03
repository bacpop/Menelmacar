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
    state[0] = internal.initial_N_Tumour;
    state[1] = internal.initial_T_H;
    state[2] = internal.initial_T_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "delta_H", "gamma", "kxk", "N_Tumour_init", "Ntilde", "p", "sigma_C", "sigma_H", "T_C_init", "T_H_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_H", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 4.1500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_Tumour_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ntilde", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_C", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_H", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_C_init", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_H_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    internal.initial_N_Tumour = internal.N_Tumour_init;
    internal.initial_T_C = internal.T_C_init;
    internal.initial_T_H = internal.T_H_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N_Tumour = state[0];
    const T_H = state[1];
    const T_C = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.gamma * (1 - N_Tumour) * N_Tumour) - 1 * internal.compartment * (internal.p * internal.kxk * T_C * N_Tumour);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.sigma_C) + 1 * internal.compartment * (T_C * T_H) - 1 * internal.compartment * (T_C) - 1 * internal.compartment * ((1 - internal.p) * internal.kxk * T_C * N_Tumour);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.sigma_H) + 1 * internal.compartment * (internal.alpha * N_Tumour * T_H / (Math.pow((internal.Ntilde), (2)) + Math.pow((N_Tumour), (2)))) - 1 * internal.compartment * internal.delta_H * T_H;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N_Tumour", "T_H", "T_C"];
    this.metadata.internalOrder = {alpha: null, compartment: null, delta_H: null, gamma: null, initial_N_Tumour: null, initial_T_C: null, initial_T_H: null, kxk: null, N_Tumour_init: null, Ntilde: null, p: null, sigma_C: null, sigma_H: null, T_C_init: null, T_H_init: null};
    this.metadata.variableOrder = {N_Tumour: null, T_H: null, T_C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    state[0] = internal.initial_u;
    state[1] = internal.initial_v;
    state[2] = internal.initial_w;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_3", "alpha_4", "gamma_1", "k_1", "k_2", "k_3", "k_4", "mu_1", "r_1", "r_2", "u_init", "v_init", "w_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.069943000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 2.74492, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_3", internal, 0.019400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_4", internal, 0.01694, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.90305000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.030584, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 2.8742999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 0.37891799999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.0074000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.48220000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.33069999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_u = internal.u_init;
    internal.initial_v = internal.v_init;
    internal.initial_w = internal.w_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const u = state[0];
    const v = state[1];
    const w = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r_1 * u * (1 - u)) - 1 * internal.compartment * ((internal.alpha_1 * v + internal.alpha_2 * w) / (u + internal.k_1) * u);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r_2 * v * (1 - v)) - 1 * internal.compartment * (internal.alpha_3 * (u * v / (u + internal.k_2)));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.gamma_1 * u * w / (internal.k_3 + u)) - 1 * internal.compartment * (internal.mu_1 * w + internal.alpha_4 * (u * w / (u + internal.k_4)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "u", "v", "w"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_3: null, alpha_4: null, compartment: null, gamma_1: null, initial_u: null, initial_v: null, initial_w: null, k_1: null, k_2: null, k_3: null, k_4: null, mu_1: null, r_1: null, r_2: null, u_init: null, v_init: null, w_init: null};
    this.metadata.variableOrder = {u: null, v: null, w: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

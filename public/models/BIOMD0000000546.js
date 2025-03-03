export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_s1;
    state[1] = internal.initial_s2;
    state[2] = internal.initial_s3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta_a", "c_V", "delta_Es", "pi_a", "rho_E", "s1_init", "s2_init", "s3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta_a", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_V", internal, 4.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Es", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pi_a", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_E", internal, 6.1999999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 580000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 1000, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s3 = internal.s3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s1 = state[0];
    const s2 = state[1];
    const s3 = state[2];
    dstatedt[0] = 0 - 1 * internal.default1 * (internal.beta_a * s1 * s3 * internal.default1) + 1 * internal.default1 * (internal.rho_E * s1);
    dstatedt[1] = 0 + 1 * internal.default1 * (internal.beta_a * s1 * s3 * internal.default1) - 1 * internal.default1 * internal.delta_Es * s2;
    dstatedt[2] = 0 - 1 * internal.default1 * internal.c_V * s3 + 1 * internal.default1 * (internal.pi_a * s2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s2", "s3"];
    this.metadata.internalOrder = {beta_a: null, c_V: null, default1: null, delta_Es: null, initial_s1: null, initial_s2: null, initial_s3: null, pi: null, pi_a: null, rho_E: null, s1_init: null, s2_init: null, s3_init: null};
    this.metadata.variableOrder = {s1: null, s2: null, s3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

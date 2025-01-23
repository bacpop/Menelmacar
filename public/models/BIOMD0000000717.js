export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.beta_b = 45685 / (439197 * 30);
    internal.beta_bh = 16 / (108 * 1000000 * 912.5);
    internal.beta_v = 45685 / (2 * 439197 * 30);
    internal.compartment = 1;
    internal.d = 6 / (108 * 1000000 * 912.5);
    internal.delta_b = 45682 / (439197 * 30);
    internal.Human_Population = 1;
    internal.LAMBDA_b = 2060 / 365;
    internal.mu_b = 1 / (2 * 365);
    internal.mu_h = 1 / (69.200000000000003 * 365);
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_S_b;
    state[1] = internal.initial_I_b;
    state[2] = internal.initial_S_h;
    state[3] = internal.initial_I_a;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c", "gamma_b", "H_b", "H_bh", "H_v", "I_a_init", "I_b_init", "ModelValue_1", "p", "phi", "q", "S_b_init", "S_h_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_b", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_b", internal, 180000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_bh", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_v", internal, 850, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 171977, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_h_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_I_a = internal.I_a_init;
    internal.initial_I_b = internal.I_b_init;
    internal.initial_S_b = internal.S_b_init;
    internal.initial_S_h = internal.S_h_init;
    internal.LAMBDA_h = 23.699999999999999 * internal.ModelValue_1 / 365000;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S_b = state[0];
    const I_b = state[1];
    const S_h = state[2];
    const I_a = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.beta_bh * S_h * I_b / (internal.H_bh + I_b)) - 1 * internal.compartment * internal.d * I_a - 1 * internal.compartment * internal.mu_h * I_a;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta_b * S_b * I_b / (internal.H_b + I_b)) - 1 * internal.compartment * internal.delta_b * I_b - 1 * internal.compartment * internal.mu_b * I_b;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.LAMBDA_b) - 1 * internal.compartment * internal.mu_b * S_b - 1 * internal.compartment * (internal.beta_b * S_b * I_b / (internal.H_b + I_b));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.LAMBDA_h) - 1 * internal.compartment * internal.mu_h * S_h - 1 * internal.compartment * (internal.beta_bh * S_h * I_b / (internal.H_bh + I_b));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_b", "I_b", "S_h", "I_a"];
    this.metadata.internalOrder = {beta_b: null, beta_bh: null, beta_v: null, c: null, compartment: null, d: null, delta_b: null, gamma_b: null, H_b: null, H_bh: null, H_v: null, Human_Population: null, I_a_init: null, I_b_init: null, initial_I_a: null, initial_I_b: null, initial_S_b: null, initial_S_h: null, LAMBDA_b: null, LAMBDA_h: null, ModelValue_1: null, mu_b: null, mu_h: null, p: null, phi: null, q: null, S_b_init: null, S_h_init: null};
    this.metadata.variableOrder = {S_b: null, I_b: null, S_h: null, I_a: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

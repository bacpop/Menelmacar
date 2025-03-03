export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_alpha;
    state[1] = internal.initial_beta;
    state[2] = internal.initial_gamma;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_init", "beta_init", "Chi14", "gamma_init", "Ks1", "Ks2", "Ks3", "Ks4", "p", "r24", "r31", "Vm1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_init", internal, 0.46200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Chi14", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_init", internal, 0.33800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r24", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r31", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm1", internal, 1, -Infinity, Infinity, false);
    internal.initial_alpha = internal.alpha_init;
    internal.initial_beta = internal.beta_init;
    internal.initial_gamma = internal.gamma_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const alpha = state[0];
    const beta = state[1];
    const gamma = state[2];
    dstatedt[0] = 0 - 1 * internal.Vm1 * (alpha / internal.Ks1) / (1 + alpha / internal.Ks1 + beta / internal.Ks3) + 1 * internal.r24 * (internal.Vm1 / internal.Chi14) * (beta / internal.Ks2) / (1 + gamma / internal.Ks4 + beta / internal.Ks2);
    dstatedt[1] = 0 + 1 * internal.Vm1 * (alpha / internal.Ks1) / (1 + alpha / internal.Ks1 + beta / internal.Ks3) - 1 * internal.r24 * (internal.Vm1 / internal.Chi14) * (beta / internal.Ks2) / (1 + gamma / internal.Ks4 + beta / internal.Ks2) - 1 * internal.r31 * internal.Vm1 * (beta / internal.Ks3) / (1 + alpha / internal.Ks1 + beta / internal.Ks3) + 1 * internal.Vm1 / internal.Chi14 * (gamma / internal.Ks4) / (1 + gamma / internal.Ks4 + beta / internal.Ks2);
    dstatedt[2] = 0 + 1 * internal.r31 * internal.Vm1 * (beta / internal.Ks3) / (1 + alpha / internal.Ks1 + beta / internal.Ks3) - 1 * internal.Vm1 / internal.Chi14 * (gamma / internal.Ks4) / (1 + gamma / internal.Ks4 + beta / internal.Ks2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "alpha", "beta", "gamma"];
    this.metadata.internalOrder = {alpha_init: null, beta_init: null, cell: null, Chi14: null, gamma_init: null, initial_alpha: null, initial_beta: null, initial_gamma: null, Ks1: null, Ks2: null, Ks3: null, Ks4: null, p: null, r24: null, r31: null, Vm1: null};
    this.metadata.variableOrder = {alpha: null, beta: null, gamma: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.BALB_c_Mouse = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_anti_inflammatory__A;
    state[1] = internal.initial_inflammation__I;
    state[2] = internal.initial_bacterial_infection__B;
    state[3] = internal.initial_pro_inflammatory__P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_3", "alpha_4", "anti_inflammatory__A_init", "bacterial_infection__B_init", "beta_1", "beta_2", "beta_3", "beta_4", "g", "gamma", "inflammation__I_init", "K_B", "mu_1", "mu_2", "mu_3", "pro_inflammatory__P_init", "rho_1", "rho_2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_3", internal, 1.05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_4", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "anti_inflammatory__A_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bacterial_infection__B_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.13500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_4", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "inflammation__I_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_B", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_3", internal, 0.017399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pro_inflammatory__P_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_2", internal, 0.45000000000000001, -Infinity, Infinity, false);
    internal.initial_anti_inflammatory__A = internal.anti_inflammatory__A_init;
    internal.initial_bacterial_infection__B = internal.bacterial_infection__B_init;
    internal.initial_inflammation__I = internal.inflammation__I_init;
    internal.initial_pro_inflammatory__P = internal.pro_inflammatory__P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const anti_inflammatory__A = state[0];
    const inflammation__I = state[1];
    const bacterial_infection__B = state[2];
    const pro_inflammatory__P = state[3];
    dstatedt[0] = 0 + 1 * internal.BALB_c_Mouse * (internal.alpha_2 * pro_inflammatory__P - (internal.beta_2 * inflammation__I + internal.mu_2 * (1 - bacterial_infection__B / internal.K_B)) * anti_inflammatory__A);
    dstatedt[2] = 0 + 1 * internal.BALB_c_Mouse * ((internal.g * (1 - bacterial_infection__B / internal.K_B) + internal.alpha_4 * inflammation__I - internal.beta_4 * pro_inflammatory__P) * bacterial_infection__B + Math.exp(- 1 * internal.gamma * t));
    dstatedt[1] = 0 + 1 * internal.BALB_c_Mouse * (internal.alpha_3 * pro_inflammatory__P + internal.rho_2 * bacterial_infection__B - (internal.beta_3 * anti_inflammatory__A + internal.mu_3) * inflammation__I);
    dstatedt[3] = 0 + 1 * internal.BALB_c_Mouse * ((internal.alpha_1 * inflammation__I + internal.rho_1 * bacterial_infection__B) * (1 - pro_inflammatory__P) - (internal.beta_1 * anti_inflammatory__A + internal.mu_1 * (1 - bacterial_infection__B / internal.K_B)) * pro_inflammatory__P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "anti_inflammatory__A", "inflammation__I", "bacterial_infection__B", "pro_inflammatory__P"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_3: null, alpha_4: null, anti_inflammatory__A_init: null, bacterial_infection__B_init: null, BALB_c_Mouse: null, beta_1: null, beta_2: null, beta_3: null, beta_4: null, g: null, gamma: null, inflammation__I_init: null, initial_anti_inflammatory__A: null, initial_bacterial_infection__B: null, initial_inflammation__I: null, initial_pro_inflammatory__P: null, K_B: null, mu_1: null, mu_2: null, mu_3: null, pro_inflammatory__P_init: null, rho_1: null, rho_2: null};
    this.metadata.variableOrder = {anti_inflammatory__A: null, inflammation__I: null, bacterial_infection__B: null, pro_inflammatory__P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

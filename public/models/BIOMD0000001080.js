export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default_compartment = 1;
    internal.initial_APC = 9.9999999999999998e-13;
    internal.initial_Cdk = 0.80000000000000004;
    internal.initial_E2F = 9.9999999999999998e-13;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_CycD;
    state[1] = internal.initial_CycB;
    state[2] = internal.initial_APC;
    state[3] = internal.initial_E2F;
    state[4] = internal.initial_Cdk;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_apc", "alpha_cdk", "alpha_e2f", "b_deg", "b_syn", "CycB_init", "CycD_init", "d_deg", "d_syn", "delta_b", "delta_d", "epsilon_apc", "epsilon_cdk", "epsilon_e2f", "K_cdk_apc", "K_cyc_cdk", "K_cyc_e2f", "n", "r"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_apc", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_cdk", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_e2f", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_deg", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_syn", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycB_init", internal, 32.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycD_init", internal, 69.599999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_deg", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_syn", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_b", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_d", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_apc", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_cdk", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_e2f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_cdk_apc", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_cyc_cdk", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_cyc_e2f", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_CycB = internal.CycB_init;
    internal.initial_CycD = internal.CycD_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CycD = state[0];
    const CycB = state[1];
    const APC = state[2];
    const E2F = state[3];
    const Cdk = state[4];
    dstatedt[2] = 1 / internal.epsilon_apc * (Math.pow((Cdk), (internal.n)) / (Math.pow((internal.K_cdk_apc * (1 + internal.alpha_apc * APC * (APC - 1) * (APC - internal.r))), (internal.n)) + Math.pow((Cdk), (internal.n))) - APC);
    dstatedt[4] = 1 / internal.epsilon_cdk * (Math.pow((CycB), (internal.n)) / (Math.pow((internal.K_cyc_cdk * (1 + internal.alpha_cdk * Cdk / CycB * (Cdk / CycB - 1) * (Cdk / CycB - internal.r))), (internal.n)) + Math.pow((CycB), (internal.n))) * CycB - Cdk);
    dstatedt[1] = 0 + 1 * internal.default_compartment * (internal.b_syn * E2F / internal.default_compartment) - 1 * internal.default_compartment * (internal.b_deg * CycB * (APC + internal.delta_b) / internal.default_compartment);
    dstatedt[0] = 0 + 1 * internal.default_compartment * (internal.d_syn / internal.default_compartment) - 1 * internal.default_compartment * (internal.d_deg * CycD * (APC + internal.delta_d) / internal.default_compartment);
    dstatedt[3] = 1 / internal.epsilon_e2f * (Math.pow((CycD), (internal.n)) / (Math.pow((internal.K_cyc_e2f * (1 + internal.alpha_e2f * E2F * (E2F - 1) * (E2F - internal.r))), (internal.n)) + Math.pow((CycD), (internal.n))) - E2F);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CycD", "CycB", "APC", "E2F", "Cdk"];
    this.metadata.internalOrder = {alpha_apc: null, alpha_cdk: null, alpha_e2f: null, b_deg: null, b_syn: null, CycB_init: null, CycD_init: null, d_deg: null, d_syn: null, default_compartment: null, delta_b: null, delta_d: null, epsilon_apc: null, epsilon_cdk: null, epsilon_e2f: null, initial_APC: null, initial_Cdk: null, initial_CycB: null, initial_CycD: null, initial_E2F: null, K_cdk_apc: null, K_cyc_cdk: null, K_cyc_e2f: null, n: null, r: null};
    this.metadata.variableOrder = {CycD: null, CycB: null, APC: null, E2F: null, Cdk: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

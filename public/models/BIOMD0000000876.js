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
    state[0] = internal.initial_C_Uninfected_CD4;
    state[1] = internal.initial_I_Infected_CD4;
    state[2] = internal.initial_F_CTL;
    state[3] = internal.initial_V_Virus;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a_L", "b", "beta", "C_ast", "d_0", "e", "F_CTL_init", "I_Infected_CD4_init", "kxk", "lambda", "N", "rho", "V_Virus_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_L", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 5.7500000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_ast", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_CTL_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_Infected_CD4_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Virus_init", internal, 200, -Infinity, Infinity, false);
    internal.C_Uninfected_CD4_init = internal.C_ast;
    internal.initial_F_CTL = internal.F_CTL_init;
    internal.initial_I_Infected_CD4 = internal.I_Infected_CD4_init;
    internal.initial_V_Virus = internal.V_Virus_init;
    internal.initial_C_Uninfected_CD4 = internal.C_Uninfected_CD4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C_Uninfected_CD4 = state[0];
    const I_Infected_CD4 = state[1];
    const F_CTL = state[2];
    const V_Virus = state[3];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.lambda * internal.C_ast) - 1 * internal.compartment * internal.lambda * C_Uninfected_CD4 - 1 * internal.compartment * (internal.beta * C_Uninfected_CD4 * V_Virus);
    dstatedt[2] = 0 - 1 * internal.compartment * internal.b * F_CTL + 1 * internal.compartment * (internal.e * C_Uninfected_CD4 * V_Virus * F_CTL / (internal.C_ast + F_CTL));
    dstatedt[1] = 0 - 1 * internal.compartment * internal.a * I_Infected_CD4 + 1 * internal.compartment * (internal.beta * C_Uninfected_CD4 * V_Virus) - 1 * internal.compartment * (internal.rho * F_CTL * I_Infected_CD4);
    dstatedt[3] = 0 - 1 * internal.compartment * internal.kxk * V_Virus + 1 * internal.compartment * (internal.a * internal.N * I_Infected_CD4);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C_Uninfected_CD4", "I_Infected_CD4", "F_CTL", "V_Virus"];
    this.metadata.internalOrder = {a: null, a_L: null, b: null, beta: null, C_ast: null, C_Uninfected_CD4_init: null, compartment: null, d_0: null, e: null, F_CTL_init: null, I_Infected_CD4_init: null, initial_C_Uninfected_CD4: null, initial_F_CTL: null, initial_I_Infected_CD4: null, initial_V_Virus: null, kxk: null, lambda: null, N: null, rho: null, V_Virus_init: null};
    this.metadata.variableOrder = {C_Uninfected_CD4: null, I_Infected_CD4: null, F_CTL: null, V_Virus: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

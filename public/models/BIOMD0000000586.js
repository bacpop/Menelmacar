export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.yeast = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_G0;
    state[1] = internal.initial_G1;
    state[2] = internal.initial_rA;
    state[3] = internal.initial_I;
    state[4] = internal.initial_rI;
    state[5] = internal.initial_A;
    state[6] = internal.initial_AI;
    state[7] = internal.initial_A2;
    state[8] = internal.initial_G2;
    state[9] = internal.initial_G3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "A2_init", "AI_init", "beta", "delta_m", "delta_p", "epsilon", "epsilon_1", "f", "G0_init", "G1_init", "G2_init", "G3_init", "gamma", "I_init", "p_3sites", "rA_init", "rho_f", "rI_init", "Theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 14.109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_m", internal, 0.018599999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_p", internal, 0.0077000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.024, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3sites", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_f", internal, 0.17810000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Theta", internal, 0.02, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_A2 = internal.A2_init;
    internal.initial_AI = internal.AI_init;
    internal.initial_G0 = internal.G0_init;
    internal.initial_G1 = internal.G1_init;
    internal.initial_G2 = internal.G2_init;
    internal.initial_G3 = internal.G3_init;
    internal.initial_I = internal.I_init;
    internal.initial_rA = internal.rA_init;
    internal.initial_rI = internal.rI_init;
    internal.ModelValue_0 = internal.Theta;
    internal.ModelValue_17 = internal.p_3sites;
    internal.ModelValue_18 = internal.f;
    internal.ModelValue_2 = internal.rho_f;
    internal.Alpha = internal.ModelValue_0 / (24 * 3.3439999999999999);
    internal.rho_b = internal.ModelValue_2 * internal.ModelValue_18;
    internal.t_10 = internal.ModelValue_0;
    internal.t_21 = ((internal.ModelValue_17 == 1 ? 2 * internal.ModelValue_0 : 0));
    internal.t_32 = ((internal.ModelValue_17 == 1 ? 3 * internal.ModelValue_0 : 0));
    internal.ModelValue_1 = internal.Alpha;
    internal.ModelValue_3 = internal.rho_b;
    internal.a_01 = ((internal.ModelValue_17 == 1 ? 3 * internal.ModelValue_1 : internal.ModelValue_1));
    internal.a_12 = ((internal.ModelValue_17 == 1 ? 2 * internal.ModelValue_1 : 0));
    internal.a_23 = ((internal.ModelValue_17 == 1 ? 1 * internal.ModelValue_1 : 0));
    internal.rho_0 = Math.sqrt(internal.ModelValue_3 * internal.ModelValue_2);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G0 = state[0];
    const G1 = state[1];
    const rA = state[2];
    const I = state[3];
    const rI = state[4];
    const A = state[5];
    const AI = state[6];
    const A2 = state[7];
    const G2 = state[8];
    const G3 = state[9];
    dstatedt[5] = 0 + 1 * internal.yeast * internal.beta * rA - 1 * internal.yeast * internal.delta_p * A - 1 * internal.yeast * internal.gamma * A * I - 2 * internal.yeast * internal.gamma * Math.pow((A), (2)) + 2 * internal.yeast * internal.epsilon_1 * A2 + 1 * internal.yeast * internal.epsilon * AI;
    dstatedt[6] = 0 + 1 * internal.yeast * internal.gamma * A * I - 1 * internal.yeast * internal.epsilon * AI - 1 * internal.yeast * internal.delta_p * AI;
    dstatedt[3] = 0 - 1 * internal.yeast * internal.delta_p * I + 1 * internal.yeast * internal.beta * rI - 1 * internal.yeast * internal.gamma * A * I + 1 * internal.yeast * internal.epsilon * AI;
    dstatedt[4] = 0 + 1 * internal.yeast * internal.rho_f * G0 + 1 * internal.yeast * internal.rho_b * G1 - 1 * internal.yeast * internal.delta_m * rI - 1 * internal.yeast * internal.beta * rI + 1 * internal.yeast * internal.beta * rI + 1 * internal.yeast * internal.rho_b * G2 + 1 * internal.yeast * internal.rho_b * G3;
    dstatedt[7] = 0 + 1 * internal.yeast * internal.t_10 * G1 - 1 * internal.yeast * internal.a_01 * G0 * A2 + 1 * internal.yeast * internal.gamma * Math.pow((A), (2)) - 1 * internal.yeast * internal.epsilon_1 * A2 - 1 * internal.yeast * internal.delta_p * A2 - 1 * internal.yeast * internal.a_12 * G1 * A2 + 1 * internal.yeast * internal.t_21 * G2 - 1 * internal.yeast * internal.a_23 * G2 * A2 + 1 * internal.yeast * internal.t_32 * G3;
    dstatedt[0] = 0 + 1 * internal.yeast * internal.t_10 * G1 - 1 * internal.yeast * internal.a_01 * G0 * A2 - 1 * internal.yeast * internal.rho_f * G0 + 1 * internal.yeast * internal.rho_f * G0;
    dstatedt[1] = 0 - 1 * internal.yeast * internal.t_10 * G1 + 1 * internal.yeast * internal.a_01 * G0 * A2 - 1 * internal.yeast * internal.rho_b * G1 + 1 * internal.yeast * internal.rho_b * G1 - 1 * internal.yeast * internal.a_12 * G1 * A2 + 1 * internal.yeast * internal.t_21 * G2;
    dstatedt[8] = 0 + 1 * internal.yeast * internal.a_12 * G1 * A2 - 1 * internal.yeast * internal.t_21 * G2 - 1 * internal.yeast * internal.rho_b * G2 + 1 * internal.yeast * internal.rho_b * G2 - 1 * internal.yeast * internal.a_23 * G2 * A2 + 1 * internal.yeast * internal.t_32 * G3;
    dstatedt[9] = 0 + 1 * internal.yeast * internal.a_23 * G2 * A2 - 1 * internal.yeast * internal.t_32 * G3 - 1 * internal.yeast * internal.rho_b * G3 + 1 * internal.yeast * internal.rho_b * G3;
    dstatedt[2] = 0 - 1 * internal.yeast * internal.delta_m * rA + 1 * internal.yeast * (internal.rho_0) - 1 * internal.yeast * internal.beta * rA + 1 * internal.yeast * internal.beta * rA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G0", "G1", "rA", "I", "rI", "A", "AI", "A2", "G2", "G3"];
    this.metadata.internalOrder = {a_01: null, a_12: null, a_23: null, A_init: null, A2_init: null, AI_init: null, Alpha: null, beta: null, delta_m: null, delta_p: null, epsilon: null, epsilon_1: null, f: null, G0_init: null, G1_init: null, G2_init: null, G3_init: null, gamma: null, I_init: null, initial_A: null, initial_A2: null, initial_AI: null, initial_G0: null, initial_G1: null, initial_G2: null, initial_G3: null, initial_I: null, initial_rA: null, initial_rI: null, ModelValue_0: null, ModelValue_1: null, ModelValue_17: null, ModelValue_18: null, ModelValue_2: null, ModelValue_3: null, p_3sites: null, rA_init: null, rho_0: null, rho_b: null, rho_f: null, rI_init: null, t_10: null, t_21: null, t_32: null, Theta: null, yeast: null};
    this.metadata.variableOrder = {G0: null, G1: null, rA: null, I: null, rI: null, A: null, AI: null, A2: null, G2: null, G3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

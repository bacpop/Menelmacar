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
    state[2] = internal.initial_rR;
    state[3] = internal.initial_I;
    state[4] = internal.initial_rI;
    state[5] = internal.initial_R;
    state[6] = internal.initial_RI;
    state[7] = internal.initial_R2;
    state[8] = internal.initial_G2;
    state[9] = internal.initial_G3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "delta_m", "delta_p", "epsilon", "epsilon_1", "f", "G0_init", "G1_init", "G2_init", "G3_init", "gamma", "I_init", "ModelValue_0", "ModelValue_1", "ModelValue_17", "ModelValue_18", "ModelValue_2", "ModelValue_3", "p_3sites", "R_init", "R2_init", "rho_f", "rI_init", "RI_init", "rR_init", "Theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 14.109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_m", internal, 0.015900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_p", internal, 0.0077000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.024, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 3.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 0.00024920255183413098, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_17", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_18", internal, 3.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 0.89280000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 0.24595041322314101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3sites", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_f", internal, 0.89280000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Theta", internal, 0.02, -Infinity, Infinity, false);
    internal.a_01 = ((internal.ModelValue_17 == 1 ? 3 * internal.ModelValue_1 : internal.ModelValue_1));
    internal.a_12 = ((internal.ModelValue_17 == 1 ? 2 * internal.ModelValue_1 : 0));
    internal.a_23 = ((internal.ModelValue_17 == 1 ? 1 * internal.ModelValue_1 : 0));
    internal.Alpha = internal.ModelValue_0 / (24 * 3.3439999999999999);
    internal.initial_G0 = internal.G0_init;
    internal.initial_G1 = internal.G1_init;
    internal.initial_G2 = internal.G2_init;
    internal.initial_G3 = internal.G3_init;
    internal.initial_I = internal.I_init;
    internal.initial_R = internal.R_init;
    internal.initial_R2 = internal.R2_init;
    internal.initial_rI = internal.rI_init;
    internal.initial_RI = internal.RI_init;
    internal.initial_rR = internal.rR_init;
    internal.rho_0 = Math.sqrt(internal.ModelValue_3 * internal.ModelValue_2);
    internal.rho_b = internal.ModelValue_2 / internal.ModelValue_18;
    internal.t_10 = internal.ModelValue_0;
    internal.t_21 = ((internal.ModelValue_17 == 1 ? 2 * internal.ModelValue_0 : 0));
    internal.t_32 = ((internal.ModelValue_17 == 1 ? 3 * internal.ModelValue_0 : 0));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G0 = state[0];
    const G1 = state[1];
    const rR = state[2];
    const I = state[3];
    const rI = state[4];
    const R = state[5];
    const RI = state[6];
    const R2 = state[7];
    const G2 = state[8];
    const G3 = state[9];
    dstatedt[3] = 0 - 1 * internal.yeast * internal.delta_p * I + 1 * internal.yeast * internal.beta * rI - 1 * internal.yeast * internal.gamma * R * I + 1 * internal.yeast * internal.epsilon * RI;
    dstatedt[5] = 0 + 1 * internal.yeast * internal.beta * rR - 1 * internal.yeast * internal.delta_p * R - 1 * internal.yeast * internal.gamma * R * I - 2 * internal.yeast * internal.gamma * Math.pow((R), (2)) + 2 * internal.yeast * internal.epsilon_1 * R2 + 1 * internal.yeast * internal.epsilon * RI;
    dstatedt[6] = 0 + 1 * internal.yeast * internal.gamma * R * I - 1 * internal.yeast * internal.epsilon * RI - 1 * internal.yeast * internal.delta_p * RI;
    dstatedt[0] = 0 + 1 * internal.yeast * internal.t_10 * G1 - 1 * internal.yeast * internal.a_01 * G0 * R2 - 1 * internal.yeast * internal.rho_f * G0 + 1 * internal.yeast * internal.rho_f * G0;
    dstatedt[1] = 0 - 1 * internal.yeast * internal.t_10 * G1 + 1 * internal.yeast * internal.a_01 * G0 * R2 - 1 * internal.yeast * internal.rho_b * G1 + 1 * internal.yeast * internal.rho_b * G1 - 1 * internal.yeast * internal.a_12 * G1 * R2 + 1 * internal.yeast * internal.t_21 * G2;
    dstatedt[8] = 0 + 1 * internal.yeast * internal.a_12 * G1 * R2 - 1 * internal.yeast * internal.t_21 * G2 - 1 * internal.yeast * internal.rho_b * G2 + 1 * internal.yeast * internal.rho_b * G2 - 1 * internal.yeast * internal.a_23 * G2 * R2 + 1 * internal.yeast * internal.t_32 * G3;
    dstatedt[9] = 0 + 1 * internal.yeast * internal.a_23 * G2 * R2 - 1 * internal.yeast * internal.t_32 * G3 - 1 * internal.yeast * internal.rho_b * G3 + 1 * internal.yeast * internal.rho_b * G3;
    dstatedt[7] = 0 + 1 * internal.yeast * internal.t_10 * G1 - 1 * internal.yeast * internal.a_01 * G0 * R2 + 1 * internal.yeast * internal.gamma * Math.pow((R), (2)) - 1 * internal.yeast * internal.epsilon_1 * R2 - 1 * internal.yeast * internal.delta_p * R2 - 1 * internal.yeast * internal.a_12 * G1 * R2 + 1 * internal.yeast * internal.t_21 * G2 - 1 * internal.yeast * internal.a_23 * G2 * R2 + 1 * internal.yeast * internal.t_32 * G3;
    dstatedt[4] = 0 + 1 * internal.yeast * (internal.rho_0) - 1 * internal.yeast * internal.delta_m * rI - 1 * internal.yeast * internal.beta * rI + 1 * internal.yeast * internal.beta * rI;
    dstatedt[2] = 0 + 1 * internal.yeast * internal.rho_f * G0 + 1 * internal.yeast * internal.rho_b * G1 - 1 * internal.yeast * internal.delta_m * rR - 1 * internal.yeast * internal.beta * rR + 1 * internal.yeast * internal.beta * rR + 1 * internal.yeast * internal.rho_b * G2 + 1 * internal.yeast * internal.rho_b * G3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G0", "G1", "rR", "I", "rI", "R", "RI", "R2", "G2", "G3"];
    this.metadata.internalOrder = {a_01: null, a_12: null, a_23: null, Alpha: null, beta: null, delta_m: null, delta_p: null, epsilon: null, epsilon_1: null, f: null, G0_init: null, G1_init: null, G2_init: null, G3_init: null, gamma: null, I_init: null, initial_G0: null, initial_G1: null, initial_G2: null, initial_G3: null, initial_I: null, initial_R: null, initial_R2: null, initial_rI: null, initial_RI: null, initial_rR: null, ModelValue_0: null, ModelValue_1: null, ModelValue_17: null, ModelValue_18: null, ModelValue_2: null, ModelValue_3: null, p_3sites: null, R_init: null, R2_init: null, rho_0: null, rho_b: null, rho_f: null, rI_init: null, RI_init: null, rR_init: null, t_10: null, t_21: null, t_32: null, Theta: null, yeast: null};
    this.metadata.variableOrder = {G0: null, G1: null, rR: null, I: null, rI: null, R: null, RI: null, R2: null, G2: null, G3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

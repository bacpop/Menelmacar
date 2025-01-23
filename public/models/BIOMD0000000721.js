export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Bone = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Osteocytes__S;
    state[1] = internal.initial_Pre_Osteoblasts__P;
    state[2] = internal.initial_Osteoblasts__B;
    state[3] = internal.initial_Osteoclasts__C;
    state[4] = internal.initial_Bone_volume__z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_3", "alpha_4", "beta_1", "beta_2", "beta_3", "Bone_volume__z_init", "delta", "epsilon", "f_12", "f_14", "f_23", "f_34", "g_21", "g_22", "g_31", "g_32", "g_41", "g_42", "g_43", "g_44", "K_S", "k1", "k2", "Osteoblasts__B_init", "Osteoclasts__C_init", "Pre_Osteoblasts__P_init", "rho"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bone_volume__z_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_14", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_23", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_34", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_21", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_22", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_31", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_32", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_41", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_42", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_43", internal, - 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_44", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_S", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.015445, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Osteoblasts__B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Osteoclasts__C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pre_Osteoblasts__P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 20, -Infinity, Infinity, false);
    internal.initial_Bone_volume__z = internal.Bone_volume__z_init;
    internal.initial_Osteoblasts__B = internal.Osteoblasts__B_init;
    internal.initial_Osteoclasts__C = internal.Osteoclasts__C_init;
    internal.initial_Pre_Osteoblasts__P = internal.Pre_Osteoblasts__P_init;
    internal.Osteocytes__S_init = internal.K_S - internal.rho;
    internal.initial_Osteocytes__S = internal.Osteocytes__S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Osteocytes__S = state[0];
    const Pre_Osteoblasts__P = state[1];
    const Osteoblasts__B = state[2];
    const Osteoclasts__C = state[3];
    dstatedt[4] = 0 - 1 * internal.Bone * (internal.k1 * Osteoclasts__C) + 1 * internal.Bone * (internal.k2 * Osteoblasts__B);
    dstatedt[2] = 0 - 1 * internal.Bone * (internal.alpha_1 * Math.pow((Osteoblasts__B), (internal.g_31)) * (1 - Osteocytes__S / internal.K_S)) + 1 * internal.Bone * (internal.beta_1 * Math.pow((Pre_Osteoblasts__P), (internal.f_12)) * Math.pow((Osteoclasts__C), (internal.f_14))) - 1 * internal.Bone * (internal.beta_2 * Math.pow((Osteoblasts__B), (internal.f_23)));
    dstatedt[3] = 0 + 1 * internal.Bone * (internal.alpha_4 * Math.pow((Osteocytes__S), (internal.g_41)) * Math.pow((Pre_Osteoblasts__P), (internal.g_42)) * Math.pow((internal.epsilon + Osteoblasts__B), (internal.g_43)) * Math.pow((1 - Osteocytes__S / internal.K_S), (internal.g_44))) - 1 * internal.Bone * (internal.beta_3 * Math.pow((Osteoclasts__C), (internal.f_34)));
    dstatedt[0] = 0 + 1 * internal.Bone * (internal.alpha_1 * Math.pow((Osteoblasts__B), (internal.g_31)) * (1 - Osteocytes__S / internal.K_S));
    dstatedt[1] = 0 + 1 * internal.Bone * (internal.alpha_2 * Math.pow((Osteocytes__S), (internal.g_21)) * (1 - Osteocytes__S / internal.K_S) * internal.g_22) + 1 * internal.Bone * (internal.alpha_3 * Math.pow((Pre_Osteoblasts__P), (internal.g_32)) * (1 - Osteocytes__S / internal.K_S)) - 1 * internal.Bone * (internal.beta_1 * Math.pow((Pre_Osteoblasts__P), (internal.f_12)) * Math.pow((Osteoclasts__C), (internal.f_14))) - 1 * internal.Bone * internal.delta * Pre_Osteoblasts__P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Osteocytes__S", "Pre_Osteoblasts__P", "Osteoblasts__B", "Osteoclasts__C", "Bone_volume__z"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_3: null, alpha_4: null, beta_1: null, beta_2: null, beta_3: null, Bone: null, Bone_volume__z_init: null, delta: null, epsilon: null, f_12: null, f_14: null, f_23: null, f_34: null, g_21: null, g_22: null, g_31: null, g_32: null, g_41: null, g_42: null, g_43: null, g_44: null, initial_Bone_volume__z: null, initial_Osteoblasts__B: null, initial_Osteoclasts__C: null, initial_Osteocytes__S: null, initial_Pre_Osteoblasts__P: null, K_S: null, k1: null, k2: null, Osteoblasts__B_init: null, Osteoclasts__C_init: null, Osteocytes__S_init: null, Pre_Osteoblasts__P_init: null, rho: null};
    this.metadata.variableOrder = {Osteocytes__S: null, Pre_Osteoblasts__P: null, Osteoblasts__B: null, Osteoclasts__C: null, Bone_volume__z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

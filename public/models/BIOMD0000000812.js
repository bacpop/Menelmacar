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
    state[0] = internal.initial_X_Complex;
    state[1] = internal.initial_P_Perforin;
    state[2] = internal.initial_C_Cancer_Uncomplexed;
    state[3] = internal.initial_T_ast;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_Cancer_Uncomplexed_init", "E_init1", "k_1", "k_2", "k_3", "k_4", "k_5", "k_6", "k_m", "k_m_1", "k_m_2", "k_p", "kxk", "ModelValue_11", "P_Perforin_init", "T_ast_init", "X_Complex_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_Cancer_Uncomplexed_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_6", internal, 0.63, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_m", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_m_1", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_m_2", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p", internal, 0.097000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_11", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_Perforin_init", internal, 0.315, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_ast_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_Complex_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C_Cancer_Uncomplexed = internal.C_Cancer_Uncomplexed_init;
    internal.initial_P_Perforin = internal.P_Perforin_init;
    internal.initial_T_ast = internal.T_ast_init;
    internal.initial_X_Complex = internal.X_Complex_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X_Complex = state[0];
    const P_Perforin = state[1];
    const C_Cancer_Uncomplexed = state[2];
    const T_ast = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.kxk * T_ast) - 1 * internal.compartment * (internal.k_5 * Math.pow((T_ast), (2)));
    var E_CTL = internal.ModelValue_11 - X_Complex;
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k_1 * C_Cancer_Uncomplexed * E_CTL) + 1 * internal.compartment * internal.k_2 * X_Complex - 1 * internal.compartment * internal.k_4 * P_Perforin * C_Cancer_Uncomplexed + 1 * internal.compartment * (internal.kxk * C_Cancer_Uncomplexed) - 1 * internal.compartment * (internal.k_5 * Math.pow((C_Cancer_Uncomplexed), (2)));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k_p * E_CTL / ((internal.k_m_1 + E_CTL) * internal.k_m_2 * C_Cancer_Uncomplexed)) - 1 * internal.compartment * internal.k_4 * P_Perforin * C_Cancer_Uncomplexed;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k_1 * C_Cancer_Uncomplexed * E_CTL) - 1 * internal.compartment * internal.k_2 * X_Complex - 1 * internal.compartment * internal.k_3 * X_Complex;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X_Complex", "P_Perforin", "C_Cancer_Uncomplexed", "T_ast"];
    this.metadata.internalOrder = {C_Cancer_Uncomplexed_init: null, compartment: null, E_init1: null, initial_C_Cancer_Uncomplexed: null, initial_P_Perforin: null, initial_T_ast: null, initial_X_Complex: null, k_1: null, k_2: null, k_3: null, k_4: null, k_5: null, k_6: null, k_m: null, k_m_1: null, k_m_2: null, k_p: null, kxk: null, ModelValue_11: null, P_Perforin_init: null, T_ast_init: null, X_Complex_init: null};
    this.metadata.variableOrder = {X_Complex: null, P_Perforin: null, C_Cancer_Uncomplexed: null, T_ast: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

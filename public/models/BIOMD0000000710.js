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
    var state = Array(7).fill(0);
    state[0] = internal.initial_U_H;
    state[1] = internal.initial_U_E;
    state[2] = internal.initial_U_I;
    state[3] = internal.initial_U_R;
    state[4] = internal.initial_V;
    state[5] = internal.initial_IFN;
    state[6] = internal.initial_K;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_I", "delta_H", "delta_I", "delta_IFN", "delta_K", "delta_R", "delta_V", "IFN_init", "k_E", "k_I", "K_init", "k_R", "Metabolite_0_0", "Metabolite_6_0", "p_V", "phi_K", "q_K", "U_E_init", "U_H_init", "U_I_init", "U_R_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_I", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_H", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_I", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_IFN", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_K", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_R", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_V", internal, 5.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_E", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_I", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_init", internal, 800000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_R", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_0_0", internal, 500000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_6_0", internal, 800000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_V", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_K", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_K", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_H_init", internal, 500000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0.001, -Infinity, Infinity, false);
    internal.initial_IFN = internal.IFN_init;
    internal.initial_K = internal.K_init;
    internal.initial_U_E = internal.U_E_init;
    internal.initial_U_H = internal.U_H_init;
    internal.initial_U_I = internal.U_I_init;
    internal.initial_U_R = internal.U_R_init;
    internal.initial_V = internal.V_init;
    internal.S_H = internal.Metabolite_0_0 * internal.delta_H;
    internal.S_K = internal.Metabolite_6_0 * internal.delta_K;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U_H = state[0];
    const U_E = state[1];
    const U_I = state[2];
    const U_R = state[3];
    const V = state[4];
    const IFN = state[5];
    const K = state[6];
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.a_I * U_I) - 1 * internal.compartment * internal.delta_IFN * IFN;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k_I * U_H * V) - 1 * internal.compartment * internal.k_E * U_E - 1 * internal.compartment * (internal.q_K * U_E * K);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k_E * U_E - 1 * internal.compartment * internal.delta_I * U_I - 1 * internal.compartment * (internal.q_K * U_I * K);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k_R * U_H * IFN) - 1 * internal.compartment * internal.delta_R * U_R;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.p_V * U_I) - 1 * internal.compartment * internal.delta_V * V;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.S_K) + 1 * internal.compartment * (internal.phi_K * U_I) - 1 * internal.compartment * internal.delta_K * K;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.S_H) - 1 * internal.compartment * (internal.k_I * U_H * V) - 1 * internal.compartment * (internal.k_R * U_H * IFN) - 1 * internal.compartment * internal.delta_H * U_H;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U_H", "U_E", "U_I", "U_R", "V", "IFN", "K"];
    this.metadata.internalOrder = {a_I: null, compartment: null, delta_H: null, delta_I: null, delta_IFN: null, delta_K: null, delta_R: null, delta_V: null, IFN_init: null, initial_IFN: null, initial_K: null, initial_U_E: null, initial_U_H: null, initial_U_I: null, initial_U_R: null, initial_V: null, k_E: null, k_I: null, K_init: null, k_R: null, Metabolite_0_0: null, Metabolite_6_0: null, p_V: null, phi_K: null, q_K: null, S_H: null, S_K: null, U_E_init: null, U_H_init: null, U_I_init: null, U_R_init: null, V_init: null};
    this.metadata.variableOrder = {U_H: null, U_E: null, U_I: null, U_R: null, V: null, IFN: null, K: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

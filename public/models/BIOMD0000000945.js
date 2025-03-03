export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.human_lymphoma_cells = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_L_m;
    state[1] = internal.initial_H_m;
    state[2] = internal.initial_L_c;
    state[3] = internal.initial_H_c;
    state[4] = internal.initial_L_n;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["B_T", "D", "H_c_init", "H_m_init", "k_0_m", "k_b", "k_c_c", "k_c_m", "k_d", "k_e", "k_i", "k_o_c", "L_c_init", "L_m_init", "L_n_init", "v_1", "v_2", "V_c", "V_m", "V_n"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "B_T", internal, 28.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_0_m", internal, 0.028899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_b", internal, 0.00085340999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_c_c", internal, 0.18637000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_c_m", internal, 0.000106, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_d", internal, 4.4489000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e", internal, 1.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 0.00030899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_o_c", internal, 0.026553, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_1", internal, 6.0313630880579003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_2", internal, 0.39324487334137498, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_c", internal, 829, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_m", internal, 2000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_n", internal, 326, -Infinity, Infinity, false);
    internal.initial_H_c = internal.H_c_init;
    internal.initial_H_m = internal.H_m_init;
    internal.initial_L_c = internal.L_c_init;
    internal.initial_L_m = internal.L_m_init;
    internal.initial_L_n = internal.L_n_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L_m = state[0];
    const H_m = state[1];
    const L_c = state[2];
    const H_c = state[3];
    const L_n = state[4];
    dstatedt[3] = internal.k_o_c * L_c - internal.k_c_c * H_c;
    dstatedt[1] = internal.k_0_m * L_m - internal.k_c_m * H_m;
    dstatedt[2] = internal.k_i * internal.v_1 * L_m - (internal.k_e + internal.k_o_c) * L_c + internal.k_c_c * H_c - internal.k_b * (internal.B_T - L_n) * L_c + internal.v_2 * internal.k_d * L_n;
    dstatedt[0] = - (internal.k_0_m + internal.k_i) * L_m + internal.k_c_m * H_m + internal.k_e * internal.v_1 * L_c;
    dstatedt[4] = internal.k_b * internal.v_2 * (internal.B_T - L_n) * L_c - internal.k_d * L_n;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L_m", "H_m", "L_c", "H_c", "L_n"];
    this.metadata.internalOrder = {B_T: null, D: null, H_c_init: null, H_m_init: null, human_lymphoma_cells: null, initial_H_c: null, initial_H_m: null, initial_L_c: null, initial_L_m: null, initial_L_n: null, k_0_m: null, k_b: null, k_c_c: null, k_c_m: null, k_d: null, k_e: null, k_i: null, k_o_c: null, L_c_init: null, L_m_init: null, L_n_init: null, v_1: null, v_2: null, V_c: null, V_m: null, V_n: null};
    this.metadata.variableOrder = {L_m: null, H_m: null, L_c: null, H_c: null, L_n: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

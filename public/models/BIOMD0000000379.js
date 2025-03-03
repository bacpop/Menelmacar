export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment1 = 1;
    internal.E = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_G_p;
    state[1] = internal.initial_G_t;
    state[2] = internal.initial_I_l;
    state[3] = internal.initial_I_p;
    state[4] = internal.initial_Q_sto1;
    state[5] = internal.initial_Q_gut;
    state[6] = internal.initial_I_1;
    state[7] = internal.initial_I_d;
    state[8] = internal.initial_X;
    state[9] = internal.initial_I_po;
    state[10] = internal.initial_Y;
    state[11] = internal.initial_Q_sto2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "b", "beta", "BW", "d", "D", "f", "G_b", "G_p_init", "G_t_init", "gamma", "HE_b", "I_1_init", "I_b", "I_d_init", "I_l_init", "I_p_init", "I_po_init", "K", "k_1", "k_2", "k_abs", "k_e1", "k_e2", "k_gri", "k_i", "K_m0", "k_max", "k_min", "k_p1", "k_p2", "k_p3", "k_p4", "m_1", "m_2", "m_4", "m_5", "m_6", "p_2U", "part", "Q_gut_init", "Q_sto1_init", "Q_sto2_init", "S_b", "S_b_minus", "U_ii", "V_G", "V_I", "V_m0", "V_mX", "X_init", "Y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.81999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BW", internal, 78, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 78000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_b", internal, 95, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_p_init", internal, 178, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_t_init", internal, 135, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HE_b", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_1_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_b", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_d_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_l_init", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_p_init", internal, 1.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_po_init", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.065000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.079000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_abs", internal, 0.057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e1", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e2", internal, 339, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_gri", internal, 0.055800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 0.0079000000000000008, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m0", internal, 225.59, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_max", internal, 0.055800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_min", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p1", internal, 2.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p2", internal, 0.0020999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p3", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p4", internal, 0.061800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_2", internal, 0.48399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_4", internal, 0.19400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_5", internal, 0.0304, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_6", internal, 0.64710000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2U", internal, 0.033099999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "part", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_gut_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_sto1_init", internal, 78000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_sto2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_b", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_b_minus", internal, - 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_ii", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_G", internal, 1.8799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_I", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_m0", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_mX", internal, 0.047, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    internal.aa = 5 / 2 / (1 - internal.b) / internal.D;
    internal.cc = 5 / 2 / internal.d / internal.D;
    internal.initial_G_p = internal.G_p_init;
    internal.initial_G_t = internal.G_t_init;
    internal.initial_I_1 = internal.I_1_init;
    internal.initial_I_d = internal.I_d_init;
    internal.initial_I_l = internal.I_l_init;
    internal.initial_I_p = internal.I_p_init;
    internal.initial_I_po = internal.I_po_init;
    internal.initial_Q_gut = internal.Q_gut_init;
    internal.initial_Q_sto1 = internal.Q_sto1_init;
    internal.initial_Q_sto2 = internal.Q_sto2_init;
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[9] = 0;
    dstatedt[5] = 0;
    dstatedt[4] = 0;
    dstatedt[11] = 0;
    dstatedt[8] = 0;
    dstatedt[10] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G_p", "G_t", "I_l", "I_p", "Q_sto1", "Q_gut", "I_1", "I_d", "X", "I_po", "Y", "Q_sto2"];
    this.metadata.internalOrder = {aa: null, alpha: null, b: null, beta: null, BW: null, cc: null, Compartment1: null, d: null, D: null, E: null, f: null, G_b: null, G_p_init: null, G_t_init: null, gamma: null, HE_b: null, I_1_init: null, I_b: null, I_d_init: null, I_l_init: null, I_p_init: null, I_po_init: null, initial_G_p: null, initial_G_t: null, initial_I_1: null, initial_I_d: null, initial_I_l: null, initial_I_p: null, initial_I_po: null, initial_Q_gut: null, initial_Q_sto1: null, initial_Q_sto2: null, initial_X: null, initial_Y: null, K: null, k_1: null, k_2: null, k_abs: null, k_e1: null, k_e2: null, k_gri: null, k_i: null, K_m0: null, k_max: null, k_min: null, k_p1: null, k_p2: null, k_p3: null, k_p4: null, m_1: null, m_2: null, m_4: null, m_5: null, m_6: null, p_2U: null, part: null, Q_gut_init: null, Q_sto1_init: null, Q_sto2_init: null, S_b: null, S_b_minus: null, U_ii: null, V_G: null, V_I: null, V_m0: null, V_mX: null, X_init: null, Y_init: null};
    this.metadata.variableOrder = {G_p: null, G_t: null, I_l: null, I_p: null, Q_sto1: null, Q_gut: null, I_1: null, I_d: null, X: null, I_po: null, Y: null, Q_sto2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

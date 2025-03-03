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
    var state = Array(8).fill(0);
    state[0] = internal.initial_C_m;
    state[1] = internal.initial_C_e;
    state[2] = internal.initial_H_m;
    state[3] = internal.initial_H_e;
    state[4] = internal.initial_L;
    state[5] = internal.initial_Inflam;
    state[6] = internal.initial_B;
    state[7] = internal.initial_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_1", "a_2", "a_3", "b", "B_init", "C_e_init", "C_m_init", "d_1", "d_2", "d_3", "d_4", "d_5", "D_init", "H_e_init", "H_m_init", "Inflam_init", "kxk", "L_init", "lxl", "ModelValue_16", "n", "p_0", "p_1", "p_2", "r_1", "r_2", "r_3", "r_4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_1", internal, 3.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_3", internal, 8.0000000000000007e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_e_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_m_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_3", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_4", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_5", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_e_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_m_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inflam_init", internal, 140, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 4800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_16", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_0", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_1", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_C_e = internal.C_e_init;
    internal.initial_C_m = internal.C_m_init;
    internal.initial_D = internal.D_init;
    internal.initial_H_e = internal.H_e_init;
    internal.initial_H_m = internal.H_m_init;
    internal.initial_Inflam = internal.Inflam_init;
    internal.initial_L = internal.L_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C_m = state[0];
    const C_e = state[1];
    const H_m = state[2];
    const H_e = state[3];
    const L = state[4];
    const Inflam = state[5];
    const B = state[6];
    const D = state[7];
    dstatedt[7] = 0;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.r_1 * B * (1 - B / internal.kxk)) - 1 * internal.compartment * (internal.d_1 * B * C_e);
    dstatedt[1] = 0 + 1 * internal.compartment * (Math.pow((2), (internal.n)) * internal.a_1 * B * C_m * (Math.pow((Inflam), (2)) / (Math.pow((Inflam), (2)) + Math.pow((internal.b), (2)))) * (1 + internal.a_2 * H_e)) - 1 * internal.compartment * internal.d_3 * C_e;
    dstatedt[3] = 0 + 1 * internal.compartment * (Math.pow((2), (internal.n)) * internal.a_3 * B * H_m * (Math.pow((Inflam), (2)) / (Math.pow((Inflam), (2)) + Math.pow((internal.b), (2))))) - 1 * internal.compartment * internal.d_4 * H_e;
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.p_1 * B * (C_e + H_e)) - 1 * internal.compartment * internal.d_2 * Inflam - 1 * internal.compartment * (D) + 1 * internal.compartment * (internal.p_0);
    var Total_Lymphocytes = B + C_e + C_m + H_e + H_m + L;
    var Lymphocyte_Term = ((1 - Total_Lymphocytes / internal.ModelValue_16 > 0 ? 1 - Total_Lymphocytes / internal.ModelValue_16 : 0));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r_2 * C_m * Lymphocyte_Term) - 1 * internal.compartment * (internal.a_1 * B * C_m * (1 + internal.a_2 * H_e) * (Math.pow((Inflam), (2)) / (Math.pow((Inflam), (2)) + Math.pow((internal.b), (2)))));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r_3 * H_m * Lymphocyte_Term) - 1 * internal.compartment * (internal.a_3 * B * H_m * (Math.pow((Inflam), (2)) / (Math.pow((Inflam), (2)) + Math.pow((internal.b), (2)))));
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.p_2) + 1 * internal.compartment * (internal.r_4 * L * Lymphocyte_Term) - 1 * internal.compartment * internal.d_5 * L;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C_m", "C_e", "H_m", "H_e", "L", "Inflam", "B", "D"];
    this.metadata.internalOrder = {a_1: null, a_2: null, a_3: null, b: null, B_init: null, C_e_init: null, C_m_init: null, compartment: null, d_1: null, d_2: null, d_3: null, d_4: null, d_5: null, D_init: null, H_e_init: null, H_m_init: null, Inflam_init: null, initial_B: null, initial_C_e: null, initial_C_m: null, initial_D: null, initial_H_e: null, initial_H_m: null, initial_Inflam: null, initial_L: null, kxk: null, L_init: null, lxl: null, ModelValue_16: null, n: null, p_0: null, p_1: null, p_2: null, r_1: null, r_2: null, r_3: null, r_4: null};
    this.metadata.variableOrder = {C_m: null, C_e: null, H_m: null, H_e: null, L: null, Inflam: null, B: null, D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

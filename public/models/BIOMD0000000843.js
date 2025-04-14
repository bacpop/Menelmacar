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
    var state = Array(10).fill(0);
    state[0] = internal.initial_HSP;
    state[1] = internal.initial_HSF;
    state[2] = internal.initial_S;
    state[3] = internal.initial_HSP_HSF;
    state[4] = internal.initial_HSP_S;
    state[5] = internal.initial_HSF_3;
    state[6] = internal.initial_HSE;
    state[7] = internal.initial_HSE_HSF_3;
    state[8] = internal.initial_P;
    state[9] = internal.initial_mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["HSE_HSF_3_init", "HSE_init", "HSE_tot", "HSF_3_init", "HSF_init", "HSF_tot", "HSP_HSF_init", "HSP_init", "HSP_S_init", "I_7_37", "I_7_41", "I_7_42", "I_7_43", "I_7_44", "I_7_45", "I1", "I2", "I3", "k_8_max", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k9", "mRNA_init", "n_V", "P_init", "P_tot", "R_k_8", "S_init", "T", "T_0", "T_05", "T_k_8"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "HSE_HSF_3_init", internal, 4.4839999999999998e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSE_init", internal, 3.9960000000000004e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSE_tot", internal, 3.9999999999999998e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_3_init", internal, 9.0820000000000005e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_init", internal, 0.0013630000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_tot", internal, 0.015679999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSP_HSF_init", internal, 0.014290000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSP_init", internal, 52.060000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSP_S_init", internal, 0.00052680000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_37", internal, 47.68, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_41", internal, 1.2330000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_42", internal, 0.66279999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_43", internal, 0.016389999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_44", internal, 50.009999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_7_45", internal, 84.269999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I1", internal, 0.0030279999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2", internal, 1.1619999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I3", internal, 2.3919999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_8_max", internal, 96.069999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 12.6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.098129999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.218, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 446500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 18.850000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00087089999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.08899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 5892, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.0018879999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNA_init", internal, 0.00049459999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_V", internal, 6.5220000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_tot", internal, 1297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_k_8", internal, 15.93, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 8.1219999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 42, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_0", internal, 35.810000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_05", internal, 47.130000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_k_8", internal, 42.890000000000001, -Infinity, Infinity, false);
    internal.initial_HSE = internal.HSE_init;
    internal.initial_HSE_HSF_3 = internal.HSE_HSF_3_init;
    internal.initial_HSF = internal.HSF_init;
    internal.initial_HSF_3 = internal.HSF_3_init;
    internal.initial_HSP = internal.HSP_init;
    internal.initial_HSP_HSF = internal.HSP_HSF_init;
    internal.initial_HSP_S = internal.HSP_S_init;
    internal.initial_mRNA = internal.mRNA_init;
    internal.initial_P = internal.P_init;
    internal.initial_S = internal.S_init;
    internal.ModelValue_13 = internal.I_7_42;
    internal.ModelValue_19 = internal.k_8_max;
    internal.ModelValue_20 = internal.R_k_8;
    internal.ModelValue_21 = internal.T_k_8;
    internal.ModelValue_23 = internal.k10;
    internal.ModelValue_27 = internal.n_V;
    internal.I_7_T = internal.ModelValue_13;
    internal.k_8_T = internal.ModelValue_19 * (1 - 1 / (1 + Math.exp(- internal.ModelValue_20 * (internal.T - internal.ModelValue_21))));
    internal.V_den_T = 1 - Math.pow((1 + Math.pow(((internal.T - internal.T_0) / (internal.T_05 - internal.T_0)), (internal.ModelValue_27))), (- 1));
    internal.k_11_T = internal.ModelValue_23 * (internal.V_den_T / (1 - internal.V_den_T));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const HSP = state[0];
    const HSF = state[1];
    const S = state[2];
    const HSP_HSF = state[3];
    const HSP_S = state[4];
    const HSF_3 = state[5];
    const HSE = state[6];
    const HSE_HSF_3 = state[7];
    const P = state[8];
    const mRNA = state[9];
    dstatedt[1] = 0 + 2 * internal.compartment * internal.I3 * HSP * HSF_3 - 1 * internal.compartment * internal.k2 * HSF * HSP + 1 * internal.compartment * internal.I2 * HSP_HSF - 3 * internal.compartment * (internal.k3 * Math.pow((HSF), (3)));
    dstatedt[0] = 0 - 1 * internal.compartment * internal.I3 * HSP * HSF_3 - 1 * internal.compartment * internal.k1 * HSP * S + 1 * internal.compartment * internal.I1 * HSP_S - 1 * internal.compartment * internal.k2 * HSF * HSP + 1 * internal.compartment * internal.I2 * HSP_HSF - 1 * internal.compartment * internal.k9 * HSP + 1 * internal.compartment * internal.k10 * HSP_S + 1 * internal.compartment * (internal.k4 * mRNA) + 1 * internal.compartment * (internal.k6);
    dstatedt[3] = 0 + 1 * internal.compartment * internal.I3 * HSP * HSF_3 + 1 * internal.compartment * internal.k2 * HSF * HSP - 1 * internal.compartment * internal.I2 * HSP_HSF;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k1 * HSP * S - 1 * internal.compartment * internal.I1 * HSP_S - 1 * internal.compartment * internal.k10 * HSP_S;
    dstatedt[6] = 0 - 1 * internal.compartment * internal.k7 * HSE * HSF_3 + 1 * internal.compartment * internal.I_7_T * HSE_HSF_3;
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k7 * HSE * HSF_3 - 1 * internal.compartment * internal.I_7_T * HSE_HSF_3;
    dstatedt[5] = 0 - 1 * internal.compartment * internal.I3 * HSP * HSF_3 + 1 * internal.compartment * (internal.k3 * Math.pow((HSF), (3))) - 1 * internal.compartment * internal.k7 * HSE * HSF_3 + 1 * internal.compartment * internal.I_7_T * HSE_HSF_3;
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.k_8_T * HSE_HSF_3) - 1 * internal.compartment * internal.k5 * mRNA;
    dstatedt[8] = 0 + 1 * internal.compartment * internal.k10 * HSP_S - 1 * internal.compartment * internal.k_11_T * P;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k1 * HSP * S + 1 * internal.compartment * internal.I1 * HSP_S + 1 * internal.compartment * internal.k_11_T * P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "HSP", "HSF", "S", "HSP_HSF", "HSP_S", "HSF_3", "HSE", "HSE_HSF_3", "P", "mRNA"];
    this.metadata.internalOrder = {compartment: null, HSE_HSF_3_init: null, HSE_init: null, HSE_tot: null, HSF_3_init: null, HSF_init: null, HSF_tot: null, HSP_HSF_init: null, HSP_init: null, HSP_S_init: null, I_7_37: null, I_7_41: null, I_7_42: null, I_7_43: null, I_7_44: null, I_7_45: null, I_7_T: null, I1: null, I2: null, I3: null, initial_HSE: null, initial_HSE_HSF_3: null, initial_HSF: null, initial_HSF_3: null, initial_HSP: null, initial_HSP_HSF: null, initial_HSP_S: null, initial_mRNA: null, initial_P: null, initial_S: null, k_11_T: null, k_8_max: null, k_8_T: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k9: null, ModelValue_13: null, ModelValue_19: null, ModelValue_20: null, ModelValue_21: null, ModelValue_23: null, ModelValue_27: null, mRNA_init: null, n_V: null, P_init: null, P_tot: null, R_k_8: null, S_init: null, T: null, T_0: null, T_05: null, T_k_8: null, V_den_T: null};
    this.metadata.variableOrder = {HSP: null, HSF: null, S: null, HSP_HSF: null, HSP_S: null, HSF_3: null, HSE: null, HSE_HSF_3: null, P: null, mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

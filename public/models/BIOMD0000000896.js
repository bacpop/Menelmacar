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
    var state = Array(9).fill(0);
    state[0] = internal.initial_Hsp70;
    state[1] = internal.initial_HSF;
    state[2] = internal.initial_S;
    state[3] = internal.initial_Hsp70_HSF;
    state[4] = internal.initial_Hsp70_S;
    state[5] = internal.initial_HSF_3;
    state[6] = internal.initial_HSE;
    state[7] = internal.initial_HSF_3_HSE;
    state[8] = internal.initial_mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["F_T_Scale", "HSE_init", "HSF_3_HSE_init", "HSF_3_init", "HSF_init", "Hsp70_HSF_init", "Hsp70_init", "Hsp70_S_init", "k_1", "k_10", "k_2", "k_3", "k_4", "k_6", "k_7", "k_8", "l_1", "l_10", "l_2", "l_3", "l_6", "l_7", "mRNA_init", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "F_T_Scale", internal, 5.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_3_HSE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hsp70_HSF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hsp70_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hsp70_S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_10", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_6", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_7", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_8", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_10", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_2", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_3", internal, 0.0057499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_6", internal, 0.00036000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_7", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_HSE = internal.HSE_init;
    internal.initial_HSF = internal.HSF_init;
    internal.initial_HSF_3 = internal.HSF_3_init;
    internal.initial_HSF_3_HSE = internal.HSF_3_HSE_init;
    internal.initial_Hsp70 = internal.Hsp70_init;
    internal.initial_Hsp70_HSF = internal.Hsp70_HSF_init;
    internal.initial_Hsp70_S = internal.Hsp70_S_init;
    internal.initial_mRNA = internal.mRNA_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Hsp70 = state[0];
    const HSF = state[1];
    const S = state[2];
    const Hsp70_HSF = state[3];
    const Hsp70_S = state[4];
    const HSF_3 = state[5];
    const HSE = state[6];
    const HSF_3_HSE = state[7];
    const mRNA = state[8];
    dstatedt[6] = 0 - 1 * internal.compartment * internal.k_7 * HSF_3 * HSE + 1 * internal.compartment * internal.l_7 * HSF_3_HSE;
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k_1 * Hsp70 * HSF + 1 * internal.compartment * internal.l_1 * Hsp70_HSF - 3 * internal.compartment * (internal.k_3 * Math.pow((HSF), (3))) + 2 * internal.compartment * internal.l_3 * HSF_3 * Hsp70 + 1 * internal.compartment * internal.k_6 * S * Hsp70_HSF - 1 * internal.compartment * internal.l_6 * Hsp70_S * HSF;
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k_3 * Math.pow((HSF), (3))) - 1 * internal.compartment * internal.l_3 * HSF_3 * Hsp70 - 1 * internal.compartment * internal.k_7 * HSF_3 * HSE + 1 * internal.compartment * internal.l_7 * HSF_3_HSE;
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k_7 * HSF_3 * HSE - 1 * internal.compartment * internal.l_7 * HSF_3_HSE;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k_1 * Hsp70 * HSF + 1 * internal.compartment * internal.l_1 * Hsp70_HSF - 1 * internal.compartment * internal.k_2 * Hsp70 * S + 1 * internal.compartment * internal.l_2 * Hsp70_S - 1 * internal.compartment * internal.l_3 * HSF_3 * Hsp70 + 1 * internal.compartment * internal.k_4 * mRNA + 1 * internal.compartment * internal.k_10 * Hsp70_S - 1 * internal.compartment * internal.l_10 * Hsp70;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k_1 * Hsp70 * HSF - 1 * internal.compartment * internal.l_1 * Hsp70_HSF + 1 * internal.compartment * internal.l_3 * HSF_3 * Hsp70 - 1 * internal.compartment * internal.k_6 * S * Hsp70_HSF + 1 * internal.compartment * internal.l_6 * Hsp70_S * HSF;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k_2 * Hsp70 * S - 1 * internal.compartment * internal.l_2 * Hsp70_S - 1 * internal.compartment * internal.k_10 * Hsp70_S + 1 * internal.compartment * internal.k_6 * S * Hsp70_HSF - 1 * internal.compartment * internal.l_6 * Hsp70_S * HSF;
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k_4 * mRNA + 1 * internal.compartment * (internal.k_8 * HSF_3_HSE);
    var Temperature = ((t <= 10 ? 37 : 42));
    var V_den = (1 - 0.40000000000000002 / Math.exp(Temperature - 37)) * 0.029999999999999999 * Math.pow((1.3999999999999999), (Temperature - 37));
    var F_T = V_den * internal.F_T_Scale;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k_2 * Hsp70 * S + 1 * internal.compartment * internal.l_2 * Hsp70_S - 1 * internal.compartment * internal.k_6 * S * Hsp70_HSF + 1 * internal.compartment * internal.l_6 * Hsp70_S * HSF + 1 * internal.compartment * (F_T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Hsp70", "HSF", "S", "Hsp70_HSF", "Hsp70_S", "HSF_3", "HSE", "HSF_3_HSE", "mRNA"];
    this.metadata.internalOrder = {compartment: null, F_T_Scale: null, HSE_init: null, HSF_3_HSE_init: null, HSF_3_init: null, HSF_init: null, Hsp70_HSF_init: null, Hsp70_init: null, Hsp70_S_init: null, initial_HSE: null, initial_HSF: null, initial_HSF_3: null, initial_HSF_3_HSE: null, initial_Hsp70: null, initial_Hsp70_HSF: null, initial_Hsp70_S: null, initial_mRNA: null, initial_S: null, k_1: null, k_10: null, k_2: null, k_3: null, k_4: null, k_6: null, k_7: null, k_8: null, l_1: null, l_10: null, l_2: null, l_3: null, l_6: null, l_7: null, mRNA_init: null, S_init: null};
    this.metadata.variableOrder = {Hsp70: null, HSF: null, S: null, Hsp70_HSF: null, Hsp70_S: null, HSF_3: null, HSE: null, HSF_3_HSE: null, mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

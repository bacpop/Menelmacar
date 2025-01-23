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
    state[0] = internal.initial_BMAL1;
    state[1] = internal.initial_ROR;
    state[2] = internal.initial_REV;
    state[3] = internal.initial_DBP;
    state[4] = internal.initial_E4BP4;
    state[5] = internal.initial_CRY;
    state[6] = internal.initial_PER;
    state[7] = internal.initial_PERCRY;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["BMAL1_init", "CRY_init", "DBP_init", "E4BP4_init", "gamma_bp", "gamma_c", "gamma_cp", "gamma_db", "gamma_E4", "gamma_p", "gamma_pc", "gamma_rev", "gamma_ror", "k_D", "k_D_r", "k_E", "k_E_r", "k_R", "k_R_r", "ModelValue_0", "ModelValue_1", "ModelValue_2", "ModelValue_3", "ModelValue_4", "ModelValue_5", "ModelValue_6", "ModelValue_8", "PER_init", "PERCRY_init", "REV_init", "ROR_init", "V_D", "V_E", "V_R"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "BMAL1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CRY_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4BP4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_bp", internal, 2.5800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_c", internal, 2.3399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_cp", internal, 0.14099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_db", internal, 0.156, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_E4", internal, 0.29499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_p", internal, 0.84399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_pc", internal, 0.191, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_rev", internal, 0.24099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_ror", internal, 2.5499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_D", internal, 5.3200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_D_r", internal, 94.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_E", internal, 214, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_E_r", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_R", internal, 3.54, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_R_r", internal, 80.099999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 44.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 3.54, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 80.099999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 30.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_4", internal, 214, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_5", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_6", internal, 202, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_8", internal, 94.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PERCRY_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "REV_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ROR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_D", internal, 202, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_E", internal, 30.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_R", internal, 44.399999999999999, -Infinity, Infinity, false);
    internal.initial_BMAL1 = internal.BMAL1_init;
    internal.initial_CRY = internal.CRY_init;
    internal.initial_DBP = internal.DBP_init;
    internal.initial_E4BP4 = internal.E4BP4_init;
    internal.initial_PER = internal.PER_init;
    internal.initial_PERCRY = internal.PERCRY_init;
    internal.initial_REV = internal.REV_init;
    internal.initial_ROR = internal.ROR_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const BMAL1 = state[0];
    const ROR = state[1];
    const REV = state[2];
    const DBP = state[3];
    const E4BP4 = state[4];
    const CRY = state[5];
    const PER = state[6];
    const PERCRY = state[7];
    var D_box = internal.ModelValue_6 * (DBP / (DBP + internal.k_D)) * (internal.ModelValue_8 / (internal.ModelValue_8 + E4BP4));
    dstatedt[7] = 0 + 1 * internal.compartment * internal.gamma_pc * PER * CRY - 1 * internal.compartment * internal.gamma_cp * PERCRY - 1 * internal.compartment * (internal.gamma_bp * BMAL1 * PERCRY);
    var E_box = internal.ModelValue_3 * BMAL1 / (BMAL1 + internal.ModelValue_4 + internal.ModelValue_5 * BMAL1 * CRY);
    var R_box = internal.ModelValue_0 * (ROR / (ROR + internal.ModelValue_1)) * (Math.pow((internal.ModelValue_2), (2)) / (Math.pow((internal.ModelValue_2), (2)) + Math.pow((REV), (2))));
    dstatedt[0] = 0 + 1 * internal.compartment * (R_box) - 1 * internal.compartment * (internal.gamma_bp * BMAL1 * PERCRY);
    dstatedt[5] = 0 + 1 * internal.compartment * (2 * R_box) + 1 * internal.compartment * (E_box) - 1 * internal.compartment * internal.gamma_pc * PER * CRY + 1 * internal.compartment * internal.gamma_cp * PERCRY - 1 * internal.compartment * internal.gamma_c * CRY;
    dstatedt[3] = 0 + 1 * internal.compartment * (E_box) - 1 * internal.compartment * internal.gamma_db * DBP;
    dstatedt[4] = 0 + 1 * internal.compartment * (2 * R_box) - 1 * internal.compartment * internal.gamma_E4 * E4BP4;
    dstatedt[6] = 0 - 1 * internal.compartment * internal.gamma_pc * PER * CRY + 1 * internal.compartment * internal.gamma_cp * PERCRY + 1 * internal.compartment * (E_box) + 1 * internal.compartment * (D_box) - 1 * internal.compartment * internal.gamma_p * PER;
    dstatedt[2] = 0 + 1 * internal.compartment * (2 * E_box) + 1 * internal.compartment * (D_box) - 1 * internal.compartment * internal.gamma_rev * REV;
    dstatedt[1] = 0 + 1 * internal.compartment * (E_box) + 1 * internal.compartment * (R_box) - 1 * internal.compartment * internal.gamma_ror * ROR;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "BMAL1", "ROR", "REV", "DBP", "E4BP4", "CRY", "PER", "PERCRY"];
    this.metadata.internalOrder = {BMAL1_init: null, compartment: null, CRY_init: null, DBP_init: null, E4BP4_init: null, gamma_bp: null, gamma_c: null, gamma_cp: null, gamma_db: null, gamma_E4: null, gamma_p: null, gamma_pc: null, gamma_rev: null, gamma_ror: null, initial_BMAL1: null, initial_CRY: null, initial_DBP: null, initial_E4BP4: null, initial_PER: null, initial_PERCRY: null, initial_REV: null, initial_ROR: null, k_D: null, k_D_r: null, k_E: null, k_E_r: null, k_R: null, k_R_r: null, ModelValue_0: null, ModelValue_1: null, ModelValue_2: null, ModelValue_3: null, ModelValue_4: null, ModelValue_5: null, ModelValue_6: null, ModelValue_8: null, PER_init: null, PERCRY_init: null, REV_init: null, ROR_init: null, V_D: null, V_E: null, V_R: null};
    this.metadata.variableOrder = {BMAL1: null, ROR: null, REV: null, DBP: null, E4BP4: null, CRY: null, PER: null, PERCRY: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

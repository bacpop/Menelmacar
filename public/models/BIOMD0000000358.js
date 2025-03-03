export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_Xa;
    state[2] = internal.initial_Xa_ATIII;
    state[3] = internal.initial_PL;
    state[4] = internal.initial_PT;
    state[5] = internal.initial_Va;
    state[6] = internal.initial_IIa;
    state[7] = internal.initial_V;
    state[8] = internal.initial_II;
    state[9] = internal.initial_IIa_alpha2M;
    state[10] = internal.initial_IIa_ATIII;
    state[11] = internal.initial_RVV;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["II_init", "IIa_alpha2M_init", "IIa_ATIII_init", "IIa_init", "k_PL", "k_PT", "kcat_2", "kcat_II", "kcat_V", "kcat_X", "ki_IIaAlpha2M", "ki_IIaATIII", "ki_Xa", "km_2", "km_II", "km_V", "km_X", "PL_init", "PT_init", "RVV_init", "V_init", "Va_init", "X_init", "Xa_ATIII_init", "Xa_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "II_init", internal, 509.2998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_alpha2M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_PL", internal, 801.39999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_PT", internal, 122.90000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_2", internal, 12.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_II", internal, 43.869999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_V", internal, 7.8440000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_X", internal, 239.09999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_IIaAlpha2M", internal, 0.1762, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_IIaATIII", internal, 0.78590000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_Xa", internal, 4.5309999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km_2", internal, 0.06148, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km_II", internal, 62.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km_V", internal, 149.69999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km_X", internal, 23.649999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PL_init", internal, 9.9999970000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RVV_init", internal, 0.33499990000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 6.7119980000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 81.249979999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_II = internal.II_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_IIa_alpha2M = internal.IIa_alpha2M_init;
    internal.initial_IIa_ATIII = internal.IIa_ATIII_init;
    internal.initial_PL = internal.PL_init;
    internal.initial_PT = internal.PT_init;
    internal.initial_RVV = internal.RVV_init;
    internal.initial_V = internal.V_init;
    internal.initial_Va = internal.Va_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xa_ATIII = internal.Xa_ATIII_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    const Xa = state[1];
    const PL = state[3];
    const PT = state[4];
    const Va = state[5];
    const IIa = state[6];
    const V = state[7];
    const II = state[8];
    const RVV = state[11];
    dstatedt[11] = 0;
    dstatedt[8] = 0 - 1 * internal.compartment_1 * (internal.kcat_II * PT * II / (internal.km_II + II)) - 1 * internal.compartment_1 * (internal.kcat_2 * Xa * II / (internal.km_2 + II));
    dstatedt[6] = 0 + 1 * internal.compartment_1 * (internal.kcat_II * PT * II / (internal.km_II + II)) + 1 * internal.compartment_1 * (internal.kcat_2 * Xa * II / (internal.km_2 + II)) - 1 * internal.compartment_1 * internal.ki_IIaAlpha2M * IIa - 1 * internal.compartment_1 * internal.ki_IIaATIII * IIa;
    dstatedt[9] = 0 + 1 * internal.compartment_1 * internal.ki_IIaAlpha2M * IIa;
    dstatedt[10] = 0 + 1 * internal.compartment_1 * internal.ki_IIaATIII * IIa;
    dstatedt[3] = 0 - 1 * internal.compartment_1 * (internal.k_PT * Va * Xa * PL - internal.k_PL * PT);
    dstatedt[4] = 0 + 1 * internal.compartment_1 * (internal.k_PT * Va * Xa * PL - internal.k_PL * PT);
    dstatedt[7] = 0 - 1 * internal.compartment_1 * (internal.kcat_V * IIa * V / (internal.km_V + V));
    dstatedt[5] = 0 - 1 * internal.compartment_1 * (internal.k_PT * Va * Xa * PL - internal.k_PL * PT) + 1 * internal.compartment_1 * (internal.kcat_V * IIa * V / (internal.km_V + V));
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.kcat_X * RVV * X / (internal.km_X + X));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.kcat_X * RVV * X / (internal.km_X + X)) - 1 * internal.compartment_1 * internal.ki_Xa * Xa - 1 * internal.compartment_1 * (internal.k_PT * Va * Xa * PL - internal.k_PL * PT);
    dstatedt[2] = 0 + 1 * internal.compartment_1 * internal.ki_Xa * Xa;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "Xa", "Xa_ATIII", "PL", "PT", "Va", "IIa", "V", "II", "IIa_alpha2M", "IIa_ATIII", "RVV"];
    this.metadata.internalOrder = {compartment_1: null, II_init: null, IIa_alpha2M_init: null, IIa_ATIII_init: null, IIa_init: null, initial_II: null, initial_IIa: null, initial_IIa_alpha2M: null, initial_IIa_ATIII: null, initial_PL: null, initial_PT: null, initial_RVV: null, initial_V: null, initial_Va: null, initial_X: null, initial_Xa: null, initial_Xa_ATIII: null, k_PL: null, k_PT: null, kcat_2: null, kcat_II: null, kcat_V: null, kcat_X: null, ki_IIaAlpha2M: null, ki_IIaATIII: null, ki_Xa: null, km_2: null, km_II: null, km_V: null, km_X: null, PL_init: null, PT_init: null, RVV_init: null, V_init: null, Va_init: null, X_init: null, Xa_ATIII_init: null, Xa_init: null};
    this.metadata.variableOrder = {X: null, Xa: null, Xa_ATIII: null, PL: null, PT: null, Va: null, IIa: null, V: null, II: null, IIa_alpha2M: null, IIa_ATIII: null, RVV: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    var state = Array(14).fill(0);
    state[0] = internal.initial_Factor_Xa;
    state[1] = internal.initial_Thrombin__IIa;
    state[2] = internal.initial_Factor_V;
    state[3] = internal.initial_Factor_Va;
    state[4] = internal.initial_APC;
    state[5] = internal.initial_VInactive;
    state[6] = internal.initial_Prothrombinase__Va_Xa;
    state[7] = internal.initial_Prothrombin__II;
    state[8] = internal.initial_Protein_C;
    state[9] = internal.initial_Inactive_protein_C;
    state[10] = internal.initial_Fibrin;
    state[11] = internal.initial_Fibrinogen;
    state[12] = internal.initial_Inactive_Thrombin;
    state[13] = internal.initial_Factor_Xi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APC_init", "Factor_V_init", "Factor_Va_init", "Factor_Xa_init", "Factor_Xi_init", "Fibrin_init", "Fibrinogen_init", "gamma1a", "Ib", "Inactive_protein_C_init", "Inactive_Thrombin_init", "Ix", "k1a", "k1b", "k2a", "k2am", "k2b", "k3a", "k3b", "k3c", "k4a", "k4b", "k4bm", "k5a", "k5b", "k6", "kb", "kx", "Protein_C_init", "Prothrombin__II_init", "Prothrombinase__Va_Xa_init", "q3a", "q4a", "Thrombin__IIa_init", "VInactive_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_V_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_Va_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_Xi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fibrin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fibrinogen_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma1a", internal, 0.77000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ib", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inactive_protein_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inactive_Thrombin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ix", internal, 7.6900000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1a", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1b", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2a", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2am", internal, 7.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2b", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3a", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3b", internal, 0.037999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3c", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4a", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4b", internal, 530, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4bm", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5a", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5b", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kx", internal, 385, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Protein_C_init", internal, 92, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Prothrombin__II_init", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Prothrombinase__Va_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q3a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q4a", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thrombin__IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VInactive_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_APC = internal.APC_init;
    internal.initial_Factor_V = internal.Factor_V_init;
    internal.initial_Factor_Va = internal.Factor_Va_init;
    internal.initial_Factor_Xa = internal.Factor_Xa_init;
    internal.initial_Factor_Xi = internal.Factor_Xi_init;
    internal.initial_Fibrin = internal.Fibrin_init;
    internal.initial_Fibrinogen = internal.Fibrinogen_init;
    internal.initial_Inactive_protein_C = internal.Inactive_protein_C_init;
    internal.initial_Inactive_Thrombin = internal.Inactive_Thrombin_init;
    internal.initial_Protein_C = internal.Protein_C_init;
    internal.initial_Prothrombin__II = internal.Prothrombin__II_init;
    internal.initial_Prothrombinase__Va_Xa = internal.Prothrombinase__Va_Xa_init;
    internal.initial_Thrombin__IIa = internal.Thrombin__IIa_init;
    internal.initial_VInactive = internal.VInactive_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Factor_Xa = state[0];
    const Thrombin__IIa = state[1];
    const Factor_V = state[2];
    const Factor_Va = state[3];
    const APC = state[4];
    const Prothrombinase__Va_Xa = state[6];
    const Prothrombin__II = state[7];
    const Protein_C = state[8];
    const Fibrinogen = state[11];
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k5a * Protein_C - 1 * internal.compartment * internal.k5b * APC;
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k2a * Thrombin__IIa * Factor_V / (Factor_V + internal.k2a * internal.k2am * (1 + Fibrinogen)) + internal.k2a * internal.k2b * Factor_Xa * Factor_V / (Factor_V + 1 + Prothrombinase__Va_Xa));
    dstatedt[3] = 0 + 1 * internal.compartment * (Thrombin__IIa * Factor_V / (Factor_V + internal.k2am * (1 + Fibrinogen)) + internal.k2b * Factor_Xa * Factor_V / (Factor_V + 1 + Prothrombin__II) + internal.k3b / internal.q3a * Prothrombinase__Va_Xa - Factor_Xa * Factor_Va) - 1 * internal.compartment * (APC * Factor_Va / (Factor_Va + 1));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k1a * internal.gamma1a * Math.exp(- internal.gamma1a * t)) - 1 * internal.compartment * internal.k1b * Factor_Xa - 1 * internal.compartment * (internal.k3a * Factor_Xa * Factor_Va - internal.k3c * internal.k3a * APC * Prothrombinase__Va_Xa / (Prothrombinase__Va_Xa + 1));
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.k1b * Factor_Xa + internal.k2a * internal.k3b / internal.q3a * Prothrombinase__Va_Xa);
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k6 * Fibrinogen;
    dstatedt[11] = 0 - 1 * internal.compartment * internal.k6 * Fibrinogen;
    dstatedt[9] = 0 + 1 * internal.compartment * internal.k5b * APC;
    dstatedt[12] = 0 + 1 * internal.compartment * (Thrombin__IIa);
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k5a * Protein_C;
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.k3b * Prothrombinase__Va_Xa - internal.q3a * Factor_Xa * Factor_Va) - 1 * internal.compartment * (internal.k3c * internal.q3a * APC * Prothrombinase__Va_Xa / (Prothrombinase__Va_Xa + 1));
    dstatedt[5] = 0 + 1 * internal.compartment * (APC * Factor_Va / (Factor_Va + 1)) + 1 * internal.compartment * (internal.k3c * internal.q3a * APC * Prothrombinase__Va_Xa / (Prothrombinase__Va_Xa + 1));
    var Va_Xa_L = 0.5 * (internal.kb + internal.Ib + Prothrombinase__Va_Xa - Math.pow((Math.pow((internal.kb + internal.Ib + Prothrombinase__Va_Xa), (2)) - 4 * internal.Ib * Prothrombinase__Va_Xa), (1 / 2)));
    var Xa_L = 0.5 * (internal.kx + internal.Ix + Factor_Xa - Math.pow((Math.pow((internal.kx + internal.Ix + Factor_Xa), (2)) - 4 * internal.Ix * Factor_Xa), (1 / 2)));
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.q4a * Xa_L * Prothrombin__II / (Factor_V + 1 + Prothrombin__II)) - 1 * internal.compartment * (internal.k4b * Va_Xa_L * Prothrombin__II / (Prothrombin__II + internal.k4bm));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.q4a * Xa_L * Prothrombin__II / (Factor_V + 1 + Prothrombin__II)) - 1 * internal.compartment * (Thrombin__IIa) + 1 * internal.compartment * (internal.q4a * internal.k4b * Va_Xa_L * Prothrombin__II / (internal.q4a * (Prothrombin__II + internal.k4bm)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Factor_Xa", "Thrombin__IIa", "Factor_V", "Factor_Va", "APC", "VInactive", "Prothrombinase__Va_Xa", "Prothrombin__II", "Protein_C", "Inactive_protein_C", "Fibrin", "Fibrinogen", "Inactive_Thrombin", "Factor_Xi"];
    this.metadata.internalOrder = {APC_init: null, compartment: null, Factor_V_init: null, Factor_Va_init: null, Factor_Xa_init: null, Factor_Xi_init: null, Fibrin_init: null, Fibrinogen_init: null, gamma1a: null, Ib: null, Inactive_protein_C_init: null, Inactive_Thrombin_init: null, initial_APC: null, initial_Factor_V: null, initial_Factor_Va: null, initial_Factor_Xa: null, initial_Factor_Xi: null, initial_Fibrin: null, initial_Fibrinogen: null, initial_Inactive_protein_C: null, initial_Inactive_Thrombin: null, initial_Protein_C: null, initial_Prothrombin__II: null, initial_Prothrombinase__Va_Xa: null, initial_Thrombin__IIa: null, initial_VInactive: null, Ix: null, k1a: null, k1b: null, k2a: null, k2am: null, k2b: null, k3a: null, k3b: null, k3c: null, k4a: null, k4b: null, k4bm: null, k5a: null, k5b: null, k6: null, kb: null, kx: null, Protein_C_init: null, Prothrombin__II_init: null, Prothrombinase__Va_Xa_init: null, q3a: null, q4a: null, Thrombin__IIa_init: null, VInactive_init: null};
    this.metadata.variableOrder = {Factor_Xa: null, Thrombin__IIa: null, Factor_V: null, Factor_Va: null, APC: null, VInactive: null, Prothrombinase__Va_Xa: null, Prothrombin__II: null, Protein_C: null, Inactive_protein_C: null, Fibrin: null, Fibrinogen: null, Inactive_Thrombin: null, Factor_Xi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

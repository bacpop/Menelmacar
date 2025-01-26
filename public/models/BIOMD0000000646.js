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
    var Cdh1dp_init = internal.initial_Cdh1 + internal.initial_Emi1Cdh1;
    var Cdh1T_init = internal.initial_Cdh1 + internal.initial_Cdh1p + internal.initial_Emi1Cdh1 + internal.initial_Emi1Cdh1p;
    var CycAT_init = internal.initial_CycA + internal.initial_CycAp27;
    var CycET_init = internal.initial_CycE + internal.initial_CycEp27;
    var Emi1T_init = internal.initial_Emi1 + internal.initial_Emi1Cdh1 + internal.initial_Emi1Cdh1p;
    var EmiC_init = internal.initial_Emi1Cdh1 + internal.initial_Emi1Cdh1p;
    var p27T_init = internal.initial_p27 + internal.initial_CycEp27 + internal.initial_CycAp27;
    internal.initial_Cdh1dp = Cdh1dp_init;
    internal.initial_Cdh1T = Cdh1T_init;
    internal.initial_CycAT = CycAT_init;
    internal.initial_CycET = CycET_init;
    internal.initial_Emi1T = Emi1T_init;
    internal.initial_EmiC = EmiC_init;
    internal.initial_p27T = p27T_init;
    var state = Array(18).fill(0);
    state[0] = internal.initial_CycE;
    state[1] = internal.initial_CycA;
    state[2] = internal.initial_CycEp27;
    state[3] = internal.initial_CycAp27;
    state[4] = internal.initial_Skp2;
    state[5] = internal.initial_Cdh1p;
    state[6] = internal.initial_Emi1;
    state[7] = internal.initial_p27;
    state[8] = internal.initial_Cdh1;
    state[9] = internal.initial_CycET;
    state[10] = internal.initial_CycAT;
    state[11] = internal.initial_p27T;
    state[12] = internal.initial_Emi1Cdh1;
    state[13] = internal.initial_Emi1Cdh1p;
    state[14] = internal.initial_EmiC;
    state[15] = internal.initial_Emi1T;
    state[16] = internal.initial_Cdh1dp;
    state[17] = internal.initial_Cdh1T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdh1_init", "Cdh1p_init", "CycA_init", "CycAp27_init", "CycE_init", "CycEp27_init", "Emi1_init", "Emi1Cdh1_init", "Emi1Cdh1p_init", "Inhibitor", "kacdh1", "kasec", "kassa", "kasse", "kd27", "kd27a", "kd27e", "kdcyca", "kdcycac1", "kdcyce", "kdcycea", "kdcycee", "kdemi1", "kdiec", "kdisa", "kdise", "kdskp2", "kdskp2c1", "kicdh1a", "kicdh1e", "ks27", "kscyca", "kscyce", "ksemi1", "ksskp2", "p27_init", "Skp2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdh1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdh1p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycAp27_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycEp27_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Emi1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Emi1Cdh1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Emi1Cdh1p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inhibitor", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kacdh1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kasec", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kassa", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kasse", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd27", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd27a", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd27e", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcyca", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcycac1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcyce", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcycea", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcycee", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdemi1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiec", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdisa", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdise", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdskp2", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdskp2c1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdh1a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdh1e", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks27", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kscyca", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kscyce", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksemi1", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksskp2", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p27_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Skp2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdh1 = internal.Cdh1_init;
    internal.initial_Cdh1p = internal.Cdh1p_init;
    internal.initial_CycA = internal.CycA_init;
    internal.initial_CycAp27 = internal.CycAp27_init;
    internal.initial_CycE = internal.CycE_init;
    internal.initial_CycEp27 = internal.CycEp27_init;
    internal.initial_Emi1 = internal.Emi1_init;
    internal.initial_Emi1Cdh1 = internal.Emi1Cdh1_init;
    internal.initial_Emi1Cdh1p = internal.Emi1Cdh1p_init;
    internal.initial_p27 = internal.p27_init;
    internal.initial_Skp2 = internal.Skp2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CycE = state[0];
    const CycA = state[1];
    const CycEp27 = state[2];
    const CycAp27 = state[3];
    const Skp2 = state[4];
    const Cdh1p = state[5];
    const Emi1 = state[6];
    const p27 = state[7];
    const Cdh1 = state[8];
    const Emi1Cdh1 = state[12];
    const Emi1Cdh1p = state[13];
    dstatedt[16] = 0 + 0;
    dstatedt[17] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[9] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[11] = 0 + 0;
    dstatedt[8] = 0 - 1 * internal.compartment * ((internal.kicdh1e * CycE / (1 + internal.Inhibitor) + internal.kicdh1a * CycA / (1 + internal.Inhibitor)) * Cdh1) + 1 * internal.compartment * internal.kacdh1 * Cdh1p - 1 * internal.compartment * (internal.kasec * Cdh1 * Emi1 - internal.kdiec * Emi1Cdh1) + 1 * internal.compartment * internal.kdemi1 * Emi1Cdh1;
    dstatedt[5] = 0 + 1 * internal.compartment * ((internal.kicdh1e * CycE / (1 + internal.Inhibitor) + internal.kicdh1a * CycA / (1 + internal.Inhibitor)) * Cdh1) - 1 * internal.compartment * internal.kacdh1 * Cdh1p - 1 * internal.compartment * (internal.kasec * Cdh1p * Emi1 - internal.kdiec * Emi1Cdh1p) + 1 * internal.compartment * internal.kdemi1 * Emi1Cdh1p;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.kscyca) - 1 * internal.compartment * ((internal.kdcyca + internal.kdcycac1 * Cdh1) * CycA) - 1 * internal.compartment * (internal.kassa * CycA * p27 - internal.kdisa * CycAp27) + 1 * internal.compartment * (((internal.kd27e * CycE / (1 + internal.Inhibitor) + internal.kd27a * CycA / (1 + internal.Inhibitor)) * Skp2 + internal.kd27) * CycAp27);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.kassa * CycA * p27 - internal.kdisa * CycAp27) - 1 * internal.compartment * ((internal.kdcyca + internal.kdcycac1 * Cdh1) * CycAp27) - 1 * internal.compartment * (((internal.kd27e * CycE / (1 + internal.Inhibitor) + internal.kd27a * CycA / (1 + internal.Inhibitor)) * Skp2 + internal.kd27) * CycAp27);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.kscyce) - 1 * internal.compartment * ((internal.kdcyce + internal.kdcycee * CycE / (1 + internal.Inhibitor) + internal.kdcycea * CycA / (1 + internal.Inhibitor)) * CycE) - 1 * internal.compartment * (internal.kasse * CycE * p27 - internal.kdise * CycEp27) + 1 * internal.compartment * (((internal.kd27e * CycE / (1 + internal.Inhibitor) + internal.kd27a * CycA / (1 + internal.Inhibitor)) * Skp2 + internal.kd27) * CycEp27);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kasse * CycE * p27 - internal.kdise * CycEp27) - 1 * internal.compartment * ((internal.kdcyce + internal.kdcycee * CycE / (1 + internal.Inhibitor) + internal.kdcycea * CycA / (1 + internal.Inhibitor)) * CycEp27) - 1 * internal.compartment * (((internal.kd27e * CycE / (1 + internal.Inhibitor) + internal.kd27a * CycA / (1 + internal.Inhibitor)) * Skp2 + internal.kd27) * CycEp27);
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.kasec * Cdh1 * Emi1 - internal.kdiec * Emi1Cdh1) + 1 * internal.compartment * (internal.ksemi1) - 1 * internal.compartment * (internal.kasec * Cdh1p * Emi1 - internal.kdiec * Emi1Cdh1p) - 1 * internal.compartment * internal.kdemi1 * Emi1;
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.kasec * Cdh1 * Emi1 - internal.kdiec * Emi1Cdh1) - 1 * internal.compartment * internal.kdemi1 * Emi1Cdh1 - 1 * internal.compartment * ((internal.kicdh1e * CycE / (1 + internal.Inhibitor) + internal.kicdh1a * CycA / (1 + internal.Inhibitor)) * Emi1Cdh1) + 1 * internal.compartment * internal.kacdh1 * Emi1Cdh1p;
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.kasec * Cdh1p * Emi1 - internal.kdiec * Emi1Cdh1p) + 1 * internal.compartment * ((internal.kicdh1e * CycE / (1 + internal.Inhibitor) + internal.kicdh1a * CycA / (1 + internal.Inhibitor)) * Emi1Cdh1) - 1 * internal.compartment * internal.kacdh1 * Emi1Cdh1p - 1 * internal.compartment * internal.kdemi1 * Emi1Cdh1p;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.ks27) - 1 * internal.compartment * (((internal.kd27e * CycE / (1 + internal.Inhibitor) + internal.kd27a * CycA / (1 + internal.Inhibitor)) * Skp2 + internal.kd27) * p27) - 1 * internal.compartment * (internal.kasse * CycE * p27 - internal.kdise * CycEp27) - 1 * internal.compartment * (internal.kassa * CycA * p27 - internal.kdisa * CycAp27) + 1 * internal.compartment * ((internal.kdcyca + internal.kdcycac1 * Cdh1) * CycAp27) + 1 * internal.compartment * ((internal.kdcyce + internal.kdcycee * CycE / (1 + internal.Inhibitor) + internal.kdcycea * CycA / (1 + internal.Inhibitor)) * CycEp27);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.ksskp2) - 1 * internal.compartment * ((internal.kdskp2 + internal.kdskp2c1 * Cdh1) * Skp2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CycE", "CycA", "CycEp27", "CycAp27", "Skp2", "Cdh1p", "Emi1", "p27", "Cdh1", "CycET", "CycAT", "p27T", "Emi1Cdh1", "Emi1Cdh1p", "EmiC", "Emi1T", "Cdh1dp", "Cdh1T"];
    this.metadata.internalOrder = {Cdh1_init: null, Cdh1p_init: null, compartment: null, CycA_init: null, CycAp27_init: null, CycE_init: null, CycEp27_init: null, Emi1_init: null, Emi1Cdh1_init: null, Emi1Cdh1p_init: null, Inhibitor: null, initial_Cdh1: null, initial_Cdh1dp: null, initial_Cdh1p: null, initial_Cdh1T: null, initial_CycA: null, initial_CycAp27: null, initial_CycAT: null, initial_CycE: null, initial_CycEp27: null, initial_CycET: null, initial_Emi1: null, initial_Emi1Cdh1: null, initial_Emi1Cdh1p: null, initial_Emi1T: null, initial_EmiC: null, initial_p27: null, initial_p27T: null, initial_Skp2: null, kacdh1: null, kasec: null, kassa: null, kasse: null, kd27: null, kd27a: null, kd27e: null, kdcyca: null, kdcycac1: null, kdcyce: null, kdcycea: null, kdcycee: null, kdemi1: null, kdiec: null, kdisa: null, kdise: null, kdskp2: null, kdskp2c1: null, kicdh1a: null, kicdh1e: null, ks27: null, kscyca: null, kscyce: null, ksemi1: null, ksskp2: null, p27_init: null, Skp2_init: null};
    this.metadata.variableOrder = {CycE: null, CycA: null, CycEp27: null, CycAp27: null, Skp2: null, Cdh1p: null, Emi1: null, p27: null, Cdh1: null, CycET: null, CycAT: null, p27T: null, Emi1Cdh1: null, Emi1Cdh1p: null, EmiC: null, Emi1T: null, Cdh1dp: null, Cdh1T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

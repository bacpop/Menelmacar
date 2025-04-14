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
    var state = Array(16).fill(0);
    state[0] = internal.initial_Hsp90;
    state[1] = internal.initial_HCom;
    state[2] = internal.initial_HSF1;
    state[3] = internal.initial_MisP;
    state[4] = internal.initial_MCom;
    state[5] = internal.initial_TriH;
    state[6] = internal.initial_DiH;
    state[7] = internal.initial_NatP;
    state[8] = internal.initial_AggP;
    state[9] = internal.initial_HSE;
    state[10] = internal.initial_HSETriH;
    state[11] = internal.initial_X;
    state[12] = internal.initial_ROS;
    state[13] = internal.initial_ATP;
    state[14] = internal.initial_ADP;
    state[15] = internal.initial_source;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "AggP_init", "ATP_init", "DiH_init", "HCom_init", "HSE_init", "HSETriH_init", "HSF1_init", "Hsp90_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k20", "k21", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "MCom_init", "MisP_init", "NatP_init", "ROS_init", "source_init", "TriH_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AggP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DiH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HCom_init", internal, 5900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSE_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSETriH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSF1_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hsp90_init", internal, 300000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 8.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 3.9999999999999998e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 5.9999999999999997e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MCom_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MisP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NatP_init", internal, 6000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ROS_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "source_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TriH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_AggP = internal.AggP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_DiH = internal.DiH_init;
    internal.initial_HCom = internal.HCom_init;
    internal.initial_HSE = internal.HSE_init;
    internal.initial_HSETriH = internal.HSETriH_init;
    internal.initial_HSF1 = internal.HSF1_init;
    internal.initial_Hsp90 = internal.Hsp90_init;
    internal.initial_MCom = internal.MCom_init;
    internal.initial_MisP = internal.MisP_init;
    internal.initial_NatP = internal.NatP_init;
    internal.initial_ROS = internal.ROS_init;
    internal.initial_source = internal.source_init;
    internal.initial_TriH = internal.TriH_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Hsp90 = state[0];
    const HCom = state[1];
    const HSF1 = state[2];
    const MisP = state[3];
    const MCom = state[4];
    const TriH = state[5];
    const DiH = state[6];
    const NatP = state[7];
    const AggP = state[8];
    const HSE = state[9];
    const HSETriH = state[10];
    const ROS = state[12];
    const ATP = state[13];
    const ADP = state[14];
    dstatedt[15] = 0;
    dstatedt[11] = 0 + 1 * 1;
    dstatedt[14] = 0 + 1 * internal.k5 * MCom * ATP + 1 * internal.k6 * MisP * ATP + 1 * internal.k17 * Hsp90 * ATP - 1 * internal.k18 * ADP + 1 * internal.k19 * ATP;
    dstatedt[8] = 0 + 1 * (MisP - 1) * internal.k7 * MisP / 2 - 1 * internal.k7 * MisP * AggP + 2 * internal.k7 * MisP * AggP;
    dstatedt[13] = 0 - 1 * internal.k5 * MCom * ATP - 1 * internal.k6 * MisP * ATP - 1 * internal.k17 * Hsp90 * ATP + 1 * internal.k18 * ADP - 1 * internal.k19 * ATP;
    dstatedt[6] = 0 + 1 * (HSF1 - 1) * internal.k10 * HSF1 / 2 - 1 * internal.k11 * HSF1 * DiH + 1 * internal.k12 * TriH - 1 * internal.k13 * DiH;
    dstatedt[1] = 0 + 1 * internal.k8 * Hsp90 * HSF1 - 1 * internal.k9 * HCom;
    dstatedt[9] = 0 - 1 * internal.k14 * HSE * TriH + 1 * internal.k15 * HSETriH;
    dstatedt[10] = 0 + 1 * internal.k14 * HSE * TriH - 1 * internal.k15 * HSETriH - 1 * internal.k16 * HSETriH + 1 * internal.k16 * HSETriH;
    dstatedt[2] = 0 - 1 * internal.k8 * Hsp90 * HSF1 + 1 * internal.k9 * HCom - 2 * (HSF1 - 1) * internal.k10 * HSF1 / 2 - 1 * internal.k11 * HSF1 * DiH + 1 * internal.k12 * TriH + 2 * internal.k13 * DiH;
    dstatedt[0] = 0 - 1 * internal.k3 * MisP * Hsp90 + 1 * internal.k4 * MCom + 1 * internal.k5 * MCom * ATP - 1 * internal.k8 * Hsp90 * HSF1 + 1 * internal.k9 * HCom + 1 * internal.k16 * HSETriH - 1 * internal.k17 * Hsp90 * ATP;
    dstatedt[4] = 0 + 1 * internal.k3 * MisP * Hsp90 - 1 * internal.k4 * MCom - 1 * internal.k5 * MCom * ATP;
    dstatedt[3] = 0 + 1 * internal.k2 * NatP * ROS - 1 * internal.k3 * MisP * Hsp90 + 1 * internal.k4 * MCom - 1 * internal.k6 * MisP * ATP - 2 * (MisP - 1) * internal.k7 * MisP / 2 - 1 * internal.k7 * MisP * AggP;
    dstatedt[7] = 0 + 1 * internal.k1 - 1 * internal.k2 * NatP * ROS + 1 * internal.k5 * MCom * ATP;
    dstatedt[12] = 0 - 1 * internal.k2 * NatP * ROS + 1 * internal.k2 * NatP * ROS + 1 * internal.k20 - 1 * internal.k21 * ROS;
    dstatedt[5] = 0 + 1 * internal.k11 * HSF1 * DiH - 1 * internal.k12 * TriH - 1 * internal.k14 * HSE * TriH + 1 * internal.k15 * HSETriH;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Hsp90", "HCom", "HSF1", "MisP", "MCom", "TriH", "DiH", "NatP", "AggP", "HSE", "HSETriH", "X", "ROS", "ATP", "ADP", "source"];
    this.metadata.internalOrder = {ADP_init: null, AggP_init: null, ATP_init: null, compartment: null, DiH_init: null, HCom_init: null, HSE_init: null, HSETriH_init: null, HSF1_init: null, Hsp90_init: null, initial_ADP: null, initial_AggP: null, initial_ATP: null, initial_DiH: null, initial_HCom: null, initial_HSE: null, initial_HSETriH: null, initial_HSF1: null, initial_Hsp90: null, initial_MCom: null, initial_MisP: null, initial_NatP: null, initial_ROS: null, initial_source: null, initial_TriH: null, initial_X: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k21: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, MCom_init: null, MisP_init: null, NatP_init: null, ROS_init: null, source_init: null, TriH_init: null, X_init: null};
    this.metadata.variableOrder = {Hsp90: null, HCom: null, HSF1: null, MisP: null, MCom: null, TriH: null, DiH: null, NatP: null, AggP: null, HSE: null, HSETriH: null, X: null, ROS: null, ATP: null, ADP: null, source: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

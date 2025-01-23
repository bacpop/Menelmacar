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
    var state = Array(15).fill(0);
    state[0] = internal.initial_ATP;
    state[1] = internal.initial_ADP;
    state[2] = internal.initial_AMP;
    state[3] = internal.initial_GLC;
    state[4] = internal.initial_F6P;
    state[5] = internal.initial_FBP;
    state[6] = internal.initial_GAP;
    state[7] = internal.initial_NAD;
    state[8] = internal.initial_NADH;
    state[9] = internal.initial_DPG;
    state[10] = internal.initial_PEP;
    state[11] = internal.initial_PYR;
    state[12] = internal.initial_ACA;
    state[13] = internal.initial_EtOH;
    state[14] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ACA_init", "ADP_init", "AMP_init", "ATP_init", "DPG_init", "EtOH_init", "F6P_init", "FBP_init", "flow", "GAP_init", "GLC_init", "k10", "K1ATP", "K1GLC", "k2", "K2", "K2ATP", "k3b", "k3f", "K4GAP", "K4NAD", "k5b", "k5f", "K6ADP", "K6PEP", "K7PYR", "k8b", "k8f", "k9b", "k9f", "NAD_init", "NADH_init", "P_init", "PEP_init", "PYR_init", "V1", "V2", "V4", "V6", "V7"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ACA_init", internal, 0.073833399999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADP_init", internal, 0.108367, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP_init", internal, 0.0026114900000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 4.49064, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DPG_init", internal, 0.29910900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EtOH_init", internal, 0.33981, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F6P_init", internal, 0.65939000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 0.00770135, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "flow", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAP_init", internal, 0.0019091900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLC_init", internal, 0.0112817, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1ATP", internal, 0.063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1GLC", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.0016000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2ATP", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3b", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4GAP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4NAD", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5b", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6ADP", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6PEP", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7PYR", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8b", internal, 0.00014300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9b", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9f", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 3.6205699999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 0.61611800000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PEP_init", internal, 0.0021124999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PYR_init", internal, 0.0042270199999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V6", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V7", internal, 2, -Infinity, Infinity, false);
    internal.initial_ACA = internal.ACA_init;
    internal.initial_ADP = internal.ADP_init;
    internal.initial_AMP = internal.AMP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_DPG = internal.DPG_init;
    internal.initial_EtOH = internal.EtOH_init;
    internal.initial_F6P = internal.F6P_init;
    internal.initial_FBP = internal.FBP_init;
    internal.initial_GAP = internal.GAP_init;
    internal.initial_GLC = internal.GLC_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_P = internal.P_init;
    internal.initial_PEP = internal.PEP_init;
    internal.initial_PYR = internal.PYR_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ATP = state[0];
    const ADP = state[1];
    const AMP = state[2];
    const GLC = state[3];
    const F6P = state[4];
    const FBP = state[5];
    const GAP = state[6];
    const NAD = state[7];
    const NADH = state[8];
    const DPG = state[9];
    const PEP = state[10];
    const PYR = state[11];
    const ACA = state[12];
    const EtOH = state[13];
    const P = state[14];
    dstatedt[12] = 0 - 1 * internal.compartment * ACA * internal.flow + 1 * internal.compartment * (internal.V7 * PYR / (internal.K7PYR + PYR)) - 1 * internal.compartment * (internal.k8f * NADH * ACA - internal.k8b * NAD * EtOH);
    dstatedt[1] = 0 + 1 * internal.compartment * (1.1000000000000001 - ADP) * internal.flow + 1 * internal.compartment * (internal.V1 * ATP * GLC / ((internal.K1GLC + GLC) * (internal.K1ATP + ATP))) + 1 * internal.compartment * (internal.V2 * ATP * Math.pow((F6P), (2)) / ((internal.K2 * (1 + internal.k2 * Math.pow((ATP / AMP), (2))) + Math.pow((F6P), (2))) * (internal.K2ATP + ATP))) - 1 * internal.compartment * (internal.k5f * DPG * ADP - internal.k5b * PEP * ATP) - 1 * internal.compartment * (internal.V6 * ADP * PEP / ((internal.K6PEP + PEP) * (internal.K6ADP + ADP))) + 2 * internal.compartment * (internal.k9f * AMP * ATP - internal.k9b * Math.pow((ADP), (2)));
    dstatedt[2] = 0 - 1 * internal.compartment * AMP * internal.flow - 1 * internal.compartment * (internal.k9f * AMP * ATP - internal.k9b * Math.pow((ADP), (2)));
    dstatedt[0] = 0 + 1 * internal.compartment * (3.5 - ATP) * internal.flow - 1 * internal.compartment * (internal.V1 * ATP * GLC / ((internal.K1GLC + GLC) * (internal.K1ATP + ATP))) - 1 * internal.compartment * (internal.V2 * ATP * Math.pow((F6P), (2)) / ((internal.K2 * (1 + internal.k2 * Math.pow((ATP / AMP), (2))) + Math.pow((F6P), (2))) * (internal.K2ATP + ATP))) + 1 * internal.compartment * (internal.k5f * DPG * ADP - internal.k5b * PEP * ATP) + 1 * internal.compartment * (internal.V6 * ADP * PEP / ((internal.K6PEP + PEP) * (internal.K6ADP + ADP))) - 1 * internal.compartment * (internal.k9f * AMP * ATP - internal.k9b * Math.pow((ADP), (2)));
    dstatedt[9] = 0 - 1 * internal.compartment * DPG * internal.flow + 1 * internal.compartment * (internal.V4 * NAD * GAP / ((internal.K4GAP + GAP) * (internal.K4NAD + NAD))) - 1 * internal.compartment * (internal.k5f * DPG * ADP - internal.k5b * PEP * ATP);
    dstatedt[13] = 0 - 1 * internal.compartment * EtOH * internal.flow + 1 * internal.compartment * (internal.k8f * NADH * ACA - internal.k8b * NAD * EtOH);
    dstatedt[4] = 0 - 1 * internal.compartment * F6P * internal.flow + 1 * internal.compartment * (internal.V1 * ATP * GLC / ((internal.K1GLC + GLC) * (internal.K1ATP + ATP))) - 1 * internal.compartment * (internal.V2 * ATP * Math.pow((F6P), (2)) / ((internal.K2 * (1 + internal.k2 * Math.pow((ATP / AMP), (2))) + Math.pow((F6P), (2))) * (internal.K2ATP + ATP))) - 1 * internal.compartment * internal.k10 * F6P;
    dstatedt[5] = 0 - 1 * internal.compartment * FBP * internal.flow + 1 * internal.compartment * (internal.V2 * ATP * Math.pow((F6P), (2)) / ((internal.K2 * (1 + internal.k2 * Math.pow((ATP / AMP), (2))) + Math.pow((F6P), (2))) * (internal.K2ATP + ATP))) - 1 * internal.compartment * (internal.k3f * FBP - internal.k3b * Math.pow((GAP), (2)));
    dstatedt[6] = 0 - 1 * internal.compartment * GAP * internal.flow + 2 * internal.compartment * (internal.k3f * FBP - internal.k3b * Math.pow((GAP), (2))) - 1 * internal.compartment * (internal.V4 * NAD * GAP / ((internal.K4GAP + GAP) * (internal.K4NAD + NAD)));
    dstatedt[3] = 0 + 1 * internal.compartment * (50 - GLC) * internal.flow - 1 * internal.compartment * (internal.V1 * ATP * GLC / ((internal.K1GLC + GLC) * (internal.K1ATP + ATP)));
    dstatedt[7] = 0 + 1 * internal.compartment * (4 - NAD) * internal.flow - 1 * internal.compartment * (internal.V4 * NAD * GAP / ((internal.K4GAP + GAP) * (internal.K4NAD + NAD))) + 1 * internal.compartment * (internal.k8f * NADH * ACA - internal.k8b * NAD * EtOH);
    dstatedt[8] = 0 + 1 * internal.compartment * (0.23999999999999999 - NADH) * internal.flow + 1 * internal.compartment * (internal.V4 * NAD * GAP / ((internal.K4GAP + GAP) * (internal.K4NAD + NAD))) - 1 * internal.compartment * (internal.k8f * NADH * ACA - internal.k8b * NAD * EtOH);
    dstatedt[14] = 0 - 1 * internal.compartment * P * internal.flow + 1 * internal.compartment * internal.k10 * F6P;
    dstatedt[10] = 0 - 1 * internal.compartment * PEP * internal.flow + 1 * internal.compartment * (internal.k5f * DPG * ADP - internal.k5b * PEP * ATP) - 1 * internal.compartment * (internal.V6 * ADP * PEP / ((internal.K6PEP + PEP) * (internal.K6ADP + ADP)));
    dstatedt[11] = 0 - 1 * internal.compartment * PYR * internal.flow + 1 * internal.compartment * (internal.V6 * ADP * PEP / ((internal.K6PEP + PEP) * (internal.K6ADP + ADP))) - 1 * internal.compartment * (internal.V7 * PYR / (internal.K7PYR + PYR));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ATP", "ADP", "AMP", "GLC", "F6P", "FBP", "GAP", "NAD", "NADH", "DPG", "PEP", "PYR", "ACA", "EtOH", "P"];
    this.metadata.internalOrder = {ACA_init: null, ADP_init: null, AMP_init: null, ATP_init: null, compartment: null, DPG_init: null, EtOH_init: null, F6P_init: null, FBP_init: null, flow: null, GAP_init: null, GLC_init: null, initial_ACA: null, initial_ADP: null, initial_AMP: null, initial_ATP: null, initial_DPG: null, initial_EtOH: null, initial_F6P: null, initial_FBP: null, initial_GAP: null, initial_GLC: null, initial_NAD: null, initial_NADH: null, initial_P: null, initial_PEP: null, initial_PYR: null, k10: null, K1ATP: null, K1GLC: null, k2: null, K2: null, K2ATP: null, k3b: null, k3f: null, K4GAP: null, K4NAD: null, k5b: null, k5f: null, K6ADP: null, K6PEP: null, K7PYR: null, k8b: null, k8f: null, k9b: null, k9f: null, NAD_init: null, NADH_init: null, P_init: null, PEP_init: null, PYR_init: null, V1: null, V2: null, V4: null, V6: null, V7: null};
    this.metadata.variableOrder = {ATP: null, ADP: null, AMP: null, GLC: null, F6P: null, FBP: null, GAP: null, NAD: null, NADH: null, DPG: null, PEP: null, PYR: null, ACA: null, EtOH: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

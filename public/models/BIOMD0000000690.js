export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 24.800000000000001;
    internal.k2 = 2000;
    internal.Km = 0.0001571;
    internal.v = 2.35e-07;
    internal.V = 1.2429999999999999e-07;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(17).fill(0);
    state[0] = internal.initial_H2_HMPt;
    state[1] = internal.initial_ATP;
    state[2] = internal.initial_H2_HMPterinPP;
    state[3] = internal.initial_AMP;
    state[4] = internal.initial_p_ABA;
    state[5] = internal.initial_PPi;
    state[6] = internal.initial_H2_Pteroate;
    state[7] = internal.initial_L_Glutamate;
    state[8] = internal.initial_Phosphate;
    state[9] = internal.initial_ADP;
    state[10] = internal.initial_DHF;
    state[11] = internal.initial_L_serine;
    state[12] = internal.initial_Glycine;
    state[13] = internal.initial_NADP;
    state[14] = internal.initial_NADPH;
    state[15] = internal.initial_THF;
    state[16] = internal.initial_CH2_THF;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "AMP_init", "ATP_init", "CH2_THF_init", "DHF_init", "Glycine_init", "H2_HMPt_init", "H2_HMPterinPP_init", "H2_Pteroate_init", "L_Glutamate_init", "L_serine_init", "NADP_init", "NADPH_init", "p_ABA_init", "Phosphate_init", "PPi_init", "THF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CH2_THF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glycine_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPterinPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_Pteroate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_Glutamate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_serine_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ABA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phosphate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THF_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_AMP = internal.AMP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_CH2_THF = internal.CH2_THF_init;
    internal.initial_DHF = internal.DHF_init;
    internal.initial_Glycine = internal.Glycine_init;
    internal.initial_H2_HMPt = internal.H2_HMPt_init;
    internal.initial_H2_HMPterinPP = internal.H2_HMPterinPP_init;
    internal.initial_H2_Pteroate = internal.H2_Pteroate_init;
    internal.initial_L_Glutamate = internal.L_Glutamate_init;
    internal.initial_L_serine = internal.L_serine_init;
    internal.initial_NADP = internal.NADP_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_p_ABA = internal.p_ABA_init;
    internal.initial_Phosphate = internal.Phosphate_init;
    internal.initial_PPi = internal.PPi_init;
    internal.initial_THF = internal.THF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H2_HMPt = state[0];
    const ATP = state[1];
    const H2_HMPterinPP = state[2];
    const p_ABA = state[4];
    const H2_Pteroate = state[6];
    const L_Glutamate = state[7];
    const DHF = state[10];
    const L_serine = state[11];
    const Glycine = state[12];
    const NADPH = state[14];
    const THF = state[15];
    const CH2_THF = state[16];
    dstatedt[9] = 0;
    dstatedt[3] = 0;
    dstatedt[1] = 0;
    dstatedt[12] = 0;
    dstatedt[7] = 0;
    dstatedt[11] = 0;
    dstatedt[13] = 0;
    dstatedt[14] = 0;
    dstatedt[8] = 0;
    dstatedt[5] = 0;
    dstatedt[16] = 0 + 1 * internal.compartment * (internal.k1 * THF * L_serine - internal.k2 * CH2_THF * Glycine) - 1 * internal.compartment * internal.k1 * CH2_THF - 1 * internal.compartment * (internal.V * CH2_THF / (internal.Km + CH2_THF));
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k1 * L_Glutamate * ATP * H2_Pteroate - 1 * internal.compartment * internal.k1 * DHF * NADPH;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * ATP * H2_HMPt + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * ATP * H2_HMPt - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP - 1 * internal.compartment * internal.k1 * L_Glutamate * ATP * H2_Pteroate;
    dstatedt[4] = 0 - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[15] = 0 - 1 * internal.compartment * (internal.k1 * THF * L_serine - internal.k2 * CH2_THF * Glycine) + 1 * internal.compartment * internal.k1 * DHF * NADPH - 1 * internal.compartment * (internal.V * THF / (internal.Km + THF));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H2_HMPt", "ATP", "H2_HMPterinPP", "AMP", "p_ABA", "PPi", "H2_Pteroate", "L_Glutamate", "Phosphate", "ADP", "DHF", "L_serine", "Glycine", "NADP", "NADPH", "THF", "CH2_THF"];
    this.metadata.internalOrder = {ADP_init: null, AMP_init: null, ATP_init: null, CH2_THF_init: null, compartment: null, DHF_init: null, Glycine_init: null, H2_HMPt_init: null, H2_HMPterinPP_init: null, H2_Pteroate_init: null, initial_ADP: null, initial_AMP: null, initial_ATP: null, initial_CH2_THF: null, initial_DHF: null, initial_Glycine: null, initial_H2_HMPt: null, initial_H2_HMPterinPP: null, initial_H2_Pteroate: null, initial_L_Glutamate: null, initial_L_serine: null, initial_NADP: null, initial_NADPH: null, initial_p_ABA: null, initial_Phosphate: null, initial_PPi: null, initial_THF: null, k1: null, k2: null, Km: null, L_Glutamate_init: null, L_serine_init: null, NADP_init: null, NADPH_init: null, p_ABA_init: null, Phosphate_init: null, PPi_init: null, THF_init: null, v: null, V: null};
    this.metadata.variableOrder = {H2_HMPt: null, ATP: null, H2_HMPterinPP: null, AMP: null, p_ABA: null, PPi: null, H2_Pteroate: null, L_Glutamate: null, Phosphate: null, ADP: null, DHF: null, L_serine: null, Glycine: null, NADP: null, NADPH: null, THF: null, CH2_THF: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

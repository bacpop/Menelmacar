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
    var state = Array(17).fill(0);
    state[0] = internal.initial_H2_HMPt;
    state[1] = internal.initial_H2_HMPterinPP;
    state[2] = internal.initial_p_ABA;
    state[3] = internal.initial_H2_Pteroate;
    state[4] = internal.initial_DHF;
    state[5] = internal.initial_THF;
    state[6] = internal.initial_CH2_THF;
    state[7] = internal.initial_ATP;
    state[8] = internal.initial_AMP;
    state[9] = internal.initial_PPi;
    state[10] = internal.initial_L_Glutamate;
    state[11] = internal.initial_Phosphate;
    state[12] = internal.initial_ADP;
    state[13] = internal.initial_L_serine;
    state[14] = internal.initial_Glycine;
    state[15] = internal.initial_NADP;
    state[16] = internal.initial_NADPH;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "AMP_init", "ATP_init", "CH2_THF_init", "DHF_init", "Glycine_init", "H2_HMPt_init", "H2_HMPterinPP_init", "H2_Pteroate_init", "k1", "k2", "Km", "L_Glutamate_init", "L_serine_init", "NADP_init", "NADPH_init", "p_ABA_init", "Phosphate_init", "PPi_init", "THF_init", "v", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0.00055999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP_init", internal, 0.00027999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0.0095999999999999992, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CH2_THF_init", internal, 8.4699999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHF_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glycine_init", internal, 0.00027700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPt_init", internal, 3.315e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPterinPP_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_Pteroate_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0121, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 5.9209999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_Glutamate_init", internal, 0.00084599999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_serine_init", internal, 6.7999999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP_init", internal, 9.4e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 9.4e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ABA_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phosphate_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPi_init", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THF_init", internal, 0.00016899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 1.66e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 1.726e-07, -Infinity, Infinity, false);
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
    const H2_HMPterinPP = state[1];
    const p_ABA = state[2];
    const H2_Pteroate = state[3];
    const DHF = state[4];
    const THF = state[5];
    const CH2_THF = state[6];
    const ATP = state[7];
    const L_Glutamate = state[10];
    const L_serine = state[13];
    const Glycine = state[14];
    const NADPH = state[16];
    dstatedt[12] = 0;
    dstatedt[8] = 0;
    dstatedt[7] = 0;
    dstatedt[14] = 0;
    dstatedt[10] = 0;
    dstatedt[13] = 0;
    dstatedt[15] = 0;
    dstatedt[16] = 0;
    dstatedt[11] = 0;
    dstatedt[9] = 0;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k1 * THF * L_serine - internal.k2 * CH2_THF * Glycine) - 1 * internal.compartment * internal.k1 * CH2_THF - 1 * internal.compartment * (internal.V * CH2_THF / (internal.Km + CH2_THF));
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k1 * L_Glutamate * ATP * H2_Pteroate - 1 * internal.compartment * internal.k1 * DHF * NADPH;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * ATP * H2_HMPt + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * ATP * H2_HMPt - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP - 1 * internal.compartment * internal.k1 * L_Glutamate * ATP * H2_Pteroate;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k1 * THF * L_serine - internal.k2 * CH2_THF * Glycine) + 1 * internal.compartment * internal.k1 * DHF * NADPH - 1 * internal.compartment * (internal.V * THF / (internal.Km + THF));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H2_HMPt", "H2_HMPterinPP", "p_ABA", "H2_Pteroate", "DHF", "THF", "CH2_THF", "ATP", "AMP", "PPi", "L_Glutamate", "Phosphate", "ADP", "L_serine", "Glycine", "NADP", "NADPH"];
    this.metadata.internalOrder = {ADP_init: null, AMP_init: null, ATP_init: null, CH2_THF_init: null, compartment: null, DHF_init: null, Glycine_init: null, H2_HMPt_init: null, H2_HMPterinPP_init: null, H2_Pteroate_init: null, initial_ADP: null, initial_AMP: null, initial_ATP: null, initial_CH2_THF: null, initial_DHF: null, initial_Glycine: null, initial_H2_HMPt: null, initial_H2_HMPterinPP: null, initial_H2_Pteroate: null, initial_L_Glutamate: null, initial_L_serine: null, initial_NADP: null, initial_NADPH: null, initial_p_ABA: null, initial_Phosphate: null, initial_PPi: null, initial_THF: null, k1: null, k2: null, Km: null, L_Glutamate_init: null, L_serine_init: null, NADP_init: null, NADPH_init: null, p_ABA_init: null, Phosphate_init: null, PPi_init: null, THF_init: null, v: null, V: null};
    this.metadata.variableOrder = {H2_HMPt: null, H2_HMPterinPP: null, p_ABA: null, H2_Pteroate: null, DHF: null, THF: null, CH2_THF: null, ATP: null, AMP: null, PPi: null, L_Glutamate: null, Phosphate: null, ADP: null, L_serine: null, Glycine: null, NADP: null, NADPH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

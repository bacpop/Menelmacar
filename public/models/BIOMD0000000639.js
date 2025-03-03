export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ADP = 0.00055999999999999995;
    internal.AMP = 0.00027999999999999998;
    internal.ATP = 0.0095999999999999992;
    internal.compartment = 1;
    internal.Glycine = 0.00027700000000000001;
    internal.L_Glutamate = 0.00084599999999999996;
    internal.L_serine = 6.7999999999999999e-05;
    internal.NADP = 9.4e-07;
    internal.NADPH = 9.4e-07;
    internal.Phosphate = 0.01;
    internal.PPi = 0.00050000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_H2_HMPt;
    state[1] = internal.initial_H2_HMPterinPP;
    state[2] = internal.initial_p_ABA;
    state[3] = internal.initial_H2_Pteroate;
    state[4] = internal.initial_DHF;
    state[5] = internal.initial_THF;
    state[6] = internal.initial_CH2_THF;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CH2_THF_init", "DHF_init", "H2_HMPt_init", "H2_HMPterinPP_init", "H2_Pteroate_init", "k1", "k2", "Km", "p_ABA_init", "THF_init", "v", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CH2_THF_init", internal, 8.4699999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHF_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPt_init", internal, 3.315e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_HMPterinPP_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_Pteroate_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 5.9209999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ABA_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THF_init", internal, 0.00016899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 1.66e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 1.726e-07, -Infinity, Infinity, false);
    internal.initial_CH2_THF = internal.CH2_THF_init;
    internal.initial_DHF = internal.DHF_init;
    internal.initial_H2_HMPt = internal.H2_HMPt_init;
    internal.initial_H2_HMPterinPP = internal.H2_HMPterinPP_init;
    internal.initial_H2_Pteroate = internal.H2_Pteroate_init;
    internal.initial_p_ABA = internal.p_ABA_init;
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
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k1 * THF * internal.L_serine - internal.k2 * CH2_THF * internal.Glycine) - 1 * internal.compartment * internal.k1 * CH2_THF - 1 * internal.compartment * (internal.V * CH2_THF / (internal.Km + CH2_THF));
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k1 * internal.L_Glutamate * internal.ATP * H2_Pteroate - 1 * internal.compartment * internal.k1 * DHF * internal.NADPH;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * internal.ATP * H2_HMPt + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * internal.ATP * H2_HMPt - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP - 1 * internal.compartment * internal.k1 * internal.L_Glutamate * internal.ATP * H2_Pteroate;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k1 * p_ABA * H2_HMPterinPP + 1 * internal.compartment * internal.k1 * CH2_THF + 1 * internal.compartment * (internal.v);
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k1 * THF * internal.L_serine - internal.k2 * CH2_THF * internal.Glycine) + 1 * internal.compartment * internal.k1 * DHF * internal.NADPH - 1 * internal.compartment * (internal.V * THF / (internal.Km + THF));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H2_HMPt", "H2_HMPterinPP", "p_ABA", "H2_Pteroate", "DHF", "THF", "CH2_THF"];
    this.metadata.internalOrder = {ADP: null, AMP: null, ATP: null, CH2_THF_init: null, compartment: null, DHF_init: null, Glycine: null, H2_HMPt_init: null, H2_HMPterinPP_init: null, H2_Pteroate_init: null, initial_CH2_THF: null, initial_DHF: null, initial_H2_HMPt: null, initial_H2_HMPterinPP: null, initial_H2_Pteroate: null, initial_p_ABA: null, initial_THF: null, k1: null, k2: null, Km: null, L_Glutamate: null, L_serine: null, NADP: null, NADPH: null, p_ABA_init: null, Phosphate: null, PPi: null, THF_init: null, v: null, V: null};
    this.metadata.variableOrder = {H2_HMPt: null, H2_HMPterinPP: null, p_ABA: null, H2_Pteroate: null, DHF: null, THF: null, CH2_THF: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    state[0] = internal.initial_E2F;
    state[1] = internal.initial_Myc;
    state[2] = internal.initial_CycD;
    state[3] = internal.initial_RE;
    state[4] = internal.initial_CycE;
    state[5] = internal.initial_RB;
    state[6] = internal.initial_miR449;
    state[7] = internal.initial_PRB;
    state[8] = internal.initial_S;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CycD_init", "CycE_init", "E2F_init", "JCD", "JCE", "JE", "JM", "JP", "JS", "kdCD1", "kdCD2", "kdCE1", "kdCE2", "kdE", "kdM1", "kdM2", "kdmiR", "kdP", "kdR", "kdRE", "kP", "kP1", "kP2", "kRE", "ksCD1", "ksCD2", "ksCE", "ksE1", "ksE2", "ksM", "ksmiR", "ksR", "miR449_init", "Myc_init", "PRB_init", "RB_init", "RE_init", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CycD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F_init", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JCD", internal, 0.92000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JCE", internal, 0.92000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JE", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JM", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JP", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JS", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdCD1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdCD2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdCE1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdCE2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdE", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdM1", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdM2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdmiR", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdP", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdR", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdRE", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kP", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kP1", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kP2", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kRE", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksCD1", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksCD2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksCE", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksE1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksE2", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksM", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksmiR", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksR", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "miR449_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Myc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PRB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RB_init", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 3, -Infinity, Infinity, false);
    internal.initial_CycD = internal.CycD_init;
    internal.initial_CycE = internal.CycE_init;
    internal.initial_E2F = internal.E2F_init;
    internal.initial_miR449 = internal.miR449_init;
    internal.initial_Myc = internal.Myc_init;
    internal.initial_PRB = internal.PRB_init;
    internal.initial_RB = internal.RB_init;
    internal.initial_RE = internal.RE_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E2F = state[0];
    const Myc = state[1];
    const CycD = state[2];
    const RE = state[3];
    const CycE = state[4];
    const RB = state[5];
    const miR449 = state[6];
    const PRB = state[7];
    const S = state[8];
    dstatedt[8] = 0;
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.kdCD2 * miR449 * (CycD / (internal.JCD + CycD))) + 1 * internal.compartment * (internal.ksCD1 * S / (internal.JS + S)) + 1 * internal.compartment * (internal.ksCD2 * Myc / (internal.JM + Myc)) - 1 * internal.compartment * internal.kdCD1 * CycD;
    dstatedt[4] = 0 - 1 * internal.compartment * (internal.kdCE2 * miR449 * (CycE / (internal.JCE + CycE))) + 1 * internal.compartment * (internal.ksCE * E2F / (internal.JE + E2F)) - 1 * internal.compartment * internal.kdCE1 * CycE;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.ksE1 * (Myc / (internal.JM + Myc)) * (E2F / (internal.JE + E2F))) + 1 * internal.compartment * (internal.ksE2 * Myc / (internal.JM + Myc)) + 1 * internal.compartment * (internal.kP1 * CycD * (RE / (internal.JCD + RE))) + 1 * internal.compartment * (internal.kP2 * CycE * (RE / (internal.JCE + RE))) - 1 * internal.compartment * internal.kdE * E2F - 1 * internal.compartment * internal.kRE * E2F * RB;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.ksmiR * E2F / (internal.JE + E2F)) - 1 * internal.compartment * internal.kdmiR * miR449 - 1 * internal.compartment * (internal.kdM2 * miR449 * (Myc / (internal.JM + Myc))) - 1 * internal.compartment * (internal.kdCD2 * miR449 * (CycD / (internal.JCD + CycD))) - 1 * internal.compartment * (internal.kdCE2 * miR449 * (CycE / (internal.JCE + CycE)));
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.kdM2 * miR449 * (Myc / (internal.JM + Myc))) + 1 * internal.compartment * (internal.ksM * S / (internal.JS + S)) - 1 * internal.compartment * internal.kdM1 * Myc;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.kP1 * CycD * (RE / (internal.JCD + RE))) + 1 * internal.compartment * (internal.kP2 * CycE * (RE / (internal.JCE + RE))) - 1 * internal.compartment * (internal.kP * PRB / (internal.JP + PRB)) + 1 * internal.compartment * (internal.kP1 * CycD * (RB / (internal.JCD + RB))) + 1 * internal.compartment * (internal.kP2 * CycE * (RB / (internal.JCE + RB))) - 1 * internal.compartment * internal.kdP * PRB;
    dstatedt[5] = 0 - 1 * internal.compartment * internal.kRE * E2F * RB + 1 * internal.compartment * (internal.ksR) + 1 * internal.compartment * (internal.kP * PRB / (internal.JP + PRB)) - 1 * internal.compartment * internal.kdR * RB - 1 * internal.compartment * (internal.kP1 * CycD * (RB / (internal.JCD + RB))) - 1 * internal.compartment * (internal.kP2 * CycE * (RB / (internal.JCE + RB)));
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.kP1 * CycD * (RE / (internal.JCD + RE))) - 1 * internal.compartment * (internal.kP2 * CycE * (RE / (internal.JCE + RE))) + 1 * internal.compartment * internal.kRE * E2F * RB - 1 * internal.compartment * internal.kdRE * RE;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E2F", "Myc", "CycD", "RE", "CycE", "RB", "miR449", "PRB", "S"];
    this.metadata.internalOrder = {compartment: null, CycD_init: null, CycE_init: null, E2F_init: null, initial_CycD: null, initial_CycE: null, initial_E2F: null, initial_miR449: null, initial_Myc: null, initial_PRB: null, initial_RB: null, initial_RE: null, initial_S: null, JCD: null, JCE: null, JE: null, JM: null, JP: null, JS: null, kdCD1: null, kdCD2: null, kdCE1: null, kdCE2: null, kdE: null, kdM1: null, kdM2: null, kdmiR: null, kdP: null, kdR: null, kdRE: null, kP: null, kP1: null, kP2: null, kRE: null, ksCD1: null, ksCD2: null, ksCE: null, ksE1: null, ksE2: null, ksM: null, ksmiR: null, ksR: null, miR449_init: null, Myc_init: null, PRB_init: null, RB_init: null, RE_init: null, S_init: null};
    this.metadata.variableOrder = {E2F: null, Myc: null, CycD: null, RE: null, CycE: null, RB: null, miR449: null, PRB: null, S: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_pRB;
    state[1] = internal.initial_pRBp;
    state[2] = internal.initial_E2F1;
    state[3] = internal.initial_CycDi;
    state[4] = internal.initial_CycDa;
    state[5] = internal.initial_AP1;
    state[6] = internal.initial_pRBpp;
    state[7] = internal.initial_CycEi;
    state[8] = internal.initial_CycEa;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "AP1_init", "CycDa_init", "CycDi_init", "CycEa_init", "CycEi_init", "E2F1_init", "Fm", "J11", "J12", "J13", "J15", "J18", "J61", "J62", "J63", "J65", "J68", "k1", "k16", "k2", "k23", "k25", "k28", "k3", "k34", "k43", "k61", "k67", "k76", "k89", "k98", "Km1", "Km2", "Km4", "Km9", "kp", "phi_AP1", "phi_CycDa", "phi_CycDi", "phi_CycEa", "phi_CycEi", "phi_E2F1", "phi_pRB", "phi_pRBp", "phi_pRBpp", "pRB_init", "pRBp_init", "pRBpp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycDa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycDi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycEa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycEi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fm", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J11", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J12", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J13", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J15", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J18", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J61", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J62", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J63", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J65", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J68", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k43", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k61", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k67", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k76", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k89", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k98", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km4", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km9", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_AP1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_CycDa", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_CycDi", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_CycEa", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_CycEi", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_E2F1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_pRB", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_pRBp", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_pRBpp", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRBp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRBpp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_AP1 = internal.AP1_init;
    internal.initial_CycDa = internal.CycDa_init;
    internal.initial_CycDi = internal.CycDi_init;
    internal.initial_CycEa = internal.CycEa_init;
    internal.initial_CycEi = internal.CycEi_init;
    internal.initial_E2F1 = internal.E2F1_init;
    internal.initial_pRB = internal.pRB_init;
    internal.initial_pRBp = internal.pRBp_init;
    internal.initial_pRBpp = internal.pRBpp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const pRB = state[0];
    const pRBp = state[1];
    const E2F1 = state[2];
    const CycDi = state[3];
    const CycDa = state[4];
    const AP1 = state[5];
    const pRBpp = state[6];
    const CycEi = state[7];
    const CycEa = state[8];
    dstatedt[5] = 0 + 1 * internal.cell * (internal.Fm + internal.k25 * E2F1 * (internal.J15 / (internal.J15 + pRB)) * (internal.J65 / (internal.J65 + pRBp))) - 1 * internal.cell * internal.phi_AP1 * AP1;
    dstatedt[4] = 0 - 1 * internal.cell * internal.k43 * CycDa + 1 * internal.cell * internal.k34 * CycDi * (CycDa / (internal.Km4 + CycDa)) - 1 * internal.cell * internal.phi_CycDa * CycDa;
    dstatedt[3] = 0 + 1 * internal.cell * (internal.k3 * AP1 + internal.k23 * E2F1 * (internal.J13 / (internal.J13 + pRB)) * (internal.J63 / (internal.J63 + pRBp))) + 1 * internal.cell * internal.k43 * CycDa - 1 * internal.cell * internal.k34 * CycDi * (CycDa / (internal.Km4 + CycDa)) - 1 * internal.cell * internal.phi_CycDi * CycDi;
    dstatedt[8] = 0 + 1 * internal.cell * internal.k89 * CycEi * CycEa / (internal.Km9 + CycEa) - 1 * internal.cell * internal.k98 * CycEa - 1 * internal.cell * internal.phi_CycEa * CycEa;
    dstatedt[7] = 0 + 1 * internal.cell * internal.k28 * E2F1 * (internal.J18 / (internal.J18 + pRB)) * (internal.J68 / (internal.J68 + pRBp)) - 1 * internal.cell * internal.k89 * CycEi * CycEa / (internal.Km9 + CycEa) + 1 * internal.cell * internal.k98 * CycEa - 1 * internal.cell * internal.phi_CycEi * CycEi;
    dstatedt[2] = 0 + 1 * internal.cell * (internal.kp + internal.k2 * (Math.pow((internal.a), (2)) + Math.pow((E2F1), (2))) / (Math.pow((internal.Km2), (2)) + Math.pow((E2F1), (2))) * (internal.J12 / (internal.J12 + pRB)) * (internal.J62 / (internal.J62 + pRBp))) - 1 * internal.cell * internal.phi_E2F1 * E2F1;
    dstatedt[0] = 0 + 1 * internal.cell * internal.k1 * (E2F1 / (internal.Km1 + E2F1)) * (internal.J11 / (internal.J11 + pRB)) * (internal.J61 / (internal.J61 + pRBp)) - 1 * internal.cell * internal.k16 * pRB * CycDa + 1 * internal.cell * internal.k61 * pRBp - 1 * internal.cell * internal.phi_pRB * pRB;
    dstatedt[1] = 0 + 1 * internal.cell * internal.k16 * pRB * CycDa - 1 * internal.cell * internal.k61 * pRBp - 1 * internal.cell * internal.k67 * pRBp * CycEa + 1 * internal.cell * internal.k76 * pRBpp - 1 * internal.cell * internal.phi_pRBp * pRBp;
    dstatedt[6] = 0 + 1 * internal.cell * internal.k67 * pRBp * CycEa - 1 * internal.cell * internal.k76 * pRBpp - 1 * internal.cell * internal.phi_pRBpp * pRBpp;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "pRB", "pRBp", "E2F1", "CycDi", "CycDa", "AP1", "pRBpp", "CycEi", "CycEa"];
    this.metadata.internalOrder = {a: null, AP1_init: null, cell: null, CycDa_init: null, CycDi_init: null, CycEa_init: null, CycEi_init: null, E2F1_init: null, Fm: null, initial_AP1: null, initial_CycDa: null, initial_CycDi: null, initial_CycEa: null, initial_CycEi: null, initial_E2F1: null, initial_pRB: null, initial_pRBp: null, initial_pRBpp: null, J11: null, J12: null, J13: null, J15: null, J18: null, J61: null, J62: null, J63: null, J65: null, J68: null, k1: null, k16: null, k2: null, k23: null, k25: null, k28: null, k3: null, k34: null, k43: null, k61: null, k67: null, k76: null, k89: null, k98: null, Km1: null, Km2: null, Km4: null, Km9: null, kp: null, phi_AP1: null, phi_CycDa: null, phi_CycDi: null, phi_CycEa: null, phi_CycEi: null, phi_E2F1: null, phi_pRB: null, phi_pRBp: null, phi_pRBpp: null, pRB_init: null, pRBp_init: null, pRBpp_init: null};
    this.metadata.variableOrder = {pRB: null, pRBp: null, E2F1: null, CycDi: null, CycDa: null, AP1: null, pRBpp: null, CycEi: null, CycEa: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

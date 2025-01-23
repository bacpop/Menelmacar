export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.k1 = 5000000;
    internal.k10 = 55;
    internal.k2 = 100000000;
    internal.k3 = 5;
    internal.k4 = 5000000;
    internal.k5 = 1;
    internal.k6 = 2;
    internal.k7 = 10;
    internal.k8 = 0.10000000000000001;
    internal.k9 = 100000;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_D;
    state[1] = internal.initial_DR;
    state[2] = internal.initial_DRG_GDP;
    state[3] = internal.initial_G_GDP;
    state[4] = internal.initial_DRG;
    state[5] = internal.initial_GDP;
    state[6] = internal.initial_DRG_GTP;
    state[7] = internal.initial_GTP;
    state[8] = internal.initial_G_GTP;
    state[9] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["D_init", "DR_init", "DRG_GDP_init", "DRG_GTP_init", "DRG_init", "G_GDP_init", "G_GTP_init", "GDP_init", "GTP_init", "R_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_D = internal.D_init;
    internal.initial_DR = internal.DR_init;
    internal.initial_DRG = internal.DRG_init;
    internal.initial_DRG_GDP = internal.DRG_GDP_init;
    internal.initial_DRG_GTP = internal.DRG_GTP_init;
    internal.initial_G_GDP = internal.G_GDP_init;
    internal.initial_G_GTP = internal.G_GTP_init;
    internal.initial_GDP = internal.GDP_init;
    internal.initial_GTP = internal.GTP_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const D = state[0];
    const DR = state[1];
    const DRG_GDP = state[2];
    const G_GDP = state[3];
    const DRG = state[4];
    const GDP = state[5];
    const DRG_GTP = state[6];
    const GTP = state[7];
    const G_GTP = state[8];
    const R = state[9];
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * D * R - internal.k7 * DR);
    dstatedt[1] = 0 + 1 * internal.cell * (internal.k1 * D * R - internal.k7 * DR) - 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) + 1 * internal.cell * internal.k5 * DRG_GTP;
    dstatedt[4] = 0 + 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * GDP * DRG) - 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP);
    dstatedt[2] = 0 + 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) - 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * GDP * DRG);
    dstatedt[6] = 0 + 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP) - 1 * internal.cell * internal.k5 * DRG_GTP;
    dstatedt[3] = 0 - 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) + 1 * internal.cell * internal.k6 * G_GTP;
    dstatedt[8] = 0 + 1 * internal.cell * internal.k5 * DRG_GTP - 1 * internal.cell * internal.k6 * G_GTP;
    dstatedt[5] = 0 + 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * GDP * DRG);
    dstatedt[7] = 0 - 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP);
    dstatedt[9] = 0 - 1 * internal.cell * (internal.k1 * D * R - internal.k7 * DR);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "D", "DR", "DRG_GDP", "G_GDP", "DRG", "GDP", "DRG_GTP", "GTP", "G_GTP", "R"];
    this.metadata.internalOrder = {cell: null, D_init: null, DR_init: null, DRG_GDP_init: null, DRG_GTP_init: null, DRG_init: null, G_GDP_init: null, G_GTP_init: null, GDP_init: null, GTP_init: null, initial_D: null, initial_DR: null, initial_DRG: null, initial_DRG_GDP: null, initial_DRG_GTP: null, initial_G_GDP: null, initial_G_GTP: null, initial_GDP: null, initial_GTP: null, initial_R: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, R_init: null};
    this.metadata.variableOrder = {D: null, DR: null, DRG_GDP: null, G_GDP: null, DRG: null, GDP: null, DRG_GTP: null, GTP: null, G_GTP: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

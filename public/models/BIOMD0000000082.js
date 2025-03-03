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
    var state = Array(10).fill(0);
    state[0] = internal.initial_agonist;
    state[1] = internal.initial_DR;
    state[2] = internal.initial_DRG_GDP;
    state[3] = internal.initial_DRG;
    state[4] = internal.initial_GDP;
    state[5] = internal.initial_DRG_GTP;
    state[6] = internal.initial_GTP;
    state[7] = internal.initial_Recptor;
    state[8] = internal.initial_G_GDP;
    state[9] = internal.initial_G_GTP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["agonist_init", "DR_init", "DRG_GDP_init", "DRG_GTP_init", "DRG_init", "G_GDP_init", "G_GTP_init", "GDP_init", "GTP_init", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Recptor_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "agonist_init", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_GDP_init", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GTP_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recptor_init", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    internal.initial_agonist = internal.agonist_init;
    internal.initial_DR = internal.DR_init;
    internal.initial_DRG = internal.DRG_init;
    internal.initial_DRG_GDP = internal.DRG_GDP_init;
    internal.initial_DRG_GTP = internal.DRG_GTP_init;
    internal.initial_G_GDP = internal.G_GDP_init;
    internal.initial_G_GTP = internal.G_GTP_init;
    internal.initial_GDP = internal.GDP_init;
    internal.initial_GTP = internal.GTP_init;
    internal.initial_Recptor = internal.Recptor_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const agonist = state[0];
    const DR = state[1];
    const DRG_GDP = state[2];
    const DRG = state[3];
    const GDP = state[4];
    const DRG_GTP = state[5];
    const GTP = state[6];
    const Recptor = state[7];
    const G_GDP = state[8];
    const G_GTP = state[9];
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * agonist * Recptor - internal.k7 * DR);
    dstatedt[1] = 0 + 1 * internal.cell * (internal.k1 * agonist * Recptor - internal.k7 * DR) - 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) + 1 * internal.cell * internal.k5 * DRG_GTP;
    dstatedt[3] = 0 + 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * DRG * GDP) - 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP);
    dstatedt[2] = 0 + 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) - 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * DRG * GDP);
    dstatedt[5] = 0 + 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP) - 1 * internal.cell * internal.k5 * DRG_GTP;
    dstatedt[8] = 0 - 1 * internal.cell * (internal.k2 * DR * G_GDP - internal.k8 * DRG_GDP) + 1 * internal.cell * internal.k6 * G_GTP;
    dstatedt[9] = 0 + 1 * internal.cell * internal.k5 * DRG_GTP - 1 * internal.cell * internal.k6 * G_GTP;
    dstatedt[4] = 0 + 1 * internal.cell * (internal.k3 * DRG_GDP - internal.k9 * DRG * GDP);
    dstatedt[6] = 0 - 1 * internal.cell * (internal.k4 * DRG * GTP - internal.k10 * DRG_GTP);
    dstatedt[7] = 0 - 1 * internal.cell * (internal.k1 * agonist * Recptor - internal.k7 * DR);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "agonist", "DR", "DRG_GDP", "DRG", "GDP", "DRG_GTP", "GTP", "Recptor", "G_GDP", "G_GTP"];
    this.metadata.internalOrder = {agonist_init: null, cell: null, DR_init: null, DRG_GDP_init: null, DRG_GTP_init: null, DRG_init: null, G_GDP_init: null, G_GTP_init: null, GDP_init: null, GTP_init: null, initial_agonist: null, initial_DR: null, initial_DRG: null, initial_DRG_GDP: null, initial_DRG_GTP: null, initial_G_GDP: null, initial_G_GTP: null, initial_GDP: null, initial_GTP: null, initial_Recptor: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Recptor_init: null};
    this.metadata.variableOrder = {agonist: null, DR: null, DRG_GDP: null, DRG: null, GDP: null, DRG_GTP: null, GTP: null, Recptor: null, G_GDP: null, G_GTP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

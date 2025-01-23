export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.cellsurface = 1;
    internal.medium = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_EpoR;
    state[1] = internal.initial_Epo;
    state[2] = internal.initial_Epo_EpoR;
    state[3] = internal.initial_Epo_EpoRi;
    state[4] = internal.initial_dEpoi;
    state[5] = internal.initial_dEpoe;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bmax", "dEpoe_init", "dEpoi_init", "Epo_EpoR_init", "Epo_EpoRi_init", "Epo_init", "EpoR_init", "kde", "kdi", "ke", "kex", "koff", "kon", "kt"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bmax", internal, 516, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dEpoe_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dEpoi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Epo_EpoR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Epo_EpoRi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Epo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EpoR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kde", internal, 0.016404200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdi", internal, 0.00317871, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.074826699999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kex", internal, 0.0099380500000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff", internal, 0.0172135, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon", internal, 0.00010496, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 0.032936600000000003, -Infinity, Infinity, false);
    internal.initial_dEpoe = internal.dEpoe_init;
    internal.initial_dEpoi = internal.dEpoi_init;
    internal.initial_Epo = internal.Epo_init;
    internal.initial_Epo_EpoR = internal.Epo_EpoR_init;
    internal.initial_Epo_EpoRi = internal.Epo_EpoRi_init;
    internal.initial_EpoR = internal.EpoR_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const EpoR = state[0];
    const Epo = state[1];
    const Epo_EpoR = state[2];
    const Epo_EpoRi = state[3];
    dstatedt[5] = 0 + 1 * internal.kde * Epo_EpoRi * internal.cell;
    dstatedt[4] = 0 + 1 * internal.kdi * Epo_EpoRi * internal.cell;
    dstatedt[1] = 0 - 1 * internal.kon * Epo * EpoR * internal.cell + 1 * internal.koff * Epo_EpoR * internal.cell + 1 * internal.kex * Epo_EpoRi * internal.cell;
    dstatedt[2] = 0 + 1 * internal.kon * Epo * EpoR * internal.cell - 1 * internal.koff * Epo_EpoR * internal.cell - 1 * internal.ke * Epo_EpoR * internal.cell;
    dstatedt[3] = 0 + 1 * internal.ke * Epo_EpoR * internal.cell - 1 * internal.kex * Epo_EpoRi * internal.cell - 1 * internal.kdi * Epo_EpoRi * internal.cell - 1 * internal.kde * Epo_EpoRi * internal.cell;
    dstatedt[0] = 0 + 1 * internal.kt * internal.Bmax * internal.cell - 1 * internal.kt * EpoR * internal.cell - 1 * internal.kon * Epo * EpoR * internal.cell + 1 * internal.koff * Epo_EpoR * internal.cell + 1 * internal.kex * Epo_EpoRi * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EpoR", "Epo", "Epo_EpoR", "Epo_EpoRi", "dEpoi", "dEpoe"];
    this.metadata.internalOrder = {Bmax: null, cell: null, cellsurface: null, dEpoe_init: null, dEpoi_init: null, Epo_EpoR_init: null, Epo_EpoRi_init: null, Epo_init: null, EpoR_init: null, initial_dEpoe: null, initial_dEpoi: null, initial_Epo: null, initial_Epo_EpoR: null, initial_Epo_EpoRi: null, initial_EpoR: null, kde: null, kdi: null, ke: null, kex: null, koff: null, kon: null, kt: null, medium: null};
    this.metadata.variableOrder = {EpoR: null, Epo: null, Epo_EpoR: null, Epo_EpoRi: null, dEpoi: null, dEpoe: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

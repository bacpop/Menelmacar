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
    state[1] = internal.initial_SAv;
    state[2] = internal.initial_SAv_EpoR;
    state[3] = internal.initial_SAv_EpoRi;
    state[4] = internal.initial_dSAvi;
    state[5] = internal.initial_dSAve;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bmax_SAv", "dSAve_init", "dSAvi_init", "EpoR_init", "kde", "kdi", "kex_SAv", "koff_SAv", "kon_SAv", "kt", "SAv_EpoR_init", "SAv_EpoRi_init", "SAv_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bmax_SAv", internal, 76, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dSAve_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dSAvi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EpoR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kde", internal, 0.016404200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdi", internal, 0.00317871, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kex_SAv", internal, 0.011010000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff_SAv", internal, 0.0067994600000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon_SAv", internal, 2.2940200000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 0.032936600000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SAv_EpoR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SAv_EpoRi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SAv_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_dSAve = internal.dSAve_init;
    internal.initial_dSAvi = internal.dSAvi_init;
    internal.initial_EpoR = internal.EpoR_init;
    internal.initial_SAv = internal.SAv_init;
    internal.initial_SAv_EpoR = internal.SAv_EpoR_init;
    internal.initial_SAv_EpoRi = internal.SAv_EpoRi_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const EpoR = state[0];
    const SAv = state[1];
    const SAv_EpoR = state[2];
    const SAv_EpoRi = state[3];
    dstatedt[5] = 0 + 1 * internal.kde * SAv_EpoRi * internal.cell;
    dstatedt[4] = 0 + 1 * internal.kdi * SAv_EpoRi * internal.cell;
    dstatedt[0] = 0 + 1 * internal.kt * internal.Bmax_SAv * internal.cell - 1 * internal.kt * EpoR * internal.cell - 1 * internal.kon_SAv * SAv * EpoR * internal.cell + 1 * internal.koff_SAv * SAv_EpoR * internal.cell;
    dstatedt[1] = 0 - 1 * internal.kon_SAv * SAv * EpoR * internal.cell + 1 * internal.koff_SAv * SAv_EpoR * internal.cell + 1 * internal.kex_SAv * SAv_EpoRi * internal.cell;
    dstatedt[2] = 0 + 1 * internal.kon_SAv * SAv * EpoR * internal.cell - 1 * internal.koff_SAv * SAv_EpoR * internal.cell - 1 * internal.kt * SAv_EpoR * internal.cell;
    dstatedt[3] = 0 + 1 * internal.kt * SAv_EpoR * internal.cell - 1 * internal.kex_SAv * SAv_EpoRi * internal.cell - 1 * internal.kdi * SAv_EpoRi * internal.cell - 1 * internal.kde * SAv_EpoRi * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EpoR", "SAv", "SAv_EpoR", "SAv_EpoRi", "dSAvi", "dSAve"];
    this.metadata.internalOrder = {Bmax_SAv: null, cell: null, cellsurface: null, dSAve_init: null, dSAvi_init: null, EpoR_init: null, initial_dSAve: null, initial_dSAvi: null, initial_EpoR: null, initial_SAv: null, initial_SAv_EpoR: null, initial_SAv_EpoRi: null, kde: null, kdi: null, kex_SAv: null, koff_SAv: null, kon_SAv: null, kt: null, medium: null, SAv_EpoR_init: null, SAv_EpoRi_init: null, SAv_init: null};
    this.metadata.variableOrder = {EpoR: null, SAv: null, SAv_EpoR: null, SAv_EpoRi: null, dSAvi: null, dSAve: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

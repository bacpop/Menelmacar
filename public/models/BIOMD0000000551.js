export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.CSF = 1;
    internal.initial_lxl = 1;
    internal.Plasma = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_P;
    state[2] = internal.initial_lxl;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aCSF", "alpha", "aplasma", "bCSF", "bplasma", "C_init", "deltap", "epsilon", "J", "k1", "Ki", "P_init", "r", "Sc", "tauCSF", "tauplasma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aCSF", internal, 4.9199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.52200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aplasma", internal, 187, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bCSF", internal, 0.25900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bplasma", internal, 0.088999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltap", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.0206, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1.1299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 0.023199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.42999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sc", internal, 1.1599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauCSF", internal, 2.0600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauplasma", internal, 1.6599999999999999, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const lxl = state[2];
    const C = state[0];
    const P = state[1];
    dstatedt[1] = 0 + internal.k1 * internal.r * C - internal.J * internal.r - internal.deltap * P * lxl;
    var f_t = ((t < internal.tauplasma ? t / internal.tauplasma * internal.aplasma * Math.exp(- internal.bplasma * internal.tauplasma) : internal.aplasma * Math.exp(- internal.bplasma * t)));
    var g_t = ((t < internal.tauCSF ? t / internal.tauCSF * internal.aCSF * Math.exp(- internal.bCSF * internal.tauCSF) : internal.aCSF * Math.exp(- internal.bCSF * t)));
    dstatedt[0] = 0 + internal.Sc / (1 + g_t / internal.Ki) - internal.k1 * C + internal.J;
    dstatedt[2] = internal.epsilon * (1 / (1 + internal.alpha * f_t) - lxl);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "P", "lxl"];
    this.metadata.internalOrder = {aCSF: null, alpha: null, aplasma: null, bCSF: null, bplasma: null, C_init: null, CSF: null, deltap: null, epsilon: null, initial_C: null, initial_lxl: null, initial_P: null, J: null, k1: null, Ki: null, P_init: null, Plasma: null, r: null, Sc: null, tauCSF: null, tauplasma: null};
    this.metadata.variableOrder = {C: null, P: null, lxl: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.Endoplasmic_Reticulum = 1;
    internal.initial_p3 = 0.94999999999999996;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_CaER;
    state[1] = internal.initial_Ca_Cyt;
    state[2] = internal.initial_p3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_Cyt_init", "CaER_init", "Fch_0", "Fleak", "Fpump_0", "K1", "K2", "K3", "k31", "kappa", "kbN", "Kpump", "n0", "p11", "p12"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fch_0", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fleak", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fpump_0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbN", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpump", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p11", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.80000000000000004, -Infinity, Infinity, false);
    internal.initial_Ca_Cyt = internal.Ca_Cyt_init;
    internal.initial_CaER = internal.CaER_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ca_Cyt = state[1];
    const p3 = state[2];
    dstatedt[2] = - (internal.k31 * Ca_Cyt * p3) + internal.k31 * internal.K3 * (1 - p3);
    var n = internal.n0 * (Math.exp(- internal.kbN * t) + internal.kappa * (1 - Math.exp(- internal.kbN * t)));
    var p2 = Ca_Cyt / (internal.K2 + Ca_Cyt);
    var p1 = internal.p11 + internal.p12 * n / (internal.K1 + n);
    dstatedt[1] = 0 + 1 * internal.Fch_0 * p1 * p2 * p3 + 1 * internal.Fleak - 1 * internal.Fpump_0 * Ca_Cyt / (internal.Kpump + Ca_Cyt);
    dstatedt[0] = 0 - 1 * internal.Fch_0 * p1 * p2 * p3 - 1 * internal.Fleak + 1 * internal.Fpump_0 * Ca_Cyt / (internal.Kpump + Ca_Cyt);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CaER", "Ca_Cyt", "p3"];
    this.metadata.internalOrder = {Ca_Cyt_init: null, CaER_init: null, Cytosol: null, Endoplasmic_Reticulum: null, Fch_0: null, Fleak: null, Fpump_0: null, initial_Ca_Cyt: null, initial_CaER: null, initial_p3: null, K1: null, K2: null, K3: null, k31: null, kappa: null, kbN: null, Kpump: null, n0: null, p11: null, p12: null};
    this.metadata.variableOrder = {CaER: null, Ca_Cyt: null, p3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

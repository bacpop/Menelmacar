export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.AdoMet = 20;
    internal.CGS = 0.69999999999999996;
    internal.compartment = 1;
    internal.TS = 5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Phser;
    state[1] = internal.initial_Thr;
    state[2] = internal.initial_Cystathionine;
    state[3] = internal.initial_Hser;
    state[4] = internal.initial_Phi;
    state[5] = internal.initial_Cys;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cys_init", "Cystathionine_init", "Hser_init", "kcat2", "Ki2", "Ki3", "KmCYS", "KmPHSER", "Phi_init", "Phser_init", "Thr_init", "V0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cys_init", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cystathionine_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat2", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmCYS", internal, 460, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmPHSER", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phi_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V0", internal, 1, -Infinity, Infinity, false);
    internal.initial_Cys = internal.Cys_init;
    internal.initial_Cystathionine = internal.Cystathionine_init;
    internal.initial_Hser = internal.Hser_init;
    internal.initial_Phi = internal.Phi_init;
    internal.initial_Phser = internal.Phser_init;
    internal.initial_Thr = internal.Thr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Phser = state[0];
    const Phi = state[4];
    const Cys = state[5];
    dstatedt[5] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.V0 - 1 * internal.CGS * (internal.kcat2 / (1 + internal.KmCYS / Cys)) * Phser / (Phser + internal.KmPHSER * (1 + Phi / internal.Ki2) / (1 + internal.KmCYS / Cys)) - 1 * internal.TS * (0.00059000000000000003 + 0.062 * Math.pow((internal.AdoMet), (2.8999999999999999)) / (Math.pow((32), (2.8999999999999999)) + Math.pow((internal.AdoMet), (2.8999999999999999)))) * Phser / (1 + Phi / internal.Ki3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Phser", "Thr", "Cystathionine", "Hser", "Phi", "Cys"];
    this.metadata.internalOrder = {AdoMet: null, CGS: null, compartment: null, Cys_init: null, Cystathionine_init: null, Hser_init: null, initial_Cys: null, initial_Cystathionine: null, initial_Hser: null, initial_Phi: null, initial_Phser: null, initial_Thr: null, kcat2: null, Ki2: null, Ki3: null, KmCYS: null, KmPHSER: null, Phi_init: null, Phser_init: null, Thr_init: null, TS: null, V0: null};
    this.metadata.variableOrder = {Phser: null, Thr: null, Cystathionine: null, Hser: null, Phi: null, Cys: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

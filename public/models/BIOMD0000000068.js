export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.AdoMet = 20;
    internal.CGS = 0.69999999999999996;
    internal.compartment = 1;
    internal.Cys = 15;
    internal.Cystathionine = 0;
    internal.Hser = 0;
    internal.Phi = 10000;
    internal.Thr = 0;
    internal.TS = 5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_Phser;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["kcat2", "Ki2", "Ki3", "KmCYS", "KmPHSER", "Phser_init", "V0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "kcat2", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmCYS", internal, 460, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmPHSER", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V0", internal, 1, -Infinity, Infinity, false);
    internal.initial_Phser = internal.Phser_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Phser = state[0];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.V0 - 1 * internal.CGS * (internal.kcat2 / (1 + internal.KmCYS / internal.Cys)) * Phser / (Phser + internal.KmPHSER * (1 + internal.Phi / internal.Ki2) / (1 + internal.KmCYS / internal.Cys)) - 1 * internal.TS * (0.00059000000000000003 + 0.062 * Math.pow((internal.AdoMet), (2.8999999999999999)) / (Math.pow((32), (2.8999999999999999)) + Math.pow((internal.AdoMet), (2.8999999999999999)))) * Phser / (1 + internal.Phi / internal.Ki3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Phser"];
    this.metadata.internalOrder = {AdoMet: null, CGS: null, compartment: null, Cys: null, Cystathionine: null, Hser: null, initial_Phser: null, kcat2: null, Ki2: null, Ki3: null, KmCYS: null, KmPHSER: null, Phi: null, Phser_init: null, Thr: null, TS: null, V0: null};
    this.metadata.variableOrder = {Phser: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

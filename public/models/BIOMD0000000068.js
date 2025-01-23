export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.kcat2 = 30;
    internal.Ki2 = 2000;
    internal.Ki3 = 1000;
    internal.KmCYS = 460;
    internal.KmPHSER = 2500;
    internal.V0 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_Phser;
    state[1] = internal.initial_Thr;
    state[2] = internal.initial_Cystathionine;
    state[3] = internal.initial_Hser;
    state[4] = internal.initial_Phi;
    state[5] = internal.initial_Cys;
    state[6] = internal.initial_AdoMet;
    state[7] = internal.initial_CGS;
    state[8] = internal.initial_TS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AdoMet_init", "CGS_init", "Cys_init", "Cystathionine_init", "Hser_init", "Phi_init", "Phser_init", "Thr_init", "TS_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AdoMet_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cys_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cystathionine_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_AdoMet = internal.AdoMet_init;
    internal.initial_CGS = internal.CGS_init;
    internal.initial_Cys = internal.Cys_init;
    internal.initial_Cystathionine = internal.Cystathionine_init;
    internal.initial_Hser = internal.Hser_init;
    internal.initial_Phi = internal.Phi_init;
    internal.initial_Phser = internal.Phser_init;
    internal.initial_Thr = internal.Thr_init;
    internal.initial_TS = internal.TS_init;
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
    const AdoMet = state[6];
    const CGS = state[7];
    const TS = state[8];
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[5] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[8] = 0;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.V0 - 1 * CGS * (internal.kcat2 / (1 + internal.KmCYS / Cys)) * Phser / (Phser + internal.KmPHSER * (1 + Phi / internal.Ki2) / (1 + internal.KmCYS / Cys)) - 1 * TS * (0.00059000000000000003 + 0.062 * Math.pow((AdoMet), (2.8999999999999999)) / (Math.pow((32), (2.8999999999999999)) + Math.pow((AdoMet), (2.8999999999999999)))) * Phser / (1 + Phi / internal.Ki3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Phser", "Thr", "Cystathionine", "Hser", "Phi", "Cys", "AdoMet", "CGS", "TS"];
    this.metadata.internalOrder = {AdoMet_init: null, CGS_init: null, compartment: null, Cys_init: null, Cystathionine_init: null, Hser_init: null, initial_AdoMet: null, initial_CGS: null, initial_Cys: null, initial_Cystathionine: null, initial_Hser: null, initial_Phi: null, initial_Phser: null, initial_Thr: null, initial_TS: null, kcat2: null, Ki2: null, Ki3: null, KmCYS: null, KmPHSER: null, Phi_init: null, Phser_init: null, Thr_init: null, TS_init: null, V0: null};
    this.metadata.variableOrder = {Phser: null, Thr: null, Cystathionine: null, Hser: null, Phi: null, Cys: null, AdoMet: null, CGS: null, TS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

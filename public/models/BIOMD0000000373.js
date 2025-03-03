export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_V;
    state[1] = internal.initial_n;
    state[2] = internal.initial_c;
    state[3] = internal.initial_cer;
    state[4] = internal.initial_g6p;
    state[5] = internal.initial_fbp;
    state[6] = internal.initial_adp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["adp_init", "alpha", "atot", "bottom1", "c_init", "cat", "cer_init", "Cm", "epser", "famp", "fatp", "fbp_init", "fbt", "fcyt", "fer", "ffbp", "fmt", "g6p_init", "gCa", "gK", "gkatpbar", "gKCa", "k1", "k2", "k3", "k4", "kd", "kdd", "kg", "kpmca", "Kserca", "ktd", "ktt", "lambda", "lambdaer", "n_init", "pfkbas", "pleak", "r", "r1", "Rgk", "sigmaV", "taua", "taun", "topa1", "V_init", "VCa", "vg", "VK"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "adp_init", internal, 780, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 4.5000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atot", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bottom1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cat", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cer_init", internal, 185, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 5300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epser", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "famp", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fatp", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fbp_init", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fbt", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fcyt", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fer", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ffbp", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fmt", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g6p_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gCa", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 2700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gkatpbar", internal, 25000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKCa", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdd", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpmca", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kserca", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktd", internal, 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktt", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambdaer", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pfkbas", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pleak", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rgk", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmaV", internal, 31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taua", internal, 300000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taun", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "topa1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, - 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VCa", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vg", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 75, -Infinity, Infinity, false);
    internal.initial_adp = internal.adp_init;
    internal.initial_c = internal.c_init;
    internal.initial_cer = internal.cer_init;
    internal.initial_fbp = internal.fbp_init;
    internal.initial_g6p = internal.g6p_init;
    internal.initial_n = internal.n_init;
    internal.initial_V = internal.V_init;
    internal.topa2 = internal.topa1;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[6] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[5] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V", "n", "c", "cer", "g6p", "fbp", "adp"];
    this.metadata.internalOrder = {adp_init: null, alpha: null, atot: null, bottom1: null, c_init: null, cat: null, cer_init: null, Cm: null, COMpartment: null, epser: null, famp: null, fatp: null, fbp_init: null, fbt: null, fcyt: null, fer: null, ffbp: null, fmt: null, g6p_init: null, gCa: null, gK: null, gkatpbar: null, gKCa: null, initial_adp: null, initial_c: null, initial_cer: null, initial_fbp: null, initial_g6p: null, initial_n: null, initial_V: null, k1: null, k2: null, k3: null, k4: null, kd: null, kdd: null, kg: null, kpmca: null, Kserca: null, ktd: null, ktt: null, lambda: null, lambdaer: null, n_init: null, pfkbas: null, pleak: null, r: null, r1: null, Rgk: null, sigmaV: null, taua: null, taun: null, topa1: null, topa2: null, V_init: null, VCa: null, vg: null, VK: null};
    this.metadata.variableOrder = {V: null, n: null, c: null, cer: null, g6p: null, fbp: null, adp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

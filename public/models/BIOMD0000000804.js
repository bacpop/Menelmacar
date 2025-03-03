export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_B;
    state[2] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ab", "ac", "at", "B_init", "bb", "bc", "bt", "C_init", "gbb", "gbc", "gcb", "gcc", "gtc", "gtt", "hbt", "hct", "Metabolite_0", "Metabolite_1", "Metabolite_2", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ab", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ac", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "at", internal, 0.316227766016838, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, Math.pow((3000), (2 / 3)), -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bb", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bc", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bt", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 1.1000000000000001 * Math.pow((3000), (2 / 3)) / 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gbb", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gbc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gcb", internal, - 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gcc", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gtc", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gtt", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hbt", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hct", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_0", internal, 1.14404610267855, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_1", internal, 208.00838230519, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 10, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const B = state[1];
    const T = state[2];
    dstatedt[1] = 0 + 1 * internal.tme * (internal.ab * Math.pow((C), (internal.gbc)) * Math.pow((B), (internal.gbb)) * (1 - internal.hbt * T)) - 1 * internal.tme * internal.bb * B;
    dstatedt[0] = 0 + 1 * internal.tme * (internal.ac * Math.pow((C), (internal.gcc)) * Math.pow((B), (internal.gcb)) * (1 + internal.hct * T)) - 1 * internal.tme * internal.bc * C;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.at * Math.pow((C), (internal.gtc)) * Math.pow((T), (internal.gtt))) - 1 * internal.tme * internal.bt * T;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "B", "T"];
    this.metadata.internalOrder = {ab: null, ac: null, at: null, B_init: null, bb: null, bc: null, bt: null, C_init: null, gbb: null, gbc: null, gcb: null, gcc: null, gtc: null, gtt: null, hbt: null, hct: null, initial_B: null, initial_C: null, initial_T: null, Metabolite_0: null, Metabolite_1: null, Metabolite_2: null, T_init: null, tme: null};
    this.metadata.variableOrder = {C: null, B: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

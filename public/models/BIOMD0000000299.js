export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    internal.Nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_FC;
    state[2] = internal.initial_FN;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["FC_init", "FN_init", "k1", "k2", "Kd", "KI", "Km", "ks", "M_init", "n", "vd", "vm", "vs"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "FC_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FN_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KI", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, 0.505, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vs", internal, 1.6000000000000001, -Infinity, Infinity, false);
    internal.initial_FC = internal.FC_init;
    internal.initial_FN = internal.FN_init;
    internal.initial_M = internal.M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const FC = state[1];
    const FN = state[2];
    dstatedt[1] = 0 + internal.ks * M + internal.k2 * FN - (internal.vd * (FC / (internal.Kd + FC)) + internal.k1 * FC);
    dstatedt[2] = 0 + internal.k1 * FC - internal.k2 * FN;
    dstatedt[0] = 0 + internal.vs * (Math.pow((internal.KI), (internal.n)) / (Math.pow((internal.KI), (internal.n)) + Math.pow((FN), (internal.n)))) - internal.vm * (M / (internal.Km + M));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "FC", "FN"];
    this.metadata.internalOrder = {Cytoplasm: null, FC_init: null, FN_init: null, initial_FC: null, initial_FN: null, initial_M: null, k1: null, k2: null, Kd: null, KI: null, Km: null, ks: null, M_init: null, n: null, Nucleus: null, vd: null, vm: null, vs: null};
    this.metadata.variableOrder = {M: null, FC: null, FN: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

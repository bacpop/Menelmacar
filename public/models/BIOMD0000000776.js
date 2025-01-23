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
    var state = Array(2).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b", "C0", "Ncrit", "Ninf", "R_init", "S_init", "t1", "t2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b", internal, 0.0059280000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ncrit", internal, 500000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ninf", internal, 2000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t2", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const R = state[1];
    var N = R + S;
    dstatedt[1] = 0 + 1 * internal.tme * (- internal.b * Math.log(N / internal.Ninf) * (internal.t1 * S - internal.t2 * R)) + 1 * internal.tme * (- internal.b * Math.log(N / internal.Ninf) * R);
    dstatedt[0] = 0 + 1 * internal.tme * (- internal.b * Math.log(N / internal.Ninf) * S) - 1 * internal.tme * (- internal.b * Math.log(N / internal.Ninf) * internal.C0 * S) - 1 * internal.tme * (- internal.b * Math.log(N / internal.Ninf) * (internal.t1 * S - internal.t2 * R));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "R"];
    this.metadata.internalOrder = {b: null, C0: null, initial_R: null, initial_S: null, Ncrit: null, Ninf: null, R_init: null, S_init: null, t1: null, t2: null, tme: null};
    this.metadata.variableOrder = {S: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

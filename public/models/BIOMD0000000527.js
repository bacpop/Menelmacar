export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.LN = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_L;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c1", "c10", "c3", "c5", "L_init", "mu1", "mu10", "mu3", "mu5", "r1", "r10", "r3", "r5", "t1", "t10", "t3", "t5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c10", internal, 2.4299999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 5.0429009999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c5", internal, 2.497735, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 297.78957000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu10", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 2.8195198000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r10", internal, 0.37577640000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 4.5867006999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r5", internal, 1.8812956000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t10", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t3", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t5", internal, 5, -Infinity, Infinity, false);
    internal.initial_L = internal.L_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    dstatedt[0] = 0 + (((t >= 0 && t <= internal.t1) ? internal.mu1 + (internal.r1 - internal.c1) * L : (t > internal.t5 && t <= internal.t10)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L"];
    this.metadata.internalOrder = {c1: null, c10: null, c3: null, c5: null, initial_L: null, L_init: null, LN: null, mu1: null, mu10: null, mu3: null, mu5: null, r1: null, r10: null, r3: null, r5: null, t1: null, t10: null, t3: null, t5: null};
    this.metadata.variableOrder = {L: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

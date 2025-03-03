export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Macrophage = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "b1", "b2", "k1", "k2", "l1", "l2", "n1", "n2", "p1", "p2", "q1", "q2", "S1", "S2", "x1_init", "x2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1", internal, 3.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2", internal, 3.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x2 = state[1];
    var H_min_x_1 = Math.pow((internal.p1), (internal.l1)) / (Math.pow((internal.p1), (internal.l1)) + Math.pow((x1), (internal.l1)));
    var H_min_x2 = Math.pow((internal.p2), (internal.l2)) / (Math.pow((internal.p2), (internal.l2)) + Math.pow((x2), (internal.l2)));
    var H_plus_x1 = Math.pow((x1), (internal.n1)) / (Math.pow((x1), (internal.n1)) + Math.pow((internal.k1), (internal.n1)));
    var H_plus_x2 = Math.pow((x2), (internal.n2)) / (Math.pow((x2), (internal.n2)) + Math.pow((internal.k2), (internal.n2)));
    dstatedt[0] = 0 + 1 * internal.Macrophage * ((internal.a1 * H_plus_x1 + internal.S1) * H_min_x2) + 1 * internal.Macrophage * (internal.b1) - 1 * internal.Macrophage * internal.q1 * x1;
    dstatedt[1] = 0 + 1 * internal.Macrophage * (internal.a2 * H_plus_x2) + 1 * internal.Macrophage * (internal.S2 * H_min_x_1) + 1 * internal.Macrophage * (internal.b2) - 1 * internal.Macrophage * internal.q2 * x2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2"];
    this.metadata.internalOrder = {a1: null, a2: null, b1: null, b2: null, initial_x1: null, initial_x2: null, k1: null, k2: null, l1: null, l2: null, Macrophage: null, n1: null, n2: null, p1: null, p2: null, q1: null, q2: null, S1: null, S2: null, x1_init: null, x2_init: null};
    this.metadata.variableOrder = {x1: null, x2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

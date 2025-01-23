export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_L;
    state[2] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b1", "b2", "b3", "c", "g1", "g2", "h", "L_init", "R_init", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b1", internal, 1.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.96999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 1.3899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_L = internal.L_init;
    internal.initial_R = internal.R_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const L = state[1];
    const T = state[2];
    dstatedt[1] = 0 + 1 * internal.Compartment * (internal.g1 * R) - 1 * internal.Compartment * (internal.b2 * L);
    dstatedt[2] = 0 + 1 * internal.Compartment * (internal.g2 * L) - 1 * internal.Compartment * (internal.b3 * T);
    var x = T - internal.c / internal.h;
    var H = ((x > 0 ? 1 : 0));
    dstatedt[0] = 0 - 1 * internal.Compartment * (internal.b1 * R) + 1 * internal.Compartment * ((internal.c - internal.h * T) * (1 - H));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "L", "T"];
    this.metadata.internalOrder = {b1: null, b2: null, b3: null, c: null, Compartment: null, g1: null, g2: null, h: null, initial_L: null, initial_R: null, initial_T: null, L_init: null, R_init: null, T_init: null};
    this.metadata.variableOrder = {R: null, L: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

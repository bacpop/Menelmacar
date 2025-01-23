export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_I;
    state[2] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a0", "b", "C_init", "f", "I_init", "Ie", "K", "R_init", "u", "y"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a0", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 9000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ie", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y", internal, 0.20000000000000001, -Infinity, Infinity, false);
    internal.b0 = internal.a0 * internal.f;
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const I = state[1];
    const R = state[2];
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.a * C * (1 - (C + R) / internal.K)) - 1 * internal.tumor_microenvironment * (internal.a0 * C * I);
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.y * I * (1 - I / (internal.Ie + internal.u * (C + 0.001 * R) * I)));
    dstatedt[2] = 0 + 1 * internal.tumor_microenvironment * (internal.b * R * (1 - (R + C) / internal.K)) - 1 * internal.tumor_microenvironment * (internal.b0 * R * I);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "I", "R"];
    this.metadata.internalOrder = {a: null, a0: null, b: null, b0: null, C_init: null, f: null, I_init: null, Ie: null, initial_C: null, initial_I: null, initial_R: null, K: null, R_init: null, tumor_microenvironment: null, u: null, y: null};
    this.metadata.variableOrder = {C: null, I: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

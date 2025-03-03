export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.ER = 1;
    internal.Extracellular = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "beta", "gamma", "k1", "kxk", "n", "x_init", "y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y = state[1];
    var fy = Math.pow((y), (internal.n)) / (Math.pow((internal.a), (internal.n)) + Math.pow((y), (internal.n)));
    dstatedt[0] = 0 - 1 * internal.Cytosol * internal.kxk * (x - y) + 1 * internal.k1 * y * internal.ER - 1 * internal.alpha * fy * (x - y) * internal.Cytosol;
    dstatedt[1] = 0 + 1 * internal.gamma * internal.Cytosol + 1 * internal.Cytosol * internal.kxk * (x - y) - 1 * internal.k1 * y * internal.ER + 1 * internal.alpha * fy * (x - y) * internal.Cytosol - 1 * internal.beta * y * internal.Extracellular;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y"];
    this.metadata.internalOrder = {a: null, alpha: null, beta: null, Cytosol: null, ER: null, Extracellular: null, gamma: null, initial_x: null, initial_y: null, k1: null, kxk: null, n: null, x_init: null, y_init: null};
    this.metadata.variableOrder = {x: null, y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

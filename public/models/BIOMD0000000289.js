export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.A_im = 0;
    internal.body = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_R;
    state[2] = internal.initial_E;
    state[3] = internal.initial_G;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "b1", "beta", "E_init", "f", "G_init", "gamma", "lambdaE", "muA", "muE", "muG", "muR", "pi1", "R_init", "sigma1", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambdaE", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "muA", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "muE", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "muG", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "muR", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pi1", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma1", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_E = internal.E_init;
    internal.initial_G = internal.G_init;
    internal.initial_R = internal.R_init;
    internal.mA = internal.b1 + internal.muA;
    internal.mG = internal.muG + internal.v;
    internal.R0 = internal.f * internal.v * internal.lambdaE * internal.gamma / (internal.mG * internal.mA * internal.muE);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const R = state[1];
    const E = state[2];
    const G = state[3];
    dstatedt[0] = 0 + 1 * internal.f * internal.v * G - 1 * internal.muA * A - 1 * internal.b1 * A - 1 * internal.sigma1 * A * R;
    dstatedt[2] = 0 + 1 * internal.lambdaE * A - 1 * internal.muE * E;
    dstatedt[3] = 0 - 1 * internal.v * G + 1 * internal.gamma * E - 1 * internal.muG * G;
    dstatedt[1] = 0 + 1 * internal.beta * A + 1 * internal.pi1 * E * A - 1 * internal.muR * R;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "R", "E", "G"];
    this.metadata.internalOrder = {A_im: null, A_init: null, b1: null, beta: null, body: null, E_init: null, f: null, G_init: null, gamma: null, initial_A: null, initial_E: null, initial_G: null, initial_R: null, lambdaE: null, mA: null, mG: null, muA: null, muE: null, muG: null, muR: null, pi: null, pi1: null, R_init: null, R0: null, sigma1: null, v: null};
    this.metadata.variableOrder = {A: null, R: null, E: null, G: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

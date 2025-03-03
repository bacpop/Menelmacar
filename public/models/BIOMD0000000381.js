export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_Ma;
    state[2] = internal.initial_Bn;
    state[3] = internal.initial_Ba;
    state[4] = internal.initial_Cy;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "Amax", "b", "Ba_init", "Bn_init", "c", "Cy_init", "d", "delta", "e1", "e2", "f1", "f2", "g", "J", "kc", "kxk", "M_init", "Ma_init", "Wmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 5.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Amax", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ba_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f2", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 477000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ma_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wmax", internal, 40000000, -Infinity, Infinity, false);
    internal.initial_Ba = internal.Ba_init;
    internal.initial_Bn = internal.Bn_init;
    internal.initial_Cy = internal.Cy_init;
    internal.initial_M = internal.M_init;
    internal.initial_Ma = internal.Ma_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const Ma = state[1];
    const Bn = state[2];
    const Ba = state[3];
    const Cy = state[4];
    dstatedt[2] = internal.d * Ba - (internal.f1 * M + internal.f2 * Ma) * Bn;
    dstatedt[4] = internal.alpha * Bn * Ma - internal.delta * Cy;
    dstatedt[0] = internal.J + (internal.kxk + internal.b) * Ma - internal.c * M - internal.f1 * M * Ba - internal.e1 * M * (M + Ma);
    dstatedt[1] = internal.f1 * M * Ba - internal.kxk * Ma - internal.e2 * Ma * (M + Ma);
    var parameter_1 = Math.pow(((t - 9) / 3), (2));
    var W = internal.Wmax * Math.exp(- parameter_1);
    dstatedt[3] = W + internal.Amax * Cy / (internal.kc + Cy) - (internal.f1 * M + internal.f2 * Ma + internal.d) * Ba;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "Ma", "Bn", "Ba", "Cy"];
    this.metadata.internalOrder = {alpha: null, Amax: null, b: null, Ba_init: null, Bn_init: null, c: null, compartment1: null, Cy_init: null, d: null, delta: null, e1: null, e2: null, f1: null, f2: null, g: null, initial_Ba: null, initial_Bn: null, initial_Cy: null, initial_M: null, initial_Ma: null, J: null, kc: null, kxk: null, M_init: null, Ma_init: null, Wmax: null};
    this.metadata.variableOrder = {M: null, Ma: null, Bn: null, Ba: null, Cy: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

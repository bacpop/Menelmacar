export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tumor = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Ttum;
    state[1] = internal.initial_Tplas;
    state[2] = internal.initial_Tnew;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "d", "kf1", "kf2", "kr1", "kr2", "n", "r", "T0", "Tnew_init", "Tplas_init", "Ttum_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.67000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf1", internal, 0.067000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf2", internal, 0.00067000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr1", internal, 0.00067000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr2", internal, 0.067000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.069000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T0", internal, 3000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tnew_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tplas_init", internal, 4000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ttum_init", internal, 1000000, -Infinity, Infinity, false);
    internal.initial_Tnew = internal.Tnew_init;
    internal.initial_Tplas = internal.Tplas_init;
    internal.initial_Ttum = internal.Ttum_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ttum = state[0];
    const Tplas = state[1];
    const Tnew = state[2];
    dstatedt[2] = 0 + 1 * internal.Tumor * (internal.kf2 * Tplas - internal.b * internal.kr2 * Tnew) + 1 * internal.Tumor * (internal.a * internal.r * Tnew * (1 - Tnew / internal.T0));
    dstatedt[1] = 0 + 1 * internal.Tumor * (internal.b * internal.kf1 * Ttum - internal.kr1 * Tplas) - 1 * internal.Tumor * (internal.d * internal.c * Tplas) - 1 * internal.Tumor * (internal.n * (internal.kf2 * Tplas - internal.b * internal.kr2 * Tnew));
    dstatedt[0] = 0 - 1 * internal.Tumor * (internal.b * internal.kf1 * Ttum - internal.kr1 * Tplas) + 1 * internal.Tumor * (internal.a * internal.r * Ttum * (1 - Ttum / internal.T0));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ttum", "Tplas", "Tnew"];
    this.metadata.internalOrder = {a: null, b: null, c: null, d: null, initial_Tnew: null, initial_Tplas: null, initial_Ttum: null, kf1: null, kf2: null, kr1: null, kr2: null, n: null, r: null, T0: null, Tnew_init: null, Tplas_init: null, Ttum_init: null, Tumor: null};
    this.metadata.variableOrder = {Ttum: null, Tplas: null, Tnew: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

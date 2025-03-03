export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.kxk = 9.8436754999999998;
    internal.Plasma_pool = 1;
    internal.PTG_pool = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_Ca;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "Ca_init", "Ca0", "Ca0_baseline", "Ca1", "lambda_1", "lambda_2", "m1", "m2", "R", "t0", "x1_init", "x1_n", "x2_init", "x2_max", "x2_min", "x2_n"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.056899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_init", internal, 1.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca0", internal, 1.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca0_baseline", internal, 1.2549999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca1", internal, 0.26240000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_1", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_2", internal, 0.5595, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 112.52, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m2", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 1.2161999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t0", internal, 575, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_n", internal, 490.77999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_max", internal, 14.042999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_min", internal, 0.66969999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_n", internal, 6.6289999999999996, -Infinity, Infinity, false);
    internal.A = internal.lambda_1 * internal.lambda_2 * internal.x2_max / (internal.kxk - internal.lambda_2 * internal.x2_max);
    internal.B = internal.lambda_1 * internal.lambda_2 * internal.x2_min / (internal.kxk - internal.lambda_2 * internal.x2_min);
    internal.initial_Ca = internal.Ca_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[2] = 0;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "Ca"];
    this.metadata.internalOrder = {A: null, alpha: null, B: null, beta: null, Ca_init: null, Ca0: null, Ca0_baseline: null, Ca1: null, initial_Ca: null, initial_x1: null, initial_x2: null, kxk: null, lambda_1: null, lambda_2: null, m1: null, m2: null, Plasma_pool: null, PTG_pool: null, R: null, t0: null, x1_init: null, x1_n: null, x2_init: null, x2_max: null, x2_min: null, x2_n: null};
    this.metadata.variableOrder = {x1: null, x2: null, Ca: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

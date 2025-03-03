export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.k1 = 1;
    internal.kxk = 97.751710654936502;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_U;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V;
    state[3] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aa", "alpha", "bb", "beta", "C_init", "delta", "delta0", "delta1", "gamma", "I_init", "K", "lamda", "Metabolite_3", "q", "U_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aa", internal, 0.20599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.20599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bb", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.51149999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta0", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta1", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda", internal, 4.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.a = internal.aa / internal.delta;
    internal.alph = internal.alpha / internal.delta;
    internal.C0 = internal.Metabolite_3;
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_U = internal.U_init;
    internal.initial_V = internal.V_init;
    internal.p = internal.lamda / internal.delta;
    internal.V0 = internal.K;
    internal.y = internal.gamma / internal.delta;
    internal.b = internal.bb * internal.K / internal.V0;
    internal.bet = internal.beta * internal.V0 / internal.delta;
    internal.d0 = internal.delta0 * internal.C0 / internal.delta;
    internal.d1 = internal.delta1 * internal.C0 / internal.delta;
    internal.f = internal.q / (internal.delta * internal.C0);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const I = state[1];
    const V = state[2];
    const C = state[3];
    dstatedt[3] = 0 + 1 * internal.tme * (internal.kxk) - 1 * internal.tme * internal.p * C;
    dstatedt[1] = 0 + 1 * internal.tme * (internal.bet * U * V) - 1 * internal.tme * internal.k1 * I - 1 * internal.tme * (internal.d1 * C * I);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.alph * U * (1 - U - I)) - 1 * internal.tme * (internal.d0 * C * U) - 1 * internal.tme * (internal.bet * U * V);
    dstatedt[2] = 0 - 1 * internal.tme * (internal.bet * U * V) + 1 * internal.tme * (internal.b * I) - 1 * internal.tme * internal.y * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "I", "V", "C"];
    this.metadata.internalOrder = {a: null, aa: null, alph: null, alpha: null, b: null, bb: null, bet: null, beta: null, C_init: null, C0: null, d0: null, d1: null, delta: null, delta0: null, delta1: null, f: null, gamma: null, I_init: null, initial_C: null, initial_I: null, initial_U: null, initial_V: null, K: null, k1: null, kxk: null, lamda: null, Metabolite_3: null, p: null, q: null, tme: null, U_init: null, V_init: null, V0: null, y: null};
    this.metadata.variableOrder = {U: null, I: null, V: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

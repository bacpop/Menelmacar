export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.initial_h = 0.59611999999999998;
    internal.initial_m = 0.052932;
    internal.initial_n = 0.31768000000000002;
    internal.initial_V = 0;
    internal.unit_compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_V;
    state[1] = internal.initial_m;
    state[2] = internal.initial_h;
    state[3] = internal.initial_n;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cm", "E_K", "E_L", "E_Na", "E_R", "g_K", "g_L", "g_Na", "I"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_K", internal, - 63, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_L", internal, - 85.613, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_Na", internal, - 190, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_R", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K", internal, 36, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_L", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_Na", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I", internal, 0, -Infinity, Infinity, false);
    internal.V_K = internal.E_K - internal.E_R;
    internal.V_L = internal.E_L - internal.E_R;
    internal.V_Na = internal.E_Na - internal.E_R;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V = state[0];
    const m = state[1];
    const h = state[2];
    const n = state[3];
    var alpha_h = 0.070000000000000007 * Math.exp(V / 20);
    var alpha_m = 0.10000000000000001 * (V + 25) / (Math.exp((V + 25) / 10) - 1);
    var alpha_n = 0.01 * (V + 10) / (Math.exp((V + 10) / 10) - 1);
    var beta_h = 1 / (Math.exp((V + 30) / 10) + 1);
    var beta_m = 4 * Math.exp(V / 18);
    var beta_n = 0.125 * Math.exp(V / 80);
    dstatedt[2] = alpha_h * (1 - h) - beta_h * h;
    dstatedt[1] = alpha_m * (1 - m) - beta_m * m;
    dstatedt[3] = alpha_n * (1 - n) - beta_n * n;
    var i_K = internal.g_K * Math.pow((n), (4)) * (V - internal.V_K);
    var i_L = internal.g_L * (V - internal.V_L);
    var i_Na = internal.g_Na * Math.pow((m), (3)) * h * (V - internal.V_Na);
    dstatedt[0] = (internal.I - (i_Na + i_K + i_L)) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V", "m", "h", "n"];
    this.metadata.internalOrder = {Cm: null, E_K: null, E_L: null, E_Na: null, E_R: null, g_K: null, g_L: null, g_Na: null, I: null, initial_h: null, initial_m: null, initial_n: null, initial_V: null, unit_compartment: null, V_K: null, V_L: null, V_Na: null};
    this.metadata.variableOrder = {V: null, m: null, h: null, n: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

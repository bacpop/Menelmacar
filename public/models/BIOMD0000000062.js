export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.g = 25;
    internal.k1 = 65;
    internal.k2 = 25;
    internal.Kg = 0.20000000000000001;
    internal.ki1 = 3.5299999999999998;
    internal.Ki2 = 810;
    internal.mu = 0.01;
    internal.nH = 1.9199999999999999;
    internal.Ot = 0.0033;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var To_init = internal.Tomax * internal.Tex / (internal.Tex * (1 + internal.initial_Ts / internal.f_val) + internal.e_val);
    var Tt_init = internal.initial_To + internal.initial_Ts;
    internal.initial_To = To_init;
    internal.initial_Tt = Tt_init;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Enz;
    state[1] = internal.initial_Ts;
    state[2] = internal.initial_Tt;
    state[3] = internal.initial_To;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["e_val", "Enz_init", "f_val", "Tex", "Tomax", "Ts_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "e_val", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Enz_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_val", internal, 380, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tex", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tomax", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ts_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Enz = internal.Enz_init;
    internal.initial_Ts = internal.Ts_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Enz = state[0];
    const Ts = state[1];
    const Tt = state[2];
    dstatedt[3] = 0 + 0;
    dstatedt[2] = 0 + 0;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.k1 * Math.pow((internal.ki1), (internal.nH)) * internal.Ot / (Math.pow((internal.ki1), (internal.nH)) + Math.pow((Tt), (internal.nH))) - 1 * internal.compartment * internal.mu * Enz;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k2 * Enz * internal.Ki2 / (internal.Ki2 + Tt) - 1 * internal.compartment * internal.g * Ts / (internal.Kg + Ts) - 1 * internal.compartment * internal.mu * Ts;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Enz", "Ts", "Tt", "To"];
    this.metadata.internalOrder = {compartment: null, e_val: null, Enz_init: null, f_val: null, g: null, initial_Enz: null, initial_To: null, initial_Ts: null, initial_Tt: null, k1: null, k2: null, Kg: null, ki1: null, Ki2: null, mu: null, nH: null, Ot: null, Tex: null, Tomax: null, Ts_init: null};
    this.metadata.variableOrder = {Enz: null, Ts: null, Tt: null, To: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Enz;
    state[1] = internal.initial_Ts;
    state[2] = internal.initial_Tt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["e_val", "Enz_init", "f_val", "g", "k1", "k2", "Kg", "ki1", "Ki2", "mu", "nH", "Ot", "Tex", "Tomax", "Ts_init", "Tt_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "e_val", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Enz_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_val", internal, 380, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki1", internal, 3.5299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki2", internal, 810, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nH", internal, 1.9199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ot", internal, 0.0033, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tex", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tomax", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ts_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tt_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Enz = internal.Enz_init;
    internal.initial_Ts = internal.Ts_init;
    internal.initial_Tt = internal.Tt_init;
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
    dstatedt[2] = 0;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.k1 * Math.pow((internal.ki1), (internal.nH)) * internal.Ot / (Math.pow((internal.ki1), (internal.nH)) + Math.pow((Tt), (internal.nH))) - 1 * internal.compartment * internal.mu * Enz;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k2 * Enz * internal.Ki2 / (internal.Ki2 + Tt) - 1 * internal.compartment * internal.g * Ts / (internal.Kg + Ts) - 1 * internal.compartment * internal.mu * Ts;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Enz", "Ts", "Tt"];
    this.metadata.internalOrder = {compartment: null, e_val: null, Enz_init: null, f_val: null, g: null, initial_Enz: null, initial_Ts: null, initial_Tt: null, k1: null, k2: null, Kg: null, ki1: null, Ki2: null, mu: null, nH: null, Ot: null, Tex: null, Tomax: null, Ts_init: null, Tt_init: null};
    this.metadata.variableOrder = {Enz: null, Ts: null, Tt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

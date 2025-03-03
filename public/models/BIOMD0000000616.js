export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default_compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_n;
    state[1] = internal.initial_c;
    state[2] = internal.initial_a;
    state[3] = internal.initial_m;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "a_init", "alt", "Bat", "c_init", "Gat", "Gmt", "m_init", "n_init", "t1", "Tt", "vt"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alt", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bat", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gat", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gmt", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tt", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vt", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_a = internal.a_init;
    internal.initial_c = internal.c_init;
    internal.initial_m = internal.m_init;
    internal.initial_n = internal.n_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const n = state[0];
    const c = state[1];
    const a = state[2];
    const m = state[3];
    dstatedt[2] = 0 + 1 * internal.default_compartment * (internal.vt * n / internal.default_compartment) - 1 * internal.default_compartment * (internal.Gat * a / internal.default_compartment) - 1 * internal.default_compartment * (internal.Tt * m * a / internal.default_compartment);
    dstatedt[1] = 0 + 1 * internal.default_compartment * (internal.alt * ((t < internal.A * internal.pi ? Math.pow((Math.sin(t)), (2)) : 0)) * ((t < internal.t1 ? 1 : 0)) / internal.default_compartment) + 1 * internal.default_compartment * (internal.Gat * (Math.pow((a), (2)) / (Math.pow((internal.Bat), (2)) + Math.pow((a), (2)))) / internal.default_compartment) - 1 * internal.default_compartment * (c / internal.default_compartment);
    dstatedt[3] = 0 + 1 * internal.default_compartment * (c / internal.default_compartment) - 1 * internal.default_compartment * (internal.Gmt * m / internal.default_compartment);
    dstatedt[0] = 0 + 1 * internal.default_compartment * (c / internal.default_compartment) - 1 * internal.default_compartment * (internal.vt * n / internal.default_compartment);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "n", "c", "a", "m"];
    this.metadata.internalOrder = {A: null, a_init: null, alt: null, Bat: null, c_init: null, default_compartment: null, Gat: null, Gmt: null, initial_a: null, initial_c: null, initial_m: null, initial_n: null, m_init: null, n_init: null, pi: null, t1: null, Tt: null, vt: null};
    this.metadata.variableOrder = {n: null, c: null, a: null, m: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

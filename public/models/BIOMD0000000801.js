export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.pi = 3.1415929999999999;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_B;
    state[2] = internal.initial_I;
    state[3] = internal.initial_S;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ao", "as", "at", "ati", "B_init", "di", "do1", "dt", "dti", "dto", "dtt", "I_init", "kt", "omin", "oo", "S_init", "T_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ao", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "as", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "at", internal, 1.575, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ati", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0.00039199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "di", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "do1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dt", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dti", internal, 0.071999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dto", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dtt", internal, 0.71999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.00028400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omin", internal, 0.00080000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oo", internal, 0.0016000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.00043899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.69999999999999996, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_I = internal.I_init;
    internal.initial_S = internal.S_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const B = state[1];
    const I = state[2];
    const S = state[3];
    dstatedt[1] = 0 - 1 * internal.tme * internal.ao * B - 1 * internal.tme * (internal.dto * T * B) - 1 * internal.tme * ((internal.do1 + internal.as * (internal.v + I)) * B) + 1 * internal.tme * internal.ao * S;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.as * (internal.v + I) * B) + 1 * internal.tme * (internal.ati * T * I) - 1 * internal.tme * internal.di * I - 1 * internal.tme * (internal.dtt * T * I);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.at * B * T * (1 - T / internal.kt)) - 1 * internal.tme * internal.dt * T - 1 * internal.tme * (internal.dti * I * T);
    var F = ((internal.omin < internal.oo * Math.sin(6 * internal.pi * t) ? internal.oo * Math.sin(6 * internal.pi * t) : internal.omin));
    dstatedt[3] = 0 + 1 * internal.tme * internal.ao * B + 1 * internal.tme * (F) - 1 * internal.tme * internal.do1 * S - 1 * internal.tme * internal.ao * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "B", "I", "S"];
    this.metadata.internalOrder = {ao: null, as: null, at: null, ati: null, B_init: null, di: null, do1: null, dt: null, dti: null, dto: null, dtt: null, I_init: null, initial_B: null, initial_I: null, initial_S: null, initial_T: null, kt: null, omin: null, oo: null, pi: null, S_init: null, T_init: null, tme: null, v: null};
    this.metadata.variableOrder = {T: null, B: null, I: null, S: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

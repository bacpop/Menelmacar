export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_V;
    state[1] = internal.initial_n;
    state[2] = internal.initial_s1;
    state[3] = internal.initial_s2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cm", "gCa", "gK", "gl", "gs1", "gs2", "lambda", "n_init", "s1_init", "s2_init", "sm", "sn", "ss1", "ss2", "taus1", "taus2", "tnbar", "V_init", "VCa", "VK", "Vl", "Vm", "Vn", "Vs1", "Vs2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cm", internal, 4524, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gCa", internal, 280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 1300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gl", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gs1", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gs2", internal, 32, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0.434, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sm", internal, 7.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ss1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ss2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taus1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taus2", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tnbar", internal, 8.3000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, - 43, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VCa", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vl", internal, - 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, - 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vn", internal, - 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vs1", internal, - 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vs2", internal, - 42, -Infinity, Infinity, false);
    internal.initial_n = internal.n_init;
    internal.initial_s1 = internal.s1_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[1] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[0] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V", "n", "s1", "s2"];
    this.metadata.internalOrder = {Cm: null, Compartment: null, gCa: null, gK: null, gl: null, gs1: null, gs2: null, initial_n: null, initial_s1: null, initial_s2: null, initial_V: null, lambda: null, n_init: null, s1_init: null, s2_init: null, sm: null, sn: null, ss1: null, ss2: null, taus1: null, taus2: null, tnbar: null, V_init: null, VCa: null, VK: null, Vl: null, Vm: null, Vn: null, Vs1: null, Vs2: null};
    this.metadata.variableOrder = {V: null, n: null, s1: null, s2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

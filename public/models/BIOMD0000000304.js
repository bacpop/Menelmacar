export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.g_Ca = 0.0040000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_V_membrane;
    state[1] = internal.initial_h1;
    state[2] = internal.initial_x1;
    state[3] = internal.initial_n1;
    state[4] = internal.initial_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c_init", "f", "g_I", "g_K", "g_K_Ca", "g_L", "g_T", "h1_init", "K_c", "K_p", "n1_init", "tau_x", "V_Ca", "V_I", "V_K", "V_L", "V_membrane_init", "x1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1.2090000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 78.713999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_I", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_Ca", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_L", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_T", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_c", internal, 0.0085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_x", internal, 235, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Ca", internal, 140, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_I", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_K", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_L", internal, - 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_membrane_init", internal, - 55, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0.27000000000000002, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    internal.initial_h1 = internal.h1_init;
    internal.initial_n1 = internal.n1_init;
    internal.initial_V_membrane = internal.V_membrane_init;
    internal.initial_x1 = internal.x1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[3] = 0;
    dstatedt[0] = 0;
    dstatedt[2] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_membrane", "h1", "x1", "n1", "c"];
    this.metadata.internalOrder = {a: null, b: null, c_init: null, COMpartment: null, f: null, g_Ca: null, g_I: null, g_K: null, g_K_Ca: null, g_L: null, g_T: null, h1_init: null, initial_c: null, initial_h1: null, initial_n1: null, initial_V_membrane: null, initial_x1: null, K_c: null, K_p: null, n1_init: null, tau_x: null, V_Ca: null, V_I: null, V_K: null, V_L: null, V_membrane_init: null, x1_init: null};
    this.metadata.variableOrder = {V_membrane: null, h1: null, x1: null, n1: null, c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

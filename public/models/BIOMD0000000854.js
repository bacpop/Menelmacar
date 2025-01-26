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
    var state = Array(4).fill(0);
    state[0] = internal.initial_Ac;
    state[1] = internal.initial_Pc;
    state[2] = internal.initial_Ap;
    state[3] = internal.initial_Pp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ac_init", "alpha1", "alpha100", "Ap_init", "beta1", "kin", "koff", "Pc_init", "Pp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha100", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ap_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kin", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ac = internal.Ac_init;
    internal.initial_Ap = internal.Ap_init;
    internal.initial_Pc = internal.Pc_init;
    internal.initial_Pp = internal.Pp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ac = state[0];
    const Pc = state[1];
    const Ap = state[2];
    const Pp = state[3];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.koff * Pc - 1 * internal.compartment * (internal.alpha1 * internal.kin * Ac) + 1 * internal.compartment * internal.kin * Ap;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha1 * internal.kin * Ac) - 1 * internal.compartment * internal.kin * Ap + 1 * internal.compartment * internal.koff * Pp - 1 * internal.compartment * (internal.beta1 * internal.koff * Ap);
    dstatedt[1] = 0 - 1 * internal.compartment * internal.koff * Pc + 1 * internal.compartment * internal.kin * Pp - 1 * internal.compartment * (internal.alpha1 * internal.kin * Pc);
    dstatedt[3] = 0 - 1 * internal.compartment * internal.kin * Pp + 1 * internal.compartment * (internal.alpha1 * internal.kin * Pc) - 1 * internal.compartment * internal.koff * Pp + 1 * internal.compartment * (internal.beta1 * internal.koff * Ap);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ac", "Pc", "Ap", "Pp"];
    this.metadata.internalOrder = {Ac_init: null, alpha1: null, alpha100: null, Ap_init: null, beta1: null, compartment: null, initial_Ac: null, initial_Ap: null, initial_Pc: null, initial_Pp: null, kin: null, koff: null, Pc_init: null, Pp_init: null};
    this.metadata.variableOrder = {Ac: null, Pc: null, Ap: null, Pp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

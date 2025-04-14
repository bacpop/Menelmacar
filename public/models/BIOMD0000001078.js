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
    var state = Array(2).fill(0);
    state[0] = internal.initial_Pu;
    state[1] = internal.initial_Pp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["kdegp", "kdegu", "ke", "ksyn", "kw"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "kdegp", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegu", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kw", internal, 0.0625, -Infinity, Infinity, false);
    internal.ModelValue_0 = internal.kdegu;
    internal.ModelValue_1 = internal.kdegp;
    internal.ModelValue_2 = internal.ke;
    internal.ModelValue_3 = internal.kw;
    internal.ModelValue_6 = internal.ksyn;
    internal.Pp_total = internal.ModelValue_6 * internal.ModelValue_3 / (internal.ModelValue_1 * internal.ModelValue_0 + internal.ModelValue_0 * internal.ModelValue_2 + internal.ModelValue_1 * internal.ModelValue_3);
    internal.Pu_total = internal.ModelValue_6 * (internal.ModelValue_1 + internal.ModelValue_2) / (internal.ModelValue_1 * internal.ModelValue_0 + internal.ModelValue_0 * internal.ModelValue_2 + internal.ModelValue_1 * internal.ModelValue_3);
    internal.ModelValue_4 = internal.Pu_total;
    internal.ModelValue_5 = internal.Pp_total;
    internal.Pp_init = internal.Pp_total;
    internal.Pu_init = internal.Pu_total;
    internal.initial_Pp = internal.Pp_init;
    internal.initial_Pu = internal.Pu_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pu = state[0];
    const Pp = state[1];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.kw * Pu - 1 * internal.compartment * internal.ke * Pp - 1 * internal.compartment * internal.kdegp * Pp;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.kdegu * Pu - 1 * internal.compartment * internal.kw * Pu + 1 * internal.compartment * internal.ke * Pp;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pu", "Pp"];
    this.metadata.internalOrder = {compartment: null, initial_Pp: null, initial_Pu: null, kdegp: null, kdegu: null, ke: null, ksyn: null, kw: null, ModelValue_0: null, ModelValue_1: null, ModelValue_2: null, ModelValue_3: null, ModelValue_4: null, ModelValue_5: null, ModelValue_6: null, Pp_init: null, Pp_total: null, Pu_init: null, Pu_total: null};
    this.metadata.variableOrder = {Pu: null, Pp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

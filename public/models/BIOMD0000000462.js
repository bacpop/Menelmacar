export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Abeta;
    state[1] = internal.initial_AbDim;
    state[2] = internal.initial_AbP;
    state[3] = internal.initial_Nep;
    state[4] = internal.initial_Source;
    state[5] = internal.initial_Sink;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AbDim_init", "Abeta_init", "AbP_init", "kdedimer", "kdeg", "kdegNep", "kdimer", "kdisagg", "kpf", "kpg", "kpghalf", "kprod", "Nep_init", "Sink_init", "Source_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AbDim_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Abeta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AbP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdedimer", internal, 8.4655000000000005e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 2.0999999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegNep", internal, 1.8e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdimer", internal, 1.1783e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdisagg", internal, 5.4357000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpf", internal, 2.785e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpg", internal, 0.0057400000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpghalf", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kprod", internal, 1.8600000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nep_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sink_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Source_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_AbDim = internal.AbDim_init;
    internal.initial_Abeta = internal.Abeta_init;
    internal.initial_AbP = internal.AbP_init;
    internal.initial_Nep = internal.Nep_init;
    internal.initial_Sink = internal.Sink_init;
    internal.initial_Source = internal.Source_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Abeta = state[0];
    const AbDim = state[1];
    const AbP = state[2];
    const Nep = state[3];
    const Source = state[4];
    dstatedt[5] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0 + 1 * internal.kdimer * Abeta * (Abeta - 1) * 0.5 - 1 * internal.kdedimer * AbDim - 2 * internal.kpf * AbDim * (AbDim - 1) * 0.5;
    dstatedt[0] = 0 + 1 * internal.kprod * Source - 1 * internal.kdeg * Abeta * Nep * 0.001 - 2 * internal.kdimer * Abeta * (Abeta - 1) * 0.5 + 2 * internal.kdedimer * AbDim - 1 * internal.kpg * Abeta * Math.pow((AbP), (2)) / (Math.pow((internal.kpghalf), (2)) + Math.pow((AbP), (2))) + 1 * internal.kdisagg * AbP;
    dstatedt[2] = 0 + 4 * internal.kpf * AbDim * (AbDim - 1) * 0.5 - 1 * internal.kpg * Abeta * Math.pow((AbP), (2)) / (Math.pow((internal.kpghalf), (2)) + Math.pow((AbP), (2))) + 2 * internal.kpg * Abeta * Math.pow((AbP), (2)) / (Math.pow((internal.kpghalf), (2)) + Math.pow((AbP), (2))) - 1 * internal.kdisagg * AbP;
    dstatedt[3] = 0 - 1 * internal.kdeg * Abeta * Nep * 0.001 + 1 * internal.kdeg * Abeta * Nep * 0.001 - 1 * internal.kdegNep * Nep;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Abeta", "AbDim", "AbP", "Nep", "Source", "Sink"];
    this.metadata.internalOrder = {AbDim_init: null, Abeta_init: null, AbP_init: null, cell: null, initial_AbDim: null, initial_Abeta: null, initial_AbP: null, initial_Nep: null, initial_Sink: null, initial_Source: null, kdedimer: null, kdeg: null, kdegNep: null, kdimer: null, kdisagg: null, kpf: null, kpg: null, kpghalf: null, kprod: null, Nep_init: null, Sink_init: null, Source_init: null};
    this.metadata.variableOrder = {Abeta: null, AbDim: null, AbP: null, Nep: null, Source: null, Sink: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

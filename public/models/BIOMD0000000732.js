export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Tumor;
    state[1] = internal.initial_IL2;
    state[2] = internal.initial_Immune_cells;
    state[3] = internal.initial_Source;
    state[4] = internal.initial_Sink;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "g1", "g2", "g3", "IL2_init", "Immune_cells_init", "mu2", "mu3", "p1", "p2", "r2", "s1", "s2", "Sink_init", "Source_init", "tau", "Tumor_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Immune_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sink_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Source_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_IL2 = internal.IL2_init;
    internal.initial_Immune_cells = internal.Immune_cells_init;
    internal.initial_Sink = internal.Sink_init;
    internal.initial_Source = internal.Source_init;
    internal.initial_Tumor = internal.Tumor_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tumor = state[0];
    const IL2 = state[1];
    const Immune_cells = state[2];
    dstatedt[4] = 0;
    dstatedt[3] = 0;
    dstatedt[1] = 0 + 1 * internal.COMpartment * (internal.s2 + internal.p2 * Immune_cells * Tumor / (internal.g3 + Tumor)) - 1 * internal.COMpartment * internal.mu3 * IL2;
    dstatedt[2] = 0 + 1 * internal.COMpartment * (internal.s1 + internal.c * Tumor + internal.p1 * Immune_cells * IL2 / internal.g1) - 1 * internal.COMpartment * internal.mu2 * Immune_cells;
    dstatedt[0] = 0 + 1 * internal.COMpartment * (internal.r2 * (1 - internal.b * Tumor) * Tumor) - 1 * internal.COMpartment * (internal.a * Immune_cells * Tumor / (internal.g2 + Tumor));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tumor", "IL2", "Immune_cells", "Source", "Sink"];
    this.metadata.internalOrder = {a: null, b: null, c: null, COMpartment: null, g1: null, g2: null, g3: null, IL2_init: null, Immune_cells_init: null, initial_IL2: null, initial_Immune_cells: null, initial_Sink: null, initial_Source: null, initial_Tumor: null, mu2: null, mu3: null, p1: null, p2: null, r2: null, s1: null, s2: null, Sink_init: null, Source_init: null, tau: null, Tumor_init: null};
    this.metadata.variableOrder = {Tumor: null, IL2: null, Immune_cells: null, Source: null, Sink: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

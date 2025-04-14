export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.whole_organism = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Target_cells;
    state[1] = internal.initial_Infected_cells;
    state[2] = internal.initial_Infected_cells_antiviral;
    state[3] = internal.initial_Refractory_cells;
    state[4] = internal.initial_Virions;
    state[5] = internal.initial_IFN;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Beta", "c", "Delta", "f", "IFN_init", "Infected_cells_antiviral_init", "Infected_cells_init", "kxk", "p", "Phi", "Pi", "Refractory_cells_init", "Rho", "Target_cells_init", "Virions_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Beta", internal, 5.0000000000000003e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Delta", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_cells_antiviral_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phi", internal, 5.0000000000000003e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Refractory_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rho", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Target_cells_init", internal, 400000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Virions_init", internal, 100, -Infinity, Infinity, false);
    internal.initial_IFN = internal.IFN_init;
    internal.initial_Infected_cells = internal.Infected_cells_init;
    internal.initial_Infected_cells_antiviral = internal.Infected_cells_antiviral_init;
    internal.initial_Refractory_cells = internal.Refractory_cells_init;
    internal.initial_Target_cells = internal.Target_cells_init;
    internal.initial_Virions = internal.Virions_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Target_cells = state[0];
    const Infected_cells = state[1];
    const Infected_cells_antiviral = state[2];
    const Refractory_cells = state[3];
    const Virions = state[4];
    const IFN = state[5];
    dstatedt[5] = 0 + 1 * internal.whole_organism * (internal.Pi * internal.p * (Infected_cells + Infected_cells_antiviral)) - 1 * internal.whole_organism * internal.c * IFN;
    dstatedt[1] = 0 + 1 * internal.whole_organism * (internal.Beta * Virions * Target_cells) - 1 * internal.whole_organism * (internal.kxk * Infected_cells + internal.Phi * IFN * Infected_cells) - 1 * internal.whole_organism * internal.Delta * Infected_cells;
    dstatedt[2] = 0 + 1 * internal.whole_organism * (internal.kxk * Infected_cells + internal.Phi * IFN * Infected_cells) - 1 * internal.whole_organism * internal.Delta * Infected_cells_antiviral;
    dstatedt[3] = 0 + 1 * internal.whole_organism * (internal.Phi * IFN * Target_cells - internal.Rho * Refractory_cells);
    dstatedt[0] = 0 - 1 * internal.whole_organism * (internal.Beta * Virions * Target_cells) - 1 * internal.whole_organism * (internal.Phi * IFN * Target_cells - internal.Rho * Refractory_cells);
    dstatedt[4] = 0 + 1 * internal.whole_organism * (internal.p * Infected_cells + (1 - internal.f) * internal.p * Infected_cells_antiviral) - 1 * internal.whole_organism * internal.c * Virions;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Target_cells", "Infected_cells", "Infected_cells_antiviral", "Refractory_cells", "Virions", "IFN"];
    this.metadata.internalOrder = {Beta: null, c: null, Delta: null, f: null, IFN_init: null, Infected_cells_antiviral_init: null, Infected_cells_init: null, initial_IFN: null, initial_Infected_cells: null, initial_Infected_cells_antiviral: null, initial_Refractory_cells: null, initial_Target_cells: null, initial_Virions: null, kxk: null, p: null, Phi: null, Pi: null, Refractory_cells_init: null, Rho: null, Target_cells_init: null, Virions_init: null, whole_organism: null};
    this.metadata.variableOrder = {Target_cells: null, Infected_cells: null, Infected_cells_antiviral: null, Refractory_cells: null, Virions: null, IFN: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

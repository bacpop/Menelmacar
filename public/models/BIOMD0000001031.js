export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.k1 = 1;
    internal.Whole_organism = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_uninfected_cancer_cells;
    state[1] = internal.initial_infected_cancer_cells;
    state[2] = internal.initial_free_virus;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["f", "free_virus_init", "h", "infected_cancer_cells_init", "m", "uninfected_cancer_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "f", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "free_virus_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "infected_cancer_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uninfected_cancer_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_free_virus = internal.free_virus_init;
    internal.initial_infected_cancer_cells = internal.infected_cancer_cells_init;
    internal.initial_uninfected_cancer_cells = internal.uninfected_cancer_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const uninfected_cancer_cells = state[0];
    const infected_cancer_cells = state[1];
    const free_virus = state[2];
    dstatedt[2] = 0 + 1 * internal.Whole_organism * internal.k1 * infected_cancer_cells - 1 * internal.Whole_organism * (internal.m * uninfected_cancer_cells * free_virus + internal.h * free_virus);
    dstatedt[1] = 0 + 1 * internal.Whole_organism * (uninfected_cancer_cells * free_virus) - 1 * internal.Whole_organism * internal.k1 * infected_cancer_cells;
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.f * uninfected_cancer_cells) - 1 * internal.Whole_organism * (uninfected_cancer_cells * free_virus);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "uninfected_cancer_cells", "infected_cancer_cells", "free_virus"];
    this.metadata.internalOrder = {f: null, free_virus_init: null, h: null, infected_cancer_cells_init: null, initial_free_virus: null, initial_infected_cancer_cells: null, initial_uninfected_cancer_cells: null, k1: null, m: null, uninfected_cancer_cells_init: null, Whole_organism: null};
    this.metadata.variableOrder = {uninfected_cancer_cells: null, infected_cancer_cells: null, free_virus: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

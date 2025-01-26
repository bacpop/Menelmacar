export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Whole_organism = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_uninfected_cancer_cells;
    state[1] = internal.initial_infected_cancer_cells;
    state[2] = internal.initial_free_virus;
    state[3] = internal.initial_immune_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "d_1", "e", "free_virus_init", "h_1", "h_2", "immune_cells_init", "infected_cancer_cells_init", "m_1", "m_2", "n", "r_1", "uninfected_cancer_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.1278, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "free_virus_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_1", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_2", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "immune_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "infected_cancer_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_2", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uninfected_cancer_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_free_virus = internal.free_virus_init;
    internal.initial_immune_cells = internal.immune_cells_init;
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
    const immune_cells = state[3];
    dstatedt[2] = 0 - 1 * internal.Whole_organism * internal.a * uninfected_cancer_cells * free_virus + 1 * internal.Whole_organism * (internal.b * infected_cancer_cells) - 1 * internal.Whole_organism * (internal.h_2 * free_virus * immune_cells + internal.e * free_virus);
    dstatedt[3] = 0 + 1 * internal.Whole_organism * (internal.m_1 * infected_cancer_cells * immune_cells + internal.m_2 * uninfected_cancer_cells * immune_cells) - 1 * internal.Whole_organism * internal.n * immune_cells;
    dstatedt[1] = 0 + 1 * internal.Whole_organism * internal.a * uninfected_cancer_cells * free_virus - 1 * internal.Whole_organism * (internal.c * infected_cancer_cells * immune_cells + infected_cancer_cells);
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.r_1 * uninfected_cancer_cells * (1 - (uninfected_cancer_cells + infected_cancer_cells))) - 1 * internal.Whole_organism * internal.a * uninfected_cancer_cells * free_virus - 1 * internal.Whole_organism * (internal.h_1 * uninfected_cancer_cells * immune_cells + internal.d_1 * uninfected_cancer_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "uninfected_cancer_cells", "infected_cancer_cells", "free_virus", "immune_cells"];
    this.metadata.internalOrder = {a: null, b: null, c: null, d_1: null, e: null, free_virus_init: null, h_1: null, h_2: null, immune_cells_init: null, infected_cancer_cells_init: null, initial_free_virus: null, initial_immune_cells: null, initial_infected_cancer_cells: null, initial_uninfected_cancer_cells: null, m_1: null, m_2: null, n: null, r_1: null, uninfected_cancer_cells_init: null, Whole_organism: null};
    this.metadata.variableOrder = {uninfected_cancer_cells: null, infected_cancer_cells: null, free_virus: null, immune_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

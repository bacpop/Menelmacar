export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Bladder = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_BCG;
    state[1] = internal.initial_Effector_cells;
    state[2] = internal.initial_Tumor_infected_cells;
    state[3] = internal.initial_Tumor_uninfected_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "b", "BCG_init", "beta", "Effector_cells_init", "mu1", "mu2", "p1", "p2", "p3", "p4", "p5", "r", "Tumor_infected_cells_init", "Tumor_uninfected_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BCG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0155, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effector_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 1.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.28499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_infected_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_uninfected_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_BCG = internal.BCG_init;
    internal.initial_Effector_cells = internal.Effector_cells_init;
    internal.initial_Tumor_infected_cells = internal.Tumor_infected_cells_init;
    internal.initial_Tumor_uninfected_cells = internal.Tumor_uninfected_cells_init;
    internal.mu = internal.mu2 / internal.mu1;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const BCG = state[0];
    const Effector_cells = state[1];
    const Tumor_infected_cells = state[2];
    const Tumor_uninfected_cells = state[3];
    dstatedt[0] = 0 + 1 * internal.Bladder * (internal.b) - 1 * internal.Bladder * internal.p2 * Tumor_uninfected_cells * BCG - 1 * internal.Bladder * (BCG * internal.p1 * Effector_cells + BCG);
    dstatedt[2] = 0 + 1 * internal.Bladder * internal.p2 * Tumor_uninfected_cells * BCG - 1 * internal.Bladder * (internal.p3 * Effector_cells * Tumor_infected_cells);
    dstatedt[3] = 0 + 1 * internal.Bladder * (Tumor_uninfected_cells * internal.r * (1 - internal.beta * Tumor_uninfected_cells)) - 1 * internal.Bladder * internal.p2 * Tumor_uninfected_cells * BCG;
    dstatedt[1] = 0 + 1 * internal.Bladder * (Effector_cells * internal.p4 * BCG + internal.alpha * Tumor_infected_cells) - 1 * internal.Bladder * (Effector_cells * internal.mu + Effector_cells * internal.p5 * Tumor_infected_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "BCG", "Effector_cells", "Tumor_infected_cells", "Tumor_uninfected_cells"];
    this.metadata.internalOrder = {alpha: null, b: null, BCG_init: null, beta: null, Bladder: null, Effector_cells_init: null, initial_BCG: null, initial_Effector_cells: null, initial_Tumor_infected_cells: null, initial_Tumor_uninfected_cells: null, mu: null, mu1: null, mu2: null, p1: null, p2: null, p3: null, p4: null, p5: null, r: null, Tumor_infected_cells_init: null, Tumor_uninfected_cells_init: null};
    this.metadata.variableOrder = {BCG: null, Effector_cells: null, Tumor_infected_cells: null, Tumor_uninfected_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

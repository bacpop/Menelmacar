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
    var state = Array(2).fill(0);
    state[0] = internal.initial_Regulatory_cells;
    state[1] = internal.initial_Effector_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "delta_x", "detla_y", "Effector_cells_init", "kappa", "lambda", "mu", "Regulatory_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_x", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "detla_y", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effector_cells_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Regulatory_cells_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_Effector_cells = internal.Effector_cells_init;
    internal.initial_Regulatory_cells = internal.Regulatory_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Regulatory_cells = state[0];
    const Effector_cells = state[1];
    var Antigen_expressing_cells = ((t >= 100 ? t - 99 : 1));
    dstatedt[1] = 0 + 1 * internal.Whole_organism * (internal.mu * (Antigen_expressing_cells / Regulatory_cells)) - 1 * internal.Whole_organism * internal.detla_y * Effector_cells;
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.beta * Antigen_expressing_cells) - 1 * internal.Whole_organism * internal.delta_x * Regulatory_cells;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Regulatory_cells", "Effector_cells"];
    this.metadata.internalOrder = {beta: null, delta_x: null, detla_y: null, Effector_cells_init: null, initial_Effector_cells: null, initial_Regulatory_cells: null, kappa: null, lambda: null, mu: null, Regulatory_cells_init: null, Whole_organism: null};
    this.metadata.variableOrder = {Regulatory_cells: null, Effector_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

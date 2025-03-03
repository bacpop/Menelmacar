export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Effector_cells;
    state[1] = internal.initial_Tumor_cells;
    state[2] = internal.initial_IL_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "Effector_cells_init", "g1", "g2", "g3", "IL_2_init", "mu2", "mu3", "p1", "p2", "r2", "s1", "s2", "Tumor_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 1.0089999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effector_cells_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_2_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.0378, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.043999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.123, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_cells_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    internal.initial_Effector_cells = internal.Effector_cells_init;
    internal.initial_IL_2 = internal.IL_2_init;
    internal.initial_Tumor_cells = internal.Tumor_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Effector_cells = state[0];
    const Tumor_cells = state[1];
    const IL_2 = state[2];
    dstatedt[0] = 0 + 1 * internal.Tumor_microenvironment * (internal.c * Tumor_cells + internal.p1 * Effector_cells * IL_2 / (internal.g1 + IL_2) + internal.s1) - 1 * internal.Tumor_microenvironment * internal.mu2 * Effector_cells;
    dstatedt[2] = 0 + 1 * internal.Tumor_microenvironment * (internal.p2 * Effector_cells * Tumor_cells / (internal.g3 + Tumor_cells) + internal.s2) - 1 * internal.Tumor_microenvironment * internal.mu3 * IL_2;
    dstatedt[1] = 0 + 1 * internal.Tumor_microenvironment * (internal.r2 * Tumor_cells * (1 - internal.b * Tumor_cells)) - 1 * internal.Tumor_microenvironment * (internal.a * Effector_cells * Tumor_cells / (internal.g2 + Tumor_cells));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Effector_cells", "Tumor_cells", "IL_2"];
    this.metadata.internalOrder = {a: null, b: null, c: null, Effector_cells_init: null, g1: null, g2: null, g3: null, IL_2_init: null, initial_Effector_cells: null, initial_IL_2: null, initial_Tumor_cells: null, mu2: null, mu3: null, p1: null, p2: null, r2: null, s1: null, s2: null, Tumor_cells_init: null, Tumor_microenvironment: null};
    this.metadata.variableOrder = {Effector_cells: null, Tumor_cells: null, IL_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

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
    var state = Array(3).fill(0);
    state[0] = internal.initial_x_Tumor_Cells;
    state[1] = internal.initial_y_CD4_T_Cells;
    state[2] = internal.initial_z_Cytokine;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "b", "beta", "delta", "I_1", "I_2", "K", "kxk", "m", "mu", "r", "x_Tumor_Cells_init", "y_CD4_T_Cells_init", "z_Cytokine_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 47, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Tumor_Cells_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_CD4_T_Cells_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_Cytokine_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x_Tumor_Cells = internal.x_Tumor_Cells_init;
    internal.initial_y_CD4_T_Cells = internal.y_CD4_T_Cells_init;
    internal.initial_z_Cytokine = internal.z_Cytokine_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Tumor_Cells = state[0];
    const y_CD4_T_Cells = state[1];
    const z_Cytokine = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * x_Tumor_Cells * (1 - x_Tumor_Cells / internal.K)) - 1 * internal.compartment * (internal.delta * x_Tumor_Cells * z_Cytokine / (internal.m + x_Tumor_Cells));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * x_Tumor_Cells * y_CD4_T_Cells / (internal.kxk + x_Tumor_Cells)) - 1 * internal.compartment * internal.a * y_CD4_T_Cells + 1 * internal.compartment * (internal.I_1);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha * x_Tumor_Cells * y_CD4_T_Cells / (internal.b + x_Tumor_Cells)) - 1 * internal.compartment * internal.mu * z_Cytokine + 1 * internal.compartment * (internal.I_2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Tumor_Cells", "y_CD4_T_Cells", "z_Cytokine"];
    this.metadata.internalOrder = {a: null, alpha: null, b: null, beta: null, compartment: null, delta: null, I_1: null, I_2: null, initial_x_Tumor_Cells: null, initial_y_CD4_T_Cells: null, initial_z_Cytokine: null, K: null, kxk: null, m: null, mu: null, r: null, x_Tumor_Cells_init: null, y_CD4_T_Cells_init: null, z_Cytokine_init: null};
    this.metadata.variableOrder = {x_Tumor_Cells: null, y_CD4_T_Cells: null, z_Cytokine: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

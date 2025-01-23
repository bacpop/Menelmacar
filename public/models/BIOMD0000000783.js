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
    state[1] = internal.initial_y_Effector_Cells;
    state[2] = internal.initial_z_Helper_T_Cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "delta_1", "delta_2", "omega_1", "omega_2", "rho", "sigma_2", "x_Tumor_Cells_init", "y_Effector_Cells_init", "z_Helper_T_Cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 1.6359999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.37430000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 0.055, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega_1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega_2", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_2", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Tumor_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Effector_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_Helper_T_Cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x_Tumor_Cells = internal.x_Tumor_Cells_init;
    internal.initial_y_Effector_Cells = internal.y_Effector_Cells_init;
    internal.initial_z_Helper_T_Cells = internal.z_Helper_T_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Tumor_Cells = state[0];
    const y_Effector_Cells = state[1];
    const z_Helper_T_Cells = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha * x_Tumor_Cells * (1 - internal.beta * x_Tumor_Cells)) - 1 * internal.compartment * (x_Tumor_Cells * y_Effector_Cells);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.omega_1 * x_Tumor_Cells * y_Effector_Cells) - 1 * internal.compartment * internal.delta_1 * y_Effector_Cells + 1 * internal.compartment * (internal.rho * y_Effector_Cells * z_Helper_T_Cells);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.sigma_2) + 1 * internal.compartment * (internal.omega_2 * x_Tumor_Cells * z_Helper_T_Cells) - 1 * internal.compartment * internal.delta_2 * z_Helper_T_Cells;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Tumor_Cells", "y_Effector_Cells", "z_Helper_T_Cells"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, delta_1: null, delta_2: null, initial_x_Tumor_Cells: null, initial_y_Effector_Cells: null, initial_z_Helper_T_Cells: null, omega_1: null, omega_2: null, rho: null, sigma_2: null, x_Tumor_Cells_init: null, y_Effector_Cells_init: null, z_Helper_T_Cells_init: null};
    this.metadata.variableOrder = {x_Tumor_Cells: null, y_Effector_Cells: null, z_Helper_T_Cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

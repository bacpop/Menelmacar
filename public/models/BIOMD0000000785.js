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
    var state = Array(2).fill(0);
    state[0] = internal.initial_x_Malignant_Cells;
    state[1] = internal.initial_y_Lymphocytes;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "kxk", "sigma", "x_Malignant_Cells_init", "y_Lymphocytes_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Malignant_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Lymphocytes_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x_Malignant_Cells = internal.x_Malignant_Cells_init;
    internal.initial_y_Lymphocytes = internal.y_Lymphocytes_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Malignant_Cells = state[0];
    const y_Lymphocytes = state[1];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha * x_Malignant_Cells) - 1 * internal.compartment * (x_Malignant_Cells * y_Lymphocytes);
    dstatedt[1] = 0 + 1 * internal.compartment * (x_Malignant_Cells * y_Lymphocytes) + 1 * internal.compartment * (internal.sigma) - 1 * internal.compartment * (y_Lymphocytes / internal.alpha) - 1 * internal.compartment * (internal.kxk * x_Malignant_Cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Malignant_Cells", "y_Lymphocytes"];
    this.metadata.internalOrder = {alpha: null, compartment: null, initial_x_Malignant_Cells: null, initial_y_Lymphocytes: null, kxk: null, sigma: null, x_Malignant_Cells_init: null, y_Lymphocytes_init: null};
    this.metadata.variableOrder = {x_Malignant_Cells: null, y_Lymphocytes: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

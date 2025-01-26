export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.v = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_x_Tumor_Cells;
    state[1] = internal.initial_y_Healthy_Cells;
    state[2] = internal.initial_z_Effector_Cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_12", "a_21", "a_31", "d", "d_3", "g", "h", "lambda", "ModelValue_1", "ModelValue_2", "ModelValue_3", "r_2", "s", "x_Tumor_Cells_init", "y_Healthy_Cells_init", "z_Effector_Cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_12", internal, 0.19500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_21", internal, 0.95399999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_31", internal, 5.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_3", internal, 0.112, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 7.9499999999999997e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 11.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 11.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Tumor_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Healthy_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_Effector_Cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x_Tumor_Cells = internal.x_Tumor_Cells_init;
    internal.initial_y_Healthy_Cells = internal.y_Healthy_Cells_init;
    internal.initial_z_Effector_Cells = internal.z_Effector_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Tumor_Cells = state[0];
    const y_Healthy_Cells = state[1];
    const z_Effector_Cells = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r_2 * y_Healthy_Cells * (1 - y_Healthy_Cells)) - 1 * internal.compartment * (internal.a_21 * x_Tumor_Cells * y_Healthy_Cells);
    var h_x = internal.ModelValue_3 * Math.pow((x_Tumor_Cells), (internal.ModelValue_2));
    var D_x_z = internal.ModelValue_1 * Math.pow((z_Effector_Cells), (internal.ModelValue_2)) / (h_x + Math.pow((z_Effector_Cells), (internal.ModelValue_2)));
    dstatedt[0] = 0 + 1 * internal.compartment * (x_Tumor_Cells * (1 - x_Tumor_Cells)) - 1 * internal.compartment * (internal.a_12 * y_Healthy_Cells * x_Tumor_Cells) - 1 * internal.compartment * D_x_z * x_Tumor_Cells;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.d_3 * z_Effector_Cells + 1 * internal.compartment * (internal.g * Math.pow((D_x_z), (2)) * Math.pow((x_Tumor_Cells), (2)) / (internal.h + Math.pow((D_x_z), (2)) * Math.pow((x_Tumor_Cells), (2)))) - 1 * internal.compartment * (internal.a_31 * x_Tumor_Cells * z_Effector_Cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Tumor_Cells", "y_Healthy_Cells", "z_Effector_Cells"];
    this.metadata.internalOrder = {a_12: null, a_21: null, a_31: null, compartment: null, d: null, d_3: null, g: null, h: null, initial_x_Tumor_Cells: null, initial_y_Healthy_Cells: null, initial_z_Effector_Cells: null, lambda: null, ModelValue_1: null, ModelValue_2: null, ModelValue_3: null, r_2: null, s: null, v: null, x_Tumor_Cells_init: null, y_Healthy_Cells_init: null, z_Effector_Cells_init: null};
    this.metadata.variableOrder = {x_Tumor_Cells: null, y_Healthy_Cells: null, z_Effector_Cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

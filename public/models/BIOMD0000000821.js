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
    state[0] = internal.initial_tumor_volume_x_1;
    state[1] = internal.initial_endothelial_volume_x_2;
    state[2] = internal.initial_concentration_of_administrated_inhibitor_x_3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "concentration_of_administrated_inhibitor_x_3_init", "d", "e", "endothelial_volume_x_2_init", "lambda_1", "lambda_2", "lambda_3", "tumor_volume_x_1_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 5.8499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "concentration_of_administrated_inhibitor_x_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.0087299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.66000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "endothelial_volume_x_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_1", internal, 0.192, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_3", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tumor_volume_x_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0, -Infinity, Infinity, false);
    internal.initial_concentration_of_administrated_inhibitor_x_3 = internal.concentration_of_administrated_inhibitor_x_3_init;
    internal.initial_endothelial_volume_x_2 = internal.endothelial_volume_x_2_init;
    internal.initial_tumor_volume_x_1 = internal.tumor_volume_x_1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const tumor_volume_x_1 = state[0];
    const endothelial_volume_x_2 = state[1];
    const concentration_of_administrated_inhibitor_x_3 = state[2];
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.lambda_3 * concentration_of_administrated_inhibitor_x_3 * internal.a) + 1 * internal.compartment * (internal.u);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.lambda_2 * endothelial_volume_x_2 * internal.a) + 1 * internal.compartment * (internal.b * tumor_volume_x_1 * internal.a) - 1 * internal.compartment * (internal.d * endothelial_volume_x_2 * Math.pow((tumor_volume_x_1), (2 / 3)) * internal.a) - 1 * internal.compartment * (internal.e * endothelial_volume_x_2 * concentration_of_administrated_inhibitor_x_3 * internal.a);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.lambda_1 * tumor_volume_x_1 * Math.log(tumor_volume_x_1 / endothelial_volume_x_2) * internal.a);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "tumor_volume_x_1", "endothelial_volume_x_2", "concentration_of_administrated_inhibitor_x_3"];
    this.metadata.internalOrder = {a: null, b: null, compartment: null, concentration_of_administrated_inhibitor_x_3_init: null, d: null, e: null, endothelial_volume_x_2_init: null, initial_concentration_of_administrated_inhibitor_x_3: null, initial_endothelial_volume_x_2: null, initial_tumor_volume_x_1: null, lambda_1: null, lambda_2: null, lambda_3: null, tumor_volume_x_1_init: null, u: null};
    this.metadata.variableOrder = {tumor_volume_x_1: null, endothelial_volume_x_2: null, concentration_of_administrated_inhibitor_x_3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

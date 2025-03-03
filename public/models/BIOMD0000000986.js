export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Dictyostelium_discoideum_AX2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_FITC_Dextran_three_compartment_model_compartment_1;
    state[1] = internal.initial_FITC_Dextran_three_compartment_model_compartment_2;
    state[2] = internal.initial_FITC_Dextran_three_compartment_model_compartment_3;
    state[3] = internal.initial_Pyranine_three_compartment_model_compartment_1;
    state[4] = internal.initial_Pyranine_three_compartment_model_compartment_2;
    state[5] = internal.initial_Pyranine_three_compartment_model_compartment_3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["FITC_Dextran_influx_rate", "FITC_Dextran_max_uptake_rate", "FITC_Dextran_three_compartment_model_compartment_1_init", "FITC_Dextran_three_compartment_model_compartment_2_init", "FITC_Dextran_three_compartment_model_compartment_3_init", "lambda_compartment_1", "lambda_compartment_2", "lambda_compartment_3", "lambda_single_compartment_model_FITC_Dextran", "lambda_single_compartment_model_Pyranine", "Pyranine_influx_rate", "Pyranine_max_uptake_rate", "Pyranine_three_compartment_model_compartment_1_init", "Pyranine_three_compartment_model_compartment_2_init", "Pyranine_three_compartment_model_compartment_3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "FITC_Dextran_influx_rate", internal, 6.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_max_uptake_rate", internal, 585, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_1", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_2", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_3", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_single_compartment_model_FITC_Dextran", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_single_compartment_model_Pyranine", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyranine_influx_rate", internal, 5.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyranine_max_uptake_rate", internal, 578, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyranine_three_compartment_model_compartment_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyranine_three_compartment_model_compartment_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyranine_three_compartment_model_compartment_3_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_FITC_Dextran_three_compartment_model_compartment_1 = internal.FITC_Dextran_three_compartment_model_compartment_1_init;
    internal.initial_FITC_Dextran_three_compartment_model_compartment_2 = internal.FITC_Dextran_three_compartment_model_compartment_2_init;
    internal.initial_FITC_Dextran_three_compartment_model_compartment_3 = internal.FITC_Dextran_three_compartment_model_compartment_3_init;
    internal.initial_Pyranine_three_compartment_model_compartment_1 = internal.Pyranine_three_compartment_model_compartment_1_init;
    internal.initial_Pyranine_three_compartment_model_compartment_2 = internal.Pyranine_three_compartment_model_compartment_2_init;
    internal.initial_Pyranine_three_compartment_model_compartment_3 = internal.Pyranine_three_compartment_model_compartment_3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FITC_Dextran_three_compartment_model_compartment_1 = state[0];
    const FITC_Dextran_three_compartment_model_compartment_2 = state[1];
    const FITC_Dextran_three_compartment_model_compartment_3 = state[2];
    const Pyranine_three_compartment_model_compartment_1 = state[3];
    const Pyranine_three_compartment_model_compartment_2 = state[4];
    const Pyranine_three_compartment_model_compartment_3 = state[5];
    dstatedt[0] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * (internal.FITC_Dextran_influx_rate) - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * FITC_Dextran_three_compartment_model_compartment_1;
    dstatedt[1] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * FITC_Dextran_three_compartment_model_compartment_1 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * FITC_Dextran_three_compartment_model_compartment_2;
    dstatedt[2] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * FITC_Dextran_three_compartment_model_compartment_2 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_3 * FITC_Dextran_three_compartment_model_compartment_3;
    dstatedt[4] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * Pyranine_three_compartment_model_compartment_1 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * Pyranine_three_compartment_model_compartment_2;
    dstatedt[5] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * Pyranine_three_compartment_model_compartment_2 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_3 * Pyranine_three_compartment_model_compartment_3;
    var Pyranine_addition_trigger = (t > 90 ? 1 : 0);
    dstatedt[3] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * (Pyranine_addition_trigger * internal.Pyranine_influx_rate) - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * Pyranine_three_compartment_model_compartment_1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FITC_Dextran_three_compartment_model_compartment_1", "FITC_Dextran_three_compartment_model_compartment_2", "FITC_Dextran_three_compartment_model_compartment_3", "Pyranine_three_compartment_model_compartment_1", "Pyranine_three_compartment_model_compartment_2", "Pyranine_three_compartment_model_compartment_3"];
    this.metadata.internalOrder = {Dictyostelium_discoideum_AX2: null, FITC_Dextran_influx_rate: null, FITC_Dextran_max_uptake_rate: null, FITC_Dextran_three_compartment_model_compartment_1_init: null, FITC_Dextran_three_compartment_model_compartment_2_init: null, FITC_Dextran_three_compartment_model_compartment_3_init: null, initial_FITC_Dextran_three_compartment_model_compartment_1: null, initial_FITC_Dextran_three_compartment_model_compartment_2: null, initial_FITC_Dextran_three_compartment_model_compartment_3: null, initial_Pyranine_three_compartment_model_compartment_1: null, initial_Pyranine_three_compartment_model_compartment_2: null, initial_Pyranine_three_compartment_model_compartment_3: null, lambda_compartment_1: null, lambda_compartment_2: null, lambda_compartment_3: null, lambda_single_compartment_model_FITC_Dextran: null, lambda_single_compartment_model_Pyranine: null, Pyranine_influx_rate: null, Pyranine_max_uptake_rate: null, Pyranine_three_compartment_model_compartment_1_init: null, Pyranine_three_compartment_model_compartment_2_init: null, Pyranine_three_compartment_model_compartment_3_init: null};
    this.metadata.variableOrder = {FITC_Dextran_three_compartment_model_compartment_1: null, FITC_Dextran_three_compartment_model_compartment_2: null, FITC_Dextran_three_compartment_model_compartment_3: null, Pyranine_three_compartment_model_compartment_1: null, Pyranine_three_compartment_model_compartment_2: null, Pyranine_three_compartment_model_compartment_3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

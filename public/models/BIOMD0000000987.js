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
    var state = Array(9).fill(0);
    state[0] = internal.initial_FITC_Dextran_three_compartment_model_compartment_1;
    state[1] = internal.initial_FITC_Dextran_three_compartment_model_compartment_2;
    state[2] = internal.initial_FITC_Dextran_three_compartment_model_compartment_3;
    state[3] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_4;
    state[4] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_5;
    state[5] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_6;
    state[6] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_7;
    state[7] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_8;
    state[8] = internal.initial_FITC_Dextran_nine_compartment_model_compartment_9;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["FITC_Dextran_nine_compartment_model_compartment_4_init", "FITC_Dextran_nine_compartment_model_compartment_5_init", "FITC_Dextran_nine_compartment_model_compartment_6_init", "FITC_Dextran_nine_compartment_model_compartment_7_init", "FITC_Dextran_nine_compartment_model_compartment_8_init", "FITC_Dextran_nine_compartment_model_compartment_9_init", "FITC_Dextran_three_compartment_model_compartment_1_init", "FITC_Dextran_three_compartment_model_compartment_2_init", "FITC_Dextran_three_compartment_model_compartment_3_init", "lambda_compartment_1", "lambda_compartment_2", "lambda_compartment_3", "lambda_compartment_4", "lambda_compartment_5", "lambda_compartment_6", "lambda_compartment_7", "lambda_compartment_8", "lambda_compartment_9", "mu"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_nine_compartment_model_compartment_9_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FITC_Dextran_three_compartment_model_compartment_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_1", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_2", internal, 0.127, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_3", internal, 0.099000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_4", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_5", internal, 0.092999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_6", internal, 0.098000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_7", internal, 0.098000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_8", internal, 0.111, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_compartment_9", internal, 0.096000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 6.7999999999999998, -Infinity, Infinity, false);
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_4 = internal.FITC_Dextran_nine_compartment_model_compartment_4_init;
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_5 = internal.FITC_Dextran_nine_compartment_model_compartment_5_init;
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_6 = internal.FITC_Dextran_nine_compartment_model_compartment_6_init;
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_7 = internal.FITC_Dextran_nine_compartment_model_compartment_7_init;
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_8 = internal.FITC_Dextran_nine_compartment_model_compartment_8_init;
    internal.initial_FITC_Dextran_nine_compartment_model_compartment_9 = internal.FITC_Dextran_nine_compartment_model_compartment_9_init;
    internal.initial_FITC_Dextran_three_compartment_model_compartment_1 = internal.FITC_Dextran_three_compartment_model_compartment_1_init;
    internal.initial_FITC_Dextran_three_compartment_model_compartment_2 = internal.FITC_Dextran_three_compartment_model_compartment_2_init;
    internal.initial_FITC_Dextran_three_compartment_model_compartment_3 = internal.FITC_Dextran_three_compartment_model_compartment_3_init;
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
    const FITC_Dextran_nine_compartment_model_compartment_4 = state[3];
    const FITC_Dextran_nine_compartment_model_compartment_5 = state[4];
    const FITC_Dextran_nine_compartment_model_compartment_6 = state[5];
    const FITC_Dextran_nine_compartment_model_compartment_7 = state[6];
    const FITC_Dextran_nine_compartment_model_compartment_8 = state[7];
    const FITC_Dextran_nine_compartment_model_compartment_9 = state[8];
    dstatedt[3] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_3 * FITC_Dextran_three_compartment_model_compartment_3 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_4 * FITC_Dextran_nine_compartment_model_compartment_4;
    dstatedt[4] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_4 * FITC_Dextran_nine_compartment_model_compartment_4 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_5 * FITC_Dextran_nine_compartment_model_compartment_5;
    dstatedt[5] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_5 * FITC_Dextran_nine_compartment_model_compartment_5 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_6 * FITC_Dextran_nine_compartment_model_compartment_6;
    dstatedt[6] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_6 * FITC_Dextran_nine_compartment_model_compartment_6 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_7 * FITC_Dextran_nine_compartment_model_compartment_7;
    dstatedt[7] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_7 * FITC_Dextran_nine_compartment_model_compartment_7 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_8 * FITC_Dextran_nine_compartment_model_compartment_8;
    dstatedt[8] = 0 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_9 * FITC_Dextran_nine_compartment_model_compartment_9 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_8 * FITC_Dextran_nine_compartment_model_compartment_8;
    dstatedt[0] = 0 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * FITC_Dextran_three_compartment_model_compartment_1 + 1 * internal.Dictyostelium_discoideum_AX2 * (internal.mu);
    dstatedt[1] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_1 * FITC_Dextran_three_compartment_model_compartment_1 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * FITC_Dextran_three_compartment_model_compartment_2;
    dstatedt[2] = 0 + 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_2 * FITC_Dextran_three_compartment_model_compartment_2 - 1 * internal.Dictyostelium_discoideum_AX2 * internal.lambda_compartment_3 * FITC_Dextran_three_compartment_model_compartment_3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FITC_Dextran_three_compartment_model_compartment_1", "FITC_Dextran_three_compartment_model_compartment_2", "FITC_Dextran_three_compartment_model_compartment_3", "FITC_Dextran_nine_compartment_model_compartment_4", "FITC_Dextran_nine_compartment_model_compartment_5", "FITC_Dextran_nine_compartment_model_compartment_6", "FITC_Dextran_nine_compartment_model_compartment_7", "FITC_Dextran_nine_compartment_model_compartment_8", "FITC_Dextran_nine_compartment_model_compartment_9"];
    this.metadata.internalOrder = {Dictyostelium_discoideum_AX2: null, FITC_Dextran_nine_compartment_model_compartment_4_init: null, FITC_Dextran_nine_compartment_model_compartment_5_init: null, FITC_Dextran_nine_compartment_model_compartment_6_init: null, FITC_Dextran_nine_compartment_model_compartment_7_init: null, FITC_Dextran_nine_compartment_model_compartment_8_init: null, FITC_Dextran_nine_compartment_model_compartment_9_init: null, FITC_Dextran_three_compartment_model_compartment_1_init: null, FITC_Dextran_three_compartment_model_compartment_2_init: null, FITC_Dextran_three_compartment_model_compartment_3_init: null, initial_FITC_Dextran_nine_compartment_model_compartment_4: null, initial_FITC_Dextran_nine_compartment_model_compartment_5: null, initial_FITC_Dextran_nine_compartment_model_compartment_6: null, initial_FITC_Dextran_nine_compartment_model_compartment_7: null, initial_FITC_Dextran_nine_compartment_model_compartment_8: null, initial_FITC_Dextran_nine_compartment_model_compartment_9: null, initial_FITC_Dextran_three_compartment_model_compartment_1: null, initial_FITC_Dextran_three_compartment_model_compartment_2: null, initial_FITC_Dextran_three_compartment_model_compartment_3: null, lambda_compartment_1: null, lambda_compartment_2: null, lambda_compartment_3: null, lambda_compartment_4: null, lambda_compartment_5: null, lambda_compartment_6: null, lambda_compartment_7: null, lambda_compartment_8: null, lambda_compartment_9: null, mu: null};
    this.metadata.variableOrder = {FITC_Dextran_three_compartment_model_compartment_1: null, FITC_Dextran_three_compartment_model_compartment_2: null, FITC_Dextran_three_compartment_model_compartment_3: null, FITC_Dextran_nine_compartment_model_compartment_4: null, FITC_Dextran_nine_compartment_model_compartment_5: null, FITC_Dextran_nine_compartment_model_compartment_6: null, FITC_Dextran_nine_compartment_model_compartment_7: null, FITC_Dextran_nine_compartment_model_compartment_8: null, FITC_Dextran_nine_compartment_model_compartment_9: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

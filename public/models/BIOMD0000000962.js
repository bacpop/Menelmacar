export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.China = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Unquarantined_Infected;
    state[2] = internal.initial_Quarantined_Infected;
    state[3] = internal.initial_Confirmed_Infected;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Confirmed_Infected_init", "gamma_1_Stage_I_China", "gamma_1_Stage_I_Hubei", "gamma_1_Stage_I_Wuhan", "gamma_1_Stage_II_China", "gamma_1_Stage_II_Hubei", "gamma_1_Stage_II_Wuhan", "gamma_1_Stage_III_Wuhan", "gamma_2_Stage_I_China", "gamma_2_Stage_I_Hubei", "gamma_2_Stage_I_Wuhan", "gamma_2_Stage_II_China", "gamma_2_Stage_II_Hubei", "gamma_2_Stage_II_Wuhan", "gamma_2_Stage_III_Wuhan", "Quarantined_Infected_init", "R_Stage_I_China", "R_Stage_I_Hubei", "R_Stage_I_Wuhan", "R_Stage_II_China", "R_Stage_II_Hubei", "R_Stage_II_Wuhan", "R_Stage_III_Wuhan", "sigma", "Total_Pop_China", "Total_Pop_Hubei", "Total_Pop_Wuhan", "Trigger_China", "Trigger_Hubei", "Trigger_Stage_I", "Trigger_Stage_II", "Trigger_Stage_III", "Trigger_Wuhan", "Unquarantined_Infected_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Confirmed_Infected_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_I_China", internal, 0.19409999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_I_Hubei", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_I_Wuhan", internal, 0.063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_II_China", internal, 0.51570000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_II_Hubei", internal, 0.48799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_II_Wuhan", internal, 0.39169999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1_Stage_III_Wuhan", internal, 0.61850000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_I_China", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_I_Hubei", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_I_Wuhan", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_II_China", internal, 0.21890000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_II_Hubei", internal, 0.19139999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_II_Wuhan", internal, 0.064299999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_Stage_III_Wuhan", internal, 0.32200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Quarantined_Infected_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_I_China", internal, 1.5283, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_I_Hubei", internal, 5.9340000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_I_Wuhan", internal, 4.7092000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_II_China", internal, 0.57530000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_II_Hubei", internal, 0.6079, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_II_Wuhan", internal, 0.75749999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_Stage_III_Wuhan", internal, 0.47970000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_Pop_China", internal, 1335000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_Pop_Hubei", internal, 48000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_Pop_Wuhan", internal, 9010000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_China", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_Hubei", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_Stage_I", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_Stage_II", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_Stage_III", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trigger_Wuhan", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Unquarantined_Infected_init", internal, 258, -Infinity, Infinity, false);
    internal.initial_Confirmed_Infected = internal.Confirmed_Infected_init;
    internal.initial_Quarantined_Infected = internal.Quarantined_Infected_init;
    internal.initial_Unquarantined_Infected = internal.Unquarantined_Infected_init;
    internal.ModelValue_0 = internal.Trigger_Stage_I;
    internal.ModelValue_1 = internal.Trigger_Stage_II;
    internal.ModelValue_13 = internal.Total_Pop_Wuhan;
    internal.ModelValue_14 = internal.Total_Pop_Hubei;
    internal.ModelValue_15 = internal.Total_Pop_China;
    internal.ModelValue_16 = internal.R_Stage_I_Wuhan;
    internal.ModelValue_17 = internal.gamma_1_Stage_I_Wuhan;
    internal.ModelValue_18 = internal.gamma_2_Stage_I_Wuhan;
    internal.ModelValue_19 = internal.R_Stage_II_Wuhan;
    internal.ModelValue_2 = internal.Trigger_Stage_III;
    internal.ModelValue_20 = internal.gamma_1_Stage_II_Wuhan;
    internal.ModelValue_21 = internal.gamma_2_Stage_II_Wuhan;
    internal.ModelValue_22 = internal.R_Stage_III_Wuhan;
    internal.ModelValue_23 = internal.gamma_1_Stage_III_Wuhan;
    internal.ModelValue_24 = internal.gamma_2_Stage_III_Wuhan;
    internal.ModelValue_25 = internal.R_Stage_I_Hubei;
    internal.ModelValue_26 = internal.gamma_1_Stage_I_Hubei;
    internal.ModelValue_27 = internal.gamma_2_Stage_I_Hubei;
    internal.ModelValue_28 = internal.R_Stage_II_Hubei;
    internal.ModelValue_29 = internal.gamma_1_Stage_II_Hubei;
    internal.ModelValue_3 = internal.Trigger_Wuhan;
    internal.ModelValue_30 = internal.gamma_2_Stage_II_Hubei;
    internal.ModelValue_31 = internal.R_Stage_I_China;
    internal.ModelValue_32 = internal.gamma_1_Stage_I_China;
    internal.ModelValue_33 = internal.gamma_2_Stage_I_China;
    internal.ModelValue_34 = internal.R_Stage_II_China;
    internal.ModelValue_35 = internal.gamma_1_Stage_II_China;
    internal.ModelValue_36 = internal.gamma_2_Stage_II_China;
    internal.ModelValue_4 = internal.Trigger_Hubei;
    internal.ModelValue_5 = internal.Trigger_China;
    internal.ModelValue_9 = internal.sigma;
    internal.gamma_1 = internal.ModelValue_3 * (internal.ModelValue_0 * internal.ModelValue_17 + internal.ModelValue_1 * internal.ModelValue_20 + internal.ModelValue_2 * internal.ModelValue_23) + internal.ModelValue_4 * (internal.ModelValue_0 * internal.ModelValue_26 + internal.ModelValue_1 * internal.ModelValue_29) + internal.ModelValue_5 * (internal.ModelValue_0 * internal.ModelValue_32 + internal.ModelValue_1 * internal.ModelValue_35);
    internal.gamma_2 = internal.ModelValue_3 * (internal.ModelValue_0 * internal.ModelValue_18 + internal.ModelValue_1 * internal.ModelValue_21 + internal.ModelValue_2 * internal.ModelValue_24) + internal.ModelValue_4 * (internal.ModelValue_0 * internal.ModelValue_27 + internal.ModelValue_1 * internal.ModelValue_30) + internal.ModelValue_5 * (internal.ModelValue_0 * internal.ModelValue_33 + internal.ModelValue_1 * internal.ModelValue_36);
    internal.R = internal.ModelValue_3 * (internal.ModelValue_0 * internal.ModelValue_16 + internal.ModelValue_1 * internal.ModelValue_19 + internal.ModelValue_2 * internal.ModelValue_22) + internal.ModelValue_4 * (internal.ModelValue_0 * internal.ModelValue_25 + internal.ModelValue_1 * internal.ModelValue_28) + internal.ModelValue_5 * (internal.ModelValue_0 * internal.ModelValue_31 + internal.ModelValue_1 * internal.ModelValue_34);
    internal.Total_Pop = internal.ModelValue_3 * internal.ModelValue_13 + internal.ModelValue_4 * internal.ModelValue_14 + internal.ModelValue_5 * internal.ModelValue_15;
    internal.ModelValue_6 = internal.R;
    internal.ModelValue_7 = internal.gamma_1;
    internal.ModelValue_8 = internal.gamma_2;
    internal.Susceptible_init = internal.Total_Pop;
    internal.alpha = internal.ModelValue_6 * internal.ModelValue_7;
    internal.beta = internal.ModelValue_8 + (1 - internal.ModelValue_8) * internal.ModelValue_9;
    internal.initial_Susceptible = internal.Susceptible_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Unquarantined_Infected = state[1];
    const Quarantined_Infected = state[2];
    dstatedt[3] = 0 + 1 * internal.China * internal.beta * Quarantined_Infected;
    dstatedt[2] = 0 + 1 * internal.China * internal.gamma_1 * Unquarantined_Infected - 1 * internal.China * internal.beta * Quarantined_Infected;
    dstatedt[0] = 0 - 1 * internal.China * (internal.alpha * Susceptible * Unquarantined_Infected / internal.Total_Pop);
    dstatedt[1] = 0 + 1 * internal.China * (internal.alpha * Susceptible * Unquarantined_Infected / internal.Total_Pop) - 1 * internal.China * internal.gamma_1 * Unquarantined_Infected;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Unquarantined_Infected", "Quarantined_Infected", "Confirmed_Infected"];
    this.metadata.internalOrder = {alpha: null, beta: null, China: null, Confirmed_Infected_init: null, gamma_1: null, gamma_1_Stage_I_China: null, gamma_1_Stage_I_Hubei: null, gamma_1_Stage_I_Wuhan: null, gamma_1_Stage_II_China: null, gamma_1_Stage_II_Hubei: null, gamma_1_Stage_II_Wuhan: null, gamma_1_Stage_III_Wuhan: null, gamma_2: null, gamma_2_Stage_I_China: null, gamma_2_Stage_I_Hubei: null, gamma_2_Stage_I_Wuhan: null, gamma_2_Stage_II_China: null, gamma_2_Stage_II_Hubei: null, gamma_2_Stage_II_Wuhan: null, gamma_2_Stage_III_Wuhan: null, initial_Confirmed_Infected: null, initial_Quarantined_Infected: null, initial_Susceptible: null, initial_Unquarantined_Infected: null, ModelValue_0: null, ModelValue_1: null, ModelValue_13: null, ModelValue_14: null, ModelValue_15: null, ModelValue_16: null, ModelValue_17: null, ModelValue_18: null, ModelValue_19: null, ModelValue_2: null, ModelValue_20: null, ModelValue_21: null, ModelValue_22: null, ModelValue_23: null, ModelValue_24: null, ModelValue_25: null, ModelValue_26: null, ModelValue_27: null, ModelValue_28: null, ModelValue_29: null, ModelValue_3: null, ModelValue_30: null, ModelValue_31: null, ModelValue_32: null, ModelValue_33: null, ModelValue_34: null, ModelValue_35: null, ModelValue_36: null, ModelValue_4: null, ModelValue_5: null, ModelValue_6: null, ModelValue_7: null, ModelValue_8: null, ModelValue_9: null, Quarantined_Infected_init: null, R: null, R_Stage_I_China: null, R_Stage_I_Hubei: null, R_Stage_I_Wuhan: null, R_Stage_II_China: null, R_Stage_II_Hubei: null, R_Stage_II_Wuhan: null, R_Stage_III_Wuhan: null, sigma: null, Susceptible_init: null, Total_Pop: null, Total_Pop_China: null, Total_Pop_Hubei: null, Total_Pop_Wuhan: null, Trigger_China: null, Trigger_Hubei: null, Trigger_Stage_I: null, Trigger_Stage_II: null, Trigger_Stage_III: null, Trigger_Wuhan: null, Unquarantined_Infected_init: null};
    this.metadata.variableOrder = {Susceptible: null, Unquarantined_Infected: null, Quarantined_Infected: null, Confirmed_Infected: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

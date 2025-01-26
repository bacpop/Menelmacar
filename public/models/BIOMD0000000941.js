export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nuclear = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_cyclin_D_Cdk4_6;
    state[1] = internal.initial_transcription_factor_E2F_active;
    state[2] = internal.initial_cyclin_E_Cdk2;
    state[3] = internal.initial_cyclin_A_Cdk2;
    state[4] = internal.initial_cyclin_B_Cdk1;
    state[5] = internal.initial_Cdc20_active;
    state[6] = internal.initial_E2F_total;
    state[7] = internal.initial_Cdc20_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdc20_active_init", "Cdc20_total_init", "cyclin_A_Cdk2_init", "cyclin_B_Cdk1_init", "cyclin_D_Cdk4_6_init", "cyclin_E_Cdk2_init", "E2F_total_init", "GF", "K1cdc20", "K1e2f", "K2cdc20", "K2e2f", "Kda", "Kdb", "Kdd", "Kde", "Kgf", "transcription_factor_E2F_active_init", "V1cdc20", "V1e2f", "V2cdc20", "V2e2f", "Vda", "Vdb", "Vdd", "Vde", "vsa", "vsb", "vsd", "vse"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdc20_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cyclin_A_Cdk2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cyclin_B_Cdk1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cyclin_D_Cdk4_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cyclin_E_Cdk2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GF", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1cdc20", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1e2f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2cdc20", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2e2f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kda", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdb", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdd", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kde", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgf", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "transcription_factor_E2F_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1cdc20", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1e2f", internal, 0.80500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2cdc20", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2e2f", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vda", internal, 0.245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vdb", internal, 0.28000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vdd", internal, 0.245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vde", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsa", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsb", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsd", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vse", internal, 0.20999999999999999, -Infinity, Infinity, false);
    internal.initial_Cdc20_active = internal.Cdc20_active_init;
    internal.initial_Cdc20_total = internal.Cdc20_total_init;
    internal.initial_cyclin_A_Cdk2 = internal.cyclin_A_Cdk2_init;
    internal.initial_cyclin_B_Cdk1 = internal.cyclin_B_Cdk1_init;
    internal.initial_cyclin_D_Cdk4_6 = internal.cyclin_D_Cdk4_6_init;
    internal.initial_cyclin_E_Cdk2 = internal.cyclin_E_Cdk2_init;
    internal.initial_E2F_total = internal.E2F_total_init;
    internal.initial_transcription_factor_E2F_active = internal.transcription_factor_E2F_active_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cyclin_D_Cdk4_6 = state[0];
    const transcription_factor_E2F_active = state[1];
    const cyclin_E_Cdk2 = state[2];
    const cyclin_A_Cdk2 = state[3];
    const cyclin_B_Cdk1 = state[4];
    const Cdc20_active = state[5];
    const E2F_total = state[6];
    const Cdc20_total = state[7];
    dstatedt[7] = 0;
    dstatedt[6] = 0;
    dstatedt[5] = 0 + 1 * internal.nuclear * (internal.V1cdc20 * cyclin_B_Cdk1 * (Cdc20_total - Cdc20_active) / (internal.K1cdc20 + (Cdc20_total - Cdc20_active))) - 1 * internal.nuclear * (internal.V2cdc20 * Cdc20_active / (internal.K2cdc20 + Cdc20_active));
    dstatedt[3] = 0 + 1 * internal.nuclear * (internal.vsa * transcription_factor_E2F_active) - 1 * internal.nuclear * (internal.Vda * Cdc20_active * cyclin_A_Cdk2 / (internal.Kda + cyclin_A_Cdk2));
    dstatedt[4] = 0 + 1 * internal.nuclear * (internal.vsb * cyclin_A_Cdk2) - 1 * internal.nuclear * (internal.Vdb * Cdc20_active * cyclin_B_Cdk1 / (internal.Kdb + cyclin_B_Cdk1));
    dstatedt[0] = 0 + 1 * internal.nuclear * (internal.vsd * internal.GF / (internal.Kgf + internal.GF)) - 1 * internal.nuclear * (internal.Vdd * cyclin_D_Cdk4_6 / (internal.Kdd + cyclin_D_Cdk4_6));
    dstatedt[2] = 0 + 1 * internal.nuclear * (internal.vse * transcription_factor_E2F_active) - 1 * internal.nuclear * (internal.Vde * cyclin_A_Cdk2 * cyclin_E_Cdk2 / (internal.Kde + cyclin_E_Cdk2));
    dstatedt[1] = 0 + 1 * internal.nuclear * (internal.V1e2f * ((E2F_total - transcription_factor_E2F_active) / (internal.K1e2f + E2F_total - transcription_factor_E2F_active)) * (cyclin_D_Cdk4_6 + cyclin_E_Cdk2)) - 1 * internal.nuclear * (internal.V2e2f * transcription_factor_E2F_active / (internal.K2e2f + transcription_factor_E2F_active) * cyclin_A_Cdk2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cyclin_D_Cdk4_6", "transcription_factor_E2F_active", "cyclin_E_Cdk2", "cyclin_A_Cdk2", "cyclin_B_Cdk1", "Cdc20_active", "E2F_total", "Cdc20_total"];
    this.metadata.internalOrder = {Cdc20_active_init: null, Cdc20_total_init: null, cyclin_A_Cdk2_init: null, cyclin_B_Cdk1_init: null, cyclin_D_Cdk4_6_init: null, cyclin_E_Cdk2_init: null, E2F_total_init: null, GF: null, initial_Cdc20_active: null, initial_Cdc20_total: null, initial_cyclin_A_Cdk2: null, initial_cyclin_B_Cdk1: null, initial_cyclin_D_Cdk4_6: null, initial_cyclin_E_Cdk2: null, initial_E2F_total: null, initial_transcription_factor_E2F_active: null, K1cdc20: null, K1e2f: null, K2cdc20: null, K2e2f: null, Kda: null, Kdb: null, Kdd: null, Kde: null, Kgf: null, nuclear: null, transcription_factor_E2F_active_init: null, V1cdc20: null, V1e2f: null, V2cdc20: null, V2e2f: null, Vda: null, Vdb: null, Vdd: null, Vde: null, vsa: null, vsb: null, vsd: null, vse: null};
    this.metadata.variableOrder = {cyclin_D_Cdk4_6: null, transcription_factor_E2F_active: null, cyclin_E_Cdk2: null, cyclin_A_Cdk2: null, cyclin_B_Cdk1: null, Cdc20_active: null, E2F_total: null, Cdc20_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

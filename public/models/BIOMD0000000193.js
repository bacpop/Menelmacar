export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Mad1_CMad2;
    state[1] = internal.initial_OMad2;
    state[2] = internal.initial_Mad1_CMad2_OMad2;
    state[3] = internal.initial_Cdc20;
    state[4] = internal.initial_Cdc20_CMad2;
    state[5] = internal.initial_Bub3_BubR1;
    state[6] = internal.initial_MCC;
    state[7] = internal.initial_Bub3_BubR1_Cdc20;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bub3_BubR1_Cdc20_init", "Bub3_BubR1_init", "Cdc20_CMad2_init", "Cdc20_init", "const_val_0", "const_val_1", "k1f", "k1r", "k2f", "k3f", "k4f", "k4r", "k5f", "k5r", "kf6", "Mad1_CMad2_init", "Mad1_CMad2_OMad2_init", "MCC_init", "OMad2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bub3_BubR1_Cdc20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bub3_BubR1_init", internal, 1.3e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_CMad2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_init", internal, 2.2000000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "const_val_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "const_val_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1f", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2f", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4f", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4r", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5f", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5r", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf6", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mad1_CMad2_init", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mad1_CMad2_OMad2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MCC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OMad2_init", internal, 1.3e-07, -Infinity, Infinity, false);
    internal.initial_Bub3_BubR1 = internal.Bub3_BubR1_init;
    internal.initial_Bub3_BubR1_Cdc20 = internal.Bub3_BubR1_Cdc20_init;
    internal.initial_Cdc20 = internal.Cdc20_init;
    internal.initial_Cdc20_CMad2 = internal.Cdc20_CMad2_init;
    internal.initial_Mad1_CMad2 = internal.Mad1_CMad2_init;
    internal.initial_Mad1_CMad2_OMad2 = internal.Mad1_CMad2_OMad2_init;
    internal.initial_MCC = internal.MCC_init;
    internal.initial_OMad2 = internal.OMad2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Mad1_CMad2 = state[0];
    const OMad2 = state[1];
    const Mad1_CMad2_OMad2 = state[2];
    const Cdc20 = state[3];
    const Cdc20_CMad2 = state[4];
    const Bub3_BubR1 = state[5];
    const MCC = state[6];
    const Bub3_BubR1_Cdc20 = state[7];
    var u = (t > 2000 ? internal.const_val_0 : 1);
    dstatedt[5] = 0 - 1 * internal.Cytoplasm * (u * internal.k4f * Cdc20_CMad2 * Bub3_BubR1 - internal.k4r * MCC) - 1 * internal.Cytoplasm * (u * internal.k5f * Bub3_BubR1 * Cdc20 - internal.k5r * Bub3_BubR1_Cdc20);
    dstatedt[7] = 0 + 1 * internal.Cytoplasm * (u * internal.k5f * Bub3_BubR1 * Cdc20 - internal.k5r * Bub3_BubR1_Cdc20);
    dstatedt[3] = 0 - 1 * internal.Cytoplasm * u * internal.k2f * Mad1_CMad2_OMad2 * Cdc20 + 1 * internal.Cytoplasm * internal.k3f * Cdc20_CMad2 - 1 * internal.Cytoplasm * (u * internal.k5f * Bub3_BubR1 * Cdc20 - internal.k5r * Bub3_BubR1_Cdc20) - 1 * internal.Cytoplasm * internal.kf6 * OMad2 * Cdc20;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * u * internal.k2f * Mad1_CMad2_OMad2 * Cdc20 - 1 * internal.Cytoplasm * internal.k3f * Cdc20_CMad2 - 1 * internal.Cytoplasm * (u * internal.k4f * Cdc20_CMad2 * Bub3_BubR1 - internal.k4r * MCC) + 1 * internal.Cytoplasm * internal.kf6 * OMad2 * Cdc20;
    dstatedt[0] = 0 - 1 * internal.Cytoplasm * (u * internal.k1f * Mad1_CMad2 * OMad2 - internal.k1r * Mad1_CMad2_OMad2) + 1 * internal.Cytoplasm * u * internal.k2f * Mad1_CMad2_OMad2 * Cdc20;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * (u * internal.k1f * Mad1_CMad2 * OMad2 - internal.k1r * Mad1_CMad2_OMad2) - 1 * internal.Cytoplasm * u * internal.k2f * Mad1_CMad2_OMad2 * Cdc20;
    dstatedt[6] = 0 + 1 * internal.Cytoplasm * (u * internal.k4f * Cdc20_CMad2 * Bub3_BubR1 - internal.k4r * MCC);
    dstatedt[1] = 0 - 1 * internal.Cytoplasm * (u * internal.k1f * Mad1_CMad2 * OMad2 - internal.k1r * Mad1_CMad2_OMad2) + 1 * internal.Cytoplasm * internal.k3f * Cdc20_CMad2 - 1 * internal.Cytoplasm * internal.kf6 * OMad2 * Cdc20;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Mad1_CMad2", "OMad2", "Mad1_CMad2_OMad2", "Cdc20", "Cdc20_CMad2", "Bub3_BubR1", "MCC", "Bub3_BubR1_Cdc20"];
    this.metadata.internalOrder = {Bub3_BubR1_Cdc20_init: null, Bub3_BubR1_init: null, Cdc20_CMad2_init: null, Cdc20_init: null, const_val_0: null, const_val_1: null, Cytoplasm: null, initial_Bub3_BubR1: null, initial_Bub3_BubR1_Cdc20: null, initial_Cdc20: null, initial_Cdc20_CMad2: null, initial_Mad1_CMad2: null, initial_Mad1_CMad2_OMad2: null, initial_MCC: null, initial_OMad2: null, k1f: null, k1r: null, k2f: null, k3f: null, k4f: null, k4r: null, k5f: null, k5r: null, kf6: null, Mad1_CMad2_init: null, Mad1_CMad2_OMad2_init: null, MCC_init: null, OMad2_init: null};
    this.metadata.variableOrder = {Mad1_CMad2: null, OMad2: null, Mad1_CMad2_OMad2: null, Cdc20: null, Cdc20_CMad2: null, Bub3_BubR1: null, MCC: null, Bub3_BubR1_Cdc20: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

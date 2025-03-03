export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_receptor;
    state[1] = internal.initial_R_smad_cyt;
    state[2] = internal.initial_R_smad_P_cyt;
    state[3] = internal.initial_smad4_cyt;
    state[4] = internal.initial_R_smad_P_smad4_cyt;
    state[5] = internal.initial_R_smad_P_smad4_nuc;
    state[6] = internal.initial_R_smad_nuc;
    state[7] = internal.initial_R_smad_P_nuc;
    state[8] = internal.initial_smad4_nuc;
    state[9] = internal.initial_Pi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K1", "k2a", "k2d", "k3", "k4cn", "k4nc", "k5cn", "k5nc", "k6a", "k6d", "K7", "KCAT", "Pi_init", "R_smad_cyt_init", "R_smad_nuc_init", "R_smad_P_cyt_init", "R_smad_P_nuc_init", "R_smad_P_smad4_cyt_init", "R_smad_P_smad4_nuc_init", "receptor_init", "smad4_cyt_init", "smad4_nuc_init", "Vmax7"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K1", internal, 289000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2a", internal, 6.4999999999999994e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2d", internal, 0.039899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 16.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4cn", internal, 0.0049699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4nc", internal, 0.78300000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5cn", internal, 0.56299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5nc", internal, 5.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6a", internal, 0.000144, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6d", internal, 0.049200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 8950, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCAT", internal, 3.5099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_cyt_init", internal, 162000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_nuc_init", internal, 18000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_P_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_P_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_P_smad4_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_smad_P_smad4_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "receptor_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "smad4_cyt_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "smad4_nuc_init", internal, 30000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmax7", internal, 17100, -Infinity, Infinity, false);
    internal.initial_Pi = internal.Pi_init;
    internal.initial_R_smad_cyt = internal.R_smad_cyt_init;
    internal.initial_R_smad_nuc = internal.R_smad_nuc_init;
    internal.initial_R_smad_P_cyt = internal.R_smad_P_cyt_init;
    internal.initial_R_smad_P_nuc = internal.R_smad_P_nuc_init;
    internal.initial_R_smad_P_smad4_cyt = internal.R_smad_P_smad4_cyt_init;
    internal.initial_R_smad_P_smad4_nuc = internal.R_smad_P_smad4_nuc_init;
    internal.initial_receptor = internal.receptor_init;
    internal.initial_smad4_cyt = internal.smad4_cyt_init;
    internal.initial_smad4_nuc = internal.smad4_nuc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const receptor = state[0];
    const R_smad_cyt = state[1];
    const R_smad_P_cyt = state[2];
    const smad4_cyt = state[3];
    const R_smad_P_smad4_cyt = state[4];
    const R_smad_P_smad4_nuc = state[5];
    const R_smad_nuc = state[6];
    const R_smad_P_nuc = state[7];
    const smad4_nuc = state[8];
    dstatedt[9] = 0 + 1 * internal.Vmax7 * R_smad_P_nuc / (internal.K7 + R_smad_P_nuc);
    dstatedt[1] = 0 - 1 * internal.KCAT * receptor * R_smad_cyt / (internal.K1 + R_smad_cyt) + 1 * internal.k5nc * R_smad_nuc - internal.k5cn * R_smad_cyt;
    dstatedt[6] = 0 - 1 * internal.k5nc * R_smad_nuc - internal.k5cn * R_smad_cyt + 1 * internal.Vmax7 * R_smad_P_nuc / (internal.K7 + R_smad_P_nuc);
    dstatedt[2] = 0 + 1 * internal.KCAT * receptor * R_smad_cyt / (internal.K1 + R_smad_cyt) - 1 * internal.k2a * R_smad_P_cyt * smad4_cyt - internal.k2d * R_smad_P_smad4_cyt;
    dstatedt[7] = 0 + 1 * internal.k6d * R_smad_P_smad4_nuc - internal.k6a * smad4_nuc * R_smad_P_nuc - 1 * internal.Vmax7 * R_smad_P_nuc / (internal.K7 + R_smad_P_nuc);
    dstatedt[4] = 0 + 1 * internal.k2a * R_smad_P_cyt * smad4_cyt - internal.k2d * R_smad_P_smad4_cyt - 1 * internal.k3 * R_smad_P_smad4_cyt;
    dstatedt[5] = 0 + 1 * internal.k3 * R_smad_P_smad4_cyt - 1 * internal.k6d * R_smad_P_smad4_nuc - internal.k6a * smad4_nuc * R_smad_P_nuc;
    dstatedt[0] = 0 - 1 * 100 * Math.exp(- t / 90);
    dstatedt[3] = 0 + 1 * internal.k4nc * smad4_nuc - internal.k4cn * smad4_cyt - 1 * internal.k2a * R_smad_P_cyt * smad4_cyt - internal.k2d * R_smad_P_smad4_cyt;
    dstatedt[8] = 0 - 1 * internal.k4nc * smad4_nuc - internal.k4cn * smad4_cyt + 1 * internal.k6d * R_smad_P_smad4_nuc - internal.k6a * smad4_nuc * R_smad_P_nuc;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "receptor", "R_smad_cyt", "R_smad_P_cyt", "smad4_cyt", "R_smad_P_smad4_cyt", "R_smad_P_smad4_nuc", "R_smad_nuc", "R_smad_P_nuc", "smad4_nuc", "Pi"];
    this.metadata.internalOrder = {cytoplasm: null, initial_Pi: null, initial_R_smad_cyt: null, initial_R_smad_nuc: null, initial_R_smad_P_cyt: null, initial_R_smad_P_nuc: null, initial_R_smad_P_smad4_cyt: null, initial_R_smad_P_smad4_nuc: null, initial_receptor: null, initial_smad4_cyt: null, initial_smad4_nuc: null, K1: null, k2a: null, k2d: null, k3: null, k4cn: null, k4nc: null, k5cn: null, k5nc: null, k6a: null, k6d: null, K7: null, KCAT: null, nucleus: null, Pi_init: null, R_smad_cyt_init: null, R_smad_nuc_init: null, R_smad_P_cyt_init: null, R_smad_P_nuc_init: null, R_smad_P_smad4_cyt_init: null, R_smad_P_smad4_nuc_init: null, receptor_init: null, smad4_cyt_init: null, smad4_nuc_init: null, Vmax7: null};
    this.metadata.variableOrder = {receptor: null, R_smad_cyt: null, R_smad_P_cyt: null, smad4_cyt: null, R_smad_P_smad4_cyt: null, R_smad_P_smad4_nuc: null, R_smad_nuc: null, R_smad_P_nuc: null, smad4_nuc: null, Pi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.uVol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_Mp;
    state[2] = internal.initial_Mpp;
    state[3] = internal.initial_MAPKK;
    state[4] = internal.initial_MKP3;
    state[5] = internal.initial_M_MAPKK;
    state[6] = internal.initial_Mp_MAPKK;
    state[7] = internal.initial_Mpp_MKP3;
    state[8] = internal.initial_Mp_MKP3_dep;
    state[9] = internal.initial_Mp_MKP3;
    state[10] = internal.initial_M_MKP3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["h_1", "h_3", "h_4", "h_6", "h1", "h2", "h3", "h4", "h5", "h6", "k_1", "k_3", "k1", "k2", "k3", "k4", "M_init", "M_MAPKK_init", "M_MKP3_init", "MAPKK_init", "MKP3_init", "Mp_init", "Mp_MAPKK_init", "Mp_MKP3_dep_init", "Mp_MKP3_init", "Mpp_init", "Mpp_MKP3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "h_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_6", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h5", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h6", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.032000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MAPKK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_MKP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPKK_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKP3_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_MAPKK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_MKP3_dep_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_MKP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_MKP3_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_M_MAPKK = internal.M_MAPKK_init;
    internal.initial_M_MKP3 = internal.M_MKP3_init;
    internal.initial_MAPKK = internal.MAPKK_init;
    internal.initial_MKP3 = internal.MKP3_init;
    internal.initial_Mp = internal.Mp_init;
    internal.initial_Mp_MAPKK = internal.Mp_MAPKK_init;
    internal.initial_Mp_MKP3 = internal.Mp_MKP3_init;
    internal.initial_Mp_MKP3_dep = internal.Mp_MKP3_dep_init;
    internal.initial_Mpp = internal.Mpp_init;
    internal.initial_Mpp_MKP3 = internal.Mpp_MKP3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const Mp = state[1];
    const Mpp = state[2];
    const MAPKK = state[3];
    const MKP3 = state[4];
    const M_MAPKK = state[5];
    const Mp_MAPKK = state[6];
    const Mpp_MKP3 = state[7];
    const Mp_MKP3_dep = state[8];
    const Mp_MKP3 = state[9];
    const M_MKP3 = state[10];
    dstatedt[0] = 0 - 1 * internal.uVol * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK) + 1 * internal.uVol * (internal.h6 * M_MKP3 - internal.h_6 * M * MKP3);
    dstatedt[5] = 0 + 1 * internal.uVol * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK) - 1 * internal.uVol * internal.k2 * M_MAPKK;
    dstatedt[10] = 0 + 1 * internal.uVol * internal.h5 * Mp_MKP3 - 1 * internal.uVol * (internal.h6 * M_MKP3 - internal.h_6 * M * MKP3);
    dstatedt[3] = 0 - 1 * internal.uVol * (internal.k1 * M * MAPKK - internal.k_1 * M_MAPKK) + 1 * internal.uVol * internal.k2 * M_MAPKK - 1 * internal.uVol * (internal.k3 * Mp * MAPKK - internal.k_3 * Mp_MAPKK) + 1 * internal.uVol * internal.k4 * Mp_MAPKK;
    dstatedt[4] = 0 - 1 * internal.uVol * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3) + 1 * internal.h3 * Mp_MKP3_dep - internal.h_3 * Mp * MKP3 - 1 * internal.uVol * (internal.h4 * Mp * MKP3 - internal.h_4 * Mp_MKP3) + 1 * internal.uVol * (internal.h6 * M_MKP3 - internal.h_6 * M * MKP3);
    dstatedt[1] = 0 + 1 * internal.uVol * internal.k2 * M_MAPKK - 1 * internal.uVol * (internal.k3 * Mp * MAPKK - internal.k_3 * Mp_MAPKK) + 1 * internal.h3 * Mp_MKP3_dep - internal.h_3 * Mp * MKP3 - 1 * internal.uVol * (internal.h4 * Mp * MKP3 - internal.h_4 * Mp_MKP3);
    dstatedt[6] = 0 + 1 * internal.uVol * (internal.k3 * Mp * MAPKK - internal.k_3 * Mp_MAPKK) - 1 * internal.uVol * internal.k4 * Mp_MAPKK;
    dstatedt[9] = 0 + 1 * internal.uVol * (internal.h4 * Mp * MKP3 - internal.h_4 * Mp_MKP3) - 1 * internal.uVol * internal.h5 * Mp_MKP3;
    dstatedt[8] = 0 + 1 * internal.uVol * internal.h2 * Mpp_MKP3 - 1 * internal.h3 * Mp_MKP3_dep - internal.h_3 * Mp * MKP3;
    dstatedt[2] = 0 + 1 * internal.uVol * internal.k4 * Mp_MAPKK - 1 * internal.uVol * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3);
    dstatedt[7] = 0 + 1 * internal.uVol * (internal.h1 * Mpp * MKP3 - internal.h_1 * Mpp_MKP3) - 1 * internal.uVol * internal.h2 * Mpp_MKP3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "Mp", "Mpp", "MAPKK", "MKP3", "M_MAPKK", "Mp_MAPKK", "Mpp_MKP3", "Mp_MKP3_dep", "Mp_MKP3", "M_MKP3"];
    this.metadata.internalOrder = {h_1: null, h_3: null, h_4: null, h_6: null, h1: null, h2: null, h3: null, h4: null, h5: null, h6: null, initial_M: null, initial_M_MAPKK: null, initial_M_MKP3: null, initial_MAPKK: null, initial_MKP3: null, initial_Mp: null, initial_Mp_MAPKK: null, initial_Mp_MKP3: null, initial_Mp_MKP3_dep: null, initial_Mpp: null, initial_Mpp_MKP3: null, k_1: null, k_3: null, k1: null, k2: null, k3: null, k4: null, M_init: null, M_MAPKK_init: null, M_MKP3_init: null, MAPKK_init: null, MKP3_init: null, Mp_init: null, Mp_MAPKK_init: null, Mp_MKP3_dep_init: null, Mp_MKP3_init: null, Mpp_init: null, Mpp_MKP3_init: null, uVol: null};
    this.metadata.variableOrder = {M: null, Mp: null, Mpp: null, MAPKK: null, MKP3: null, M_MAPKK: null, Mp_MAPKK: null, Mpp_MKP3: null, Mp_MKP3_dep: null, Mp_MKP3: null, M_MKP3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

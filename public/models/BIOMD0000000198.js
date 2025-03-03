export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.NO = 0.5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_sGCfast;
    state[1] = internal.initial_NO_sGCfast;
    state[2] = internal.initial_NO_sGCfast_6coord;
    state[3] = internal.initial_NO_sGCfast_5coord;
    state[4] = internal.initial_sGCslow;
    state[5] = internal.initial_NO_sGCslow;
    state[6] = internal.initial_NO_sGCslow_6coord;
    state[7] = internal.initial_NO_sGCslow_6coord_NO_int;
    state[8] = internal.initial_NO_sGCslow_5coord;
    state[9] = internal.initial_NO_sGC_5coord_tot;
    state[10] = internal.initial_sGC_inact_tot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["e5c", "e5c_NO", "e6c_NO", "k1", "k10", "k11", "k12", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "NO_sGC_5coord_tot_init", "NO_sGCfast_5coord_init", "NO_sGCfast_6coord_init", "NO_sGCfast_init", "NO_sGCslow_5coord_init", "NO_sGCslow_6coord_init", "NO_sGCslow_6coord_NO_int_init", "NO_sGCslow_init", "sGC_inact_tot_init", "sGCfast_init", "sGCslow_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "e5c", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e5c_NO", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e6c_NO", internal, 0.064000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 850, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 850, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGC_5coord_tot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCfast_5coord_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCfast_6coord_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCfast_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCslow_5coord_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCslow_6coord_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCslow_6coord_NO_int_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_sGCslow_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sGC_inact_tot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sGCfast_init", internal, 0.112, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sGCslow_init", internal, 0.28799999999999998, -Infinity, Infinity, false);
    internal.initial_NO_sGC_5coord_tot = internal.NO_sGC_5coord_tot_init;
    internal.initial_NO_sGCfast = internal.NO_sGCfast_init;
    internal.initial_NO_sGCfast_5coord = internal.NO_sGCfast_5coord_init;
    internal.initial_NO_sGCfast_6coord = internal.NO_sGCfast_6coord_init;
    internal.initial_NO_sGCslow = internal.NO_sGCslow_init;
    internal.initial_NO_sGCslow_5coord = internal.NO_sGCslow_5coord_init;
    internal.initial_NO_sGCslow_6coord = internal.NO_sGCslow_6coord_init;
    internal.initial_NO_sGCslow_6coord_NO_int = internal.NO_sGCslow_6coord_NO_int_init;
    internal.initial_sGC_inact_tot = internal.sGC_inact_tot_init;
    internal.initial_sGCfast = internal.sGCfast_init;
    internal.initial_sGCslow = internal.sGCslow_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const sGCfast = state[0];
    const NO_sGCfast = state[1];
    const NO_sGCfast_6coord = state[2];
    const NO_sGCfast_5coord = state[3];
    const sGCslow = state[4];
    const NO_sGCslow = state[5];
    const NO_sGCslow_6coord = state[6];
    const NO_sGCslow_6coord_NO_int = state[7];
    const NO_sGCslow_5coord = state[8];
    dstatedt[9] = 0;
    dstatedt[10] = 0;
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.k1 * internal.NO * sGCfast - internal.k2 * NO_sGCfast) - 1 * internal.k3 * internal.cytosol * NO_sGCfast;
    dstatedt[3] = 0 + 1 * internal.cytosol * (internal.k4 * NO_sGCfast_6coord - internal.k5 * NO_sGCfast_5coord);
    dstatedt[2] = 0 + 1 * internal.k3 * internal.cytosol * NO_sGCfast - 1 * internal.cytosol * (internal.k4 * NO_sGCfast_6coord - internal.k5 * NO_sGCfast_5coord);
    dstatedt[5] = 0 + 1 * internal.cytosol * (internal.k6 * internal.NO * sGCslow - internal.k7 * NO_sGCslow) - 1 * internal.k8 * internal.cytosol * NO_sGCslow;
    dstatedt[8] = 0 + 1 * internal.cytosol * (internal.k11 * NO_sGCslow_6coord_NO_int - internal.k12 * NO_sGCslow_5coord);
    dstatedt[6] = 0 + 1 * internal.k8 * internal.cytosol * NO_sGCslow - 1 * internal.cytosol * (internal.k9 * internal.NO * NO_sGCslow_6coord - internal.k10 * NO_sGCslow_6coord_NO_int);
    dstatedt[7] = 0 + 1 * internal.cytosol * (internal.k9 * internal.NO * NO_sGCslow_6coord - internal.k10 * NO_sGCslow_6coord_NO_int) - 1 * internal.cytosol * (internal.k11 * NO_sGCslow_6coord_NO_int - internal.k12 * NO_sGCslow_5coord);
    dstatedt[0] = 0 - 1 * internal.cytosol * (internal.k1 * internal.NO * sGCfast - internal.k2 * NO_sGCfast);
    dstatedt[4] = 0 - 1 * internal.cytosol * (internal.k6 * internal.NO * sGCslow - internal.k7 * NO_sGCslow);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "sGCfast", "NO_sGCfast", "NO_sGCfast_6coord", "NO_sGCfast_5coord", "sGCslow", "NO_sGCslow", "NO_sGCslow_6coord", "NO_sGCslow_6coord_NO_int", "NO_sGCslow_5coord", "NO_sGC_5coord_tot", "sGC_inact_tot"];
    this.metadata.internalOrder = {cytosol: null, e5c: null, e5c_NO: null, e6c_NO: null, initial_NO_sGC_5coord_tot: null, initial_NO_sGCfast: null, initial_NO_sGCfast_5coord: null, initial_NO_sGCfast_6coord: null, initial_NO_sGCslow: null, initial_NO_sGCslow_5coord: null, initial_NO_sGCslow_6coord: null, initial_NO_sGCslow_6coord_NO_int: null, initial_sGC_inact_tot: null, initial_sGCfast: null, initial_sGCslow: null, k1: null, k10: null, k11: null, k12: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, NO: null, NO_sGC_5coord_tot_init: null, NO_sGCfast_5coord_init: null, NO_sGCfast_6coord_init: null, NO_sGCfast_init: null, NO_sGCslow_5coord_init: null, NO_sGCslow_6coord_init: null, NO_sGCslow_6coord_NO_int_init: null, NO_sGCslow_init: null, sGC_inact_tot_init: null, sGCfast_init: null, sGCslow_init: null};
    this.metadata.variableOrder = {sGCfast: null, NO_sGCfast: null, NO_sGCfast_6coord: null, NO_sGCfast_5coord: null, sGCslow: null, NO_sGCslow: null, NO_sGCslow_6coord: null, NO_sGCslow_6coord_NO_int: null, NO_sGCslow_5coord: null, NO_sGC_5coord_tot: null, sGC_inact_tot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

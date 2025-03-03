export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.citrulline = 0;
    internal.cytosol = 1;
    internal.NADPH = 40;
    internal.NADPplus = 0;
    internal.NO = 0;
    internal.NO3 = 0;
    internal.O2 = 140;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_FeIII;
    state[1] = internal.initial_FeII;
    state[2] = internal.initial_FeII_O2;
    state[3] = internal.initial_FeIII_star;
    state[4] = internal.initial_FeII_star;
    state[5] = internal.initial_FeII_star_O2;
    state[6] = internal.initial_FeIII_NO;
    state[7] = internal.initial_FeII_NO;
    state[8] = internal.initial_FeIII_t;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["FeII_init", "FeII_NO_init", "FeII_O2_init", "FeII_star_init", "FeII_star_O2_init", "FeIII_init", "FeIII_NO_init", "FeIII_star_init", "FeIII_t_init", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "FeII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeII_NO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeII_O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeII_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeII_star_O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeIII_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeIII_NO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeIII_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeIII_t_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.0012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.0001, -Infinity, Infinity, false);
    internal.initial_FeII = internal.FeII_init;
    internal.initial_FeII_NO = internal.FeII_NO_init;
    internal.initial_FeII_O2 = internal.FeII_O2_init;
    internal.initial_FeII_star = internal.FeII_star_init;
    internal.initial_FeII_star_O2 = internal.FeII_star_O2_init;
    internal.initial_FeIII = internal.FeIII_init;
    internal.initial_FeIII_NO = internal.FeIII_NO_init;
    internal.initial_FeIII_star = internal.FeIII_star_init;
    internal.initial_FeIII_t = internal.FeIII_t_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FeIII = state[0];
    const FeII = state[1];
    const FeII_O2 = state[2];
    const FeIII_star = state[3];
    const FeII_star = state[4];
    const FeII_star_O2 = state[5];
    const FeIII_NO = state[6];
    const FeII_NO = state[7];
    dstatedt[8] = 0;
    dstatedt[1] = 0 + 1 * internal.cytosol * internal.k1 * FeIII - 1 * internal.cytosol * internal.k2 * FeII * internal.O2 + 1 * internal.cytosol * internal.k9 * FeII_NO;
    dstatedt[7] = 0 + 1 * internal.cytosol * internal.k8 * FeIII_NO - 1 * internal.cytosol * internal.k9 * FeII_NO - 1 * internal.cytosol * internal.k10 * FeII_NO * internal.O2;
    dstatedt[2] = 0 + 1 * internal.cytosol * internal.k2 * FeII * internal.O2 - 1 * internal.cytosol * internal.k3 * FeII_O2;
    dstatedt[4] = 0 + 1 * internal.cytosol * internal.k4 * FeIII_star - 1 * internal.cytosol * internal.k5 * FeII_star * internal.O2;
    dstatedt[5] = 0 + 1 * internal.cytosol * internal.k5 * FeII_star * internal.O2 - 1 * internal.cytosol * internal.k6 * FeII_star_O2;
    dstatedt[0] = 0 - 1 * internal.cytosol * internal.k1 * FeIII + 1 * internal.cytosol * internal.k7 * FeIII_NO + 1 * internal.cytosol * internal.k10 * FeII_NO * internal.O2;
    dstatedt[6] = 0 + 1 * internal.cytosol * internal.k6 * FeII_star_O2 - 1 * internal.cytosol * internal.k7 * FeIII_NO - 1 * internal.cytosol * internal.k8 * FeIII_NO;
    dstatedt[3] = 0 + 1 * internal.cytosol * internal.k3 * FeII_O2 - 1 * internal.cytosol * internal.k4 * FeIII_star;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FeIII", "FeII", "FeII_O2", "FeIII_star", "FeII_star", "FeII_star_O2", "FeIII_NO", "FeII_NO", "FeIII_t"];
    this.metadata.internalOrder = {citrulline: null, cytosol: null, FeII_init: null, FeII_NO_init: null, FeII_O2_init: null, FeII_star_init: null, FeII_star_O2_init: null, FeIII_init: null, FeIII_NO_init: null, FeIII_star_init: null, FeIII_t_init: null, initial_FeII: null, initial_FeII_NO: null, initial_FeII_O2: null, initial_FeII_star: null, initial_FeII_star_O2: null, initial_FeIII: null, initial_FeIII_NO: null, initial_FeIII_star: null, initial_FeIII_t: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, NADPH: null, NADPplus: null, NO: null, NO3: null, O2: null};
    this.metadata.variableOrder = {FeIII: null, FeII: null, FeII_O2: null, FeIII_star: null, FeII_star: null, FeII_star_O2: null, FeIII_NO: null, FeII_NO: null, FeIII_t: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Biofilm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Gp;
    state[1] = internal.initial_Ai;
    state[2] = internal.initial_Am;
    state[3] = internal.initial_Ap;
    state[4] = internal.initial_Gm;
    state[5] = internal.initial_Gi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ai_init", "Am_init", "Ap_init", "Ge", "Gi_init", "Gm_init", "Gp_init", "k1", "k2", "k3", "k4", "k5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ai_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Am_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ap_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ge", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gi_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gm_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gp_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.34000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.2999999999999998, -Infinity, Infinity, false);
    internal.initial_Ai = internal.Ai_init;
    internal.initial_Am = internal.Am_init;
    internal.initial_Ap = internal.Ap_init;
    internal.initial_Gi = internal.Gi_init;
    internal.initial_Gm = internal.Gm_init;
    internal.initial_Gp = internal.Gp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Gp = state[0];
    const Ai = state[1];
    const Am = state[2];
    const Ap = state[3];
    const Gm = state[4];
    const Gi = state[5];
    dstatedt[1] = 0 - 1 * internal.Biofilm * (internal.k3 * Ai) + 1 * internal.Biofilm * (internal.k5 * Gi);
    dstatedt[2] = 0 + 1 * internal.Biofilm * (internal.k3 * Ai) - 1 * internal.Biofilm * (internal.k3 * Am) + 1 * internal.Biofilm * (internal.k5 * Gm);
    dstatedt[3] = 0 + 1 * internal.Biofilm * (internal.k3 * Am) - 1 * internal.Biofilm * (internal.k3 * Ap);
    dstatedt[5] = 0 - 1 * internal.Biofilm * (internal.k5 * Gi) + 1 * internal.Biofilm * (internal.k4 * Gm);
    dstatedt[4] = 0 + 1 * internal.Biofilm * (internal.k4 * Gp) - 1 * internal.Biofilm * (internal.k4 * Gm) - 1 * internal.Biofilm * (internal.k5 * Gm) - 1 * internal.Biofilm * (internal.k2 * Am * Gm);
    dstatedt[0] = 0 + 1 * internal.Biofilm * (internal.k1 * internal.Ge * Gp) - 1 * internal.Biofilm * (internal.k4 * Gp) - 1 * internal.Biofilm * (internal.k2 * Ap * Gp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Gp", "Ai", "Am", "Ap", "Gm", "Gi"];
    this.metadata.internalOrder = {Ai_init: null, Am_init: null, Ap_init: null, Biofilm: null, Ge: null, Gi_init: null, Gm_init: null, Gp_init: null, initial_Ai: null, initial_Am: null, initial_Ap: null, initial_Gi: null, initial_Gm: null, initial_Gp: null, k1: null, k2: null, k3: null, k4: null, k5: null};
    this.metadata.variableOrder = {Gp: null, Ai: null, Am: null, Ap: null, Gm: null, Gi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

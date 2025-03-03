export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.MAPKK = 50;
    internal.MKP3 = 100;
    internal.uVol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_Mp;
    state[2] = internal.initial_Mpp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1cat", "k2cat", "k3cat", "k4cat", "Km1", "Km2", "Km3", "Km4", "Km5", "M_init", "Mp_init", "Mpp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1cat", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2cat", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3cat", internal, 0.084000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4cat", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km4", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km5", internal, 78, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_Mp = internal.Mp_init;
    internal.initial_Mpp = internal.Mpp_init;
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
    dstatedt[0] = 0 - 1 * internal.uVol * (internal.k1cat * internal.MAPKK * M / internal.Km1 / (1 + M / internal.Km1 + Mp / internal.Km2)) + 1 * internal.uVol * (internal.k4cat * internal.MKP3 * Mp / internal.Km4 / (1 + Mpp / internal.Km3 + Mp / internal.Km4 + M / internal.Km5));
    dstatedt[1] = 0 + 1 * internal.uVol * (internal.k1cat * internal.MAPKK * M / internal.Km1 / (1 + M / internal.Km1 + Mp / internal.Km2)) - 1 * internal.uVol * (internal.k2cat * internal.MAPKK * Mp / internal.Km2 / (1 + M / internal.Km1 + Mp / internal.Km2)) + 1 * internal.uVol * (internal.k3cat * internal.MKP3 * Mpp / internal.Km3 / (1 + Mpp / internal.Km3 + Mp / internal.Km4 + M / internal.Km5)) - 1 * internal.uVol * (internal.k4cat * internal.MKP3 * Mp / internal.Km4 / (1 + Mpp / internal.Km3 + Mp / internal.Km4 + M / internal.Km5));
    dstatedt[2] = 0 + 1 * internal.uVol * (internal.k2cat * internal.MAPKK * Mp / internal.Km2 / (1 + M / internal.Km1 + Mp / internal.Km2)) - 1 * internal.uVol * (internal.k3cat * internal.MKP3 * Mpp / internal.Km3 / (1 + Mpp / internal.Km3 + Mp / internal.Km4 + M / internal.Km5));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "Mp", "Mpp"];
    this.metadata.internalOrder = {initial_M: null, initial_Mp: null, initial_Mpp: null, k1cat: null, k2cat: null, k3cat: null, k4cat: null, Km1: null, Km2: null, Km3: null, Km4: null, Km5: null, M_init: null, MAPKK: null, MKP3: null, Mp_init: null, Mpp_init: null, uVol: null};
    this.metadata.variableOrder = {M: null, Mp: null, Mpp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

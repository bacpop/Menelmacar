export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ARGex = 330;
    internal.cytosol = 1;
    internal.extracellular = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_ORN;
    state[1] = internal.initial_ARGin;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ARGin_init", "Kioarg", "Kiornhat", "Kmarg", "Kmeffllat", "Kmhat", "Kmlat", "Kmnos1", "Kmodc", "ORN_init", "Vmaxarg", "Vmaxefflhat", "Vmaxeffllat", "Vmaxhat", "Vmaxlat", "Vmaxnos1", "Vmaxodc"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ARGin_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kioarg", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiornhat", internal, 360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmarg", internal, 1500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmeffllat", internal, 847, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmhat", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmlat", internal, 847, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmnos1", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmodc", internal, 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ORN_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxarg", internal, 110, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxefflhat", internal, 160.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxeffllat", internal, 420, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxhat", internal, 160.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxlat", internal, 420, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxnos1", internal, 1.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmaxodc", internal, 0.012999999999999999, -Infinity, Infinity, false);
    internal.initial_ARGin = internal.ARGin_init;
    internal.initial_ORN = internal.ORN_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ORN = state[0];
    const ARGin = state[1];
    dstatedt[1] = 0 - 1 * internal.cytosol * (internal.Vmaxarg * ARGin / (internal.Kmarg * (1 + ORN / internal.Kioarg) + ARGin)) + 1 * internal.extracellular * (internal.ARGex / (internal.Kmhat + internal.ARGex) * (internal.Vmaxhat / (1 + ORN / internal.Kiornhat + ARGin / internal.Kmhat)) + internal.ARGex / (internal.Kmlat + internal.ARGex) * (internal.Vmaxlat / (1 + ORN / internal.Kiornhat + ARGin / internal.Kmlat))) - 1 * internal.cytosol * (internal.Vmaxnos1 * ARGin / (internal.Kmnos1 + ARGin));
    dstatedt[0] = 0 + 1 * internal.cytosol * (internal.Vmaxarg * ARGin / (internal.Kmarg * (1 + ORN / internal.Kioarg) + ARGin)) - 1 * internal.cytosol * (internal.Vmaxefflhat / (1 + internal.ARGex / internal.Kmhat) * (ORN / (internal.Kiornhat * (1 + ARGin / internal.Kmhat) + ORN)) + internal.Vmaxeffllat / (1 + internal.ARGex / internal.Kmlat) * (ORN / (internal.Kmeffllat * (1 + ARGin / internal.Kmlat) + ORN))) - 1 * internal.cytosol * (internal.Vmaxodc * ORN / (internal.Kmodc + ORN));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ORN", "ARGin"];
    this.metadata.internalOrder = {ARGex: null, ARGin_init: null, cytosol: null, extracellular: null, initial_ARGin: null, initial_ORN: null, Kioarg: null, Kiornhat: null, Kmarg: null, Kmeffllat: null, Kmhat: null, Kmlat: null, Kmnos1: null, Kmodc: null, ORN_init: null, Vmaxarg: null, Vmaxefflhat: null, Vmaxeffllat: null, Vmaxhat: null, Vmaxlat: null, Vmaxnos1: null, Vmaxodc: null};
    this.metadata.variableOrder = {ORN: null, ARGin: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

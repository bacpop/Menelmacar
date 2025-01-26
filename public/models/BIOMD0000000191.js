export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.extracellular = 1;
    internal.Kioarg = 1000;
    internal.Kiornhat = 360;
    internal.Kmarg = 1500;
    internal.Kmeffllat = 847;
    internal.Kmhat = 70;
    internal.Kmlat = 847;
    internal.Kmnos1 = 16;
    internal.Kmodc = 90;
    internal.Vmaxarg = 110;
    internal.Vmaxefflhat = 160.5;
    internal.Vmaxeffllat = 420;
    internal.Vmaxhat = 160.5;
    internal.Vmaxlat = 420;
    internal.Vmaxnos1 = 1.3300000000000001;
    internal.Vmaxodc = 0.012999999999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_ARGex;
    state[1] = internal.initial_ORN;
    state[2] = internal.initial_ARGin;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ARGex_init", "ARGin_init", "ORN_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ARGex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ARGin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ORN_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ARGex = internal.ARGex_init;
    internal.initial_ARGin = internal.ARGin_init;
    internal.initial_ORN = internal.ORN_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ARGex = state[0];
    const ORN = state[1];
    const ARGin = state[2];
    dstatedt[0] = 0;
    dstatedt[2] = 0 - 1 * internal.cytosol * (internal.Vmaxarg * ARGin / (internal.Kmarg * (1 + ORN / internal.Kioarg) + ARGin)) + 1 * internal.extracellular * (ARGex / (internal.Kmhat + ARGex) * (internal.Vmaxhat / (1 + ORN / internal.Kiornhat + ARGin / internal.Kmhat)) + ARGex / (internal.Kmlat + ARGex) * (internal.Vmaxlat / (1 + ORN / internal.Kiornhat + ARGin / internal.Kmlat))) - 1 * internal.cytosol * (internal.Vmaxnos1 * ARGin / (internal.Kmnos1 + ARGin));
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.Vmaxarg * ARGin / (internal.Kmarg * (1 + ORN / internal.Kioarg) + ARGin)) - 1 * internal.cytosol * (internal.Vmaxefflhat / (1 + ARGex / internal.Kmhat) * (ORN / (internal.Kiornhat * (1 + ARGin / internal.Kmhat) + ORN)) + internal.Vmaxeffllat / (1 + ARGex / internal.Kmlat) * (ORN / (internal.Kmeffllat * (1 + ARGin / internal.Kmlat) + ORN))) - 1 * internal.cytosol * (internal.Vmaxodc * ORN / (internal.Kmodc + ORN));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ARGex", "ORN", "ARGin"];
    this.metadata.internalOrder = {ARGex_init: null, ARGin_init: null, cytosol: null, extracellular: null, initial_ARGex: null, initial_ARGin: null, initial_ORN: null, Kioarg: null, Kiornhat: null, Kmarg: null, Kmeffllat: null, Kmhat: null, Kmlat: null, Kmnos1: null, Kmodc: null, ORN_init: null, Vmaxarg: null, Vmaxefflhat: null, Vmaxeffllat: null, Vmaxhat: null, Vmaxlat: null, Vmaxnos1: null, Vmaxodc: null};
    this.metadata.variableOrder = {ARGex: null, ORN: null, ARGin: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

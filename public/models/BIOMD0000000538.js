export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Brain = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_ONLnr;
    state[1] = internal.initial_ONLpcd;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Munr", "Mupcd", "Murom", "ONLnr_init", "ONLpcd_init", "ONLrom_0", "Rrom"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Munr", internal, 0.27800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mupcd", internal, 0.223, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Murom", internal, 0.070800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ONLnr_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ONLpcd_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ONLrom_0", internal, 40.947000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rrom", internal, 0.10299999999999999, -Infinity, Infinity, false);
    internal.initial_ONLnr = internal.ONLnr_init;
    internal.initial_ONLpcd = internal.ONLpcd_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ONLnr = state[0];
    const ONLpcd = state[1];
    dstatedt[0] = - internal.Munr * ONLnr;
    dstatedt[1] = - internal.Mupcd * ONLpcd;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ONLnr", "ONLpcd"];
    this.metadata.internalOrder = {Brain: null, initial_ONLnr: null, initial_ONLpcd: null, Munr: null, Mupcd: null, Murom: null, ONLnr_init: null, ONLpcd_init: null, ONLrom_0: null, Rrom: null};
    this.metadata.variableOrder = {ONLnr: null, ONLpcd: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

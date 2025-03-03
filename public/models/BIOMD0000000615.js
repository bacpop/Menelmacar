export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default_compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_As;
    state[1] = internal.initial_Bs;
    state[2] = internal.initial_Asyn;
    state[3] = internal.initial_Bsyn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["As_init", "Asyn_init", "Bs_init", "Bsyn_init", "k1", "k2", "nA", "qA", "QBs", "QBsyn", "t1", "t2", "TAh1", "TBh1", "Vs", "Vsyn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "As_init", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Asyn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bsyn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2.9999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nA", internal, 2.9099999999999997e-20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qA", internal, 4.1700000000000003e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QBs", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QBsyn", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TAh1", internal, 72000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TBh1", internal, 720000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vs", internal, 4.1899999999999998e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vsyn", internal, 4.1899999999999998e-15, -Infinity, Infinity, false);
    internal.initial_As = internal.As_init;
    internal.initial_Asyn = internal.Asyn_init;
    internal.initial_Bs = internal.Bs_init;
    internal.initial_Bsyn = internal.Bsyn_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const As = state[0];
    const Bs = state[1];
    const Asyn = state[2];
    const Bsyn = state[3];
    dstatedt[0] = 0 + 1 * internal.default_compartment * (internal.qA / internal.default_compartment) - 1 * internal.default_compartment * (internal.k1 * As / internal.default_compartment) - 1 * internal.default_compartment * (internal.k2 * As * Bs / internal.default_compartment) - 1 * internal.default_compartment * (As * Math.log(2) / internal.TAh1 / internal.default_compartment) - 1 * internal.default_compartment * (internal.nA * As / internal.Vs / internal.default_compartment);
    dstatedt[2] = 0 + 1 * internal.default_compartment * (internal.nA * As / internal.Vsyn / internal.default_compartment) - 1 * internal.default_compartment * (internal.k1 * Asyn / internal.default_compartment) - 1 * internal.default_compartment * (internal.k2 * Asyn * Bsyn / internal.default_compartment) - 1 * internal.default_compartment * (Asyn * Math.log(2) / internal.TAh1 / internal.default_compartment);
    dstatedt[1] = 0 + 1 * internal.default_compartment * (internal.QBs / internal.default_compartment) + 1 * internal.default_compartment * (internal.k1 * As / internal.default_compartment) + 1 * internal.default_compartment * (internal.k2 * As * Bs / internal.default_compartment) - 1 * internal.default_compartment * (Bs * Math.log(2) / internal.TBh1 / internal.default_compartment);
    dstatedt[3] = 0 + 1 * internal.default_compartment * (internal.QBsyn / internal.default_compartment) + 1 * internal.default_compartment * (internal.k1 * Asyn / internal.default_compartment) + 1 * internal.default_compartment * (internal.k2 * Asyn * Bsyn / internal.default_compartment) - 1 * internal.default_compartment * (Bsyn * Math.log(2) / internal.TBh1 / internal.default_compartment);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "As", "Bs", "Asyn", "Bsyn"];
    this.metadata.internalOrder = {As_init: null, Asyn_init: null, Bs_init: null, Bsyn_init: null, default_compartment: null, initial_As: null, initial_Asyn: null, initial_Bs: null, initial_Bsyn: null, k1: null, k2: null, nA: null, qA: null, QBs: null, QBsyn: null, t1: null, t2: null, TAh1: null, TBh1: null, Vs: null, Vsyn: null};
    this.metadata.variableOrder = {As: null, Bs: null, Asyn: null, Bsyn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

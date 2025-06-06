export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_p100;
    state[1] = internal.initial_p52;
    state[2] = internal.initial_NIK;
    state[3] = internal.initial_IkBd;
    state[4] = internal.initial_IkBd_NIK;
    state[5] = internal.initial_p100_NIK;
    state[6] = internal.initial_RelB;
    state[7] = internal.initial_RelB_p52;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["canon", "IkBd_init", "IkBd_NIK_init", "k1", "k2", "Kd", "kxk", "NIK_init", "p100_init", "p100_NIK_init", "p52_init", "RelB_init", "RelB_p52_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "canon", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkBd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkBd_NIK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.022800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0014400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 42, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NIK_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100_NIK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p52_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RelB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RelB_p52_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IkBd = internal.IkBd_init;
    internal.initial_IkBd_NIK = internal.IkBd_NIK_init;
    internal.initial_NIK = internal.NIK_init;
    internal.initial_p100 = internal.p100_init;
    internal.initial_p100_NIK = internal.p100_NIK_init;
    internal.initial_p52 = internal.p52_init;
    internal.initial_RelB = internal.RelB_init;
    internal.initial_RelB_p52 = internal.RelB_p52_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p100 = state[0];
    const p52 = state[1];
    const NIK = state[2];
    const IkBd = state[3];
    const IkBd_NIK = state[4];
    const p100_NIK = state[5];
    const RelB = state[6];
    const RelB_p52 = state[7];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k1 * Math.pow((p100), (2)) - internal.k2 * IkBd) - 1 * internal.compartment * internal.k1 * IkBd - 1 * internal.compartment * (internal.k1 * IkBd * NIK - internal.k2 * IkBd_NIK);
    dstatedt[4] = 0 - 1 * internal.compartment * internal.k1 * IkBd_NIK + 1 * internal.compartment * (internal.k1 * IkBd * NIK - internal.k2 * IkBd_NIK);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * p100_NIK + 1 * internal.compartment * internal.k1 * IkBd_NIK - 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK) - 1 * internal.compartment * (internal.k1 * IkBd * NIK - internal.k2 * IkBd_NIK);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.kxk * internal.canon / (internal.Kd + internal.canon)) - 1 * internal.compartment * internal.k1 * p100 - 2 * internal.compartment * (internal.k1 * Math.pow((p100), (2)) - internal.k2 * IkBd) - 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK);
    dstatedt[5] = 0 - 1 * internal.compartment * internal.k1 * p100_NIK + 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * p100_NIK - 1 * internal.compartment * internal.k1 * p52 - 1 * internal.compartment * (internal.k1 * RelB * p52 - internal.k2 * RelB_p52);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.kxk * internal.canon / (internal.Kd + internal.canon)) - 1 * internal.compartment * (internal.k1 * RelB * p52 - internal.k2 * RelB_p52) - 1 * internal.compartment * internal.k1 * RelB;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k1 * RelB * p52 - internal.k2 * RelB_p52) - 1 * internal.compartment * internal.k1 * RelB_p52;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p100", "p52", "NIK", "IkBd", "IkBd_NIK", "p100_NIK", "RelB", "RelB_p52"];
    this.metadata.internalOrder = {canon: null, compartment: null, IkBd_init: null, IkBd_NIK_init: null, initial_IkBd: null, initial_IkBd_NIK: null, initial_NIK: null, initial_p100: null, initial_p100_NIK: null, initial_p52: null, initial_RelB: null, initial_RelB_p52: null, k1: null, k2: null, Kd: null, kxk: null, NIK_init: null, p100_init: null, p100_NIK_init: null, p52_init: null, RelB_init: null, RelB_p52_init: null};
    this.metadata.variableOrder = {p100: null, p52: null, NIK: null, IkBd: null, IkBd_NIK: null, p100_NIK: null, RelB: null, RelB_p52: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

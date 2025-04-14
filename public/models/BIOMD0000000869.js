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
    var state = Array(5).fill(0);
    state[0] = internal.initial_p100;
    state[1] = internal.initial_p52;
    state[2] = internal.initial_NIK;
    state[3] = internal.initial_IkBd;
    state[4] = internal.initial_p100t;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["IkBd_init", "k1", "k2", "kcat", "Km", "NIK_init", "p100_init", "p100t_init", "p52_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "IkBd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.00038000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.00024000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NIK_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100t_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p52_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IkBd = internal.IkBd_init;
    internal.initial_NIK = internal.NIK_init;
    internal.initial_p100 = internal.p100_init;
    internal.initial_p100t = internal.p100t_init;
    internal.initial_p52 = internal.p52_init;
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
    const p100t = state[4];
    dstatedt[2] = 0;
    dstatedt[4] = 0;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k1 * Math.pow((p100), (2)) - internal.k2 * IkBd) - 1 * internal.compartment * internal.k1 * IkBd - 1 * internal.compartment * (NIK * internal.kcat * IkBd / (internal.Km + IkBd));
    dstatedt[0] = 0 + 1 * internal.compartment * internal.k1 * p100t - 1 * internal.compartment * (NIK * internal.kcat * p100 / (internal.Km + p100)) - 1 * internal.compartment * internal.k1 * p100 - 2 * internal.compartment * (internal.k1 * Math.pow((p100), (2)) - internal.k2 * IkBd);
    dstatedt[1] = 0 + 1 * internal.compartment * (NIK * internal.kcat * p100 / (internal.Km + p100)) - 1 * internal.compartment * internal.k1 * p52;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p100", "p52", "NIK", "IkBd", "p100t"];
    this.metadata.internalOrder = {compartment: null, IkBd_init: null, initial_IkBd: null, initial_NIK: null, initial_p100: null, initial_p100t: null, initial_p52: null, k1: null, k2: null, kcat: null, Km: null, NIK_init: null, p100_init: null, p100t_init: null, p52_init: null};
    this.metadata.variableOrder = {p100: null, p52: null, NIK: null, IkBd: null, p100t: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

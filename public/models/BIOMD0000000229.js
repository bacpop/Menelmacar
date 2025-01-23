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
    var state = Array(7).fill(0);
    state[0] = internal.initial_ACA;
    state[1] = internal.initial_CAR1;
    state[2] = internal.initial_PKA;
    state[3] = internal.initial_incAMP;
    state[4] = internal.initial_ERK2;
    state[5] = internal.initial_REGA;
    state[6] = internal.initial_excAMP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ACA_init", "CAR1_init", "ERK2_init", "excAMP_init", "incAMP_init", "k1", "k10", "k11", "k12", "k13", "k14", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "PKA_init", "REGA_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ACA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "excAMP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "incAMP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "REGA_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ACA = internal.ACA_init;
    internal.initial_CAR1 = internal.CAR1_init;
    internal.initial_ERK2 = internal.ERK2_init;
    internal.initial_excAMP = internal.excAMP_init;
    internal.initial_incAMP = internal.incAMP_init;
    internal.initial_PKA = internal.PKA_init;
    internal.initial_REGA = internal.REGA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ACA = state[0];
    const CAR1 = state[1];
    const PKA = state[2];
    const incAMP = state[3];
    const ERK2 = state[4];
    const REGA = state[5];
    const excAMP = state[6];
    dstatedt[0] = 0 + 1 * internal.k1 * CAR1 - 1 * internal.k2 * ACA * PKA;
    dstatedt[1] = 0 + 1 * internal.k13 * excAMP - 1 * internal.k14 * CAR1;
    dstatedt[4] = 0 + 1 * internal.k5 * CAR1 - 1 * internal.k6 * PKA * ERK2;
    dstatedt[6] = 0 + 1 * internal.k11 * ACA - 1 * internal.k12 * excAMP;
    dstatedt[3] = 0 + 1 * internal.k9 * ACA - 1 * internal.k10 * REGA * incAMP;
    dstatedt[2] = 0 + 1 * internal.k3 * incAMP - 1 * internal.k4 * PKA;
    dstatedt[5] = 0 + 1 * internal.k7 - 1 * internal.k8 * ERK2 * REGA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ACA", "CAR1", "PKA", "incAMP", "ERK2", "REGA", "excAMP"];
    this.metadata.internalOrder = {ACA_init: null, CAR1_init: null, compartment: null, ERK2_init: null, excAMP_init: null, incAMP_init: null, initial_ACA: null, initial_CAR1: null, initial_ERK2: null, initial_excAMP: null, initial_incAMP: null, initial_PKA: null, initial_REGA: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, PKA_init: null, REGA_init: null};
    this.metadata.variableOrder = {ACA: null, CAR1: null, PKA: null, incAMP: null, ERK2: null, REGA: null, excAMP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

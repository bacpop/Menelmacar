export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 121.267;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_TF;
    state[1] = internal.initial_X;
    state[2] = internal.initial_Xa_Va;
    state[3] = internal.initial_II;
    state[4] = internal.initial_IIa;
    state[5] = internal.initial_Xa_Va_II;
    state[6] = internal.initial_mIIa;
    state[7] = internal.initial_mIIa_ATIII;
    state[8] = internal.initial_IIa_ATIII;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["II_init", "IIa_ATIII_init", "IIa_init", "mIIa_ATIII_init", "mIIa_init", "TF_init", "X_init", "Xa_Va_II_init", "Xa_Va_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mIIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Va_II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Va_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_II = internal.II_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_IIa_ATIII = internal.IIa_ATIII_init;
    internal.initial_mIIa = internal.mIIa_init;
    internal.initial_mIIa_ATIII = internal.mIIa_ATIII_init;
    internal.initial_TF = internal.TF_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xa_Va = internal.Xa_Va_init;
    internal.initial_Xa_Va_II = internal.Xa_Va_II_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TF = state[0];
    const X = state[1];
    const Xa_Va = state[2];
    const II = state[3];
    const IIa = state[4];
    const Xa_Va_II = state[5];
    const mIIa = state[6];
    dstatedt[3] = 0 - 1 * internal.compartment * internal.k1 * TF * X * II - 1 * internal.compartment * internal.k1 * Xa_Va * II;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k1 * TF * X * II + 1 * internal.compartment * internal.k1 * Xa_Va * mIIa - 1 * internal.compartment * internal.k1 * IIa;
    dstatedt[8] = 0 + 1 * internal.compartment * internal.k1 * IIa;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k1 * Xa_Va_II - 1 * internal.compartment * internal.k1 * Xa_Va * mIIa - 1 * internal.compartment * internal.k1 * mIIa;
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k1 * mIIa;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * TF * X + 1 * internal.compartment * internal.k1 * TF * X * II - 1 * internal.compartment * internal.k1 * TF * X * II;
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k1 * TF * X + 1 * internal.compartment * internal.k1 * TF * X * II - 1 * internal.compartment * internal.k1 * TF * X * II;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * TF * X - 1 * internal.compartment * internal.k1 * Xa_Va * II + 1 * internal.compartment * internal.k1 * Xa_Va_II + 1 * internal.compartment * internal.k1 * Xa_Va * mIIa - 1 * internal.compartment * internal.k1 * Xa_Va * mIIa;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.k1 * Xa_Va * II - 1 * internal.compartment * internal.k1 * Xa_Va_II;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TF", "X", "Xa_Va", "II", "IIa", "Xa_Va_II", "mIIa", "mIIa_ATIII", "IIa_ATIII"];
    this.metadata.internalOrder = {compartment: null, II_init: null, IIa_ATIII_init: null, IIa_init: null, initial_II: null, initial_IIa: null, initial_IIa_ATIII: null, initial_mIIa: null, initial_mIIa_ATIII: null, initial_TF: null, initial_X: null, initial_Xa_Va: null, initial_Xa_Va_II: null, k1: null, mIIa_ATIII_init: null, mIIa_init: null, TF_init: null, X_init: null, Xa_Va_II_init: null, Xa_Va_init: null};
    this.metadata.variableOrder = {TF: null, X: null, Xa_Va: null, II: null, IIa: null, Xa_Va_II: null, mIIa: null, mIIa_ATIII: null, IIa_ATIII: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

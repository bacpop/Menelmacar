export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.initial_I = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_IX;
    state[1] = internal.initial_IX_TF_VIIa;
    state[2] = internal.initial_TF_VIIa;
    state[3] = internal.initial_IXa;
    state[4] = internal.initial_X;
    state[5] = internal.initial_X_TF_VIIa;
    state[6] = internal.initial_Xa;
    state[7] = internal.initial_VIIIa_IXa;
    state[8] = internal.initial_X_VIIIa_IXa;
    state[9] = internal.initial_V;
    state[10] = internal.initial_Va;
    state[11] = internal.initial_VIII;
    state[12] = internal.initial_VIIIa;
    state[13] = internal.initial_IIa;
    state[14] = internal.initial_II;
    state[15] = internal.initial_II_Va_Xa;
    state[16] = internal.initial_Va_Xa;
    state[17] = internal.initial_mIIa;
    state[18] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["II_init", "II_Va_Xa_init", "IIa_init", "IX_init", "IX_TF_VIIa_init", "IXa_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k20", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "mIIa_init", "TF_VIIa_init", "V_init", "Va_init", "Va_Xa_init", "VIII_init", "VIIIa_init", "VIIIa_IXa_init", "X_init", "X_TF_VIIa_init", "X_VIIIa_IXa_init", "Xa_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "II_Va_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IX_TF_VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 1.1499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 8.1999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 32, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 400000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_TF_VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_VIIIa_IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_II = internal.II_init;
    internal.initial_II_Va_Xa = internal.II_Va_Xa_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_IX = internal.IX_init;
    internal.initial_IX_TF_VIIa = internal.IX_TF_VIIa_init;
    internal.initial_IXa = internal.IXa_init;
    internal.initial_mIIa = internal.mIIa_init;
    internal.initial_TF_VIIa = internal.TF_VIIa_init;
    internal.initial_V = internal.V_init;
    internal.initial_Va = internal.Va_init;
    internal.initial_Va_Xa = internal.Va_Xa_init;
    internal.initial_VIII = internal.VIII_init;
    internal.initial_VIIIa = internal.VIIIa_init;
    internal.initial_VIIIa_IXa = internal.VIIIa_IXa_init;
    internal.initial_X = internal.X_init;
    internal.initial_X_TF_VIIa = internal.X_TF_VIIa_init;
    internal.initial_X_VIIIa_IXa = internal.X_VIIIa_IXa_init;
    internal.initial_Xa = internal.Xa_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const I = state[18];
    const IX = state[0];
    const IX_TF_VIIa = state[1];
    const TF_VIIa = state[2];
    const IXa = state[3];
    const X = state[4];
    const X_TF_VIIa = state[5];
    const Xa = state[6];
    const VIIIa_IXa = state[7];
    const X_VIIIa_IXa = state[8];
    const V = state[9];
    const Va = state[10];
    const VIII = state[11];
    const VIIIa = state[12];
    const IIa = state[13];
    const II = state[14];
    const II_Va_Xa = state[15];
    const Va_Xa = state[16];
    const mIIa = state[17];
    dstatedt[18] = (- Math.abs(I - VIIIa_IXa) + (I - VIIIa_IXa)) * internal.k20;
    dstatedt[14] = 0 - 1 * internal.compartment_1 * (internal.k6 * II * Va_Xa - internal.k19 * II_Va_Xa);
    dstatedt[15] = 0 + 1 * internal.compartment_1 * (internal.k6 * II * Va_Xa - internal.k19 * II_Va_Xa) - 1 * internal.compartment_1 * internal.k14 * II_Va_Xa;
    dstatedt[13] = 0 + 1 * internal.compartment_1 * internal.k2 * V * IIa - 1 * internal.compartment_1 * internal.k2 * V * IIa + 1 * internal.compartment_1 * internal.k4 * VIII * IIa - 1 * internal.compartment_1 * internal.k4 * VIII * IIa + 1 * internal.compartment_1 * internal.k5 * mIIa * Va_Xa;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.k6 * IX * TF_VIIa - internal.k16 * IX_TF_VIIa) - 1 * internal.compartment_1 * internal.k15 * IX * Xa - 1 * internal.compartment_1 * internal.k15 * IX * Va_Xa;
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.k6 * IX * TF_VIIa - internal.k16 * IX_TF_VIIa) - 1 * internal.compartment_1 * internal.k11 * IX_TF_VIIa;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.k11 * IX_TF_VIIa + 1 * internal.compartment_1 * internal.k15 * IX * Xa - 1 * internal.compartment_1 * (internal.k7 * VIIIa * IXa - internal.k9 * VIIIa_IXa) + 1 * internal.compartment_1 * internal.k15 * IX * Va_Xa;
    dstatedt[17] = 0 + 1 * internal.compartment_1 * internal.k14 * II_Va_Xa - 1 * internal.compartment_1 * internal.k5 * mIIa * Va_Xa + 1 * internal.compartment_1 * internal.k2 * V * mIIa - 1 * internal.compartment_1 * internal.k2 * V * mIIa + 1 * internal.compartment_1 * internal.k4 * VIII * mIIa - 1 * internal.compartment_1 * internal.k4 * VIII * mIIa;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * (internal.k6 * IX * TF_VIIa - internal.k16 * IX_TF_VIIa) + 1 * internal.compartment_1 * internal.k11 * IX_TF_VIIa - 1 * internal.compartment_1 * (internal.k6 * X * TF_VIIa - internal.k17 * X_TF_VIIa) + 1 * internal.compartment_1 * internal.k12 * X_TF_VIIa;
    dstatedt[9] = 0 - 1 * internal.compartment_1 * internal.k1 * V * Xa - 1 * internal.compartment_1 * internal.k2 * V * IIa - 1 * internal.compartment_1 * internal.k2 * V * mIIa;
    dstatedt[10] = 0 + 1 * internal.compartment_1 * internal.k1 * V * Xa + 1 * internal.compartment_1 * internal.k2 * V * IIa - 1 * internal.compartment_1 * (internal.k6 * Va * Xa - internal.k10 * Va_Xa) + 1 * internal.compartment_1 * internal.k2 * V * mIIa;
    dstatedt[16] = 0 - 1 * internal.compartment_1 * (internal.k6 * II * Va_Xa - internal.k19 * II_Va_Xa) + 1 * internal.compartment_1 * internal.k14 * II_Va_Xa + 1 * internal.compartment_1 * internal.k5 * mIIa * Va_Xa - 1 * internal.compartment_1 * internal.k5 * mIIa * Va_Xa + 1 * internal.compartment_1 * (internal.k6 * Va * Xa - internal.k10 * Va_Xa) + 1 * internal.compartment_1 * internal.k15 * IX * Va_Xa - 1 * internal.compartment_1 * internal.k15 * IX * Va_Xa;
    dstatedt[11] = 0 - 1 * internal.compartment_1 * internal.k3 * VIII * Xa - 1 * internal.compartment_1 * internal.k4 * VIII * IIa - 1 * internal.compartment_1 * internal.k4 * VIII * mIIa;
    dstatedt[12] = 0 + 1 * internal.compartment_1 * internal.k3 * VIII * Xa + 1 * internal.compartment_1 * internal.k4 * VIII * IIa - 1 * internal.compartment_1 * (internal.k7 * VIIIa * IXa - internal.k9 * VIIIa_IXa) + 1 * internal.compartment_1 * internal.k4 * VIII * mIIa;
    dstatedt[7] = 0 - 1 * internal.compartment_1 * (internal.k6 * X * VIIIa_IXa - internal.k18 * X_VIIIa_IXa) + 1 * internal.compartment_1 * internal.k13 * X_VIIIa_IXa + 1 * internal.compartment_1 * (internal.k7 * VIIIa * IXa - internal.k9 * VIIIa_IXa) - 1 * internal.compartment_1 * ((internal.compartment_1 * Math.abs(I - VIIIa_IXa) + (I - VIIIa_IXa)) / internal.compartment_1);
    dstatedt[4] = 0 - 1 * internal.compartment_1 * (internal.k6 * X * TF_VIIa - internal.k17 * X_TF_VIIa) - 1 * internal.compartment_1 * (internal.k6 * X * VIIIa_IXa - internal.k18 * X_VIIIa_IXa);
    dstatedt[5] = 0 + 1 * internal.compartment_1 * (internal.k6 * X * TF_VIIa - internal.k17 * X_TF_VIIa) - 1 * internal.compartment_1 * internal.k12 * X_TF_VIIa;
    dstatedt[8] = 0 + 1 * internal.compartment_1 * (internal.k6 * X * VIIIa_IXa - internal.k18 * X_VIIIa_IXa) - 1 * internal.compartment_1 * internal.k13 * X_VIIIa_IXa;
    dstatedt[6] = 0 + 1 * internal.compartment_1 * internal.k12 * X_TF_VIIa + 1 * internal.compartment_1 * internal.k13 * X_VIIIa_IXa + 1 * internal.compartment_1 * internal.k15 * IX * Xa - 1 * internal.compartment_1 * internal.k15 * IX * Xa + 1 * internal.compartment_1 * internal.k1 * V * Xa - 1 * internal.compartment_1 * internal.k1 * V * Xa + 1 * internal.compartment_1 * internal.k3 * VIII * Xa - 1 * internal.compartment_1 * internal.k3 * VIII * Xa - 1 * internal.compartment_1 * (internal.k6 * Va * Xa - internal.k10 * Va_Xa);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IX", "IX_TF_VIIa", "TF_VIIa", "IXa", "X", "X_TF_VIIa", "Xa", "VIIIa_IXa", "X_VIIIa_IXa", "V", "Va", "VIII", "VIIIa", "IIa", "II", "II_Va_Xa", "Va_Xa", "mIIa", "I"];
    this.metadata.internalOrder = {compartment_1: null, II_init: null, II_Va_Xa_init: null, IIa_init: null, initial_I: null, initial_II: null, initial_II_Va_Xa: null, initial_IIa: null, initial_IX: null, initial_IX_TF_VIIa: null, initial_IXa: null, initial_mIIa: null, initial_TF_VIIa: null, initial_V: null, initial_Va: null, initial_Va_Xa: null, initial_VIII: null, initial_VIIIa: null, initial_VIIIa_IXa: null, initial_X: null, initial_X_TF_VIIa: null, initial_X_VIIIa_IXa: null, initial_Xa: null, IX_init: null, IX_TF_VIIa_init: null, IXa_init: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, mIIa_init: null, TF_VIIa_init: null, V_init: null, Va_init: null, Va_Xa_init: null, VIII_init: null, VIIIa_init: null, VIIIa_IXa_init: null, X_init: null, X_TF_VIIa_init: null, X_VIIIa_IXa_init: null, Xa_init: null};
    this.metadata.variableOrder = {IX: null, IX_TF_VIIa: null, TF_VIIa: null, IXa: null, X: null, X_TF_VIIa: null, Xa: null, VIIIa_IXa: null, X_VIIIa_IXa: null, V: null, Va: null, VIII: null, VIIIa: null, IIa: null, II: null, II_Va_Xa: null, Va_Xa: null, mIIa: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

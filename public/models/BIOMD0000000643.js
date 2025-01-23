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
    var A88_init = internal.ARPPtot - internal.initial_A46;
    var Complex_init = (internal.initial_BB - Math.sqrt(Math.pow((internal.initial_BB), (2)) - 4 * internal.initial_A46 * internal.ModelValue_1)) / 2;
    var BB_init = internal.initial_A46 + internal.ModelValue_1 + internal.kmpp2a;
    internal.initial_A88 = A88_init;
    internal.initial_Complex = Complex_init;
    internal.initial_BB = BB_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_A46;
    state[1] = internal.initial_A88;
    state[2] = internal.initial_M;
    state[3] = internal.initial_PKA;
    state[4] = internal.initial_BB;
    state[5] = internal.initial_Complex;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A46_init", "ARPPtot", "b", "cAMP", "k46", "k88", "KA", "kass", "kcamp", "kcatmast", "kcatpka", "kcatpp1", "kcatpp2a", "kdiss", "kmmast", "kmpka", "kmpp1", "kppx", "M_init", "MASTtot", "ModelValue_0", "ModelValue_1", "ModelValue_10", "ModelValue_11", "ModelValue_12", "ModelValue_13", "ModelValue_14", "ModelValue_15", "ModelValue_16", "ModelValue_17", "ModelValue_18", "ModelValue_19", "ModelValue_2", "ModelValue_20", "ModelValue_22", "ModelValue_23", "ModelValue_3", "ModelValue_4", "ModelValue_5", "ModelValue_6", "ModelValue_8", "ModelValue_9", "n", "PKA_init", "PKActot", "pp1", "PP2Atot"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.37525999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A46_init", internal, 9.8000000000000096, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ARPPtot", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.3599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cAMP", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k46", internal, 0.023349999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k88", internal, 0.01865, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass", internal, 3.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcamp", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatmast", internal, 0.098799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatpka", internal, 0.93500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatpp1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatpp2a", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss", internal, 0.0033, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmmast", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmpka", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmpp1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kppx", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MASTtot", internal, 2.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_10", internal, 0.93500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_11", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_12", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_13", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_14", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_15", internal, 0.01865, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_16", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_17", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_18", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_19", internal, 0.023349999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 2.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_20", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_22", internal, 0.37525999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_23", internal, 2.3599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_4", internal, 3.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_5", internal, 0.0033, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_6", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_8", internal, 0.098799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_9", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKActot", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP2Atot", internal, 2, -Infinity, Infinity, false);
    internal.initial_A46 = internal.A46_init;
    internal.initial_M = internal.M_init;
    internal.initial_PKA = internal.PKA_init;
    internal.kmpp2a = (internal.ModelValue_5 + internal.ModelValue_6) / internal.ModelValue_4;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A46 = state[0];
    const A88 = state[1];
    const M = state[2];
    const PKA = state[3];
    const Complex = state[5];
    dstatedt[4] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[0] = 0 + internal.ModelValue_8 * M * (internal.ModelValue_0 - A46) / (internal.ModelValue_9 + internal.ModelValue_22 * A88 / internal.ModelValue_0 + (internal.ModelValue_0 - A46)) - internal.ModelValue_6 * Complex;
    dstatedt[1] = 0 + internal.ModelValue_10 * PKA * (internal.ModelValue_0 - A88) / (internal.ModelValue_11 + internal.ModelValue_23 * A46 / internal.ModelValue_0 + internal.ModelValue_0 - A88) - internal.ModelValue_12 * internal.ModelValue_13 * A88 / (internal.ModelValue_14 + A88);
    dstatedt[2] = 0 + internal.kppx * (internal.ModelValue_2 - M) - internal.ModelValue_15 * A88 * M;
    dstatedt[3] = 0 + internal.ModelValue_16 * (internal.ModelValue_3 - PKA) * Math.pow((internal.ModelValue_20), (internal.ModelValue_17)) / (Math.pow((internal.ModelValue_18), (internal.ModelValue_17)) + Math.pow((internal.ModelValue_20), (internal.ModelValue_17))) - internal.ModelValue_19 * A46 * PKA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A46", "A88", "M", "PKA", "BB", "Complex"];
    this.metadata.internalOrder = {a: null, A46_init: null, ARPPtot: null, b: null, cAMP: null, compartment: null, initial_A46: null, initial_A88: null, initial_BB: null, initial_Complex: null, initial_M: null, initial_PKA: null, k46: null, k88: null, KA: null, kass: null, kcamp: null, kcatmast: null, kcatpka: null, kcatpp1: null, kcatpp2a: null, kdiss: null, kmmast: null, kmpka: null, kmpp1: null, kmpp2a: null, kppx: null, M_init: null, MASTtot: null, ModelValue_0: null, ModelValue_1: null, ModelValue_10: null, ModelValue_11: null, ModelValue_12: null, ModelValue_13: null, ModelValue_14: null, ModelValue_15: null, ModelValue_16: null, ModelValue_17: null, ModelValue_18: null, ModelValue_19: null, ModelValue_2: null, ModelValue_20: null, ModelValue_22: null, ModelValue_23: null, ModelValue_3: null, ModelValue_4: null, ModelValue_5: null, ModelValue_6: null, ModelValue_8: null, ModelValue_9: null, n: null, PKA_init: null, PKActot: null, pp1: null, PP2Atot: null};
    this.metadata.variableOrder = {A46: null, A88: null, M: null, PKA: null, BB: null, Complex: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

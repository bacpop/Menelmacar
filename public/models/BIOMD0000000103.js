export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(17).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_C9;
    state[2] = internal.initial_C9X;
    state[3] = internal.initial_X;
    state[4] = internal.initial_AC9X;
    state[5] = internal.initial_AC9;
    state[6] = internal.initial_C3;
    state[7] = internal.initial_C3_star;
    state[8] = internal.initial_C3_starX;
    state[9] = internal.initial_C9_starX;
    state[10] = internal.initial_C9_star;
    state[11] = internal.initial_AC9_star;
    state[12] = internal.initial_AC9_starX;
    state[13] = internal.initial_C9X_C3_star;
    state[14] = internal.initial_AC9X_C3_star;
    state[15] = internal.initial_C9_starX_C3_star;
    state[16] = internal.initial_AC9_starX_C3_star;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A_init", "AC9_init", "AC9_star_init", "AC9_starX_C3_star_init", "AC9_starX_init", "AC9X_C3_star_init", "AC9X_init", "C3_init", "C3_star_init", "C3_starX_init", "C9_init", "C9_star_init", "C9_starX_C3_star_init", "C9_starX_init", "C9X_C3_star_init", "C9X_init", "d", "k1", "k10", "k10b", "k11", "k11b", "k12", "k12b", "k13", "k13b", "k14", "k14b", "k15", "k15b", "k16", "k16prod", "k17", "k17prod", "k18", "k18prod", "k19", "k2", "k20", "k21", "k22", "k22prod", "k23", "k24", "k25", "k26", "k27", "k28", "k29", "k3", "k30", "k31", "k32", "k4", "k41", "k42", "k5", "k6", "k7", "k8", "k8b", "k9", "k9b", "kb1", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9_starX_C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9_starX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9X_C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AC9X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_starX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9_starX_C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9_starX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9X_C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C9X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10b", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11b", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12b", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15b", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16prod", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17prod", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18prod", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5.0000000000000004e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22prod", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.00035, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k30", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k32", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k41", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k42", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9b", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_AC9 = internal.AC9_init;
    internal.initial_AC9_star = internal.AC9_star_init;
    internal.initial_AC9_starX = internal.AC9_starX_init;
    internal.initial_AC9_starX_C3_star = internal.AC9_starX_C3_star_init;
    internal.initial_AC9X = internal.AC9X_init;
    internal.initial_AC9X_C3_star = internal.AC9X_C3_star_init;
    internal.initial_C3 = internal.C3_init;
    internal.initial_C3_star = internal.C3_star_init;
    internal.initial_C3_starX = internal.C3_starX_init;
    internal.initial_C9 = internal.C9_init;
    internal.initial_C9_star = internal.C9_star_init;
    internal.initial_C9_starX = internal.C9_starX_init;
    internal.initial_C9_starX_C3_star = internal.C9_starX_C3_star_init;
    internal.initial_C9X = internal.C9X_init;
    internal.initial_C9X_C3_star = internal.C9X_C3_star_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const C9 = state[1];
    const C9X = state[2];
    const X = state[3];
    const AC9X = state[4];
    const AC9 = state[5];
    const C3 = state[6];
    const C3_star = state[7];
    const C3_starX = state[8];
    const C9_starX = state[9];
    const C9_star = state[10];
    const AC9_star = state[11];
    const AC9_starX = state[12];
    const C9X_C3_star = state[13];
    const AC9X_C3_star = state[14];
    const C9_starX_C3_star = state[15];
    const AC9_starX_C3_star = state[16];
    dstatedt[0] = 0 - 1 * internal.cytosol * (internal.k1 * A * C9 - internal.kb1 * AC9) - 1 * internal.cytosol * (internal.k13 * C9X * A - internal.k13b * AC9X) - 1 * internal.cytosol * (internal.k8 * C9_star * A - internal.k8b * AC9_star) - 1 * internal.cytosol * (internal.k14 * C9_starX * A - internal.k14b * AC9_starX) + 1 * internal.cytosol * (internal.k16prod - internal.k16 * A) - 1 * internal.cytosol * (internal.a * internal.k1 * C9X_C3_star * A - internal.d * internal.kb1 * AC9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k1 * C9_starX_C3_star * A - internal.d * internal.kb1 * AC9_starX_C3_star);
    dstatedt[5] = 0 + 1 * internal.cytosol * (internal.k1 * A * C9 - internal.kb1 * AC9) + 1 * internal.cytosol * internal.k3 * C3 * AC9 - 1 * internal.cytosol * internal.k3 * C3 * AC9 - 1 * internal.cytosol * (internal.k10 * AC9 * X - internal.k10b * AC9X) - 1 * internal.cytosol * internal.k5 * AC9 * C3_star - 1 * internal.cytosol * internal.k21 * AC9 - 1 * internal.cytosol * (internal.a * internal.k9 * AC9 * C3_starX - internal.d * internal.k9b * AC9X_C3_star);
    dstatedt[11] = 0 + 1 * internal.cytosol * internal.k5 * AC9 * C3_star + 1 * internal.cytosol * (internal.k8 * C9_star * A - internal.k8b * AC9_star) - 1 * internal.cytosol * (internal.k12 * AC9_star * X - internal.k12b * AC9_starX) + 1 * internal.cytosol * internal.k7 * C3 * AC9_star - 1 * internal.cytosol * internal.k7 * C3 * AC9_star - 1 * internal.cytosol * internal.k27 * AC9_star - 1 * internal.cytosol * (internal.a * internal.k9 * AC9_star * C3_starX - internal.d * internal.k9b * AC9_starX_C3_star);
    dstatedt[12] = 0 + 1 * internal.cytosol * (internal.k12 * AC9_star * X - internal.k12b * AC9_starX) + 1 * internal.cytosol * (internal.k14 * C9_starX * A - internal.k14b * AC9_starX) - 1 * internal.cytosol * internal.k28 * AC9_starX - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9_starX - internal.d * internal.k15b * AC9_starX_C3_star);
    dstatedt[16] = 0 - 1 * internal.cytosol * internal.k30 * AC9_starX_C3_star - 1 * internal.cytosol * internal.k32 * AC9_starX_C3_star + 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9_starX - internal.d * internal.k15b * AC9_starX_C3_star) + 1 * internal.cytosol * (internal.a * internal.k9 * AC9_star * C3_starX - internal.d * internal.k9b * AC9_starX_C3_star) + 1 * internal.cytosol * (internal.a * internal.k1 * C9_starX_C3_star * A - internal.d * internal.kb1 * AC9_starX_C3_star);
    dstatedt[4] = 0 + 1 * internal.cytosol * (internal.k10 * AC9 * X - internal.k10b * AC9X) + 1 * internal.cytosol * (internal.k13 * C9X * A - internal.k13b * AC9X) - 1 * internal.cytosol * internal.k20 * AC9X - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9X - internal.d * internal.k15b * AC9X_C3_star);
    dstatedt[14] = 0 + 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9X - internal.d * internal.k15b * AC9X_C3_star) + 1 * internal.cytosol * (internal.a * internal.k9 * AC9 * C3_starX - internal.d * internal.k9b * AC9X_C3_star) + 1 * internal.cytosol * (internal.a * internal.k1 * C9X_C3_star * A - internal.d * internal.kb1 * AC9X_C3_star);
    dstatedt[6] = 0 - 1 * internal.cytosol * internal.k2 * C3 * C9 - 1 * internal.cytosol * internal.k3 * C3 * AC9 - 1 * internal.cytosol * internal.k6 * C3 * C9_star - 1 * internal.cytosol * internal.k7 * C3 * AC9_star + 1 * internal.cytosol * (internal.k22prod - internal.k22 * C3);
    dstatedt[7] = 0 + 1 * internal.cytosol * internal.k2 * C3 * C9 + 1 * internal.cytosol * internal.k3 * C3 * AC9 - 1 * internal.cytosol * (internal.k15 * C3_star * X - internal.k15b * C3_starX) + 1 * internal.cytosol * internal.k4 * C9 * C3_star - 1 * internal.cytosol * internal.k4 * C9 * C3_star + 1 * internal.cytosol * internal.k5 * AC9 * C3_star - 1 * internal.cytosol * internal.k5 * AC9 * C3_star + 1 * internal.cytosol * internal.k6 * C3 * C9_star + 1 * internal.cytosol * internal.k7 * C3 * AC9_star - 1 * internal.cytosol * internal.k23 * C3_star - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9X - internal.d * internal.k15b * C9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9X - internal.d * internal.k15b * AC9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9_starX - internal.d * internal.k15b * C9_starX_C3_star) - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * AC9_starX - internal.d * internal.k15b * AC9_starX_C3_star);
    dstatedt[8] = 0 + 1 * internal.cytosol * (internal.k15 * C3_star * X - internal.k15b * C3_starX) - 1 * internal.cytosol * internal.k24 * C3_starX - 1 * internal.cytosol * (internal.a * internal.k9 * C9 * C3_starX - internal.d * internal.k9b * C9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k9 * AC9 * C3_starX - internal.d * internal.k9b * AC9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k9 * C9_star * C3_starX - internal.d * internal.k9b * C9_starX_C3_star) - 1 * internal.cytosol * (internal.a * internal.k9 * AC9_star * C3_starX - internal.d * internal.k9b * AC9_starX_C3_star);
    dstatedt[1] = 0 - 1 * internal.cytosol * (internal.k1 * A * C9 - internal.kb1 * AC9) + 1 * internal.cytosol * internal.k2 * C3 * C9 - 1 * internal.cytosol * internal.k2 * C3 * C9 - 1 * internal.cytosol * (internal.k9 * C9 * X - internal.k9b * C9X) - 1 * internal.cytosol * internal.k4 * C9 * C3_star + 1 * internal.cytosol * (internal.k17prod - internal.k17 * C9) - 1 * internal.cytosol * (internal.a * internal.k9 * C9 * C3_starX - internal.d * internal.k9b * C9X_C3_star);
    dstatedt[10] = 0 + 1 * internal.cytosol * internal.k4 * C9 * C3_star - 1 * internal.cytosol * (internal.k8 * C9_star * A - internal.k8b * AC9_star) - 1 * internal.cytosol * (internal.k11 * C9_star * X - internal.k11b * C9_starX) + 1 * internal.cytosol * internal.k6 * C3 * C9_star - 1 * internal.cytosol * internal.k6 * C3 * C9_star - 1 * internal.cytosol * internal.k26 * C9_star - 1 * internal.cytosol * (internal.a * internal.k9 * C9_star * C3_starX - internal.d * internal.k9b * C9_starX_C3_star);
    dstatedt[9] = 0 + 1 * internal.cytosol * (internal.k11 * C9_star * X - internal.k11b * C9_starX) - 1 * internal.cytosol * (internal.k14 * C9_starX * A - internal.k14b * AC9_starX) - 1 * internal.cytosol * internal.k25 * C9_starX - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9_starX - internal.d * internal.k15b * C9_starX_C3_star);
    dstatedt[15] = 0 - 1 * internal.cytosol * internal.k31 * C9_starX_C3_star + 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9_starX - internal.d * internal.k15b * C9_starX_C3_star) + 1 * internal.cytosol * (internal.a * internal.k9 * C9_star * C3_starX - internal.d * internal.k9b * C9_starX_C3_star) - 1 * internal.cytosol * (internal.a * internal.k1 * C9_starX_C3_star * A - internal.d * internal.kb1 * AC9_starX_C3_star);
    dstatedt[2] = 0 + 1 * internal.cytosol * (internal.k9 * C9 * X - internal.k9b * C9X) - 1 * internal.cytosol * (internal.k13 * C9X * A - internal.k13b * AC9X) - 1 * internal.cytosol * internal.k19 * C9X - 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9X - internal.d * internal.k15b * C9X_C3_star);
    dstatedt[13] = 0 - 1 * internal.cytosol * internal.k29 * C9X_C3_star + 1 * internal.cytosol * (internal.a * internal.k15 * C3_star * C9X - internal.d * internal.k15b * C9X_C3_star) + 1 * internal.cytosol * (internal.a * internal.k9 * C9 * C3_starX - internal.d * internal.k9b * C9X_C3_star) - 1 * internal.cytosol * (internal.a * internal.k1 * C9X_C3_star * A - internal.d * internal.kb1 * AC9X_C3_star);
    dstatedt[3] = 0 - 1 * internal.cytosol * (internal.k9 * C9 * X - internal.k9b * C9X) - 1 * internal.cytosol * (internal.k10 * AC9 * X - internal.k10b * AC9X) - 1 * internal.cytosol * (internal.k15 * C3_star * X - internal.k15b * C3_starX) - 1 * internal.cytosol * (internal.k11 * C9_star * X - internal.k11b * C9_starX) - 1 * internal.cytosol * (internal.k12 * AC9_star * X - internal.k12b * AC9_starX) + 1 * internal.cytosol * (internal.k18prod - internal.k18 * X);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "C9", "C9X", "X", "AC9X", "AC9", "C3", "C3_star", "C3_starX", "C9_starX", "C9_star", "AC9_star", "AC9_starX", "C9X_C3_star", "AC9X_C3_star", "C9_starX_C3_star", "AC9_starX_C3_star"];
    this.metadata.internalOrder = {a: null, A_init: null, AC9_init: null, AC9_star_init: null, AC9_starX_C3_star_init: null, AC9_starX_init: null, AC9X_C3_star_init: null, AC9X_init: null, C3_init: null, C3_star_init: null, C3_starX_init: null, C9_init: null, C9_star_init: null, C9_starX_C3_star_init: null, C9_starX_init: null, C9X_C3_star_init: null, C9X_init: null, cytosol: null, d: null, initial_A: null, initial_AC9: null, initial_AC9_star: null, initial_AC9_starX: null, initial_AC9_starX_C3_star: null, initial_AC9X: null, initial_AC9X_C3_star: null, initial_C3: null, initial_C3_star: null, initial_C3_starX: null, initial_C9: null, initial_C9_star: null, initial_C9_starX: null, initial_C9_starX_C3_star: null, initial_C9X: null, initial_C9X_C3_star: null, initial_X: null, k1: null, k10: null, k10b: null, k11: null, k11b: null, k12: null, k12b: null, k13: null, k13b: null, k14: null, k14b: null, k15: null, k15b: null, k16: null, k16prod: null, k17: null, k17prod: null, k18: null, k18prod: null, k19: null, k2: null, k20: null, k21: null, k22: null, k22prod: null, k23: null, k24: null, k25: null, k26: null, k27: null, k28: null, k29: null, k3: null, k30: null, k31: null, k32: null, k4: null, k41: null, k42: null, k5: null, k6: null, k7: null, k8: null, k8b: null, k9: null, k9b: null, kb1: null, X_init: null};
    this.metadata.variableOrder = {A: null, C9: null, C9X: null, X: null, AC9X: null, AC9: null, C3: null, C3_star: null, C3_starX: null, C9_starX: null, C9_star: null, AC9_star: null, AC9_starX: null, C9X_C3_star: null, AC9X_C3_star: null, C9_starX_C3_star: null, AC9_starX_C3_star: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell_1 = 1;
    internal.Cell_2 = 1;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var A2__Cell_1__init = internal.initial_A - internal.initial_A3__Cell_1_;
    var A2__Cell_2__init = internal.initial_A - internal.initial_A3__Cell_2_;
    var N1__Cell_1__init = internal.initial_N - internal.initial_N2__Cell_1_;
    var N1__Cell_2__init = internal.initial_N - internal.initial_N2__Cell_2_;
    internal.initial_A2__Cell_1_ = A2__Cell_1__init;
    internal.initial_A2__Cell_2_ = A2__Cell_2__init;
    internal.initial_N1__Cell_1_ = N1__Cell_1__init;
    internal.initial_N1__Cell_2_ = N1__Cell_2__init;
    var state = Array(19).fill(0);
    state[0] = internal.initial_S1__Cell_1_;
    state[1] = internal.initial_S1__Cell_2_;
    state[2] = internal.initial_S2__Cell_1_;
    state[3] = internal.initial_S2__Cell_2_;
    state[4] = internal.initial_S3__Cell_1_;
    state[5] = internal.initial_S3__Cell_2_;
    state[6] = internal.initial_S4__Cell_1_;
    state[7] = internal.initial_S4__Cell_2_;
    state[8] = internal.initial_N2__Cell_1_;
    state[9] = internal.initial_N2__Cell_2_;
    state[10] = internal.initial_A3__Cell_1_;
    state[11] = internal.initial_A3__Cell_2_;
    state[12] = internal.initial_S4_ex;
    state[13] = internal.initial_A;
    state[14] = internal.initial_N;
    state[15] = internal.initial_N1__Cell_1_;
    state[16] = internal.initial_N1__Cell_2_;
    state[17] = internal.initial_A2__Cell_1_;
    state[18] = internal.initial_A2__Cell_2_;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "A3__Cell_1__init", "A3__Cell_2__init", "J0", "K_I", "k1", "k2", "k3", "k4", "k5", "k6", "kappa", "kxk", "N_init", "N2__Cell_1__init", "N2__Cell_2__init", "phi", "q", "S1__Cell_1__init", "S1__Cell_2__init", "S2__Cell_1__init", "S2__Cell_2__init", "S3__Cell_1__init", "S3__Cell_2__init", "S4__Cell_1__init", "S4__Cell_2__init", "S4_ex_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J0", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_I", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1.28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S3__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S3__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4__Cell_1__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4__Cell_2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_ex_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_A3__Cell_1_ = internal.A3__Cell_1__init;
    internal.initial_A3__Cell_2_ = internal.A3__Cell_2__init;
    internal.initial_N = internal.N_init;
    internal.initial_N2__Cell_1_ = internal.N2__Cell_1__init;
    internal.initial_N2__Cell_2_ = internal.N2__Cell_2__init;
    internal.initial_S1__Cell_1_ = internal.S1__Cell_1__init;
    internal.initial_S1__Cell_2_ = internal.S1__Cell_2__init;
    internal.initial_S2__Cell_1_ = internal.S2__Cell_1__init;
    internal.initial_S2__Cell_2_ = internal.S2__Cell_2__init;
    internal.initial_S3__Cell_1_ = internal.S3__Cell_1__init;
    internal.initial_S3__Cell_2_ = internal.S3__Cell_2__init;
    internal.initial_S4__Cell_1_ = internal.S4__Cell_1__init;
    internal.initial_S4__Cell_2_ = internal.S4__Cell_2__init;
    internal.initial_S4_ex = internal.S4_ex_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S1__Cell_1_ = state[0];
    const S1__Cell_2_ = state[1];
    const S2__Cell_1_ = state[2];
    const S2__Cell_2_ = state[3];
    const S3__Cell_1_ = state[4];
    const S3__Cell_2_ = state[5];
    const S4__Cell_1_ = state[6];
    const S4__Cell_2_ = state[7];
    const N2__Cell_1_ = state[8];
    const N2__Cell_2_ = state[9];
    const A3__Cell_1_ = state[10];
    const A3__Cell_2_ = state[11];
    const S4_ex = state[12];
    const N1__Cell_1_ = state[15];
    const N1__Cell_2_ = state[16];
    const A2__Cell_1_ = state[17];
    const A2__Cell_2_ = state[18];
    dstatedt[13] = 0;
    dstatedt[17] = 0 + 0;
    dstatedt[18] = 0 + 0;
    dstatedt[14] = 0;
    dstatedt[15] = 0 + 0;
    dstatedt[16] = 0 + 0;
    dstatedt[10] = 0 - 2 * internal.Cell_1 * (internal.k1 * S1__Cell_1_ * A3__Cell_1_ * Math.pow((1 + Math.pow((A3__Cell_1_ / internal.K_I), (internal.q))), (- 1))) + 2 * internal.Cell_1 * (internal.k3 * S3__Cell_1_ * A2__Cell_1_) - 1 * internal.Cell_1 * internal.k5 * A3__Cell_1_;
    dstatedt[11] = 0 - 2 * internal.Cell_2 * (internal.k1 * S1__Cell_2_ * A3__Cell_2_ * Math.pow((1 + Math.pow((A3__Cell_2_ / internal.K_I), (internal.q))), (- 1))) + 2 * internal.Cell_2 * (internal.k3 * S3__Cell_2_ * A2__Cell_2_) - 1 * internal.Cell_2 * internal.k5 * A3__Cell_2_;
    dstatedt[8] = 0 + 1 * internal.Cell_1 * (internal.k2 * S2__Cell_1_ * N1__Cell_1_) - 1 * internal.Cell_1 * internal.k4 * S4__Cell_1_ * N2__Cell_1_ - 1 * internal.Cell_1 * internal.k6 * S2__Cell_1_ * N2__Cell_1_;
    dstatedt[9] = 0 + 1 * internal.Cell_2 * (internal.k2 * S2__Cell_2_ * N1__Cell_2_) - 1 * internal.Cell_2 * internal.k4 * S4__Cell_2_ * N2__Cell_2_ - 1 * internal.Cell_2 * internal.k6 * S2__Cell_2_ * N2__Cell_2_;
    dstatedt[0] = 0 - 1 * internal.Cell_1 * (internal.k1 * S1__Cell_1_ * A3__Cell_1_ * Math.pow((1 + Math.pow((A3__Cell_1_ / internal.K_I), (internal.q))), (- 1))) + 1 * internal.Cell_1 * (internal.J0);
    dstatedt[1] = 0 - 1 * internal.Cell_2 * (internal.k1 * S1__Cell_2_ * A3__Cell_2_ * Math.pow((1 + Math.pow((A3__Cell_2_ / internal.K_I), (internal.q))), (- 1))) + 1 * internal.Cell_2 * (internal.J0);
    dstatedt[2] = 0 + 2 * internal.Cell_1 * (internal.k1 * S1__Cell_1_ * A3__Cell_1_ * Math.pow((1 + Math.pow((A3__Cell_1_ / internal.K_I), (internal.q))), (- 1))) - 1 * internal.Cell_1 * (internal.k2 * S2__Cell_1_ * N1__Cell_1_) - 1 * internal.Cell_1 * internal.k6 * S2__Cell_1_ * N2__Cell_1_;
    dstatedt[3] = 0 + 2 * internal.Cell_2 * (internal.k1 * S1__Cell_2_ * A3__Cell_2_ * Math.pow((1 + Math.pow((A3__Cell_2_ / internal.K_I), (internal.q))), (- 1))) - 1 * internal.Cell_2 * (internal.k2 * S2__Cell_2_ * N1__Cell_2_) - 1 * internal.Cell_2 * internal.k6 * S2__Cell_2_ * N2__Cell_2_;
    dstatedt[4] = 0 + 1 * internal.Cell_1 * (internal.k2 * S2__Cell_1_ * N1__Cell_1_) - 1 * internal.Cell_1 * (internal.k3 * S3__Cell_1_ * A2__Cell_1_);
    dstatedt[5] = 0 + 1 * internal.Cell_2 * (internal.k2 * S2__Cell_2_ * N1__Cell_2_) - 1 * internal.Cell_2 * (internal.k3 * S3__Cell_2_ * A2__Cell_2_);
    var J_cell_1 = internal.kappa * (S4__Cell_1_ - S4_ex);
    var j_cell_2 = internal.kappa * (S4__Cell_2_ - S4_ex);
    dstatedt[6] = 0 + 1 * internal.Cell_1 * (internal.k3 * S3__Cell_1_ * A2__Cell_1_) - 1 * internal.Cell_1 * internal.k4 * S4__Cell_1_ * N2__Cell_1_ - 1 * internal.Cell_1 * (J_cell_1);
    dstatedt[7] = 0 + 1 * internal.Cell_2 * (internal.k3 * S3__Cell_2_ * A2__Cell_2_) - 1 * internal.Cell_2 * internal.k4 * S4__Cell_2_ * N2__Cell_2_ - 1 * internal.Cell_2 * (j_cell_2);
    dstatedt[12] = 0 - 1 * internal.Compartment * internal.kxk * S4_ex + 1 * internal.Compartment * (internal.phi / 2 * (J_cell_1 + j_cell_2));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S1__Cell_1_", "S1__Cell_2_", "S2__Cell_1_", "S2__Cell_2_", "S3__Cell_1_", "S3__Cell_2_", "S4__Cell_1_", "S4__Cell_2_", "N2__Cell_1_", "N2__Cell_2_", "A3__Cell_1_", "A3__Cell_2_", "S4_ex", "A", "N", "N1__Cell_1_", "N1__Cell_2_", "A2__Cell_1_", "A2__Cell_2_"];
    this.metadata.internalOrder = {A_init: null, A3__Cell_1__init: null, A3__Cell_2__init: null, Cell_1: null, Cell_2: null, Compartment: null, initial_A: null, initial_A2__Cell_1_: null, initial_A2__Cell_2_: null, initial_A3__Cell_1_: null, initial_A3__Cell_2_: null, initial_N: null, initial_N1__Cell_1_: null, initial_N1__Cell_2_: null, initial_N2__Cell_1_: null, initial_N2__Cell_2_: null, initial_S1__Cell_1_: null, initial_S1__Cell_2_: null, initial_S2__Cell_1_: null, initial_S2__Cell_2_: null, initial_S3__Cell_1_: null, initial_S3__Cell_2_: null, initial_S4__Cell_1_: null, initial_S4__Cell_2_: null, initial_S4_ex: null, J0: null, K_I: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, kappa: null, kxk: null, N_init: null, N2__Cell_1__init: null, N2__Cell_2__init: null, phi: null, q: null, S1__Cell_1__init: null, S1__Cell_2__init: null, S2__Cell_1__init: null, S2__Cell_2__init: null, S3__Cell_1__init: null, S3__Cell_2__init: null, S4__Cell_1__init: null, S4__Cell_2__init: null, S4_ex_init: null};
    this.metadata.variableOrder = {S1__Cell_1_: null, S1__Cell_2_: null, S2__Cell_1_: null, S2__Cell_2_: null, S3__Cell_1_: null, S3__Cell_2_: null, S4__Cell_1_: null, S4__Cell_2_: null, N2__Cell_1_: null, N2__Cell_2_: null, A3__Cell_1_: null, A3__Cell_2_: null, S4_ex: null, A: null, N: null, N1__Cell_1_: null, N1__Cell_2_: null, A2__Cell_1_: null, A2__Cell_2_: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

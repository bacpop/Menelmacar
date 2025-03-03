export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.EmptySet = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_C2;
    state[1] = internal.initial_CP;
    state[2] = internal.initial_M;
    state[3] = internal.initial_pM;
    state[4] = internal.initial_Y;
    state[5] = internal.initial_YP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C2_init", "CP_init", "k1aa", "k2", "k3", "k4", "k4prime", "k5notP", "k6", "k7", "k8notP", "k9", "M_init", "pM_init", "Y_init", "YP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP_init", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1aa", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4prime", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5notP", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8notP", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pM_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "YP_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C2 = internal.C2_init;
    internal.initial_CP = internal.CP_init;
    internal.initial_M = internal.M_init;
    internal.initial_pM = internal.pM_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_YP = internal.YP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C2 = state[0];
    const CP = state[1];
    const M = state[2];
    const pM = state[3];
    const Y = state[4];
    const YP = state[5];
    var CT = C2 + CP + M + pM;
    dstatedt[0] = 0 + 1 * internal.cell * internal.k6 * M - 1 * internal.cell * C2 * internal.k8notP + 1 * internal.cell * CP * internal.k9;
    dstatedt[1] = 0 + 1 * internal.cell * C2 * internal.k8notP - 1 * internal.cell * CP * internal.k9 - 1 * internal.cell * CP * internal.k3 * Y;
    dstatedt[4] = 0 - 1 * internal.cell * CP * internal.k3 * Y + 1 * internal.cell * internal.k1aa - 1 * internal.cell * internal.k2 * Y;
    dstatedt[5] = 0 + 1 * internal.cell * internal.k6 * M - 1 * internal.cell * internal.k7 * YP;
    dstatedt[2] = 0 - 1 * internal.cell * internal.k6 * M - 1 * internal.cell * internal.k5notP * M + 1 * internal.cell * pM * (internal.k4prime + internal.k4 * Math.pow((M / CT), (2)));
    dstatedt[3] = 0 + 1 * internal.cell * CP * internal.k3 * Y + 1 * internal.cell * internal.k5notP * M - 1 * internal.cell * pM * (internal.k4prime + internal.k4 * Math.pow((M / CT), (2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C2", "CP", "M", "pM", "Y", "YP"];
    this.metadata.internalOrder = {C2_init: null, cell: null, CP_init: null, EmptySet: null, initial_C2: null, initial_CP: null, initial_M: null, initial_pM: null, initial_Y: null, initial_YP: null, k1aa: null, k2: null, k3: null, k4: null, k4prime: null, k5notP: null, k6: null, k7: null, k8notP: null, k9: null, M_init: null, pM_init: null, Y_init: null, YP_init: null};
    this.metadata.variableOrder = {C2: null, CP: null, M: null, pM: null, Y: null, YP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

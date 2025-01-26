export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_auxin;
    state[1] = internal.initial_TIR1;
    state[2] = internal.initial_auxinTIR1;
    state[3] = internal.initial_auxinTIR1VENUS;
    state[4] = internal.initial_VENUS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_tr", "auxin_init", "auxinTIR1_init", "auxinTIR1VENUS_init", "delta", "ka", "kd", "la", "lambda", "ld", "lm", "mu", "TIR1_init", "TIR1T", "VENUS_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_tr", internal, 30.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "auxin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "auxinTIR1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "auxinTIR1VENUS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.48599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.00082200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.33400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "la", internal, 1.1499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.00316, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ld", internal, 4.4900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lm", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.79000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TIR1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TIR1T", internal, 18.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VENUS_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_auxin = internal.auxin_init;
    internal.initial_auxinTIR1 = internal.auxinTIR1_init;
    internal.initial_auxinTIR1VENUS = internal.auxinTIR1VENUS_init;
    internal.initial_TIR1 = internal.TIR1_init;
    internal.initial_VENUS = internal.VENUS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const auxin = state[0];
    const TIR1 = state[1];
    const auxinTIR1 = state[2];
    const auxinTIR1VENUS = state[3];
    const VENUS = state[4];
    dstatedt[0] = 0 - 1 * internal.ka * auxin * TIR1 + 1 * internal.kd * auxinTIR1 + 1 * internal.alpha_tr - 1 * internal.mu * auxin;
    dstatedt[2] = 0 + 1 * internal.ka * auxin * TIR1 - 1 * internal.kd * auxinTIR1 - 1 * internal.la * auxinTIR1 * VENUS + 1 * internal.ld * auxinTIR1VENUS + 1 * internal.lm * auxinTIR1VENUS;
    dstatedt[3] = 0 + 1 * internal.la * auxinTIR1 * VENUS - 1 * internal.ld * auxinTIR1VENUS - 1 * internal.lm * auxinTIR1VENUS;
    dstatedt[1] = 0 - 1 * internal.ka * auxin * TIR1 + 1 * internal.kd * auxinTIR1;
    dstatedt[4] = 0 - 1 * internal.la * auxinTIR1 * VENUS + 1 * internal.ld * auxinTIR1VENUS + 1 * internal.delta - 1 * internal.lambda * VENUS;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "auxin", "TIR1", "auxinTIR1", "auxinTIR1VENUS", "VENUS"];
    this.metadata.internalOrder = {alpha_tr: null, auxin_init: null, auxinTIR1_init: null, auxinTIR1VENUS_init: null, cell: null, delta: null, initial_auxin: null, initial_auxinTIR1: null, initial_auxinTIR1VENUS: null, initial_TIR1: null, initial_VENUS: null, ka: null, kd: null, la: null, lambda: null, ld: null, lm: null, mu: null, TIR1_init: null, TIR1T: null, VENUS_init: null};
    this.metadata.variableOrder = {auxin: null, TIR1: null, auxinTIR1: null, auxinTIR1VENUS: null, VENUS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

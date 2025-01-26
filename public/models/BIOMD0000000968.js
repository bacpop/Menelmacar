export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 9.9999999999999998e-13;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_IL7;
    state[1] = internal.initial_pJAK1;
    state[2] = internal.initial_STAT5;
    state[3] = internal.initial_pSTAT5;
    state[4] = internal.initial_SOCS1;
    state[5] = internal.initial_IL7IL7RJAK1;
    state[6] = internal.initial_IL7RJAK1;
    state[7] = internal.initial_IL7IL7RpJAK1;
    state[8] = internal.initial_IL7IL7RpJAK1STAT5;
    state[9] = internal.initial_IL7IL7RpJAK1SOCS1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["IL7_init", "IL7IL7RJAK1_init", "IL7IL7RpJAK1_init", "IL7IL7RpJAK1SOCS1_init", "IL7IL7RpJAK1STAT5_init", "IL7RJAK1_init", "K2", "K3", "K4", "K6", "K7", "Kf1", "Kf3", "Kf5", "Kr1", "Kr3", "pJAK1_init", "pSTAT5_init", "SOCS1_init", "STAT5_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "IL7_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7IL7RJAK1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7IL7RpJAK1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7IL7RpJAK1SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7IL7RpJAK1STAT5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7RJAK1_init", internal, 1.6605390404271601, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pJAK1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT5_init", internal, 2.4908085606407502, -Infinity, Infinity, false);
    internal.initial_IL7 = internal.IL7_init;
    internal.initial_IL7IL7RJAK1 = internal.IL7IL7RJAK1_init;
    internal.initial_IL7IL7RpJAK1 = internal.IL7IL7RpJAK1_init;
    internal.initial_IL7IL7RpJAK1SOCS1 = internal.IL7IL7RpJAK1SOCS1_init;
    internal.initial_IL7IL7RpJAK1STAT5 = internal.IL7IL7RpJAK1STAT5_init;
    internal.initial_IL7RJAK1 = internal.IL7RJAK1_init;
    internal.initial_pJAK1 = internal.pJAK1_init;
    internal.initial_pSTAT5 = internal.pSTAT5_init;
    internal.initial_SOCS1 = internal.SOCS1_init;
    internal.initial_STAT5 = internal.STAT5_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IL7 = state[0];
    const STAT5 = state[2];
    const pSTAT5 = state[3];
    const SOCS1 = state[4];
    const IL7IL7RJAK1 = state[5];
    const IL7RJAK1 = state[6];
    const IL7IL7RpJAK1 = state[7];
    const IL7IL7RpJAK1STAT5 = state[8];
    dstatedt[1] = 0;
    dstatedt[0] = 0 - 1 * internal.cell * (internal.Kf1 * IL7 * IL7RJAK1 - internal.Kr1 * IL7IL7RJAK1);
    dstatedt[5] = 0 + 1 * internal.cell * (internal.Kf1 * IL7 * IL7RJAK1 - internal.Kr1 * IL7IL7RJAK1) - 1 * internal.cell * (internal.K2 * IL7IL7RJAK1 - internal.K6 * IL7IL7RpJAK1);
    dstatedt[7] = 0 + 1 * internal.cell * (internal.K2 * IL7IL7RJAK1 - internal.K6 * IL7IL7RpJAK1) - 1 * internal.cell * (internal.Kf3 * IL7IL7RpJAK1 * STAT5 - internal.Kr3 * IL7IL7RpJAK1STAT5) - 1 * internal.cell * internal.Kf5 * IL7IL7RpJAK1 * SOCS1 + 1 * internal.cell * internal.K3 * IL7IL7RpJAK1STAT5;
    dstatedt[9] = 0 + 1 * internal.cell * internal.Kf5 * IL7IL7RpJAK1 * SOCS1;
    dstatedt[8] = 0 + 1 * internal.cell * (internal.Kf3 * IL7IL7RpJAK1 * STAT5 - internal.Kr3 * IL7IL7RpJAK1STAT5) - 1 * internal.cell * internal.K3 * IL7IL7RpJAK1STAT5;
    dstatedt[6] = 0 - 1 * internal.cell * (internal.Kf1 * IL7 * IL7RJAK1 - internal.Kr1 * IL7IL7RJAK1);
    dstatedt[3] = 0 - 1 * internal.cell * internal.K7 * pSTAT5 + 1 * internal.cell * internal.K3 * IL7IL7RpJAK1STAT5;
    dstatedt[4] = 0 + 1 * internal.cell * (internal.K4 * pSTAT5) - 1 * internal.cell * internal.Kf5 * IL7IL7RpJAK1 * SOCS1;
    dstatedt[2] = 0 - 1 * internal.cell * (internal.Kf3 * IL7IL7RpJAK1 * STAT5 - internal.Kr3 * IL7IL7RpJAK1STAT5) + 1 * internal.cell * internal.K7 * pSTAT5;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IL7", "pJAK1", "STAT5", "pSTAT5", "SOCS1", "IL7IL7RJAK1", "IL7RJAK1", "IL7IL7RpJAK1", "IL7IL7RpJAK1STAT5", "IL7IL7RpJAK1SOCS1"];
    this.metadata.internalOrder = {cell: null, IL7_init: null, IL7IL7RJAK1_init: null, IL7IL7RpJAK1_init: null, IL7IL7RpJAK1SOCS1_init: null, IL7IL7RpJAK1STAT5_init: null, IL7RJAK1_init: null, initial_IL7: null, initial_IL7IL7RJAK1: null, initial_IL7IL7RpJAK1: null, initial_IL7IL7RpJAK1SOCS1: null, initial_IL7IL7RpJAK1STAT5: null, initial_IL7RJAK1: null, initial_pJAK1: null, initial_pSTAT5: null, initial_SOCS1: null, initial_STAT5: null, K2: null, K3: null, K4: null, K6: null, K7: null, Kf1: null, Kf3: null, Kf5: null, Kr1: null, Kr3: null, pJAK1_init: null, pSTAT5_init: null, SOCS1_init: null, STAT5_init: null};
    this.metadata.variableOrder = {IL7: null, pJAK1: null, STAT5: null, pSTAT5: null, SOCS1: null, IL7IL7RJAK1: null, IL7RJAK1: null, IL7IL7RpJAK1: null, IL7IL7RpJAK1STAT5: null, IL7IL7RpJAK1SOCS1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

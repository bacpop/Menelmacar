export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.system = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var CPtot_init = internal.initial_CP + 2 * internal.initial_CP2 + 2 * internal.initial_IC;
    internal.initial_CPtot = CPtot_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_TF;
    state[2] = internal.initial_CP;
    state[3] = internal.initial_CP2;
    state[4] = internal.initial_IC;
    state[5] = internal.initial_CPtot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["chk2", "chk2c", "CP_init", "CP2_init", "Dex", "IC_init", "ICtot", "J", "Jp", "ka", "kcp2d", "kcpd", "kcps", "kd", "kica", "kicd", "kmd", "kms", "kp1", "kp2", "M_init", "n", "TF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "chk2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "chk2c", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dex", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ICtot", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jp", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcp2d", internal, 0.052499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcpd", internal, 0.52500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcps", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kica", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmd", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kms", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_CP = internal.CP_init;
    internal.initial_CP2 = internal.CP2_init;
    internal.initial_IC = internal.IC_init;
    internal.initial_M = internal.M_init;
    internal.initial_TF = internal.TF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const TF = state[1];
    const CP = state[2];
    const CP2 = state[3];
    const IC = state[4];
    dstatedt[5] = 0 + 0;
    dstatedt[2] = 0 + 1 * internal.system * (internal.kcps * M) - 1 * internal.system * internal.kcpd * CP - 2 * internal.system * internal.ka * Math.pow((CP), (2)) + 2 * internal.system * internal.kd * CP2 - 1 * internal.system * (internal.kp1 * CP / (internal.Jp + CP + 2 * CP2 + 2 * IC) / internal.system) - 1 * internal.system * internal.chk2 * CP;
    dstatedt[3] = 0 + 1 * internal.system * internal.ka * Math.pow((CP), (2)) - 1 * internal.system * internal.kd * CP2 + 1 * internal.system * internal.kicd * IC - 1 * internal.system * internal.kcp2d * CP2 - 1 * internal.system * internal.kica * CP2 * TF - 1 * internal.system * (internal.kp2 * CP2 / (internal.Jp + CP + 2 * CP2 + 2 * IC) / internal.system) - 1 * internal.system * internal.chk2 * CP2;
    dstatedt[4] = 0 - 1 * internal.system * internal.kicd * IC + 1 * internal.system * internal.kica * CP2 * TF - 1 * internal.system * internal.kcp2d * IC - 1 * internal.system * internal.chk2c * IC - 1 * internal.system * (internal.kp2 * IC / (internal.Jp + CP + 2 * CP2 + 2 * IC) / internal.system);
    dstatedt[0] = 0 + 1 * internal.system * (internal.Dex / internal.system) + 1 * internal.system * (internal.kms * Math.pow((TF), (internal.n)) / (Math.pow((internal.J), (internal.n)) + Math.pow((TF), (internal.n))) / internal.system) - 1 * internal.system * internal.kmd * M;
    dstatedt[1] = 0 + 1 * internal.system * internal.kicd * IC - 1 * internal.system * internal.kica * CP2 * TF + 1 * internal.system * internal.kcp2d * IC + 1 * internal.system * internal.chk2c * IC + 1 * internal.system * (internal.kp2 * IC / (internal.Jp + CP + 2 * CP2 + 2 * IC) / internal.system);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "TF", "CP", "CP2", "IC", "CPtot"];
    this.metadata.internalOrder = {chk2: null, chk2c: null, CP_init: null, CP2_init: null, Dex: null, IC_init: null, ICtot: null, initial_CP: null, initial_CP2: null, initial_CPtot: null, initial_IC: null, initial_M: null, initial_TF: null, J: null, Jp: null, ka: null, kcp2d: null, kcpd: null, kcps: null, kd: null, kica: null, kicd: null, kmd: null, kms: null, kp1: null, kp2: null, M_init: null, n: null, system: null, TF_init: null};
    this.metadata.variableOrder = {M: null, TF: null, CP: null, CP2: null, IC: null, CPtot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

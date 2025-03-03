export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Pa;
    state[1] = internal.initial_Pb;
    state[2] = internal.initial_Da;
    state[3] = internal.initial_Db;
    state[4] = internal.initial_BDa;
    state[5] = internal.initial_BDb;
    state[6] = internal.initial_ESA;
    state[7] = internal.initial_ESB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ba", "bb", "BDa_init", "BDb_init", "da", "Da_init", "db", "Db_init", "ESA_init", "ESB_init", "Pa_init", "Pb_init", "sa", "sb", "ua", "ub"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ba", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bb", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BDa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BDb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "da", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Da_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "db", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Db_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ESA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ESB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sa", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sb", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ua", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ub", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_BDa = internal.BDa_init;
    internal.initial_BDb = internal.BDb_init;
    internal.initial_Da = internal.Da_init;
    internal.initial_Db = internal.Db_init;
    internal.initial_ESA = internal.ESA_init;
    internal.initial_ESB = internal.ESB_init;
    internal.initial_Pa = internal.Pa_init;
    internal.initial_Pb = internal.Pb_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pa = state[0];
    const Pb = state[1];
    const Da = state[2];
    const Db = state[3];
    const BDa = state[4];
    const BDb = state[5];
    dstatedt[4] = 0 + 1 * internal.default1 * internal.ba * (Pb * (Pb - 1) / 2) * Da - 1 * internal.default1 * internal.ua * BDa;
    dstatedt[5] = 0 + 1 * internal.default1 * internal.bb * (Pa * (Pa - 1) / 2) * Db - 1 * internal.default1 * internal.ub * BDb;
    dstatedt[2] = 0 - 1 * internal.default1 * internal.ba * (Pb * (Pb - 1) / 2) * Da + 1 * internal.default1 * internal.ua * BDa;
    dstatedt[3] = 0 - 1 * internal.default1 * internal.bb * (Pa * (Pa - 1) / 2) * Db + 1 * internal.default1 * internal.ub * BDb;
    dstatedt[6] = 0 - 1 * internal.default1 * internal.sa * Da + 1 * internal.default1 * internal.da * Pa;
    dstatedt[7] = 0 - 1 * internal.default1 * internal.sb * Db + 1 * internal.default1 * internal.db * Pb;
    dstatedt[0] = 0 + 1 * internal.default1 * internal.sa * Da - 1 * internal.default1 * internal.da * Pa - 2 * internal.default1 * internal.bb * (Pa * (Pa - 1) / 2) * Db + 2 * internal.default1 * internal.ub * BDb;
    dstatedt[1] = 0 + 1 * internal.default1 * internal.sb * Db - 1 * internal.default1 * internal.db * Pb - 2 * internal.default1 * internal.ba * (Pb * (Pb - 1) / 2) * Da + 2 * internal.default1 * internal.ua * BDa;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pa", "Pb", "Da", "Db", "BDa", "BDb", "ESA", "ESB"];
    this.metadata.internalOrder = {ba: null, bb: null, BDa_init: null, BDb_init: null, da: null, Da_init: null, db: null, Db_init: null, default1: null, ESA_init: null, ESB_init: null, initial_BDa: null, initial_BDb: null, initial_Da: null, initial_Db: null, initial_ESA: null, initial_ESB: null, initial_Pa: null, initial_Pb: null, Pa_init: null, Pb_init: null, sa: null, sb: null, ua: null, ub: null};
    this.metadata.variableOrder = {Pa: null, Pb: null, Da: null, Db: null, BDa: null, BDb: null, ESA: null, ESB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

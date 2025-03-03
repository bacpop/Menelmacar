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
    var state = Array(15).fill(0);
    state[0] = internal.initial_HP;
    state[1] = internal.initial_NLRX1;
    state[2] = internal.initial_CytoL;
    state[3] = internal.initial_MyD88;
    state[4] = internal.initial_TRAF6;
    state[5] = internal.initial_NFkB;
    state[6] = internal.initial_IFN;
    state[7] = internal.initial_NOD1;
    state[8] = internal.initial_RIG;
    state[9] = internal.initial_MAVS;
    state[10] = internal.initial_IRF;
    state[11] = internal.initial_TFa;
    state[12] = internal.initial_CytoE;
    state[13] = internal.initial_TFi;
    state[14] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CytoE_init", "CytoL_init", "HP_init", "IFN_init", "IRF_init", "k1", "ka", "ki", "kxk", "MAVS_init", "MyD88_init", "n", "NFkB_init", "NLRX1_init", "NOD1_init", "r", "RIG_init", "shalve", "TFa_init", "TFi_init", "TRAF6_init", "vmax", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CytoE_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CytoL_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HP_init", internal, 4.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFN_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0022279299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 12.2028, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 0.048068300000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.00014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAVS_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MyD88_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFkB_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NLRX1_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NOD1_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.0231262, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RIG_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "shalve", internal, 0.0039760000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFa_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFi_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TRAF6_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax", internal, 0.046393299999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_CytoE = internal.CytoE_init;
    internal.initial_CytoL = internal.CytoL_init;
    internal.initial_HP = internal.HP_init;
    internal.initial_IFN = internal.IFN_init;
    internal.initial_IRF = internal.IRF_init;
    internal.initial_MAVS = internal.MAVS_init;
    internal.initial_MyD88 = internal.MyD88_init;
    internal.initial_NFkB = internal.NFkB_init;
    internal.initial_NLRX1 = internal.NLRX1_init;
    internal.initial_NOD1 = internal.NOD1_init;
    internal.initial_RIG = internal.RIG_init;
    internal.initial_TFa = internal.TFa_init;
    internal.initial_TFi = internal.TFi_init;
    internal.initial_TRAF6 = internal.TRAF6_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const HP = state[0];
    const NLRX1 = state[1];
    const CytoL = state[2];
    const MyD88 = state[3];
    const TRAF6 = state[4];
    const NFkB = state[5];
    const IFN = state[6];
    const NOD1 = state[7];
    const RIG = state[8];
    const MAVS = state[9];
    const IRF = state[10];
    const TFa = state[11];
    const CytoE = state[12];
    const TFi = state[13];
    const X = state[14];
    dstatedt[12] = 0 + 1 * internal.default1 * (internal.ka * NFkB * (1 / (1 + Math.pow((X / internal.ki), (internal.n))))) - 1 * internal.default1 * internal.k1 * CytoE;
    dstatedt[2] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((NFkB), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((NFkB), (internal.n)))) - 1 * internal.default1 * internal.k1 * CytoL;
    dstatedt[0] = 0 + 1 * internal.default1 * (internal.r * HP * (1 - HP / internal.kxk)) - 1 * internal.default1 * (internal.kxk * CytoL / 2) - 1 * internal.default1 * (internal.kxk * IFN / 2) - 1 * internal.default1 * (internal.kxk * CytoE / 2);
    dstatedt[6] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((IRF), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((IRF), (internal.n)))) - 1 * internal.default1 * internal.k1 * IFN;
    dstatedt[10] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((MAVS), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((MAVS), (internal.n)))) + 1 * internal.default1 * (internal.vmax * Math.pow((NOD1), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((NOD1), (internal.n)))) + 1 * internal.default1 * (internal.vmax * Math.pow((IFN), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((IFN), (internal.n)))) - 1 * internal.default1 * internal.k1 * IRF;
    dstatedt[9] = 0 + 1 * internal.default1 * (internal.ka * RIG * (1 / (1 + Math.pow((NLRX1 / internal.ki), (internal.n))))) - 1 * internal.default1 * internal.k1 * MAVS;
    dstatedt[3] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((HP), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((HP), (internal.n)))) - 1 * internal.default1 * internal.k1 * MyD88 + 1 * internal.default1 * (internal.vmax * Math.pow((CytoL), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((CytoL), (internal.n))));
    dstatedt[5] = 0 + 1 * internal.default1 * (internal.ka * TRAF6 * (1 / (1 + Math.pow((NLRX1 / internal.ki), (internal.n))))) - 1 * internal.default1 * internal.k1 * NFkB + 1 * internal.default1 * (internal.vmax * Math.pow((NOD1), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((NOD1), (internal.n))));
    dstatedt[1] = 0 - 1 * internal.default1 * internal.k1 * NLRX1 + 1 * internal.default1 * (internal.ka * TFa * (1 / (1 + Math.pow((TFi / internal.ki), (internal.n)))));
    dstatedt[7] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((HP), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((HP), (internal.n)))) - 1 * internal.default1 * internal.k1 * NOD1;
    dstatedt[8] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((HP), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((HP), (internal.n)))) - 1 * internal.default1 * internal.k1 * RIG;
    dstatedt[11] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((CytoL), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((CytoL), (internal.n)))) - 1 * internal.default1 * internal.k1 * TFa;
    dstatedt[13] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((CytoE), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((CytoE), (internal.n)))) - 1 * internal.default1 * internal.k1 * TFi;
    dstatedt[4] = 0 - 1 * internal.default1 * internal.k1 * TRAF6 + 1 * internal.default1 * (internal.ka * MyD88 * (1 / (1 + Math.pow((X / internal.ki), (internal.n)))));
    dstatedt[14] = 0 + 1 * internal.default1 * (internal.vmax * Math.pow((NFkB), (internal.n)) / (Math.pow((internal.shalve), (internal.n)) + Math.pow((NFkB), (internal.n)))) - 1 * internal.default1 * internal.k1 * X;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "HP", "NLRX1", "CytoL", "MyD88", "TRAF6", "NFkB", "IFN", "NOD1", "RIG", "MAVS", "IRF", "TFa", "CytoE", "TFi", "X"];
    this.metadata.internalOrder = {CytoE_init: null, CytoL_init: null, default1: null, HP_init: null, IFN_init: null, initial_CytoE: null, initial_CytoL: null, initial_HP: null, initial_IFN: null, initial_IRF: null, initial_MAVS: null, initial_MyD88: null, initial_NFkB: null, initial_NLRX1: null, initial_NOD1: null, initial_RIG: null, initial_TFa: null, initial_TFi: null, initial_TRAF6: null, initial_X: null, IRF_init: null, k1: null, ka: null, ki: null, kxk: null, MAVS_init: null, MyD88_init: null, n: null, NFkB_init: null, NLRX1_init: null, NOD1_init: null, r: null, RIG_init: null, shalve: null, TFa_init: null, TFi_init: null, TRAF6_init: null, vmax: null, X_init: null};
    this.metadata.variableOrder = {HP: null, NLRX1: null, CytoL: null, MyD88: null, TRAF6: null, NFkB: null, IFN: null, NOD1: null, RIG: null, MAVS: null, IRF: null, TFa: null, CytoE: null, TFi: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

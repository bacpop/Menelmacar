export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1.4099999999999999;
    internal.k1 = 0.00365;
    internal.k2 = 1000000;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(22).fill(0);
    state[0] = internal.initial_AA;
    state[1] = internal.initial_AAp;
    state[2] = internal.initial_W;
    state[3] = internal.initial_WAA;
    state[4] = internal.initial_WAAp;
    state[5] = internal.initial_WWAA;
    state[6] = internal.initial_WWAAp;
    state[7] = internal.initial_TT;
    state[8] = internal.initial_TTW;
    state[9] = internal.initial_TTWW;
    state[10] = internal.initial_TTWAA;
    state[11] = internal.initial_TTWAAp;
    state[12] = internal.initial_TTAA;
    state[13] = internal.initial_TTAAp;
    state[14] = internal.initial_TTWWAA;
    state[15] = internal.initial_TTWWAAp;
    state[16] = internal.initial_Y;
    state[17] = internal.initial_Yp;
    state[18] = internal.initial_Z;
    state[19] = internal.initial_B;
    state[20] = internal.initial_Bp;
    state[21] = internal.initial_SetYp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AA_init", "AAp_init", "B_init", "Bp_init", "Hill", "SetYp_init", "TT_init", "TTAA_init", "TTAAp_init", "TTW_init", "TTWAA_init", "TTWAAp_init", "TTWW_init", "TTWWAA_init", "TTWWAAp_init", "W_init", "WAA_init", "WAAp_init", "WWAA_init", "WWAAp_init", "Y_init", "Yp_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hill", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SetYp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTAAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTW_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTWAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTWAAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTWW_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTWWAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TTWWAAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "W_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "WAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "WAAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "WWAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "WWAAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Yp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_AA = internal.AA_init;
    internal.initial_AAp = internal.AAp_init;
    internal.initial_B = internal.B_init;
    internal.initial_Bp = internal.Bp_init;
    internal.initial_SetYp = internal.SetYp_init;
    internal.initial_TT = internal.TT_init;
    internal.initial_TTAA = internal.TTAA_init;
    internal.initial_TTAAp = internal.TTAAp_init;
    internal.initial_TTW = internal.TTW_init;
    internal.initial_TTWAA = internal.TTWAA_init;
    internal.initial_TTWAAp = internal.TTWAAp_init;
    internal.initial_TTWW = internal.TTWW_init;
    internal.initial_TTWWAA = internal.TTWWAA_init;
    internal.initial_TTWWAAp = internal.TTWWAAp_init;
    internal.initial_W = internal.W_init;
    internal.initial_WAA = internal.WAA_init;
    internal.initial_WAAp = internal.WAAp_init;
    internal.initial_WWAA = internal.WWAA_init;
    internal.initial_WWAAp = internal.WWAAp_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Yp = internal.Yp_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const AA = state[0];
    const AAp = state[1];
    const W = state[2];
    const WAA = state[3];
    const WAAp = state[4];
    const WWAA = state[5];
    const WWAAp = state[6];
    const TT = state[7];
    const TTW = state[8];
    const TTWW = state[9];
    const TTWAA = state[10];
    const TTWAAp = state[11];
    const TTAA = state[12];
    const TTAAp = state[13];
    const TTWWAA = state[14];
    const TTWWAAp = state[15];
    const Y = state[16];
    const Yp = state[17];
    const Z = state[18];
    const B = state[19];
    const Bp = state[20];
    dstatedt[21] = 0;
    dstatedt[0] = 0 + 1 * internal.cell * (internal.k1 * WAA - internal.k2 * W * AA) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWW * AA) + 1 * internal.cell * (internal.k1 * TTAA - internal.k2 * TT * AA) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTW * AA) - 1 * internal.cell * internal.k1 * AA + 1 * internal.cell * internal.k1 * B * AAp + 1 * internal.cell * internal.k1 * Y * AAp;
    dstatedt[1] = 0 + 1 * internal.cell * internal.k1 * AA - 1 * internal.cell * internal.k1 * B * AAp - 1 * internal.cell * internal.k1 * Y * AAp;
    dstatedt[19] = 0 + 1 * internal.cell * internal.k1 * Bp - 1 * internal.cell * internal.k1 * B * AAp - 1 * internal.cell * internal.k1 * B * WAAp - 1 * internal.cell * internal.k1 * B * WWAAp - 1 * internal.cell * internal.k1 * B * TTAAp - 1 * internal.cell * internal.k1 * B * TTWAAp - 1 * internal.cell * internal.k1 * B * TTWWAAp;
    dstatedt[20] = 0 - 1 * internal.cell * internal.k1 * Bp + 1 * internal.cell * internal.k1 * B * AAp + 1 * internal.cell * internal.k1 * B * WAAp + 1 * internal.cell * internal.k1 * B * WWAAp + 1 * internal.cell * internal.k1 * B * TTAAp + 1 * internal.cell * internal.k1 * B * TTWAAp + 1 * internal.cell * internal.k1 * B * TTWWAAp;
    dstatedt[7] = 0 + 1 * internal.cell * (internal.k1 * TTW - internal.k2 * TT * W) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TT * WAA) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TT * WWAA) + 1 * internal.cell * (internal.k1 * TTAA - internal.k2 * TT * AA);
    dstatedt[12] = 0 - 1 * internal.cell * (internal.k1 * TTAA - internal.k2 * TT * AA) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTAA * W) - 1 * internal.cell * internal.k1 * TTAA + 1 * internal.cell * internal.k1 * B * TTAAp + 1 * internal.cell * internal.k1 * Y * TTAAp;
    dstatedt[13] = 0 + 1 * internal.cell * internal.k1 * TTAA - 1 * internal.cell * internal.k1 * B * TTAAp - 1 * internal.cell * internal.k1 * Y * TTAAp;
    dstatedt[8] = 0 - 1 * internal.cell * (internal.k1 * TTW - internal.k2 * TT * W) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTW * WAA) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTW * AA) + 1 * internal.cell * (internal.k1 * TTWW - internal.k2 * TTW * W);
    dstatedt[10] = 0 - 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TT * WAA) - 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTW * AA) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWAA * W) - 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTAA * W) - 1 * internal.cell * internal.k1 * TTWAA + 1 * internal.cell * internal.k1 * B * TTWAAp + 1 * internal.cell * internal.k1 * Y * TTWAAp;
    dstatedt[11] = 0 + 1 * internal.cell * internal.k1 * TTWAA - 1 * internal.cell * internal.k1 * B * TTWAAp - 1 * internal.cell * internal.k1 * Y * TTWAAp;
    dstatedt[9] = 0 + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWW * AA) - 1 * internal.cell * (internal.k1 * TTWW - internal.k2 * TTW * W);
    dstatedt[14] = 0 - 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTW * WAA) - 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWW * AA) - 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TT * WWAA) - 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWAA * W) - 1 * internal.cell * internal.k1 * TTWWAA + 1 * internal.cell * internal.k1 * B * TTWWAAp + 1 * internal.cell * internal.k1 * Y * TTWWAAp;
    dstatedt[15] = 0 + 1 * internal.cell * internal.k1 * TTWWAA - 1 * internal.cell * internal.k1 * B * TTWWAAp - 1 * internal.cell * internal.k1 * Y * TTWWAAp;
    dstatedt[2] = 0 + 1 * internal.cell * (internal.k1 * TTW - internal.k2 * TT * W) + 1 * internal.cell * (internal.k1 * WAA - internal.k2 * W * AA) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTWAA * W) + 1 * internal.cell * (internal.k1 * TTWW - internal.k2 * TTW * W) + 1 * internal.cell * (internal.k1 * WWAA - internal.k2 * W * WAA) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TTAA * W);
    dstatedt[3] = 0 - 1 * internal.cell * (internal.k1 * WAA - internal.k2 * W * AA) + 1 * internal.cell * (internal.k1 * TTWAA - internal.k2 * TT * WAA) + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TTW * WAA) + 1 * internal.cell * (internal.k1 * WWAA - internal.k2 * W * WAA) - 1 * internal.cell * internal.k1 * WAA + 1 * internal.cell * internal.k1 * B * WAAp + 1 * internal.cell * internal.k1 * Y * WAAp;
    dstatedt[4] = 0 + 1 * internal.cell * internal.k1 * WAA - 1 * internal.cell * internal.k1 * B * WAAp - 1 * internal.cell * internal.k1 * Y * WAAp;
    dstatedt[5] = 0 + 1 * internal.cell * (internal.k1 * TTWWAA - internal.k2 * TT * WWAA) - 1 * internal.cell * (internal.k1 * WWAA - internal.k2 * W * WAA) - 1 * internal.cell * internal.k1 * WWAA + 1 * internal.cell * internal.k1 * B * WWAAp + 1 * internal.cell * internal.k1 * Y * WWAAp;
    dstatedt[6] = 0 + 1 * internal.cell * internal.k1 * WWAA - 1 * internal.cell * internal.k1 * B * WWAAp - 1 * internal.cell * internal.k1 * Y * WWAAp;
    dstatedt[16] = 0 - 1 * internal.cell * internal.k1 * Y + 1 * internal.cell * internal.k1 * Yp + 1 * internal.cell * internal.k1 * Yp * Z - 1 * internal.cell * internal.k1 * Y * AAp - 1 * internal.cell * internal.k1 * Y * WAAp - 1 * internal.cell * internal.k1 * Y * WWAAp - 1 * internal.cell * internal.k1 * Y * TTAAp - 1 * internal.cell * internal.k1 * Y * TTWAAp - 1 * internal.cell * internal.k1 * Y * TTWWAAp;
    dstatedt[17] = 0 + 1 * internal.cell * internal.k1 * Y - 1 * internal.cell * internal.k1 * Yp - 1 * internal.cell * internal.k1 * Yp * Z + 1 * internal.cell * internal.k1 * Y * AAp + 1 * internal.cell * internal.k1 * Y * WAAp + 1 * internal.cell * internal.k1 * Y * WWAAp + 1 * internal.cell * internal.k1 * Y * TTAAp + 1 * internal.cell * internal.k1 * Y * TTWAAp + 1 * internal.cell * internal.k1 * Y * TTWWAAp;
    dstatedt[18] = 0 + 1 * internal.cell * internal.k1 * Yp * Z - 1 * internal.cell * internal.k1 * Yp * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "AA", "AAp", "W", "WAA", "WAAp", "WWAA", "WWAAp", "TT", "TTW", "TTWW", "TTWAA", "TTWAAp", "TTAA", "TTAAp", "TTWWAA", "TTWWAAp", "Y", "Yp", "Z", "B", "Bp", "SetYp"];
    this.metadata.internalOrder = {AA_init: null, AAp_init: null, B_init: null, Bp_init: null, cell: null, Hill: null, initial_AA: null, initial_AAp: null, initial_B: null, initial_Bp: null, initial_SetYp: null, initial_TT: null, initial_TTAA: null, initial_TTAAp: null, initial_TTW: null, initial_TTWAA: null, initial_TTWAAp: null, initial_TTWW: null, initial_TTWWAA: null, initial_TTWWAAp: null, initial_W: null, initial_WAA: null, initial_WAAp: null, initial_WWAA: null, initial_WWAAp: null, initial_Y: null, initial_Yp: null, initial_Z: null, k1: null, k2: null, SetYp_init: null, TT_init: null, TTAA_init: null, TTAAp_init: null, TTW_init: null, TTWAA_init: null, TTWAAp_init: null, TTWW_init: null, TTWWAA_init: null, TTWWAAp_init: null, W_init: null, WAA_init: null, WAAp_init: null, WWAA_init: null, WWAAp_init: null, Y_init: null, Yp_init: null, Z_init: null};
    this.metadata.variableOrder = {AA: null, AAp: null, W: null, WAA: null, WAAp: null, WWAA: null, WWAAp: null, TT: null, TTW: null, TTWW: null, TTWAA: null, TTWAAp: null, TTAA: null, TTAAp: null, TTWWAA: null, TTWWAAp: null, Y: null, Yp: null, Z: null, B: null, Bp: null, SetYp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

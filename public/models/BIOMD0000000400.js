export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_Gd;
    state[1] = internal.initial_Gt;
    state[2] = internal.initial_R;
    state[3] = internal.initial_Rl;
    state[4] = internal.initial_Rg;
    state[5] = internal.initial_Rlg;
    state[6] = internal.initial_Rlgp;
    state[7] = internal.initial_IP3;
    state[8] = internal.initial_Pc;
    state[9] = internal.initial_Pcg;
    state[10] = internal.initial_P;
    state[11] = internal.initial_Pg;
    state[12] = internal.initial_Ca;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_init", "Gd_init", "Gt_init", "IP3_init", "Kd1", "Kd11", "Kd2", "Kd4", "kf1", "kf10", "kf11", "kf12", "kf13", "kf14", "kf15", "kf16", "kf2", "kf3", "kf4", "kf5", "kf6", "kf7", "kf8", "kf9", "Km14", "Km15", "kr10", "kr3", "kr8", "kr9", "Ls", "P_init", "Pc_init", "Pcg_init", "Pg_init", "PIP2", "R_init", "Rg_init", "Rl_init", "Rlg_init", "Rlgp_init", "Rpc", "ts", "Vc"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gd_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_init", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd1", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd11", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd2", internal, 27500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd4", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf1", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf10", internal, 0.042000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf11", internal, 0.033399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf12", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf13", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf14", internal, 0.44400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf15", internal, 3.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf16", internal, 1.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf2", internal, 0.00027500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf4", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf5", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf7", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf8", internal, 0.0167, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf9", internal, 0.0041999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km14", internal, 19.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km15", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr10", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr3", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr8", internal, 0.0167, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ls", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 90.900000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pc_init", internal, 9.0899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pcg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2", internal, 4000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 13.9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rg_init", internal, 5.0599999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rl_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rlg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rlgp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rpc", internal, 4.6100000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ts", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vc", internal, 2550, -Infinity, Infinity, false);
    internal.Cc = 1 / (internal.Vc * 602.20000000000005);
    internal.Cp = 1 / (internal.Vc * internal.Rpc);
    internal.initial_Ca = internal.Ca_init;
    internal.initial_Gd = internal.Gd_init;
    internal.initial_Gt = internal.Gt_init;
    internal.initial_IP3 = internal.IP3_init;
    internal.initial_P = internal.P_init;
    internal.initial_Pc = internal.Pc_init;
    internal.initial_Pcg = internal.Pcg_init;
    internal.initial_Pg = internal.Pg_init;
    internal.initial_R = internal.R_init;
    internal.initial_Rg = internal.Rg_init;
    internal.initial_Rl = internal.Rl_init;
    internal.initial_Rlg = internal.Rlg_init;
    internal.initial_Rlgp = internal.Rlgp_init;
    internal.kr1 = internal.kf1 * internal.Kd1;
    internal.kr11 = internal.kf11 * internal.Kd11;
    internal.kr2 = internal.kf2 * internal.Kd2;
    internal.kr4 = internal.kf4 * internal.Kd4;
    internal.Cpc = internal.Cc / internal.Cp;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[12] = 0;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
    dstatedt[7] = 0;
    dstatedt[10] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[11] = 0;
    dstatedt[2] = 0;
    dstatedt[4] = 0;
    dstatedt[3] = 0;
    dstatedt[5] = 0;
    dstatedt[6] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Gd", "Gt", "R", "Rl", "Rg", "Rlg", "Rlgp", "IP3", "Pc", "Pcg", "P", "Pg", "Ca"];
    this.metadata.internalOrder = {Ca_init: null, Cc: null, Compartment: null, Cp: null, Cpc: null, Gd_init: null, Gt_init: null, initial_Ca: null, initial_Gd: null, initial_Gt: null, initial_IP3: null, initial_P: null, initial_Pc: null, initial_Pcg: null, initial_Pg: null, initial_R: null, initial_Rg: null, initial_Rl: null, initial_Rlg: null, initial_Rlgp: null, IP3_init: null, Kd1: null, Kd11: null, Kd2: null, Kd4: null, kf1: null, kf10: null, kf11: null, kf12: null, kf13: null, kf14: null, kf15: null, kf16: null, kf2: null, kf3: null, kf4: null, kf5: null, kf6: null, kf7: null, kf8: null, kf9: null, Km14: null, Km15: null, kr1: null, kr10: null, kr11: null, kr2: null, kr3: null, kr4: null, kr8: null, kr9: null, Ls: null, P_init: null, Pc_init: null, Pcg_init: null, Pg_init: null, PIP2: null, R_init: null, Rg_init: null, Rl_init: null, Rlg_init: null, Rlgp_init: null, Rpc: null, ts: null, Vc: null};
    this.metadata.variableOrder = {Gd: null, Gt: null, R: null, Rl: null, Rg: null, Rlg: null, Rlgp: null, IP3: null, Pc: null, Pcg: null, P: null, Pg: null, Ca: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

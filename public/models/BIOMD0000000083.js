export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_Mb;
    state[1] = internal.initial_Bc;
    state[2] = internal.initial_Bcp;
    state[3] = internal.initial_Bn;
    state[4] = internal.initial_Cc;
    state[5] = internal.initial_Mc;
    state[6] = internal.initial_Ccp;
    state[7] = internal.initial_Mp;
    state[8] = internal.initial_Pc;
    state[9] = internal.initial_Pcp;
    state[10] = internal.initial_PCc;
    state[11] = internal.initial_PCcp;
    state[12] = internal.initial_PCn;
    state[13] = internal.initial_Bnp;
    state[14] = internal.initial_PCnp;
    state[15] = internal.initial_In;
    state[16] = internal.initial_Mr;
    state[17] = internal.initial_Rc;
    state[18] = internal.initial_Rn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bc_init", "Bcp_init", "Bn_init", "Bnp_init", "Cc_init", "Ccp_init", "h", "In_init", "K", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "KAC", "KAP", "KAR", "Kd", "kdmb", "kdmc", "kdmp", "kdmr", "kdn", "kdnC", "Kdp", "KmB", "KmC", "KmP", "kmR", "Kp", "ksB", "ksC", "ksP", "ksR", "m", "Mb_init", "Mc_init", "Mp_init", "Mr_init", "n", "Pc_init", "PCc_init", "PCcp_init", "PCn_init", "PCnp_init", "Pcp_init", "Rc_init", "Rn_init", "V1B", "V1C", "V1P", "V1PC", "V2B", "V2C", "V2P", "V2PC", "V3B", "V3PC", "V4B", "V4PC", "vdBC", "vdBN", "vdCC", "vdIN", "VdPC", "vdPCC", "vdPCN", "vdRC", "vdRN", "vmB", "vmC", "vmP", "vmR", "vsB", "vsC", "vsR"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bcp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bnp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ccp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "In_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KAC", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KAP", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KAR", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdmb", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdmc", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdmp", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdmr", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdn", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdnC", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdp", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmB", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmC", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmP", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmR", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp", internal, 1.006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksB", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksC", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksP", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksR", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCcp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCnp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pcp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1B", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1C", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1P", internal, 9.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1PC", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2B", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2C", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2P", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2PC", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3B", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3PC", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4B", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4PC", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdBC", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdBN", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdCC", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdIN", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VdPC", internal, 3.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdPCC", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdPCN", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdRC", internal, 4.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdRN", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmB", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmC", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmP", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmR", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsB", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsC", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsR", internal, 1.6000000000000001, -Infinity, Infinity, false);
    internal.initial_Bc = internal.Bc_init;
    internal.initial_Bcp = internal.Bcp_init;
    internal.initial_Bn = internal.Bn_init;
    internal.initial_Bnp = internal.Bnp_init;
    internal.initial_Cc = internal.Cc_init;
    internal.initial_Ccp = internal.Ccp_init;
    internal.initial_In = internal.In_init;
    internal.initial_Mb = internal.Mb_init;
    internal.initial_Mc = internal.Mc_init;
    internal.initial_Mp = internal.Mp_init;
    internal.initial_Mr = internal.Mr_init;
    internal.initial_Pc = internal.Pc_init;
    internal.initial_PCc = internal.PCc_init;
    internal.initial_PCcp = internal.PCcp_init;
    internal.initial_PCn = internal.PCn_init;
    internal.initial_PCnp = internal.PCnp_init;
    internal.initial_Pcp = internal.Pcp_init;
    internal.initial_Rc = internal.Rc_init;
    internal.initial_Rn = internal.Rn_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Mb = state[0];
    const Bc = state[1];
    const Bcp = state[2];
    const Bn = state[3];
    const Cc = state[4];
    const Mc = state[5];
    const Ccp = state[6];
    const Mp = state[7];
    const Pc = state[8];
    const Pcp = state[9];
    const PCc = state[10];
    const PCcp = state[11];
    const PCn = state[12];
    const Bnp = state[13];
    const PCnp = state[14];
    const In = state[15];
    const Mr = state[16];
    const Rc = state[17];
    const Rn = state[18];
    dstatedt[1] = 0 + 1 * internal.cell * internal.ksB * Mb - 1 * internal.cell * (internal.V1B * Bc / (internal.Kp + Bc)) - 1 * internal.cell * (internal.k5 * Bc - internal.k6 * Bn) - 1 * internal.cell * internal.kdn * Bc + 1 * internal.cell * (internal.V2B * Bcp / (internal.Kdp + Bcp));
    dstatedt[2] = 0 + 1 * internal.cell * (internal.V1B * Bc / (internal.Kp + Bc)) - 1 * internal.cell * internal.kdn * Bcp - 1 * internal.cell * (internal.vdBC * Bcp / (internal.Kd + Bcp)) - 1 * internal.cell * (internal.V2B * Bcp / (internal.Kdp + Bcp));
    dstatedt[3] = 0 + 1 * internal.cell * (internal.k5 * Bc - internal.k6 * Bn) - 1 * internal.cell * (internal.k7 * PCn * Bn - internal.k8 * In) - 1 * internal.cell * (internal.V3B * Bn / (internal.Kp + Bn)) - 1 * internal.cell * internal.kdn * Bn + 1 * internal.cell * (internal.V4B * Bnp / (internal.Kdp + Bnp));
    dstatedt[13] = 0 - 1 * internal.cell * internal.kdn * Bnp + 1 * internal.cell * (internal.V3B * Bn / (internal.Kp + Bn)) - 1 * internal.cell * (internal.vdBN * Bnp / (internal.Kd + Bnp)) - 1 * internal.cell * (internal.V4B * Bnp / (internal.Kdp + Bnp));
    dstatedt[4] = 0 + 1 * internal.cell * internal.ksC * Mc - 1 * internal.cell * (internal.V1C * Cc / (internal.Kp + Cc)) - 1 * internal.cell * (internal.k3 * Cc * Pc - internal.k4 * PCc) - 1 * internal.cell * internal.kdnC * Cc + 1 * internal.cell * (internal.V2C * Ccp / (internal.Kdp + Ccp));
    dstatedt[6] = 0 + 1 * internal.cell * (internal.V1C * Cc / (internal.Kp + Cc)) - 1 * internal.cell * (internal.vdCC * Ccp / (internal.Kd + Ccp)) - 1 * internal.cell * internal.kdn * Ccp - 1 * internal.cell * (internal.V2C * Ccp / (internal.Kdp + Ccp));
    dstatedt[15] = 0 + 1 * internal.cell * (internal.k7 * PCn * Bn - internal.k8 * In) - 1 * internal.cell * internal.kdn * In - 1 * internal.cell * (internal.vdIN * In / (internal.Kd + In));
    dstatedt[0] = 0 + 1 * internal.cell * (internal.vsB * Math.pow((internal.K), (internal.m)) / (Math.pow((internal.K), (internal.m)) + Math.pow((Rn), (internal.m)))) - 1 * internal.cell * internal.kdmb * Mb - 1 * internal.cell * (internal.vmB * Mb / (internal.KmB + Mb));
    dstatedt[5] = 0 - 1 * internal.cell * internal.kdmc * Mc + 1 * internal.cell * (internal.vsC * Math.pow((Bn), (internal.n)) / (Math.pow((internal.KAC), (internal.n)) + Math.pow((Bn), (internal.n)))) - 1 * internal.cell * (internal.vmC * Mc / (internal.KmC + Mc));
    dstatedt[16] = 0 + 1 * internal.cell * (internal.vsR * Math.pow((Bn), (internal.h)) / (Math.pow((internal.KAR), (internal.h)) + Math.pow((Bn), (internal.h)))) - 1 * internal.cell * internal.kdmr * Mr - 1 * internal.cell * (internal.vmR * Mr / (internal.kmR + Mr));
    dstatedt[8] = 0 + 1 * internal.cell * internal.ksP * Mp - 1 * internal.cell * (internal.V1P * Pc / (internal.Kp + Pc)) - 1 * internal.cell * (internal.k3 * Cc * Pc - internal.k4 * PCc) - 1 * internal.cell * internal.kdn * Pc + 1 * internal.cell * (internal.V2P * Pcp / (internal.Kdp + Pcp));
    dstatedt[10] = 0 + 1 * internal.cell * (internal.k3 * Cc * Pc - internal.k4 * PCc) - 1 * internal.cell * (internal.V1PC * PCc / (internal.Kp + PCc)) - 1 * internal.cell * (internal.k1 * PCc - internal.k2 * PCn) - 1 * internal.cell * internal.kdn * PCc + 1 * internal.cell * (internal.V2PC * PCcp / (internal.Kdp + PCcp));
    dstatedt[11] = 0 + 1 * internal.cell * (internal.V1PC * PCc / (internal.Kp + PCc)) - 1 * internal.cell * (internal.vdPCC * PCcp / (internal.Kd + PCcp)) - 1 * internal.cell * internal.kdn * PCcp - 1 * internal.cell * (internal.V2PC * PCcp / (internal.Kdp + PCcp));
    dstatedt[12] = 0 + 1 * internal.cell * (internal.k1 * PCc - internal.k2 * PCn) - 1 * internal.cell * (internal.V3PC * PCn / (internal.Kp + PCn)) - 1 * internal.cell * (internal.k7 * PCn * Bn - internal.k8 * In) + 1 * internal.cell * (internal.V4PC * PCnp / (internal.Kdp + PCnp)) - 1 * internal.cell * internal.kdn * PCn;
    dstatedt[14] = 0 - 1 * internal.cell * internal.kdn * PCnp + 1 * internal.cell * (internal.V3PC * PCn / (internal.Kp + PCn)) - 1 * internal.cell * (internal.vdPCN * PCnp / (internal.Kd + PCnp)) - 1 * internal.cell * (internal.V4PC * PCnp / (internal.Kdp + PCnp));
    dstatedt[9] = 0 - 1 * internal.cell * (internal.VdPC * Pcp / (internal.Kd + Pcp)) + 1 * internal.cell * (internal.V1P * Pc / (internal.Kp + Pc)) - 1 * internal.cell * internal.kdn * Pcp - 1 * internal.cell * (internal.V2P * Pcp / (internal.Kdp + Pcp));
    dstatedt[17] = 0 + 1 * internal.cell * internal.ksR * Mr - 1 * internal.cell * (internal.k9 * Rc - internal.k10 * Rn) - 1 * internal.cell * (internal.vdRC * Rc / (internal.Kd + Rc)) - 1 * internal.cell * internal.kdn * Rc;
    dstatedt[18] = 0 + 1 * internal.cell * (internal.k9 * Rc - internal.k10 * Rn) - 1 * internal.cell * (internal.vdRN * Rn / (internal.Kd + Rn)) - 1 * internal.cell * internal.kdn * Rn;
    var parameter_0000096 = Math.ceil(Math.sin(internal.pi * t / 12 + 0.001) / 2);
    var parameter_0000097 = 2.3999999999999999 + (3 - 2.3999999999999999) * parameter_0000096;
    dstatedt[7] = 0 + 1 * internal.cell * (parameter_0000097 * Math.pow((Bn), (internal.n)) / (Math.pow((internal.KAP), (internal.n)) + Math.pow((Bn), (internal.n)))) - 1 * internal.cell * internal.kdmp * Mp - 1 * internal.cell * (internal.vmP * Mp / (internal.KmP + Mp));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Mb", "Bc", "Bcp", "Bn", "Cc", "Mc", "Ccp", "Mp", "Pc", "Pcp", "PCc", "PCcp", "PCn", "Bnp", "PCnp", "In", "Mr", "Rc", "Rn"];
    this.metadata.internalOrder = {Bc_init: null, Bcp_init: null, Bn_init: null, Bnp_init: null, Cc_init: null, Ccp_init: null, cell: null, h: null, In_init: null, initial_Bc: null, initial_Bcp: null, initial_Bn: null, initial_Bnp: null, initial_Cc: null, initial_Ccp: null, initial_In: null, initial_Mb: null, initial_Mc: null, initial_Mp: null, initial_Mr: null, initial_Pc: null, initial_PCc: null, initial_PCcp: null, initial_PCn: null, initial_PCnp: null, initial_Pcp: null, initial_Rc: null, initial_Rn: null, K: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, KAC: null, KAP: null, KAR: null, Kd: null, kdmb: null, kdmc: null, kdmp: null, kdmr: null, kdn: null, kdnC: null, Kdp: null, KmB: null, KmC: null, KmP: null, kmR: null, Kp: null, ksB: null, ksC: null, ksP: null, ksR: null, m: null, Mb_init: null, Mc_init: null, Mp_init: null, Mr_init: null, n: null, Pc_init: null, PCc_init: null, PCcp_init: null, PCn_init: null, PCnp_init: null, Pcp_init: null, pi: null, Rc_init: null, Rn_init: null, V1B: null, V1C: null, V1P: null, V1PC: null, V2B: null, V2C: null, V2P: null, V2PC: null, V3B: null, V3PC: null, V4B: null, V4PC: null, vdBC: null, vdBN: null, vdCC: null, vdIN: null, VdPC: null, vdPCC: null, vdPCN: null, vdRC: null, vdRN: null, vmB: null, vmC: null, vmP: null, vmR: null, vsB: null, vsC: null, vsR: null};
    this.metadata.variableOrder = {Mb: null, Bc: null, Bcp: null, Bn: null, Cc: null, Mc: null, Ccp: null, Mp: null, Pc: null, Pcp: null, PCc: null, PCcp: null, PCn: null, Bnp: null, PCnp: null, In: null, Mr: null, Rc: null, Rn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

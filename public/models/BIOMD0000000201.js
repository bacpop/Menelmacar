export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.Fgf = 1;
    internal.Kt = 3;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(20).fill(0);
    state[0] = internal.initial_N;
    state[1] = internal.initial_Na;
    state[2] = internal.initial_Nan;
    state[3] = internal.initial_MF;
    state[4] = internal.initial_F;
    state[5] = internal.initial_Bp;
    state[6] = internal.initial_BN;
    state[7] = internal.initial_A;
    state[8] = internal.initial_K;
    state[9] = internal.initial_B;
    state[10] = internal.initial_MAx;
    state[11] = internal.initial_Rasa;
    state[12] = internal.initial_ERKa;
    state[13] = internal.initial_Xa;
    state[14] = internal.initial_MDusp;
    state[15] = internal.initial_Dusp;
    state[16] = internal.initial_Rast;
    state[17] = internal.initial_ERKt;
    state[18] = internal.initial_Xt;
    state[19] = internal.initial_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "a1", "B_init", "BN_init", "Bp_init", "D_init", "d1", "Dusp_init", "epsilon", "ERKa_init", "ERKt_init", "eta", "F_init", "jxj", "K_init", "K1", "K2", "KA", "KaB", "KaErk", "KaFgf", "KaMDusp", "KaRas", "KaX", "KaXa", "kc", "kcDusp", "kd1", "kd2", "KdAx", "KdDusp", "KdErk", "KdF", "KdMDusp", "KdMF", "KdN", "KdNa", "KdNan", "KdRas", "KdX", "KID", "KIF", "KIG1", "Kmd", "ksAx", "ksDusp", "ksF", "kt1", "kt2", "kt3", "kt4", "m", "MAx_init", "MDusp_init", "MF_init", "n", "N_init", "Na_init", "Nan_init", "p", "q", "r", "Rasa_init", "Rast_init", "theta", "v0", "vdAx", "vdDusp", "vdF", "vdN", "VdNa", "VdNan", "VMaErk", "VMaRas", "VMaX", "vMB", "vmd", "VMdMDusp", "VMdRas", "VMdX", "vmF", "VMK", "VMP", "VMsMDusp", "vMXa", "vsB", "vsF", "vsN", "Xa_init", "Xt_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BN_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bp_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dusp_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERKa_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERKt_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.28000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaB", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaErk", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaFgf", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaMDusp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaRas", internal, 0.10299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaX", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaXa", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 3.4500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcDusp", internal, 1.3500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd2", internal, 7.0620000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdAx", internal, 0.63, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdDusp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdErk", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdF", internal, 0.37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdMDusp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdMF", internal, 0.76800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdN", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdNa", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdNan", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdRas", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdX", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KID", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KIF", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KIG1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmd", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksAx", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksDusp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksF", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt3", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt4", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAx_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MDusp_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MF_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Na_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nan_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rasa_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rast_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdAx", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdDusp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdF", internal, 0.39000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdN", internal, 2.8199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VdNa", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VdNan", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMaErk", internal, 3.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMaRas", internal, 4.968, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMaX", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vMB", internal, 1.6399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmd", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMdMDusp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMdRas", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMdX", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmF", internal, 1.9199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMK", internal, 5.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VMsMDusp", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vMXa", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsB", internal, 0.086999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsF", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsN", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xt_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_BN = internal.BN_init;
    internal.initial_Bp = internal.Bp_init;
    internal.initial_D = internal.D_init;
    internal.initial_Dusp = internal.Dusp_init;
    internal.initial_ERKa = internal.ERKa_init;
    internal.initial_ERKt = internal.ERKt_init;
    internal.initial_F = internal.F_init;
    internal.initial_K = internal.K_init;
    internal.initial_MAx = internal.MAx_init;
    internal.initial_MDusp = internal.MDusp_init;
    internal.initial_MF = internal.MF_init;
    internal.initial_N = internal.N_init;
    internal.initial_Na = internal.Na_init;
    internal.initial_Nan = internal.Nan_init;
    internal.initial_Rasa = internal.Rasa_init;
    internal.initial_Rast = internal.Rast_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xt = internal.Xt_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    const Na = state[1];
    const Nan = state[2];
    const MF = state[3];
    const F = state[4];
    const Bp = state[5];
    const BN = state[6];
    const A = state[7];
    const K = state[8];
    const B = state[9];
    const MAx = state[10];
    const Rasa = state[11];
    const ERKa = state[12];
    const Xa = state[13];
    const MDusp = state[14];
    const Dusp = state[15];
    const Rast = state[16];
    const ERKt = state[17];
    const Xt = state[18];
    const D = state[19];
    dstatedt[19] = 0;
    dstatedt[17] = 0;
    dstatedt[16] = 0;
    dstatedt[18] = 0;
    var AK = internal.Kt - K;
    dstatedt[6] = 0 - 1 * internal.theta * internal.cytosol * (internal.kt4 * BN - internal.kt3 * B);
    dstatedt[15] = 0 + 1 * internal.eta * internal.cytosol * internal.ksDusp * MDusp - 1 * internal.eta * internal.cytosol * internal.vdDusp * Dusp / (internal.KdDusp + Dusp);
    dstatedt[4] = 0 + 1 * internal.epsilon * internal.cytosol * internal.ksF * MF - 1 * internal.epsilon * internal.cytosol * internal.vdF * F / (internal.KdF + F);
    dstatedt[10] = 0 + 1 * internal.theta * internal.cytosol * internal.v0 + 1 * internal.theta * internal.cytosol * (internal.vMB * Math.pow((BN), (internal.n)) / (Math.pow((internal.KaB), (internal.n)) + Math.pow((BN), (internal.n)))) + 1 * internal.theta * internal.cytosol * (internal.vMXa * Math.pow((Xa), (internal.m)) / (Math.pow((internal.KaXa), (internal.m)) + Math.pow((Xa), (internal.m)))) - 1 * internal.theta * internal.cytosol * internal.vmd * MAx / (internal.Kmd + MAx);
    dstatedt[14] = 0 + 1 * internal.eta * internal.cytosol * internal.VMsMDusp * Math.pow((Xa), (internal.q)) / (Math.pow((internal.KaMDusp), (internal.q)) + Math.pow((Xa), (internal.q))) - 1 * internal.eta * internal.cytosol * internal.VMdMDusp * MDusp / (internal.KdMDusp + MDusp);
    dstatedt[0] = 0 + 1 * internal.cytosol * internal.epsilon * internal.vsN - 1 * internal.epsilon * internal.cytosol * internal.vdN * N / (internal.KdN + N) - 1 * internal.epsilon * internal.cytosol * internal.kc * N * Math.pow((internal.KIF), (internal.jxj)) / (Math.pow((internal.KIF), (internal.jxj)) + Math.pow((F), (internal.jxj)));
    dstatedt[1] = 0 + 1 * internal.epsilon * internal.cytosol * internal.kc * N * Math.pow((internal.KIF), (internal.jxj)) / (Math.pow((internal.KIF), (internal.jxj)) + Math.pow((F), (internal.jxj))) - 1 * internal.epsilon * internal.cytosol * internal.VdNa * Na / (internal.KdNa + Na) - 1 * internal.epsilon * internal.cytosol * (internal.kt1 * Na - internal.kt2 * Nan);
    dstatedt[2] = 0 + 1 * internal.epsilon * internal.cytosol * (internal.kt1 * Na - internal.kt2 * Nan) - 1 * internal.epsilon * internal.cytosol * internal.VdNan * Nan / (internal.KdNan + Nan);
    var ERKi = ERKt - ERKa;
    var Rasi = Rast - Rasa;
    var vsFK = internal.vsF * (internal.KIG1 / (internal.KIG1 + K));
    var Xi = Xt - Xa;
    dstatedt[7] = 0 + 1 * internal.theta * internal.cytosol * (internal.d1 * AK - internal.a1 * A * K) + 1 * internal.theta * internal.cytosol * internal.ksAx * MAx - 1 * internal.theta * internal.cytosol * internal.vdAx * A / (internal.KdAx + A);
    dstatedt[9] = 0 + 1 * internal.theta * internal.cytosol * internal.vsB - 1 * internal.theta * internal.cytosol * internal.kd1 * B - 1 * internal.theta * internal.cytosol * internal.VMK * internal.KID / (internal.KID + D) * B / (internal.K1 + B) * AK / internal.Kt + 1 * internal.theta * internal.cytosol * internal.VMP * Bp / (internal.K2 + Bp) + 1 * internal.theta * internal.cytosol * (internal.kt4 * BN - internal.kt3 * B);
    dstatedt[5] = 0 + 1 * internal.theta * internal.cytosol * internal.VMK * internal.KID / (internal.KID + D) * B / (internal.K1 + B) * AK / internal.Kt - 1 * internal.theta * internal.cytosol * internal.VMP * Bp / (internal.K2 + Bp) - 1 * internal.theta * internal.cytosol * internal.kd2 * Bp;
    dstatedt[12] = 0 + 1 * internal.eta * internal.cytosol * internal.VMaErk * Rasa / Rast * ERKi / (internal.KaErk + ERKi) - 1 * internal.eta * internal.cytosol * internal.kcDusp * Dusp * ERKa / (internal.KdErk + ERKa);
    dstatedt[8] = 0 + 1 * internal.theta * internal.cytosol * (internal.d1 * AK - internal.a1 * A * K);
    dstatedt[3] = 0 + 1 * internal.epsilon * internal.cytosol * vsFK * Math.pow((Nan), (internal.p)) / (Math.pow((internal.KA), (internal.p)) + Math.pow((Nan), (internal.p))) - 1 * internal.epsilon * internal.cytosol * internal.vmF * MF / (internal.KdMF + MF);
    dstatedt[11] = 0 + 1 * internal.eta * internal.cytosol * internal.VMaRas * Math.pow((internal.Fgf), (internal.r)) / (Math.pow((internal.KaFgf), (internal.r)) + Math.pow((internal.Fgf), (internal.r))) * Rasi / (internal.KaRas + Rasi) - 1 * internal.eta * internal.cytosol * internal.VMdRas * Rasa / (internal.KdRas + Rasa);
    dstatedt[13] = 0 + 1 * internal.eta * internal.cytosol * internal.VMaX * ERKa / ERKt * Xi / (internal.KaX + Xi) - 1 * internal.eta * internal.cytosol * internal.VMdX * Xa / (internal.KdX + Xa);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N", "Na", "Nan", "MF", "F", "Bp", "BN", "A", "K", "B", "MAx", "Rasa", "ERKa", "Xa", "MDusp", "Dusp", "Rast", "ERKt", "Xt", "D"];
    this.metadata.internalOrder = {A_init: null, a1: null, B_init: null, BN_init: null, Bp_init: null, cytosol: null, D_init: null, d1: null, Dusp_init: null, epsilon: null, ERKa_init: null, ERKt_init: null, eta: null, F_init: null, Fgf: null, initial_A: null, initial_B: null, initial_BN: null, initial_Bp: null, initial_D: null, initial_Dusp: null, initial_ERKa: null, initial_ERKt: null, initial_F: null, initial_K: null, initial_MAx: null, initial_MDusp: null, initial_MF: null, initial_N: null, initial_Na: null, initial_Nan: null, initial_Rasa: null, initial_Rast: null, initial_Xa: null, initial_Xt: null, jxj: null, K_init: null, K1: null, K2: null, KA: null, KaB: null, KaErk: null, KaFgf: null, KaMDusp: null, KaRas: null, KaX: null, KaXa: null, kc: null, kcDusp: null, kd1: null, kd2: null, KdAx: null, KdDusp: null, KdErk: null, KdF: null, KdMDusp: null, KdMF: null, KdN: null, KdNa: null, KdNan: null, KdRas: null, KdX: null, KID: null, KIF: null, KIG1: null, Kmd: null, ksAx: null, ksDusp: null, ksF: null, Kt: null, kt1: null, kt2: null, kt3: null, kt4: null, m: null, MAx_init: null, MDusp_init: null, MF_init: null, n: null, N_init: null, Na_init: null, Nan_init: null, p: null, q: null, r: null, Rasa_init: null, Rast_init: null, theta: null, v0: null, vdAx: null, vdDusp: null, vdF: null, vdN: null, VdNa: null, VdNan: null, VMaErk: null, VMaRas: null, VMaX: null, vMB: null, vmd: null, VMdMDusp: null, VMdRas: null, VMdX: null, vmF: null, VMK: null, VMP: null, VMsMDusp: null, vMXa: null, vsB: null, vsF: null, vsN: null, Xa_init: null, Xt_init: null};
    this.metadata.variableOrder = {N: null, Na: null, Nan: null, MF: null, F: null, Bp: null, BN: null, A: null, K: null, B: null, MAx: null, Rasa: null, ERKa: null, Xa: null, MDusp: null, Dusp: null, Rast: null, ERKt: null, Xt: null, D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

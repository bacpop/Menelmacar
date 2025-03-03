export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_V;
    state[1] = internal.initial_Ca;
    state[2] = internal.initial_nK;
    state[3] = internal.initial_hNaP;
    state[4] = internal.initial_hH;
    state[5] = internal.initial_mLVA;
    state[6] = internal.initial_hLVA;
    state[7] = internal.initial_mBK;
    state[8] = internal.initial_nHVK;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta_hH", "beta_hH_T", "beta_hLVA", "beta_hNaP", "beta_mBK", "beta_mHVA", "beta_mHVK", "beta_mLVA", "beta_mNa", "beta_mNaP", "beta_nHVK", "beta_nK", "C", "Ca_buffer", "Ca_init", "Ca_z", "Ca0", "d", "delta_hH_T", "F", "gBK", "gH", "gHVA", "gHVK", "gK", "gL", "gLVA", "gNa", "gNaP", "hH_init", "hLVA_init", "hNaP_init", "mBK_base", "mBK_init", "mLVA_init", "nHVK_init", "nK_init", "tau_Ca", "tau_hH_T", "tau_hLVA", "tau_hNaP", "tau_mLVA", "tau_nK", "theta_hH", "theta_hH_T", "theta_hLVA", "theta_hNaP", "theta_mHVA", "theta_mHVK", "theta_mLVA", "theta_mNa", "theta_mNaP", "theta_nHVK", "theta_nK", "V_init", "vCa", "vH", "vK", "vL", "vNa"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta_hH", internal, 5.8550000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_hH_T", internal, 4.4400000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_hLVA", internal, 11.2326, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_hNaP", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mBK", internal, - 15.6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mHVA", internal, - 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mHVK", internal, - 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mLVA", internal, - 4.8916000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mNa", internal, - 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_mNaP", internal, - 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_nHVK", internal, - 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_nK", internal, - 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_buffer", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_init", internal, 0.00039839179219000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_z", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca0", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_hH_T", internal, 0.20499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96485, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gBK", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gH", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gHVA", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gHVK", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 12.960000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gL", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gLVA", internal, 15.0213, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNa", internal, 29.170000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNaP", internal, 8.3244000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hH_init", internal, 0.157733123889777, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hLVA_init", internal, 0.21683018316389699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hNaP_init", internal, 0.139259083672574, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mBK_base", internal, 170, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mBK_init", internal, 0.118223401083348, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mLVA_init", internal, 0.048620921041046997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nHVK_init", internal, 0.049382804823415997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nK_init", internal, 0.055706295559465997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_Ca", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_hH_T", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_hLVA", internal, 350, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_hNaP", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_mLVA", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_nK", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_hH", internal, - 61.32, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_hH_T", internal, - 65.950000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_hLVA", internal, - 59.200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_hNaP", internal, - 54, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_mHVA", internal, - 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_mHVK", internal, - 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_mLVA", internal, - 37.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_mNa", internal, - 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_mNaP", internal, - 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_nHVK", internal, - 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_nK", internal, - 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, - 51.4085348748388, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vCa", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vH", internal, - 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vK", internal, - 105, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vL", internal, - 62.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vNa", internal, 45, -Infinity, Infinity, false);
    internal.initial_Ca = internal.Ca_init;
    internal.initial_hH = internal.hH_init;
    internal.initial_hLVA = internal.hLVA_init;
    internal.initial_hNaP = internal.hNaP_init;
    internal.initial_mBK = internal.mBK_init;
    internal.initial_mLVA = internal.mLVA_init;
    internal.initial_nHVK = internal.nHVK_init;
    internal.initial_nK = internal.nK_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V = state[0];
    const Ca = state[1];
    const nK = state[2];
    const hNaP = state[3];
    const hH = state[4];
    const mLVA = state[5];
    const hLVA = state[6];
    const mBK = state[7];
    const nHVK = state[8];
    var hH_inf = 1 / (1 + Math.exp((V - internal.theta_hH) / internal.beta_hH));
    var hH_tau = internal.tau_hH_T * Math.exp(internal.delta_hH_T * (V - internal.theta_hH_T) / internal.beta_hH_T) / (1 + Math.exp((V - internal.theta_hH_T) / internal.beta_hH_T));
    var hLVA_inf = 1 / (1 + Math.exp((V - internal.theta_hLVA) / internal.beta_hLVA));
    var hLVA_tau = internal.tau_hLVA / Math.cosh((V - internal.theta_hLVA) / (2 * internal.beta_hLVA));
    var hNaP_inf = 1 / (1 + Math.exp((V - internal.theta_hNaP) / internal.beta_hNaP));
    var hNaP_tau = internal.tau_hNaP / Math.cosh((V - internal.theta_hNaP) / (2 * internal.beta_hNaP));
    var IBK = internal.gBK * mBK * (V - internal.vK);
    var IH = internal.gH * hH * (V - internal.vH);
    var IK = internal.gK * Math.pow((nK), (4)) * (V - internal.vK);
    var IL = internal.gL * (V - internal.vL);
    var ILVA = internal.gLVA * Math.pow((mLVA), (2)) * hLVA * (V - internal.vCa);
    var mHVA_inf = 1 / (1 + Math.exp((V - internal.theta_mHVA) / internal.beta_mHVA));
    var mHVK_inf = 1 / (1 + Math.exp((V - internal.theta_mHVK) / internal.beta_mHVK));
    var mLVA_inf = 1 / (1 + Math.exp((V - internal.theta_mLVA) / internal.beta_mLVA));
    var mLVA_tau = internal.tau_mLVA / Math.cosh((V - internal.theta_mLVA) / (2 * internal.beta_mLVA));
    var mNa_inf = 1 / (1 + Math.exp((V - internal.theta_mNa) / internal.beta_mNa));
    var mNaP_inf = 1 / (1 + Math.exp((V - internal.theta_mNaP) / internal.beta_mNaP));
    var nHVK_inf = 1 / (1 + Math.exp((V - internal.theta_nHVK) / internal.beta_nHVK));
    var nHVK_tau = 1000 / (1 + Math.exp(- (V + 35))) + 1000;
    var nK_Inf = 1 / (1 + Math.exp((V - internal.theta_nK) / internal.beta_nK));
    var nK_tau = internal.tau_nK / Math.cosh((V - internal.theta_nK) / (2 * internal.beta_nK));
    var p_mBK = 2.8999999999999999 + 6.2999999999999998 * Math.exp(- 360 * Ca);
    var s = - 25.300000000000001 + 107.5 * Math.exp(- 120 * Ca);
    var theta_mBK = - 20 + 59.200000000000003 * Math.exp(- 90 * Ca) + 96.700000000000003 * Math.exp(- 470 * Ca);
    dstatedt[4] = 0 + 1 * internal.compartment * ((hH_inf - hH) / hH_tau);
    dstatedt[6] = 0 + 1 * internal.compartment * ((hLVA_inf - hLVA) / hLVA_tau);
    dstatedt[3] = 0 + 1 * internal.compartment * ((hNaP_inf - hNaP) / hNaP_tau);
    dstatedt[5] = 0 + 1 * internal.compartment * ((mLVA_inf - mLVA) / mLVA_tau);
    dstatedt[8] = 0 + 1 * internal.compartment * ((nHVK_inf - nHVK) / nHVK_tau);
    dstatedt[2] = 0 + 1 * internal.compartment * ((nK_Inf - nK) / nK_tau);
    var f = 1 / (10 * (Math.exp(- (V + 100 - s) / 63.600000000000001) + Math.exp((- 150 + (V + 100 - s)) / 63.600000000000001))) - 5.2000000000000002;
    var IHVA = internal.gHVA * mHVA_inf * (V - internal.vCa);
    var IHVK = internal.gHVK * mHVK_inf * nHVK * (V - internal.vK);
    var INa = internal.gNa * (1 - nK) * Math.pow((mNa_inf), (3)) * (V - internal.vNa);
    var INaP = internal.gNaP * mNaP_inf * hNaP * (V - internal.vNa);
    var mBK_inf = 1 / (1 + Math.exp((V - theta_mBK) / internal.beta_mBK));
    dstatedt[1] = 0 + 1 * internal.compartment * ((internal.Ca0 - Ca) / internal.tau_Ca) - 1 * internal.compartment * (internal.Ca_buffer * 10 * (ILVA + IHVA) / (internal.Ca_z * internal.F * internal.d));
    dstatedt[0] = 0 - 1 * internal.compartment * ((INa + IK + ILVA + IH + INaP + IL + IHVA + IBK + IHVK) / internal.C);
    var mBK_tau = - (p_mBK - 1) * (f - 0.20000000000000001) / 0.80000000000000004 + internal.mBK_base;
    dstatedt[7] = 0 + 1 * internal.compartment * ((mBK_inf - mBK) / mBK_tau);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V", "Ca", "nK", "hNaP", "hH", "mLVA", "hLVA", "mBK", "nHVK"];
    this.metadata.internalOrder = {beta_hH: null, beta_hH_T: null, beta_hLVA: null, beta_hNaP: null, beta_mBK: null, beta_mHVA: null, beta_mHVK: null, beta_mLVA: null, beta_mNa: null, beta_mNaP: null, beta_nHVK: null, beta_nK: null, C: null, Ca_buffer: null, Ca_init: null, Ca_z: null, Ca0: null, compartment: null, d: null, delta_hH_T: null, F: null, gBK: null, gH: null, gHVA: null, gHVK: null, gK: null, gL: null, gLVA: null, gNa: null, gNaP: null, hH_init: null, hLVA_init: null, hNaP_init: null, initial_Ca: null, initial_hH: null, initial_hLVA: null, initial_hNaP: null, initial_mBK: null, initial_mLVA: null, initial_nHVK: null, initial_nK: null, initial_V: null, mBK_base: null, mBK_init: null, mLVA_init: null, nHVK_init: null, nK_init: null, tau_Ca: null, tau_hH_T: null, tau_hLVA: null, tau_hNaP: null, tau_mLVA: null, tau_nK: null, theta_hH: null, theta_hH_T: null, theta_hLVA: null, theta_hNaP: null, theta_mHVA: null, theta_mHVK: null, theta_mLVA: null, theta_mNa: null, theta_mNaP: null, theta_nHVK: null, theta_nK: null, V_init: null, vCa: null, vH: null, vK: null, vL: null, vNa: null};
    this.metadata.variableOrder = {V: null, Ca: null, nK: null, hNaP: null, hH: null, mLVA: null, hLVA: null, mBK: null, nHVK: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

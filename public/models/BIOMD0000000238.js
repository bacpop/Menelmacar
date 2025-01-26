export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.f2_drug = 0;
    internal.initial_BR = 0;
    internal.initial_M = 3.5;
    internal.initial_T = 38.784999999999997;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_T;
    state[2] = internal.initial_BR;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "AMT_dose", "c", "day_length", "delta_high_dose", "delta_T", "kinc", "km", "kR", "M_b", "Nf", "Ns", "pEf1", "pEf2", "pEf3", "pEs1", "pEs2", "pEs3", "pEtot", "T_a", "T_b", "t_day", "t_night", "t_prime", "tdose1", "tdose2", "tdose3", "Tf", "Ts"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.22291659999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMT_dose", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 3.4700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "day_length", internal, 86400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_high_dose", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_T", internal, 1.5700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kinc", internal, 0.0258, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km", internal, 1.1375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kR", internal, 5.3499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_b", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nf", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ns", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEf1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEf2", internal, 3.5699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEf3", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEs1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEs2", internal, 2.4300000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEs3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEtot", internal, 0.14399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_a", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_b", internal, 38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_day", internal, 17.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_night", internal, 6.7300000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_prime", internal, 45.119999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tdose1", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tdose2", internal, 72, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tdose3", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tf", internal, 0.36799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ts", internal, 2.4500000000000002, -Infinity, Infinity, false);
    internal.kb = internal.M_b / (internal.T_b - internal.T_a);
    internal.Kf = internal.Nf / internal.Tf;
    internal.Ks = internal.Ns / internal.Ts;
    internal.T_day = internal.T_b + internal.delta_T / 2;
    internal.T_night = internal.T_b - internal.delta_T / 2;
    internal.M_day = (internal.kb + internal.kinc * (internal.T_day - internal.T_b)) * (internal.T_day - internal.T_a);
    internal.M_night_baseline = (internal.kb + internal.kinc * (internal.T_night - internal.T_b)) * (internal.T_night - internal.T_a);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const T = state[1];
    const BR = state[2];
    var f_prime = internal.delta_high_dose * Math.pow((1 + Math.exp(- internal.alpha * (t - (internal.tdose1 + internal.t_prime)))), (- 1));
    var tprime = t * 3600 * 1 - Math.floor(t * 3600 * 1 / internal.day_length) * internal.day_length;
    var X1 = (t - internal.tdose1) / 24;
    var X2 = (t - internal.tdose2) / 24;
    var X3 = (t - internal.tdose3) / 24;
    var gNfTf1 = ((X1 > 0 ? Math.pow((internal.Kf), (internal.Nf)) / 6 * Math.exp(- internal.Kf * X1) * Math.pow((X1), (internal.Nf - 1)) : 0));
    var gNfTf2 = ((X2 > 0 ? Math.pow((internal.Kf), (internal.Nf)) / 6 * Math.exp(- internal.Kf * X2) * Math.pow((X2), (internal.Nf - 1)) : 0));
    var gNfTf3 = ((X3 > 0 ? Math.pow((internal.Kf), (internal.Nf)) / 6 * Math.exp(- internal.Kf * X3) * Math.pow((X3), (internal.Nf - 1)) : 0));
    var gNsTs1 = ((X1 > 0 ? Math.pow((internal.Ks), (internal.Ns)) / 6 * Math.exp(- internal.Ks * X1) * Math.pow((X1), (internal.Ns - 1)) : 0));
    var gNsTs2 = ((X2 > 0 ? Math.pow((internal.Ks), (internal.Ns)) / 6 * Math.exp(- internal.Ks * X2) * Math.pow((X2), (internal.Ns - 1)) : 0));
    var gNsTs3 = ((X3 > 0 ? Math.pow((internal.Ks), (internal.Ns)) / 6 * Math.exp(- internal.Ks * X3) * Math.pow((X3), (internal.Ns - 1)) : 0));
    var kxk = internal.kb + internal.kinc * (T - internal.T_b * (1 + internal.pEtot * BR)) + internal.f2_drug;
    dstatedt[1] = Math.pow((internal.c), (- 1)) * (M - kxk * (T - internal.T_a));
    var E_fast = internal.pEf2 * (gNfTf1 + gNfTf2 + gNfTf3);
    var E_slow = internal.AMT_dose * internal.pEs2 * (gNsTs1 + gNsTs2 + gNsTs3);
    var M_night = (1 - f_prime) * internal.M_night_baseline + f_prime * internal.M_day;
    dstatedt[2] = f_prime * (E_slow + E_fast) * (1 - BR) - internal.kR * BR;
    var M_c = (((tprime / 3600 >= internal.t_night && tprime / 3600 < internal.t_day) ? M_night : internal.M_day));
    dstatedt[0] = - internal.km * (M - M_c);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "T", "BR"];
    this.metadata.internalOrder = {alpha: null, AMT_dose: null, c: null, COMpartment: null, day_length: null, delta_high_dose: null, delta_T: null, f2_drug: null, initial_BR: null, initial_M: null, initial_T: null, kb: null, Kf: null, kinc: null, km: null, kR: null, Ks: null, M_b: null, M_day: null, M_night_baseline: null, Nf: null, Ns: null, pEf1: null, pEf2: null, pEf3: null, pEs1: null, pEs2: null, pEs3: null, pEtot: null, T_a: null, T_b: null, t_day: null, T_day: null, t_night: null, T_night: null, t_prime: null, tdose1: null, tdose2: null, tdose3: null, Tf: null, Ts: null};
    this.metadata.variableOrder = {M: null, T: null, BR: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

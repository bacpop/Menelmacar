export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 7.6399999999999998e-13;
    internal.ER = 2.8000000000000002e-13;
    internal.initial_n = 0.00123;
    internal.initial_V = - 60.899999999999999;
    internal.Pcaer = 0.105;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Ca_cyt;
    state[1] = internal.initial_Ca_er;
    state[2] = internal.initial_IP3_cyt;
    state[3] = internal.initial_Na_cyt;
    state[4] = internal.initial_ATP_cyt;
    state[5] = internal.initial_ADP_cyt;
    state[6] = internal.initial_n;
    state[7] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "ADP_cyt_init", "ATP_cyt_init", "b", "b_1", "b_2", "b_3", "b_4", "b_6", "b5_ast", "c", "Ca_cyt_init", "Ca_ec", "Ca_er_init", "Cm", "F", "f_1", "f_2", "f_3", "f_4", "f_6", "f5_ast", "fer", "fi", "gm_CRAN", "gmkatp", "gmkca", "gmKDr", "gmna", "gmvca", "gnaca", "IP3_cyt_init", "K_cyt", "K_ec", "kadp", "katp", "katpca", "Kcah", "Kcap", "Kcar", "Kcarp", "Kdd", "kdip", "kip", "Kip3", "Kipca", "Kkca", "Knaca", "Krca", "ksg", "Ksup", "Ktd", "Ktt", "Na_cyt_init", "Na_ec", "P", "Pip3", "Pleak", "Pmcap", "Pnak", "Sn", "TV", "V_CRAN", "Vcah", "Vn", "Vtau"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADP_cyt_init", internal, 3067.9000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_cyt_init", internal, 932.10000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_3", internal, 1.7200000000000001e-17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_4", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_6", internal, 5.9999999999999997e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b5_ast", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_cyt_init", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ec", internal, 2600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_er_init", internal, 22.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 6158, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96485000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_1", internal, 2.5000000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_3", internal, 0.17199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_4", internal, 1.4999999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_6", internal, 11.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f5_ast", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fer", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fi", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm_CRAN", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmkatp", internal, 24000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmkca", internal, 130, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmKDr", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmna", internal, 1200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmvca", internal, 770, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gnaca", internal, 271, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_cyt_init", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_cyt", internal, 132400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_ec", internal, 8000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadp", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "katp", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "katpca", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcah", internal, 9.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcap", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcar", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcarp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdd", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdip", internal, 4.0000000000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kip", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kip3", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kipca", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kkca", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knaca", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Krca", internal, 0.076999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksg", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksup", internal, 150400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ktd", internal, 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ktt", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Na_cyt_init", internal, 9858, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Na_ec", internal, 140000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P", internal, 4950, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pip3", internal, 1.2e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pleak", internal, 9.9999999999999998e-17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pmcap", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pnak", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sn", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TV", internal, 26.73, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_CRAN", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcah", internal, - 19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vn", internal, - 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vtau", internal, - 75, -Infinity, Infinity, false);
    internal.B3 = internal.b_3 * Math.pow((internal.Na_ec), (3));
    internal.B4 = internal.b_4 * internal.P;
    internal.B6 = internal.b_6 * Math.pow((internal.Ksup), (2));
    internal.F4 = internal.f_4 * Math.pow((internal.K_ec), (2));
    internal.initial_ADP_cyt = internal.ADP_cyt_init;
    internal.initial_ATP_cyt = internal.ATP_cyt_init;
    internal.initial_Ca_cyt = internal.Ca_cyt_init;
    internal.initial_Ca_er = internal.Ca_er_init;
    internal.initial_IP3_cyt = internal.IP3_cyt_init;
    internal.initial_Na_cyt = internal.Na_cyt_init;
    internal.Vk = internal.TV * Math.log(internal.K_ec / internal.K_cyt);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ca_cyt = state[0];
    const Ca_er = state[1];
    const IP3_cyt = state[2];
    const Na_cyt = state[3];
    const ATP_cyt = state[4];
    const ADP_cyt = state[5];
    const n = state[6];
    const V = state[7];
    dstatedt[5] = 0;
    var b_5 = internal.b5_ast * Math.exp(- V / (2 * internal.TV));
    var B2 = internal.b_2 * ADP_cyt;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * internal.kip * Math.pow((Ca_cyt), (2)) / (Math.pow((Ca_cyt), (2)) + Math.pow((internal.Kipca), (2))) - 1 * internal.Cytoplasm * internal.kdip * IP3_cyt;
    var f_5 = internal.f5_ast * Math.exp(V / (2 * internal.TV));
    var f_Ca = Math.pow((Ca_cyt), (4)) / (Math.pow((Ca_cyt), (4)) + Math.pow((internal.Kkca), (4)));
    var f_CRAN = - internal.gm_CRAN / (1 + Math.exp((Ca_er - internal.Kcar) / 3));
    var F1 = internal.f_1 * Math.pow((Na_cyt), (3));
    var I_CaPump = internal.Pmcap * Math.pow((Ca_cyt), (2)) / (Math.pow((internal.Kcap), (2)) + Math.pow((Ca_cyt), (2)));
    var Jerp = internal.Pcaer * Math.pow((Ca_cyt), (2)) / (Math.pow((Ca_cyt), (2)) + Math.pow((internal.Kcarp), (2)));
    var n_infinity = 1 / (1 + Math.exp((internal.Vn - V) / internal.Sn));
    var O_infinity = Ca_cyt * Math.pow((IP3_cyt), (3)) / ((Ca_cyt + internal.Krca) * (Math.pow((IP3_cyt), (3)) + Math.pow((internal.Kip3), (3))));
    var Okatp = (0.080000000000000002 * (1 + 0.33000000000000002 * (ADP_cyt / internal.Kdd)) + 0.89000000000000001 * Math.pow((0.16500000000000001 * (ADP_cyt / internal.Kdd)), (2))) / (Math.pow((1 + 0.16500000000000001 * (ADP_cyt / internal.Kdd)), (2)) * (1 + 0.13500000000000001 * (ADP_cyt / internal.Ktd) + 0.050000000000000003 * (ATP_cyt / internal.Ktt)));
    var p_CRAN = V - internal.V_CRAN;
    var pna = 1 / (1 + Math.exp((104 + V) / 8));
    var pvca = 1 / (1 + Math.exp((internal.Vcah - V) / internal.Kcah));
    var tau_n = internal.c / (Math.exp((V - internal.Vtau) / internal.a) + Math.exp((internal.Vtau - V) / internal.b));
    var Vca = internal.TV / 2 * Math.log(internal.Ca_ec / Ca_cyt);
    var Vna = internal.TV * Math.log(internal.Na_ec / Na_cyt);
    var Vnaca = internal.TV * (3 * Math.log(internal.Na_ec / Na_cyt) - Math.log(internal.Ca_ec / Ca_cyt));
    dstatedt[6] = (n_infinity - n) / tau_n;
    var F5 = f_5 * ATP_cyt;
    var I_CRAN = f_CRAN * p_CRAN * (V - Vna);
    var I_KATP = internal.gmkatp * Okatp * (V - internal.Vk);
    var I_KCa = internal.gmkca * f_Ca * (V - internal.Vk);
    var I_KDr = internal.gmKDr * n * (V - internal.Vk);
    var I_Na = internal.gmna * pna * (V - Vna);
    var I_NaCa = internal.gnaca * Math.pow((Ca_cyt), (5)) * (V - Vnaca) / (Math.pow((Ca_cyt), (5)) + Math.pow((internal.Knaca), (5)));
    var I_Vca = internal.gmvca * pvca * (V - Vca);
    var Jout = (internal.Pleak + internal.Pip3 * O_infinity) * (Ca_er - Ca_cyt);
    var D = internal.f_2 * internal.f_3 * internal.F4 * F5 * internal.f_6 + internal.b_1 * internal.f_3 * internal.F4 * F5 * internal.f_6 + internal.b_1 * B2 * internal.F4 * F5 * internal.f_6 + internal.b_1 * B2 * internal.B3 * F5 * internal.f_6 + internal.b_1 * B2 * internal.B3 * internal.B4 * internal.f_6 + internal.b_1 * B2 * internal.B3 * internal.B4 * b_5;
    dstatedt[0] = 0 + 1 * internal.fi * - I_Vca / (2 * internal.F) + 1 * internal.fi * 2 * I_NaCa / (2 * internal.F) - 1 * internal.fi * 2 * I_CaPump / (2 * internal.F) - 0.01 * internal.Cytoplasm * Jerp + 0.01 * Jout - 1 * internal.Cytoplasm * internal.ksg * Ca_cyt;
    dstatedt[1] = 0 + 0.029999999999999999 * internal.Cytoplasm * Jerp - 0.029999999999999999 * Jout;
    var I_NaK = internal.Pnak * (F1 * internal.f_2 * internal.f_3 * internal.F4 * F5 * internal.f_6 - internal.b_1 * B2 * internal.B3 * internal.B4 * b_5 * internal.B6) / D;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * internal.kadp * ADP_cyt - 1 * I_NaK / internal.F - 1 * I_CaPump / internal.F - 1 * internal.Cytoplasm * Jerp / 2 - 1 * internal.Cytoplasm * internal.katpca * Ca_cyt * ATP_cyt - 1 * internal.Cytoplasm * internal.katp * ATP_cyt;
    dstatedt[3] = 0 - 1 * 3 * I_NaCa / internal.F - 1 * 3 * I_NaK / internal.F + 1 * - I_Na / internal.F + 1 * - I_CRAN / internal.F;
    dstatedt[7] = (0 - (I_Vca + I_CaPump + I_NaCa + I_CRAN + I_Na + I_NaK + I_KDr + I_KCa + I_KATP)) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ca_cyt", "Ca_er", "IP3_cyt", "Na_cyt", "ATP_cyt", "ADP_cyt", "n", "V"];
    this.metadata.internalOrder = {a: null, ADP_cyt_init: null, ATP_cyt_init: null, b: null, b_1: null, b_2: null, b_3: null, b_4: null, b_6: null, B3: null, B4: null, b5_ast: null, B6: null, c: null, Ca_cyt_init: null, Ca_ec: null, Ca_er_init: null, Cm: null, Cytoplasm: null, ER: null, F: null, f_1: null, f_2: null, f_3: null, f_4: null, f_6: null, F4: null, f5_ast: null, fer: null, fi: null, gm_CRAN: null, gmkatp: null, gmkca: null, gmKDr: null, gmna: null, gmvca: null, gnaca: null, initial_ADP_cyt: null, initial_ATP_cyt: null, initial_Ca_cyt: null, initial_Ca_er: null, initial_IP3_cyt: null, initial_n: null, initial_Na_cyt: null, initial_V: null, IP3_cyt_init: null, K_cyt: null, K_ec: null, kadp: null, katp: null, katpca: null, Kcah: null, Kcap: null, Kcar: null, Kcarp: null, Kdd: null, kdip: null, kip: null, Kip3: null, Kipca: null, Kkca: null, Knaca: null, Krca: null, ksg: null, Ksup: null, Ktd: null, Ktt: null, Na_cyt_init: null, Na_ec: null, P: null, Pcaer: null, Pip3: null, Pleak: null, Pmcap: null, Pnak: null, Sn: null, TV: null, V_CRAN: null, Vcah: null, Vk: null, Vn: null, Vtau: null};
    this.metadata.variableOrder = {Ca_cyt: null, Ca_er: null, IP3_cyt: null, Na_cyt: null, ATP_cyt: null, ADP_cyt: null, n: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

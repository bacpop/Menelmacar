export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ER = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_U;
    state[1] = internal.initial_A6;
    state[2] = internal.initial_b;
    state[3] = internal.initial_Btot;
    state[4] = internal.initial_A4;
    state[5] = internal.initial_c;
    state[6] = internal.initial_C;
    state[7] = internal.initial_g;
    state[8] = internal.initial_G;
    state[9] = internal.initial_Ep;
    state[10] = internal.initial_x;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A4_star", "A6_star", "A6tot_norm", "alphaA4", "alphaA6", "alphaI", "alphaX", "b_star", "betaI", "Btot_star", "c_star", "C_star", "delta", "Ep_star", "etaC", "Etot_norm", "f", "fi", "g_star", "G_star", "gamma", "Ip_star", "KA4", "KA4c", "KA4g", "KA6", "Kb4", "Kb6", "KBA6", "KBI", "KBP", "KBU", "KC", "Kc4", "kcl", "kdA4", "kdA6", "kdb", "kdB", "kdc", "kdC", "Kdeph", "kdeph1", "kdeph2", "kdg", "kdG", "kdx", "KE", "KII", "KOire1", "KOperk", "kph", "Kph", "ksp", "ksU", "ktC", "ktG", "Kth4", "Kth4c", "Kth4g", "Kth6", "KUI", "KUU", "Kx", "KX", "muA4", "n", "nA", "nA4", "nA6", "Stress", "U_star", "x_star", "xtot_norm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A4_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A6_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A6tot_norm", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaA4", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaA6", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaI", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaX", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "betaI", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Btot_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ep_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "etaC", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Etot_norm", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fi", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ip_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA4", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA4c", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA4g", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KA6", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb6", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBA6", internal, 1.5999999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBI", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBP", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBU", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KC", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc4", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcl", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdA4", internal, 0.0038400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdA6", internal, 0.0038400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdb", internal, 0.001284, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdB", internal, 0.00025139999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdc", internal, 0.0039300000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdC", internal, 0.0054780000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdeph", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeph1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeph2", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdg", internal, 0.0034680000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdG", internal, 0.003852, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdx", internal, 0.0065459999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KE", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KII", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KOire1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KOperk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kph", internal, 0.0065100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kph", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksp", internal, 0.0078499999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksU", internal, 0.89000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktC", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktG", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kth4", internal, 0.16700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kth4c", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kth4g", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kth6", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KUI", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KUU", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KX", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "muA4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nA", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nA4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nA6", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stress", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_star", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xtot_norm", internal, 16, -Infinity, Infinity, false);
    internal.A4_init = internal.A4_star;
    internal.A6_init = internal.A6_star;
    internal.b_init = internal.b_star;
    internal.Btot_init = internal.Btot_star;
    internal.c_init = internal.c_star;
    internal.C_init = internal.C_star;
    internal.Ep_init = internal.Ep_star;
    internal.g_init = internal.g_star;
    internal.G_init = internal.G_star;
    internal.KUP = (1 / internal.f - 1) * (internal.U_star / (1 + internal.Btot_star / internal.KBP * (1 / (1 + internal.U_star / internal.KBU))));
    internal.U_init = internal.U_star;
    internal.x_init = internal.x_star;
    internal.initial_A4 = internal.A4_init;
    internal.initial_A6 = internal.A6_init;
    internal.initial_b = internal.b_init;
    internal.initial_Btot = internal.Btot_init;
    internal.initial_c = internal.c_init;
    internal.initial_C = internal.C_init;
    internal.initial_Ep = internal.Ep_init;
    internal.initial_g = internal.g_init;
    internal.initial_G = internal.G_init;
    internal.initial_U = internal.U_init;
    internal.initial_x = internal.x_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const A6 = state[1];
    const b = state[2];
    const Btot = state[3];
    const A4 = state[4];
    const c = state[5];
    const C = state[6];
    const g = state[7];
    const G = state[8];
    const Ep = state[9];
    const x = state[10];
    var B = Btot / (1 + U / internal.KBU);
    dstatedt[4] = 0 + 1 * internal.ER * (internal.kdA4 * internal.A4_star + internal.gamma * (U - internal.U_star) * Ep) - 1 * internal.ER * internal.kdA4 * A4;
    dstatedt[3] = 0 - 1 * internal.ER * internal.kdB * Btot + 1 * internal.ER * (internal.kdB * internal.Btot_star / internal.b_star * b);
    dstatedt[5] = 0 + 1 * internal.ER * (internal.kdc * internal.c_star + internal.muA4 * (1 + internal.Kc4 * A6) * (Math.pow((A4 - internal.A4_star), (internal.n)) / (Math.pow((A4 - internal.A4_star), (internal.n)) + Math.pow((internal.KA4c), (internal.n)) * Math.pow((1 + internal.Kth4c * A6), (internal.n))))) - 1 * internal.ER * internal.kdc * c;
    dstatedt[6] = 0 + 1 * internal.ER * ((internal.kdC * internal.C_star / internal.c_star + internal.ktC * (Ep - internal.Ep_star)) * c) - 1 * internal.ER * internal.kdC * C;
    dstatedt[7] = 0 + 1 * internal.ER * (internal.kdg * internal.g_star + internal.etaC * ((A4 - internal.A4_star + internal.KA4g * (A4 - internal.A4_star) * (C - internal.C_star)) / (A4 - internal.A4_star + internal.Kth4g * (A4 - internal.A4_star) * (C - internal.C_star) + internal.KC))) - 1 * internal.ER * internal.kdg * g;
    dstatedt[8] = 0 + 1 * internal.ER * ((internal.kdG * internal.G_star / internal.g_star + internal.ktG * (Ep - internal.Ep_star)) * g) - 1 * internal.ER * internal.kdG * G;
    dstatedt[1] = 0 - 1 * internal.ER * internal.kdA6 * A6 + 1 * internal.ER * (internal.kdA6 * internal.A6_star + internal.kcl * (U - internal.U_star) * ((internal.A6tot_norm - A6) / (1 + B / internal.KBA6)));
    var Ip = internal.KOire1 * (1 / internal.fi) * (U / (internal.KUI + internal.KUI / internal.KBI * B + U));
    var Pp = internal.KOperk * (1 / internal.f) * (U / (internal.KUP + internal.KUP / internal.KBP * B + U));
    dstatedt[2] = 0 + 1 * internal.ER * (internal.kdb * ((1 + internal.alphaI * (Ip - internal.Ip_star)) / (1 + internal.betaI * (Ip - internal.Ip_star))) * internal.b_star + internal.alphaA6 * (1 + internal.Kb6 * A4) * (Math.pow((A6 - internal.A6_star), (internal.nA6)) / (Math.pow((A6 - internal.A6_star), (internal.nA6)) + Math.pow((internal.KA6), (internal.nA6)) * (1 + internal.Kth6 * Math.pow((A4), (internal.nA))))) + internal.alphaA4 * (1 + internal.Kb4 * A6) * (Math.pow((A4 - internal.A4_star), (internal.nA4)) / (Math.pow((A4 - internal.A4_star), (internal.nA4)) + Math.pow((internal.KA4), (internal.nA4)) * Math.pow((1 + internal.Kth4 * A6), (internal.nA4)))) + internal.alphaX * ((x - internal.x_star) / (x - internal.x_star + internal.KX))) - 1 * internal.ER * (internal.kdb * ((1 + internal.alphaI * (Ip - internal.Ip_star)) / (1 + internal.betaI * (Ip - internal.Ip_star))) * b);
    dstatedt[9] = 0 - 1 * internal.ER * ((internal.kdeph1 + internal.kdeph2 * (G - internal.G_star)) * (Ep / (internal.Kdeph + Ep))) + 1 * internal.ER * (internal.kph * ((internal.Etot_norm - Ep) * Pp / (internal.Kph + (internal.Etot_norm - Ep))));
    dstatedt[0] = 0 - 1 * internal.ER * (internal.delta * (U / (1 + internal.KII * (Ip - internal.Ip_star))) * B) + 1 * internal.ER * ((internal.ksU / (1 + internal.KUI * (Ip - internal.Ip_star)) + internal.Stress) / (1 + Ep / internal.KE + Math.pow((U / internal.KUU), (internal.n))));
    dstatedt[10] = 0 - 1 * internal.ER * internal.kdx * x + 1 * internal.ER * (internal.ksp * Ip * ((internal.xtot_norm - x) / (internal.Kx + internal.xtot_norm - x)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "A6", "b", "Btot", "A4", "c", "C", "g", "G", "Ep", "x"];
    this.metadata.internalOrder = {A4_init: null, A4_star: null, A6_init: null, A6_star: null, A6tot_norm: null, alphaA4: null, alphaA6: null, alphaI: null, alphaX: null, b_init: null, b_star: null, betaI: null, Btot_init: null, Btot_star: null, c_init: null, C_init: null, c_star: null, C_star: null, delta: null, Ep_init: null, Ep_star: null, ER: null, etaC: null, Etot_norm: null, f: null, fi: null, g_init: null, G_init: null, g_star: null, G_star: null, gamma: null, initial_A4: null, initial_A6: null, initial_b: null, initial_Btot: null, initial_c: null, initial_C: null, initial_Ep: null, initial_g: null, initial_G: null, initial_U: null, initial_x: null, Ip_star: null, KA4: null, KA4c: null, KA4g: null, KA6: null, Kb4: null, Kb6: null, KBA6: null, KBI: null, KBP: null, KBU: null, KC: null, Kc4: null, kcl: null, kdA4: null, kdA6: null, kdb: null, kdB: null, kdc: null, kdC: null, Kdeph: null, kdeph1: null, kdeph2: null, kdg: null, kdG: null, kdx: null, KE: null, KII: null, KOire1: null, KOperk: null, kph: null, Kph: null, ksp: null, ksU: null, ktC: null, ktG: null, Kth4: null, Kth4c: null, Kth4g: null, Kth6: null, KUI: null, KUP: null, KUU: null, Kx: null, KX: null, muA4: null, n: null, nA: null, nA4: null, nA6: null, Stress: null, U_init: null, U_star: null, x_init: null, x_star: null, xtot_norm: null};
    this.metadata.variableOrder = {U: null, A6: null, b: null, Btot: null, A4: null, c: null, C: null, g: null, G: null, Ep: null, x: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

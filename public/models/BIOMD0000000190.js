export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.initial_Antz = 0.57458949283240501;
    internal.initial_Vmaxodc = 1.2790567184444599;
    internal.initial_Vmaxsamdc = 0.36746585680563898;
    internal.initial_Vmaxssat = 0.67729851012502496;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(15).fill(0);
    state[0] = internal.initial_SAM;
    state[1] = internal.initial_A;
    state[2] = internal.initial_P;
    state[3] = internal.initial_S;
    state[4] = internal.initial_D;
    state[5] = internal.initial_aS;
    state[6] = internal.initial_aD;
    state[7] = internal.initial_Met;
    state[8] = internal.initial_ORN;
    state[9] = internal.initial_AcCoA;
    state[10] = internal.initial_CoA;
    state[11] = internal.initial_Vmaxodc;
    state[12] = internal.initial_Vmaxssat;
    state[13] = internal.initial_Vmaxsamdc;
    state[14] = internal.initial_Antz;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "AcCoA_init", "aD_init", "aS_init", "C", "CoA_init", "D_init", "Kadefflux", "Kapsamdc", "KaSpds", "Kaspms", "Kdantz", "Kdodc", "Kdsamdc", "Kdspms", "Kdssat", "Keq", "Kiasamdc", "Kiaspds", "Kiaspms", "Kidspds", "Kimetmat", "Kipodc", "Kissamdc", "Kisspms", "Kmaccoassat", "Kmadpao", "Kmaspao", "Kmcoassat", "Kmdpao", "Kmdssat", "Kmmat", "Kmodc", "Kmsamdc", "Kmspao", "Kmsssat", "Kpefflux", "Kpspds", "Ksantz", "Ksodc", "Kssamdc", "Ksssat", "Met_init", "ORN_init", "P_init", "R", "S_init", "SAM_init", "Vmmat", "Vmpao", "Vmspds", "Vmspms"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 39.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aD_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aS_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 4.4400000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoA_init", internal, 160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kadefflux", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kapsamdc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KaSpds", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaspms", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdantz", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdodc", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdsamdc", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdspms", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdssat", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiasamdc", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiaspds", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiaspms", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kidspds", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kimetmat", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kipodc", internal, 1300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kissamdc", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kisspms", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmaccoassat", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmadpao", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmaspao", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmcoassat", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmdpao", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmdssat", internal, 130, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmmat", internal, 41, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmodc", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmsamdc", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmspao", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmsssat", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpefflux", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpspds", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksantz", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksodc", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kssamdc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksssat", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Met_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ORN_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SAM_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmmat", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmpao", internal, 10.35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmspds", internal, 10.949999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmspms", internal, 3.23, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_aD = internal.aD_init;
    internal.initial_aS = internal.aS_init;
    internal.initial_CoA = internal.CoA_init;
    internal.initial_D = internal.D_init;
    internal.initial_Met = internal.Met_init;
    internal.initial_ORN = internal.ORN_init;
    internal.initial_P = internal.P_init;
    internal.initial_S = internal.S_init;
    internal.initial_SAM = internal.SAM_init;
    internal.Kaccoa = internal.R;
    internal.Kcoa = 3 * internal.R;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const SAM = state[0];
    const A = state[1];
    const P = state[2];
    const S = state[3];
    const D = state[4];
    const aS = state[5];
    const aD = state[6];
    const Met = state[7];
    const ORN = state[8];
    const AcCoA = state[9];
    const CoA = state[10];
    const Vmaxodc = state[11];
    const Vmaxssat = state[12];
    const Vmaxsamdc = state[13];
    const Antz = state[14];
    dstatedt[9] = 0;
    dstatedt[10] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[1] = 0 + 1 * internal.cytosol * (Vmaxsamdc / (1 + S / internal.Kissamdc) * SAM / (internal.Kmsamdc * (1 + internal.Kapsamdc / P + A / internal.Kiasamdc) + SAM)) - 1 * internal.cytosol * (internal.Vmspds * A * P / (internal.Kiaspds * internal.Kpspds * (1 + D / internal.Kidspds) + internal.Kpspds * A + internal.KaSpds * (1 + D / internal.Kidspds) * P + A * P)) - 1 * internal.cytosol * (internal.Vmspms * A * D / (internal.Kiaspms * internal.Kdspms * (1 + S / internal.Kisspms) + internal.Kdspms * A + internal.Kaspms * (1 + S / internal.Kisspms) * D + A * D));
    dstatedt[6] = 0 + 1 * internal.cytosol * (Vmaxssat * D * AcCoA / (internal.Kmdssat * (1 + S / internal.Kmsssat) * internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) + internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) * D + internal.Kmdssat * (1 + S / internal.Kmsssat) * AcCoA + D * AcCoA)) - 1 * internal.cytosol * (internal.Vmpao * aD / (internal.Kmadpao * (1 + aD / internal.Kmadpao + aS / internal.Kmaspao + D / internal.Kmdpao + S / internal.Kmspao))) - 1 * internal.cytosol * internal.Kadefflux * aD;
    dstatedt[14] = internal.Ksantz * (1 - 1 / (1 + internal.Keq * 0.01 * (D + S))) - internal.Kdantz * Antz;
    dstatedt[5] = 0 + 1 * internal.cytosol * (1 / internal.C * Vmaxssat * S * AcCoA / (internal.Kmsssat * (1 + D / internal.Kmdssat) * internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) + internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) * S + internal.Kmsssat * (1 + D / internal.Kmdssat) * AcCoA + S * AcCoA)) - 1 * internal.cytosol * (internal.Vmpao * aS / (internal.Kmaspao * (1 + aD / internal.Kmadpao + aS / internal.Kmaspao + D / internal.Kmdpao + S / internal.Kmspao)));
    dstatedt[4] = 0 - 1 * internal.cytosol * (Vmaxssat * D * AcCoA / (internal.Kmdssat * (1 + S / internal.Kmsssat) * internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) + internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) * D + internal.Kmdssat * (1 + S / internal.Kmsssat) * AcCoA + D * AcCoA)) + 1 * internal.cytosol * (internal.Vmpao * aS / (internal.Kmaspao * (1 + aD / internal.Kmadpao + aS / internal.Kmaspao + D / internal.Kmdpao + S / internal.Kmspao))) + 1 * internal.cytosol * (internal.Vmspds * A * P / (internal.Kiaspds * internal.Kpspds * (1 + D / internal.Kidspds) + internal.Kpspds * A + internal.KaSpds * (1 + D / internal.Kidspds) * P + A * P)) - 1 * internal.cytosol * (internal.Vmspms * A * D / (internal.Kiaspms * internal.Kdspms * (1 + S / internal.Kisspms) + internal.Kdspms * A + internal.Kaspms * (1 + S / internal.Kisspms) * D + A * D));
    dstatedt[2] = 0 + 1 * internal.cytosol * (Vmaxodc * ORN / (internal.Kmodc * (1 + P / internal.Kipodc) + ORN)) + 1 * internal.cytosol * (internal.Vmpao * aD / (internal.Kmadpao * (1 + aD / internal.Kmadpao + aS / internal.Kmaspao + D / internal.Kmdpao + S / internal.Kmspao))) - 1 * internal.cytosol * (internal.Vmspds * A * P / (internal.Kiaspds * internal.Kpspds * (1 + D / internal.Kidspds) + internal.Kpspds * A + internal.KaSpds * (1 + D / internal.Kidspds) * P + A * P)) - 1 * internal.cytosol * internal.Kpefflux * P;
    dstatedt[3] = 0 - 1 * internal.cytosol * (1 / internal.C * Vmaxssat * S * AcCoA / (internal.Kmsssat * (1 + D / internal.Kmdssat) * internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) + internal.Kmaccoassat * (1 + CoA / internal.Kmcoassat) * S + internal.Kmsssat * (1 + D / internal.Kmdssat) * AcCoA + S * AcCoA)) + 1 * internal.cytosol * (internal.Vmspms * A * D / (internal.Kiaspms * internal.Kdspms * (1 + S / internal.Kisspms) + internal.Kdspms * A + internal.Kaspms * (1 + S / internal.Kisspms) * D + A * D));
    dstatedt[0] = 0 - 1 * internal.cytosol * (Vmaxsamdc / (1 + S / internal.Kissamdc) * SAM / (internal.Kmsamdc * (1 + internal.Kapsamdc / P + A / internal.Kiasamdc) + SAM)) + 1 * internal.cytosol * (internal.Vmmat / (1 + internal.Kmmat / Met * (1 + SAM / internal.Kimetmat)));
    dstatedt[11] = internal.Ksodc / (1 + internal.Keq * (D + S)) - internal.Kdodc * Antz * Vmaxodc;
    dstatedt[13] = internal.Kssamdc * (1 / (1 + internal.Keq * (D + S))) - internal.Kdsamdc * Vmaxsamdc;
    dstatedt[12] = internal.Ksssat * (1 - 1 / (1 + internal.Keq * (D + S))) - internal.Kdssat * (1 / (1 + internal.Keq * (D + S))) * Vmaxssat;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "SAM", "A", "P", "S", "D", "aS", "aD", "Met", "ORN", "AcCoA", "CoA", "Vmaxodc", "Vmaxssat", "Vmaxsamdc", "Antz"];
    this.metadata.internalOrder = {A_init: null, AcCoA_init: null, aD_init: null, aS_init: null, C: null, CoA_init: null, cytosol: null, D_init: null, initial_A: null, initial_AcCoA: null, initial_aD: null, initial_Antz: null, initial_aS: null, initial_CoA: null, initial_D: null, initial_Met: null, initial_ORN: null, initial_P: null, initial_S: null, initial_SAM: null, initial_Vmaxodc: null, initial_Vmaxsamdc: null, initial_Vmaxssat: null, Kaccoa: null, Kadefflux: null, Kapsamdc: null, KaSpds: null, Kaspms: null, Kcoa: null, Kdantz: null, Kdodc: null, Kdsamdc: null, Kdspms: null, Kdssat: null, Keq: null, Kiasamdc: null, Kiaspds: null, Kiaspms: null, Kidspds: null, Kimetmat: null, Kipodc: null, Kissamdc: null, Kisspms: null, Kmaccoassat: null, Kmadpao: null, Kmaspao: null, Kmcoassat: null, Kmdpao: null, Kmdssat: null, Kmmat: null, Kmodc: null, Kmsamdc: null, Kmspao: null, Kmsssat: null, Kpefflux: null, Kpspds: null, Ksantz: null, Ksodc: null, Kssamdc: null, Ksssat: null, Met_init: null, ORN_init: null, P_init: null, R: null, S_init: null, SAM_init: null, Vmmat: null, Vmpao: null, Vmspds: null, Vmspms: null};
    this.metadata.variableOrder = {SAM: null, A: null, P: null, S: null, D: null, aS: null, aD: null, Met: null, ORN: null, AcCoA: null, CoA: null, Vmaxodc: null, Vmaxssat: null, Vmaxsamdc: null, Antz: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

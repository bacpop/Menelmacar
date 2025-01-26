export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.Endoplasmic_Reticulum = 1;
    internal.K1 = 5;
    internal.K2 = 0.80000000000000004;
    internal.K3 = 5;
    internal.Kch = 4100;
    internal.Kin = 300;
    internal.Kleak = 0.050000000000000003;
    internal.Km = 0.0062500000000000003;
    internal.Kminus = 0.01;
    internal.Kout = 125;
    internal.Kplus = 0.10000000000000001;
    internal.Kpump = 20;
    internal.Mitochondria = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Ca_cyt;
    state[1] = internal.initial_CaER;
    state[2] = internal.initial_CaM;
    state[3] = internal.initial_CaPr;
    state[4] = internal.initial_Pr;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_cyt_init", "CaER_init", "CaM_init", "CaPr_init", "Pr_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaPr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pr_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ca_cyt = internal.Ca_cyt_init;
    internal.initial_CaER = internal.CaER_init;
    internal.initial_CaM = internal.CaM_init;
    internal.initial_CaPr = internal.CaPr_init;
    internal.initial_Pr = internal.Pr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ca_cyt = state[0];
    const CaER = state[1];
    const CaM = state[2];
    const CaPr = state[3];
    const Pr = state[4];
    dstatedt[0] = 0 + 1 * internal.Cytosol * (internal.Kch * Math.pow((Ca_cyt), (2)) * (CaER - Ca_cyt) / (Math.pow((internal.K1), (2)) + Math.pow((Ca_cyt), (2)))) + 1 * internal.Cytosol * internal.Kleak * (CaER - Ca_cyt) - 1 * internal.Endoplasmic_Reticulum * internal.Kpump * Ca_cyt + 1 * internal.Cytosol * CaM * (internal.Kout * Math.pow((Ca_cyt), (2)) / (Math.pow((internal.K3), (2)) + Math.pow((Ca_cyt), (2))) + internal.Km) - 1 * internal.Mitochondria * (internal.Kin * Math.pow((Ca_cyt), (8)) / (Math.pow((internal.K2), (8)) + Math.pow((Ca_cyt), (8)))) + 1 * internal.Cytosol * internal.Kminus * CaPr - 1 * internal.Cytosol * internal.Kplus * Ca_cyt * Pr;
    dstatedt[1] = 0 - 0.25 * internal.Cytosol * (internal.Kch * Math.pow((Ca_cyt), (2)) * (CaER - Ca_cyt) / (Math.pow((internal.K1), (2)) + Math.pow((Ca_cyt), (2)))) - 0.25 * internal.Cytosol * internal.Kleak * (CaER - Ca_cyt) + 0.25 * internal.Endoplasmic_Reticulum * internal.Kpump * Ca_cyt;
    dstatedt[2] = 0 - 0.25 * internal.Cytosol * CaM * (internal.Kout * Math.pow((Ca_cyt), (2)) / (Math.pow((internal.K3), (2)) + Math.pow((Ca_cyt), (2))) + internal.Km) + 0.25 * internal.Mitochondria * (internal.Kin * Math.pow((Ca_cyt), (8)) / (Math.pow((internal.K2), (8)) + Math.pow((Ca_cyt), (8))));
    dstatedt[3] = 0 - 1 * internal.Cytosol * internal.Kminus * CaPr + 1 * internal.Cytosol * internal.Kplus * Ca_cyt * Pr;
    dstatedt[4] = 0 + 1 * internal.Cytosol * internal.Kminus * CaPr - 1 * internal.Cytosol * internal.Kplus * Ca_cyt * Pr;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ca_cyt", "CaER", "CaM", "CaPr", "Pr"];
    this.metadata.internalOrder = {Ca_cyt_init: null, CaER_init: null, CaM_init: null, CaPr_init: null, Cytosol: null, Endoplasmic_Reticulum: null, initial_Ca_cyt: null, initial_CaER: null, initial_CaM: null, initial_CaPr: null, initial_Pr: null, K1: null, K2: null, K3: null, Kch: null, Kin: null, Kleak: null, Km: null, Kminus: null, Kout: null, Kplus: null, Kpump: null, Mitochondria: null, Pr_init: null};
    this.metadata.variableOrder = {Ca_cyt: null, CaER: null, CaM: null, CaPr: null, Pr: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

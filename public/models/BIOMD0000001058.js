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
    var state = Array(10).fill(0);
    state[0] = internal.initial_Cln;
    state[1] = internal.initial_ClbSt;
    state[2] = internal.initial_MBF;
    state[3] = internal.initial_Nrm1t;
    state[4] = internal.initial_ClbMt;
    state[5] = internal.initial_Polo;
    state[6] = internal.initial_Sic1t;
    state[7] = internal.initial_SBF;
    state[8] = internal.initial_Cdh1;
    state[9] = internal.initial_Cdc14;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdc14_init", "Cdh1_init", "ClbMt_init", "ClbSt_init", "Cln_init", "jcdc14", "Jcdh1", "Jclbm", "Jmbf", "jsbf", "Jsic1", "kacdc14", "kacdh1", "kacdh1_0", "kasbf", "kasbf_0", "kass", "kdclbm", "kdclbm_0", "kdclbs", "kdclbs_0", "kdcln", "kdiss", "Kdiss", "kdnrm1", "kdpolo", "kdpolo_0", "kdsic", "kdsic_0", "kicdc14", "kicdh1", "kicdh1_0", "kisbf", "ksclbm", "ksclbm_0", "ksclbs", "kscln", "ksnrm1", "kspolo", "kssic", "MBF_init", "MBFtot", "n", "ndClbM", "Nrm1t_init", "Polo_init", "SBF_init", "Sic1t_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdc14_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdh1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ClbMt_init", internal, 0.999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ClbSt_init", internal, 0.999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cln_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jcdc14", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jcdh1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jclbm", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jmbf", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jsbf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jsic1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kacdc14", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kacdh1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kacdh1_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kasbf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kasbf_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdclbm", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdclbm_0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdclbs", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdclbs_0", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcln", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdiss", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdnrm1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdpolo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdpolo_0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdsic", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdsic_0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdc14", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdh1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdh1_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kisbf", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksclbm", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksclbm_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksclbs", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kscln", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksnrm1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kspolo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kssic", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MBF_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MBFtot", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ndClbM", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nrm1t_init", internal, 0.50900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Polo_init", internal, 0.249999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBF_init", internal, 0.99999999999998501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sic1t_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdc14 = internal.Cdc14_init;
    internal.initial_Cdh1 = internal.Cdh1_init;
    internal.initial_ClbMt = internal.ClbMt_init;
    internal.initial_ClbSt = internal.ClbSt_init;
    internal.initial_Cln = internal.Cln_init;
    internal.initial_MBF = internal.MBF_init;
    internal.initial_Nrm1t = internal.Nrm1t_init;
    internal.initial_Polo = internal.Polo_init;
    internal.initial_SBF = internal.SBF_init;
    internal.initial_Sic1t = internal.Sic1t_init;
    internal.ModelValue_14 = internal.Jmbf;
    internal.ModelValue_31 = internal.Kdiss;
    internal.ModelValue_37 = internal.ndClbM;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cln = state[0];
    const ClbSt = state[1];
    const MBF = state[2];
    const Nrm1t = state[3];
    const ClbMt = state[4];
    const Polo = state[5];
    const Sic1t = state[6];
    const SBF = state[7];
    const Cdh1 = state[8];
    const Cdc14 = state[9];
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.kacdc14 * Polo * (1 - Cdc14) / (internal.jcdc14 + 1 - Cdc14)) - 1 * internal.compartment * (internal.kicdc14 * Cdc14 / (internal.jcdc14 + Cdc14));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.kscln * SBF) - 1 * internal.compartment * internal.kdcln * Cln;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kdiss * (internal.MBFtot - MBF)) - 1 * internal.compartment * (internal.kass * MBF * (Nrm1t - (internal.MBFtot - MBF)));
    var Clbt = ClbSt + ClbMt + internal.ModelValue_37;
    var MBFa = MBF * Cln / (internal.ModelValue_14 + Cln);
    var BB = Sic1t + Clbt + internal.ModelValue_31;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.ksclbs * MBFa) - 1 * internal.compartment * ((internal.kdclbs + internal.kdclbs_0 * Cdh1) * ClbSt);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.ksnrm1 * MBFa) - 1 * internal.compartment * (internal.kdnrm1 * Nrm1t * Cdh1);
    var Sic1Clb = 2 * Sic1t * Clbt / (BB + Math.sqrt(Math.pow((BB), (2)) - 4 * Sic1t * Clbt));
    var Clb = Clbt - Sic1Clb;
    var ClbM = (ClbMt + internal.ModelValue_37) * (Clbt - Sic1Clb) / Clbt;
    dstatedt[8] = 0 + 1 * internal.compartment * ((internal.kacdh1_0 + internal.kacdh1_0 * Cdc14) * (1 - Cdh1) / (internal.Jcdh1 + 1 - Cdh1)) - 1 * internal.compartment * ((internal.kicdh1_0 * Cln + internal.kicdh1_0 * Clb) * Cdh1 / (internal.Jcdh1 + Cdh1));
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.ksclbm + internal.ksclbm_0 * Math.pow((ClbM), (internal.n)) / (Math.pow((internal.Jclbm), (internal.n)) + Math.pow((ClbM), (internal.n)))) - 1 * internal.compartment * ((internal.kdclbm + internal.kdclbm_0 * Cdh1) * ClbMt);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.kspolo * ClbM) - 1 * internal.compartment * ((internal.kdpolo + internal.kdpolo_0 * Cdh1) * Polo);
    dstatedt[7] = 0 + 1 * internal.compartment * ((internal.kasbf_0 + internal.kasbf_0 * Cln) * (1 - SBF) / (internal.jsbf + 1 - SBF)) - 1 * internal.compartment * (internal.kisbf * ClbM * SBF / (internal.jsbf + SBF));
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.kssic) - 1 * internal.compartment * ((internal.kdsic_0 + internal.kdsic_0 * Clb * (Cln + Clb) / (internal.Jsic1 + Cln + Clb)) * Sic1t);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cln", "ClbSt", "MBF", "Nrm1t", "ClbMt", "Polo", "Sic1t", "SBF", "Cdh1", "Cdc14"];
    this.metadata.internalOrder = {Cdc14_init: null, Cdh1_init: null, ClbMt_init: null, ClbSt_init: null, Cln_init: null, compartment: null, initial_Cdc14: null, initial_Cdh1: null, initial_ClbMt: null, initial_ClbSt: null, initial_Cln: null, initial_MBF: null, initial_Nrm1t: null, initial_Polo: null, initial_SBF: null, initial_Sic1t: null, jcdc14: null, Jcdh1: null, Jclbm: null, Jmbf: null, jsbf: null, Jsic1: null, kacdc14: null, kacdh1: null, kacdh1_0: null, kasbf: null, kasbf_0: null, kass: null, kdclbm: null, kdclbm_0: null, kdclbs: null, kdclbs_0: null, kdcln: null, kdiss: null, Kdiss: null, kdnrm1: null, kdpolo: null, kdpolo_0: null, kdsic: null, kdsic_0: null, kicdc14: null, kicdh1: null, kicdh1_0: null, kisbf: null, ksclbm: null, ksclbm_0: null, ksclbs: null, kscln: null, ksnrm1: null, kspolo: null, kssic: null, MBF_init: null, MBFtot: null, ModelValue_14: null, ModelValue_31: null, ModelValue_37: null, n: null, ndClbM: null, Nrm1t_init: null, Polo_init: null, SBF_init: null, Sic1t_init: null};
    this.metadata.variableOrder = {Cln: null, ClbSt: null, MBF: null, Nrm1t: null, ClbMt: null, Polo: null, Sic1t: null, SBF: null, Cdh1: null, Cdc14: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

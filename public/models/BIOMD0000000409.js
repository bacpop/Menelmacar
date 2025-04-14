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
    var state = Array(15).fill(0);
    state[0] = internal.initial_Clb2;
    state[1] = internal.initial_Cdc20;
    state[2] = internal.initial_Cdh1;
    state[3] = internal.initial_securinT;
    state[4] = internal.initial_separaseT;
    state[5] = internal.initial_securinseparase;
    state[6] = internal.initial_Net1;
    state[7] = internal.initial_Net1Cdc14;
    state[8] = internal.initial_PoloT;
    state[9] = internal.initial_Polo;
    state[10] = internal.initial_Tem1;
    state[11] = internal.initial_Cdc15;
    state[12] = internal.initial_MEN;
    state[13] = internal.initial_AA;
    state[14] = internal.initial_degr;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AA_init", "Cdc14T", "Cdc15_init", "Cdc15T", "Cdc20_init", "Cdh1_init", "Cdh1T", "Clb2_init", "degr_init", "Inh", "Jcdc15", "Jcdh", "Jnet", "Jpolo", "Jtem1", "kaacdc15", "kaadclb2", "kaapolo", "kaatem", "kacdc15", "kad", "kadcdc20", "kadcdh", "kadclb2", "kadpolo", "kadsecurin", "kaicdc15", "kaitem", "kap", "kapcdh", "kapolo", "katem", "kd", "kdcdc20", "kdcdh", "kdclb2", "kdpolo", "kdsecurin", "kdseparase", "ki", "kicdc15", "kipolo", "kitem", "kp", "kpp", "kscdc20", "ksclb2", "kspolo", "kssecurin", "ksseparase", "lamen", "lanet", "lasecurin", "ldmen", "ldnet", "ldsecurin", "MEN_init", "Net1_init", "Net1Cdc14_init", "Net1T", "Polo_init", "PoloT_init", "PP2AT", "securinseparase_init", "securinT_init", "separaseT_init", "Tem1_init", "Tem1T"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc14T", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc15_init", internal, 0.025700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc15T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdh1_init", internal, 3.8000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdh1T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clb2_init", internal, 0.997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "degr_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jcdc15", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jcdh", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jnet", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jpolo", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jtem1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaacdc15", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaadclb2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaapolo", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaatem", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kacdc15", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kad", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadcdc20", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadcdh", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadclb2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadpolo", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kadsecurin", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaicdc15", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kaitem", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kap", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kapcdh", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kapolo", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "katem", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcdc20", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdcdh", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdclb2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdpolo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdsecurin", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdseparase", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kicdc15", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kipolo", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kitem", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpp", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kscdc20", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksclb2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kspolo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kssecurin", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksseparase", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamen", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lanet", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lasecurin", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ldmen", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ldnet", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ldsecurin", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEN_init", internal, 7.9999999999999996e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Net1_init", internal, 0.098000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Net1Cdc14_init", internal, 0.48499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Net1T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Polo_init", internal, 0.94499999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PoloT_init", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP2AT", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "securinseparase_init", internal, 0.248, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "securinT_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "separaseT_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tem1_init", internal, 0.0038899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tem1T", internal, 1, -Infinity, Infinity, false);
    internal.initial_AA = internal.AA_init;
    internal.initial_Cdc15 = internal.Cdc15_init;
    internal.initial_Cdc20 = internal.Cdc20_init;
    internal.initial_Cdh1 = internal.Cdh1_init;
    internal.initial_Clb2 = internal.Clb2_init;
    internal.initial_degr = internal.degr_init;
    internal.initial_MEN = internal.MEN_init;
    internal.initial_Net1 = internal.Net1_init;
    internal.initial_Net1Cdc14 = internal.Net1Cdc14_init;
    internal.initial_Polo = internal.Polo_init;
    internal.initial_PoloT = internal.PoloT_init;
    internal.initial_securinseparase = internal.securinseparase_init;
    internal.initial_securinT = internal.securinT_init;
    internal.initial_separaseT = internal.separaseT_init;
    internal.initial_Tem1 = internal.Tem1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Clb2 = state[0];
    const Cdc20 = state[1];
    const Cdh1 = state[2];
    const securinT = state[3];
    const separaseT = state[4];
    const securinseparase = state[5];
    const Net1 = state[6];
    const Net1Cdc14 = state[7];
    const PoloT = state[8];
    const Polo = state[9];
    const Tem1 = state[10];
    const Cdc15 = state[11];
    const MEN = state[12];
    dstatedt[13] = 0;
    dstatedt[14] = 0;
    var Cdc14 = internal.Cdc14T - Net1Cdc14;
    var Cdk = Clb2 / (1 + internal.Inh);
    dstatedt[1] = 0 + 1 * internal.kscdc20 - 1 * (internal.kdcdc20 + internal.kadcdc20 * Cdh1) * Cdc20;
    dstatedt[0] = 0 + 1 * internal.ksclb2 - 1 * (internal.kdclb2 + internal.kadclb2 * Cdc20 + internal.kaadclb2 * Cdh1) * Clb2;
    dstatedt[8] = 0 + 1 * internal.kspolo - 1 * (internal.kdpolo + internal.kadpolo * Cdh1) * PoloT;
    dstatedt[3] = 0 + 1 * internal.kssecurin - 1 * (internal.kdsecurin + internal.kadsecurin * Cdc20) * securinT;
    dstatedt[4] = 0 + 1 * internal.ksseparase - 1 * internal.kdseparase * separaseT;
    var Net1P = internal.Net1T - Net1 - Net1Cdc14;
    var securin = securinT - securinseparase;
    var separase = separaseT - securinseparase;
    dstatedt[11] = 0 + 1 * (internal.kacdc15 + internal.kaacdc15 * Cdc14) * ((internal.Cdc15T - Cdc15) / (internal.Jcdc15 + internal.Cdc15T - Cdc15)) - 1 * (internal.kicdc15 + internal.kaicdc15 * Cdk) * (Cdc15 / (internal.Jcdc15 + Cdc15));
    dstatedt[2] = 0 + 1 * (internal.kdcdh + internal.kadcdh * Cdc14) * ((internal.Cdh1T - Cdh1) / (internal.Jcdh + internal.Cdh1T - Cdh1)) - 1 * internal.kapcdh * Cdk * (Cdh1 / (internal.Jcdh + Cdh1));
    dstatedt[7] = 0 + 1 * internal.lanet * Net1 * Cdc14 - 1 * internal.ldnet * Net1Cdc14 - 1 * (internal.kp * Cdk + internal.kap * MEN) * (Net1Cdc14 / (internal.Jnet + Net1 + Net1Cdc14));
    dstatedt[9] = 0 + 1 * (internal.kapolo + internal.kaapolo * Cdk) * ((PoloT - Polo) / (internal.Jpolo + PoloT - Polo)) - 1 * internal.kipolo * (Polo / (internal.Jpolo + Polo)) - 1 * (internal.kdpolo + internal.kadpolo * Cdh1) * Polo;
    dstatedt[5] = 0 + 1 * internal.lasecurin * securin * separase - internal.ldsecurin * securinseparase - 1 * (internal.kdsecurin + internal.kadsecurin * Cdc20) * securinseparase - 1 * internal.kdseparase * securinseparase;
    var PP2A = (1 + internal.kpp * internal.ki * separase) / (1 + internal.ki * separase) * internal.PP2AT;
    dstatedt[12] = 0 + 1 * internal.lamen * (Tem1 - MEN) * (Cdc15 - MEN) - 1 * internal.ldmen * MEN - 1 * (internal.kitem + internal.kaitem * PP2A) * (MEN / (internal.Jtem1 + Tem1)) - 1 * (internal.kicdc15 + internal.kaicdc15 * Cdk) * (MEN / (internal.Jcdc15 + Cdc15));
    dstatedt[6] = 0 + 1 * (internal.kad * Cdc14 + internal.kd * PP2A) * (Net1P / (internal.Jnet + Net1P)) - 1 * (internal.kp * Cdk + internal.kap * MEN) * (Net1 / (internal.Jnet + Net1 + Net1Cdc14)) - 1 * internal.lanet * Net1 * Cdc14 + 1 * internal.ldnet * Net1Cdc14;
    dstatedt[10] = 0 + 1 * (internal.katem + internal.kaatem * Polo) * ((internal.Tem1T - Tem1) / (internal.Jtem1 + internal.Tem1T - Tem1)) - 1 * (internal.kitem + internal.kaitem * PP2A) * (Tem1 / (internal.Jtem1 + Tem1));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Clb2", "Cdc20", "Cdh1", "securinT", "separaseT", "securinseparase", "Net1", "Net1Cdc14", "PoloT", "Polo", "Tem1", "Cdc15", "MEN", "AA", "degr"];
    this.metadata.internalOrder = {AA_init: null, Cdc14T: null, Cdc15_init: null, Cdc15T: null, Cdc20_init: null, Cdh1_init: null, Cdh1T: null, Clb2_init: null, compartment: null, degr_init: null, Inh: null, initial_AA: null, initial_Cdc15: null, initial_Cdc20: null, initial_Cdh1: null, initial_Clb2: null, initial_degr: null, initial_MEN: null, initial_Net1: null, initial_Net1Cdc14: null, initial_Polo: null, initial_PoloT: null, initial_securinseparase: null, initial_securinT: null, initial_separaseT: null, initial_Tem1: null, Jcdc15: null, Jcdh: null, Jnet: null, Jpolo: null, Jtem1: null, kaacdc15: null, kaadclb2: null, kaapolo: null, kaatem: null, kacdc15: null, kad: null, kadcdc20: null, kadcdh: null, kadclb2: null, kadpolo: null, kadsecurin: null, kaicdc15: null, kaitem: null, kap: null, kapcdh: null, kapolo: null, katem: null, kd: null, kdcdc20: null, kdcdh: null, kdclb2: null, kdpolo: null, kdsecurin: null, kdseparase: null, ki: null, kicdc15: null, kipolo: null, kitem: null, kp: null, kpp: null, kscdc20: null, ksclb2: null, kspolo: null, kssecurin: null, ksseparase: null, lamen: null, lanet: null, lasecurin: null, ldmen: null, ldnet: null, ldsecurin: null, MEN_init: null, Net1_init: null, Net1Cdc14_init: null, Net1T: null, Polo_init: null, PoloT_init: null, PP2AT: null, securinseparase_init: null, securinT_init: null, separaseT_init: null, Tem1_init: null, Tem1T: null};
    this.metadata.variableOrder = {Clb2: null, Cdc20: null, Cdh1: null, securinT: null, separaseT: null, securinseparase: null, Net1: null, Net1Cdc14: null, PoloT: null, Polo: null, Tem1: null, Cdc15: null, MEN: null, AA: null, degr: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

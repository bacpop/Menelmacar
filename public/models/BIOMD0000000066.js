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
    var state = Array(11).fill(0);
    state[0] = internal.initial_aspp;
    state[1] = internal.initial_asa;
    state[2] = internal.initial_hs;
    state[3] = internal.initial_hsp;
    state[4] = internal.initial_phos;
    state[5] = internal.initial_thr;
    state[6] = internal.initial_asp;
    state[7] = internal.initial_nadp;
    state[8] = internal.initial_nadph;
    state[9] = internal.initial_adp;
    state[10] = internal.initial_atp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["adp_init", "alpha", "alpha3", "asa_init", "asp_init", "aspp_init", "atp_init", "hs_init", "hsp_init", "k11", "k13", "k13adp", "k13aspp", "k13atp", "k1adp", "k1aspp", "k1atp", "k1lys", "k1thr", "k2asa", "k2aspp", "k2eq", "k2nadp", "k2nadph", "k2p", "k3asa", "k3eq", "k3hs", "k3nadp", "k3nadph", "k3thr", "k4atp", "k4hs", "k4iatp", "k4ihs", "k4lys", "k4thr", "k5hsp", "katpase", "keqak", "knadph", "lys", "nadp_init", "nadph_init", "nak1", "nak3", "nhdh1", "phos_init", "prot", "thr_init", "vm11", "vm13", "vm2f", "vm3f", "vm4f", "vm5"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "adp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 2.4700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 3.9300000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "asa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "asp_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aspp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hsp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.96999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13adp", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13aspp", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13atp", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1adp", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1aspp", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1atp", internal, 0.97999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1lys", internal, 0.39100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1thr", internal, 0.16700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2asa", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2aspp", internal, 0.021999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2eq", internal, 56.415033457403901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2nadp", internal, 0.14399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2nadph", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2p", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3asa", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3eq", internal, 3162.27766016838, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3hs", internal, 3.3900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3nadp", internal, 0.067000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3nadph", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3thr", internal, 0.097000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4atp", internal, 0.071999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4hs", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4iatp", internal, 4.3499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4ihs", internal, 4.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4lys", internal, 9.4499999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4thr", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5hsp", internal, 0.31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "katpase", internal, 4.1e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "keqak", internal, 0.00064000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knadph", internal, 5.4e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lys", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nadp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nadph_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nak1", internal, 4.0899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nak3", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nhdh1", internal, 1.4099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phos_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "prot", internal, 202, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thr_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm11", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm13", internal, 0.0722, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm2f", internal, 0.1812, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm3f", internal, 1.0009999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm4f", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm5", internal, 0.043400000000000001, -Infinity, Infinity, false);
    internal.initial_adp = internal.adp_init;
    internal.initial_asa = internal.asa_init;
    internal.initial_asp = internal.asp_init;
    internal.initial_aspp = internal.aspp_init;
    internal.initial_atp = internal.atp_init;
    internal.initial_hs = internal.hs_init;
    internal.initial_hsp = internal.hsp_init;
    internal.initial_nadp = internal.nadp_init;
    internal.initial_nadph = internal.nadph_init;
    internal.initial_phos = internal.phos_init;
    internal.initial_thr = internal.thr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const aspp = state[0];
    const asa = state[1];
    const hs = state[2];
    const hsp = state[3];
    const phos = state[4];
    const thr = state[5];
    const asp = state[6];
    const nadp = state[7];
    const nadph = state[8];
    const adp = state[9];
    const atp = state[10];
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.vm11 * (asp * atp - aspp * adp / internal.keqak) / ((internal.k11 * (1 + Math.pow((thr / internal.k1thr), (internal.nak1))) / (1 + Math.pow((thr / (internal.alpha * internal.k1thr)), (internal.nak1))) + internal.k11 * aspp / internal.k1aspp + asp) * (internal.k1atp * (1 + adp / internal.k1adp) + atp)) + internal.vm13 * (asp * atp - aspp * adp / internal.keqak) / ((1 + Math.pow((internal.lys / internal.k1lys), (internal.nak3))) * (internal.k13 * (1 + aspp / internal.k13aspp) + asp) * (internal.k13atp * (1 + adp / internal.k13adp) + atp))) + 1 * internal.compartment * (internal.vm4f * hs * atp / ((1 + internal.lys / internal.k4lys) * (atp + internal.k4atp * (1 + hs / internal.k4ihs)) * (hs + internal.k4hs * (1 + thr / internal.k4thr) * (1 + atp / internal.k4iatp)))) + 1 * internal.compartment * internal.prot * internal.katpase;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.vm2f * (aspp * nadph - asa * nadp * phos / internal.k2eq) / ((internal.k2aspp * (1 + asa / internal.k2asa) * (1 + phos / internal.k2p) + aspp) * (internal.k2nadph * (1 + nadp / internal.k2nadp) + nadph))) - 1 * internal.compartment * (internal.vm3f * (asa * nadph - hs * nadp / internal.k3eq) / ((1 + Math.pow((thr / internal.k3thr), (internal.nhdh1))) / (1 + Math.pow((thr / (internal.alpha3 * internal.k3thr)), (internal.nhdh1))) * (internal.k3asa + asa + hs * internal.k3asa / internal.k3hs) * (internal.k3nadph * (1 + nadp / internal.k3nadp) + nadph)));
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.vm11 * (asp * atp - aspp * adp / internal.keqak) / ((internal.k11 * (1 + Math.pow((thr / internal.k1thr), (internal.nak1))) / (1 + Math.pow((thr / (internal.alpha * internal.k1thr)), (internal.nak1))) + internal.k11 * aspp / internal.k1aspp + asp) * (internal.k1atp * (1 + adp / internal.k1adp) + atp)) + internal.vm13 * (asp * atp - aspp * adp / internal.keqak) / ((1 + Math.pow((internal.lys / internal.k1lys), (internal.nak3))) * (internal.k13 * (1 + aspp / internal.k13aspp) + asp) * (internal.k13atp * (1 + adp / internal.k13adp) + atp)));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.vm11 * (asp * atp - aspp * adp / internal.keqak) / ((internal.k11 * (1 + Math.pow((thr / internal.k1thr), (internal.nak1))) / (1 + Math.pow((thr / (internal.alpha * internal.k1thr)), (internal.nak1))) + internal.k11 * aspp / internal.k1aspp + asp) * (internal.k1atp * (1 + adp / internal.k1adp) + atp)) + internal.vm13 * (asp * atp - aspp * adp / internal.keqak) / ((1 + Math.pow((internal.lys / internal.k1lys), (internal.nak3))) * (internal.k13 * (1 + aspp / internal.k13aspp) + asp) * (internal.k13atp * (1 + adp / internal.k13adp) + atp))) - 1 * internal.compartment * (internal.vm2f * (aspp * nadph - asa * nadp * phos / internal.k2eq) / ((internal.k2aspp * (1 + asa / internal.k2asa) * (1 + phos / internal.k2p) + aspp) * (internal.k2nadph * (1 + nadp / internal.k2nadp) + nadph)));
    dstatedt[10] = 0 - 1 * internal.compartment * (internal.vm11 * (asp * atp - aspp * adp / internal.keqak) / ((internal.k11 * (1 + Math.pow((thr / internal.k1thr), (internal.nak1))) / (1 + Math.pow((thr / (internal.alpha * internal.k1thr)), (internal.nak1))) + internal.k11 * aspp / internal.k1aspp + asp) * (internal.k1atp * (1 + adp / internal.k1adp) + atp)) + internal.vm13 * (asp * atp - aspp * adp / internal.keqak) / ((1 + Math.pow((internal.lys / internal.k1lys), (internal.nak3))) * (internal.k13 * (1 + aspp / internal.k13aspp) + asp) * (internal.k13atp * (1 + adp / internal.k13adp) + atp))) - 1 * internal.compartment * (internal.vm4f * hs * atp / ((1 + internal.lys / internal.k4lys) * (atp + internal.k4atp * (1 + hs / internal.k4ihs)) * (hs + internal.k4hs * (1 + thr / internal.k4thr) * (1 + atp / internal.k4iatp)))) - 1 * internal.compartment * internal.prot * internal.katpase;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.vm3f * (asa * nadph - hs * nadp / internal.k3eq) / ((1 + Math.pow((thr / internal.k3thr), (internal.nhdh1))) / (1 + Math.pow((thr / (internal.alpha3 * internal.k3thr)), (internal.nhdh1))) * (internal.k3asa + asa + hs * internal.k3asa / internal.k3hs) * (internal.k3nadph * (1 + nadp / internal.k3nadp) + nadph))) - 1 * internal.compartment * (internal.vm4f * hs * atp / ((1 + internal.lys / internal.k4lys) * (atp + internal.k4atp * (1 + hs / internal.k4ihs)) * (hs + internal.k4hs * (1 + thr / internal.k4thr) * (1 + atp / internal.k4iatp))));
    dstatedt[3] = 0 - 1 * internal.compartment * internal.vm5 * hsp / (hsp + internal.k5hsp) + 1 * internal.compartment * (internal.vm4f * hs * atp / ((1 + internal.lys / internal.k4lys) * (atp + internal.k4atp * (1 + hs / internal.k4ihs)) * (hs + internal.k4hs * (1 + thr / internal.k4thr) * (1 + atp / internal.k4iatp))));
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.vm2f * (aspp * nadph - asa * nadp * phos / internal.k2eq) / ((internal.k2aspp * (1 + asa / internal.k2asa) * (1 + phos / internal.k2p) + aspp) * (internal.k2nadph * (1 + nadp / internal.k2nadp) + nadph))) + 1 * internal.compartment * (internal.vm3f * (asa * nadph - hs * nadp / internal.k3eq) / ((1 + Math.pow((thr / internal.k3thr), (internal.nhdh1))) / (1 + Math.pow((thr / (internal.alpha3 * internal.k3thr)), (internal.nhdh1))) * (internal.k3asa + asa + hs * internal.k3asa / internal.k3hs) * (internal.k3nadph * (1 + nadp / internal.k3nadp) + nadph))) + 1 * internal.compartment * internal.prot * internal.knadph * nadph;
    dstatedt[8] = 0 - 1 * internal.compartment * (internal.vm2f * (aspp * nadph - asa * nadp * phos / internal.k2eq) / ((internal.k2aspp * (1 + asa / internal.k2asa) * (1 + phos / internal.k2p) + aspp) * (internal.k2nadph * (1 + nadp / internal.k2nadp) + nadph))) - 1 * internal.compartment * (internal.vm3f * (asa * nadph - hs * nadp / internal.k3eq) / ((1 + Math.pow((thr / internal.k3thr), (internal.nhdh1))) / (1 + Math.pow((thr / (internal.alpha3 * internal.k3thr)), (internal.nhdh1))) * (internal.k3asa + asa + hs * internal.k3asa / internal.k3hs) * (internal.k3nadph * (1 + nadp / internal.k3nadp) + nadph))) - 1 * internal.compartment * internal.prot * internal.knadph * nadph;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.vm2f * (aspp * nadph - asa * nadp * phos / internal.k2eq) / ((internal.k2aspp * (1 + asa / internal.k2asa) * (1 + phos / internal.k2p) + aspp) * (internal.k2nadph * (1 + nadp / internal.k2nadp) + nadph))) + 1 * internal.compartment * internal.vm5 * hsp / (hsp + internal.k5hsp) + 1 * internal.compartment * internal.prot * internal.katpase;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.vm5 * hsp / (hsp + internal.k5hsp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "aspp", "asa", "hs", "hsp", "phos", "thr", "asp", "nadp", "nadph", "adp", "atp"];
    this.metadata.internalOrder = {adp_init: null, alpha: null, alpha3: null, asa_init: null, asp_init: null, aspp_init: null, atp_init: null, compartment: null, hs_init: null, hsp_init: null, initial_adp: null, initial_asa: null, initial_asp: null, initial_aspp: null, initial_atp: null, initial_hs: null, initial_hsp: null, initial_nadp: null, initial_nadph: null, initial_phos: null, initial_thr: null, k11: null, k13: null, k13adp: null, k13aspp: null, k13atp: null, k1adp: null, k1aspp: null, k1atp: null, k1lys: null, k1thr: null, k2asa: null, k2aspp: null, k2eq: null, k2nadp: null, k2nadph: null, k2p: null, k3asa: null, k3eq: null, k3hs: null, k3nadp: null, k3nadph: null, k3thr: null, k4atp: null, k4hs: null, k4iatp: null, k4ihs: null, k4lys: null, k4thr: null, k5hsp: null, katpase: null, keqak: null, knadph: null, lys: null, nadp_init: null, nadph_init: null, nak1: null, nak3: null, nhdh1: null, phos_init: null, prot: null, thr_init: null, vm11: null, vm13: null, vm2f: null, vm3f: null, vm4f: null, vm5: null};
    this.metadata.variableOrder = {aspp: null, asa: null, hs: null, hsp: null, phos: null, thr: null, asp: null, nadp: null, nadph: null, adp: null, atp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

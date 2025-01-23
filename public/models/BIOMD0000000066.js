export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.alpha = 2.4700000000000002;
    internal.alpha3 = 3.9300000000000002;
    internal.compartment = 1;
    internal.k11 = 0.96999999999999997;
    internal.k13 = 0.32000000000000001;
    internal.k13adp = 0.25;
    internal.k13aspp = 0.017000000000000001;
    internal.k13atp = 0.22;
    internal.k1adp = 0.25;
    internal.k1aspp = 0.017000000000000001;
    internal.k1atp = 0.97999999999999998;
    internal.k1lys = 0.39100000000000001;
    internal.k1thr = 0.16700000000000001;
    internal.k2asa = 0.11;
    internal.k2aspp = 0.021999999999999999;
    internal.k2eq = 56.415033457403901;
    internal.k2nadp = 0.14399999999999999;
    internal.k2nadph = 0.029000000000000001;
    internal.k2p = 10;
    internal.k3asa = 0.23999999999999999;
    internal.k3eq = 3162.27766016838;
    internal.k3hs = 3.3900000000000001;
    internal.k3nadp = 0.067000000000000004;
    internal.k3nadph = 0.036999999999999998;
    internal.k3thr = 0.097000000000000003;
    internal.k4atp = 0.071999999999999995;
    internal.k4hs = 0.11;
    internal.k4iatp = 4.3499999999999996;
    internal.k4ihs = 4.7000000000000002;
    internal.k4lys = 9.4499999999999993;
    internal.k4thr = 1.0900000000000001;
    internal.k5hsp = 0.31;
    internal.katpase = 4.1e-05;
    internal.keqak = 0.00064000000000000005;
    internal.knadph = 5.4e-06;
    internal.lys = 0.46000000000000002;
    internal.nak1 = 4.0899999999999999;
    internal.nak3 = 2.7999999999999998;
    internal.nhdh1 = 1.4099999999999999;
    internal.prot = 202;
    internal.vm11 = 0.14999999999999999;
    internal.vm13 = 0.0722;
    internal.vm2f = 0.1812;
    internal.vm3f = 1.0009999999999999;
    internal.vm4f = 0.10000000000000001;
    internal.vm5 = 0.043400000000000001;
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
    this.base.user.checkUser(user, ["adp_init", "asa_init", "asp_init", "aspp_init", "atp_init", "hs_init", "hsp_init", "nadp_init", "nadph_init", "phos_init", "thr_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "adp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "asa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "asp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aspp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hsp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nadp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nadph_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phos_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thr_init", internal, 0, -Infinity, Infinity, false);
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

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cdh1T = 1;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(18).fill(0);
    state[0] = internal.initial_Myc;
    state[1] = internal.initial_CycDT;
    state[2] = internal.initial_CycET;
    state[3] = internal.initial_CycAT;
    state[4] = internal.initial_E2FT;
    state[5] = internal.initial_Comp1;
    state[6] = internal.initial_Comp2;
    state[7] = internal.initial_Rbp;
    state[8] = internal.initial_CkiT;
    state[9] = internal.initial_CycECki;
    state[10] = internal.initial_CycDCki;
    state[11] = internal.initial_CycACki;
    state[12] = internal.initial_Cdh1dp;
    state[13] = internal.initial_Emi1T;
    state[14] = internal.initial_EmiC;
    state[15] = internal.initial_Cdh1;
    state[16] = internal.initial_UbI;
    state[17] = internal.initial_Rbpp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdh1_init", "Cdh1dp_init", "CkiT_init", "Comp1_init", "Comp2_init", "CycACki_init", "CycAT_init", "CycDCki_init", "CycDT_init", "CycECki_init", "CycET_init", "E2FT_init", "Emi1T_init", "EmiC_init", "JdpCdh1", "JdpRb", "JpCdh1", "JppRb", "JpRb", "JpRbp", "Kacdh1", "Kascdh1", "Kascki", "Kase2f", "Kdcki", "Kdckic", "Kdcyca", "Kdcycac", "Kdcycd", "Kdcyce", "Kdcycea", "Kde2f", "Kde2fa", "Kdemi1", "Kdemi1c", "Kdiscdh1", "Kdiscki", "Kdise2f", "Kdm", "Kdprbp", "Kdprbpp", "Kdub1", "Kdub1c", "Khcyca", "Khcyce", "Khe2f", "Khemi1", "Kicdh1a", "Kicdh1e", "Kppeb", "Kprb", "Kprbp", "Kscki", "Kscyca", "Kscycdm", "Kscycds", "Kscyce", "Kscyceb", "Kscycem", "Kse2f", "Kse2fb", "Kse2fm", "Ksemi1", "Ksm", "Ksub1", "Myc_init", "Rbp_init", "Rbpp_init", "RbT", "S", "UbI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdh1_init", internal, 0.998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdh1dp_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CkiT_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Comp1_init", internal, 0.105, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Comp2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycACki_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycAT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycDCki_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycDT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycECki_init", internal, 0.115, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycET_init", internal, 0.11899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2FT_init", internal, 0.106, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Emi1T_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EmiC_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JdpCdh1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JdpRb", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JpCdh1", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JppRb", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JpRb", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JpRbp", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacdh1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kascdh1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kascki", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kase2f", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcki", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdckic", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcyca", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcycac", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcycd", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcyce", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdcycea", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kde2f", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kde2fa", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdemi1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdemi1c", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdiscdh1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdiscki", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdise2f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdm", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdprbp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdprbpp", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdub1", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdub1c", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Khcyca", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Khcyce", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Khe2f", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Khemi1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicdh1a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicdh1e", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kppeb", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kprb", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kprbp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscki", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscyca", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscycdm", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscycds", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscyce", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscyceb", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kscycem", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kse2f", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kse2fb", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kse2fm", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksemi1", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksm", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksub1", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Myc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rbp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rbpp_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RbT", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UbI_init", internal, 0.02, -Infinity, Infinity, false);
    internal.initial_Cdh1 = internal.Cdh1_init;
    internal.initial_Cdh1dp = internal.Cdh1dp_init;
    internal.initial_CkiT = internal.CkiT_init;
    internal.initial_Comp1 = internal.Comp1_init;
    internal.initial_Comp2 = internal.Comp2_init;
    internal.initial_CycACki = internal.CycACki_init;
    internal.initial_CycAT = internal.CycAT_init;
    internal.initial_CycDCki = internal.CycDCki_init;
    internal.initial_CycDT = internal.CycDT_init;
    internal.initial_CycECki = internal.CycECki_init;
    internal.initial_CycET = internal.CycET_init;
    internal.initial_E2FT = internal.E2FT_init;
    internal.initial_Emi1T = internal.Emi1T_init;
    internal.initial_EmiC = internal.EmiC_init;
    internal.initial_Myc = internal.Myc_init;
    internal.initial_Rbp = internal.Rbp_init;
    internal.initial_Rbpp = internal.Rbpp_init;
    internal.initial_UbI = internal.UbI_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Myc = state[0];
    const CycDT = state[1];
    const CycET = state[2];
    const CycAT = state[3];
    const E2FT = state[4];
    const Comp1 = state[5];
    const Comp2 = state[6];
    const Rbp = state[7];
    const CkiT = state[8];
    const CycECki = state[9];
    const CycDCki = state[10];
    const CycACki = state[11];
    const Cdh1dp = state[12];
    const Emi1T = state[13];
    const EmiC = state[14];
    const Cdh1 = state[15];
    const UbI = state[16];
    const Rbpp = state[17];
    var CycA = CycAT - CycACki;
    var CycD = CycDT - CycDCki;
    var CycE = CycET - CycECki;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.Kscycdm * Myc + internal.Kscycds * internal.S) - 1 * internal.compartment * (internal.Kdcycd * CycDT);
    dstatedt[14] = 0 + 1 * internal.compartment * (internal.Kascdh1 * (internal.Cdh1T - EmiC) * (Emi1T - EmiC)) - 1 * internal.compartment * ((internal.Kdiscdh1 + internal.Kdemi1 + internal.Kdemi1c * Cdh1) * EmiC);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.Ksm * internal.S) - 1 * internal.compartment * (internal.Kdm * Myc);
    dstatedt[16] = 0 + 1 * internal.compartment * (internal.Ksub1) - 1 * internal.compartment * ((internal.Kdub1 + internal.Kdub1c * Cdh1) * UbI);
    var E2F = E2FT - Comp1 - Comp2;
    var Rb = internal.RbT - Rbp - Rbpp - Comp1 - Comp2;
    dstatedt[15] = 0 + 1 * internal.compartment * (internal.Kacdh1 * ((internal.Cdh1T - EmiC - Cdh1) / (internal.JdpCdh1 + (internal.Cdh1T - Cdh1dp))) + (internal.Kdiscdh1 + internal.Kdemi1 + internal.Kdemi1c * Cdh1) * (Cdh1dp - Cdh1)) - 1 * internal.compartment * ((internal.Kicdh1e * CycE + internal.Kicdh1a * CycA) * (Cdh1 / (internal.JpCdh1 + Cdh1dp)) + internal.Kascdh1 * Cdh1 * (Emi1T - EmiC));
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.Kacdh1 * ((internal.Cdh1T - Cdh1dp) / (internal.JdpCdh1 + (internal.Cdh1T - Cdh1dp)))) - 1 * internal.compartment * ((internal.Kicdh1e * CycE + internal.Kicdh1a * CycA) * (Cdh1dp / (internal.JpCdh1 + Cdh1dp)));
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.Kscki) - 1 * internal.compartment * ((internal.Kdcki + internal.Kdckic * (CycE + CycA) * UbI) * CkiT);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.Kase2f * E2F * Rb + internal.Kdprbp * (Comp2 / (internal.JdpRb + Comp2))) - 1 * internal.compartment * (internal.Kdise2f * Comp1 + internal.Kprb * CycD * (Comp1 / (internal.JpRb + Comp1)) + internal.Kppeb * (CycE + CycA) * (Comp1 / (internal.JppRb + Comp1)) + (internal.Kde2f + internal.Kde2fa * CycA) * Comp1);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.Kase2f * E2F * Rbp + internal.Kprb * CycD * (Comp1 / (internal.JpRb + Comp1))) - 1 * internal.compartment * (internal.Kdise2f * Comp2 + internal.Kdprbp * (Comp2 / (internal.JdpRb + Comp2)) + internal.Kprbp * (CycE + CycA) * (Comp2 / (internal.JpRbp + Comp2)) + (internal.Kde2f + internal.Kde2fa * CycA) * Comp2);
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.Kascki * CycA * (CkiT - CycECki - CycDCki - CycACki)) - 1 * internal.compartment * ((internal.Kdiscki + internal.Kdcyca + internal.Kdcycac * Cdh1 + internal.Kdcki + internal.Kdckic * (CycE + CycA) * UbI) * CycACki);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.Kscyca * (E2F / (internal.Khcyca + E2F))) - 1 * internal.compartment * ((internal.Kdcyca + internal.Kdcycac * Cdh1) * CycAT);
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.Kascki * CycD * (CkiT - CycECki - CycDCki - CycACki)) - 1 * internal.compartment * ((internal.Kdiscki + internal.Kdcycd + internal.Kdcki + internal.Kdckic * (CycE + CycA) * UbI) * CycDCki);
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.Kascki * CycE * (CkiT - CycECki - CycDCki - CycACki)) - 1 * internal.compartment * ((internal.Kdiscki + internal.Kdcyce + internal.Kdcycea * CycA + internal.Kdcki + internal.Kdckic * (CycE + CycA) * UbI) * CycECki);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.Kscyceb + internal.Kscycem * Myc + internal.Kscyce * (E2F / (internal.Khcyce + E2F))) - 1 * internal.compartment * ((internal.Kdcyce + internal.Kdcycea * CycA) * CycET);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.Kse2fb + internal.Kse2fm * Myc + internal.Kse2f * (E2F / (internal.Khe2f + E2F))) - 1 * internal.compartment * ((internal.Kde2f + internal.Kde2fa * CycA) * E2FT);
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.Ksemi1 * (E2F / (internal.Khemi1 + E2F))) - 1 * internal.compartment * ((internal.Kdemi1 + internal.Kdemi1c * Cdh1) * Emi1T);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.Kprb * CycD * (Rb / (internal.JpRb + Rb)) + internal.Kdise2f * Comp2 + (internal.Kde2f + internal.Kde2fa * CycA) * Comp2) - 1 * internal.compartment * (internal.Kase2f * E2F * Rbp + internal.Kdprbp * (Rbp / (internal.JpRb + Rbp)) + internal.Kprbp * (CycE + CycA) * (Rbp / (internal.JpRbp + Rbp)));
    dstatedt[17] = 0 + 1 * internal.compartment * (internal.Kprbp * (CycE + CycA) * (Rbp / (internal.JpRbp + Rbp)) + internal.Kprbp * (CycE + CycA) * (Comp2 / (internal.JpRbp + Comp2)) + internal.Kppeb * (CycE + CycA) * (Rb / (internal.JppRb + Rb)) + internal.Kppeb * (CycE + CycA) * (Comp1 / (internal.JppRb + Comp1))) - 1 * internal.compartment * (internal.Kdprbpp * (Rbpp / (internal.JdpRb + Rbpp)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Myc", "CycDT", "CycET", "CycAT", "E2FT", "Comp1", "Comp2", "Rbp", "CkiT", "CycECki", "CycDCki", "CycACki", "Cdh1dp", "Emi1T", "EmiC", "Cdh1", "UbI", "Rbpp"];
    this.metadata.internalOrder = {Cdh1_init: null, Cdh1dp_init: null, Cdh1T: null, CkiT_init: null, Comp1_init: null, Comp2_init: null, compartment: null, CycACki_init: null, CycAT_init: null, CycDCki_init: null, CycDT_init: null, CycECki_init: null, CycET_init: null, E2FT_init: null, Emi1T_init: null, EmiC_init: null, initial_Cdh1: null, initial_Cdh1dp: null, initial_CkiT: null, initial_Comp1: null, initial_Comp2: null, initial_CycACki: null, initial_CycAT: null, initial_CycDCki: null, initial_CycDT: null, initial_CycECki: null, initial_CycET: null, initial_E2FT: null, initial_Emi1T: null, initial_EmiC: null, initial_Myc: null, initial_Rbp: null, initial_Rbpp: null, initial_UbI: null, JdpCdh1: null, JdpRb: null, JpCdh1: null, JppRb: null, JpRb: null, JpRbp: null, Kacdh1: null, Kascdh1: null, Kascki: null, Kase2f: null, Kdcki: null, Kdckic: null, Kdcyca: null, Kdcycac: null, Kdcycd: null, Kdcyce: null, Kdcycea: null, Kde2f: null, Kde2fa: null, Kdemi1: null, Kdemi1c: null, Kdiscdh1: null, Kdiscki: null, Kdise2f: null, Kdm: null, Kdprbp: null, Kdprbpp: null, Kdub1: null, Kdub1c: null, Khcyca: null, Khcyce: null, Khe2f: null, Khemi1: null, Kicdh1a: null, Kicdh1e: null, Kppeb: null, Kprb: null, Kprbp: null, Kscki: null, Kscyca: null, Kscycdm: null, Kscycds: null, Kscyce: null, Kscyceb: null, Kscycem: null, Kse2f: null, Kse2fb: null, Kse2fm: null, Ksemi1: null, Ksm: null, Ksub1: null, Myc_init: null, Rbp_init: null, Rbpp_init: null, RbT: null, S: null, UbI_init: null};
    this.metadata.variableOrder = {Myc: null, CycDT: null, CycET: null, CycAT: null, E2FT: null, Comp1: null, Comp2: null, Rbp: null, CkiT: null, CycECki: null, CycDCki: null, CycACki: null, Cdh1dp: null, Emi1T: null, EmiC: null, Cdh1: null, UbI: null, Rbpp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

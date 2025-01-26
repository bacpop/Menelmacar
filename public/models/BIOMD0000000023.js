export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Keq6 = 10;
    internal.Keq8 = 5;
    internal.Ki1Fru = 1;
    internal.Ki2Glc = 1;
    internal.Ki3G6P = 0.10000000000000001;
    internal.Ki4F6P = 10;
    internal.Ki5ADP = 2;
    internal.Ki5Fru = 12;
    internal.Ki6F6P = 0.40000000000000002;
    internal.Ki6Pi = 3;
    internal.Ki6Suc6P = 0.070000000000000007;
    internal.Ki6UDPGlc = 1.3999999999999999;
    internal.Ki8Fru = 4;
    internal.Ki8Suc = 40;
    internal.Ki8UDP = 0.29999999999999999;
    internal.Ki9Fru = 15;
    internal.Ki9Glc = 15;
    internal.Km10F6P = 0.20000000000000001;
    internal.Km11Suc = 100;
    internal.Km1Fruex = 0.20000000000000001;
    internal.Km2Glcex = 0.20000000000000001;
    internal.Km3ATP = 0.25;
    internal.Km3Glc = 0.070000000000000007;
    internal.Km4ATP = 0.25;
    internal.Km4Fru = 10;
    internal.Km5ATP = 0.085000000000000006;
    internal.Km5Fru = 0.10000000000000001;
    internal.Km6F6P = 0.59999999999999998;
    internal.Km6Suc6P = 0.10000000000000001;
    internal.Km6UDP = 0.29999999999999999;
    internal.Km6UDPGlc = 1.8;
    internal.Km7Suc6P = 0.10000000000000001;
    internal.Km8Fru = 4;
    internal.Km8Suc = 50;
    internal.Km8UDP = 0.29999999999999999;
    internal.Km8UDPGlc = 0.29999999999999999;
    internal.Km9Suc = 10;
    internal.Vmax1 = 0.28599999999999998;
    internal.Vmax10 = 0.10000000000000001;
    internal.Vmax11 = 1;
    internal.Vmax2 = 0.28599999999999998;
    internal.Vmax3 = 0.19700000000000001;
    internal.Vmax4 = 0.19700000000000001;
    internal.Vmax5 = 0.16400000000000001;
    internal.Vmax6f = 0.379;
    internal.Vmax6r = 0.20000000000000001;
    internal.Vmax7 = 0.5;
    internal.Vmax8f = 0.67700000000000005;
    internal.Vmax8r = 0.29999999999999999;
    internal.Vmax9 = 0.372;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_Fru;
    state[1] = internal.initial_Glc;
    state[2] = internal.initial_HexP;
    state[3] = internal.initial_Suc6P;
    state[4] = internal.initial_Suc;
    state[5] = internal.initial_Sucvac;
    state[6] = internal.initial_glycolysis;
    state[7] = internal.initial_phos;
    state[8] = internal.initial_UDP;
    state[9] = internal.initial_ADP;
    state[10] = internal.initial_ATP;
    state[11] = internal.initial_Glcex;
    state[12] = internal.initial_Fruex;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "ATP_init", "Fru_init", "Fruex_init", "Glc_init", "Glcex_init", "glycolysis_init", "HexP_init", "phos_init", "Suc_init", "Suc6P_init", "Sucvac_init", "UDP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fru_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fruex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glcex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glycolysis_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HexP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phos_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Suc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Suc6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sucvac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UDP_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Fru = internal.Fru_init;
    internal.initial_Fruex = internal.Fruex_init;
    internal.initial_Glc = internal.Glc_init;
    internal.initial_Glcex = internal.Glcex_init;
    internal.initial_glycolysis = internal.glycolysis_init;
    internal.initial_HexP = internal.HexP_init;
    internal.initial_phos = internal.phos_init;
    internal.initial_Suc = internal.Suc_init;
    internal.initial_Suc6P = internal.Suc6P_init;
    internal.initial_Sucvac = internal.Sucvac_init;
    internal.initial_UDP = internal.UDP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Fru = state[0];
    const Glc = state[1];
    const HexP = state[2];
    const Suc6P = state[3];
    const Suc = state[4];
    const phos = state[7];
    const UDP = state[8];
    const ADP = state[9];
    const ATP = state[10];
    const Glcex = state[11];
    const Fruex = state[12];
    dstatedt[9] = 0;
    dstatedt[10] = 0;
    dstatedt[12] = 0;
    dstatedt[11] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[5] = 0;
    dstatedt[8] = 0;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.Vmax1 * Fruex / (internal.Km1Fruex * (1 + Fru / internal.Ki1Fru) + Fruex)) - 1 * internal.compartment * (internal.Vmax4 * (Fru / internal.Km4Fru) * (ATP / internal.Km4ATP) / ((1 + ATP / internal.Km4ATP) * (1 + Glc / internal.Km3Glc + Fru / internal.Km4Fru + 0.113 * HexP / internal.Ki3G6P + 0.057500000000000002 * HexP / internal.Ki4F6P))) - 1 * internal.compartment * (internal.Vmax5 / (1 + Fru / internal.Ki5Fru) * (Fru / internal.Km5Fru) * (ATP / internal.Km5ATP) / (1 + Fru / internal.Km5Fru + ATP / internal.Km5ATP + Fru * ATP / (internal.Km5Fru * internal.Km5ATP) + ADP / internal.Ki5ADP)) - 1 * internal.compartment * (- internal.Vmax8f * (Suc * UDP - Fru * 0.82310000000000005 * HexP / internal.Keq8) / (Suc * UDP * (1 + Fru / internal.Ki8Fru) + internal.Km8Suc * (UDP + internal.Ki8UDP) + internal.Km8UDP * Suc + internal.Vmax8f / (internal.Vmax8r * internal.Keq8) * (internal.Km8UDPGlc * Fru * (1 + UDP / internal.Ki8UDP) + 0.82310000000000005 * HexP * (internal.Km8Fru * (1 + internal.Km8UDP * Suc / (internal.Ki8UDP * internal.Km8Suc)) + Fru * (1 + Suc / internal.Ki8Suc))))) + 1 * internal.compartment * (internal.Vmax9 / (1 + Glc / internal.Ki9Glc) * Suc / (internal.Km9Suc * (1 + Fru / internal.Ki9Fru) + Suc));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.Vmax2 * Glcex / (internal.Km2Glcex * (1 + Glc / internal.Ki2Glc) + Glcex)) - 1 * internal.compartment * (internal.Vmax3 * (Glc / internal.Km3Glc) * (ATP / internal.Km3ATP) / ((1 + ATP / internal.Km3ATP) * (1 + Glc / internal.Km3Glc + Fru / internal.Km4Fru + 0.113 * HexP / internal.Ki3G6P + 0.057500000000000002 * HexP / internal.Ki4F6P))) + 1 * internal.compartment * (internal.Vmax9 / (1 + Glc / internal.Ki9Glc) * Suc / (internal.Km9Suc * (1 + Fru / internal.Ki9Fru) + Suc));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.Vmax3 * (Glc / internal.Km3Glc) * (ATP / internal.Km3ATP) / ((1 + ATP / internal.Km3ATP) * (1 + Glc / internal.Km3Glc + Fru / internal.Km4Fru + 0.113 * HexP / internal.Ki3G6P + 0.057500000000000002 * HexP / internal.Ki4F6P))) + 1 * internal.compartment * (internal.Vmax4 * (Fru / internal.Km4Fru) * (ATP / internal.Km4ATP) / ((1 + ATP / internal.Km4ATP) * (1 + Glc / internal.Km3Glc + Fru / internal.Km4Fru + 0.113 * HexP / internal.Ki3G6P + 0.057500000000000002 * HexP / internal.Ki4F6P))) + 1 * internal.compartment * (internal.Vmax5 / (1 + Fru / internal.Ki5Fru) * (Fru / internal.Km5Fru) * (ATP / internal.Km5ATP) / (1 + Fru / internal.Km5Fru + ATP / internal.Km5ATP + Fru * ATP / (internal.Km5Fru * internal.Km5ATP) + ADP / internal.Ki5ADP)) - 2 * internal.compartment * (internal.Vmax6f * (0.057500000000000002 * HexP * 0.82310000000000005 * HexP - Suc6P * UDP / internal.Keq6) / (0.057500000000000002 * HexP * 0.82310000000000005 * HexP * (1 + Suc6P / internal.Ki6Suc6P) + internal.Km6F6P * (1 + phos / internal.Ki6Pi) * (0.82310000000000005 * HexP + internal.Ki6UDPGlc) + internal.Km6UDPGlc * 0.057500000000000002 * HexP + internal.Vmax6f / (internal.Vmax6r * internal.Keq6) * (internal.Km6UDP * Suc6P * (1 + 0.82310000000000005 * HexP / internal.Ki6UDPGlc) + UDP * (internal.Km6Suc6P * (1 + internal.Km6UDPGlc * 0.057500000000000002 * HexP / (internal.Ki6UDPGlc * internal.Km6F6P * (1 + phos / internal.Ki6Pi))) + Suc6P * (1 + 0.057500000000000002 * HexP / internal.Ki6F6P))))) - 1 * internal.compartment * (- internal.Vmax8f * (Suc * UDP - Fru * 0.82310000000000005 * HexP / internal.Keq8) / (Suc * UDP * (1 + Fru / internal.Ki8Fru) + internal.Km8Suc * (UDP + internal.Ki8UDP) + internal.Km8UDP * Suc + internal.Vmax8f / (internal.Vmax8r * internal.Keq8) * (internal.Km8UDPGlc * Fru * (1 + UDP / internal.Ki8UDP) + 0.82310000000000005 * HexP * (internal.Km8Fru * (1 + internal.Km8UDP * Suc / (internal.Ki8UDP * internal.Km8Suc)) + Fru * (1 + Suc / internal.Ki8Suc))))) - 1 * internal.compartment * (internal.Vmax10 * 0.057500000000000002 * HexP / (internal.Km10F6P + 0.057500000000000002 * HexP));
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.Vmax7 * Suc6P / (internal.Km7Suc6P + Suc6P)) + 1 * internal.compartment * (- internal.Vmax8f * (Suc * UDP - Fru * 0.82310000000000005 * HexP / internal.Keq8) / (Suc * UDP * (1 + Fru / internal.Ki8Fru) + internal.Km8Suc * (UDP + internal.Ki8UDP) + internal.Km8UDP * Suc + internal.Vmax8f / (internal.Vmax8r * internal.Keq8) * (internal.Km8UDPGlc * Fru * (1 + UDP / internal.Ki8UDP) + 0.82310000000000005 * HexP * (internal.Km8Fru * (1 + internal.Km8UDP * Suc / (internal.Ki8UDP * internal.Km8Suc)) + Fru * (1 + Suc / internal.Ki8Suc))))) - 1 * internal.compartment * (internal.Vmax9 / (1 + Glc / internal.Ki9Glc) * Suc / (internal.Km9Suc * (1 + Fru / internal.Ki9Fru) + Suc)) - 1 * internal.compartment * (internal.Vmax11 * Suc / (internal.Km11Suc + Suc));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.Vmax6f * (0.057500000000000002 * HexP * 0.82310000000000005 * HexP - Suc6P * UDP / internal.Keq6) / (0.057500000000000002 * HexP * 0.82310000000000005 * HexP * (1 + Suc6P / internal.Ki6Suc6P) + internal.Km6F6P * (1 + phos / internal.Ki6Pi) * (0.82310000000000005 * HexP + internal.Ki6UDPGlc) + internal.Km6UDPGlc * 0.057500000000000002 * HexP + internal.Vmax6f / (internal.Vmax6r * internal.Keq6) * (internal.Km6UDP * Suc6P * (1 + 0.82310000000000005 * HexP / internal.Ki6UDPGlc) + UDP * (internal.Km6Suc6P * (1 + internal.Km6UDPGlc * 0.057500000000000002 * HexP / (internal.Ki6UDPGlc * internal.Km6F6P * (1 + phos / internal.Ki6Pi))) + Suc6P * (1 + 0.057500000000000002 * HexP / internal.Ki6F6P))))) - 1 * internal.compartment * (internal.Vmax7 * Suc6P / (internal.Km7Suc6P + Suc6P));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Fru", "Glc", "HexP", "Suc6P", "Suc", "Sucvac", "glycolysis", "phos", "UDP", "ADP", "ATP", "Glcex", "Fruex"];
    this.metadata.internalOrder = {ADP_init: null, ATP_init: null, compartment: null, Fru_init: null, Fruex_init: null, Glc_init: null, Glcex_init: null, glycolysis_init: null, HexP_init: null, initial_ADP: null, initial_ATP: null, initial_Fru: null, initial_Fruex: null, initial_Glc: null, initial_Glcex: null, initial_glycolysis: null, initial_HexP: null, initial_phos: null, initial_Suc: null, initial_Suc6P: null, initial_Sucvac: null, initial_UDP: null, Keq6: null, Keq8: null, Ki1Fru: null, Ki2Glc: null, Ki3G6P: null, Ki4F6P: null, Ki5ADP: null, Ki5Fru: null, Ki6F6P: null, Ki6Pi: null, Ki6Suc6P: null, Ki6UDPGlc: null, Ki8Fru: null, Ki8Suc: null, Ki8UDP: null, Ki9Fru: null, Ki9Glc: null, Km10F6P: null, Km11Suc: null, Km1Fruex: null, Km2Glcex: null, Km3ATP: null, Km3Glc: null, Km4ATP: null, Km4Fru: null, Km5ATP: null, Km5Fru: null, Km6F6P: null, Km6Suc6P: null, Km6UDP: null, Km6UDPGlc: null, Km7Suc6P: null, Km8Fru: null, Km8Suc: null, Km8UDP: null, Km8UDPGlc: null, Km9Suc: null, phos_init: null, Suc_init: null, Suc6P_init: null, Sucvac_init: null, UDP_init: null, Vmax1: null, Vmax10: null, Vmax11: null, Vmax2: null, Vmax3: null, Vmax4: null, Vmax5: null, Vmax6f: null, Vmax6r: null, Vmax7: null, Vmax8f: null, Vmax8r: null, Vmax9: null};
    this.metadata.variableOrder = {Fru: null, Glc: null, HexP: null, Suc6P: null, Suc: null, Sucvac: null, glycolysis: null, phos: null, UDP: null, ADP: null, ATP: null, Glcex: null, Fruex: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

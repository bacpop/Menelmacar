export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.cytosol = 1;
    internal.k1 = 0.0060000000000000001;
    internal.k2 = 0;
    internal.phloem = 1;
    internal.vacuole = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(22).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_PGA;
    state[2] = internal.initial_TP;
    state[3] = internal.initial_HeP;
    state[4] = internal.initial_TPGA;
    state[5] = internal.initial_E4P;
    state[6] = internal.initial_S7P;
    state[7] = internal.initial_Ru5P;
    state[8] = internal.initial_GG;
    state[9] = internal.initial_ATP;
    state[10] = internal.initial_ADP;
    state[11] = internal.initial_UTP;
    state[12] = internal.initial_UDP;
    state[13] = internal.initial_Pi;
    state[14] = internal.initial_CO2;
    state[15] = internal.initial_TPc;
    state[16] = internal.initial_HePc;
    state[17] = internal.initial_Suc;
    state[18] = internal.initial_Pic;
    state[19] = internal.initial_SucV;
    state[20] = internal.initial_E;
    state[21] = internal.initial_Resp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "ATP_init", "CO2_init", "D", "E_init", "E4P_init", "GG_init", "HeP_init", "HePc_init", "PGA_init", "phi", "Pi_init", "Pic_init", "r", "Resp_init", "Ru5P_init", "RuBP_init", "S7P_init", "Suc_init", "SucV_init", "TP_init", "TPc_init", "TPGA_init", "UDP_init", "UTP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CO2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HeP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HePc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pic_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Resp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Suc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SucV_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UTP_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_E = internal.E_init;
    internal.initial_E4P = internal.E4P_init;
    internal.initial_GG = internal.GG_init;
    internal.initial_HeP = internal.HeP_init;
    internal.initial_HePc = internal.HePc_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_Pi = internal.Pi_init;
    internal.initial_Pic = internal.Pic_init;
    internal.initial_Resp = internal.Resp_init;
    internal.initial_Ru5P = internal.Ru5P_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.initial_S7P = internal.S7P_init;
    internal.initial_Suc = internal.Suc_init;
    internal.initial_SucV = internal.SucV_init;
    internal.initial_TP = internal.TP_init;
    internal.initial_TPc = internal.TPc_init;
    internal.initial_TPGA = internal.TPGA_init;
    internal.initial_UDP = internal.UDP_init;
    internal.initial_UTP = internal.UTP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RuBP = state[0];
    const PGA = state[1];
    const TP = state[2];
    const HeP = state[3];
    const TPGA = state[4];
    const E4P = state[5];
    const S7P = state[6];
    const Ru5P = state[7];
    const GG = state[8];
    const ATP = state[9];
    const ADP = state[10];
    const UTP = state[11];
    const UDP = state[12];
    const Pi = state[13];
    const CO2 = state[14];
    const TPc = state[15];
    const HePc = state[16];
    const Suc = state[17];
    const Pic = state[18];
    const SucV = state[19];
    const E = state[20];
    dstatedt[14] = 0;
    dstatedt[20] = 0;
    dstatedt[21] = 0;
    dstatedt[10] = 0 + 1 * internal.chloroplast * internal.k1 * PGA * ATP + 1 * internal.chloroplast * internal.k1 * Ru5P * ATP - 1 * internal.chloroplast * internal.k1 * ADP * Pi + 1 * internal.chloroplast * internal.k1 * ATP * HeP;
    dstatedt[9] = 0 - 1 * internal.chloroplast * internal.k1 * PGA * ATP - 1 * internal.chloroplast * internal.k1 * Ru5P * ATP + 1 * internal.chloroplast * internal.k1 * ADP * Pi - 1 * internal.chloroplast * internal.k1 * ATP * HeP;
    dstatedt[5] = 0 + 1 * internal.chloroplast * internal.k1 * HeP - 1 * internal.chloroplast * internal.k1 * E4P * TP;
    dstatedt[8] = 0 + 1 * internal.chloroplast * internal.k1 * ATP * HeP - 1 * internal.chloroplast * internal.k1 * GG * Pi;
    dstatedt[3] = 0 + 1 * internal.chloroplast * (internal.k1 * Math.pow((TP), (2)) - internal.k2 * HeP * Pi) - 1 * internal.chloroplast * internal.k1 * HeP - 1 * internal.chloroplast * internal.k1 * ATP * HeP + 1 * internal.chloroplast * internal.k1 * GG * Pi;
    dstatedt[1] = 0 + 2 * internal.chloroplast * internal.k1 * RuBP * CO2 - 1 * internal.chloroplast * internal.k1 * PGA * ATP;
    dstatedt[13] = 0 + 1 * internal.chloroplast * internal.k1 * PGA * ATP + 1 * internal.chloroplast * (internal.k1 * Math.pow((TP), (2)) - internal.k2 * HeP * Pi) + 1 * internal.chloroplast * internal.k1 * E4P * TP - 1 * internal.chloroplast * internal.k1 * ADP * Pi + 2 * internal.chloroplast * internal.k1 * ATP * HeP - 1 * internal.chloroplast * internal.k1 * GG * Pi + 1 * internal.k1 * TP * Pic;
    dstatedt[7] = 0 + 1 * internal.chloroplast * internal.k1 * S7P + 1 * internal.chloroplast * internal.k1 * TPGA * TP - 1 * internal.chloroplast * internal.k1 * Ru5P * ATP;
    dstatedt[0] = 0 - 1 * internal.chloroplast * internal.k1 * RuBP * CO2 + 1 * internal.chloroplast * internal.k1 * Ru5P * ATP;
    dstatedt[6] = 0 + 1 * internal.chloroplast * internal.k1 * E4P * TP - 1 * internal.chloroplast * internal.k1 * S7P;
    dstatedt[19] = 0 + 1 * internal.D * Suc - internal.D * SucV;
    dstatedt[2] = 0 + 1 * internal.chloroplast * internal.k1 * PGA * ATP - 2 * internal.chloroplast * (internal.k1 * Math.pow((TP), (2)) - internal.k2 * HeP * Pi) - 1 * internal.chloroplast * internal.k1 * E4P * TP - 1 * internal.chloroplast * internal.k1 * TPGA * TP - 1 * internal.k1 * TP * Pic;
    dstatedt[15] = 0 + 1 * internal.k1 * TP * Pic - 2 * internal.cytosol * internal.k1 * Math.pow((TPc), (2));
    dstatedt[4] = 0 + 1 * internal.chloroplast * internal.k1 * HeP + 1 * internal.chloroplast * internal.k1 * S7P - 1 * internal.chloroplast * internal.k1 * TPGA * TP;
    var v_15 = 0.0258 * HePc * UTP;
    dstatedt[16] = 0 + 1 * internal.cytosol * internal.k1 * Math.pow((TPc), (2)) - 2 * (v_15);
    dstatedt[18] = 0 - 1 * internal.k1 * TP * Pic + 1 * internal.cytosol * internal.k1 * Math.pow((TPc), (2)) + 3 * (v_15) - 1 * internal.k1 * UDP * Pic;
    dstatedt[17] = 0 + 1 * (v_15) - 1 * internal.r * Suc - 1 * internal.D * Suc - internal.D * SucV - 1 * internal.phi * Suc - internal.phi * E;
    dstatedt[12] = 0 + 1 * (v_15) - 1 * internal.k1 * UDP * Pic;
    dstatedt[11] = 0 - 1 * (v_15) + 1 * internal.k1 * UDP * Pic;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "PGA", "TP", "HeP", "TPGA", "E4P", "S7P", "Ru5P", "GG", "ATP", "ADP", "UTP", "UDP", "Pi", "CO2", "TPc", "HePc", "Suc", "Pic", "SucV", "E", "Resp"];
    this.metadata.internalOrder = {ADP_init: null, ATP_init: null, chloroplast: null, CO2_init: null, cytosol: null, D: null, E_init: null, E4P_init: null, GG_init: null, HeP_init: null, HePc_init: null, initial_ADP: null, initial_ATP: null, initial_CO2: null, initial_E: null, initial_E4P: null, initial_GG: null, initial_HeP: null, initial_HePc: null, initial_PGA: null, initial_Pi: null, initial_Pic: null, initial_Resp: null, initial_Ru5P: null, initial_RuBP: null, initial_S7P: null, initial_Suc: null, initial_SucV: null, initial_TP: null, initial_TPc: null, initial_TPGA: null, initial_UDP: null, initial_UTP: null, k1: null, k2: null, PGA_init: null, phi: null, phloem: null, Pi_init: null, Pic_init: null, r: null, Resp_init: null, Ru5P_init: null, RuBP_init: null, S7P_init: null, Suc_init: null, SucV_init: null, TP_init: null, TPc_init: null, TPGA_init: null, UDP_init: null, UTP_init: null, vacuole: null};
    this.metadata.variableOrder = {RuBP: null, PGA: null, TP: null, HeP: null, TPGA: null, E4P: null, S7P: null, Ru5P: null, GG: null, ATP: null, ADP: null, UTP: null, UDP: null, Pi: null, CO2: null, TPc: null, HePc: null, Suc: null, Pic: null, SucV: null, E: null, Resp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

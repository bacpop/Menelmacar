export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k10f = 4800;
    internal.k10r = 0.0054000000000000003;
    internal.k1f = 1960;
    internal.k1r = 480000;
    internal.k2f = 108000;
    internal.k2r = 294;
    internal.k3f = 14000;
    internal.k3r = 14000;
    internal.k4f = 84000;
    internal.k4r = 3360;
    internal.k5f = 21960;
    internal.k5r = 21960;
    internal.k6f = 4392;
    internal.k6r = 3384;
    internal.k7f = 880;
    internal.k7r = 880;
    internal.k8f = 2640;
    internal.k8r = 960;
    internal.k9f = 260;
    internal.k9r = 389;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(17).fill(0);
    state[0] = internal.initial_EI;
    state[1] = internal.initial_PyrPI;
    state[2] = internal.initial_EIP;
    state[3] = internal.initial_HPr;
    state[4] = internal.initial_EIPHPr;
    state[5] = internal.initial_HPrP;
    state[6] = internal.initial_EIIA;
    state[7] = internal.initial_HPrPIIA;
    state[8] = internal.initial_EIIAP;
    state[9] = internal.initial_EIICB;
    state[10] = internal.initial_EIIAPIICB;
    state[11] = internal.initial_EIICBP;
    state[12] = internal.initial_EIICBPGlc;
    state[13] = internal.initial_PEP;
    state[14] = internal.initial_Pyr;
    state[15] = internal.initial_GlcP;
    state[16] = internal.initial_Glc;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["EI_init", "EIIA_init", "EIIAP_init", "EIIAPIICB_init", "EIICB_init", "EIICBP_init", "EIICBPGlc_init", "EIP_init", "EIPHPr_init", "Glc_init", "GlcP_init", "HPr_init", "HPrP_init", "HPrPIIA_init", "PEP_init", "Pyr_init", "PyrPI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "EI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIAP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIAPIICB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICBPGlc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIPHPr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPrP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPrPIIA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PEP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PyrPI_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_EI = internal.EI_init;
    internal.initial_EIIA = internal.EIIA_init;
    internal.initial_EIIAP = internal.EIIAP_init;
    internal.initial_EIIAPIICB = internal.EIIAPIICB_init;
    internal.initial_EIICB = internal.EIICB_init;
    internal.initial_EIICBP = internal.EIICBP_init;
    internal.initial_EIICBPGlc = internal.EIICBPGlc_init;
    internal.initial_EIP = internal.EIP_init;
    internal.initial_EIPHPr = internal.EIPHPr_init;
    internal.initial_Glc = internal.Glc_init;
    internal.initial_GlcP = internal.GlcP_init;
    internal.initial_HPr = internal.HPr_init;
    internal.initial_HPrP = internal.HPrP_init;
    internal.initial_HPrPIIA = internal.HPrPIIA_init;
    internal.initial_PEP = internal.PEP_init;
    internal.initial_Pyr = internal.Pyr_init;
    internal.initial_PyrPI = internal.PyrPI_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const EI = state[0];
    const PyrPI = state[1];
    const EIP = state[2];
    const HPr = state[3];
    const EIPHPr = state[4];
    const HPrP = state[5];
    const EIIA = state[6];
    const HPrPIIA = state[7];
    const EIIAP = state[8];
    const EIICB = state[9];
    const EIIAPIICB = state[10];
    const EIICBP = state[11];
    const EIICBPGlc = state[12];
    const PEP = state[13];
    const Pyr = state[14];
    const GlcP = state[15];
    const Glc = state[16];
    dstatedt[16] = 0;
    dstatedt[15] = 0;
    dstatedt[13] = 0;
    dstatedt[14] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1f * PEP * EI - internal.k1r * PyrPI) + 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP);
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA) + 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP) - 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB);
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB) - 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP);
    dstatedt[9] = 0 - 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB) + 1 * internal.compartment * (internal.k10f * EIICBPGlc - internal.k10r * EIICB * GlcP);
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP) - 1 * internal.compartment * (internal.k9f * EIICBP * Glc - internal.k9r * EIICBPGlc);
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.k9f * EIICBP * Glc - internal.k9r * EIICBPGlc) - 1 * internal.compartment * (internal.k10f * EIICBPGlc - internal.k10r * EIICB * GlcP);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k2f * PyrPI - internal.k2r * Pyr * EIP) - 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr) - 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP);
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr) + 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP) - 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA) - 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1f * PEP * EI - internal.k1r * PyrPI) - 1 * internal.compartment * (internal.k2f * PyrPI - internal.k2r * Pyr * EIP);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EI", "PyrPI", "EIP", "HPr", "EIPHPr", "HPrP", "EIIA", "HPrPIIA", "EIIAP", "EIICB", "EIIAPIICB", "EIICBP", "EIICBPGlc", "PEP", "Pyr", "GlcP", "Glc"];
    this.metadata.internalOrder = {compartment: null, EI_init: null, EIIA_init: null, EIIAP_init: null, EIIAPIICB_init: null, EIICB_init: null, EIICBP_init: null, EIICBPGlc_init: null, EIP_init: null, EIPHPr_init: null, Glc_init: null, GlcP_init: null, HPr_init: null, HPrP_init: null, HPrPIIA_init: null, initial_EI: null, initial_EIIA: null, initial_EIIAP: null, initial_EIIAPIICB: null, initial_EIICB: null, initial_EIICBP: null, initial_EIICBPGlc: null, initial_EIP: null, initial_EIPHPr: null, initial_Glc: null, initial_GlcP: null, initial_HPr: null, initial_HPrP: null, initial_HPrPIIA: null, initial_PEP: null, initial_Pyr: null, initial_PyrPI: null, k10f: null, k10r: null, k1f: null, k1r: null, k2f: null, k2r: null, k3f: null, k3r: null, k4f: null, k4r: null, k5f: null, k5r: null, k6f: null, k6r: null, k7f: null, k7r: null, k8f: null, k8r: null, k9f: null, k9r: null, PEP_init: null, Pyr_init: null, PyrPI_init: null};
    this.metadata.variableOrder = {EI: null, PyrPI: null, EIP: null, HPr: null, EIPHPr: null, HPrP: null, EIIA: null, HPrPIIA: null, EIIAP: null, EIICB: null, EIIAPIICB: null, EIICBP: null, EIICBPGlc: null, PEP: null, Pyr: null, GlcP: null, Glc: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

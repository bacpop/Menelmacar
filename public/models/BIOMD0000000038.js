export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Glc = 500;
    internal.GlcP = 50;
    internal.PEP = 2800;
    internal.Pyr = 900;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["EI_init", "EIIA_init", "EIIAP_init", "EIIAPIICB_init", "EIICB_init", "EIICBP_init", "EIICBPGlc_init", "EIP_init", "EIPHPr_init", "HPr_init", "HPrP_init", "HPrPIIA_init", "k10f", "k10r", "k1f", "k1r", "k2f", "k2r", "k3f", "k3r", "k4f", "k4r", "k5f", "k5r", "k6f", "k6r", "k7f", "k7r", "k8f", "k8r", "k9f", "k9r", "PyrPI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "EI_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIA_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIAP_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIIAPIICB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICB_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICBP_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIICBPGlc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EIPHPr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPr_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPrP_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HPrPIIA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10f", internal, 4800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10r", internal, 0.0054000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1f", internal, 1960, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 480000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2f", internal, 108000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2r", internal, 294, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3f", internal, 14000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3r", internal, 14000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4f", internal, 84000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4r", internal, 3360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5f", internal, 21960, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5r", internal, 21960, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6f", internal, 4392, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6r", internal, 3384, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7f", internal, 880, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7r", internal, 880, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8f", internal, 2640, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8r", internal, 960, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9f", internal, 260, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9r", internal, 389, -Infinity, Infinity, false);
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
    internal.initial_HPr = internal.HPr_init;
    internal.initial_HPrP = internal.HPrP_init;
    internal.initial_HPrPIIA = internal.HPrPIIA_init;
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
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1f * internal.PEP * EI - internal.k1r * PyrPI) + 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP);
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA) + 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP) - 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB);
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB) - 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP);
    dstatedt[9] = 0 - 1 * internal.compartment * (internal.k7f * EIIAP * EIICB - internal.k7r * EIIAPIICB) + 1 * internal.compartment * (internal.k10f * EIICBPGlc - internal.k10r * EIICB * internal.GlcP);
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.k8f * EIIAPIICB - internal.k8r * EIIA * EIICBP) - 1 * internal.compartment * (internal.k9f * EIICBP * internal.Glc - internal.k9r * EIICBPGlc);
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.k9f * EIICBP * internal.Glc - internal.k9r * EIICBPGlc) - 1 * internal.compartment * (internal.k10f * EIICBPGlc - internal.k10r * EIICB * internal.GlcP);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k2f * PyrPI - internal.k2r * internal.Pyr * EIP) - 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr) - 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP);
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.k3f * EIP * HPr - internal.k3r * EIPHPr) + 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k4f * EIPHPr - internal.k4r * EI * HPrP) - 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k5f * HPrP * EIIA - internal.k5r * HPrPIIA) - 1 * internal.compartment * (internal.k6f * HPrPIIA - internal.k6r * HPr * EIIAP);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1f * internal.PEP * EI - internal.k1r * PyrPI) - 1 * internal.compartment * (internal.k2f * PyrPI - internal.k2r * internal.Pyr * EIP);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EI", "PyrPI", "EIP", "HPr", "EIPHPr", "HPrP", "EIIA", "HPrPIIA", "EIIAP", "EIICB", "EIIAPIICB", "EIICBP", "EIICBPGlc"];
    this.metadata.internalOrder = {compartment: null, EI_init: null, EIIA_init: null, EIIAP_init: null, EIIAPIICB_init: null, EIICB_init: null, EIICBP_init: null, EIICBPGlc_init: null, EIP_init: null, EIPHPr_init: null, Glc: null, GlcP: null, HPr_init: null, HPrP_init: null, HPrPIIA_init: null, initial_EI: null, initial_EIIA: null, initial_EIIAP: null, initial_EIIAPIICB: null, initial_EIICB: null, initial_EIICBP: null, initial_EIICBPGlc: null, initial_EIP: null, initial_EIPHPr: null, initial_HPr: null, initial_HPrP: null, initial_HPrPIIA: null, initial_PyrPI: null, k10f: null, k10r: null, k1f: null, k1r: null, k2f: null, k2r: null, k3f: null, k3r: null, k4f: null, k4r: null, k5f: null, k5r: null, k6f: null, k6r: null, k7f: null, k7r: null, k8f: null, k8r: null, k9f: null, k9r: null, PEP: null, Pyr: null, PyrPI_init: null};
    this.metadata.variableOrder = {EI: null, PyrPI: null, EIP: null, HPr: null, EIPHPr: null, HPrP: null, EIIA: null, HPrPIIA: null, EIIAP: null, EIICB: null, EIIAPIICB: null, EIICBP: null, EIICBPGlc: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.Extracellular = 0.27777777777777801;
    internal.hv_Cytosol = 0;
    internal.IP3_basal = 0.16;
    internal.IP3X_Cytosol = 0;
    internal.k_PIP2hyd = 2.3999999999999999;
    internal.k_PIP2PHhyd = 0;
    internal.KfPLCact = 0.00050000000000000001;
    internal.kIP3deg = 0.080000000000000002;
    internal.krPLCact = 0.10000000000000001;
    internal.NM = 0.11111111111111099;
    internal.Nucleus = 0.11111111111111099;
    internal.PM = 0.55555555555559999;
    internal.stim_PM = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_PIP2_PHGFP_PM;
    state[1] = internal.initial_PH_GFP_Cyt;
    state[2] = internal.initial_PI_PM;
    state[3] = internal.initial_IP3_PHGFP_Cyt;
    state[4] = internal.initial_PIP2_PM;
    state[5] = internal.initial_PIP_PM;
    state[6] = internal.initial_DAG_PM;
    state[7] = internal.initial_PLC_PM;
    state[8] = internal.initial_PLC_act_PM;
    state[9] = internal.initial_IP3_Cyt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["DAG_PM_init", "IP3_Cyt_init", "IP3_PHGFP_Cyt_init", "kBasalSynPIP_PIPSyn", "kBasalSynPIP2_PIP2Syn", "KdIP3PH_IP3_PHGFP", "KdPIP2PH_PIP2_PH", "kf_IP3PH_IP3_PHGFP", "kf_PIP2PH_PIP2_PH", "KMOLE", "kStimSynPIP_PIPSyn", "kStimSynPIP2_PIP2Syn", "PH_GFP_Cyt_init", "PI_PM_init", "PIP_basal_PIPSyn", "PIP_PM_init", "PIP2_basal_PIP2Syn", "PIP2_PHGFP_PM_init", "PIP2_PM_init", "PIP2syndecay_PIP2Syn", "PIPsyndecay_PIPSyn", "PLC_act_PM_init", "PLC_PM_init", "stimdecay_PLCact", "tau0_PLCact", "tauPIP2syn_PIP2Syn", "tauPIPsyn_PIPSyn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "DAG_PM_init", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_Cyt_init", internal, 96.319999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_PHGFP_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kBasalSynPIP_PIPSyn", internal, 0.0054999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kBasalSynPIP2_PIP2Syn", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdIP3PH_IP3_PHGFP", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdPIP2PH_PIP2_PH", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_IP3PH_IP3_PHGFP", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_PIP2PH_PIP2_PH", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMOLE", internal, 0.0016611295681063099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kStimSynPIP_PIPSyn", internal, 0.019, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kStimSynPIP2_PIP2Syn", internal, 0.92000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PH_GFP_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI_PM_init", internal, 142857, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP_basal_PIPSyn", internal, 2857, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP_PM_init", internal, 2857, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2_basal_PIP2Syn", internal, 4000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2_PHGFP_PM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2_PM_init", internal, 4000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2syndecay_PIP2Syn", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIPsyndecay_PIPSyn", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLC_act_PM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLC_PM_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stimdecay_PLCact", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau0_PLCact", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauPIP2syn_PIP2Syn", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauPIPsyn_PIPSyn", internal, 0.050000000000000003, -Infinity, Infinity, false);
    internal.initial_DAG_PM = internal.DAG_PM_init;
    internal.initial_IP3_Cyt = internal.IP3_Cyt_init;
    internal.initial_IP3_PHGFP_Cyt = internal.IP3_PHGFP_Cyt_init;
    internal.initial_PH_GFP_Cyt = internal.PH_GFP_Cyt_init;
    internal.initial_PI_PM = internal.PI_PM_init;
    internal.initial_PIP_PM = internal.PIP_PM_init;
    internal.initial_PIP2_PHGFP_PM = internal.PIP2_PHGFP_PM_init;
    internal.initial_PIP2_PM = internal.PIP2_PM_init;
    internal.initial_PLC_act_PM = internal.PLC_act_PM_init;
    internal.initial_PLC_PM = internal.PLC_PM_init;
    internal.kr_IP3PH_IP3_PHGFP = internal.kf_IP3PH_IP3_PHGFP * internal.KdIP3PH_IP3_PHGFP;
    internal.kr_PIP2PH_PIP2_PH = internal.kf_PIP2PH_PIP2_PH * internal.KdPIP2PH_PIP2_PH;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PIP2_PHGFP_PM = state[0];
    const PH_GFP_Cyt = state[1];
    const PI_PM = state[2];
    const IP3_PHGFP_Cyt = state[3];
    const PIP2_PM = state[4];
    const PIP_PM = state[5];
    const PLC_PM = state[7];
    const PLC_act_PM = state[8];
    const IP3_Cyt = state[9];
    dstatedt[6] = 0 + 1 * (internal.k_PIP2hyd * PIP2_PM * PLC_act_PM * internal.PM) + 1 * (internal.k_PIP2PHhyd * PLC_act_PM * PIP2_PHGFP_PM * internal.PM);
    var Rate_PIP2Synbasal_PIP2Syn = ((PIP2_PM < internal.PIP2_basal_PIP2Syn ? 0.58099999999999996 * internal.kBasalSynPIP2_PIP2Syn * (- 1 + Math.exp((internal.PIP2_basal_PIP2Syn + - PIP2_PM) * (1 / internal.PIP2_basal_PIP2Syn))) : 0));
    var Rate_PIP2SynStim_PIP2Syn = ((t > internal.tauPIP2syn_PIP2Syn ? internal.kStimSynPIP2_PIP2Syn * Math.exp(- ((t + - internal.tauPIP2syn_PIP2Syn) * (1 / internal.PIP2syndecay_PIP2Syn))) : 0));
    var Ratebasal_PIPsyn_PIPSyn = ((PIP_PM < internal.PIP_basal_PIPSyn ? 0.58099999999999996 * internal.kBasalSynPIP_PIPSyn * (- 1 + Math.exp((internal.PIP_basal_PIPSyn + - PIP_PM) * (1 / internal.PIP_basal_PIPSyn))) : 0));
    var Ratestim_PIPsyn_PIPSyn = ((t > internal.tauPIPsyn_PIPSyn ? internal.kStimSynPIP_PIPSyn * Math.exp(- ((t + - internal.tauPIPsyn_PIPSyn) * (1 / internal.PIPsyndecay_PIPSyn))) : 0));
    var signal_PLCact = ((t > internal.tau0_PLCact ? Math.exp(- ((t + - internal.tau0_PLCact) * (1 / internal.stimdecay_PLCact))) : 0));
    dstatedt[9] = 0 + 1 * (internal.k_PIP2hyd * PIP2_PM * PLC_act_PM * internal.PM) + 1 * (internal.k_PIP2PHhyd * PLC_act_PM * PIP2_PHGFP_PM * internal.PM) - 1 * internal.Cytosol * (internal.kIP3deg * (0.0016611295681063099 * IP3_Cyt + - internal.IP3_basal) * 1 * (1 / internal.KMOLE)) - 1 * internal.Cytosol * ((internal.kf_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_Cyt * 0.0016611295681063099 * PH_GFP_Cyt + - (internal.kr_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_PHGFP_Cyt)) * 1 * (1 / internal.KMOLE));
    dstatedt[3] = 0 + 1 * internal.Cytosol * ((internal.kf_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_Cyt * 0.0016611295681063099 * PH_GFP_Cyt + - (internal.kr_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_PHGFP_Cyt)) * 1 * (1 / internal.KMOLE));
    dstatedt[1] = 0 + 1 * (internal.k_PIP2PHhyd * PLC_act_PM * PIP2_PHGFP_PM * internal.PM) - 1 * ((internal.kf_PIP2PH_PIP2_PH * 0.0016611295681063099 * PH_GFP_Cyt * PIP2_PM + - (internal.kr_PIP2PH_PIP2_PH * PIP2_PHGFP_PM)) * internal.PM) - 1 * internal.Cytosol * ((internal.kf_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_Cyt * 0.0016611295681063099 * PH_GFP_Cyt + - (internal.kr_IP3PH_IP3_PHGFP * 0.0016611295681063099 * IP3_PHGFP_Cyt)) * 1 * (1 / internal.KMOLE));
    dstatedt[2] = 0 - 1 * internal.PM * ((Ratebasal_PIPsyn_PIPSyn + Ratestim_PIPsyn_PIPSyn) * PI_PM);
    dstatedt[5] = 0 + 1 * internal.PM * ((Ratebasal_PIPsyn_PIPSyn + Ratestim_PIPsyn_PIPSyn) * PI_PM) - 1 * internal.PM * ((Rate_PIP2Synbasal_PIP2Syn + Rate_PIP2SynStim_PIP2Syn) * PIP_PM);
    dstatedt[0] = 0 - 1 * (internal.k_PIP2PHhyd * PLC_act_PM * PIP2_PHGFP_PM * internal.PM) + 1 * ((internal.kf_PIP2PH_PIP2_PH * 0.0016611295681063099 * PH_GFP_Cyt * PIP2_PM + - (internal.kr_PIP2PH_PIP2_PH * PIP2_PHGFP_PM)) * internal.PM);
    dstatedt[4] = 0 - 1 * (internal.k_PIP2hyd * PIP2_PM * PLC_act_PM * internal.PM) - 1 * ((internal.kf_PIP2PH_PIP2_PH * 0.0016611295681063099 * PH_GFP_Cyt * PIP2_PM + - (internal.kr_PIP2PH_PIP2_PH * PIP2_PHGFP_PM)) * internal.PM) + 1 * internal.PM * ((Rate_PIP2Synbasal_PIP2Syn + Rate_PIP2SynStim_PIP2Syn) * PIP_PM);
    dstatedt[8] = 0 + 1 * internal.PM * (internal.KfPLCact * PLC_PM * internal.stim_PM * signal_PLCact + - (internal.krPLCact * PLC_act_PM));
    dstatedt[7] = 0 - 1 * internal.PM * (internal.KfPLCact * PLC_PM * internal.stim_PM * signal_PLCact + - (internal.krPLCact * PLC_act_PM));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PIP2_PHGFP_PM", "PH_GFP_Cyt", "PI_PM", "IP3_PHGFP_Cyt", "PIP2_PM", "PIP_PM", "DAG_PM", "PLC_PM", "PLC_act_PM", "IP3_Cyt"];
    this.metadata.internalOrder = {Cytosol: null, DAG_PM_init: null, Extracellular: null, hv_Cytosol: null, initial_DAG_PM: null, initial_IP3_Cyt: null, initial_IP3_PHGFP_Cyt: null, initial_PH_GFP_Cyt: null, initial_PI_PM: null, initial_PIP_PM: null, initial_PIP2_PHGFP_PM: null, initial_PIP2_PM: null, initial_PLC_act_PM: null, initial_PLC_PM: null, IP3_basal: null, IP3_Cyt_init: null, IP3_PHGFP_Cyt_init: null, IP3X_Cytosol: null, k_PIP2hyd: null, k_PIP2PHhyd: null, kBasalSynPIP_PIPSyn: null, kBasalSynPIP2_PIP2Syn: null, KdIP3PH_IP3_PHGFP: null, KdPIP2PH_PIP2_PH: null, kf_IP3PH_IP3_PHGFP: null, kf_PIP2PH_PIP2_PH: null, KfPLCact: null, kIP3deg: null, KMOLE: null, kr_IP3PH_IP3_PHGFP: null, kr_PIP2PH_PIP2_PH: null, krPLCact: null, kStimSynPIP_PIPSyn: null, kStimSynPIP2_PIP2Syn: null, NM: null, Nucleus: null, PH_GFP_Cyt_init: null, PI_PM_init: null, PIP_basal_PIPSyn: null, PIP_PM_init: null, PIP2_basal_PIP2Syn: null, PIP2_PHGFP_PM_init: null, PIP2_PM_init: null, PIP2syndecay_PIP2Syn: null, PIPsyndecay_PIPSyn: null, PLC_act_PM_init: null, PLC_PM_init: null, PM: null, stim_PM: null, stimdecay_PLCact: null, tau0_PLCact: null, tauPIP2syn_PIP2Syn: null, tauPIPsyn_PIPSyn: null};
    this.metadata.variableOrder = {PIP2_PHGFP_PM: null, PH_GFP_Cyt: null, PI_PM: null, IP3_PHGFP_Cyt: null, PIP2_PM: null, PIP_PM: null, DAG_PM: null, PLC_PM: null, PLC_act_PM: null, IP3_Cyt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

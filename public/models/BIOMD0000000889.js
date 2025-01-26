export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.gamma = 1000000000 / 6.0229999999999998e+23;
    internal.k_14 = 3600 * 8.9000000000000003e-11;
    internal.k_26 = 3600 * 5.0000000000000004e-06;
    internal.sv = 0.10000000000000001 / 0.29999999999999999;
    internal.v_max19 = 46 * 3600;
    internal.v_max217 = 20.100000000000001 * 3600;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_IFNBm;
    state[1] = internal.initial_IFNBenv;
    state[2] = internal.initial_STATP2n;
    state[3] = internal.initial_SOCSm;
    state[4] = internal.initial_IRF7m;
    state[5] = internal.initial_IRF7Pn;
    state[6] = internal.initial_IFNam;
    state[7] = internal.initial_IFNaenv;
    state[8] = internal.initial_TNFam;
    state[9] = internal.initial_TFNenv;
    state[10] = internal.initial_STATm;
    state[11] = internal.initial_STAT;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b_m", "C", "d", "d_1", "d_2", "delta", "delta_1", "delta_2", "IFNaenv_init", "IFNam_init", "IFNBenv_init", "IFNBm_init", "IRF7m_init", "IRF7Pn_init", "k_11", "k_12", "k_15", "k_16", "K_19", "K_20", "K_217", "k_28", "K_3", "k_5", "K_5", "k_8", "K_9", "n_1", "n_2", "n_3", "r_0", "r_1", "r_20", "r_3", "r_4", "r_5", "SOCSm_init", "sp", "STAT_init", "STATm_init", "STATP2n_init", "t_1", "t_12", "t_13", "t_3", "t_4", "t_6", "t_8", "t_9", "TFNenv_init", "TJ_tot", "TNFam_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b_m", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNaenv_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNam_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNBenv_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNBm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF7m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF7Pn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_11", internal, 0.00036000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_12", internal, 360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_15", internal, 3.6000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_16", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_19", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_20", internal, 0.00059999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_217", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_28", internal, 360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_3", internal, 0.0043, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_5", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_8", internal, 0.0035999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_9", internal, 780, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_20", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_3", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_4", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCSm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sp", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STATm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STATP2n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_13", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_3", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_4", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_8", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_9", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFNenv_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TJ_tot", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TNFam_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IFNaenv = internal.IFNaenv_init;
    internal.initial_IFNam = internal.IFNam_init;
    internal.initial_IFNBenv = internal.IFNBenv_init;
    internal.initial_IFNBm = internal.IFNBm_init;
    internal.initial_IRF7m = internal.IRF7m_init;
    internal.initial_IRF7Pn = internal.IRF7Pn_init;
    internal.initial_SOCSm = internal.SOCSm_init;
    internal.initial_STAT = internal.STAT_init;
    internal.initial_STATm = internal.STATm_init;
    internal.initial_STATP2n = internal.STATP2n_init;
    internal.initial_TFNenv = internal.TFNenv_init;
    internal.initial_TNFam = internal.TNFam_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IFNBm = state[0];
    const IFNBenv = state[1];
    const STATP2n = state[2];
    const SOCSm = state[3];
    const IRF7m = state[4];
    const IRF7Pn = state[5];
    const IFNam = state[6];
    const IFNaenv = state[7];
    const TNFam = state[8];
    const TFNenv = state[9];
    const STATm = state[10];
    const STAT = state[11];
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.gamma * internal.C * internal.v_max217 * IFNam / (internal.K_217 + IFNam));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.gamma * internal.C * internal.v_max217 * IFNBenv / (internal.K_217 + IFNBenv));
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.k_28 * STATm) - 1 * internal.compartment * (STAT * (Math.log(2) / internal.t_13));
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.gamma * internal.C * internal.v_max19 * TNFam / (internal.K_19 + TNFam));
    var NS = internal.r_5 * Math.pow((t), (internal.n_3)) / (Math.pow((internal.b_m), (internal.n_3)) + Math.pow((t), (internal.n_3)));
    var TJ = internal.TJ_tot / (1 + internal.K_9 * SOCSm / internal.delta) * ((IFNBenv + IFNaenv) / (internal.K_3 + IFNBenv + IFNaenv));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k_5 * TJ * STAT / (2 * (internal.K_5 + STAT))) - 1 * internal.compartment * (STATP2n * (Math.log(2) / internal.t_3));
    var IC1 = (1 + internal.sp * Math.pow((NS / internal.delta_1), (internal.n_1))) / (1 + Math.pow((NS / internal.delta_1), (internal.n_1)));
    var IC2 = (1 + internal.sv * Math.pow((NS / internal.delta_2), (internal.n_2))) / (1 + Math.pow((NS / internal.delta_2), (internal.n_2)));
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k_16 * IRF7Pn * IC2) - 1 * internal.compartment * (IFNam * (Math.log(2) / internal.t_8));
    dstatedt[0] = 0 + 1 * internal.compartment * ((internal.r_0 * IC1 + internal.k_15 * IRF7Pn) * IC2) - 1 * internal.compartment * (IFNBm * (Math.log(2) / internal.t_1));
    dstatedt[4] = 0 + 1 * internal.compartment * ((internal.k_11 * STATP2n + internal.k_14 * IRF7Pn) * IC2) - 1 * internal.compartment * (IRF7m * (Math.log(2) / internal.t_6));
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k_12 * IRF7m * IC1);
    dstatedt[3] = 0 + 1 * internal.compartment * ((internal.r_3 * IC1 + internal.k_8 * STATP2n) * IC2) - 1 * internal.compartment * (SOCSm * (Math.log(2) / internal.t_4));
    dstatedt[10] = 0 + 1 * internal.compartment * ((internal.r_4 * IC1 + internal.k_26 * STATP2n) * IC2) - 1 * internal.compartment * (STATm * (Math.log(2) / internal.t_12));
    dstatedt[8] = 0 + 1 * internal.compartment * (IC2 * (internal.r_1 * IC1 + internal.r_20 * TFNenv / (internal.K_20 + TFNenv))) - 1 * internal.compartment * (TNFam * (Math.log(2) / internal.t_9));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IFNBm", "IFNBenv", "STATP2n", "SOCSm", "IRF7m", "IRF7Pn", "IFNam", "IFNaenv", "TNFam", "TFNenv", "STATm", "STAT"];
    this.metadata.internalOrder = {b_m: null, C: null, compartment: null, d: null, d_1: null, d_2: null, delta: null, delta_1: null, delta_2: null, gamma: null, IFNaenv_init: null, IFNam_init: null, IFNBenv_init: null, IFNBm_init: null, initial_IFNaenv: null, initial_IFNam: null, initial_IFNBenv: null, initial_IFNBm: null, initial_IRF7m: null, initial_IRF7Pn: null, initial_SOCSm: null, initial_STAT: null, initial_STATm: null, initial_STATP2n: null, initial_TFNenv: null, initial_TNFam: null, IRF7m_init: null, IRF7Pn_init: null, k_11: null, k_12: null, k_14: null, k_15: null, k_16: null, K_19: null, K_20: null, K_217: null, k_26: null, k_28: null, K_3: null, k_5: null, K_5: null, k_8: null, K_9: null, n_1: null, n_2: null, n_3: null, r_0: null, r_1: null, r_20: null, r_3: null, r_4: null, r_5: null, SOCSm_init: null, sp: null, STAT_init: null, STATm_init: null, STATP2n_init: null, sv: null, t_1: null, t_12: null, t_13: null, t_3: null, t_4: null, t_6: null, t_8: null, t_9: null, TFNenv_init: null, TJ_tot: null, TNFam_init: null, v_max19: null, v_max217: null};
    this.metadata.variableOrder = {IFNBm: null, IFNBenv: null, STATP2n: null, SOCSm: null, IRF7m: null, IRF7Pn: null, IFNam: null, IFNaenv: null, TNFam: null, TFNenv: null, STATm: null, STAT: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

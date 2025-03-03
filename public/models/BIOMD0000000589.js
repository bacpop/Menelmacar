export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_NADPH;
    state[1] = internal.initial_NADPplus;
    state[2] = internal.initial_GSH;
    state[3] = internal.initial_GSSG;
    state[4] = internal.initial_ASC;
    state[5] = internal.initial_DHA;
    state[6] = internal.initial_MDA;
    state[7] = internal.initial_H2O2;
    state[8] = internal.initial_APX;
    state[9] = internal.initial_CoI;
    state[10] = internal.initial_CoII;
    state[11] = internal.initial_APXi;
    state[12] = internal.initial_O2neg;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "a10", "a11", "a12", "a13", "a14", "a15", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "ai", "APX_init", "APXi_init", "ASC_init", "b", "c_0", "c11", "c12", "c13", "CoI_init", "CoII_init", "DHA_init", "DHAR", "F1", "F11", "F12", "F13", "FN", "GR", "GSH_init", "GSSG_init", "H2O2_init", "incr", "ixi", "K", "k1", "k11", "k12", "k13", "k1APX", "k2", "k2APX", "k3", "k3APX", "k4", "k4APX", "k5", "k5APX", "k6", "kcatDHAR", "kcatGR", "kcatMDAR", "KMDHA", "KMGSH", "KMGSSG", "KMMDA", "KMNADPH", "KMNADPH2", "kN", "kN_cte", "kSOD", "max", "MDA_init", "MDAR", "Metabolite_17", "min", "NADPH_init", "NADPplus_init", "O2neg_init", "SOD", "vAPX", "vDHAR", "vGR", "vMDAR", "vSOD"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 4431968.6071248697, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 4022883.3697037799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a10", internal, 3632875.1003602501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a11", internal, 3901158.1965023698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a12", internal, 3938901.5246415501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a13", internal, 3614615.7475886899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a14", internal, 3540932.6035296498, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a15", internal, 4445756.6138589801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 3895707.9712999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 4461050.65837037, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a4", internal, 4143378.6117704599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a5", internal, 3793894.0486637899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a6", internal, 4190686.1985335099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a7", internal, 3699605.4422343201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a8", internal, 3867960.7991362, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a9", internal, 4156529.25532777, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ai", internal, 4431968.6071248697, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APXi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_0", internal, 4.7123889999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c11", internal, 0.145631030978215, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c12", internal, 0.85436896902178505, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c13", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHAR", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F1", internal, 9.3132257461547893e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F11", internal, 1.3562946671453701e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F12", internal, 7.9569310790094096e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F13", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FN", internal, 4.376313394255e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GR", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GSH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GSSG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "incr", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ixi", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 30000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 2200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 15000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1APX", internal, 43200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 720, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2APX", internal, 180000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3APX", internal, 7560, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2520, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4APX", internal, 2520, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.0071999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5APX", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 720, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatDHAR", internal, 511200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatGR", internal, 2142000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatMDAR", internal, 1080000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMDHA", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMGSH", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMGSSG", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMMDA", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMNADPH", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMNADPH2", internal, 23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kN", internal, 3.9784655395047097e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kN_cte", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSOD", internal, 720000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "max", internal, 4500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MDA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MDAR", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_17", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "min", internal, 3500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPplus_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2neg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOD", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vAPX", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vDHAR", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vGR", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vMDAR", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vSOD", internal, 0, -Infinity, Infinity, false);
    internal.initial_APX = internal.APX_init;
    internal.initial_APXi = internal.APXi_init;
    internal.initial_ASC = internal.ASC_init;
    internal.initial_CoI = internal.CoI_init;
    internal.initial_CoII = internal.CoII_init;
    internal.initial_DHA = internal.DHA_init;
    internal.initial_GSH = internal.GSH_init;
    internal.initial_GSSG = internal.GSSG_init;
    internal.initial_H2O2 = internal.H2O2_init;
    internal.initial_MDA = internal.MDA_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_NADPplus = internal.NADPplus_init;
    internal.initial_O2neg = internal.O2neg_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const NADPH = state[0];
    const GSH = state[2];
    const ASC = state[4];
    const DHA = state[5];
    const MDA = state[6];
    const H2O2 = state[7];
    const APX = state[8];
    const CoI = state[9];
    const CoII = state[10];
    const O2neg = state[12];
    dstatedt[8] = - internal.k1APX * H2O2 * APX + internal.k3APX * ASC * CoII + internal.k5APX * (internal.Metabolite_17 - APX - CoI - CoII);
    dstatedt[11] = internal.k4APX * H2O2 * CoI;
    dstatedt[4] = internal.vDHAR + internal.k1 * Math.pow((MDA), (2)) + internal.k3 * DHA * GSH + internal.F13 - internal.k2APX * ASC * CoI - internal.k3APX * ASC * CoII - internal.k6 * O2neg * ASC - 2 * internal.k5 * H2O2 * ASC + 2 * internal.vMDAR;
    dstatedt[9] = internal.k1APX * H2O2 * APX - internal.k2APX * ASC * CoI - internal.k4APX * H2O2 * CoI;
    dstatedt[10] = internal.k2APX * ASC * CoI - internal.k3APX * ASC * CoII;
    dstatedt[5] = - internal.vDHAR + internal.k1 * Math.pow((MDA), (2)) - internal.k3 * DHA * GSH;
    dstatedt[2] = 2 * (internal.vGR - internal.vDHAR - internal.k4 * O2neg * GSH - internal.k3 * DHA * GSH);
    dstatedt[3] = - internal.vGR + internal.vDHAR + internal.k4 * O2neg * GSH + internal.k3 * DHA * GSH;
    dstatedt[7] = internal.vSOD - internal.k1APX * H2O2 * APX - internal.k4APX * H2O2 * CoI + internal.k2 * Math.pow((O2neg), (2)) + internal.k6 * O2neg * ASC + internal.k4 * O2neg * GSH - internal.k5 * H2O2 * ASC;
    dstatedt[6] = internal.k2APX * ASC * CoI + internal.k3APX * ASC * CoII - 2 * internal.k1 * Math.pow((MDA), (2)) + internal.k6 * O2neg * ASC + 2 * internal.k5 * H2O2 * ASC - internal.F13 - 2 * internal.vMDAR;
    dstatedt[0] = - internal.vGR - internal.kN * NADPH + internal.F12 * 0.5 - internal.vMDAR;
    dstatedt[1] = internal.vGR + internal.kN * NADPH - internal.F12 * 0.5 + internal.vMDAR;
    dstatedt[12] = - 2 * internal.vSOD + internal.F11 - 2 * internal.k2 * Math.pow((O2neg), (2)) - internal.k6 * O2neg * ASC - internal.k4 * O2neg * GSH;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "NADPH", "NADPplus", "GSH", "GSSG", "ASC", "DHA", "MDA", "H2O2", "APX", "CoI", "CoII", "APXi", "O2neg"];
    this.metadata.internalOrder = {a0: null, a1: null, a10: null, a11: null, a12: null, a13: null, a14: null, a15: null, a2: null, a3: null, a4: null, a5: null, a6: null, a7: null, a8: null, a9: null, ai: null, APX_init: null, APXi_init: null, ASC_init: null, b: null, c: null, c_0: null, c11: null, c12: null, c13: null, CoI_init: null, CoII_init: null, DHA_init: null, DHAR: null, F1: null, F11: null, F12: null, F13: null, FN: null, GR: null, GSH_init: null, GSSG_init: null, H2O2_init: null, incr: null, initial_APX: null, initial_APXi: null, initial_ASC: null, initial_CoI: null, initial_CoII: null, initial_DHA: null, initial_GSH: null, initial_GSSG: null, initial_H2O2: null, initial_MDA: null, initial_NADPH: null, initial_NADPplus: null, initial_O2neg: null, ixi: null, K: null, k1: null, k11: null, k12: null, k13: null, k1APX: null, k2: null, k2APX: null, k3: null, k3APX: null, k4: null, k4APX: null, k5: null, k5APX: null, k6: null, kcatDHAR: null, kcatGR: null, kcatMDAR: null, KMDHA: null, KMGSH: null, KMGSSG: null, KMMDA: null, KMNADPH: null, KMNADPH2: null, kN: null, kN_cte: null, kSOD: null, max: null, MDA_init: null, MDAR: null, Metabolite_17: null, min: null, NADPH_init: null, NADPplus_init: null, O2neg_init: null, SOD: null, vAPX: null, vDHAR: null, vGR: null, vMDAR: null, vSOD: null};
    this.metadata.variableOrder = {NADPH: null, NADPplus: null, GSH: null, GSSG: null, ASC: null, DHA: null, MDA: null, H2O2: null, APX: null, CoI: null, CoII: null, APXi: null, O2neg: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

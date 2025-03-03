export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c = 1;
    internal.n = 0.5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_pRaf_cyto;
    state[1] = internal.initial_pMEK_cyto;
    state[2] = internal.initial_pERK_cyto;
    state[3] = internal.initial_pMEK_nuc;
    state[4] = internal.initial_pERK_nuc;
    state[5] = internal.initial_Ca;
    state[6] = internal.initial_CaM_memb;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_init", "CaM_memb_init", "funcHillCaMToRaf", "funcHillCaToRaf", "funcHillERKToERKNuc", "funcHillERKToRaf", "funcHillMEKToERKCyto", "funcHillMEKToERKNuc", "funcHillRafToMEK", "numCaInputAmp", "numCaInputBaseline", "numCaMInputAmp", "numCaMInputBaseline", "numCytoToNucVolRatio", "numERKCytoToNucParam", "numERKNucToCytoParam", "numHillBeta", "numHillCoeff", "numHillEC50", "numHillK", "numHillMax", "numHillTau", "numHillWeight", "numMEKCytoToNucParam", "numMEKNucToCytoParam", "numTissuePos", "numTotalRafInputs", "pERK_cyto_init", "pERK_nuc_init", "pMEK_cyto_init", "pMEK_nuc_init", "pRaf_cyto_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaM_memb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillCaMToRaf", internal, 0.746521930652568, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillCaToRaf", internal, 0.78326355969549899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillERKToERKNuc", internal, 0.16212840948525001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillERKToRaf", internal, 0.16212840948525001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillMEKToERKCyto", internal, 0.81955421381145099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillMEKToERKNuc", internal, 0.38762364488757101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "funcHillRafToMEK", internal, 0.50189859616697796, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numCaInputAmp", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numCaInputBaseline", internal, 0.754, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numCaMInputAmp", internal, 0.48499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numCaMInputBaseline", internal, 0.36299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numCytoToNucVolRatio", internal, 2.3571428571428599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numERKCytoToNucParam", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numERKNucToCytoParam", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillBeta", internal, 2.5600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillCoeff", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillEC50", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillK", internal, 1.3700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillMax", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillTau", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numHillWeight", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numMEKCytoToNucParam", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numMEKNucToCytoParam", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numTissuePos", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "numTotalRafInputs", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pERK_cyto_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pERK_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pMEK_cyto_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pMEK_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRaf_cyto_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ca = internal.Ca_init;
    internal.initial_CaM_memb = internal.CaM_memb_init;
    internal.initial_pERK_cyto = internal.pERK_cyto_init;
    internal.initial_pERK_nuc = internal.pERK_nuc_init;
    internal.initial_pMEK_cyto = internal.pMEK_cyto_init;
    internal.initial_pMEK_nuc = internal.pMEK_nuc_init;
    internal.initial_pRaf_cyto = internal.pRaf_cyto_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const pRaf_cyto = state[0];
    const pMEK_cyto = state[1];
    const pERK_cyto = state[2];
    const pMEK_nuc = state[3];
    const pERK_nuc = state[4];
    dstatedt[5] = 0;
    dstatedt[6] = 0;
    dstatedt[2] = 1 / internal.numHillTau * (internal.funcHillMEKToERKCyto * internal.numHillMax - pERK_cyto - internal.numERKCytoToNucParam * pERK_cyto + 1 / internal.numCytoToNucVolRatio * internal.numERKNucToCytoParam * pERK_nuc);
    dstatedt[4] = 1 / internal.numHillTau * ((internal.funcHillMEKToERKNuc - internal.funcHillERKToERKNuc) * internal.numHillMax - pERK_nuc - internal.numERKCytoToNucParam * pERK_nuc + internal.numCytoToNucVolRatio * internal.numERKNucToCytoParam * pERK_cyto);
    dstatedt[1] = 1 / internal.numHillTau * (internal.funcHillRafToMEK * internal.numHillMax - pMEK_cyto - internal.numMEKCytoToNucParam * pMEK_cyto + 1 / internal.numCytoToNucVolRatio * internal.numMEKNucToCytoParam * pMEK_nuc);
    dstatedt[3] = 1 / internal.numHillTau * (- pMEK_nuc - internal.numMEKNucToCytoParam * pMEK_nuc + internal.numCytoToNucVolRatio * internal.numMEKCytoToNucParam * pMEK_cyto);
    dstatedt[0] = 1 / internal.numHillTau * (internal.numTotalRafInputs * internal.numHillMax - pRaf_cyto);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "pRaf_cyto", "pMEK_cyto", "pERK_cyto", "pMEK_nuc", "pERK_nuc", "Ca", "CaM_memb"];
    this.metadata.internalOrder = {c: null, Ca_init: null, CaM_memb_init: null, funcHillCaMToRaf: null, funcHillCaToRaf: null, funcHillERKToERKNuc: null, funcHillERKToRaf: null, funcHillMEKToERKCyto: null, funcHillMEKToERKNuc: null, funcHillRafToMEK: null, initial_Ca: null, initial_CaM_memb: null, initial_pERK_cyto: null, initial_pERK_nuc: null, initial_pMEK_cyto: null, initial_pMEK_nuc: null, initial_pRaf_cyto: null, n: null, numCaInputAmp: null, numCaInputBaseline: null, numCaMInputAmp: null, numCaMInputBaseline: null, numCytoToNucVolRatio: null, numERKCytoToNucParam: null, numERKNucToCytoParam: null, numHillBeta: null, numHillCoeff: null, numHillEC50: null, numHillK: null, numHillMax: null, numHillTau: null, numHillWeight: null, numMEKCytoToNucParam: null, numMEKNucToCytoParam: null, numTissuePos: null, numTotalRafInputs: null, pERK_cyto_init: null, pERK_nuc_init: null, pMEK_cyto_init: null, pMEK_nuc_init: null, pRaf_cyto_init: null};
    this.metadata.variableOrder = {pRaf_cyto: null, pMEK_cyto: null, pERK_cyto: null, pMEK_nuc: null, pERK_nuc: null, Ca: null, CaM_memb: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

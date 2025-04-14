export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_tract;
    state[1] = internal.initial_CellCact;
    state[2] = internal.initial_Effectoract;
    state[3] = internal.initial_HR;
    state[4] = internal.initial_NHEJ;
    state[5] = internal.initial_CellCycletot;
    state[6] = internal.initial_Effectortot;
    state[7] = internal.initial_trtot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CellCact_init", "CellCycletot_init", "Effectoract_init", "Effectortot_init", "HR_init", "Kcc2a", "Kcc2ch", "Kch2cc", "Kd2ch", "Kd2t", "Km1", "Km10", "Kt2cc", "Kti2t", "NHEJ_init", "tract_init", "trtot_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CellCact_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CellCycletot_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effectoract_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effectortot_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HR_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcc2a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcc2ch", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kch2cc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd2ch", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd2t", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km10", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kt2cc", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kti2t", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NHEJ_init", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tract_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trtot_init", internal, 10, -Infinity, Infinity, false);
    internal.initial_CellCact = internal.CellCact_init;
    internal.initial_CellCycletot = internal.CellCycletot_init;
    internal.initial_Effectoract = internal.Effectoract_init;
    internal.initial_Effectortot = internal.Effectortot_init;
    internal.initial_HR = internal.HR_init;
    internal.initial_NHEJ = internal.NHEJ_init;
    internal.initial_tract = internal.tract_init;
    internal.initial_trtot = internal.trtot_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const tract = state[0];
    const CellCact = state[1];
    const Effectoract = state[2];
    const HR = state[3];
    const NHEJ = state[4];
    const CellCycletot = state[5];
    const Effectortot = state[6];
    const trtot = state[7];
    dstatedt[5] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    var CellCina = CellCycletot - CellCact;
    var Damage = HR + NHEJ;
    dstatedt[3] = - HR * 0.20000000000000001;
    dstatedt[4] = - NHEJ * 0.5;
    var Effectorina = Effectortot - Effectoract;
    var trinact = trtot - tract;
    dstatedt[1] = (internal.Kcc2a + CellCact) * CellCina / (internal.Km10 + CellCina) - internal.Kt2cc * tract * CellCact / (internal.Km10 + CellCact) - internal.Kch2cc * CellCact * Effectoract / (internal.Km10 + CellCact);
    dstatedt[2] = internal.Kd2ch * Damage * Effectorina / (internal.Km10 + Effectorina) - internal.Kcc2ch * CellCact * Effectoract / (internal.Km10 + Effectoract);
    dstatedt[0] = internal.Kd2t * Damage * trinact / (internal.Km1 + trinact) - internal.Kti2t * tract / (internal.Km1 + tract);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "tract", "CellCact", "Effectoract", "HR", "NHEJ", "CellCycletot", "Effectortot", "trtot"];
    this.metadata.internalOrder = {CellCact_init: null, CellCycletot_init: null, Effectoract_init: null, Effectortot_init: null, HR_init: null, initial_CellCact: null, initial_CellCycletot: null, initial_Effectoract: null, initial_Effectortot: null, initial_HR: null, initial_NHEJ: null, initial_tract: null, initial_trtot: null, Kcc2a: null, Kcc2ch: null, Kch2cc: null, Kd2ch: null, Kd2t: null, Km1: null, Km10: null, Kt2cc: null, Kti2t: null, NHEJ_init: null, nucleus: null, tract_init: null, trtot_init: null};
    this.metadata.variableOrder = {tract: null, CellCact: null, Effectoract: null, HR: null, NHEJ: null, CellCycletot: null, Effectortot: null, trtot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

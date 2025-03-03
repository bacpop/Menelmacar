export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.CellCycletot = 10;
    internal.Effectortot = 10;
    internal.nucleus = 1;
    internal.trtot = 10;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_tract;
    state[1] = internal.initial_CellCact;
    state[2] = internal.initial_Effectoract;
    state[3] = internal.initial_HR;
    state[4] = internal.initial_NHEJ;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CellCact_init", "Effectoract_init", "HR_init", "Kcc2a", "Kcc2ch", "Kch2cc", "Kd2ch", "Kd2t", "Km1", "Km10", "Kt2cc", "Kti2t", "NHEJ_init", "tract_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CellCact_init", internal, 0.999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Effectoract_init", internal, 0, -Infinity, Infinity, false);
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
    internal.initial_CellCact = internal.CellCact_init;
    internal.initial_Effectoract = internal.Effectoract_init;
    internal.initial_HR = internal.HR_init;
    internal.initial_NHEJ = internal.NHEJ_init;
    internal.initial_tract = internal.tract_init;
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
    var CellCina = internal.CellCycletot - CellCact;
    var Damage = HR + NHEJ;
    dstatedt[3] = - HR * 0.20000000000000001;
    dstatedt[4] = - NHEJ * 0.5;
    var Effectorina = internal.Effectortot - Effectoract;
    var trinact = internal.trtot - tract;
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
    this.metadata.ynames = ["t", "tract", "CellCact", "Effectoract", "HR", "NHEJ"];
    this.metadata.internalOrder = {CellCact_init: null, CellCycletot: null, Effectoract_init: null, Effectortot: null, HR_init: null, initial_CellCact: null, initial_Effectoract: null, initial_HR: null, initial_NHEJ: null, initial_tract: null, Kcc2a: null, Kcc2ch: null, Kch2cc: null, Kd2ch: null, Kd2t: null, Km1: null, Km10: null, Kt2cc: null, Kti2t: null, NHEJ_init: null, nucleus: null, tract_init: null, trtot: null};
    this.metadata.variableOrder = {tract: null, CellCact: null, Effectoract: null, HR: null, NHEJ: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

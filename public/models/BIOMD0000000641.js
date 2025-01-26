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
    var CellCina_init = internal.initial_CellCycletot - internal.initial_CellCact;
    var Damage_init = internal.initial_HR + internal.initial_NHEJ;
    var Effectorina_init = internal.initial_Effectortot - internal.initial_Effectoract;
    var Timerinact_init = internal.initial_Timertot - internal.initial_Timeract;
    internal.initial_CellCina = CellCina_init;
    internal.initial_Damage = Damage_init;
    internal.initial_Effectorina = Effectorina_init;
    internal.initial_Timerinact = Timerinact_init;
    var state = Array(12).fill(0);
    state[0] = internal.initial_Timeract;
    state[1] = internal.initial_Timerinact;
    state[2] = internal.initial_CellCact;
    state[3] = internal.initial_CellCina;
    state[4] = internal.initial_Effectoract;
    state[5] = internal.initial_Effectorina;
    state[6] = internal.initial_Damage;
    state[7] = internal.initial_HR;
    state[8] = internal.initial_NHEJ;
    state[9] = internal.initial_CellCycletot;
    state[10] = internal.initial_Effectortot;
    state[11] = internal.initial_Timertot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CellCact_init", "CellCycletot_init", "Effectoract_init", "Effectortot_init", "HR_init", "Kcc2a", "Kcc2ch", "Kch2cc", "Kd2ch", "Kd2t", "Km1", "Km10", "Kt2cc", "Kti2t", "NHEJ_init", "Timeract_init", "Timertot_init"], unusedUserAction);
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
    this.base.user.setUserScalar(user, "Timeract_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Timertot_init", internal, 10, -Infinity, Infinity, false);
    internal.initial_CellCact = internal.CellCact_init;
    internal.initial_CellCycletot = internal.CellCycletot_init;
    internal.initial_Effectoract = internal.Effectoract_init;
    internal.initial_Effectortot = internal.Effectortot_init;
    internal.initial_HR = internal.HR_init;
    internal.initial_NHEJ = internal.NHEJ_init;
    internal.initial_Timeract = internal.Timeract_init;
    internal.initial_Timertot = internal.Timertot_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Timeract = state[0];
    const Timerinact = state[1];
    const CellCact = state[2];
    const CellCina = state[3];
    const Effectoract = state[4];
    const Effectorina = state[5];
    const Damage = state[6];
    const HR = state[7];
    const NHEJ = state[8];
    dstatedt[3] = 0 + 0;
    dstatedt[9] = 0;
    dstatedt[6] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[10] = 0;
    dstatedt[1] = 0 + 0;
    dstatedt[11] = 0;
    dstatedt[2] = 0 + (internal.Kcc2a + CellCact) * CellCina / (internal.Km10 + CellCina) - internal.Kt2cc * Timeract * CellCact / (internal.Km10 + CellCact) - internal.Kch2cc * CellCact * Effectoract / (internal.Km10 + CellCact);
    dstatedt[4] = 0 + internal.Kd2ch * Damage * Effectorina / (internal.Km10 + Effectorina) - internal.Kcc2ch * CellCact * Effectoract / (internal.Km10 + Effectoract);
    dstatedt[7] = 0 + - HR * 0.20000000000000001;
    dstatedt[8] = 0 + - NHEJ * 0.5;
    dstatedt[0] = 0 + internal.Kd2t * Damage * Timerinact / (internal.Km1 + Timerinact) - internal.Kti2t * Timeract / (internal.Km1 + Timeract);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Timeract", "Timerinact", "CellCact", "CellCina", "Effectoract", "Effectorina", "Damage", "HR", "NHEJ", "CellCycletot", "Effectortot", "Timertot"];
    this.metadata.internalOrder = {CellCact_init: null, CellCycletot_init: null, Effectoract_init: null, Effectortot_init: null, HR_init: null, initial_CellCact: null, initial_CellCina: null, initial_CellCycletot: null, initial_Damage: null, initial_Effectoract: null, initial_Effectorina: null, initial_Effectortot: null, initial_HR: null, initial_NHEJ: null, initial_Timeract: null, initial_Timerinact: null, initial_Timertot: null, Kcc2a: null, Kcc2ch: null, Kch2cc: null, Kd2ch: null, Kd2t: null, Km1: null, Km10: null, Kt2cc: null, Kti2t: null, NHEJ_init: null, nucleus: null, Timeract_init: null, Timertot_init: null};
    this.metadata.variableOrder = {Timeract: null, Timerinact: null, CellCact: null, CellCina: null, Effectoract: null, Effectorina: null, Damage: null, HR: null, NHEJ: null, CellCycletot: null, Effectortot: null, Timertot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.X1 = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_APAP;
    state[1] = internal.initial_NAPQI;
    state[2] = internal.initial_GSH;
    state[3] = internal.initial_NAPQIGSH;
    state[4] = internal.initial_APAPconj_Glu;
    state[5] = internal.initial_APAPconj_Sul;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APAP_init", "APAPconj_Glu_init", "APAPconj_Sul_init", "GSH_init", "GSHmax", "kGsh", "Km_2E1_APAP", "Km_PhaseIIEnzGlu_APAP", "Km_PhaseIIEnzSul_APAP", "kNapqiGsh", "NAPQI_init", "NAPQIGSH_init", "Vmax_2E1_APAP", "Vmax_PhaseIIEnzGlu_APAP", "Vmax_PhaseIIEnzSul_APAP"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APAP_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APAPconj_Glu_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APAPconj_Sul_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GSH_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GSHmax", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGsh", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km_2E1_APAP", internal, 1.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km_PhaseIIEnzGlu_APAP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km_PhaseIIEnzSul_APAP", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kNapqiGsh", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAPQI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAPQIGSH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmax_2E1_APAP", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmax_PhaseIIEnzGlu_APAP", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmax_PhaseIIEnzSul_APAP", internal, 0.000175, -Infinity, Infinity, false);
    internal.initial_APAP = internal.APAP_init;
    internal.initial_APAPconj_Glu = internal.APAPconj_Glu_init;
    internal.initial_APAPconj_Sul = internal.APAPconj_Sul_init;
    internal.initial_GSH = internal.GSH_init;
    internal.initial_NAPQI = internal.NAPQI_init;
    internal.initial_NAPQIGSH = internal.NAPQIGSH_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const APAP = state[0];
    const NAPQI = state[1];
    const GSH = state[2];
    dstatedt[0] = 0 - 1 * internal.Vmax_2E1_APAP * APAP / (internal.Km_2E1_APAP + APAP) - 1 * internal.Vmax_PhaseIIEnzGlu_APAP * APAP / (internal.Km_PhaseIIEnzGlu_APAP + APAP) - 1 * internal.Vmax_PhaseIIEnzSul_APAP * APAP / (internal.Km_PhaseIIEnzSul_APAP + APAP);
    dstatedt[4] = 0 + 1 * internal.Vmax_PhaseIIEnzGlu_APAP * APAP / (internal.Km_PhaseIIEnzGlu_APAP + APAP);
    dstatedt[5] = 0 + 1 * internal.Vmax_PhaseIIEnzSul_APAP * APAP / (internal.Km_PhaseIIEnzSul_APAP + APAP);
    dstatedt[2] = 0 - 1 * internal.kNapqiGsh * NAPQI * GSH * internal.compartment * internal.compartment + 1 * internal.kGsh * (internal.GSHmax - GSH) * internal.compartment;
    dstatedt[1] = 0 + 1 * internal.Vmax_2E1_APAP * APAP / (internal.Km_2E1_APAP + APAP) - 1 * internal.kNapqiGsh * NAPQI * GSH * internal.compartment * internal.compartment;
    dstatedt[3] = 0 + 1 * internal.kNapqiGsh * NAPQI * GSH * internal.compartment * internal.compartment;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "APAP", "NAPQI", "GSH", "NAPQIGSH", "APAPconj_Glu", "APAPconj_Sul"];
    this.metadata.internalOrder = {APAP_init: null, APAPconj_Glu_init: null, APAPconj_Sul_init: null, compartment: null, GSH_init: null, GSHmax: null, initial_APAP: null, initial_APAPconj_Glu: null, initial_APAPconj_Sul: null, initial_GSH: null, initial_NAPQI: null, initial_NAPQIGSH: null, kGsh: null, Km_2E1_APAP: null, Km_PhaseIIEnzGlu_APAP: null, Km_PhaseIIEnzSul_APAP: null, kNapqiGsh: null, NAPQI_init: null, NAPQIGSH_init: null, Vmax_2E1_APAP: null, Vmax_PhaseIIEnzGlu_APAP: null, Vmax_PhaseIIEnzSul_APAP: null, X1: null};
    this.metadata.variableOrder = {APAP: null, NAPQI: null, GSH: null, NAPQIGSH: null, APAPconj_Glu: null, APAPconj_Sul: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_PP;
    state[1] = internal.initial_NP;
    state[2] = internal.initial_STAB;
    state[3] = internal.initial_UPS;
    state[4] = internal.initial_EP1;
    state[5] = internal.initial_EP2;
    state[6] = internal.initial_ED;
    state[7] = internal.initial_LP;
    state[8] = internal.initial_BAS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["BAS_init", "ED_init", "EP1_init", "EP2_init", "kact", "kactbas", "kb1", "kb2", "kb3", "kb4", "kdeact", "kdeg1", "kdeg2", "kdeg2bas", "kdeg3", "kf1", "kf1bas_value", "kf2", "kf3", "kf4", "kf5", "ksyn1", "ksyn1bas", "ksyn2", "ksyn2bas", "ksyn3", "ksyn3bas", "LAC", "LP_init", "ModelValue_27", "ModelValue_28", "NP_init", "PP_init", "PSI", "STAB_init", "tstimdur", "UPS_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "BAS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ED_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kact", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kactbas", internal, 0.00214, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb2", internal, 0.00069999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb4", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeact", internal, 0.0143, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg2bas", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf1bas_value", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf4", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf5", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn1bas", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn2bas", internal, 0.0014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn3bas", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LAC", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_27", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_28", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PSI", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tstimdur", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UPS_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_BAS = internal.BAS_init;
    internal.initial_ED = internal.ED_init;
    internal.initial_EP1 = internal.EP1_init;
    internal.initial_EP2 = internal.EP2_init;
    internal.initial_LP = internal.LP_init;
    internal.initial_NP = internal.NP_init;
    internal.initial_PP = internal.PP_init;
    internal.initial_STAB = internal.STAB_init;
    internal.initial_UPS = internal.UPS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PP = state[0];
    const NP = state[1];
    const STAB = state[2];
    const UPS = state[3];
    const EP1 = state[4];
    const EP2 = state[5];
    const ED = state[6];
    const LP = state[7];
    const BAS = state[8];
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.kf2 * UPS * (1 - internal.LAC) * EP1) + 1 * internal.compartment * (internal.kf4 * UPS * (1 - internal.LAC) * EP2) - 1 * internal.compartment * internal.kb3 * ED - 1 * internal.compartment * (internal.kf5 * Math.pow((PP), (2)) * ED);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.kf3 * STAB * EP1) - 1 * internal.compartment * (internal.kf4 * UPS * (1 - internal.LAC) * EP2) - 1 * internal.compartment * (internal.kb2 * EP2 * NP);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.kf5 * Math.pow((PP), (2)) * ED) - 1 * internal.compartment * internal.kb4 * LP;
    var kf1bas = ((t <= internal.ModelValue_27 ? 0 : internal.ModelValue_28));
    var STIM = ((t <= internal.ModelValue_27 ? 1 : 0));
    dstatedt[8] = 0 - 1 * internal.compartment * (internal.kf1 * STIM * BAS) - 1 * internal.compartment * (kf1bas * (1 - STIM) * BAS) + 1 * internal.compartment * internal.kb1 * EP1 + 1 * internal.compartment * (internal.kb2 * EP2 * NP) + 1 * internal.compartment * internal.kb3 * ED + 1 * internal.compartment * internal.kb4 * LP;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.kf1 * STIM * BAS) + 1 * internal.compartment * (kf1bas * (1 - STIM) * BAS) - 1 * internal.compartment * (internal.kf2 * UPS * (1 - internal.LAC) * EP1) - 1 * internal.compartment * internal.kb1 * EP1 - 1 * internal.compartment * (internal.kf3 * STAB * EP1);
    dstatedt[1] = 0 + 1 * internal.compartment * ((1 - internal.PSI) * (internal.ksyn2 * STIM + internal.ksyn2bas)) - 1 * internal.compartment * (internal.kdeg2 * UPS * NP * (1 - internal.LAC)) - 1 * internal.compartment * internal.kdeg2bas * NP;
    dstatedt[0] = 0 + 1 * internal.compartment * ((1 - internal.PSI) * (internal.ksyn1 * STIM + internal.ksyn1bas)) - 1 * internal.compartment * internal.kdeg1 * PP;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.ksyn3 * STIM) + 1 * internal.compartment * (internal.ksyn3bas) - 1 * internal.compartment * internal.kdeg3 * STAB;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.kact * STIM) + 1 * internal.compartment * (internal.kactbas) - 1 * internal.compartment * internal.kdeact * UPS;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PP", "NP", "STAB", "UPS", "EP1", "EP2", "ED", "LP", "BAS"];
    this.metadata.internalOrder = {BAS_init: null, compartment: null, ED_init: null, EP1_init: null, EP2_init: null, initial_BAS: null, initial_ED: null, initial_EP1: null, initial_EP2: null, initial_LP: null, initial_NP: null, initial_PP: null, initial_STAB: null, initial_UPS: null, kact: null, kactbas: null, kb1: null, kb2: null, kb3: null, kb4: null, kdeact: null, kdeg1: null, kdeg2: null, kdeg2bas: null, kdeg3: null, kf1: null, kf1bas_value: null, kf2: null, kf3: null, kf4: null, kf5: null, ksyn1: null, ksyn1bas: null, ksyn2: null, ksyn2bas: null, ksyn3: null, ksyn3bas: null, LAC: null, LP_init: null, ModelValue_27: null, ModelValue_28: null, NP_init: null, PP_init: null, PSI: null, STAB_init: null, tstimdur: null, UPS_init: null};
    this.metadata.variableOrder = {PP: null, NP: null, STAB: null, UPS: null, EP1: null, EP2: null, ED: null, LP: null, BAS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

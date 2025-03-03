export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_S1;
    state[1] = internal.initial_DNA_000;
    state[2] = internal.initial_DNA_100;
    state[3] = internal.initial_DNA_010;
    state[4] = internal.initial_DNA_001;
    state[5] = internal.initial_DNA_110;
    state[6] = internal.initial_DNA_101;
    state[7] = internal.initial_DNA_011;
    state[8] = internal.initial_DNA_111;
    state[9] = internal.initial_DNA_1B10;
    state[10] = internal.initial_DNA_01B1;
    state[11] = internal.initial_DNA_1B11;
    state[12] = internal.initial_DNA_11B1;
    state[13] = internal.initial_DNA_1B1B1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["DNA_000_init", "DNA_001_init", "DNA_010_init", "DNA_011_init", "DNA_01B1_init", "DNA_100_init", "DNA_101_init", "DNA_110_init", "DNA_111_init", "DNA_11B1_init", "DNA_1B10_init", "DNA_1B11_init", "DNA_1B1B1_init", "Koff_G1", "Koff_NG1", "Koff_P1", "Kon_G1", "Kon_NG1", "Kon_P1", "S1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "DNA_000_init", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_001_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_010_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_011_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_01B1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_100_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_101_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_110_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_111_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_11B1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_1B10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_1B11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DNA_1B1B1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koff_G1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koff_NG1", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koff_P1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kon_G1", internal, 20000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kon_NG1", internal, 20000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kon_P1", internal, 60000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1_init", internal, 1e-10, -Infinity, Infinity, false);
    internal.initial_DNA_000 = internal.DNA_000_init;
    internal.initial_DNA_001 = internal.DNA_001_init;
    internal.initial_DNA_010 = internal.DNA_010_init;
    internal.initial_DNA_011 = internal.DNA_011_init;
    internal.initial_DNA_01B1 = internal.DNA_01B1_init;
    internal.initial_DNA_100 = internal.DNA_100_init;
    internal.initial_DNA_101 = internal.DNA_101_init;
    internal.initial_DNA_110 = internal.DNA_110_init;
    internal.initial_DNA_111 = internal.DNA_111_init;
    internal.initial_DNA_11B1 = internal.DNA_11B1_init;
    internal.initial_DNA_1B10 = internal.DNA_1B10_init;
    internal.initial_DNA_1B11 = internal.DNA_1B11_init;
    internal.initial_DNA_1B1B1 = internal.DNA_1B1B1_init;
    internal.initial_S1 = internal.S1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S1 = state[0];
    const DNA_000 = state[1];
    const DNA_100 = state[2];
    const DNA_010 = state[3];
    const DNA_001 = state[4];
    const DNA_110 = state[5];
    const DNA_101 = state[6];
    const DNA_011 = state[7];
    const DNA_111 = state[8];
    const DNA_1B10 = state[9];
    const DNA_01B1 = state[10];
    const DNA_1B11 = state[11];
    const DNA_11B1 = state[12];
    const DNA_1B1B1 = state[13];
    dstatedt[1] = 0 - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_100) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_000 * S1 - internal.Koff_G1 * DNA_010) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_001) / internal.nucleus);
    dstatedt[4] = 0 + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_001) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_001 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_001 * S1 - internal.Koff_G1 * DNA_011) / internal.nucleus);
    dstatedt[3] = 0 + 1 * internal.nucleus * ((internal.Kon_G1 * DNA_000 * S1 - internal.Koff_G1 * DNA_010) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_110) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_011) / internal.nucleus);
    dstatedt[7] = 0 + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_011) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_G1 * DNA_001 * S1 - internal.Koff_G1 * DNA_011) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_011 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_011 - internal.Koff_P1 * DNA_01B1) / internal.nucleus);
    dstatedt[10] = 0 + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_011 - internal.Koff_P1 * DNA_01B1) / internal.nucleus);
    dstatedt[2] = 0 + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_100) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_100 * S1 - internal.Koff_G1 * DNA_110) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_100 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus);
    dstatedt[6] = 0 + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_100 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_001 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_101 * S1 - internal.Koff_G1 * DNA_111) / internal.nucleus);
    dstatedt[5] = 0 + 1 * internal.nucleus * ((internal.Kon_G1 * DNA_100 * S1 - internal.Koff_G1 * DNA_110) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_110) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_110 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_110 - internal.Koff_P1 * DNA_1B10) / internal.nucleus);
    dstatedt[8] = 0 + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_110 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_G1 * DNA_101 * S1 - internal.Koff_G1 * DNA_111) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_011 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_111 - internal.Koff_P1 * DNA_11B1) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_111 - internal.Koff_P1 * DNA_1B11) / internal.nucleus);
    dstatedt[12] = 0 + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_111 - internal.Koff_P1 * DNA_11B1) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_11B1 - internal.Koff_P1 * DNA_1B1B1) / internal.nucleus);
    dstatedt[9] = 0 + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_110 - internal.Koff_P1 * DNA_1B10) / internal.nucleus);
    dstatedt[11] = 0 + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_111 - internal.Koff_P1 * DNA_1B11) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_P1 * DNA_1B11 - internal.Koff_P1 * DNA_1B1B1) / internal.nucleus);
    dstatedt[13] = 0 + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_11B1 - internal.Koff_P1 * DNA_1B1B1) / internal.nucleus) + 1 * internal.nucleus * ((internal.Kon_P1 * DNA_1B11 - internal.Koff_P1 * DNA_1B1B1) / internal.nucleus);
    dstatedt[0] = 0 - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_100) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_000 * S1 - internal.Koff_G1 * DNA_010) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_000 * S1 - internal.Koff_NG1 * DNA_001) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_100 * S1 - internal.Koff_G1 * DNA_110) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_100 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_110) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_010 * S1 - internal.Koff_NG1 * DNA_011) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_001 * S1 - internal.Koff_NG1 * DNA_101) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_001 * S1 - internal.Koff_G1 * DNA_011) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_110 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_G1 * DNA_101 * S1 - internal.Koff_G1 * DNA_111) / internal.nucleus) - 1 * internal.nucleus * ((internal.Kon_NG1 * DNA_011 * S1 - internal.Koff_NG1 * DNA_111) / internal.nucleus);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S1", "DNA_000", "DNA_100", "DNA_010", "DNA_001", "DNA_110", "DNA_101", "DNA_011", "DNA_111", "DNA_1B10", "DNA_01B1", "DNA_1B11", "DNA_11B1", "DNA_1B1B1"];
    this.metadata.internalOrder = {default1: null, DNA_000_init: null, DNA_001_init: null, DNA_010_init: null, DNA_011_init: null, DNA_01B1_init: null, DNA_100_init: null, DNA_101_init: null, DNA_110_init: null, DNA_111_init: null, DNA_11B1_init: null, DNA_1B10_init: null, DNA_1B11_init: null, DNA_1B1B1_init: null, initial_DNA_000: null, initial_DNA_001: null, initial_DNA_010: null, initial_DNA_011: null, initial_DNA_01B1: null, initial_DNA_100: null, initial_DNA_101: null, initial_DNA_110: null, initial_DNA_111: null, initial_DNA_11B1: null, initial_DNA_1B10: null, initial_DNA_1B11: null, initial_DNA_1B1B1: null, initial_S1: null, Koff_G1: null, Koff_NG1: null, Koff_P1: null, Kon_G1: null, Kon_NG1: null, Kon_P1: null, nucleus: null, S1_init: null};
    this.metadata.variableOrder = {S1: null, DNA_000: null, DNA_100: null, DNA_010: null, DNA_001: null, DNA_110: null, DNA_101: null, DNA_011: null, DNA_111: null, DNA_1B10: null, DNA_01B1: null, DNA_1B11: null, DNA_11B1: null, DNA_1B1B1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

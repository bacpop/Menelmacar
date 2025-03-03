export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 0.014200000000000001;
    internal.compartment = 1;
    internal.medium = 2;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(18).fill(0);
    state[0] = internal.initial_AS_m;
    state[1] = internal.initial_ASL_m;
    state[2] = internal.initial_ASoOH_m;
    state[3] = internal.initial_ASLpOH_m;
    state[4] = internal.initial_ASpOH_m;
    state[5] = internal.initial_ASLoOH_m;
    state[6] = internal.initial_AS_c;
    state[7] = internal.initial_ASL_c;
    state[8] = internal.initial_ASpOH_c;
    state[9] = internal.initial_ASoOH_c;
    state[10] = internal.initial_ASLpOH_c;
    state[11] = internal.initial_ASLoOH_c;
    state[12] = internal.initial_ASpOH_b;
    state[13] = internal.initial_ASoOH_b;
    state[14] = internal.initial_ASLpOH_b;
    state[15] = internal.initial_ASLoOH_b;
    state[16] = internal.initial_AS_b;
    state[17] = internal.initial_ASL_b;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AS_b_init", "AS_c_init", "AS_m_init", "ASL_b_init", "ASL_c_init", "ASL_m_init", "ASLoOH_b_init", "ASLoOH_c_init", "ASLoOH_m_init", "ASLpOH_b_init", "ASLpOH_c_init", "ASLpOH_m_init", "ASoOH_b_init", "ASoOH_c_init", "ASoOH_m_init", "ASpOH_b_init", "ASpOH_c_init", "ASpOH_m_init", "CYP3A4_ASLoOH_Km1", "CYP3A4_ASLoOH_Vmax", "CYP3A4_ASLpOH_Km1", "CYP3A4_ASLpOH_Vmax", "CYP3A4_ASoOH_Km1", "CYP3A4_ASoOH_Vmax", "CYP3A4_ASpOH_Km1", "CYP3A4_ASpOH_Vmax", "Export_AS_k", "Export_ASL_k", "Export_ASLoOH_k", "Export_ASLpOH_k", "Export_ASoOH_k", "Export_ASpOH_k", "fu_AS", "fu_ASL", "Import_AS_k", "Import_ASL_k", "Import_ASLoOH_k", "Import_ASLpOH_k", "Import_ASoOH_k", "Import_ASpOH_k", "k_CR_ASL_c", "k_CR_ASL_m", "k_PON_ASL_c", "k_PON_OH_c", "Prot_k1", "UGT1A3_AS_KI1", "UGT1A3_AS_Km1", "UGT1A3_AS_Vmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AS_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AS_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AS_m_init", internal, 8797.1499999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASL_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASL_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASL_m_init", internal, 30.559999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLoOH_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLoOH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLoOH_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLpOH_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLpOH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASLpOH_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASoOH_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASoOH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASoOH_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASpOH_b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASpOH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASpOH_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASLoOH_Km1", internal, 3900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASLoOH_Vmax", internal, 39.1342, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASLpOH_Km1", internal, 1400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASLpOH_Vmax", internal, 17.444600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASoOH_Km1", internal, 29700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASoOH_Vmax", internal, 47.4985, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASpOH_Km1", internal, 25600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CYP3A4_ASpOH_Vmax", internal, 15.733599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_AS_k", internal, 0.002166, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_ASL_k", internal, 0.021822000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_ASLoOH_k", internal, 0.0026673999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_ASLpOH_k", internal, 0.0011318999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_ASoOH_k", internal, 0.0015983, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Export_ASpOH_k", internal, 0.00079526, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fu_AS", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fu_ASL", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_AS_k", internal, 0.020334999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_ASL_k", internal, 0.27539999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_ASLoOH_k", internal, 0.026121999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_ASLpOH_k", internal, 0.033729000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_ASoOH_k", internal, 0.00038874999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Import_ASpOH_k", internal, 0.0039614000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_CR_ASL_c", internal, 3.5500000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_CR_ASL_m", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_PON_ASL_c", internal, 0.0043734000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_PON_OH_c", internal, 0.0039829000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Prot_k1", internal, 8.5199999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UGT1A3_AS_KI1", internal, 75000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UGT1A3_AS_Km1", internal, 12000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UGT1A3_AS_Vmax", internal, 13.5862, -Infinity, Infinity, false);
    internal.initial_AS_b = internal.AS_b_init;
    internal.initial_AS_c = internal.AS_c_init;
    internal.initial_AS_m = internal.AS_m_init;
    internal.initial_ASL_b = internal.ASL_b_init;
    internal.initial_ASL_c = internal.ASL_c_init;
    internal.initial_ASL_m = internal.ASL_m_init;
    internal.initial_ASLoOH_b = internal.ASLoOH_b_init;
    internal.initial_ASLoOH_c = internal.ASLoOH_c_init;
    internal.initial_ASLoOH_m = internal.ASLoOH_m_init;
    internal.initial_ASLpOH_b = internal.ASLpOH_b_init;
    internal.initial_ASLpOH_c = internal.ASLpOH_c_init;
    internal.initial_ASLpOH_m = internal.ASLpOH_m_init;
    internal.initial_ASoOH_b = internal.ASoOH_b_init;
    internal.initial_ASoOH_c = internal.ASoOH_c_init;
    internal.initial_ASoOH_m = internal.ASoOH_m_init;
    internal.initial_ASpOH_b = internal.ASpOH_b_init;
    internal.initial_ASpOH_c = internal.ASpOH_c_init;
    internal.initial_ASpOH_m = internal.ASpOH_m_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const AS_m = state[0];
    const ASL_m = state[1];
    const ASoOH_m = state[2];
    const ASLpOH_m = state[3];
    const ASpOH_m = state[4];
    const ASLoOH_m = state[5];
    const AS_c = state[6];
    const ASL_c = state[7];
    const ASpOH_c = state[8];
    const ASoOH_c = state[9];
    const ASLpOH_c = state[10];
    const ASLoOH_c = state[11];
    const ASpOH_b = state[12];
    const ASoOH_b = state[13];
    const ASLpOH_b = state[14];
    const ASLoOH_b = state[15];
    const AS_b = state[16];
    const ASL_b = state[17];
    dstatedt[16] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * AS_c - AS_b);
    dstatedt[6] = 0 + 1 * internal.Import_AS_k * AS_m - 1 * internal.CYP3A4_ASpOH_Vmax / internal.CYP3A4_ASpOH_Km1 * AS_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * internal.CYP3A4_ASoOH_Vmax / internal.CYP3A4_ASoOH_Km1 * AS_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * internal.UGT1A3_AS_Vmax * AS_c / (internal.UGT1A3_AS_Km1 + AS_c + AS_c * AS_c / internal.UGT1A3_AS_KI1) + 1 * (internal.k_CR_ASL_c + internal.k_PON_ASL_c) * ASL_c - 1 * internal.Export_AS_k * AS_c - 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * AS_c - AS_b);
    dstatedt[0] = 0 - 1 * internal.Import_AS_k * AS_m + 1 * internal.Export_AS_k * AS_c + 1 * internal.k_CR_ASL_m * ASL_m;
    dstatedt[17] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASL_c - ASL_b);
    dstatedt[7] = 0 + 1 * internal.Import_ASL_k * ASL_m - 1 * internal.CYP3A4_ASLpOH_Vmax / internal.CYP3A4_ASLpOH_Km1 * ASL_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * internal.CYP3A4_ASLoOH_Vmax / internal.CYP3A4_ASLoOH_Km1 * ASL_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) + 1 * internal.UGT1A3_AS_Vmax * AS_c / (internal.UGT1A3_AS_Km1 + AS_c + AS_c * AS_c / internal.UGT1A3_AS_KI1) - 1 * (internal.k_CR_ASL_c + internal.k_PON_ASL_c) * ASL_c - 1 * internal.Export_ASL_k * ASL_c - 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASL_c - ASL_b);
    dstatedt[1] = 0 - 1 * internal.Import_ASL_k * ASL_m + 1 * internal.Export_ASL_k * ASL_c - 1 * internal.k_CR_ASL_m * ASL_m;
    dstatedt[15] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASLoOH_c - ASLoOH_b);
    dstatedt[11] = 0 + 1 * internal.CYP3A4_ASLoOH_Vmax / internal.CYP3A4_ASLoOH_Km1 * ASL_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * (internal.k_CR_ASL_c + internal.k_PON_OH_c) * ASLoOH_c + 1 * internal.Import_ASLoOH_k * ASLoOH_m - 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASLoOH_c - ASLoOH_b) - 1 * internal.Export_ASLoOH_k * ASLoOH_c;
    dstatedt[5] = 0 - 1 * internal.Import_ASLoOH_k * ASLoOH_m - 1 * internal.k_CR_ASL_m * ASLoOH_m + 1 * internal.Export_ASLoOH_k * ASLoOH_c;
    dstatedt[14] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASLpOH_c - ASLpOH_b);
    dstatedt[10] = 0 + 1 * internal.CYP3A4_ASLpOH_Vmax / internal.CYP3A4_ASLpOH_Km1 * ASL_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * (internal.k_CR_ASL_c + internal.k_PON_OH_c) * ASLpOH_c + 1 * internal.Import_ASLpOH_k * ASLpOH_m - 1 * internal.Prot_k1 * ((1 - internal.fu_ASL) / internal.fu_ASL * ASLpOH_c - ASLpOH_b) - 1 * internal.Export_ASLpOH_k * ASLpOH_c;
    dstatedt[3] = 0 - 1 * internal.Import_ASLpOH_k * ASLpOH_m - 1 * internal.k_CR_ASL_m * ASLpOH_m + 1 * internal.Export_ASLpOH_k * ASLpOH_c;
    dstatedt[13] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * ASoOH_c - ASoOH_b);
    dstatedt[9] = 0 + 1 * internal.CYP3A4_ASoOH_Vmax / internal.CYP3A4_ASoOH_Km1 * AS_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) - 1 * internal.Export_ASoOH_k * ASoOH_c + 1 * (internal.k_CR_ASL_c + internal.k_PON_OH_c) * ASLoOH_c - 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * ASoOH_c - ASoOH_b) + 1 * internal.Import_ASoOH_k * ASoOH_m;
    dstatedt[2] = 0 + 1 * internal.Export_ASoOH_k * ASoOH_c + 1 * internal.k_CR_ASL_m * ASLoOH_m - 1 * internal.Import_ASoOH_k * ASoOH_m;
    dstatedt[12] = 0 + 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * ASpOH_c - ASpOH_b);
    dstatedt[8] = 0 + 1 * internal.CYP3A4_ASpOH_Vmax / internal.CYP3A4_ASpOH_Km1 * AS_c / (1 + AS_c / internal.CYP3A4_ASpOH_Km1 + AS_c / internal.CYP3A4_ASoOH_Km1 + ASL_c / internal.CYP3A4_ASLpOH_Km1 + ASL_c / internal.CYP3A4_ASLoOH_Km1) + 1 * (internal.k_CR_ASL_c + internal.k_PON_OH_c) * ASLpOH_c - 1 * internal.Prot_k1 * ((1 - internal.fu_AS) / internal.fu_AS * ASpOH_c - ASpOH_b) + 1 * internal.Import_ASpOH_k * ASpOH_m - 1 * internal.Export_ASpOH_k * ASpOH_c;
    dstatedt[4] = 0 - 1 * internal.Import_ASpOH_k * ASpOH_m + 1 * internal.k_CR_ASL_m * ASLpOH_m + 1 * internal.Export_ASpOH_k * ASpOH_c;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "AS_m", "ASL_m", "ASoOH_m", "ASLpOH_m", "ASpOH_m", "ASLoOH_m", "AS_c", "ASL_c", "ASpOH_c", "ASoOH_c", "ASLpOH_c", "ASLoOH_c", "ASpOH_b", "ASoOH_b", "ASLpOH_b", "ASLoOH_b", "AS_b", "ASL_b"];
    this.metadata.internalOrder = {AS_b_init: null, AS_c_init: null, AS_m_init: null, ASL_b_init: null, ASL_c_init: null, ASL_m_init: null, ASLoOH_b_init: null, ASLoOH_c_init: null, ASLoOH_m_init: null, ASLpOH_b_init: null, ASLpOH_c_init: null, ASLpOH_m_init: null, ASoOH_b_init: null, ASoOH_c_init: null, ASoOH_m_init: null, ASpOH_b_init: null, ASpOH_c_init: null, ASpOH_m_init: null, cell: null, compartment: null, CYP3A4_ASLoOH_Km1: null, CYP3A4_ASLoOH_Vmax: null, CYP3A4_ASLpOH_Km1: null, CYP3A4_ASLpOH_Vmax: null, CYP3A4_ASoOH_Km1: null, CYP3A4_ASoOH_Vmax: null, CYP3A4_ASpOH_Km1: null, CYP3A4_ASpOH_Vmax: null, Export_AS_k: null, Export_ASL_k: null, Export_ASLoOH_k: null, Export_ASLpOH_k: null, Export_ASoOH_k: null, Export_ASpOH_k: null, fu_AS: null, fu_ASL: null, Import_AS_k: null, Import_ASL_k: null, Import_ASLoOH_k: null, Import_ASLpOH_k: null, Import_ASoOH_k: null, Import_ASpOH_k: null, initial_AS_b: null, initial_AS_c: null, initial_AS_m: null, initial_ASL_b: null, initial_ASL_c: null, initial_ASL_m: null, initial_ASLoOH_b: null, initial_ASLoOH_c: null, initial_ASLoOH_m: null, initial_ASLpOH_b: null, initial_ASLpOH_c: null, initial_ASLpOH_m: null, initial_ASoOH_b: null, initial_ASoOH_c: null, initial_ASoOH_m: null, initial_ASpOH_b: null, initial_ASpOH_c: null, initial_ASpOH_m: null, k_CR_ASL_c: null, k_CR_ASL_m: null, k_PON_ASL_c: null, k_PON_OH_c: null, medium: null, Prot_k1: null, UGT1A3_AS_KI1: null, UGT1A3_AS_Km1: null, UGT1A3_AS_Vmax: null};
    this.metadata.variableOrder = {AS_m: null, ASL_m: null, ASoOH_m: null, ASLpOH_m: null, ASpOH_m: null, ASLoOH_m: null, AS_c: null, ASL_c: null, ASpOH_c: null, ASoOH_c: null, ASLpOH_c: null, ASLoOH_c: null, ASpOH_b: null, ASoOH_b: null, ASLpOH_b: null, ASLoOH_b: null, AS_b: null, ASL_b: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

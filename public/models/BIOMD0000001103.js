export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell_Free_System = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_miR;
    state[1] = internal.initial_antimiR;
    state[2] = internal.initial_Toehold_DNA;
    state[3] = internal.initial_Toehold_RNA_CTS;
    state[4] = internal.initial_miR_antimiR;
    state[5] = internal.initial_GFP;
    state[6] = internal.initial_Toehold_RNA_OTS;
    state[7] = internal.initial_Mat_GFP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["antimiR_init", "GFP_init", "k_transcription", "k1", "Mat_GFP_init", "miR_antimiR_init", "miR_init", "Toehold_DNA_init", "Toehold_RNA_CTS_init", "Toehold_RNA_OTS_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "antimiR_init", internal, 1.1999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GFP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_transcription", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mat_GFP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "miR_antimiR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "miR_init", internal, 1.1999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Toehold_DNA_init", internal, 2.35e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Toehold_RNA_CTS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Toehold_RNA_OTS_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_antimiR = internal.antimiR_init;
    internal.initial_GFP = internal.GFP_init;
    internal.initial_Mat_GFP = internal.Mat_GFP_init;
    internal.initial_miR = internal.miR_init;
    internal.initial_miR_antimiR = internal.miR_antimiR_init;
    internal.initial_Toehold_DNA = internal.Toehold_DNA_init;
    internal.initial_Toehold_RNA_CTS = internal.Toehold_RNA_CTS_init;
    internal.initial_Toehold_RNA_OTS = internal.Toehold_RNA_OTS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const miR = state[0];
    const antimiR = state[1];
    const Toehold_DNA = state[2];
    const Toehold_RNA_CTS = state[3];
    const miR_antimiR = state[4];
    const GFP = state[5];
    const Toehold_RNA_OTS = state[6];
    const Mat_GFP = state[7];
    dstatedt[2] = 0;
    var Binding_CTS_miR_AntimIR = ((t <= 7680 ? 0 : 100000));
    var CTS_Transcription = ((t <= 7200 ? 0 : 0.0011000000000000001));
    dstatedt[5] = 0 + 1 * internal.Cell_Free_System * (internal.k_transcription * Toehold_RNA_OTS) - 1 * internal.Cell_Free_System * internal.k1 * GFP;
    dstatedt[7] = 0 + 1 * internal.Cell_Free_System * internal.k1 * GFP - 1 * internal.Cell_Free_System * internal.k1 * Mat_GFP;
    var RNA_decay = ((t <= 7200 ? 0.00029999999999999997 : 0));
    dstatedt[1] = 0 - 1 * internal.Cell_Free_System * internal.k1 * miR * antimiR - 1 * internal.Cell_Free_System * RNA_decay * antimiR;
    dstatedt[0] = 0 - 1 * internal.Cell_Free_System * internal.k1 * miR * antimiR - 1 * internal.Cell_Free_System * RNA_decay * miR;
    dstatedt[4] = 0 + 1 * internal.Cell_Free_System * internal.k1 * miR * antimiR - 1 * internal.Cell_Free_System * Binding_CTS_miR_AntimIR * miR_antimiR * Toehold_RNA_CTS;
    dstatedt[3] = 0 + 1 * internal.Cell_Free_System * (CTS_Transcription * Toehold_DNA) - 1 * internal.Cell_Free_System * Binding_CTS_miR_AntimIR * miR_antimiR * Toehold_RNA_CTS - 1 * internal.Cell_Free_System * internal.k1 * Toehold_RNA_CTS;
    dstatedt[6] = 0 + 1 * internal.Cell_Free_System * Binding_CTS_miR_AntimIR * miR_antimiR * Toehold_RNA_CTS - 1 * internal.Cell_Free_System * internal.k1 * Toehold_RNA_OTS;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "miR", "antimiR", "Toehold_DNA", "Toehold_RNA_CTS", "miR_antimiR", "GFP", "Toehold_RNA_OTS", "Mat_GFP"];
    this.metadata.internalOrder = {antimiR_init: null, Cell_Free_System: null, GFP_init: null, initial_antimiR: null, initial_GFP: null, initial_Mat_GFP: null, initial_miR: null, initial_miR_antimiR: null, initial_Toehold_DNA: null, initial_Toehold_RNA_CTS: null, initial_Toehold_RNA_OTS: null, k_transcription: null, k1: null, Mat_GFP_init: null, miR_antimiR_init: null, miR_init: null, Toehold_DNA_init: null, Toehold_RNA_CTS_init: null, Toehold_RNA_OTS_init: null};
    this.metadata.variableOrder = {miR: null, antimiR: null, Toehold_DNA: null, Toehold_RNA_CTS: null, miR_antimiR: null, GFP: null, Toehold_RNA_OTS: null, Mat_GFP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

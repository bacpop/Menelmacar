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
    var state = Array(6).fill(0);
    state[0] = internal.initial_Tbet_mRNA;
    state[1] = internal.initial_Ifn_mRNA;
    state[2] = internal.initial_Ifn_Prot;
    state[3] = internal.initial_Rec_Prot;
    state[4] = internal.initial_Tbet_Prot;
    state[5] = internal.initial_Rec_mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "a3", "a4", "a5", "b", "delta_IFN", "delta_Rec", "delta_Tbet", "gamma_IFN", "gamma_Rec", "gamma_Tbet", "Ifn_mRNA_init", "Ifn_Prot_init", "K1", "K2", "K4", "K5", "K6", "K7", "Rec_mRNA_init", "Rec_Prot_init", "Tbet_mRNA_init", "Tbet_Prot_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.043999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.00051000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a4", internal, 0.0028, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a5", internal, 3.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_IFN", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Rec", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Tbet", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_IFN", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Rec", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Tbet", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ifn_mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ifn_Prot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 2.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 66, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_Prot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tbet_mRNA_init", internal, 0.044000000000000102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tbet_Prot_init", internal, 44.000000000000099, -Infinity, Infinity, false);
    internal.initial_Ifn_mRNA = internal.Ifn_mRNA_init;
    internal.initial_Ifn_Prot = internal.Ifn_Prot_init;
    internal.initial_Rec_mRNA = internal.Rec_mRNA_init;
    internal.initial_Rec_Prot = internal.Rec_Prot_init;
    internal.initial_Tbet_mRNA = internal.Tbet_mRNA_init;
    internal.initial_Tbet_Prot = internal.Tbet_Prot_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tbet_mRNA = state[0];
    const Ifn_mRNA = state[1];
    const Ifn_Prot = state[2];
    const Rec_Prot = state[3];
    const Tbet_Prot = state[4];
    const Rec_mRNA = state[5];
    var Ag = 1 - Math.pow((t), (10)) / (Math.pow((34), (10)) + Math.pow((t), (10)));
    dstatedt[2] = 0 - 1 * internal.compartment * internal.delta_IFN * Ifn_Prot + 1 * internal.compartment * (internal.b * Ifn_mRNA);
    dstatedt[3] = 0 - 1 * internal.compartment * internal.delta_Rec * Rec_Prot + 1 * internal.compartment * (internal.b * Rec_mRNA);
    dstatedt[4] = 0 - 1 * internal.compartment * internal.delta_Tbet * Tbet_Prot + 1 * internal.compartment * (internal.b * Tbet_mRNA);
    dstatedt[1] = 0 - 1 * internal.compartment * internal.gamma_IFN * Ifn_mRNA + 1 * internal.compartment * (internal.a5 * (Tbet_Prot / (internal.K5 + Tbet_Prot)) * (Rec_Prot / (internal.K6 + Rec_Prot)) * (Ag / (internal.K7 + Ag)));
    dstatedt[5] = 0 - 1 * internal.compartment * internal.gamma_Rec * Rec_mRNA + 1 * internal.compartment * (internal.a4 * Tbet_Prot * (internal.K4 / (internal.K4 + Ag)));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a2 * (Ag / (internal.K1 + Ag)) * (Ifn_Prot / (internal.K2 + Ifn_Prot))) + 1 * internal.compartment * (internal.a3 * Rec_Prot) + 1 * internal.compartment * (internal.a1) - 1 * internal.compartment * internal.gamma_Tbet * Tbet_mRNA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tbet_mRNA", "Ifn_mRNA", "Ifn_Prot", "Rec_Prot", "Tbet_Prot", "Rec_mRNA"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, a4: null, a5: null, b: null, compartment: null, delta_IFN: null, delta_Rec: null, delta_Tbet: null, gamma_IFN: null, gamma_Rec: null, gamma_Tbet: null, Ifn_mRNA_init: null, Ifn_Prot_init: null, initial_Ifn_mRNA: null, initial_Ifn_Prot: null, initial_Rec_mRNA: null, initial_Rec_Prot: null, initial_Tbet_mRNA: null, initial_Tbet_Prot: null, K1: null, K2: null, K4: null, K5: null, K6: null, K7: null, Rec_mRNA_init: null, Rec_Prot_init: null, Tbet_mRNA_init: null, Tbet_Prot_init: null};
    this.metadata.variableOrder = {Tbet_mRNA: null, Ifn_mRNA: null, Ifn_Prot: null, Rec_Prot: null, Tbet_Prot: null, Rec_mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

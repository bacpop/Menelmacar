export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Ligand_EGF;
    state[1] = internal.initial_Surface_Receptor_External;
    state[2] = internal.initial_Receptor_Ligand_Complex;
    state[3] = internal.initial_Internalised_receptors;
    state[4] = internal.initial_Receptor_Ligand_Pit_Protein_complex;
    state[5] = internal.initial_Free_pit_proteins;
    state[6] = internal.initial_Internalised_Ligand;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["delTe", "epsilon", "f", "Free_pit_proteins_init", "Internalised_Ligand_init", "Internalised_receptors_init", "k_1", "k_2", "k1", "k1_t", "k2", "ke", "ki", "Ligand_EGF_init", "Receptor_Ligand_Complex_init", "Receptor_Ligand_Pit_Protein_complex_init", "Surface_Receptor_External_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "delTe", internal, 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Free_pit_proteins_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Internalised_Ligand_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Internalised_receptors_init", internal, 25029, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.57999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 81500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_t", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 0.049000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ligand_EGF_init", internal, 198730648281000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Receptor_Ligand_Complex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Receptor_Ligand_Pit_Protein_complex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Surface_Receptor_External_init", internal, 73000.000000000102, -Infinity, Infinity, false);
    internal.initial_Free_pit_proteins = internal.Free_pit_proteins_init;
    internal.initial_Internalised_Ligand = internal.Internalised_Ligand_init;
    internal.initial_Internalised_receptors = internal.Internalised_receptors_init;
    internal.initial_Ligand_EGF = internal.Ligand_EGF_init;
    internal.initial_Receptor_Ligand_Complex = internal.Receptor_Ligand_Complex_init;
    internal.initial_Receptor_Ligand_Pit_Protein_complex = internal.Receptor_Ligand_Pit_Protein_complex_init;
    internal.initial_Surface_Receptor_External = internal.Surface_Receptor_External_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ligand_EGF = state[0];
    const Surface_Receptor_External = state[1];
    const Receptor_Ligand_Complex = state[2];
    const Internalised_receptors = state[3];
    const Receptor_Ligand_Pit_Protein_complex = state[4];
    const Free_pit_proteins = state[5];
    const Internalised_Ligand = state[6];
    dstatedt[5] = 0 - 1 * internal.Cell * (internal.k2 * internal.f * Receptor_Ligand_Complex * Free_pit_proteins);
    dstatedt[0] = 0 - 1 * internal.Cell * internal.k1 * Surface_Receptor_External * Ligand_EGF;
    var ke_t = internal.ke * (internal.epsilon + (1 - internal.epsilon) * (1 - Math.pow((Math.exp(- (t / internal.delTe))), (3))));
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.f * ke_t * Receptor_Ligand_Complex) + 1 * internal.Cell * ke_t * Receptor_Ligand_Pit_Protein_complex - 1 * internal.Cell * internal.k1_t * Internalised_Ligand;
    dstatedt[3] = 0 + 1 * internal.Cell * (internal.f * ke_t * Surface_Receptor_External) + 1 * internal.Cell * (internal.f * ke_t * Receptor_Ligand_Complex) + 1 * internal.Cell * ke_t * Receptor_Ligand_Pit_Protein_complex - 1 * internal.Cell * internal.ki * Internalised_receptors;
    dstatedt[2] = 0 + 1 * internal.Cell * internal.k1 * Surface_Receptor_External * Ligand_EGF - 1 * internal.Cell * internal.k_1 * Receptor_Ligand_Complex - 1 * internal.Cell * (internal.k2 * internal.f * Receptor_Ligand_Complex * Free_pit_proteins) + 1 * internal.Cell * internal.k_2 * Receptor_Ligand_Pit_Protein_complex - 1 * internal.Cell * (internal.f * ke_t * Receptor_Ligand_Complex);
    dstatedt[4] = 0 + 1 * internal.Cell * (internal.k2 * internal.f * Receptor_Ligand_Complex * Free_pit_proteins) - 1 * internal.Cell * internal.k_2 * Receptor_Ligand_Pit_Protein_complex - 1 * internal.Cell * ke_t * Receptor_Ligand_Pit_Protein_complex;
    dstatedt[1] = 0 - 1 * internal.Cell * internal.k1 * Surface_Receptor_External * Ligand_EGF + 1 * internal.Cell * internal.k_1 * Receptor_Ligand_Complex - 1 * internal.Cell * (internal.f * ke_t * Surface_Receptor_External) + 1 * internal.Cell * internal.ki * Internalised_receptors;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ligand_EGF", "Surface_Receptor_External", "Receptor_Ligand_Complex", "Internalised_receptors", "Receptor_Ligand_Pit_Protein_complex", "Free_pit_proteins", "Internalised_Ligand"];
    this.metadata.internalOrder = {Cell: null, delTe: null, epsilon: null, f: null, Free_pit_proteins_init: null, initial_Free_pit_proteins: null, initial_Internalised_Ligand: null, initial_Internalised_receptors: null, initial_Ligand_EGF: null, initial_Receptor_Ligand_Complex: null, initial_Receptor_Ligand_Pit_Protein_complex: null, initial_Surface_Receptor_External: null, Internalised_Ligand_init: null, Internalised_receptors_init: null, k_1: null, k_2: null, k1: null, k1_t: null, k2: null, ke: null, ki: null, Ligand_EGF_init: null, pi: null, Receptor_Ligand_Complex_init: null, Receptor_Ligand_Pit_Protein_complex_init: null, Surface_Receptor_External_init: null};
    this.metadata.variableOrder = {Ligand_EGF: null, Surface_Receptor_External: null, Receptor_Ligand_Complex: null, Internalised_receptors: null, Receptor_Ligand_Pit_Protein_complex: null, Free_pit_proteins: null, Internalised_Ligand: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

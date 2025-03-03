export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Plasma = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Normal_Th_cells;
    state[1] = internal.initial_Pathogen_Virus;
    state[2] = internal.initial_Single_Infected_Th_Cells;
    state[3] = internal.initial_Recombinant_Virus;
    state[4] = internal.initial_Double_Infected_Th_Cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "b", "beta", "c", "d", "Double_Infected_Th_Cells_init", "kxk", "lamda", "Normal_Th_cells_init", "Pathogen_Virus_init", "q", "Recombinant_Virus_init", "Single_Infected_Th_Cells_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Double_Infected_Th_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Normal_Th_cells_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pathogen_Virus_init", internal, 149, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recombinant_Virus_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Single_Infected_Th_Cells_init", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 2, -Infinity, Infinity, false);
    internal.initial_Double_Infected_Th_Cells = internal.Double_Infected_Th_Cells_init;
    internal.initial_Normal_Th_cells = internal.Normal_Th_cells_init;
    internal.initial_Pathogen_Virus = internal.Pathogen_Virus_init;
    internal.initial_Recombinant_Virus = internal.Recombinant_Virus_init;
    internal.initial_Single_Infected_Th_Cells = internal.Single_Infected_Th_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Normal_Th_cells = state[0];
    const Pathogen_Virus = state[1];
    const Single_Infected_Th_Cells = state[2];
    const Recombinant_Virus = state[3];
    const Double_Infected_Th_Cells = state[4];
    dstatedt[4] = 0 + 1 * internal.Plasma * (internal.alpha * Recombinant_Virus * Single_Infected_Th_Cells) - 1 * internal.Plasma * internal.b * Double_Infected_Th_Cells;
    dstatedt[0] = 0 + 1 * internal.Plasma * (internal.lamda) - 1 * internal.Plasma * internal.d * Normal_Th_cells - 1 * internal.Plasma * (internal.beta * Normal_Th_cells * Pathogen_Virus);
    dstatedt[1] = 0 + 1 * internal.Plasma * (internal.kxk * Single_Infected_Th_Cells) - 1 * internal.Plasma * internal.u * Pathogen_Virus;
    dstatedt[3] = 0 + 1 * internal.Plasma * (internal.c * Double_Infected_Th_Cells) - 1 * internal.Plasma * internal.q * Recombinant_Virus;
    dstatedt[2] = 0 + 1 * internal.Plasma * (internal.beta * Normal_Th_cells * Pathogen_Virus) - 1 * internal.Plasma * internal.a * Single_Infected_Th_Cells - 1 * internal.Plasma * (internal.alpha * Recombinant_Virus * Single_Infected_Th_Cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Normal_Th_cells", "Pathogen_Virus", "Single_Infected_Th_Cells", "Recombinant_Virus", "Double_Infected_Th_Cells"];
    this.metadata.internalOrder = {a: null, alpha: null, b: null, beta: null, c: null, d: null, Double_Infected_Th_Cells_init: null, initial_Double_Infected_Th_Cells: null, initial_Normal_Th_cells: null, initial_Pathogen_Virus: null, initial_Recombinant_Virus: null, initial_Single_Infected_Th_Cells: null, kxk: null, lamda: null, Normal_Th_cells_init: null, Pathogen_Virus_init: null, Plasma: null, q: null, Recombinant_Virus_init: null, Single_Infected_Th_Cells_init: null, u: null};
    this.metadata.variableOrder = {Normal_Th_cells: null, Pathogen_Virus: null, Single_Infected_Th_Cells: null, Recombinant_Virus: null, Double_Infected_Th_Cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

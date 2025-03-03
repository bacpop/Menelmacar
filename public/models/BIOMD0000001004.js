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
    var state = Array(10).fill(0);
    state[0] = internal.initial_IL6ext;
    state[1] = internal.initial_IL6int;
    state[2] = internal.initial_STAT3mRNA;
    state[3] = internal.initial_STAT3prot_star;
    state[4] = internal.initial_STAT3prot;
    state[5] = internal.initial_TGFbext;
    state[6] = internal.initial_TGFbint;
    state[7] = internal.initial_RORgtmRNA;
    state[8] = internal.initial_FOXP3prot_star;
    state[9] = internal.initial_FOXP3mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["FOXP3mRNA_init", "FOXP3prot_star_init", "IL6ext_init", "IL6int_init", "k1", "RORgtmRNA_init", "STAT3mRNA_init", "STAT3prot_init", "STAT3prot_star_init", "TGFbext_init", "TGFbint_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "FOXP3mRNA_init", internal, 0.14499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FOXP3prot_star_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL6ext_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL6int_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 4.9669999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RORgtmRNA_init", internal, 0.0025999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT3mRNA_init", internal, 0.45760000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT3prot_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT3prot_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFbext_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFbint_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0, -Infinity, Infinity, false);
    internal.initial_FOXP3mRNA = internal.FOXP3mRNA_init;
    internal.initial_FOXP3prot_star = internal.FOXP3prot_star_init;
    internal.initial_IL6ext = internal.IL6ext_init;
    internal.initial_IL6int = internal.IL6int_init;
    internal.initial_RORgtmRNA = internal.RORgtmRNA_init;
    internal.initial_STAT3mRNA = internal.STAT3mRNA_init;
    internal.initial_STAT3prot = internal.STAT3prot_init;
    internal.initial_STAT3prot_star = internal.STAT3prot_star_init;
    internal.initial_TGFbext = internal.TGFbext_init;
    internal.initial_TGFbint = internal.TGFbint_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IL6ext = state[0];
    const IL6int = state[1];
    const STAT3mRNA = state[2];
    const STAT3prot_star = state[3];
    const STAT3prot = state[4];
    const TGFbext = state[5];
    const TGFbint = state[6];
    const RORgtmRNA = state[7];
    const FOXP3prot_star = state[8];
    const FOXP3mRNA = state[9];
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * internal.k1 * TGFbint - 1 * internal.compartment * internal.k1 * FOXP3mRNA * STAT3prot_star - 1 * internal.compartment * internal.k1 * FOXP3mRNA - 1 * internal.compartment * internal.k1 * FOXP3mRNA + 1 * internal.compartment * internal.k1 * FOXP3mRNA;
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k1 * RORgtmRNA * FOXP3prot_star + 1 * internal.compartment * internal.k1 * RORgtmRNA * FOXP3prot_star + 1 * internal.compartment * internal.k1 * FOXP3mRNA - 1 * internal.compartment * internal.k1 * FOXP3prot_star;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * IL6ext;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * IL6ext - 1 * internal.compartment * internal.k1 * STAT3prot * IL6int + 1 * internal.compartment * internal.k1 * STAT3prot * IL6int;
    dstatedt[7] = 0 - 1 * internal.compartment * internal.k1 * RORgtmRNA * FOXP3prot_star - 1 * internal.compartment * internal.k1 * RORgtmRNA + 1 * internal.compartment * internal.k1 * TGFbint * STAT3prot_star;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * internal.k1 * STAT3prot_star - 1 * internal.compartment * internal.k1 * STAT3mRNA - 1 * internal.compartment * internal.k1 * STAT3mRNA + 1 * internal.compartment * internal.k1 * STAT3mRNA;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k1 * STAT3mRNA - 1 * internal.compartment * internal.k1 * STAT3prot * IL6int - 1 * internal.compartment * internal.k1 * STAT3prot;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.k1 * STAT3prot_star + 1 * internal.compartment * internal.k1 * STAT3prot_star + 1 * internal.compartment * internal.k1 * STAT3prot * IL6int - 1 * internal.compartment * internal.k1 * STAT3prot_star - 1 * internal.compartment * internal.k1 * FOXP3mRNA * STAT3prot_star + 1 * internal.compartment * internal.k1 * FOXP3mRNA * STAT3prot_star - 1 * internal.compartment * internal.k1 * TGFbint * STAT3prot_star + 1 * internal.compartment * internal.k1 * TGFbint * STAT3prot_star;
    dstatedt[5] = 0 - 1 * internal.compartment * internal.k1 * TGFbext;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k1 * TGFbext - 1 * internal.compartment * internal.k1 * TGFbint + 1 * internal.compartment * internal.k1 * TGFbint - 1 * internal.compartment * internal.k1 * TGFbint * STAT3prot_star + 1 * internal.compartment * internal.k1 * TGFbint * STAT3prot_star;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IL6ext", "IL6int", "STAT3mRNA", "STAT3prot_star", "STAT3prot", "TGFbext", "TGFbint", "RORgtmRNA", "FOXP3prot_star", "FOXP3mRNA"];
    this.metadata.internalOrder = {compartment: null, FOXP3mRNA_init: null, FOXP3prot_star_init: null, IL6ext_init: null, IL6int_init: null, initial_FOXP3mRNA: null, initial_FOXP3prot_star: null, initial_IL6ext: null, initial_IL6int: null, initial_RORgtmRNA: null, initial_STAT3mRNA: null, initial_STAT3prot: null, initial_STAT3prot_star: null, initial_TGFbext: null, initial_TGFbint: null, k1: null, RORgtmRNA_init: null, STAT3mRNA_init: null, STAT3prot_init: null, STAT3prot_star_init: null, TGFbext_init: null, TGFbint_init: null, v: null};
    this.metadata.variableOrder = {IL6ext: null, IL6int: null, STAT3mRNA: null, STAT3prot_star: null, STAT3prot: null, TGFbext: null, TGFbint: null, RORgtmRNA: null, FOXP3prot_star: null, FOXP3mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

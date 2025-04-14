export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.Nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(15).fill(0);
    state[0] = internal.initial_IKK_neutral;
    state[1] = internal.initial_IKK_active;
    state[2] = internal.initial_IKK_inact;
    state[3] = internal.initial_IKKactive_IkB;
    state[4] = internal.initial_IkB;
    state[5] = internal.initial_IKKactive_IkB_NFKB;
    state[6] = internal.initial_IkB_NFKB;
    state[7] = internal.initial_NFKB;
    state[8] = internal.initial_NFKB_nuc;
    state[9] = internal.initial_IkB_nuc;
    state[10] = internal.initial_IkB_NFKB_nuc;
    state[11] = internal.initial_IkB_mRNA;
    state[12] = internal.initial_A20_mRNA;
    state[13] = internal.initial_A20;
    state[14] = internal.initial_cgen_mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "A20_init", "A20_mRNA_init", "a3", "c1", "c1a", "c1c", "c2", "c2a", "c2c", "c3", "c3a", "c3c", "c4", "c4a", "c5", "c5a", "c6a", "cgen_mRNA_init", "e1a", "e2a", "i1", "i1a", "IkB_init", "IkB_mRNA_init", "IkB_NFKB_init", "IkB_NFKB_nuc_init", "IkB_nuc_init", "IKK_active_init", "IKK_inact_init", "IKK_neutral_init", "IKKactive_IkB_init", "IKKactive_IkB_NFKB_init", "k1", "k2", "k3", "Kdeg", "Kprod", "Kv", "NFKB_init", "NFKB_nuc_init", "t1", "t2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A20_mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1a", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1c", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2a", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2c", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3a", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3c", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4a", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c5", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c5a", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c6a", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cgen_mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1a", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2a", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i1", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i1a", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkB_mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkB_NFKB_init", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkB_NFKB_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IkB_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKK_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKK_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKK_neutral_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKKactive_IkB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKKactive_IkB_NFKB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdeg", internal, 0.000125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kprod", internal, 2.5000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kv", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFKB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFKB_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_A20 = internal.A20_init;
    internal.initial_A20_mRNA = internal.A20_mRNA_init;
    internal.initial_cgen_mRNA = internal.cgen_mRNA_init;
    internal.initial_IkB = internal.IkB_init;
    internal.initial_IkB_mRNA = internal.IkB_mRNA_init;
    internal.initial_IkB_NFKB = internal.IkB_NFKB_init;
    internal.initial_IkB_NFKB_nuc = internal.IkB_NFKB_nuc_init;
    internal.initial_IkB_nuc = internal.IkB_nuc_init;
    internal.initial_IKK_active = internal.IKK_active_init;
    internal.initial_IKK_inact = internal.IKK_inact_init;
    internal.initial_IKK_neutral = internal.IKK_neutral_init;
    internal.initial_IKKactive_IkB = internal.IKKactive_IkB_init;
    internal.initial_IKKactive_IkB_NFKB = internal.IKKactive_IkB_NFKB_init;
    internal.initial_NFKB = internal.NFKB_init;
    internal.initial_NFKB_nuc = internal.NFKB_nuc_init;
    internal.ModelValue_1 = internal.Kv;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IKK_neutral = state[0];
    const IKK_active = state[1];
    const IKK_inact = state[2];
    const IKKactive_IkB = state[3];
    const IkB = state[4];
    const IKKactive_IkB_NFKB = state[5];
    const IkB_NFKB = state[6];
    const NFKB = state[7];
    const NFKB_nuc = state[8];
    const IkB_nuc = state[9];
    const IkB_NFKB_nuc = state[10];
    const IkB_mRNA = state[11];
    const A20_mRNA = state[12];
    const A20 = state[13];
    const cgen_mRNA = state[14];
    dstatedt[13] = 0 + 1 * (internal.c4 * A20_mRNA) - 1 * internal.Cytosol * internal.c5 * A20;
    dstatedt[12] = 0 + 1 * internal.Nucleus * (internal.c1 * NFKB_nuc) - 1 * internal.Nucleus * internal.c3 * A20_mRNA;
    dstatedt[14] = 0 + 1 * internal.Nucleus * (internal.c1c * NFKB_nuc) - 1 * internal.Nucleus * internal.c3c * cgen_mRNA;
    dstatedt[4] = 0 - 1 * internal.Cytosol * internal.a1 * NFKB * IkB - 1 * internal.Cytosol * internal.i1a * IkB - 1 * internal.Cytosol * internal.a2 * IKK_active * IkB + 1 * (internal.c4a * IkB_mRNA) - 1 * internal.Cytosol * internal.c5a * IkB + 1 * (internal.e1a * IkB_nuc);
    dstatedt[11] = 0 + 1 * internal.Nucleus * (internal.c1a * NFKB_nuc) - 1 * internal.Nucleus * internal.c3a * IkB_mRNA;
    dstatedt[6] = 0 + 1 * internal.Cytosol * internal.a1 * NFKB * IkB - 1 * internal.Cytosol * internal.c6a * IkB_NFKB - 1 * internal.Cytosol * internal.a3 * IKK_active * IkB_NFKB + 1 * (internal.e2a * IkB_NFKB_nuc);
    dstatedt[10] = 0 + 1 * internal.Nucleus * internal.a1 * NFKB_nuc * IkB_nuc - 1 * internal.Nucleus * (internal.e2a * internal.Kv * IkB_NFKB_nuc);
    dstatedt[9] = 0 - 1 * internal.Nucleus * internal.a1 * NFKB_nuc * IkB_nuc - 1 * internal.Nucleus * (internal.e1a * internal.Kv * IkB_nuc) + 1 * (internal.i1a * internal.Kv * IkB);
    dstatedt[3] = 0 + 1 * internal.Cytosol * internal.a2 * IKK_active * IkB - 1 * internal.Cytosol * internal.t1 * IKKactive_IkB;
    dstatedt[5] = 0 + 1 * internal.Cytosol * internal.a3 * IKK_active * IkB_NFKB - 1 * internal.Cytosol * internal.t2 * IKKactive_IkB_NFKB;
    dstatedt[7] = 0 - 1 * internal.Cytosol * internal.i1 * NFKB - 1 * internal.Cytosol * internal.a1 * NFKB * IkB + 1 * internal.Cytosol * internal.c6a * IkB_NFKB + 1 * internal.Cytosol * internal.t2 * IKKactive_IkB_NFKB;
    dstatedt[8] = 0 - 1 * internal.Nucleus * internal.a1 * NFKB_nuc * IkB_nuc + 1 * (internal.i1 * internal.Kv * NFKB);
    var TNF_R = (t > 363600 ? 1 : 0);
    var TNF = TNF_R;
    dstatedt[1] = 0 + 1 * internal.Cytosol * (internal.k1 * TNF * IKK_neutral) - 1 * internal.Cytosol * internal.k3 * IKK_active - 1 * internal.Cytosol * internal.Kdeg * IKK_active - 1 * internal.Cytosol * internal.a2 * IKK_active * IkB - 1 * internal.Cytosol * internal.a3 * IKK_active * IkB_NFKB - 1 * internal.Cytosol * (internal.k2 * TNF * A20 * IKK_active) + 1 * internal.Cytosol * internal.t2 * IKKactive_IkB_NFKB + 1 * internal.Cytosol * internal.t1 * IKKactive_IkB;
    dstatedt[2] = 0 + 1 * internal.Cytosol * internal.k3 * IKK_active - 1 * internal.Cytosol * internal.Kdeg * IKK_inact + 1 * internal.Cytosol * (internal.k2 * TNF * A20 * IKK_active);
    dstatedt[0] = 0 + 1 * internal.Cytosol * (internal.Kprod) - 1 * internal.Cytosol * internal.Kdeg * IKK_neutral - 1 * internal.Cytosol * (internal.k1 * TNF * IKK_neutral);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IKK_neutral", "IKK_active", "IKK_inact", "IKKactive_IkB", "IkB", "IKKactive_IkB_NFKB", "IkB_NFKB", "NFKB", "NFKB_nuc", "IkB_nuc", "IkB_NFKB_nuc", "IkB_mRNA", "A20_mRNA", "A20", "cgen_mRNA"];
    this.metadata.internalOrder = {a1: null, a2: null, A20_init: null, A20_mRNA_init: null, a3: null, c1: null, c1a: null, c1c: null, c2: null, c2a: null, c2c: null, c3: null, c3a: null, c3c: null, c4: null, c4a: null, c5: null, c5a: null, c6a: null, cgen_mRNA_init: null, Cytosol: null, e1a: null, e2a: null, i1: null, i1a: null, IkB_init: null, IkB_mRNA_init: null, IkB_NFKB_init: null, IkB_NFKB_nuc_init: null, IkB_nuc_init: null, IKK_active_init: null, IKK_inact_init: null, IKK_neutral_init: null, IKKactive_IkB_init: null, IKKactive_IkB_NFKB_init: null, initial_A20: null, initial_A20_mRNA: null, initial_cgen_mRNA: null, initial_IkB: null, initial_IkB_mRNA: null, initial_IkB_NFKB: null, initial_IkB_NFKB_nuc: null, initial_IkB_nuc: null, initial_IKK_active: null, initial_IKK_inact: null, initial_IKK_neutral: null, initial_IKKactive_IkB: null, initial_IKKactive_IkB_NFKB: null, initial_NFKB: null, initial_NFKB_nuc: null, k1: null, k2: null, k3: null, Kdeg: null, Kprod: null, Kv: null, ModelValue_1: null, NFKB_init: null, NFKB_nuc_init: null, Nucleus: null, t1: null, t2: null};
    this.metadata.variableOrder = {IKK_neutral: null, IKK_active: null, IKK_inact: null, IKKactive_IkB: null, IkB: null, IKKactive_IkB_NFKB: null, IkB_NFKB: null, NFKB: null, NFKB_nuc: null, IkB_nuc: null, IkB_NFKB_nuc: null, IkB_mRNA: null, A20_mRNA: null, A20: null, cgen_mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

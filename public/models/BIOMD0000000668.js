export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Pancreas = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_Ra;
    state[1] = internal.initial_Rd;
    state[2] = internal.initial_Inh_g;
    state[3] = internal.initial_Inh_b;
    state[4] = internal.initial_Sti_g;
    state[5] = internal.initial_Sti_b;
    state[6] = internal.initial_Sti_g1;
    state[7] = internal.initial_Sti_g2;
    state[8] = internal.initial_Sti_g3;
    state[9] = internal.initial_Sti_g4;
    state[10] = internal.initial_Sti_b1;
    state[11] = internal.initial_Sti_b2;
    state[12] = internal.initial_Sti_b3;
    state[13] = internal.initial_Sti_b4;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_b", "C_g", "Hi_b", "Hi_g", "Hs_b", "Hs_g", "IC50_b", "IC50_g", "Imax_b", "Imax_g", "kd", "kg", "ktau_b", "ktau_g", "ModelValue_2", "ModelValue_3", "ModelValue_4", "Psi_i", "Psi_s", "Ra_0", "Rd_0", "Rss", "SC50_b", "SC50_g", "Smax_b", "Smax_g", "Sti_b1_init", "Sti_b2_init", "Sti_b3_init", "Sti_b4_init", "Sti_g1_init", "Sti_g2_init", "Sti_g3_init", "Sti_g4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_b", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_g", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hi_b", internal, 1.0600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hi_g", internal, 3.5699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hs_b", internal, 0.98399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hs_g", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IC50_b", internal, 145, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IC50_g", internal, 20.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax_b", internal, 0.375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax_g", internal, 0.99099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.00038499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 0.020899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktau_b", internal, 0.61099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktau_g", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 5490000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 0.020899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_4", internal, 0.00038499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Psi_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Psi_s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ra_0", internal, 307000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rd_0", internal, 1940, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rss", internal, 5490000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SC50_b", internal, 168, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SC50_g", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smax_b", internal, 17.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smax_g", internal, 4.0899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_b1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_b2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_b3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_b4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_g1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_g2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_g3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_g4_init", internal, 0, -Infinity, Infinity, false);
    internal.Inh_b_init = internal.Imax_b * Math.pow((internal.C_b), (internal.Hi_b)) / (Math.pow((internal.Psi_i * internal.IC50_b), (internal.Hi_b)) + Math.pow((internal.C_b), (internal.Hi_b)));
    internal.Inh_g_init = internal.Imax_g * Math.pow((internal.C_g), (internal.Hi_g)) / (Math.pow((internal.Psi_i * internal.IC50_g), (internal.Hi_g)) + Math.pow((internal.C_g), (internal.Hi_g)));
    internal.initial_Sti_b1 = internal.Sti_b1_init;
    internal.initial_Sti_b2 = internal.Sti_b2_init;
    internal.initial_Sti_b3 = internal.Sti_b3_init;
    internal.initial_Sti_b4 = internal.Sti_b4_init;
    internal.initial_Sti_g1 = internal.Sti_g1_init;
    internal.initial_Sti_g2 = internal.Sti_g2_init;
    internal.initial_Sti_g3 = internal.Sti_g3_init;
    internal.initial_Sti_g4 = internal.Sti_g4_init;
    internal.Ra_init = internal.Ra_0;
    internal.Rd_init = internal.Rd_0;
    internal.Sti_b_init = internal.Smax_b * Math.pow((internal.C_b), (internal.Hs_b)) / (Math.pow((internal.Psi_s * internal.SC50_b), (internal.Hs_b)) + Math.pow((internal.C_b), (internal.Hs_b)));
    internal.Sti_g_init = internal.Smax_g * Math.pow((internal.C_g), (internal.Hs_g)) / (Math.pow((internal.Psi_s * internal.SC50_g), (internal.Hs_g)) + Math.pow((internal.C_g), (internal.Hs_g)));
    internal.initial_Inh_b = internal.Inh_b_init;
    internal.initial_Inh_g = internal.Inh_g_init;
    internal.initial_Ra = internal.Ra_init;
    internal.initial_Rd = internal.Rd_init;
    internal.initial_Sti_b = internal.Sti_b_init;
    internal.initial_Sti_g = internal.Sti_g_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ra = state[0];
    const Rd = state[1];
    const Inh_g = state[2];
    const Inh_b = state[3];
    const Sti_g = state[4];
    const Sti_b = state[5];
    const Sti_g1 = state[6];
    const Sti_g2 = state[7];
    const Sti_g3 = state[8];
    const Sti_g4 = state[9];
    const Sti_b1 = state[10];
    const Sti_b2 = state[11];
    const Sti_b3 = state[12];
    const Sti_b4 = state[13];
    dstatedt[3] = 0 + 0;
    dstatedt[2] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[4] = 0 + 0;
    dstatedt[0] = 0 + (1 - Inh_g) * (1 - Inh_b) * internal.ModelValue_3 * Ra * (1 - Ra / internal.ModelValue_2) - (1 + Sti_g4) * (1 + Sti_b4) * internal.ModelValue_4 * Ra;
    dstatedt[1] = 0 + (1 + Sti_g4) * (1 + Sti_b4) * internal.ModelValue_4 * Ra - internal.ModelValue_4 * Rd;
    dstatedt[10] = 0 + 1 * internal.Pancreas * internal.ktau_b * Sti_b - 1 * internal.Pancreas * internal.ktau_b * Sti_b1;
    dstatedt[11] = 0 + 1 * internal.Pancreas * internal.ktau_b * Sti_b1 - 1 * internal.Pancreas * internal.ktau_b * Sti_b2;
    dstatedt[12] = 0 + 1 * internal.Pancreas * internal.ktau_b * Sti_b2 - 1 * internal.Pancreas * internal.ktau_b * Sti_b3;
    dstatedt[13] = 0 + 1 * internal.Pancreas * internal.ktau_b * Sti_b3 - 1 * internal.Pancreas * internal.ktau_b * Sti_b4;
    dstatedt[6] = 0 + 1 * internal.Pancreas * internal.ktau_g * Sti_g - 1 * internal.Pancreas * internal.ktau_g * Sti_g1;
    dstatedt[7] = 0 + 1 * internal.Pancreas * internal.ktau_g * Sti_g1 - 1 * internal.Pancreas * internal.ktau_g * Sti_g2;
    dstatedt[8] = 0 + 1 * internal.Pancreas * internal.ktau_g * Sti_g2 - 1 * internal.Pancreas * internal.ktau_g * Sti_g3;
    dstatedt[9] = 0 + 1 * internal.Pancreas * internal.ktau_g * Sti_g3 - 1 * internal.Pancreas * internal.ktau_g * Sti_g4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ra", "Rd", "Inh_g", "Inh_b", "Sti_g", "Sti_b", "Sti_g1", "Sti_g2", "Sti_g3", "Sti_g4", "Sti_b1", "Sti_b2", "Sti_b3", "Sti_b4"];
    this.metadata.internalOrder = {C_b: null, C_g: null, Hi_b: null, Hi_g: null, Hs_b: null, Hs_g: null, IC50_b: null, IC50_g: null, Imax_b: null, Imax_g: null, Inh_b_init: null, Inh_g_init: null, initial_Inh_b: null, initial_Inh_g: null, initial_Ra: null, initial_Rd: null, initial_Sti_b: null, initial_Sti_b1: null, initial_Sti_b2: null, initial_Sti_b3: null, initial_Sti_b4: null, initial_Sti_g: null, initial_Sti_g1: null, initial_Sti_g2: null, initial_Sti_g3: null, initial_Sti_g4: null, kd: null, kg: null, ktau_b: null, ktau_g: null, ModelValue_2: null, ModelValue_3: null, ModelValue_4: null, Pancreas: null, Psi_i: null, Psi_s: null, Ra_0: null, Ra_init: null, Rd_0: null, Rd_init: null, Rss: null, SC50_b: null, SC50_g: null, Smax_b: null, Smax_g: null, Sti_b_init: null, Sti_b1_init: null, Sti_b2_init: null, Sti_b3_init: null, Sti_b4_init: null, Sti_g_init: null, Sti_g1_init: null, Sti_g2_init: null, Sti_g3_init: null, Sti_g4_init: null};
    this.metadata.variableOrder = {Ra: null, Rd: null, Inh_g: null, Inh_b: null, Sti_g: null, Sti_b: null, Sti_g1: null, Sti_g2: null, Sti_g3: null, Sti_g4: null, Sti_b1: null, Sti_b2: null, Sti_b3: null, Sti_b4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

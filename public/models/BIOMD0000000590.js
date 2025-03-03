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
    state[0] = internal.initial_cp;
    state[1] = internal.initial_ca;
    state[2] = internal.initial_dho;
    state[3] = internal.initial_oro;
    state[4] = internal.initial_omp;
    state[5] = internal.initial_ump;
    state[6] = internal.initial_udp;
    state[7] = internal.initial_utp;
    state[8] = internal.initial_ctp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["asp", "atp", "bc", "ca_init", "cp_init", "ctp_init", "d", "dho_init", "g_pyr", "glu", "K_asp", "K_atp", "K_bc", "K_m10", "K_m2", "K_m3", "K_m4", "K_m5", "K_m6", "K_m7", "K_m8", "K_Mp", "K_q", "K_utp", "omp_init", "oro_init", "prpp", "udp_init", "ump_init", "utp_init", "vmax1", "vmax10", "vmax2", "vmax3", "vmax4", "vmax5", "vmax6", "vmax7", "vmax8"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "asp", internal, 0.097254468582655906, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp", internal, 0.150650172583633, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bc", internal, 1.5226427825040301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ca_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cp_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ctp_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dho_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_pyr", internal, 0.198306450999093, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glu", internal, 0.54620785996429, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_asp", internal, 0.16830888943248701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_atp", internal, 1.28940553329954, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_bc", internal, 2.3716657188713999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m10", internal, 0.026784131375958399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m2", internal, 2.0048935375724501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m3", internal, 1.27179181717468, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m4", internal, 0.0160033122150611, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m5", internal, 0.0195216150005324, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m6", internal, 20.340644918243498, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m7", internal, 0.16638273866775399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m8", internal, 0.0043562107658749703, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_Mp", internal, 5.4871444602722601, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_q", internal, 0.057849815761649999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_utp", internal, 1.413855257896, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omp_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oro_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "prpp", internal, 0.18164490022622501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "udp_init", internal, 0.0028860000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ump_init", internal, 0.00036999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "utp_init", internal, 0.0066600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax1", internal, 3.6160262745951699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax10", internal, 6.5554352321891898, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax2", internal, 2.4459071291224399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax3", internal, 28.661312378258501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax4", internal, 91.780287510829794, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax5", internal, 5227.49670547203, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax6", internal, 34.972084652847698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax7", internal, 5.8310414199766596, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmax8", internal, 0.16294360416478901, -Infinity, Infinity, false);
    internal.initial_ca = internal.ca_init;
    internal.initial_cp = internal.cp_init;
    internal.initial_ctp = internal.ctp_init;
    internal.initial_dho = internal.dho_init;
    internal.initial_omp = internal.omp_init;
    internal.initial_oro = internal.oro_init;
    internal.initial_udp = internal.udp_init;
    internal.initial_ump = internal.ump_init;
    internal.initial_utp = internal.utp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cp = state[0];
    const ca = state[1];
    const dho = state[2];
    const oro = state[3];
    const omp = state[4];
    const ump = state[5];
    const udp = state[6];
    const utp = state[7];
    const ctp = state[8];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.vmax2 * cp * internal.asp / ((1 + utp / internal.K_utp) * (internal.K_m2 + cp) * (internal.K_asp + internal.asp)) / internal.compartment) - 1 * internal.compartment * (internal.vmax3 * ca / (internal.K_m3 + ca) / internal.compartment) - 1 * internal.compartment * (internal.d * ca / internal.compartment);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.vmax1 * internal.bc * internal.glu * internal.atp / ((1 + utp / internal.K_utp) * (internal.K_atp + internal.atp) * (internal.K_bc + internal.bc) * (internal.K_q + internal.glu)) / internal.compartment) - 1 * internal.compartment * (internal.vmax2 * cp * internal.asp / ((1 + utp / internal.K_utp) * (internal.K_m2 + cp) * (internal.K_asp + internal.asp)) / internal.compartment) - 1 * internal.compartment * (internal.d * cp / internal.compartment);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.vmax8 * utp / (internal.K_m8 + utp) / internal.compartment) - 1 * internal.compartment * (internal.g_pyr * ctp / (internal.K_Mp + ctp) / internal.compartment) - 1 * internal.compartment * (internal.d * ctp / internal.compartment);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.vmax3 * ca / (internal.K_m3 + ca) / internal.compartment) - 1 * internal.compartment * (internal.vmax4 * dho / (internal.K_m4 + dho) / internal.compartment) - 1 * internal.compartment * (internal.d * dho / internal.compartment);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.vmax5 * oro * internal.prpp / (internal.K_m5 + oro * internal.prpp) / internal.compartment) - 1 * internal.compartment * (internal.vmax6 * omp / (internal.K_m6 + omp) / internal.compartment) - 1 * internal.compartment * (internal.d * omp / internal.compartment);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.vmax4 * dho / (internal.K_m4 + dho) / internal.compartment) - 1 * internal.compartment * (internal.vmax5 * oro * internal.prpp / (internal.K_m5 + oro * internal.prpp) / internal.compartment) - 1 * internal.compartment * (internal.d * oro / internal.compartment);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.vmax10 * ump / (internal.K_m10 + ump) / internal.compartment) - 1 * internal.compartment * (internal.vmax7 * udp / (internal.K_m7 + udp) / internal.compartment) - 1 * internal.compartment * (internal.d * udp / internal.compartment);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.vmax6 * omp / (internal.K_m6 + omp) / internal.compartment) - 1 * internal.compartment * (internal.vmax10 * ump / (internal.K_m10 + ump) / internal.compartment) - 1 * internal.compartment * (internal.d * ump / internal.compartment);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.vmax7 * udp / (internal.K_m7 + udp) / internal.compartment) - 1 * internal.compartment * (internal.g_pyr * utp / (internal.K_Mp + utp) / internal.compartment) - 1 * internal.compartment * (internal.vmax8 * utp / (internal.K_m8 + utp) / internal.compartment) - 1 * internal.compartment * (internal.d * utp / internal.compartment);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cp", "ca", "dho", "oro", "omp", "ump", "udp", "utp", "ctp"];
    this.metadata.internalOrder = {asp: null, atp: null, bc: null, ca_init: null, compartment: null, cp_init: null, ctp_init: null, d: null, dho_init: null, g_pyr: null, glu: null, initial_ca: null, initial_cp: null, initial_ctp: null, initial_dho: null, initial_omp: null, initial_oro: null, initial_udp: null, initial_ump: null, initial_utp: null, K_asp: null, K_atp: null, K_bc: null, K_m10: null, K_m2: null, K_m3: null, K_m4: null, K_m5: null, K_m6: null, K_m7: null, K_m8: null, K_Mp: null, K_q: null, K_utp: null, omp_init: null, oro_init: null, prpp: null, udp_init: null, ump_init: null, utp_init: null, vmax1: null, vmax10: null, vmax2: null, vmax3: null, vmax4: null, vmax5: null, vmax6: null, vmax7: null, vmax8: null};
    this.metadata.variableOrder = {cp: null, ca: null, dho: null, oro: null, omp: null, ump: null, udp: null, utp: null, ctp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

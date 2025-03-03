export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.synapse = 9.9999999999999998e-17;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(21).fill(0);
    state[0] = internal.initial_B0;
    state[1] = internal.initial_S0;
    state[2] = internal.initial_B1;
    state[3] = internal.initial_S1;
    state[4] = internal.initial_B2;
    state[5] = internal.initial_S2;
    state[6] = internal.initial_B3;
    state[7] = internal.initial_S3;
    state[8] = internal.initial_B4;
    state[9] = internal.initial_S4;
    state[10] = internal.initial_M0;
    state[11] = internal.initial_M1;
    state[12] = internal.initial_M2;
    state[13] = internal.initial_M3;
    state[14] = internal.initial_M4;
    state[15] = internal.initial_L0;
    state[16] = internal.initial_L1;
    state[17] = internal.initial_L2;
    state[18] = internal.initial_L3;
    state[19] = internal.initial_L4;
    state[20] = internal.initial_glu;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["B0_init", "B1_init", "B2_init", "B3_init", "B4_init", "Bkoff", "Bkon", "BSc", "BSk0", "BSk1", "BSk2", "BSk3", "BSk4", "glu_init", "L0_init", "L1_init", "L2_init", "L3_init", "L4_init", "Lkoff", "Lkon", "LMk0", "LMk1", "LMk2", "LMk3", "LMk4", "M0_init", "M1_init", "M2_init", "M3_init", "M4_init", "Mkoff", "Mkon", "MLc", "MLk0", "MLk1", "MLk2", "MLk3", "MLk4", "MSk0", "MSk1", "MSk2", "MSk3", "MSk4", "p", "S0_init", "S1_init", "S2_init", "S3_init", "S4_init", "SBk0", "SBk1", "SBk2", "SBk3", "SBk4", "Skoff", "Skon", "SMc", "SMk0", "SMk1", "SMk2", "SMk3", "SMk4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "B0_init", internal, 8.3026939158136302e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bkoff", internal, 4495, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bkon", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSc", internal, 0.060100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSk0", internal, 1083.6030000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSk1", internal, 4420.1088323705299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSk2", internal, 18030, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSk3", internal, 73545.904032787599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BSk4", internal, 300000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glu_init", internal, 0.00083026939158136305, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lkoff", internal, 1.149, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lkon", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LMk0", internal, 145137.57613946599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LMk1", internal, 38124.522351461899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LMk2", internal, 10014.492753623201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LMk3", internal, 2630.5920422508698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LMk4", internal, 691, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mkoff", internal, 16.649999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mkon", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLc", internal, 0.069000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLk0", internal, 238.05000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLk1", internal, 906.24086202289504, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLk2", internal, 3450, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLk3", internal, 13133.9255365637, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLk4", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSk0", internal, 38212.599089222502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSk1", internal, 9484.1176772467606, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSk2", internal, 2353.8961038961002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSk3", internal, 584.221648918401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSk4", internal, 145, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBk0", internal, 238094.578918663, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBk1", internal, 58369.6035062632, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBk2", internal, 14309.4841930116, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBk3", internal, 3508.01317072642, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBk4", internal, 860, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Skoff", internal, 270.39999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Skon", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMc", internal, 0.061600000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMk0", internal, 75.891199999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMk1", internal, 305.77435863721502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMk2", internal, 1232, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMk3", internal, 4963.8694583963397, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SMk4", internal, 20000, -Infinity, Infinity, false);
    internal.initial_B0 = internal.B0_init;
    internal.initial_B1 = internal.B1_init;
    internal.initial_B2 = internal.B2_init;
    internal.initial_B3 = internal.B3_init;
    internal.initial_B4 = internal.B4_init;
    internal.initial_glu = internal.glu_init;
    internal.initial_L0 = internal.L0_init;
    internal.initial_L1 = internal.L1_init;
    internal.initial_L2 = internal.L2_init;
    internal.initial_L3 = internal.L3_init;
    internal.initial_L4 = internal.L4_init;
    internal.initial_M0 = internal.M0_init;
    internal.initial_M1 = internal.M1_init;
    internal.initial_M2 = internal.M2_init;
    internal.initial_M3 = internal.M3_init;
    internal.initial_M4 = internal.M4_init;
    internal.initial_S0 = internal.S0_init;
    internal.initial_S1 = internal.S1_init;
    internal.initial_S2 = internal.S2_init;
    internal.initial_S3 = internal.S3_init;
    internal.initial_S4 = internal.S4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const B0 = state[0];
    const S0 = state[1];
    const B1 = state[2];
    const S1 = state[3];
    const B2 = state[4];
    const S2 = state[5];
    const B3 = state[6];
    const S3 = state[7];
    const B4 = state[8];
    const S4 = state[9];
    const M0 = state[10];
    const M1 = state[11];
    const M2 = state[12];
    const M3 = state[13];
    const M4 = state[14];
    const L0 = state[15];
    const L1 = state[16];
    const L2 = state[17];
    const L3 = state[18];
    const L4 = state[19];
    const glu = state[20];
    dstatedt[0] = 0 - 1 * internal.synapse * internal.BSk0 * B0 + 1 * internal.synapse * internal.SBk0 * S0 - 1 * internal.synapse * (4 * internal.Bkon * B0 * glu) + 1 * internal.synapse * (internal.Bkoff * B1);
    dstatedt[2] = 0 - 1 * internal.synapse * internal.BSk1 * B1 + 1 * internal.synapse * internal.SBk1 * S1 + 1 * internal.synapse * (4 * internal.Bkon * B0 * glu) - 1 * internal.synapse * (internal.Bkoff * B1) - 1 * internal.synapse * (3 * internal.Bkon * B1 * glu) + 1 * internal.synapse * (2 * internal.Bkoff * B2);
    dstatedt[4] = 0 - 1 * internal.synapse * internal.BSk2 * B2 + 1 * internal.synapse * internal.SBk2 * S2 + 1 * internal.synapse * (3 * internal.Bkon * B1 * glu) - 1 * internal.synapse * (2 * internal.Bkoff * B2) - 1 * internal.synapse * (2 * internal.Bkon * B2 * glu) + 1 * internal.synapse * (3 * internal.Bkoff * B3);
    dstatedt[6] = 0 - 1 * internal.synapse * internal.BSk3 * B3 + 1 * internal.synapse * internal.SBk3 * S3 + 1 * internal.synapse * (2 * internal.Bkon * B2 * glu) - 1 * internal.synapse * (3 * internal.Bkoff * B3) - 1 * internal.synapse * (internal.Bkon * B3 * glu) + 1 * internal.synapse * (4 * internal.Bkoff * B4);
    dstatedt[8] = 0 - 1 * internal.synapse * internal.BSk4 * B4 + 1 * internal.synapse * internal.SBk4 * S4 + 1 * internal.synapse * (internal.Bkon * B3 * glu) - 1 * internal.synapse * (4 * internal.Bkoff * B4);
    dstatedt[20] = 0 - 1 * internal.synapse * (4 * internal.Bkon * B0 * glu) + 1 * internal.synapse * (internal.Bkoff * B1) - 1 * internal.synapse * (3 * internal.Bkon * B1 * glu) + 1 * internal.synapse * (2 * internal.Bkoff * B2) - 1 * internal.synapse * (2 * internal.Bkon * B2 * glu) + 1 * internal.synapse * (3 * internal.Bkoff * B3) - 1 * internal.synapse * (internal.Bkon * B3 * glu) + 1 * internal.synapse * (4 * internal.Bkoff * B4) - 1 * internal.synapse * (4 * internal.Skon * S0 * glu) + 1 * internal.synapse * (internal.Skoff * S1) - 1 * internal.synapse * (3 * internal.Skon * S1 * glu) + 1 * internal.synapse * (2 * internal.Skoff * S2) - 1 * internal.synapse * (2 * internal.Skon * S2 * glu) + 1 * internal.synapse * (3 * internal.Skoff * S3) - 1 * internal.synapse * (internal.Skon * S3 * glu) + 1 * internal.synapse * (4 * internal.Skoff * S4) - 1 * internal.synapse * (4 * internal.Mkon * M0 * glu) + 1 * internal.synapse * (internal.Mkoff * M1) - 1 * internal.synapse * (3 * internal.Mkon * M1 * glu) + 1 * internal.synapse * (2 * internal.Mkoff * M2) - 1 * internal.synapse * (2 * internal.Mkon * M2 * glu) + 1 * internal.synapse * (3 * internal.Mkoff * M3) - 1 * internal.synapse * (4 * internal.Mkon * M3) + 1 * internal.synapse * (4 * internal.Mkoff * M4) - 1 * internal.synapse * (4 * internal.Lkon * L0 * glu) + 1 * internal.synapse * (internal.Lkoff * L1) - 1 * internal.synapse * (3 * internal.Lkon * L1 * glu) + 1 * internal.synapse * (2 * internal.Lkoff * L2) - 1 * internal.synapse * (2 * internal.Lkon * L2 * glu) + 1 * internal.synapse * (3 * internal.Lkoff * L3) - 1 * internal.synapse * (internal.Lkon * L3 * glu) + 1 * internal.synapse * (4 * internal.Lkoff * L4);
    dstatedt[15] = 0 + 1 * internal.synapse * internal.MLk0 * M0 - 1 * internal.synapse * internal.LMk0 * L0 - 1 * internal.synapse * (4 * internal.Lkon * L0 * glu) + 1 * internal.synapse * (internal.Lkoff * L1);
    dstatedt[16] = 0 + 1 * internal.synapse * internal.MLk1 * M1 - 1 * internal.synapse * internal.LMk1 * L1 + 1 * internal.synapse * (4 * internal.Lkon * L0 * glu) - 1 * internal.synapse * (internal.Lkoff * L1) - 1 * internal.synapse * (3 * internal.Lkon * L1 * glu) + 1 * internal.synapse * (2 * internal.Lkoff * L2);
    dstatedt[17] = 0 + 1 * internal.synapse * internal.MLk2 * M2 - 1 * internal.synapse * internal.LMk2 * L2 + 1 * internal.synapse * (3 * internal.Lkon * L1 * glu) - 1 * internal.synapse * (2 * internal.Lkoff * L2) - 1 * internal.synapse * (2 * internal.Lkon * L2 * glu) + 1 * internal.synapse * (3 * internal.Lkoff * L3);
    dstatedt[18] = 0 + 1 * internal.synapse * internal.MLk3 * M3 - 1 * internal.synapse * internal.LMk3 * L3 + 1 * internal.synapse * (2 * internal.Lkon * L2 * glu) - 1 * internal.synapse * (3 * internal.Lkoff * L3) - 1 * internal.synapse * (internal.Lkon * L3 * glu) + 1 * internal.synapse * (4 * internal.Lkoff * L4);
    dstatedt[19] = 0 + 1 * internal.synapse * internal.MLk4 * M4 - 1 * internal.synapse * internal.LMk4 * L4 + 1 * internal.synapse * (internal.Lkon * L3 * glu) - 1 * internal.synapse * (4 * internal.Lkoff * L4);
    dstatedt[10] = 0 + 1 * internal.synapse * internal.SMk0 * S0 - 1 * internal.synapse * internal.MSk0 * M0 - 1 * internal.synapse * internal.MLk0 * M0 + 1 * internal.synapse * internal.LMk0 * L0 - 1 * internal.synapse * (4 * internal.Mkon * M0 * glu) + 1 * internal.synapse * (internal.Mkoff * M1);
    dstatedt[11] = 0 + 1 * internal.synapse * internal.SMk1 * S1 - 1 * internal.synapse * internal.MSk1 * M1 - 1 * internal.synapse * internal.MLk1 * M1 + 1 * internal.synapse * internal.LMk1 * L1 + 1 * internal.synapse * (4 * internal.Mkon * M0 * glu) - 1 * internal.synapse * (internal.Mkoff * M1) - 1 * internal.synapse * (3 * internal.Mkon * M1 * glu) + 1 * internal.synapse * (2 * internal.Mkoff * M2);
    dstatedt[12] = 0 + 1 * internal.synapse * internal.SMk2 * S2 - 1 * internal.synapse * internal.MSk2 * M2 - 1 * internal.synapse * internal.MLk2 * M2 + 1 * internal.synapse * internal.LMk2 * L2 + 1 * internal.synapse * (3 * internal.Mkon * M1 * glu) - 1 * internal.synapse * (2 * internal.Mkoff * M2) - 1 * internal.synapse * (2 * internal.Mkon * M2 * glu) + 1 * internal.synapse * (3 * internal.Mkoff * M3);
    dstatedt[13] = 0 + 1 * internal.synapse * internal.SMk3 * S3 - 1 * internal.synapse * internal.MSk3 * M3 - 1 * internal.synapse * internal.MLk3 * M3 + 1 * internal.synapse * internal.LMk3 * L3 + 1 * internal.synapse * (2 * internal.Mkon * M2 * glu) - 1 * internal.synapse * (3 * internal.Mkoff * M3) - 1 * internal.synapse * (4 * internal.Mkon * M3) + 1 * internal.synapse * (4 * internal.Mkoff * M4);
    dstatedt[14] = 0 + 1 * internal.synapse * internal.SMk4 * S4 - 1 * internal.synapse * internal.MSk4 * M4 - 1 * internal.synapse * internal.MLk4 * M4 + 1 * internal.synapse * internal.LMk4 * L4 + 1 * internal.synapse * (4 * internal.Mkon * M3) - 1 * internal.synapse * (4 * internal.Mkoff * M4);
    dstatedt[1] = 0 + 1 * internal.synapse * internal.BSk0 * B0 - 1 * internal.synapse * internal.SBk0 * S0 - 1 * internal.synapse * internal.SMk0 * S0 + 1 * internal.synapse * internal.MSk0 * M0 - 1 * internal.synapse * (4 * internal.Skon * S0 * glu) + 1 * internal.synapse * (internal.Skoff * S1);
    dstatedt[3] = 0 + 1 * internal.synapse * internal.BSk1 * B1 - 1 * internal.synapse * internal.SBk1 * S1 - 1 * internal.synapse * internal.SMk1 * S1 + 1 * internal.synapse * internal.MSk1 * M1 + 1 * internal.synapse * (4 * internal.Skon * S0 * glu) - 1 * internal.synapse * (internal.Skoff * S1) - 1 * internal.synapse * (3 * internal.Skon * S1 * glu) + 1 * internal.synapse * (2 * internal.Skoff * S2);
    dstatedt[5] = 0 + 1 * internal.synapse * internal.BSk2 * B2 - 1 * internal.synapse * internal.SBk2 * S2 - 1 * internal.synapse * internal.SMk2 * S2 + 1 * internal.synapse * internal.MSk2 * M2 + 1 * internal.synapse * (3 * internal.Skon * S1 * glu) - 1 * internal.synapse * (2 * internal.Skoff * S2) - 1 * internal.synapse * (2 * internal.Skon * S2 * glu) + 1 * internal.synapse * (3 * internal.Skoff * S3);
    dstatedt[7] = 0 + 1 * internal.synapse * internal.BSk3 * B3 - 1 * internal.synapse * internal.SBk3 * S3 - 1 * internal.synapse * internal.SMk3 * S3 + 1 * internal.synapse * internal.MSk3 * M3 + 1 * internal.synapse * (2 * internal.Skon * S2 * glu) - 1 * internal.synapse * (3 * internal.Skoff * S3) - 1 * internal.synapse * (internal.Skon * S3 * glu) + 1 * internal.synapse * (4 * internal.Skoff * S4);
    dstatedt[9] = 0 + 1 * internal.synapse * internal.BSk4 * B4 - 1 * internal.synapse * internal.SBk4 * S4 - 1 * internal.synapse * internal.SMk4 * S4 + 1 * internal.synapse * internal.MSk4 * M4 + 1 * internal.synapse * (internal.Skon * S3 * glu) - 1 * internal.synapse * (4 * internal.Skoff * S4);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "B0", "S0", "B1", "S1", "B2", "S2", "B3", "S3", "B4", "S4", "M0", "M1", "M2", "M3", "M4", "L0", "L1", "L2", "L3", "L4", "glu"];
    this.metadata.internalOrder = {B0_init: null, B1_init: null, B2_init: null, B3_init: null, B4_init: null, Bkoff: null, Bkon: null, BSc: null, BSk0: null, BSk1: null, BSk2: null, BSk3: null, BSk4: null, glu_init: null, initial_B0: null, initial_B1: null, initial_B2: null, initial_B3: null, initial_B4: null, initial_glu: null, initial_L0: null, initial_L1: null, initial_L2: null, initial_L3: null, initial_L4: null, initial_M0: null, initial_M1: null, initial_M2: null, initial_M3: null, initial_M4: null, initial_S0: null, initial_S1: null, initial_S2: null, initial_S3: null, initial_S4: null, L0_init: null, L1_init: null, L2_init: null, L3_init: null, L4_init: null, Lkoff: null, Lkon: null, LMk0: null, LMk1: null, LMk2: null, LMk3: null, LMk4: null, M0_init: null, M1_init: null, M2_init: null, M3_init: null, M4_init: null, Mkoff: null, Mkon: null, MLc: null, MLk0: null, MLk1: null, MLk2: null, MLk3: null, MLk4: null, MSk0: null, MSk1: null, MSk2: null, MSk3: null, MSk4: null, p: null, S0_init: null, S1_init: null, S2_init: null, S3_init: null, S4_init: null, SBk0: null, SBk1: null, SBk2: null, SBk3: null, SBk4: null, Skoff: null, Skon: null, SMc: null, SMk0: null, SMk1: null, SMk2: null, SMk3: null, SMk4: null, synapse: null};
    this.metadata.variableOrder = {B0: null, S0: null, B1: null, S1: null, B2: null, S2: null, B3: null, S3: null, B4: null, S4: null, M0: null, M1: null, M2: null, M3: null, M4: null, L0: null, L1: null, L2: null, L3: null, L4: null, glu: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

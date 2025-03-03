export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c2 = 1e-13;
    internal.c3 = 2.9999999999999998e-18;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(24).fill(0);
    state[0] = internal.initial_SPB_B;
    state[1] = internal.initial_SPB_T;
    state[2] = internal.initial_Bfa1;
    state[3] = internal.initial_Bfa1P4;
    state[4] = internal.initial_Bfa1P5;
    state[5] = internal.initial_Tem1GTP;
    state[6] = internal.initial_Tem1GDP;
    state[7] = internal.initial_B_Bfa1;
    state[8] = internal.initial_B_Bfa1P4;
    state[9] = internal.initial_B_Bfa1P5;
    state[10] = internal.initial_T_Tem1GTP;
    state[11] = internal.initial_T_Tem1GDP;
    state[12] = internal.initial_B_Bfa1_Tem1GTP;
    state[13] = internal.initial_B_Bfa1P4_Tem1GTP;
    state[14] = internal.initial_B_Bfa1P5_Tem1GTP;
    state[15] = internal.initial_B_Bfa1_Tem1GDP;
    state[16] = internal.initial_B_Bfa1P4_Tem1GDP;
    state[17] = internal.initial_B_Bfa1P5_Tem1GDP;
    state[18] = internal.initial_Bfa1_Tem1GTP;
    state[19] = internal.initial_Bfa1P4_Tem1GTP;
    state[20] = internal.initial_Bfa1P5_Tem1GTP;
    state[21] = internal.initial_Bfa1_Tem1GDP;
    state[22] = internal.initial_Bfa1P4_Tem1GDP;
    state[23] = internal.initial_Bfa1P5_Tem1GDP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "avogadro", "B_Bfa1_init", "B_Bfa1_Tem1GDP_init", "B_Bfa1_Tem1GTP_init", "B_Bfa1P4_init", "B_Bfa1P4_Tem1GDP_init", "B_Bfa1P4_Tem1GTP_init", "B_Bfa1P5_init", "B_Bfa1P5_Tem1GDP_init", "B_Bfa1P5_Tem1GTP_init", "Bfa1_init", "Bfa1_Tem1GDP_init", "Bfa1_Tem1GTP_init", "Bfa1P4_init", "Bfa1P4_Tem1GDP_init", "Bfa1P4_Tem1GTP_init", "Bfa1P5_init", "Bfa1P5_Tem1GDP_init", "Bfa1P5_Tem1GTP_init", "kfCdc5", "kfKin4", "kfKin4Cyto", "khyd", "khydB4T", "khydBT", "knex", "koffB", "koffB4", "koffBT", "koffT", "konB", "konB4", "konB4T", "konB5T", "konBT", "konT", "krCdc5", "krKin4", "q", "SPB_B_init", "SPB_T_init", "T_Tem1GDP_init", "T_Tem1GTP_init", "Tem1GDP_init", "Tem1GTP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "avogadro", internal, 6.0221415000000003e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1_init", internal, 8.3300000000000005e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P4_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P4_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P5_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Bfa1P5_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1_init", internal, 2.03e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P4_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P4_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P5_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bfa1P5_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kfCdc5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kfKin4", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kfKin4Cyto", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khyd", internal, 0.0022399999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khydB4T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khydBT", internal, 0.0022399999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knex", internal, 0.013599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koffB", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koffB4", internal, 0.036499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koffBT", internal, 0.183, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koffT", internal, 0.183, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konB", internal, 1250000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konB4", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konB4T", internal, 36500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konB5T", internal, 7000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konBT", internal, 36500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "konT", internal, 1900000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "krCdc5", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "krKin4", internal, 0.025100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SPB_B_init", internal, 8.3300000000000005e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SPB_T_init", internal, 0.000166, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_Tem1GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_Tem1GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tem1GDP_init", internal, 7.9900000000000007e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tem1GTP_init", internal, 4.9100000000000003e-08, -Infinity, Infinity, false);
    internal.initial_B_Bfa1 = internal.B_Bfa1_init;
    internal.initial_B_Bfa1_Tem1GDP = internal.B_Bfa1_Tem1GDP_init;
    internal.initial_B_Bfa1_Tem1GTP = internal.B_Bfa1_Tem1GTP_init;
    internal.initial_B_Bfa1P4 = internal.B_Bfa1P4_init;
    internal.initial_B_Bfa1P4_Tem1GDP = internal.B_Bfa1P4_Tem1GDP_init;
    internal.initial_B_Bfa1P4_Tem1GTP = internal.B_Bfa1P4_Tem1GTP_init;
    internal.initial_B_Bfa1P5 = internal.B_Bfa1P5_init;
    internal.initial_B_Bfa1P5_Tem1GDP = internal.B_Bfa1P5_Tem1GDP_init;
    internal.initial_B_Bfa1P5_Tem1GTP = internal.B_Bfa1P5_Tem1GTP_init;
    internal.initial_Bfa1 = internal.Bfa1_init;
    internal.initial_Bfa1_Tem1GDP = internal.Bfa1_Tem1GDP_init;
    internal.initial_Bfa1_Tem1GTP = internal.Bfa1_Tem1GTP_init;
    internal.initial_Bfa1P4 = internal.Bfa1P4_init;
    internal.initial_Bfa1P4_Tem1GDP = internal.Bfa1P4_Tem1GDP_init;
    internal.initial_Bfa1P4_Tem1GTP = internal.Bfa1P4_Tem1GTP_init;
    internal.initial_Bfa1P5 = internal.Bfa1P5_init;
    internal.initial_Bfa1P5_Tem1GDP = internal.Bfa1P5_Tem1GDP_init;
    internal.initial_Bfa1P5_Tem1GTP = internal.Bfa1P5_Tem1GTP_init;
    internal.initial_SPB_B = internal.SPB_B_init;
    internal.initial_SPB_T = internal.SPB_T_init;
    internal.initial_T_Tem1GDP = internal.T_Tem1GDP_init;
    internal.initial_T_Tem1GTP = internal.T_Tem1GTP_init;
    internal.initial_Tem1GDP = internal.Tem1GDP_init;
    internal.initial_Tem1GTP = internal.Tem1GTP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const SPB_B = state[0];
    const SPB_T = state[1];
    const Bfa1 = state[2];
    const Bfa1P4 = state[3];
    const Bfa1P5 = state[4];
    const Tem1GTP = state[5];
    const Tem1GDP = state[6];
    const B_Bfa1 = state[7];
    const B_Bfa1P4 = state[8];
    const B_Bfa1P5 = state[9];
    const T_Tem1GTP = state[10];
    const T_Tem1GDP = state[11];
    const B_Bfa1_Tem1GTP = state[12];
    const B_Bfa1P4_Tem1GTP = state[13];
    const B_Bfa1P5_Tem1GTP = state[14];
    const B_Bfa1_Tem1GDP = state[15];
    const B_Bfa1P4_Tem1GDP = state[16];
    const B_Bfa1P5_Tem1GDP = state[17];
    const Bfa1_Tem1GTP = state[18];
    const Bfa1P4_Tem1GTP = state[19];
    const Bfa1P5_Tem1GTP = state[20];
    const Bfa1_Tem1GDP = state[21];
    const Bfa1P4_Tem1GDP = state[22];
    const Bfa1P5_Tem1GDP = state[23];
    dstatedt[9] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5 - internal.koffB * B_Bfa1P5)) - 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GTP - internal.koffBT * B_Bfa1P5_Tem1GTP)) - 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GDP - internal.koffBT * B_Bfa1P5_Tem1GDP)) + 1 * internal.c3 * internal.kfCdc5 * B_Bfa1;
    dstatedt[17] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GDP - internal.koffB * B_Bfa1P5_Tem1GDP)) + 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GDP - internal.koffBT * B_Bfa1P5_Tem1GDP)) + 1 * internal.c3 * internal.kfCdc5 * B_Bfa1_Tem1GDP + 1 * internal.c3 * internal.khyd * B_Bfa1P5_Tem1GTP;
    dstatedt[14] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GTP - internal.koffB * B_Bfa1P5_Tem1GTP)) + 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GTP - internal.koffBT * B_Bfa1P5_Tem1GTP)) + 1 * internal.c3 * internal.kfCdc5 * B_Bfa1_Tem1GTP - 1 * internal.c3 * internal.khyd * B_Bfa1P5_Tem1GTP;
    dstatedt[0] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1 - internal.koffB * B_Bfa1)) - 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4 - internal.koffB4 * B_Bfa1P4)) - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5 - internal.koffB * B_Bfa1P5)) - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GTP - internal.koffB * B_Bfa1_Tem1GTP)) - 1 * (internal.c3 * (internal.konB4 * Bfa1P4_Tem1GTP * SPB_B - internal.koffB4 * B_Bfa1P4_Tem1GTP)) - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GTP - internal.koffB * B_Bfa1P5_Tem1GTP)) - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GDP - internal.koffB * B_Bfa1_Tem1GDP)) - 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4_Tem1GDP - internal.koffB4 * B_Bfa1P4_Tem1GDP)) - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GDP - internal.koffB * B_Bfa1P5_Tem1GDP));
    dstatedt[1] = 0 - 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GTP - internal.koffT * T_Tem1GTP)) - 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GDP - internal.koffT * T_Tem1GDP));
    dstatedt[11] = 0 + 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GDP - internal.koffT * T_Tem1GDP)) - 1 * internal.c3 * internal.knex * T_Tem1GDP + 1 * internal.c3 * internal.khyd * T_Tem1GTP;
    dstatedt[10] = 0 + 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GTP - internal.koffT * T_Tem1GTP)) + 1 * internal.c3 * internal.knex * T_Tem1GDP - 1 * internal.c3 * internal.khyd * T_Tem1GTP;
    dstatedt[6] = 0 - 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GDP - internal.koffBT * B_Bfa1_Tem1GDP)) - 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GDP - internal.koffBT * B_Bfa1P4_Tem1GDP)) - 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GDP - internal.koffBT * B_Bfa1P5_Tem1GDP)) - 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GDP - internal.koffBT * Bfa1_Tem1GDP) - 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GDP - internal.koffBT * Bfa1P4_Tem1GDP) - 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GDP - internal.koffBT * Bfa1P5_Tem1GDP) - 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GDP - internal.koffT * T_Tem1GDP)) - 1 * internal.c2 * internal.knex * Tem1GDP + 1 * internal.c2 * internal.khyd * Tem1GTP;
    dstatedt[5] = 0 - 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GTP - internal.koffBT * B_Bfa1_Tem1GTP)) - 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GTP - internal.koffBT * B_Bfa1P4_Tem1GTP)) - 1 * (internal.c3 * (internal.konB5T * B_Bfa1P5 * Tem1GTP - internal.koffBT * B_Bfa1P5_Tem1GTP)) - 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GTP - internal.koffBT * Bfa1_Tem1GTP) - 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GTP - internal.koffBT * Bfa1P4_Tem1GTP) - 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GTP - internal.koffBT * Bfa1P5_Tem1GTP) - 1 * (internal.c3 * (internal.konT * SPB_T * Tem1GTP - internal.koffT * T_Tem1GTP)) + 1 * internal.c2 * internal.knex * Tem1GDP - 1 * internal.c2 * internal.khyd * Tem1GTP;
    var u = (t >= 1800 ? 0 : 1);
    dstatedt[7] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1 - internal.koffB * B_Bfa1)) - 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GTP - internal.koffBT * B_Bfa1_Tem1GTP)) - 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GDP - internal.koffBT * B_Bfa1_Tem1GDP)) - 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1) - 1 * internal.c3 * internal.kfCdc5 * B_Bfa1;
    dstatedt[15] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GDP - internal.koffB * B_Bfa1_Tem1GDP)) + 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GDP - internal.koffBT * B_Bfa1_Tem1GDP)) - 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1_Tem1GDP) - 1 * internal.c3 * internal.kfCdc5 * B_Bfa1_Tem1GDP + 1 * internal.c3 * internal.khydBT * B_Bfa1_Tem1GTP;
    dstatedt[12] = 0 + 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GTP - internal.koffB * B_Bfa1_Tem1GTP)) + 1 * (internal.c3 * (internal.konBT * B_Bfa1 * Tem1GTP - internal.koffBT * B_Bfa1_Tem1GTP)) - 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1_Tem1GTP) - 1 * internal.c3 * internal.kfCdc5 * B_Bfa1_Tem1GTP - 1 * internal.c3 * internal.khydBT * B_Bfa1_Tem1GTP;
    dstatedt[8] = 0 + 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4 - internal.koffB4 * B_Bfa1P4)) - 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GTP - internal.koffBT * B_Bfa1P4_Tem1GTP)) - 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GDP - internal.koffBT * B_Bfa1P4_Tem1GDP)) + 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1);
    dstatedt[16] = 0 + 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4_Tem1GDP - internal.koffB4 * B_Bfa1P4_Tem1GDP)) + 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GDP - internal.koffBT * B_Bfa1P4_Tem1GDP)) + 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1_Tem1GDP) + 1 * internal.c3 * internal.khydB4T * B_Bfa1P4_Tem1GTP;
    dstatedt[13] = 0 + 1 * (internal.c3 * (internal.konB4 * Bfa1P4_Tem1GTP * SPB_B - internal.koffB4 * B_Bfa1P4_Tem1GTP)) + 1 * (internal.c3 * (internal.konB4T * B_Bfa1P4 * Tem1GTP - internal.koffBT * B_Bfa1P4_Tem1GTP)) + 1 * internal.c3 * (u * internal.kfKin4 * B_Bfa1_Tem1GTP) - 1 * internal.c3 * internal.khydB4T * B_Bfa1P4_Tem1GTP;
    dstatedt[2] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1 - internal.koffB * B_Bfa1)) - 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GTP - internal.koffBT * Bfa1_Tem1GTP) - 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GDP - internal.koffBT * Bfa1_Tem1GDP) - 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1) + 1 * internal.c2 * internal.krKin4 * Bfa1P4 + 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5);
    dstatedt[21] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GDP - internal.koffB * B_Bfa1_Tem1GDP)) + 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GDP - internal.koffBT * Bfa1_Tem1GDP) + 1 * internal.c2 * internal.khydBT * Bfa1_Tem1GTP + 1 * internal.c2 * internal.krKin4 * Bfa1P4_Tem1GDP + 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5_Tem1GDP) - 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1_Tem1GDP);
    dstatedt[18] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1_Tem1GTP - internal.koffB * B_Bfa1_Tem1GTP)) + 1 * internal.c2 * (internal.alpha * internal.konBT * Bfa1 * Tem1GTP - internal.koffBT * Bfa1_Tem1GTP) - 1 * internal.c2 * internal.khydBT * Bfa1_Tem1GTP + 1 * internal.c2 * internal.krKin4 * Bfa1P4_Tem1GTP + 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5_Tem1GTP) - 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1_Tem1GTP);
    dstatedt[3] = 0 - 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4 - internal.koffB4 * B_Bfa1P4)) - 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GTP - internal.koffBT * Bfa1P4_Tem1GTP) - 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GDP - internal.koffBT * Bfa1P4_Tem1GDP) + 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1) - 1 * internal.c2 * internal.krKin4 * Bfa1P4;
    dstatedt[22] = 0 - 1 * (internal.c3 * (internal.konB4 * SPB_B * Bfa1P4_Tem1GDP - internal.koffB4 * B_Bfa1P4_Tem1GDP)) + 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GDP - internal.koffBT * Bfa1P4_Tem1GDP) + 1 * internal.c2 * internal.khydB4T * Bfa1P4_Tem1GTP - 1 * internal.c2 * internal.krKin4 * Bfa1P4_Tem1GDP + 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1_Tem1GDP);
    dstatedt[19] = 0 - 1 * (internal.c3 * (internal.konB4 * Bfa1P4_Tem1GTP * SPB_B - internal.koffB4 * B_Bfa1P4_Tem1GTP)) + 1 * internal.c2 * (internal.alpha * internal.konB4T * Bfa1P4 * Tem1GTP - internal.koffBT * Bfa1P4_Tem1GTP) - 1 * internal.c2 * internal.khydB4T * Bfa1P4_Tem1GTP - 1 * internal.c2 * internal.krKin4 * Bfa1P4_Tem1GTP + 1 * internal.c2 * (u * internal.kfKin4Cyto * Bfa1_Tem1GTP);
    dstatedt[4] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5 - internal.koffB * B_Bfa1P5)) - 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GTP - internal.koffBT * Bfa1P5_Tem1GTP) - 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GDP - internal.koffBT * Bfa1P5_Tem1GDP) - 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5);
    dstatedt[23] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GDP - internal.koffB * B_Bfa1P5_Tem1GDP)) + 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GDP - internal.koffBT * Bfa1P5_Tem1GDP) + 1 * internal.c2 * internal.khyd * Bfa1P5_Tem1GTP - 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5_Tem1GDP);
    dstatedt[20] = 0 - 1 * (internal.c3 * (internal.konB * SPB_B * Bfa1P5_Tem1GTP - internal.koffB * B_Bfa1P5_Tem1GTP)) + 1 * internal.c2 * (internal.alpha * internal.konB5T * Bfa1P5 * Tem1GTP - internal.koffBT * Bfa1P5_Tem1GTP) - 1 * internal.c2 * internal.khyd * Bfa1P5_Tem1GTP - 1 * internal.c2 * (u * internal.krCdc5 * Bfa1P5_Tem1GTP);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "SPB_B", "SPB_T", "Bfa1", "Bfa1P4", "Bfa1P5", "Tem1GTP", "Tem1GDP", "B_Bfa1", "B_Bfa1P4", "B_Bfa1P5", "T_Tem1GTP", "T_Tem1GDP", "B_Bfa1_Tem1GTP", "B_Bfa1P4_Tem1GTP", "B_Bfa1P5_Tem1GTP", "B_Bfa1_Tem1GDP", "B_Bfa1P4_Tem1GDP", "B_Bfa1P5_Tem1GDP", "Bfa1_Tem1GTP", "Bfa1P4_Tem1GTP", "Bfa1P5_Tem1GTP", "Bfa1_Tem1GDP", "Bfa1P4_Tem1GDP", "Bfa1P5_Tem1GDP"];
    this.metadata.internalOrder = {alpha: null, avogadro: null, B_Bfa1_init: null, B_Bfa1_Tem1GDP_init: null, B_Bfa1_Tem1GTP_init: null, B_Bfa1P4_init: null, B_Bfa1P4_Tem1GDP_init: null, B_Bfa1P4_Tem1GTP_init: null, B_Bfa1P5_init: null, B_Bfa1P5_Tem1GDP_init: null, B_Bfa1P5_Tem1GTP_init: null, Bfa1_init: null, Bfa1_Tem1GDP_init: null, Bfa1_Tem1GTP_init: null, Bfa1P4_init: null, Bfa1P4_Tem1GDP_init: null, Bfa1P4_Tem1GTP_init: null, Bfa1P5_init: null, Bfa1P5_Tem1GDP_init: null, Bfa1P5_Tem1GTP_init: null, c2: null, c3: null, initial_B_Bfa1: null, initial_B_Bfa1_Tem1GDP: null, initial_B_Bfa1_Tem1GTP: null, initial_B_Bfa1P4: null, initial_B_Bfa1P4_Tem1GDP: null, initial_B_Bfa1P4_Tem1GTP: null, initial_B_Bfa1P5: null, initial_B_Bfa1P5_Tem1GDP: null, initial_B_Bfa1P5_Tem1GTP: null, initial_Bfa1: null, initial_Bfa1_Tem1GDP: null, initial_Bfa1_Tem1GTP: null, initial_Bfa1P4: null, initial_Bfa1P4_Tem1GDP: null, initial_Bfa1P4_Tem1GTP: null, initial_Bfa1P5: null, initial_Bfa1P5_Tem1GDP: null, initial_Bfa1P5_Tem1GTP: null, initial_SPB_B: null, initial_SPB_T: null, initial_T_Tem1GDP: null, initial_T_Tem1GTP: null, initial_Tem1GDP: null, initial_Tem1GTP: null, kfCdc5: null, kfKin4: null, kfKin4Cyto: null, khyd: null, khydB4T: null, khydBT: null, knex: null, koffB: null, koffB4: null, koffBT: null, koffT: null, konB: null, konB4: null, konB4T: null, konB5T: null, konBT: null, konT: null, krCdc5: null, krKin4: null, q: null, SPB_B_init: null, SPB_T_init: null, T_Tem1GDP_init: null, T_Tem1GTP_init: null, Tem1GDP_init: null, Tem1GTP_init: null};
    this.metadata.variableOrder = {SPB_B: null, SPB_T: null, Bfa1: null, Bfa1P4: null, Bfa1P5: null, Tem1GTP: null, Tem1GDP: null, B_Bfa1: null, B_Bfa1P4: null, B_Bfa1P5: null, T_Tem1GTP: null, T_Tem1GDP: null, B_Bfa1_Tem1GTP: null, B_Bfa1P4_Tem1GTP: null, B_Bfa1P5_Tem1GTP: null, B_Bfa1_Tem1GDP: null, B_Bfa1P4_Tem1GDP: null, B_Bfa1P5_Tem1GDP: null, Bfa1_Tem1GTP: null, Bfa1P4_Tem1GTP: null, Bfa1P5_Tem1GTP: null, Bfa1_Tem1GDP: null, Bfa1P4_Tem1GDP: null, Bfa1P5_Tem1GDP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

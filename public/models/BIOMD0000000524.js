export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(18).fill(0);
    state[0] = internal.initial_CD95;
    state[1] = internal.initial_FADD;
    state[2] = internal.initial_p55free;
    state[3] = internal.initial_Bid;
    state[4] = internal.initial_PrNES_mCherry;
    state[5] = internal.initial_PrER_mGFP;
    state[6] = internal.initial_DISC;
    state[7] = internal.initial_DISCp55;
    state[8] = internal.initial_p30;
    state[9] = internal.initial_p43;
    state[10] = internal.initial_p18;
    state[11] = internal.initial_p18inactive;
    state[12] = internal.initial_tBid;
    state[13] = internal.initial_PrNES;
    state[14] = internal.initial_mCherry;
    state[15] = internal.initial_PrER;
    state[16] = internal.initial_mGFP;
    state[17] = internal.initial_CD95L;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bid_init", "CD95_init", "CD95L_init", "DISC_init", "DISCp55_init", "FADD_init", "kBid", "kD216", "kD374probe", "kD374trans_p43", "kD374trans_p55", "kDISC", "kdiss_p18", "KDL", "KDR", "koff_FADD", "kon_FADD", "mCherry_init", "mGFP_init", "p18_init", "p18inactive_init", "p30_init", "p43_init", "p55free_init", "PrER_init", "PrER_mGFP_init", "PrNES_init", "PrNES_mCherry_init", "tBid_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bid_init", internal, 224, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD95_init", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD95L_init", internal, 16.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DISC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DISCp55_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FADD_init", internal, 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kBid", internal, 0.00052867403363567999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD216", internal, 0.011418639200640301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD374probe", internal, 0.00152252549827479, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD374trans_p43", internal, 0.0034399595732636898, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD374trans_p55", internal, 0.00044699477295895301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDISC", internal, 0.00049182859104976602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_p18", internal, 0.0949914492651531, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KDL", internal, 15.421878766215, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KDR", internal, 8.9849667461762692, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff_FADD", internal, 0.00566528253772301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon_FADD", internal, 0.00081171101214455599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mCherry_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mGFP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p18inactive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p30_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p43_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p55free_init", internal, 127, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PrER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PrER_mGFP_init", internal, 3316, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PrNES_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PrNES_mCherry_init", internal, 1909, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tBid_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Bid = internal.Bid_init;
    internal.initial_CD95 = internal.CD95_init;
    internal.initial_CD95L = internal.CD95L_init;
    internal.initial_DISC = internal.DISC_init;
    internal.initial_DISCp55 = internal.DISCp55_init;
    internal.initial_FADD = internal.FADD_init;
    internal.initial_mCherry = internal.mCherry_init;
    internal.initial_mGFP = internal.mGFP_init;
    internal.initial_p18 = internal.p18_init;
    internal.initial_p18inactive = internal.p18inactive_init;
    internal.initial_p30 = internal.p30_init;
    internal.initial_p43 = internal.p43_init;
    internal.initial_p55free = internal.p55free_init;
    internal.initial_PrER = internal.PrER_init;
    internal.initial_PrER_mGFP = internal.PrER_mGFP_init;
    internal.initial_PrNES = internal.PrNES_init;
    internal.initial_PrNES_mCherry = internal.PrNES_mCherry_init;
    internal.initial_tBid = internal.tBid_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CD95 = state[0];
    const FADD = state[1];
    const p55free = state[2];
    const Bid = state[3];
    const PrNES_mCherry = state[4];
    const PrER_mGFP = state[5];
    const DISC = state[6];
    const DISCp55 = state[7];
    const p30 = state[8];
    const p43 = state[9];
    const p18 = state[10];
    const CD95L = state[17];
    dstatedt[0] = 0;
    dstatedt[17] = 0;
    var CD95act = Math.pow((CD95), (3)) * Math.pow((internal.KDL), (2)) * CD95L / ((CD95L + internal.KDL) * (Math.pow((CD95), (2)) * Math.pow((internal.KDL), (2)) + internal.KDR * Math.pow((CD95L), (2)) + 2 * internal.KDR * internal.KDL * CD95L + internal.KDR * Math.pow((internal.KDL), (2))));
    dstatedt[3] = 0 - 1 * internal.kBid * Bid * (p43 + p18) * internal.cell;
    dstatedt[7] = 0 + 1 * internal.kDISC * p55free * DISC * internal.cell - 1 * internal.kD216 * DISCp55 * internal.cell - 1 * internal.kD374trans_p55 * DISCp55 * (DISCp55 + p30) * internal.cell - 1 * internal.kD374trans_p43 * DISCp55 * p43 * internal.cell;
    dstatedt[14] = 0 + 1 * internal.kD374probe * PrNES_mCherry * (p43 + p18) * internal.cell;
    dstatedt[16] = 0 + 1 * internal.kD374probe * PrER_mGFP * p18 * internal.cell;
    dstatedt[10] = 0 + 1 * internal.kD216 * p43 * internal.cell + 1 * internal.kD374trans_p55 * p30 * (DISCp55 + p30) * internal.cell + 1 * internal.kD374trans_p43 * p30 * p43 * internal.cell - 1 * internal.kdiss_p18 * p18 * internal.cell;
    dstatedt[11] = 0 + 1 * internal.kdiss_p18 * p18 * internal.cell;
    dstatedt[8] = 0 + 1 * internal.kD216 * DISCp55 * internal.cell - 1 * internal.kD374trans_p55 * p30 * (DISCp55 + p30) * internal.cell - 1 * internal.kD374trans_p43 * p30 * p43 * internal.cell;
    dstatedt[9] = 0 - 1 * internal.kD216 * p43 * internal.cell + 1 * internal.kD374trans_p55 * DISCp55 * (DISCp55 + p30) * internal.cell + 1 * internal.kD374trans_p43 * DISCp55 * p43 * internal.cell;
    dstatedt[2] = 0 - 1 * internal.kDISC * p55free * DISC * internal.cell;
    dstatedt[15] = 0 + 1 * internal.kD374probe * PrER_mGFP * p18 * internal.cell;
    dstatedt[5] = 0 - 1 * internal.kD374probe * PrER_mGFP * p18 * internal.cell;
    dstatedt[13] = 0 + 1 * internal.kD374probe * PrNES_mCherry * (p43 + p18) * internal.cell;
    dstatedt[4] = 0 - 1 * internal.kD374probe * PrNES_mCherry * (p43 + p18) * internal.cell;
    dstatedt[12] = 0 + 1 * internal.kBid * Bid * (p43 + p18) * internal.cell;
    dstatedt[6] = 0 + 1 * internal.kon_FADD * CD95act * FADD * internal.cell - 1 * internal.koff_FADD * DISC * internal.cell - 1 * internal.kDISC * p55free * DISC * internal.cell + 1 * internal.kD216 * p43 * internal.cell + 1 * internal.kD374trans_p55 * p30 * (DISCp55 + p30) * internal.cell + 1 * internal.kD374trans_p43 * p30 * p43 * internal.cell;
    dstatedt[1] = 0 - 1 * internal.kon_FADD * CD95act * FADD * internal.cell + 1 * internal.koff_FADD * DISC * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CD95", "FADD", "p55free", "Bid", "PrNES_mCherry", "PrER_mGFP", "DISC", "DISCp55", "p30", "p43", "p18", "p18inactive", "tBid", "PrNES", "mCherry", "PrER", "mGFP", "CD95L"];
    this.metadata.internalOrder = {Bid_init: null, CD95_init: null, CD95L_init: null, cell: null, DISC_init: null, DISCp55_init: null, FADD_init: null, initial_Bid: null, initial_CD95: null, initial_CD95L: null, initial_DISC: null, initial_DISCp55: null, initial_FADD: null, initial_mCherry: null, initial_mGFP: null, initial_p18: null, initial_p18inactive: null, initial_p30: null, initial_p43: null, initial_p55free: null, initial_PrER: null, initial_PrER_mGFP: null, initial_PrNES: null, initial_PrNES_mCherry: null, initial_tBid: null, kBid: null, kD216: null, kD374probe: null, kD374trans_p43: null, kD374trans_p55: null, kDISC: null, kdiss_p18: null, KDL: null, KDR: null, koff_FADD: null, kon_FADD: null, mCherry_init: null, mGFP_init: null, p18_init: null, p18inactive_init: null, p30_init: null, p43_init: null, p55free_init: null, PrER_init: null, PrER_mGFP_init: null, PrNES_init: null, PrNES_mCherry_init: null, tBid_init: null};
    this.metadata.variableOrder = {CD95: null, FADD: null, p55free: null, Bid: null, PrNES_mCherry: null, PrER_mGFP: null, DISC: null, DISCp55: null, p30: null, p43: null, p18: null, p18inactive: null, tBid: null, PrNES: null, mCherry: null, PrER: null, mGFP: null, CD95L: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

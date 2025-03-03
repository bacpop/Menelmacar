export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c1 = 10.199999999999999;
    internal.c2 = 22.800000000000001;
    internal.default1 = 1;
    internal.pi = 3.1415929999999999;
    internal.s23 = 0;
    internal.sa4_degraded = 0;
    internal.snk_insnew = 0;
    internal.snk_metact = 0;
    internal.src_Glucblood = 0;
    internal.src_insnew = 0;
    internal.src_Kgit = 0;
    internal.src_metact = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_K_ECF;
    state[1] = internal.initial_K_ICF;
    state[2] = internal.initial_K_urin;
    state[3] = internal.initial_K_tiss;
    state[4] = internal.initial_K_sal;
    state[5] = internal.initial_met_act;
    state[6] = internal.initial_K_milk;
    state[7] = internal.initial_K_git;
    state[8] = internal.initial_Gluc_b;
    state[9] = internal.initial_ins_b;
    state[10] = internal.initial_Gluc_stor;
    state[11] = internal.initial_Gluc_prod;
    state[12] = internal.initial_s24;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Gluc_b_init", "Gluc_prod_init", "Gluc_stor_init", "ins_b_init", "K_ECF_init", "K_git_init", "K_ICF_init", "K_milk_init", "K_sal_init", "K_tiss_init", "K_urin_init", "met_act_init", "p1", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p2", "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29", "p3", "p30", "p31", "p32", "p33", "p34", "p35", "p36", "p37", "p38", "p39", "p4", "p40", "p41", "p42", "p43", "p44", "p45", "p46", "p47", "p48", "p49", "p5", "p50", "p51", "p52", "p53", "p54", "p55", "p56", "p57", "p58", "p59", "p6", "p60", "p61", "p62", "p63", "p64", "p65", "p66", "p7", "p8", "p9", "parameter_1", "Pi", "s24_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Gluc_b_init", internal, 0.54656646207103599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gluc_prod_init", internal, 34.033718301511598, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gluc_stor_init", internal, 3647.7467417675498, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ins_b_init", internal, 21.853295420339201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_ECF_init", internal, 0.17513682776981199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_git_init", internal, 43.136555945114203, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_ICF_init", internal, 0.89732599190336104, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_milk_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_sal_init", internal, 4.5381890167934502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_tiss_init", internal, 1509.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_urin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "met_act_init", internal, 6.2488512831337104, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 40.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p10", internal, 1400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p11", internal, 860, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.010500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p13", internal, 6.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p14", internal, 0.15639932000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p15", internal, 32, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p16", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p17", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p18", internal, 0.0223, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p19", internal, 0.13730000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p20", internal, 7.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p21", internal, 0.1085, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p22", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p23", internal, 0.58649744999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p24", internal, 0.19628114660000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p25", internal, 6.6085000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p26", internal, 49.027900000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p27", internal, 0.23263488500000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p28", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p29", internal, 0.11729949000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p30", internal, 0.94999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p31", internal, 0.35299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p32", internal, 1.3100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p33", internal, 0.078199660000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p34", internal, 0.039098300000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p35", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p36", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p37", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p38", internal, 1509.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p39", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.0001783, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p40", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p41", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p42", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p43", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p44", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p45", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p46", internal, 0.085400000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p47", internal, 72, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p48", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p49", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.56299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p50", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p51", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p52", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p53", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p54", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p55", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p56", internal, 0.01137, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p57", internal, 3800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p58", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p59", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p6", internal, 0.050999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p60", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p61", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p62", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p63", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p64", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p65", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p66", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p7", internal, 0.92500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p8", internal, 0.59940000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p9", internal, 0.40160000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 6.0221408570000002e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi", internal, 3.1415926535900001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s24_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Gluc_b = internal.Gluc_b_init;
    internal.initial_Gluc_prod = internal.Gluc_prod_init;
    internal.initial_Gluc_stor = internal.Gluc_stor_init;
    internal.initial_ins_b = internal.ins_b_init;
    internal.initial_K_ECF = internal.K_ECF_init;
    internal.initial_K_git = internal.K_git_init;
    internal.initial_K_ICF = internal.K_ICF_init;
    internal.initial_K_milk = internal.K_milk_init;
    internal.initial_K_sal = internal.K_sal_init;
    internal.initial_K_tiss = internal.K_tiss_init;
    internal.initial_K_urin = internal.K_urin_init;
    internal.initial_met_act = internal.met_act_init;
    internal.initial_s24 = internal.s24_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const K_ECF = state[0];
    const K_ICF = state[1];
    const K_tiss = state[3];
    const K_sal = state[4];
    const met_act = state[5];
    const K_git = state[7];
    const Gluc_b = state[8];
    const ins_b = state[9];
    const Gluc_stor = state[10];
    const Gluc_prod = state[11];
    dstatedt[9] = 0 - 1 * internal.c2 * (internal.p41 * ins_b / internal.c2) + 1 * internal.c2 * (internal.p49 * Gluc_b / internal.c2);
    dstatedt[6] = 0 + 1 * (internal.p52 * internal.p55 * Math.pow((K_ECF), (10)) / (Math.pow((K_ECF), (10)) + Math.pow((internal.p40), (10))));
    dstatedt[3] = 0 + 1 * (Math.pow((K_git * internal.default1), (10)) / (Math.pow((K_git * internal.default1), (10)) + Math.pow((internal.p15), (10))) * internal.p25 * K_ECF * Math.pow((internal.p2 - internal.p10), (10)) / (Math.pow((K_tiss * internal.default1 - internal.p10), (10)) + Math.pow((internal.p2 - internal.p10), (10)))) - 1 * (1 / (1 + Math.pow((K_git * internal.default1 / internal.p15), (10))) * internal.p26 * (internal.p27 - K_ECF) * Math.pow((K_tiss * internal.default1 - internal.p10), (10)) / (Math.pow((K_tiss * internal.default1 - internal.p10), (10)) + Math.pow((internal.p38 * 0.98999999999999999 - internal.p10), (10))));
    dstatedt[2] = 0 + 1 * ((1 + internal.p13 * Math.pow((K_ECF), (5)) / (Math.pow((K_ECF), (5)) + Math.pow((internal.p24), (5)))) * internal.p6 * K_git * internal.default1 * (1 + internal.p16 * Math.pow((K_ECF), (10)) / (Math.pow((K_ECF), (10)) + Math.pow((internal.p22), (10)))) + internal.p53 * K_ECF);
    dstatedt[12] = 0 + 1 * (Math.pow((Gluc_b), (10)) / (Math.pow((Gluc_b), (10)) + Math.pow((internal.p58), (10))) * (internal.p28 * Gluc_b + internal.p59 * Gluc_prod * internal.default1 * Math.exp(- internal.p66 * internal.p55) + internal.p55 * internal.p47));
    var dmi = internal.p54 * 487.5 * (1 - Math.sin(internal.pi * t / 12));
    var pH = 7.5 - met_act / 40;
    dstatedt[0] = 0 - 1 * ((internal.p8 + internal.p9 * Math.pow((ins_b), (8)) / (Math.pow((ins_b), (8)) + Math.pow((internal.p3), (8)))) * Math.pow((K_ECF), (2)) / (Math.pow((K_ECF), (2)) + Math.pow((internal.p33), (2))) * (1 + internal.p21 * Math.pow((pH), (10)) / (Math.pow((pH), (10)) + Math.pow((internal.p20), (10))))) - 1 * (internal.p18 * K_ECF * dmi) - 1 * (Math.pow((K_git * internal.default1), (10)) / (Math.pow((K_git * internal.default1), (10)) + Math.pow((internal.p15), (10))) * internal.p25 * K_ECF * Math.pow((internal.p2 - internal.p10), (10)) / (Math.pow((K_tiss * internal.default1 - internal.p10), (10)) + Math.pow((internal.p2 - internal.p10), (10)))) - 1 * ((1 + internal.p13 * Math.pow((K_ECF), (5)) / (Math.pow((K_ECF), (5)) + Math.pow((internal.p24), (5)))) * internal.p6 * K_git * internal.default1 * (1 + internal.p16 * Math.pow((K_ECF), (10)) / (Math.pow((K_ECF), (10)) + Math.pow((internal.p22), (10)))) + internal.p53 * K_ECF) - 1 * (internal.p52 * internal.p55 * Math.pow((K_ECF), (10)) / (Math.pow((K_ECF), (10)) + Math.pow((internal.p40), (10)))) - 1 * internal.p4 * K_ECF + 1 * (internal.p31 * K_git * internal.default1) + 1 * ((1 + 1 / (1 + Math.pow((K_ECF / internal.p29), (10)))) * internal.p5 * (1 + 1 / (1 + Math.pow((pH / internal.p20), (10)))) * Math.pow((K_ICF), (2)) / (Math.pow((K_ICF), (2)) + Math.pow((internal.p23), (2))) * (1 + internal.p19 * Math.pow((K_ICF), (2)) / (Math.pow((K_ICF), (2)) + Math.pow((internal.p14), (2))))) + 1 * (1 / (1 + Math.pow((K_git * internal.default1 / internal.p15), (10))) * internal.p26 * (internal.p27 - K_ECF) * Math.pow((K_tiss * internal.default1 - internal.p10), (10)) / (Math.pow((K_tiss * internal.default1 - internal.p10), (10)) + Math.pow((internal.p38 * 0.98999999999999999 - internal.p10), (10))));
    dstatedt[1] = 0 + 1 * ((internal.p8 + internal.p9 * Math.pow((ins_b), (8)) / (Math.pow((ins_b), (8)) + Math.pow((internal.p3), (8)))) * Math.pow((K_ECF), (2)) / (Math.pow((K_ECF), (2)) + Math.pow((internal.p33), (2))) * (1 + internal.p21 * Math.pow((pH), (10)) / (Math.pow((pH), (10)) + Math.pow((internal.p20), (10))))) - 1 * ((1 + 1 / (1 + Math.pow((K_ECF / internal.p29), (10)))) * internal.p5 * (1 + 1 / (1 + Math.pow((pH / internal.p20), (10)))) * Math.pow((K_ICF), (2)) / (Math.pow((K_ICF), (2)) + Math.pow((internal.p23), (2))) * (1 + internal.p19 * Math.pow((K_ICF), (2)) / (Math.pow((K_ICF), (2)) + Math.pow((internal.p14), (2)))));
    dstatedt[4] = 0 + 1 * (internal.p18 * K_ECF * dmi) - 1 * internal.default1 * (internal.p32 * K_sal * internal.default1 / internal.default1);
    dstatedt[5] = 0 + 1 * internal.default1 * ((internal.p45 + internal.p42 * Math.pow((dmi), (2)) / (Math.pow((dmi), (2)) + Math.pow((internal.p43), (2)))) / internal.default1) - 1 * internal.default1 * (internal.p44 * met_act * internal.default1 / internal.default1);
    var Gluc_feed = internal.p46 * dmi;
    var K_feed = internal.p56 * dmi;
    dstatedt[8] = 0 - 1 * (Math.pow((Gluc_feed), (10)) / (Math.pow((Gluc_feed), (10)) + Math.pow((internal.p1), (10))) * internal.p12 * Gluc_prod * internal.default1 * Math.pow((internal.p57), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p57), (10))) * ins_b * Gluc_b * Math.pow((internal.p36), (10)) / (Math.pow((internal.p36), (10)) + Math.pow((internal.p55), (10)))) + 1 * ((internal.p37 + internal.p39 * Gluc_prod * internal.default1) * (1 / (1 + Math.pow((Gluc_b / internal.p50), (10))))) + 1 * (1 / (1 + Math.pow((Gluc_feed / internal.p1), (10))) * internal.p17 * (internal.p7 - Gluc_b) * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10))) + 1 / (1 + Math.pow((internal.p64 / internal.p55), (10))) * Math.pow((internal.p65), (10)) / (Math.pow((internal.p65), (10)) + Math.pow((Gluc_b), (10))) * internal.p63 * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10)))) - 1 * (Math.pow((Gluc_b), (10)) / (Math.pow((Gluc_b), (10)) + Math.pow((internal.p58), (10))) * (internal.p28 * Gluc_b + internal.p59 * Gluc_prod * internal.default1 * Math.exp(- internal.p66 * internal.p55) + internal.p55 * internal.p47)) + 1 * internal.c2 * (internal.p48 * Gluc_feed / internal.c2);
    dstatedt[11] = 0 - 1 * ((internal.p37 + internal.p39 * Gluc_prod * internal.default1) * (1 / (1 + Math.pow((Gluc_b / internal.p50), (10))))) - 1 * internal.default1 * (internal.p51 * Gluc_prod * internal.default1 * (Math.pow((internal.p57), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p57), (10)))) * Math.pow((internal.p62), (10)) / (Math.pow((internal.p62), (10)) + Math.pow((internal.p55), (10))) / internal.default1) + 1 * internal.default1 * (internal.p60 * 1 / (1 + Math.pow((Gluc_feed / internal.p61), (5))) * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10))) / internal.default1) + 1 * internal.default1 * ((1 - internal.p48) * Gluc_feed / internal.default1);
    dstatedt[10] = 0 + 1 * (Math.pow((Gluc_feed), (10)) / (Math.pow((Gluc_feed), (10)) + Math.pow((internal.p1), (10))) * internal.p12 * Gluc_prod * internal.default1 * Math.pow((internal.p57), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p57), (10))) * ins_b * Gluc_b * Math.pow((internal.p36), (10)) / (Math.pow((internal.p36), (10)) + Math.pow((internal.p55), (10)))) + 1 * internal.default1 * (internal.p51 * Gluc_prod * internal.default1 * (Math.pow((internal.p57), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p57), (10)))) * Math.pow((internal.p62), (10)) / (Math.pow((internal.p62), (10)) + Math.pow((internal.p55), (10))) / internal.default1) - 1 * (1 / (1 + Math.pow((Gluc_feed / internal.p1), (10))) * internal.p17 * (internal.p7 - Gluc_b) * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10))) + 1 / (1 + Math.pow((internal.p64 / internal.p55), (10))) * Math.pow((internal.p65), (10)) / (Math.pow((internal.p65), (10)) + Math.pow((Gluc_b), (10))) * internal.p63 * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10)))) - 1 * internal.default1 * (internal.p60 * 1 / (1 + Math.pow((Gluc_feed / internal.p61), (5))) * Math.pow((Gluc_stor * internal.default1), (10)) / (Math.pow((Gluc_stor * internal.default1), (10)) + Math.pow((internal.p35), (10))) / internal.default1);
    dstatedt[7] = 0 + 1 * internal.default1 * (internal.p30 * K_feed / internal.default1) - 1 * (internal.p31 * K_git * internal.default1) + 1 * internal.default1 * (internal.p32 * K_sal * internal.default1 / internal.default1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "K_ECF", "K_ICF", "K_urin", "K_tiss", "K_sal", "met_act", "K_milk", "K_git", "Gluc_b", "ins_b", "Gluc_stor", "Gluc_prod", "s24"];
    this.metadata.internalOrder = {c1: null, c2: null, default1: null, Gluc_b_init: null, Gluc_prod_init: null, Gluc_stor_init: null, initial_Gluc_b: null, initial_Gluc_prod: null, initial_Gluc_stor: null, initial_ins_b: null, initial_K_ECF: null, initial_K_git: null, initial_K_ICF: null, initial_K_milk: null, initial_K_sal: null, initial_K_tiss: null, initial_K_urin: null, initial_met_act: null, initial_s24: null, ins_b_init: null, K_ECF_init: null, K_git_init: null, K_ICF_init: null, K_milk_init: null, K_sal_init: null, K_tiss_init: null, K_urin_init: null, met_act_init: null, p1: null, p10: null, p11: null, p12: null, p13: null, p14: null, p15: null, p16: null, p17: null, p18: null, p19: null, p2: null, p20: null, p21: null, p22: null, p23: null, p24: null, p25: null, p26: null, p27: null, p28: null, p29: null, p3: null, p30: null, p31: null, p32: null, p33: null, p34: null, p35: null, p36: null, p37: null, p38: null, p39: null, p4: null, p40: null, p41: null, p42: null, p43: null, p44: null, p45: null, p46: null, p47: null, p48: null, p49: null, p5: null, p50: null, p51: null, p52: null, p53: null, p54: null, p55: null, p56: null, p57: null, p58: null, p59: null, p6: null, p60: null, p61: null, p62: null, p63: null, p64: null, p65: null, p66: null, p7: null, p8: null, p9: null, parameter_1: null, pi: null, Pi: null, s23: null, s24_init: null, sa4_degraded: null, snk_insnew: null, snk_metact: null, src_Glucblood: null, src_insnew: null, src_Kgit: null, src_metact: null};
    this.metadata.variableOrder = {K_ECF: null, K_ICF: null, K_urin: null, K_tiss: null, K_sal: null, met_act: null, K_milk: null, K_git: null, Gluc_b: null, ins_b: null, Gluc_stor: null, Gluc_prod: null, s24: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}

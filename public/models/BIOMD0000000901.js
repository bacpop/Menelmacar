export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Body = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Fat_Mass;
    state[1] = internal.initial_Lean_Mass;
    state[2] = internal.initial_Body_Mass;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "Body_Mass_init", "Energy_Expenditure_Rate", "Fat_Mass_init", "Intake_Rate", "Lean_Mass_init", "p___Ratio", "Psy", "rho_F", "rho_L"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 24.987348178137701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Body_Mass_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Energy_Expenditure_Rate", internal, 11.050000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fat_Mass_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Intake_Rate", internal, 9.1999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lean_Mass_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p___Ratio", internal, 0.038480263286011999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Psy", internal, 0.00102051309738594, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_F", internal, 39.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_L", internal, 7.5999999999999996, -Infinity, Infinity, false);
    internal.initial_Body_Mass = internal.Body_Mass_init;
    internal.initial_Fat_Mass = internal.Fat_Mass_init;
    internal.initial_Lean_Mass = internal.Lean_Mass_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[2] = 0;
    dstatedt[0] = ((1 - internal.p___Ratio) * (internal.Intake_Rate - internal.Energy_Expenditure_Rate) - internal.Psy) / internal.rho_F;
    dstatedt[1] = (internal.p___Ratio * (internal.Intake_Rate - internal.Energy_Expenditure_Rate) + internal.Psy) / internal.rho_L;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Fat_Mass", "Lean_Mass", "Body_Mass"];
    this.metadata.internalOrder = {alpha: null, Body: null, Body_Mass_init: null, Energy_Expenditure_Rate: null, Fat_Mass_init: null, initial_Body_Mass: null, initial_Fat_Mass: null, initial_Lean_Mass: null, Intake_Rate: null, Lean_Mass_init: null, p___Ratio: null, Psy: null, rho_F: null, rho_L: null};
    this.metadata.variableOrder = {Fat_Mass: null, Lean_Mass: null, Body_Mass: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}


// from PkgWrapper.run
export interface ModelResults {
  /** Names of all variables (and outputs) in the system */
  names: string[];
  /** Statistics from the solver about work done */
  statistics: {
    lastError: number;
    nEval: number;
    nSteps: number;
    nStepsAccepted: number;
    nStepsRejected: number;
    stiffNNonstiff: number;
    stiffNStiff: number;
  };
  /** Array-of-arrays with the result `y[i][j]` is the `j`th
   * output at the `i`th time
   */
  y: number[][];
}

export interface ModelDetails {
  name: string;
  description: string;
}

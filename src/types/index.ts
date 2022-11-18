export interface PathCommand {
  letter: 'm' | 'l' | 'h' | 'v' | 'z';
  parameter: string;
}

export interface RunicRepresentation {
  decimalValue: number;
  pathCommands: PathCommand[];
}

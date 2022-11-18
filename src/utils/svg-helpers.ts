import { PathCommand } from '@/types/index';

export function generatePath(commands: PathCommand[]): string {
  return commands.reduce((acc, command) => {
    return `${acc} ${command.letter} ${command.parameter}`;
  }, '');
}

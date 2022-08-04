import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear','neofetch', ...Object.keys(bin)];

  return commands.indexOf(command.split(' ')[0]) !== -1;
};

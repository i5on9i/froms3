import * as path from 'path'
import { AwsMgr } from './common/awsmanager';
import { Command } from 'commander';


function main() {
  const program = new Command();
  program
    .version('1.0.0', '-v, --version')
    .name('froms3')
    .usage('[OPTIONS]...')
    //   .option('-st, --keyst <file_path>', 'key s.t is printed')
    //   .option('-kd, --keydiff <value>,<value>', 'diff target files')
    //   .option('-kv, --keyvalue <log_file>,<key_file>', 'extract keys from a log')
    .parse(process.argv);


  const amgr = new AwsMgr()
  amgr.read()
}

main()

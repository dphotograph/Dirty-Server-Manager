import child_process, { exec } from 'child_process';
import path from 'path'
import Logger from '../lib/logger'
import * as globals from '../lib/globals'
import localStorage from '../lib/localStorage'
import {GameServerOnline} from '../lib/serverOnline'
import {action as intergrate} from './intergrate'

// Command Name *required
export const command = "start"

// Command Version
export const version = "0.0.1"

// Command Alias
export const alias = ""

// Command Description *required
export const description = "starts the server"

// Command Action *required
export const action = ()=>{
  if(GameServerOnline()){
    console.log('Server is already online')
    return;
  }


  console.group('Starting Server')
  Logger.init()
  Logger.clear()
  localStorage.removeItem('WrapperPid')
  intergrate('on') // enable intergration on wrapper startup

  var childFilePath = path.resolve(globals.InstallationDir()+'/dsm/serverWrapper.js');

  var options = {
    detached: true,
    stdio: ['ignore', Logger.stream, Logger.stream],
    execPath: childFilePath
  };
  const steamCmd = child_process.spawn('node',[childFilePath],options)
  steamCmd.unref();
}
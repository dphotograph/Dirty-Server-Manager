import net from 'net'
import os from 'os'
import * as globals from '../lib/globals'
import path from 'path'
import {GameServerOnline} from '../lib/serverOnline'

// Command Name *required
export const command = "send <message>"

// Command Version
export const version = "0.0.1"

// Command Alias
export const alias = ""

// Command Description *required
export const description = "sends command to server"

// Command Action *required
export const action = (message)=>{
  if(!GameServerOnline()){
    console.log('Server is Offline')
    return;
  }
  // var sock = net.connect(globals.cleanPipeName(path.resolve(os.tmpdir()+'/dsm.sock')))
  // sock.write(`${message}`,'utf8',()=>{
  //   console.log(`Message: ${message}`);
  // })
  // sock.on('data', function (data) {
  //   console.log(`Response: ${data}`);
  //   sock.destroy()
  // });

  send(message,
    (sock)=>{
      console.log(`Message: ${message}`);
    },
    (data, sock)=>{
      console.log(`Response: ${data}`);
      sock.destroy()
    }
  )
}

export const send = (message,write,response) => {
  var sock = net.connect(globals.cleanPipeName(path.resolve(os.tmpdir()+'/dsm.sock')))
  sock.write(`${message}`,'utf8',()=>{
    write(sock)
  })
  sock.on('data', function (data) {
    response(data,sock)
  });
}
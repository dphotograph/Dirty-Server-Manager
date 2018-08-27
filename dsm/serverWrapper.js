#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bin/serverWrapper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bin/helpers/chatLogger.js":
/*!***************************************!*\
  !*** ./src/bin/helpers/chatLogger.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegisterToWrapperEmitter = exports.name = undefined;\n\nvar _logger = __webpack_require__(/*! ../../lib/logger */ \"./src/lib/logger.js\");\n\nconst name = exports.name = 'Chat Logger';\n\nconst RegisterToWrapperEmitter = exports.RegisterToWrapperEmitter = GameServerEmitter => {\n\n  GameServerEmitter.on('chat', (name, message) => {\n    const date = new Date();\n    _logger.Chat.log(`${date.toUTCString()} | <${name}> ${message}`);\n  });\n\n  GameServerEmitter.on('spawned', () => {\n    _logger.Chat.init();\n    _logger.Chat.clear();\n  });\n};\n\n//# sourceURL=webpack:///./src/bin/helpers/chatLogger.js?");

/***/ }),

/***/ "./src/bin/helpers/eventHandlers.js":
/*!******************************************!*\
  !*** ./src/bin/helpers/eventHandlers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.playerTracker = exports.chatLogger = exports.statusChecker = exports.ipcLayer = undefined;\n\nvar _ipcLayer = __webpack_require__(/*! ./ipcLayer */ \"./src/bin/helpers/ipcLayer.js\");\n\nvar ipcLayer = _interopRequireWildcard(_ipcLayer);\n\nvar _statusChecker = __webpack_require__(/*! ./statusChecker */ \"./src/bin/helpers/statusChecker.js\");\n\nvar statusChecker = _interopRequireWildcard(_statusChecker);\n\nvar _chatLogger = __webpack_require__(/*! ./chatLogger */ \"./src/bin/helpers/chatLogger.js\");\n\nvar chatLogger = _interopRequireWildcard(_chatLogger);\n\nvar _playerTracker = __webpack_require__(/*! ./playerTracker */ \"./src/bin/helpers/playerTracker.js\");\n\nvar playerTracker = _interopRequireWildcard(_playerTracker);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.ipcLayer = ipcLayer;\nexports.statusChecker = statusChecker;\nexports.chatLogger = chatLogger;\nexports.playerTracker = playerTracker;\n\n//# sourceURL=webpack:///./src/bin/helpers/eventHandlers.js?");

/***/ }),

/***/ "./src/bin/helpers/ipcLayer.js":
/*!*************************************!*\
  !*** ./src/bin/helpers/ipcLayer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegisterToWrapperEmitter = exports.name = undefined;\n\nvar _net = __webpack_require__(/*! net */ \"net\");\n\nvar _net2 = _interopRequireDefault(_net);\n\nvar _globals = __webpack_require__(/*! ../../lib/globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _os = __webpack_require__(/*! os */ \"os\");\n\nvar _os2 = _interopRequireDefault(_os);\n\nvar _https = __webpack_require__(/*! https */ \"https\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst name = exports.name = 'IPC Layer';\n\nconst RegisterToWrapperEmitter = exports.RegisterToWrapperEmitter = GameServerEmitter => {\n  let server;\n\n  GameServerEmitter.once('spawned', function (GameServer) {\n    console.log('DSM: IPC Initializing...\\n');\n    // Socket layer to listen for incoming mesages.\n    server = _net2.default.createServer(ClientSock => {\n      // Callback for the attach command to recieve data\n      const SendServerData = ServerData => {\n        ClientSock.write(ServerData); // Write data to Client\n      };\n\n      const WaitToClose = () => {\n        ClientSock.write(\"SUCCESS\");\n        ClientSock.end(); // tell client were closing\n      };\n      // listen to server exit event\n      const ServerExitCallback = () => {\n        console.log('Shutting down connected client');\n        ClientSock.end(); // tell client were closing\n      };\n      console.log('Client connected to IPC Layer');\n      GameServerEmitter.on('exit', ServerExitCallback);\n\n      // console.log('DSM Client ');\n      ClientSock.on('end', () => {\n        // console.log('DSM Socket Closed');\n        GameServerEmitter.removeListener('data', SendServerData); // Remove the listener since the client is not listening\n        GameServerEmitter.removeListener('exit', ServerExitCallback); // Remove the listener since the client is not listening\n        GameServerEmitter.removeListener('status', SendServerData);\n        GameServerEmitter.removeListener('shutdown', WaitToClose);\n        GameServerEmitter.removeListener('startup', WaitToClose);\n        console.log('Closing client from IPC Layer');\n      });\n      ClientSock.on('data', function (data) {\n        if (data.toString() === 'ATTACH') {\n          // attach command has been run, start sending data to the client\n          console.log('Client is listening to server output.');\n          GameServerEmitter.on('data', SendServerData);\n        } else if (data.toString() === '/status') {\n          // if when attached and you use /status this will fire attaching both data and status listeners to the attached client\n          console.log('STATUS COMMAND');\n          GameServer.write(data + '\\n');\n          GameServerEmitter.on('status', SendServerData);\n        } else if (data.toString() === '/stop') {\n          console.log('SHUTDOWN COMMAND');\n          GameServer.write(data + '\\n');\n          GameServerEmitter.on('shutdown', WaitToClose);\n        } else if (data.toString() === 'STARTUP') {\n          GameServerEmitter.on('startup', WaitToClose);\n        } else if (data.toString().match(/^SENDING/)) {\n          GameServer.write(data.toString().replace(/^SENDING/, \"\") + '\\n');\n          GameServerEmitter.on('data', SendServerData);\n        } else {\n          // dont create event as the client is likely to close immediatly after writing\n          GameServer.write(data + '\\n');\n        }\n      });\n    });\n    server.on('error', e => {\n      console.log(e);\n    });\n\n    // server.on('connection', (socket) => {\n    //   socket.end()\n    // });\n\n    server.listen(globals.cleanPipeName(_path2.default.resolve(_os2.default.tmpdir() + '/dsm.sock')), () => {\n      console.log('DSM: IPC Initialized.\\n');\n    });\n  });\n\n  GameServerEmitter.on('exit', () => {\n    console.log('DSM: CLOSING IPC SERVER');\n    server.close(); // will not close exsiting connections\n  });\n};\n\n//# sourceURL=webpack:///./src/bin/helpers/ipcLayer.js?");

/***/ }),

/***/ "./src/bin/helpers/playerTracker.js":
/*!******************************************!*\
  !*** ./src/bin/helpers/playerTracker.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegisterToWrapperEmitter = exports.name = undefined;\n\nvar _db = __webpack_require__(/*! ../../lib/db */ \"./src/lib/db.js\");\n\nvar _db2 = _interopRequireDefault(_db);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst name = exports.name = 'Player Tracker';\n\nconst RegisterToWrapperEmitter = exports.RegisterToWrapperEmitter = GameServerEmitter => {\n  GameServerEmitter.on('logon', (name, index) => {\n    _db2.default.open();\n    // check if player exists\n    if (_db.players.PlayerExists(index) === undefined) {\n      console.log('Player does not exist');\n      // create player if doesnt exist\n      _db.players.CreatePlayer(index, name);\n    }\n    _db.players.UpdatePlayerLogStatus(1, index);\n    _db.server.incrementPlayers();\n    // log player in\n    _db2.default.close();\n  });\n\n  GameServerEmitter.on('logoff', (name, index) => {\n    _db2.default.open();\n    // check if player exists\n    if (_db.players.PlayerExists(index) === undefined) {\n      console.log('Player does not exist');\n      // create player if doesnt exist\n      _db.players.CreatePlayer(index, name);\n    }\n    _db.players.UpdatePlayerLogStatus(0, index);\n    _db.server.decrementPlayers();\n    // log player in\n    _db2.default.close();\n  });\n};\n\n//# sourceURL=webpack:///./src/bin/helpers/playerTracker.js?");

/***/ }),

/***/ "./src/bin/helpers/startGameServer.js":
/*!********************************************!*\
  !*** ./src/bin/helpers/startGameServer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _globals = __webpack_require__(/*! ../../lib/globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _MainConfig = __webpack_require__(/*! ../../lib/MainConfig */ \"./src/lib/MainConfig.js\");\n\nvar _MainConfig2 = _interopRequireDefault(_MainConfig);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _localStorage = __webpack_require__(/*! ../../lib/localStorage */ \"./src/lib/localStorage.js\");\n\nvar _localStorage2 = _interopRequireDefault(_localStorage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// npm install --global --production windows-build-tools\nvar pty = __webpack_require__(/*! node-pty */ \"node-pty\"); // dont use import, webpack is set to not touch node-pty as it will mess with it.\n\n// https://github.com/Microsoft/node-pty/issues/78\n\n// Allowed options:\n//   --help                         show help message\n//   --version                      print out version and exit\n//   --port arg                     listening port of the server\n//   --query-port arg               internal game query port of the server,\n//                                  default: 27003\n//   --steam-query-port arg         steam query port of the server, default: 27020\n//   --steam-master-port arg        steam master server port of the server,\n//                                  default: 27021\n//   --ip arg                       binds the server to a specific IP (steam\n//                                  networking only)\n//   --max-players arg              maximum number of online players\n//   --save-interval arg            timestep between savings\n//   --server-name arg              server name, will be displayed when queried\n//   --pausable arg                 whether or not the server can be paused by\n//                                  admins when there's only a single player\n//                                  online\n//   --galaxy-name arg              galaxy name, appended to datapath, final path\n//                                  will be [datapath]/[galaxyname]\n//   --datapath arg                 folder the galaxies will be stored in, will be\n//                                  prepended to galaxy name\n//   --admin arg                    steam id(s) of the administrator(s) to add to\n//                                  the server\n//   --seed arg                     seed of the server\n//   --difficulty arg               difficulty of the server, allowed values are:\n//                                  -3, -2, -1, 0, 1, 2, 3\n//   --infinite-resources arg       enable infinite resources for all players\n//   --collision-damage arg         amount of damage done to an object on\n//                                  collision, from 0 to 1. 0: no damage, 1: full\n//                                  damage. default: 1\n//   --same-start-sector arg        indicate if all players should start in the\n//                                  same sector\n//   --alive-sectors-per-player arg the amount of sectors with player property\n//                                  that are simulated in addition to that\n//                                  player's current sector\n//   --safe-player-input arg        enable to guarantee more cheat-safety, but\n//                                  players may experience more lag\n//   --threads arg                  specifies the number of threads used to update\n//                                  the sectors\n//   --generator-threads arg        specifies the number of threads used to\n//                                  generate sectors\n//   -t [ --trace ] arg             tracing options. Can be more than one. Allowed\n//                                  values are: network scripting threading io\n//                                  database input error warning exception user\n//                                  game system debug sound gl all\n//   --exit-on-last-admin-logout    shut down when last administrator logs out\n//   --stderr-to-log                redirect std error output from console to log\n//                                  file\n//   --stdout-to-log                redirect std console output from console to\n//                                  log file\n//   --public arg                   indicate if the server should allow other\n//                                  players to join\n//   --listed arg                   indicate if the server should show up on\n//                                  public server lists\n//   --authentication arg           enables authentication of players\n//   --use-steam-networking arg     use steam networking and authentication (if\n//                                  enabled) for users\n//   --immediate-writeout arg       immediately write player data to disk when it\n//                                  changes. decreases performance during sector\n//                                  changes, but makes server data more consistent\n//                                  on crash.\n//   --max-logs arg                 maximum number of logs to keep around, 0 for\n//                                  infinite, default: 15\n//   --rcon-ip arg                  binds the rcon server to a specific IP\n//   --rcon-port arg                rcon port, default: 27015\n//   --rcon-password arg            sets the password for the rcon interface.\n//                                  without password, rcon is disabled.\n//   --send-crash-reports arg       when enabled, the server will send anonymous\n//                                  system specs and a crash report when it\n//                                  crashes.\nconst startGameServer = GameServerEmitter => {\n  let startupParams = _MainConfig2.default.STARTUP_PARAMS.value;\n  // if(Config.GAME_IP_ADDRESS.value !== '')\n  //   startupParams += ' --ip '+Config.GAME_IP_ADDRESS.value\n  if (_MainConfig2.default.GALAXY_NAME.value !== '') startupParams += ' --galaxy-name ' + _MainConfig2.default.GALAXY_NAME.value;\n  if (_MainConfig2.default.GALAXY_SAVE_DIRECTORY.value !== '') startupParams += ' --datapath ' + _MainConfig2.default.GALAXY_SAVE_DIRECTORY.value;\n\n  const GameServer = pty.spawn(_path2.default.resolve(globals.InstallationDir() + '/avorion/bin/AvorionServer.exe'), startupParams.split(\" \"), { cwd: _path2.default.resolve(globals.InstallationDir() + '/avorion') });\n\n  console.log('Started server with these params:', _MainConfig2.default.STARTUP_PARAMS.value);\n  // if stdout-to-log option is used, dsm cant detect data using GameServer\n  // need fall back for tracking logfile output\n  GameServerEmitter.emit('spawned', GameServer);\n\n  _localStorage2.default.setItem('GameServerPid', GameServer.pid);\n\n  GameServer.on('error', err => {\n    console.log(err);\n  });\n\n  // Main STDOUT\n  GameServer.on('data', function (data) {\n    // events to listen to:\n    // An exception occurred: unrecognised option\n\n    // Remove unwanted char and log\n    const cleanedData = data.replace(/(\\u001b|\\[0K|\\[\\?25l|\\[\\?25h|\\[\\?)/gm, \"\");\n    console.log(cleanedData); //\\u001b[0K\\u001b[?25l\n\n    GameServerEmitter.emit('data', data);\n\n    if (cleanedData.match(/^An exception occurred:/)) {\n      GameServerEmitter.emit('exception', cleanedData);\n      return;\n    }\n\n    if (data.includes('Memory used by scripts')) {\n      const dataArr = data.split('\\n');\n      const newData = dataArr.slice(0, dataArr.findIndex(line => line.includes('profiling')));\n      GameServerEmitter.emit('status', newData.join('\\n'));\n      return;\n    }\n\n    if (data.includes('Server startup complete')) {\n      GameServerEmitter.emit('startup', GameServer);\n      return;\n    }\n\n    if (cleanedData.match(/^<.*>/)) {\n      const name = cleanedData.match(/(?<=<).*(?=>)/);\n      const message = cleanedData.match(/(?<=> ).*/);\n      //add error handling\n      GameServerEmitter.emit('chat', name[0], message[0]);\n      return;\n    }\n\n    if (data.includes('DSM: Player Log Off')) {\n      // DSM: Player Log Off, name:  Dirtyredz  index:  1\n      const name = cleanedData.match(/(?<=name:  ).*(?=  index)/);\n      const index = cleanedData.match(/(?<=index:  ).*/);\n      if (name && index) {\n        GameServerEmitter.emit('logoff', name[0], index[0]);\n        return;\n      }\n    }\n\n    if (data.includes('DSM: Player Log On')) {\n      const name = cleanedData.match(/(?<=name:  ).*(?=  index)/);\n      const index = cleanedData.match(/(?<=index:  ).*/);\n      if (name && index) {\n        GameServerEmitter.emit('logon', name[0], index[0]);\n        return;\n      }\n    }\n\n    if (data.includes('Server shutdown')) {\n      GameServerEmitter.emit('shutdown', GameServer);\n      return;\n    }\n\n    if (data.includes('Creating minidump') || data.includes('Entered exception handler') || data.includes('Server startup FAILED')) {\n      GameServerEmitter.emit('crash', GameServer);\n      return;\n    }\n\n    // Server startup FAILED\n  });\n\n  GameServer.on('error', error => {\n    console.log('Server Error:', error);\n  });\n\n  // emitted when process exits or when /stop is used\n  GameServer.on('exit', code => {\n    console.log('exit', code);\n    // code == 0, server was shutdown, or failed to start\n    if (code === 0) {\n      GameServerEmitter.emit('exit');\n    } else if (code === 1) {\n      // code == 1, server process crashed\n      GameServerEmitter.emit('exit');\n      GameServerEmitter.emit('crash', GameServer);\n    }\n  });\n};\nexports.default = startGameServer;\n\n//# sourceURL=webpack:///./src/bin/helpers/startGameServer.js?");

/***/ }),

/***/ "./src/bin/helpers/statusChecker.js":
/*!******************************************!*\
  !*** ./src/bin/helpers/statusChecker.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegisterToWrapperEmitter = exports.name = undefined;\n\nvar _MainConfig = __webpack_require__(/*! ../../lib/MainConfig */ \"./src/lib/MainConfig.js\");\n\nvar _MainConfig2 = _interopRequireDefault(_MainConfig);\n\nvar _prettyMs = __webpack_require__(/*! pretty-ms */ \"pretty-ms\");\n\nvar _prettyMs2 = _interopRequireDefault(_prettyMs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet RespondedToStatus = true;\nlet FailureTimer = false;\nlet IntervalTimer = false;\n\nconst name = exports.name = 'Status Checker';\n\nconst RegisterToWrapperEmitter = exports.RegisterToWrapperEmitter = GameServerEmitter => {\n  GameServerEmitter.on('startup', function (GameServer) {\n    console.log('DSM: Initilized Status Checker, checking every ' + (0, _prettyMs2.default)(_MainConfig2.default.STATUS_INTERVAL_MS.value) + ' with a time to failure of' + (0, _prettyMs2.default)(_MainConfig2.default.TIME_TO_STATUS_FAILURE.value) + '\\n');\n\n    IntervalTimer = setInterval(() => {\n      console.log('DSM: Performing status check');\n      RespondedToStatus = false;\n      GameServer.write('/status\\n');\n      FailureTimer = setTimeout(() => {\n        console.log('DSM: FAILED TO GET STATUS');\n        GameServerEmitter.emit('crash', GameServer);\n        // Emit crash event, which will kill GameServer\n      }, _MainConfig2.default.TIME_TO_STATUS_FAILURE.value);\n    }, _MainConfig2.default.STATUS_INTERVAL_MS.value);\n  });\n\n  GameServerEmitter.on('status', function (data) {\n    RespondedToStatus = true;\n    if (FailureTimer !== false) clearTimeout(FailureTimer);\n    FailureTimer = false;\n  });\n\n  // Clean up dont want to leave ant intervals or timers left around\n  GameServerEmitter.on('exit', () => {\n    RespondedToStatus = true;\n    if (FailureTimer !== false) clearTimeout(FailureTimer);\n    FailureTimer = false;\n\n    if (IntervalTimer !== false) clearTimeout(IntervalTimer);\n    IntervalTimer = false;\n  });\n};\n\n//# sourceURL=webpack:///./src/bin/helpers/statusChecker.js?");

/***/ }),

/***/ "./src/bin/serverWrapper.js":
/*!**********************************!*\
  !*** ./src/bin/serverWrapper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _localStorage = __webpack_require__(/*! ../lib/localStorage */ \"./src/lib/localStorage.js\");\n\nvar _localStorage2 = _interopRequireDefault(_localStorage);\n\nvar _globals = __webpack_require__(/*! ../lib/globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _startGameServer = __webpack_require__(/*! ./helpers/startGameServer */ \"./src/bin/helpers/startGameServer.js\");\n\nvar _startGameServer2 = _interopRequireDefault(_startGameServer);\n\nvar _eventHandlers = __webpack_require__(/*! ./helpers/eventHandlers */ \"./src/bin/helpers/eventHandlers.js\");\n\nvar eventHandler = _interopRequireWildcard(_eventHandlers);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar events = __webpack_require__(/*! events */ \"events\").EventEmitter;\nvar GameServerEmitter = new events.EventEmitter();\n\n\nconsole.log('-----Dirty Server Manager-----');\nconsole.log('DSM: Server Wrapper Initilized on pid: ' + process.pid);\n\n// Register events handlers\nconst handlers = Object.keys(eventHandler);\nhandlers.map((handle, index) => {\n  handle = eventHandler[handle];\n  handle.RegisterToWrapperEmitter(GameServerEmitter);\n\n  console.log('DSM: Event Handler:', handle.name, ', has been registered.');\n});\n\n// We then pipe the main process stdin (which is a readable stream)\n// into the child process stdin (which is a writable stream).\n\n_localStorage2.default.setItem('WrapperPid', process.pid);\n\n// var lockFile = require('lockfile')\n// // opts is optional, and defaults to {}\n// lockFile.lock(path.resolve(globals.InstallationDir() + '/dsm/config.ini'), {}, function (er) {\n//   // if the er happens, then it failed to acquire a lock.\n// })\n\n// Start the game\n(0, _startGameServer2.default)(GameServerEmitter);\n\nGameServerEmitter.on('error', err => {\n  console.log(err);\n});\n\nGameServerEmitter.on('crash', GameServer => {\n  console.log('Detected server crash, waiting 7 seconds');\n  GameServer.write('/save\\n'); // send save command just incase\n  setTimeout(() => {\n    GameServer.destroy(); // will trigger a GameServer Exit event\n    console.log('processing events...');\n    setTimeout(() => {\n      (0, _startGameServer2.default)(GameServerEmitter);\n      console.log('Restarted');\n    }, 7000); // 7 seconds\n  }, 7000);\n});\n\nGameServerEmitter.on('shutdown', GameServer => {\n  GameServer.destroy(); // server shutdown, send exit event to wrapper\n});\n\nconst exitHandler = () => {\n  console.log('DSM: Closing wrapper GoodBye!');\n  _localStorage2.default.removeItem('WrapperPid');\n  _localStorage2.default.removeItem('GameServerPid');\n  process.exit(0);\n};\n\nprocess.on('beforeExit', exitHandler);\n\n//do something when app is closing\nprocess.on('exit', exitHandler);\n\n//catches ctrl+c event\nprocess.on('SIGINT', exitHandler);\n\n// catches \"kill pid\" (for example: nodemon restart)\nprocess.on('SIGUSR1', exitHandler);\nprocess.on('SIGUSR2', exitHandler);\n\n//catches uncaught exceptions\nprocess.on('uncaughtException', err => {\n  console.log(err);\n  exitHandler();\n});\n\n//# sourceURL=webpack:///./src/bin/serverWrapper.js?");

/***/ }),

/***/ "./src/lib/MainConfig.js":
/*!*******************************!*\
  !*** ./src/lib/MainConfig.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.parsedConfig = exports.rawConfig = undefined;\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _ini = __webpack_require__(/*! ini */ \"ini\");\n\nvar _ini2 = _interopRequireDefault(_ini);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _globals = __webpack_require__(/*! ./globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _ip = __webpack_require__(/*! ip */ \"ip\");\n\nvar _ip2 = _interopRequireDefault(_ip);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst rawConfig = _fs2.default.readFileSync(_path2.default.resolve(globals.InstallationDir() + '/dsm/config.ini'), 'utf-8');\n\nconst parsedConfig = _ini2.default.parse(rawConfig);\n\nclass Option {\n  constructor(name, def, description, type) {\n    this.default = def;\n    this.description = description;\n    this.type = type;\n    this.name = name;\n    this.parse(def);\n    this.parse(parsedConfig[name]);\n  }\n  get value() {\n    return this._value;\n  }\n  set value(incValue) {\n    if (incValue) {\n      this.parse(incValue);\n    }\n  }\n  parse(unparsed) {\n    if (unparsed == null) return;\n    switch (this.type) {\n      case 'number':\n        this._value = parseInt(unparsed, 10);\n        break;\n      case 'boolean':\n        this._value = unparsed === 'true';\n        break;\n      case 'string':\n        this._value = String(unparsed);\n        break;\n      default:\n        this._value = unparsed;\n    }\n  }\n}\n\n// create object for each config option to support type checking, defaults, and required options.\n// then use a command to parse it all\nconst Config = {\n  MOTD: new Option(\"MOTD\", \"Welcome to the server, Enjoy!!\", 'Message to be displayed on user login', 'string'),\n  STEAM_DIR: new Option(\"STEAM_DIR\", \"steam\", 'directory relative to dsm installation for steam to be installed', 'string'),\n  STATUS_INTERVAL_MS: new Option(\"STATUS_INTERVAL_MS\", 1000 * 60 * 5, 'interval in MS to run the status check', 'number'),\n  BETA: new Option(\"BETA\", 'false', 'enable or disable BETA features', 'boolean'),\n  GALAXY_NAME: new Option(\"GALAXY_NAME\", 'MyGalaxy', 'Name of the galaxy', 'string'),\n  GALAXY_SAVE_DIRECTORY: new Option(\"GALAXY_SAVE_DIRECTORY\", '', 'folder the galaxies will be stored in, will be prepended to galaxy name. defaults to user directory ~/.avorion/galaxies for linux and %appdata%/Avorion/galaxies for windows', 'string'),\n  STARTUP_PARAMS: new Option(\"STARTUP_PARAMS\", '--public true --listed true --same-start-sector false', 'Parameters to be applied to server when starting. see \"dsm info\" for more info', 'string'),\n  // SERVER_PORT: new Option(\n  //   \"SERVER_PORT\",\n  //   27000,\n  //   'Port assigned to the game server',\n  //   'number'),\n  AUTO_RESTART: new Option(\"AUTO_RESTART\", 'true', 'if true will automatically restart the server when a crash is detected', 'boolean'),\n  WEB_PORT: new Option(\"WEB_PORT\", 8080, 'Port assigned to the Wen Interface', 'number'),\n  // GAME_IP_ADDRESS: new Option(\n  //   \"GAME_IP_ADDRESS\",\n  //   '',\n  //   'IP address to assign to the game server. defaults to localhost(home pcs) or default outward facing ip (servers)',\n  //   'string'),\n  WEB_IP_ADDRESS: new Option(\"WEB_IP_ADDRESS\", _ip2.default.isPrivate(_ip2.default.address()) ? 'localhost' : _ip2.default.address(), 'IP address to assign to the web server. defaults to localhost(home pcs) or default outward facing ip (servers)', 'string'),\n  TIME_TO_STATUS_FAILURE: new Option(\"TIME_TO_STATUS_FAILURE\", 30000, 'Time in MS to allow the server to go without responding to a status command. After this time period DSM will assume the server is unresponsive and force a restart.', 'number')\n  // const Write\n};exports.default = Config;\nexports.rawConfig = rawConfig;\nexports.parsedConfig = parsedConfig;\n\n//# sourceURL=webpack:///./src/lib/MainConfig.js?");

/***/ }),

/***/ "./src/lib/db.js":
/*!***********************!*\
  !*** ./src/lib/db.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.players = exports.server = exports.pid = undefined;\n\nvar _betterSqlite = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n\nvar _betterSqlite2 = _interopRequireDefault(_betterSqlite);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _globals = __webpack_require__(/*! ../lib/globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ColumnExists(table,column){\n//   const columns =  this.db.prepare(\"PRAGMA table_info(?)\")\n//     .all(table);\n//   return columns.filter(col=>col.name == column).length > 0\n// },\n\nconst common = {\n  open() {\n    this.db = new _betterSqlite2.default(_path2.default.resolve(globals.InstallationDir() + '/dsm/.storage/dsm.sqlite'));\n    server.init(this.db);\n    players.init(this.db);\n  },\n  close() {\n    this.db.close();\n  }\n};\nexports.default = common;\nconst pid = exports.pid = {\n  open() {\n    this.db = new _betterSqlite2.default(_path2.default.resolve(globals.InstallationDir() + '/dsm/.storage/pid.sqlite'));\n    this.db.prepare(`CREATE TABLE IF NOT EXISTS 'pid' (\n        'Name'\tINTEGER NOT NULL,\n        'PID'\tINTEGER NOT NULL UNIQUE,\n        'id'\tINTEGER AUTOINCREMENT UNIQUE,\n        PRIMARY KEY('id')\n      );`).run();\n  },\n  get(name) {\n    this.open();\n    this.db.prepare(\"SELECT FROM pid WHERE name=?\").run(pid);\n    this.close();\n  },\n  add(name, pid) {\n    this.open();\n    this.db.prepare(\"INSERT INTO pid (name, pid) VALUES (?,?)\").run(name, pid);\n    this.close();\n  },\n  remove(pid) {\n    this.open();\n    this.db.prepare(\"DELETE FROM pid WHERE pid=?\").run(pid);\n    this.close();\n  },\n  close() {\n    this.db.close();\n  }\n};\n\nconst server = exports.server = {\n  init(db) {\n    this.db = db;\n    this.db.prepare(`CREATE TABLE IF NOT EXISTS 'server' (\n        'numPlayers'\tINTEGER NOT NULL DEFAULT 0,\n        'lastAccess'\tINTEGER NOT NULL DEFAULT 0,\n        'id'\tINTEGER CHECK(id = 0) UNIQUE,\n        PRIMARY KEY('id')\n      );`).run();\n    this.db.prepare(`INSERT or REPLACE INTO \n    server (numPlayers, lastAccess, id) \n    VALUES ((SELECT numPlayers \n      FROM server \n      WHERE id=0)\n      ,?,0)`).run(Date.now());\n  },\n  incrementPlayers() {\n    this.db.prepare(\"UPDATE server SET numPlayers = numPlayers + 1 WHERE id=0\").run();\n  },\n  decrementPlayers() {\n    this.db.prepare(\"UPDATE server SET numPlayers = numPlayers - 1 WHERE id=0\").run();\n  },\n  getNumberPlayers() {\n    return this.db.prepare(\"SELECT numPlayers FROM server WHERE id=0\").get().numPlayers;\n  }\n};\n\nconst players = exports.players = {\n  init(db) {\n    this.db = db;\n    this.db.prepare(`CREATE TABLE IF NOT EXISTS 'players' (\n        'id'\tINTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        'playerID'\tINTEGER NOT NULL UNIQUE,\n        'name'\tTEXT NOT NULL,\n        'loggedIn'\tINTEGER,\n        'lastSeen'\tINTEGER\n      );`).run();\n  },\n  CreatePlayer(playerID, name) {\n    this.db.prepare(\"INSERT INTO players (playerID, name) VALUES (?,?)\").run(playerID, name);\n    console.log('Created Player:', name, 'in DB.');\n  },\n  PlayerExists(playerID) {\n    return this.db.prepare(\"SELECT 1 FROM players WHERE playerID=?\").get(playerID);\n  },\n  UpdatePlayerLogStatus(status, playerID) {\n    this.db.prepare(\"UPDATE players SET loggedIn = ? WHERE playerID = ?\").run(status, playerID);\n  }\n};\n\n//# sourceURL=webpack:///./src/lib/db.js?");

/***/ }),

/***/ "./src/lib/globals.js":
/*!****************************!*\
  !*** ./src/lib/globals.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.cleanPipeName = exports.InstallationDir = undefined;\n\nvar _os = __webpack_require__(/*! os */ \"os\");\n\nvar _os2 = _interopRequireDefault(_os);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Global function incase we need to change this in the future\nconst InstallationDir = exports.InstallationDir = () => {\n    if (true) return '.';\n    return _os2.default.homedir();\n};\n\nconst cleanPipeName = exports.cleanPipeName = str => {\n    if (process.platform === 'win32') {\n        str = str.replace(/^\\//, '');\n        str = str.replace(/\\//g, '-');\n        return '\\\\\\\\.\\\\pipe\\\\' + str;\n    } else {\n        return str;\n    }\n};\n\n//# sourceURL=webpack:///./src/lib/globals.js?");

/***/ }),

/***/ "./src/lib/localStorage.js":
/*!*********************************!*\
  !*** ./src/lib/localStorage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _globals = __webpack_require__(/*! ./globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _nodeLocalstorage = __webpack_require__(/*! node-localstorage */ \"node-localstorage\");\n\nvar _nodeLocalstorage2 = _interopRequireDefault(_nodeLocalstorage);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet localStorage;\nif (typeof localStorage === \"undefined\" || localStorage === null) {\n  localStorage = new _nodeLocalstorage2.default.LocalStorage(_path2.default.resolve(globals.InstallationDir() + '/dsm/.storage'));\n}\n\nexports.default = localStorage;\n\n// length\n// setItem(key, value)\n// getItem(key)\n// removeItem(key)\n// key(n)\n// clear()\n\n\n// let MyLocalStorage = {}\n// export const setItem = MyLocalStorage.setItem = (key, value) => {\n//   localStorage.setItem(key, value);\n// }\n\n//# sourceURL=webpack:///./src/lib/localStorage.js?");

/***/ }),

/***/ "./src/lib/logger.js":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Chat = exports.Web = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _globals = __webpack_require__(/*! ./globals */ \"./src/lib/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Logger = {\n  logFile: _path2.default.resolve(globals.InstallationDir() + '/dsm/logs/avorion.txt'),\n  init() {\n    if (!this.stream) {\n      //Create FD\n      this.fd = _fs2.default.openSync(this.logFile, 'a');\n      this.stream = _fs2.default.createWriteStream(null, { fd: this.fd });\n    }\n  },\n  log(msg) {\n    this.stream.write(msg + '\\n');\n    // console.log(fs.fstatSync(this.fd).size)\n  },\n  clear() {\n    _fs2.default.truncateSync(this.logFile);\n  },\n  rotate(output) {}\n};\nexports.default = Logger;\nconst Web = exports.Web = _extends({}, Logger, {\n  logFile: _path2.default.resolve(globals.InstallationDir() + '/dsm/logs/web.txt')\n});\n\nconst Chat = exports.Chat = _extends({}, Logger, {\n  logFile: _path2.default.resolve(globals.InstallationDir() + '/dsm/logs/chat.txt')\n});\n\n//# sourceURL=webpack:///./src/lib/logger.js?");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"better-sqlite3\");\n\n//# sourceURL=webpack:///external_%22better-sqlite3%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "ini":
/*!**********************!*\
  !*** external "ini" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ini\");\n\n//# sourceURL=webpack:///external_%22ini%22?");

/***/ }),

/***/ "ip":
/*!*********************!*\
  !*** external "ip" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ip\");\n\n//# sourceURL=webpack:///external_%22ip%22?");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"net\");\n\n//# sourceURL=webpack:///external_%22net%22?");

/***/ }),

/***/ "node-localstorage":
/*!************************************!*\
  !*** external "node-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-localstorage\");\n\n//# sourceURL=webpack:///external_%22node-localstorage%22?");

/***/ }),

/***/ "node-pty":
/*!***************************!*\
  !*** external "node-pty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-pty\");\n\n//# sourceURL=webpack:///external_%22node-pty%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pretty-ms":
/*!****************************!*\
  !*** external "pretty-ms" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pretty-ms\");\n\n//# sourceURL=webpack:///external_%22pretty-ms%22?");

/***/ })

/******/ });
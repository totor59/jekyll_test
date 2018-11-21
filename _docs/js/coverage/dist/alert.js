(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Alert = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var cov_a50ahyrel = function () {
    var path = "/var/www/html/sass_test/js/src/alert.js",
        hash = "265c4b04aa6df4f761e52d5303cbb765dbf134b8",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/var/www/html/sass_test/js/src/alert.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 181,
            column: 5
          }
        },
        "1": {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 18,
            column: 37
          }
        },
        "2": {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "3": {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 40
          }
        },
        "4": {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 21,
            column: 44
          }
        },
        "5": {
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "6": {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 40
          }
        },
        "7": {
          start: {
            line: 25,
            column: 19
          },
          end: {
            line: 27,
            column: 3
          }
        },
        "8": {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 33,
            column: 3
          }
        },
        "9": {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 39,
            column: 3
          }
        },
        "10": {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 29
          }
        },
        "11": {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 55,
            column: 20
          }
        },
        "12": {
          start: {
            line: 61,
            column: 24
          },
          end: {
            line: 61,
            column: 37
          }
        },
        "13": {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 64,
            column: 7
          }
        },
        "14": {
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 63,
            column: 51
          }
        },
        "15": {
          start: {
            line: 66,
            column: 26
          },
          end: {
            line: 66,
            column: 62
          }
        },
        "16": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        },
        "17": {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 69,
            column: 14
          }
        },
        "18": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 38
          }
        },
        "19": {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 76,
            column: 43
          }
        },
        "20": {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 26
          }
        },
        "21": {
          start: {
            line: 83,
            column: 23
          },
          end: {
            line: 83,
            column: 59
          }
        },
        "22": {
          start: {
            line: 84,
            column: 23
          },
          end: {
            line: 84,
            column: 28
          }
        },
        "23": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        },
        "24": {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 87,
            column: 49
          }
        },
        "25": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        },
        "26": {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 61
          }
        },
        "27": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 19
          }
        },
        "28": {
          start: {
            line: 98,
            column: 25
          },
          end: {
            line: 98,
            column: 45
          }
        },
        "29": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 36
          }
        },
        "30": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 23
          }
        },
        "31": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 44
          }
        },
        "32": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        "33": {
          start: {
            line: 108,
            column: 8
          },
          end: {
            line: 108,
            column: 37
          }
        },
        "34": {
          start: {
            line: 109,
            column: 8
          },
          end: {
            line: 109,
            column: 14
          }
        },
        "35": {
          start: {
            line: 112,
            column: 33
          },
          end: {
            line: 112,
            column: 79
          }
        },
        "36": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 116,
            column: 49
          }
        },
        "37": {
          start: {
            line: 115,
            column: 45
          },
          end: {
            line: 115,
            column: 81
          }
        },
        "38": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 123,
            column: 17
          }
        },
        "39": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 141,
            column: 8
          }
        },
        "40": {
          start: {
            line: 130,
            column: 25
          },
          end: {
            line: 130,
            column: 32
          }
        },
        "41": {
          start: {
            line: 131,
            column: 25
          },
          end: {
            line: 131,
            column: 48
          }
        },
        "42": {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 136,
            column: 9
          }
        },
        "43": {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 134,
            column: 32
          }
        },
        "44": {
          start: {
            line: 135,
            column: 10
          },
          end: {
            line: 135,
            column: 39
          }
        },
        "45": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        },
        "46": {
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 139,
            column: 28
          }
        },
        "47": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 151,
            column: 7
          }
        },
        "48": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 148,
            column: 9
          }
        },
        "49": {
          start: {
            line: 147,
            column: 10
          },
          end: {
            line: 147,
            column: 32
          }
        },
        "50": {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 33
          }
        },
        "51": {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 165,
            column: 3
          }
        },
        "52": {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 173,
            column: 49
          }
        },
        "53": {
          start: {
            line: 174,
            column: 2
          },
          end: {
            line: 174,
            column: 32
          }
        },
        "54": {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        "55": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 35
          }
        },
        "56": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 33
          }
        },
        "57": {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 14
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 15
            },
            end: {
              line: 11,
              column: 16
            }
          },
          loc: {
            start: {
              line: 11,
              column: 22
            },
            end: {
              line: 181,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 48,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          },
          loc: {
            start: {
              line: 48,
              column: 25
            },
            end: {
              line: 50,
              column: 5
            }
          },
          line: 48
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 54,
              column: 4
            },
            end: {
              line: 54,
              column: 5
            }
          },
          loc: {
            start: {
              line: 54,
              column: 25
            },
            end: {
              line: 56,
              column: 5
            }
          },
          line: 54
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 60,
              column: 5
            }
          },
          loc: {
            start: {
              line: 60,
              column: 19
            },
            end: {
              line: 73,
              column: 5
            }
          },
          line: 60
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 75,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          },
          loc: {
            start: {
              line: 75,
              column: 14
            },
            end: {
              line: 78,
              column: 5
            }
          },
          line: 75
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 82,
              column: 5
            }
          },
          loc: {
            start: {
              line: 82,
              column: 29
            },
            end: {
              line: 95,
              column: 5
            }
          },
          line: 82
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          },
          loc: {
            start: {
              line: 97,
              column: 32
            },
            end: {
              line: 102,
              column: 5
            }
          },
          line: 97
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          },
          loc: {
            start: {
              line: 104,
              column: 28
            },
            end: {
              line: 117,
              column: 5
            }
          },
          line: 104
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 115,
              column: 34
            },
            end: {
              line: 115,
              column: 35
            }
          },
          loc: {
            start: {
              line: 115,
              column: 45
            },
            end: {
              line: 115,
              column: 81
            }
          },
          line: 115
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          },
          loc: {
            start: {
              line: 119,
              column: 29
            },
            end: {
              line: 124,
              column: 5
            }
          },
          line: 119
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 128,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          },
          loc: {
            start: {
              line: 128,
              column: 36
            },
            end: {
              line: 142,
              column: 5
            }
          },
          line: 128
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 129,
              column: 23
            },
            end: {
              line: 129,
              column: 24
            }
          },
          loc: {
            start: {
              line: 129,
              column: 35
            },
            end: {
              line: 141,
              column: 7
            }
          },
          line: 129
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 144,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          },
          loc: {
            start: {
              line: 144,
              column: 41
            },
            end: {
              line: 152,
              column: 5
            }
          },
          line: 144
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 145,
              column: 13
            },
            end: {
              line: 145,
              column: 14
            }
          },
          loc: {
            start: {
              line: 145,
              column: 30
            },
            end: {
              line: 151,
              column: 7
            }
          },
          line: 145
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 175,
              column: 27
            },
            end: {
              line: 175,
              column: 28
            }
          },
          loc: {
            start: {
              line: 175,
              column: 39
            },
            end: {
              line: 178,
              column: 3
            }
          },
          line: 175
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 62,
              column: 6
            },
            end: {
              line: 64,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 62,
              column: 6
            },
            end: {
              line: 64,
              column: 7
            }
          }, {
            start: {
              line: 62,
              column: 6
            },
            end: {
              line: 64,
              column: 7
            }
          }],
          line: 62
        },
        "1": {
          loc: {
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 70,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 70,
              column: 7
            }
          }, {
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 70,
              column: 7
            }
          }],
          line: 68
        },
        "2": {
          loc: {
            start: {
              line: 86,
              column: 6
            },
            end: {
              line: 88,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 86,
              column: 6
            },
            end: {
              line: 88,
              column: 7
            }
          }, {
            start: {
              line: 86,
              column: 6
            },
            end: {
              line: 88,
              column: 7
            }
          }],
          line: 86
        },
        "3": {
          loc: {
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          }, {
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          }],
          line: 90
        },
        "4": {
          loc: {
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }, {
            start: {
              line: 107,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }],
          line: 107
        },
        "5": {
          loc: {
            start: {
              line: 133,
              column: 8
            },
            end: {
              line: 136,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 133,
              column: 8
            },
            end: {
              line: 136,
              column: 9
            }
          }, {
            start: {
              line: 133,
              column: 8
            },
            end: {
              line: 136,
              column: 9
            }
          }],
          line: 133
        },
        "6": {
          loc: {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 140,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 140,
              column: 9
            }
          }, {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 140,
              column: 9
            }
          }],
          line: 138
        },
        "7": {
          loc: {
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 148,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 148,
              column: 9
            }
          }, {
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 148,
              column: 9
            }
          }],
          line: 146
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = (cov_a50ahyrel.s[0]++, function ($$$1) {
    cov_a50ahyrel.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_a50ahyrel.s[1]++, 'alert');
    var VERSION = (cov_a50ahyrel.s[2]++, '4.1.3');
    var DATA_KEY = (cov_a50ahyrel.s[3]++, 'bs.alert');
    var EVENT_KEY = (cov_a50ahyrel.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_a50ahyrel.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_a50ahyrel.s[6]++, $$$1.fn[NAME]);
    var Selector = (cov_a50ahyrel.s[7]++, {
      DISMISS: '[data-dismiss="alert"]'
    });
    var Event = (cov_a50ahyrel.s[8]++, {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_a50ahyrel.s[9]++, {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Alert =
    /*#__PURE__*/
    function () {
      function Alert(element) {
        cov_a50ahyrel.f[1]++;
        cov_a50ahyrel.s[10]++;
        this._element = element;
      } // Getters


      var _proto = Alert.prototype;

      // Public
      _proto.close = function close(element) {
        cov_a50ahyrel.f[3]++;
        var rootElement = (cov_a50ahyrel.s[12]++, this._element);
        cov_a50ahyrel.s[13]++;

        if (element) {
          cov_a50ahyrel.b[0][0]++;
          cov_a50ahyrel.s[14]++;
          rootElement = this._getRootElement(element);
        } else {
          cov_a50ahyrel.b[0][1]++;
        }

        var customEvent = (cov_a50ahyrel.s[15]++, this._triggerCloseEvent(rootElement));
        cov_a50ahyrel.s[16]++;

        if (customEvent.isDefaultPrevented()) {
          cov_a50ahyrel.b[1][0]++;
          cov_a50ahyrel.s[17]++;
          return;
        } else {
          cov_a50ahyrel.b[1][1]++;
        }

        cov_a50ahyrel.s[18]++;

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        cov_a50ahyrel.f[4]++;
        cov_a50ahyrel.s[19]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_a50ahyrel.s[20]++;
        this._element = null;
      }; // Private


      _proto._getRootElement = function _getRootElement(element) {
        cov_a50ahyrel.f[5]++;
        var selector = (cov_a50ahyrel.s[21]++, Util.getSelectorFromElement(element));
        var parent = (cov_a50ahyrel.s[22]++, false);
        cov_a50ahyrel.s[23]++;

        if (selector) {
          cov_a50ahyrel.b[2][0]++;
          cov_a50ahyrel.s[24]++;
          parent = document.querySelector(selector);
        } else {
          cov_a50ahyrel.b[2][1]++;
        }

        cov_a50ahyrel.s[25]++;

        if (!parent) {
          cov_a50ahyrel.b[3][0]++;
          cov_a50ahyrel.s[26]++;
          parent = $$$1(element).closest("." + ClassName.ALERT)[0];
        } else {
          cov_a50ahyrel.b[3][1]++;
        }

        cov_a50ahyrel.s[27]++;
        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        cov_a50ahyrel.f[6]++;
        var closeEvent = (cov_a50ahyrel.s[28]++, $$$1.Event(Event.CLOSE));
        cov_a50ahyrel.s[29]++;
        $$$1(element).trigger(closeEvent);
        cov_a50ahyrel.s[30]++;
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        cov_a50ahyrel.f[7]++;
        cov_a50ahyrel.s[31]++;
        $$$1(element).removeClass(ClassName.SHOW);
        cov_a50ahyrel.s[32]++;

        if (!$$$1(element).hasClass(ClassName.FADE)) {
          cov_a50ahyrel.b[4][0]++;
          cov_a50ahyrel.s[33]++;

          this._destroyElement(element);

          cov_a50ahyrel.s[34]++;
          return;
        } else {
          cov_a50ahyrel.b[4][1]++;
        }

        var transitionDuration = (cov_a50ahyrel.s[35]++, Util.getTransitionDurationFromElement(element));
        cov_a50ahyrel.s[36]++;
        $$$1(element).one(Util.TRANSITION_END, function (event) {
          cov_a50ahyrel.f[8]++;
          cov_a50ahyrel.s[37]++;
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };

      _proto._destroyElement = function _destroyElement(element) {
        cov_a50ahyrel.f[9]++;
        cov_a50ahyrel.s[38]++;
        $$$1(element).detach().trigger(Event.CLOSED).remove();
      }; // Static


      Alert._jQueryInterface = function _jQueryInterface(config) {
        cov_a50ahyrel.f[10]++;
        cov_a50ahyrel.s[39]++;
        return this.each(function () {
          cov_a50ahyrel.f[11]++;
          var $element = (cov_a50ahyrel.s[40]++, $$$1(this));
          var data = (cov_a50ahyrel.s[41]++, $element.data(DATA_KEY));
          cov_a50ahyrel.s[42]++;

          if (!data) {
            cov_a50ahyrel.b[5][0]++;
            cov_a50ahyrel.s[43]++;
            data = new Alert(this);
            cov_a50ahyrel.s[44]++;
            $element.data(DATA_KEY, data);
          } else {
            cov_a50ahyrel.b[5][1]++;
          }

          cov_a50ahyrel.s[45]++;

          if (config === 'close') {
            cov_a50ahyrel.b[6][0]++;
            cov_a50ahyrel.s[46]++;
            data[config](this);
          } else {
            cov_a50ahyrel.b[6][1]++;
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        cov_a50ahyrel.f[12]++;
        cov_a50ahyrel.s[47]++;
        return function (event) {
          cov_a50ahyrel.f[13]++;
          cov_a50ahyrel.s[48]++;

          if (event) {
            cov_a50ahyrel.b[7][0]++;
            cov_a50ahyrel.s[49]++;
            event.preventDefault();
          } else {
            cov_a50ahyrel.b[7][1]++;
          }

          cov_a50ahyrel.s[50]++;
          alertInstance.close(this);
        };
      };

      _createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          cov_a50ahyrel.f[2]++;
          cov_a50ahyrel.s[11]++;
          return VERSION;
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_a50ahyrel.s[51]++;
    $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_a50ahyrel.s[52]++;
    $$$1.fn[NAME] = Alert._jQueryInterface;
    cov_a50ahyrel.s[53]++;
    $$$1.fn[NAME].Constructor = Alert;
    cov_a50ahyrel.s[54]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_a50ahyrel.f[14]++;
      cov_a50ahyrel.s[55]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_a50ahyrel.s[56]++;
      return Alert._jQueryInterface;
    };

    cov_a50ahyrel.s[57]++;
    return Alert;
  }($));

  return Alert;

})));
//# sourceMappingURL=alert.js.map

'use strict';

let di = require('core/di');
let moduleName = require('../module-name');
const onError = require('./error');
const IonError = require('core/IonError');
const Errors = require('../errors/backend');

module.exports = function (res, cb, required) {
  var scope = di.context(moduleName);
  if (!scope) {
    return onError(scope, new IonError(Errors.NO_DI, {moduleName}), res, true);
  }
  if (Array.isArray(required)) {
    for (var i = 0; i < required.length; i++) {
      if (typeof scope[required[i]] === 'undefined' || !scope[required[i]]) {
        return onError(scope, new IonError(Errors.NO_MODULE, {module: required[i]}), res, true);
      }
    }
  }
  cb(scope);
};

/**
 * Created by kalias_90 on 14.09.17.
 */

'use strict';

const ionAdmin = require('../../index');
const accessResources = require('../../access-resources');
const respond = require('../../backend/respond');
const onError = require('../../backend/error');
const __ = require('core/strings').unprefix('i18n');

const TEMPLATE = 'schedule/job';

module.exports = function (req, res) {
  ionAdmin.can(req, res, accessResources.schedule.id).then(() => {
    respond(res, (scope) => {
      try {
        ionAdmin.render(TEMPLATE, {
          req, res,
          title: __('Новое задание')
        });
      } catch (err) {
        onError(scope, err, res, true);
      }
    });
  }).catch((err) => {
    ionAdmin.renderError(req, res, err);
  });
};

'use strict';

const ionAdmin = require('../../index');
const accessResources = require('../../access-resources');
const __ = require('core/strings').unprefix('i18n');

exports.sync = function (req, res) {
  ionAdmin.can(req, res, accessResources.securitySync.id).then(permissions => {
    try {
      ionAdmin.render('security/sync', {
        req, res,
        title: __('Синхронизация'),
        permissions
      });
    } catch (err) {
      ionAdmin.renderError(req, res, err);
    }
  }).catch(err => {
    ionAdmin.renderError(req, res, err);
  });
};

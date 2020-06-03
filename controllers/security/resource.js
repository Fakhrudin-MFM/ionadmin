'use strict';

const ionAdmin = require('../../index');
const accessResources = require('../../access-resources');
const Permissions = require('core/Permissions');
const model = "security/resource";
const path = `${model}/`;
const __ = require('core/strings').unprefix('i18n');

exports.index = function (req, res) {
  ionAdmin.can(req, res, accessResources.securityResources.id).then(permissions => {
    ionAdmin.render(path, {
      req, res,
      title: __('Ресурсы'),
      pageCode: model,
      permissions
    });
  }).catch(err => {
    ionAdmin.renderError(req, res, err);
  });
};

exports.create = function (req, res) {
  ionAdmin.can(req, res, accessResources.securityResources.id, Permissions.WRITE).then(permissions => {
    ionAdmin.render(`${path}form`, {
      req, res,
      title: __('Создать ресурс'),
      pageCode: model,
      scenario: 'create',
      permissions
    });
  }).catch(err => {
    ionAdmin.renderError(req, res, err);
  });
};

exports.update = function (req, res) {
  ionAdmin.can(req, res, accessResources.securityResources.id, Permissions.WRITE).then(permissions => {
    ionAdmin.render(`${path}form`, {
      req, res,
      title: __('Редактировать ресурс'),
      pageCode: model,
      scenario: 'update',
      permissions
    });
  }).catch(err => {
    ionAdmin.renderError(req, res, err);
  });
};

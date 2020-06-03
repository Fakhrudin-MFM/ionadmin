const ionAdmin = require('../../index');
const accessResources = require('../../access-resources');
const __ = require('core/strings').unprefix('i18n');

exports.index = (req, res) => {
  const result = {
    req, res,
    title: __('Журнал доступа'),
    types: ionAdmin.getScope().authLogger.types()
  };
  return ionAdmin.can(req, res, accessResources.authlog.id)
    .then(() => ionAdmin.getScope().accounts.list([], true))
    .then((users) => {
      result.users = users.sort((aa, bb) => aa.name().localeCompare(bb.name()));
      result.types = ionAdmin.getScope().authLogger.types();
      return ionAdmin.render('authlog/index', result);
    })
    .catch(err => ionAdmin.renderError(req, res, err));
};

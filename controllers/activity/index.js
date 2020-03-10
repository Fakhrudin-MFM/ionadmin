const ionAdmin = require('../../index');
const accessResources = require('../../access-resources');
const title = 'Активность';

exports.index = (req, res) => {
  ionAdmin.can(req, res, accessResources.activity.id)
    .then(() => ionAdmin.getScope().accounts.list(null, true))
    .then(users => users.sort((a, b) => a.name().localeCompare(b.name())))
    .then(users => ionAdmin.render('activity/index', {req, res, title, users}))
    .catch(err => ionAdmin.renderError(req, res, err));
};
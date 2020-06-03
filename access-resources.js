const __ = require('core/strings').unprefix('i18n');

module.exports = {
  dashboard: {
    id: 'ionadmin:::dashboard',
    name: __('Контрольная панель')
  },
  securityUsers: {
    id: 'ionadmin:::security-users',
    name: __('Безопасность Пользователи')
  },
  securityRoles: {
    id: 'ionadmin:::security-roles',
    name: __('Безопасность Роли')
  },
  securityResources: {
    id: 'ionadmin:::security-resources',
    name: __('Безопасность Ресурсы')
  },
  securitySync: {
    id: 'ionadmin:::security-sync',
    name: __('Безопасность Синхронизация')
  },
  profilingSlowQuery: {
    id: 'ionadmin:::profiling-slow-query',
    name: __('Профилирование Медленные запросы')
  },
  activity: {
    id: 'ionadmin:::activity',
    name: __('Активность')
  },
  changelog: {
    id: 'ionadmin:::changelog',
    name: __('Журнал изменений')
  },
  accesslog: {
    id: 'ionadmin:::accesslog',
    name: __('Журнал разрешений')
  },
  authlog: {
    id: 'ionadmin:::authlog',
    name: __('Журнал доступа')
  },
  token: {
    id: 'ionadmin:::token',
    name: __('Генератор токенов безопасности')
  },
  backup: {
    id: 'ionadmin:::backup',
    name: __('Резервирование')
  },
  schedule: {
    id: 'ionadmin:::schedule',
    name: __('Задания по расписанию')
  },
  wstoken: {
    id: 'ws:::gen-ws-token',
    name: __('Генерация токенов безопасности посредством веб-сервисов')
  },
  recache: {
    id: 'ionadmin:::recache',
    name: __('Пересчет кешей семантики')
  },
  notify: {
    id: 'ionadmin:::notify',
    name: __('Уведомления')
  }
};

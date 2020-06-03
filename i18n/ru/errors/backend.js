const codes = require('../../../errors/backend');

module.exports = {
  [codes.FILE_EXIST]: 'Файл %name уже существует',
  [codes.BACKUP_FAIL]: 'Процесс резервирования был прерван.',
  [codes.NO_DI]: 'Не найден DI-контейнер %moduleName',
  [codes.NO_MODULE]: 'Не настроен необходимый компонент %module'
};

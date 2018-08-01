'use strict';

var _index = require('./index');

var index = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('text-field/index', function () {
  [{
    name: 'default',
    value: expect.any(Function)
  }].forEach(function (_ref) {
    var name = _ref.name,
        value = _ref.value;

    it('exports ' + name, function () {
      expect(index).toHaveProperty(name, value);
    });
  });
});

//# sourceMappingURL=index.test.js.map
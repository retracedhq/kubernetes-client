'use strict';

const ApiGroup = require('./api-group');

class Rbac extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'clusterroles',
      'clusterrolebindings',
      'roles',
      'rolebindings'
    ];
    options = Object.assign({}, options, {
      path: 'apis/rbac.authorization.k8s.io',
      version: options.version || 'v1alpha1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Rbac;

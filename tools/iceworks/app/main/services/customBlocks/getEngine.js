const MaterialEngine = require('@iceland/material-engine').default;
const { icelandStatStorage } = require('../storage');
const logger = require('../../logger');
const glodlog = require('../../glodlog');
const settings = require('../settings');

module.exports = (materialData) => {
  const sourceType = 'react';
  const classes = (materialData.classes || []).filter((item) => item.sourceType === sourceType);
  const categories = (materialData.categories || []).filter((item) => item.sourceType === sourceType);
  const instances = (materialData.instances || []).filter((item) => {
    return classes.find((oneClass) => {
      return oneClass.name === item.materialName;
    });
  });

  const isAlibaba = settings.get('isAlibaba');
  const currentDate = new Date().toDateString();
  const prevDate = icelandStatStorage.get();
  if (prevDate !== currentDate) {
    logger.debug('dav record');
    icelandStatStorage.set(currentDate);
    glodlog.record({
      type: 'app',
      action: 'iceland-dau',
      data: {
        group: isAlibaba ? 'alibaba' : 'outer',
      },
    });
  }
  glodlog.record({
    type: 'app',
    action: 'iceland-open-workbench',
    data: {
      group: isAlibaba ? 'alibaba' : 'outer',
    },
  });

  return new MaterialEngine(
    materialData.sources || [],
    classes,
    instances,
    categories,
    sourceType
  );
};

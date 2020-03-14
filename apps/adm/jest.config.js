module.exports = {
  name: 'adm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};

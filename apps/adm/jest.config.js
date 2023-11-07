module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/adm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  displayName: 'adm',
};

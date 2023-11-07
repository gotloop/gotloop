module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/simpl',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  displayName: 'simpl',
};

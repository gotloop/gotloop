module.exports = {
  name: 'simpl',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/simpl',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};

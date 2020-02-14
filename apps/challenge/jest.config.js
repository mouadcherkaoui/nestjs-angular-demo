module.exports = {
  name: 'challenge',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/challenge',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

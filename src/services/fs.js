import RNFetchBlob from 'rn-fetch-blob';
const fileSystem = RNFetchBlob.fs;

export default values => {
  const headerString = 'worry,status,solve,favourite\n';
  const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
  const csvString = `${headerString}${rowString}`;
  const path = fileSystem.dirs.DownloadDir + '/worries.csv';

  fileSystem.writeFile(path, csvString, 'utf8').then(res => {
    console.log('res', res);
  });
};

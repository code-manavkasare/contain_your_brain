import RNFetchBlob from 'rn-fetch-blob';
import FileViewer from 'react-native-file-viewer';

const fileSystem = RNFetchBlob.fs;

export default async values => {
  const headerString = 'worry,status,solve,favourite\n';
  const rowString = values
    .map(d => `${d.worry},${d.status},${d.solve},${d.favourite}\n`)
    .join('');
  const csvString = `${headerString}${rowString}`;
  const path = fileSystem.dirs.DocumentDir + '/worries.csv';
  await fileSystem.writeFile(path, csvString, 'utf8');
  await FileViewer.open(path);
};

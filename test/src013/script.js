// 例外処理によりリソース管理

const PATH = './foo.dat';


openFile(PATH);
try {
  FileSystemWritableFileStream(PATH);
} catch (e) {
  closeFile(PATH);
}

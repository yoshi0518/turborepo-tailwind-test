const aspidaConfig = {
  input: 'src/libs/fakeApi', // 自動生成ファイルの出力先
  openapi: { inputFile: 'https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json' }, // InputにするOpenApi Jsonファイル
};

module.exports = aspidaConfig;

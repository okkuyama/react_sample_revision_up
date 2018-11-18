#!/bin/sh

# npmインストール
yarn install

# 本番向けビルド（./dist フォルダ以下に公開ファイルが生成される）
yarn run build

# リビジョンNOを生成
revision=`date +"%Y%m%d%I%M%S"`

# index.htmlのjavascriptグローバル変数`g_revision`にリビジョンNOをセット
sed -i -e "s/g_revision=\"0\"/g_revision=\"$revision\"/g" ./dist/index.html

# revision.jsonファイルを作成しリビジョンNOをセット
echo "{\"revision\": \"$revision\"}" > ./dist/revision.json

# ビルドしたソース一式をWEBサーバーへ配置
# scp ./dist/* {WEBサーバーホスト名}:{ドキュメントルートパス} -i ~/.ssh/id_rsa -r

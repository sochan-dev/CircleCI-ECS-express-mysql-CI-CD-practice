# docker で Next.js×Express×Mysql のアプリケーションを構築。Express×Mysql×phpmyadmin 編　（nodemon）

TypeScript,Eslint,Prettier を使用

## 環境構築手順

git pull でソースコード pull

```
git pull https://github.com/sochan-dev/docker-practice-backend-express-mysql.git
```

イメージのプルとコンテナの作成

```
docker-compose up -d

```

command: ash -c 'yarn && yarn dev'により、<br/>
パッケージインストールと起動も行われる。

## コンテナ起動（docker-compose up -d 以降）

docker-compose up して docker-stop だとコンテナが増え続ける。<br/>
一度作ったコンテナを起動する際は start を使う。

```
docker-compose start -d
```

## docker ファイルを更新した場合

```
docker-compose build --no-cache
```

これでキャッシュを使わずにイメージを再ビルドできる。

## 気を付けた点

### mysql のコンテナが起動しない

バージョンが 5.7 だとどうしても起動しなかった。
バージョンを変えて解決

```
 image: mysql:5.7.16
```

### nodemon が検知してくれず、ホットリロードされない

docker コンテナ上だと nodemon が動かずホットリロードされない。<br/>
docker-compose.yml に以下の設定を加えて解決

```
express:
      CHOKIDAR_USEPOLLING: 1
```

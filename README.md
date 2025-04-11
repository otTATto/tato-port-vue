# ポートフォリオサイト（Vue）

ポートフォリオサイト [**tato-port**](https://github.com/otTATto/tato-port) を **Vue** w/ **TypeScript** で再構築する。

# 開発について

## ［推奨］`docker compose` を使う方法

1. 以下を実行して Docker イメージ `vue:1.0` の有無を確認する

    ```bash
    docker images
    ```

2. `vue:1.0` が存在 **しない** 場合は [**## 1️⃣ 初回の場合**](#1️⃣-初回の場合) に進み、既に存在 **する** 場合は [**## 2️⃣ 回目以降の場合**](#2️⃣-回目以降の場合) に進む（また、そもそも `docker compose` を使用しない方法を使う場合は [**## ［非推奨］`docker compose` を使わない方法**](#非推奨docker-compose-を使わない方法) を行ってください）

### 1️⃣ 初回の場合

3. ルートディレクトリ内で以下を実行し、Docker コンテナをビルドして中に入る

    ```bash
    docker compose up --build
    ```

4. `./docker/frontend/Dockerfile` がビルドされ、ローカル開発サーバーが立ち上がる
5. 🎉 ホスト OS のブラウザから **http://localhost:5173/** にアクセスして、開発開始！

### 2️⃣ 回目以降の場合

3. `./frontend/` 内で以下を実行し、Docker コンテナに入る

    ```bash
    docker compose up
    ```

4. ビルド済のコンテナ `vue:1.0` に入り、ローカル開発サーバーが立ち上がる
5. 🎉 ホスト OS のブラウザから **http://localhost:5173/** にアクセスして、開発開始！

## ［非推奨］`docker compose` を使わない方法

1. `./.docker/frontend/` 内において以下を実行し、Dockerfile をビルドする

    ```bash
    docker build -t vue:1.0 .
    ```

2. 以下を実行し、Vite によるローカル開発サーバーを立てる

    ```bash
    docker run --rm -it -p 5173:5173 -v ${PWD}:/src vue:1.0 sh
    ```

3. 以下を実行し、Vite によるローカル開発サーバーを立てる

    ```bash
    npm run dev -- --host --force
    ```

4. 🎉 ホスト OS のブラウザから **http://localhost:5173/** にアクセスして、開発開始！

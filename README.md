# ポートフォリオサイト（Vue）

ポートフォリオサイト [**tato-port**](https://github.com/otTATto/tato-port) を **Vue** w/ **TypeScript** で再構築する。

# 開発について

1. `./frontend/` 内で以下を実行し、Docker コンテナに入る

    ```bash
    docker run --rm -it -p 5173:5173 -v ${PWD}:/src vue:1.0 sh
    ```

2. その後、以下を実行し、Vite によるローカル開発サーバーを立てる

    ```bash
    npm run dev -- --host
    ```

3. ホスト OS から http://localhost:5173/ にアクセスする

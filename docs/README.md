# javascript-lesson
JavaScript Ajax lesson

- JavaScriptでAjax通信をする。バックエンドの実装は`Django REST Framework`で行うものとする

- いいねボタンを作るのに必要だった。
    いいねボタンの作成に関しては[https://github.com/yoshiyuki-140/like-button](https://github.com/yoshiyuki-140/like-button)で実験中を参照

- 非同期処理をしないと、いいねボタンを押すたびに画面全体をリフレッシュしないといけなくなり、ユーザビリティーが下がる。(ダサい)

- バックエンドのAPIは[これ](https://github.com/yoshiyuki-140/django-rest-api-lesson)を改造したものにするつもり

- 基本的に非同期によるいいねボタンの処理作成を目標とするが、
  今までJavaScriptはドメイン知識でさらっと書いていたため、ちょうどよい機会だから、`本格入門`してみる。

# 参考書籍

- [JavaScript本格入門](https://gihyo.jp/book/2023/978-4-297-13288-0)
# SRP_AutoFillExtension

## ことわり
Chromeのセキュリティーのこととかよくわからないので自己責任で利用してください。  
東北大学の学生向けです。

## 概要
Chrome拡張機能です。  
学務情報システムにログインするときのイメージマトリクス認証(3枚のイラストをクリックする過程)が本当に面倒だったため自動で入力されるようなものを作成しました。
ダウンロードして自分のパスワードに対応するようにjsファイルを少し書き換えるだけで簡単に実装できます。  

## 使い方
### KeyWords(自分で調べるときの参考に)
- Javascript
- 自作Chrome拡張

※macは確認してません
### Windowsの場合
#### イメージ(パスワード)の確認と設定
1. `AutoKeyFill`のフォルダー内にあるファイルをすべてダウンロードする
1. SRPで東北大IDとパスワードを入力しイメージマトリクス認証のページを開く
1. F12を押下または右クリックして検証を選択
1. ページ内の要素を選択して検査(Ctrl+Shift+C)をクリックし，イラストをクリックする![ページ内の要素を選択](https://github.com/suzuyuyuyu/SRP_AutoFillExtension/assets/133082232/f2d4de1f-33fe-4916-9688-df133254ae30)
<br><br>
1. 検査画面で`<div~`からはじまり`</div>`でおわっているところから`image:url('/idp/tenant/0/images/imatrix/d1.gif')`を探す![HTML要素の確認](https://github.com/suzuyuyuyu/SRP_AutoFillExtension/assets/133082232/680f7d5a-aaf2-4895-9282-d6313258dd10)
<br><br>
1. ここでの`d1`が対象のファイル名なのでこれを`script.js`の43行目あたりに記録する

これを3つの自分のパスワードを構成するイラストに対して行う

#### Chrome拡張機能の実装  

フォルダーの構造
```
AutoKeyFill/
├── asset/
│   ├── TOHOKU_logo_12.png
│   ├── TOHOKU_logo_48.png
│   └── TOHOKU_logo_128.png
├── manifest.json
├── script.js
└── style.css
```

1. 上の図のような構造・ファイル名でフォルダーが構成されていることを確認する(フォルダーは一つにまとめること)
1. Chromeを開く
1. 拡張機能(ブラウザ右上)の管理ページから「パッケージ化されていない拡張機能を読み込む」をクリックし，上図のフォルダーを選択する

## Contact
質問はお気軽にどうぞ


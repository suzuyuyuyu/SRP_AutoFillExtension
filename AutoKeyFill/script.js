window.onload = function() {
    // 東北大ID入力画面でエラーを出力しないためのif文
    if (this.document.getElementById('button0') == null) {
        ;
    }else {
        // 画像(イラスト)に対応する数値(左および上に並ぶ数値列)を取得
        function getNumber(buttonId) {
            let divProperty = document.getElementById(buttonId);
            let buttonProperty = String(divProperty.outerHTML);
            let filenameRegExp = /.{1,}imatrix\/(.{1,})\.gif.{1,}div(.{1,}).{1,}/;
            let keycodeRegExp = /.{1,}button\d{1,2}',\s'(\d\d\d\d).{1,}/;

            let filename = buttonProperty.replace(filenameRegExp,'$1')
            let keycode = buttonProperty.replace(keycodeRegExp,'$1')
            return [filename, keycode]
        }

        // 数値を入力
        function enterNumber(num, whereToInput) {
            let input0 = document.getElementById(whereToInput);
            input0.value = num;
        }

        // パターンを取得(違うパターンになったときに作動するかは確認できていません)
        function getPattern() {
            let propertyOfButton0 = document.getElementById('button0').outerHTML;
            // console.log(propertyOfButton0);
            let pattern = propertyOfButton0.replace(/.+imatrix\/(.)\d+\.gif.+/,'$1');
            // console.log(pattern);
            return String(pattern)
        }

        // ボタンがクリックされたとき，およびページをロードし終えたときに実行する部分
        function buttonClicked() {
            // 画像の並べ方のパターンはいま(2023/08/23)はパターンdしか見ていませんが
            // d以外が確認されたらpatternの変数をなんとか取得してがんばってください。

            // ! ======================================================
            // ! ここがパスワードに当たる部分なので公開しないこと。
            let keyImgFileNames_a = [];
            let keyImgFileNames_b = [];
            let keyImgFileNames_c = [];
            let keyImgFileNames_d = ["d1", "d2", "d3"];
            // ! ======================================================

            let pattern = getPattern();
            let alreadyFound = 0;
            for(counter = 0; counter < 25; counter++) {
                if (alreadyFound > 2) {
                    break
                }
                let whereToInput = 'input_digit_' + alreadyFound;
                let buttonId = "button" + String(counter);
                [filename, keycode] = getNumber(buttonId);
                if (pattern == "a") {
                    if (filename == keyImgFileNames_a[alreadyFound]) {
                        enterNumber(keycode, whereToInput);
                        alreadyFound++;
                        counter = 0;                ;
                }}else if (pattern == "b") {
                    if (filename == keyImgFileNames_b[alreadyFound]) {
                        enterNumber(keycode, whereToInput);
                        alreadyFound++;
                        counter = 0;                ;
                }}else if (pattern == "c") {
                    if (filename == keyImgFileNames_c[alreadyFound]) {
                        enterNumber(keycode, whereToInput);
                        alreadyFound++;
                        counter = 0;                ;
                }}else if (pattern == "d") {
                    if (filename == keyImgFileNames_d[alreadyFound]) {
                        enterNumber(keycode, whereToInput);
                        alreadyFound++;
                        counter = 0;
                    }
                }
            }
        }

        // ロード時にも一応入力されるようにしておく
        buttonClicked();

        // ロード後に入力を変更してしまったケースのためにボタンを作成
        let createButton = this.document.createElement('input');
        createButton.id = "createdButtonToAutoFill";
        createButton.type = "button";
        createButton.className = "input_button_class";
        createButton.value = "自動入力";
        createButton.onclick = buttonClicked;

        let tbody = this.document.querySelectorAll('div');
        // ここのインデックス(：38)はこのページのdivにclassが振られていないため数字で指定しています
        tbody[38].prepend(createButton);
        }


}

$(function () {
    // 変更すべき箇所(この3点は全て同じに！)
    // 1. audio タグの src="../00-menu/sound/○○.wav" の部分のpath名
    // 2. audio タグの id
    // 3. button タグの value
    $(".menu").html(
        '<details>' +
        '<summary><span style="color: blue">メニュー放送</span></summary>' +

        '<h3>戸閉予告</h3>'+  /////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/doorClose.wav" id="doorClose" preload="none"></audio>' +
        '扉閉予告 [日英] <button class="play" value="doorClose">a</button><br>' +


        '<h3>出口ドア案内</h3>'+ ////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/door_left_solo.wav" id="door_left_solo" preload="none"></audio>' +
        'ドア側 左 [日] <button class="play" value="door_left_solo">a</button><br>' +

        '<audio src="../00-menu/sound/door_both_solo.wav" id="door_both_solo" preload="none"></audio>' +
        'ドア側 両 [日] <button class="play" value="door_both_solo">a</button><br>' +
        
        '<audio src="../00-menu/sound/door_right_solo.wav" id="door_right_solo" preload="none"></audio>' +
        'ドア側 右 [日] <button class="play" value="door_right_solo">a</button><br>' +

        '<h3>雑案内</h3>'+ ////////////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/train_will_bive.wav" id="train_will_bive" preload="none"></audio>' +
        '「この先揺れます」[日] <button class="play" value="train_will_bive">a</button><br>' +


        '<h3>マナー啓発</h3>'+ ///////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/depart_sign.wav" id="depart_sign" preload="none"></audio>' +
        '発車サイン音 [日] <button class="play" value="depart_sign">a</button><br>' +

        '</details>'
    );

});
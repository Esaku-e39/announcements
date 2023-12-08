$(function () {
    // 変更すべき箇所(この3点は全て同じに！)
    // 1. audio タグの src="../00-menu/sound/○○.mp3" の部分のpath名
    // 2. audio タグの id
    // 3. button タグの value
    $(".menu").html(
        '<details>' +
        '<summary><span style="color: blue">メニュー放送</span></summary>' +

        '<h3>戸閉予告</h3>'+  /////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/doorClose_man.mp3" id="doorClose_man" preload="none"></audio>' +
        '扉閉予告 タブレット [日] <button class="play" value="doorClose_man">a</button><br>' +

        '<audio src="../00-menu/sound/doorClose_woman.mp3" id="doorClose_woman" preload="none"></audio>' +
        '扉閉予告 車載 [日] <button class="play" value="doorClose_woman">a</button><br>' +

        '<h3>出口ドア案内</h3>'+ ////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/door_left_solo.mp3" id="door_left_solo" preload="none"></audio>' +
        'ドア側 左 [日] <button class="play" value="door_left_solo">a</button><br>' +

        '<audio src="../00-menu/sound/door_both_solo.mp3" id="door_both_solo" preload="none"></audio>' +
        'ドア側 両 [日] <button class="play" value="door_both_solo">a</button><br>' +
        
        '<audio src="../00-menu/sound/door_right_solo.mp3" id="door_right_solo" preload="none"></audio>' +
        'ドア側 右 [日] <button class="play" value="door_right_solo">a</button><br>' +

        

        '<h3>雑案内</h3>'+ ////////////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/thanks_for_waiting.mp3" id="thanks_for_waiting" preload="none"></audio>' +
        '「お待たせしました」[日] <button class="play" value="thanks_for_waiting">a</button><br>' +

        '<audio src="../00-menu/sound/watch_your_step.mp3" id="watch_your_step" preload="none"></audio>' +
        '足元注意 [日] <button class="play" value="watch_your_step">a</button><br>' +


        '<h3>マナー啓発</h3>'+ ///////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/mobile_phone.mp3" id="mobile_phone" preload="none"></audio>' +
        '携帯マナーモード [日英] <button class="play" value="mobile_phone">a</button><br>' +

        '</details>'
    );

});
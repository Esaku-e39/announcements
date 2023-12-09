$(function () {
    // 変更すべき箇所(この3点は全て同じに！)
    // 1. audio タグの src="../00-menu/sound/○○.mp3" の部分のpath名
    // 2. audio タグの id
    // 3. button タグの value
    $(".menu").html(
        '<details>' +
        '<summary><span style="color: blue">メニュー放送</span></summary>' +

        '<h3>戸閉予告</h3>'+  /////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/doorClose.mp3" id="doorClose" preload="none"></audio>' +
        '扉閉予告 [日] <button class="play" value="doorClose">a</button><br>' +


        '<h3>雑案内</h3>'+ ////////////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/departing_soon.mp3" id="departing_soon" preload="none"></audio>' +
        '「まもなく発車します」[日英] <button class="play" value="departing_soon">a</button><br>' +

        // '<h3>マナー啓発</h3>'+ ///////////////////////////////////////////////////////////////////////////////

        // '<audio src="../00-menu/sound/mobile_phone.mp3" id="mobile_phone" preload="none"></audio>' +
        // '携帯マナーモード [日英] <button class="play" value="mobile_phone">a</button><br>' +

        '</details>'
    );

});
$(function () {
    // 変更すべき箇所(この3点は全て同じに！)
    // 1. audio タグの src="../00-menu/sound/○○.mp3" の部分のpath名
    // 2. audio タグの id
    // 3. button タグの value
    $(".menu").html(
        '<details>' +
        '<summary><span style="color: blue">メニュー放送</span></summary>' +

        '<h3>啓発</h3>'+ ///////////////////////////////////////////////////////////////////////////////

        '<audio src="../00-menu/sound/avoid_crowded.mp3" id="avoid_crowded" preload="none"></audio>' +
        '出入口付近混雑回避 [日] <button class="play" value="avoid_crowded">a</button><br>' +

        '<audio src="../00-menu/sound/bags.mp3" id="bags" preload="none"></audio>' +
        '鞄 啓発 [日] <button class="play" value="bags">a</button><br>' +

        '<audio src="../00-menu/sound/door_be_careful.mp3" id="door_be_careful" preload="none"></audio>' +
        'ドア引き込まれ注意 [日] <button class="play" value="door_be_careful">a</button><br>' +

        '<audio src="../00-menu/sound/mobile_phone.mp3" id="mobile_phone" preload="none"></audio>' +
        '携帯電話 [日] <button class="play" value="mobile_phone">a</button><br>' +

        '<audio src="../00-menu/sound/prevent_accident.mp3" id="prevent_accident" preload="none"></audio>' +
        '車内事故防止 [日] <button class="play" value="prevent_accident">a</button><br>' +

        '<audio src="../00-menu/sound/priority_seat.mp3" id="priority_seat" preload="none"></audio>' +
        '優先席 [日] <button class="play" value="priority_seat">a</button><br>' +

        '<audio src="../00-menu/sound/suspicious_items.mp3" id="suspicious_items" preload="none"></audio>' +
        '不審物 [日] <button class="play" value="suspicious_items">a</button><br>' +

        '<audio src="../00-menu/sound/prevent_infection.mp3" id="prevent_infection" preload="none"></audio>' +
        '感染拡大防止 [日] <button class="play" value="prevent_infection">a</button><br>' +

        '</details>'
    );

});
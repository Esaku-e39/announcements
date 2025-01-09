$(function () {
    // 変更すべき箇所(この3点は全て同じに！)
    // 1. audio タグの src="../00-menu/sound/○○.mp3" の部分のpath名
    // 2. audio タグの id
    // 3. button タグの value
    $(".menu").html(
        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details class="fixed-summary" open>' +
        '<summary><span style="color: blue">列車運行に関する放送</span></summary>' +

        '<audio src="../00-menu/sound/001_2_扉が閉まります。.mp3" id="001" preload="none"></audio>' +
        '001_2_扉が閉まります。 タブレット <button class="play" value="001">a</button><br>' +

        '<audio src="../00-menu/sound/doorClose_woman.mp3" id="doorClose_woman" preload="none"></audio>' +
        '(扉予告 車載)<button class="play" value="doorClose_woman">a</button><br>' +

        '<audio src="../00-menu/sound/002_2_【一般】扉右側開.mp3" id="002" preload="none"></audio>' +
        '002_2_【一般】扉右側開<button class="play" value="002">a</button><br>' +
        
        '<audio src="../00-menu/sound/003_2_【一般】扉左側開.mp3" id="003" preload="none"></audio>' +
        '003_2_【一般】扉左側開<button class="play" value="003">a</button><br>' +

        '<audio src="../00-menu/sound/004_2_【一般】扉両側開（右側先開）.mp3" id="004" preload="none"></audio>' +
        '004_2_【一般】扉両側開（右側先開）<button class="play" value="004">a</button><br>' +

        '<audio src="../00-menu/sound/005_2_【一般】扉両側開（左側先開）.mp3" id="005" preload="none"></audio>' +
        '005_2_【一般】扉両側開（左側先開）<button class="play" value="005">a</button><br>' +

        '<audio src="../00-menu/sound/006_2_【特急】扉右側開.mp3" id="006" preload="none"></audio>' +
        '006_2_【特急】扉右側開<button class="play" value="006">a</button><br>' +
        
        '<audio src="../00-menu/sound/007_2_【特急】扉左側開.mp3" id="007" preload="none"></audio>' +
        '007_2_【特急】扉左側開<button class="play" value="007">a</button><br>' +

        '<audio src="../00-menu/sound/008_2_【特急】　扉右側開（内側に開）.mp3" id="008" preload="none"></audio>' +
        '008_2_【特急】　扉右側開（内側に開）<button class="play" value="008">a</button><br>' +

        '<audio src="../00-menu/sound/009_2_【特急】　扉左側開（内側に開）.mp3" id="009" preload="none"></audio>' +
        '009_2_【特急】　扉左側開（内側に開）<button class="play" value="009">a</button><br>' +

        '<audio src="../00-menu/sound/010_2_【特急】扉両側開右先（内側に開）.mp3" id="010" preload="none"></audio>' +
        '010_2_【特急】扉両側開右先（内側に開）<button class="play" value="010">a</button><br>' +

        '<audio src="../00-menu/sound/011_2_【特急】扉両側開左先（内側に開）.mp3" id="011" preload="none"></audio>' +
        '011_2_【特急】扉両側開左先（内側に開）<button class="play" value="011">a</button><br>' +

        '<audio src="../00-menu/sound/012_2_【特急】扉両側開（右側先開）.mp3" id="012" preload="none"></audio>' +
        '012_2_【特急】扉両側開（右側先開）<button class="play" value="012">a</button><br>' +

        '<audio src="../00-menu/sound/013_2_扉右側「閉」.mp3" id="013" preload="none"></audio>' +
        '013_2_扉右側「閉」<button class="play" value="013">a</button><br>' +

        '<audio src="../00-menu/sound/014_2_扉左側「閉」.mp3" id="014" preload="none"></audio>' +
        '014_2_扉左側「閉」<button class="play" value="014">a</button><br>' +

        '<audio src="../00-menu/sound/015_2_扉両側「閉」.mp3" id="015" preload="none"></audio>' +
        '015_2_扉両側「閉」<button class="play" value="015">a</button><br>' +

        '<audio src="../00-menu/sound/016_1_お待たせしました.mp3" id="016" preload="none"></audio>' +
        '016_1_お待たせしました<button class="play" value="016">a</button><br>' +

        '<audio src="../00-menu/sound/017_2_扉にご注意ください。.mp3" id="017" preload="none"></audio>' +
        '017_2_扉にご注意ください。<button class="play" value="017">a</button><br>' +

        '<audio src="../00-menu/sound/018_1_発車までしばらくお待ちください。.mp3" id="018" preload="none"></audio>' +
        '018_1_発車までしばらくお待ちください。<button class="play" value="018">a</button><br>' +

        '<audio src="../00-menu/sound/019_4_この電車は次までです。.mp3" id="019" preload="none"></audio>' +
        '019_4_この電車は次までです。<button class="play" value="019">a</button><br>' +

        '<audio src="../00-menu/sound/020_4_この電車は、この駅までです。.mp3" id="020" preload="none"></audio>' +
        '020_4_この電車は、この駅までです。<button class="play" value="020">a</button><br>' +

        '<audio src="../00-menu/sound/021_1_お忘れ物のないようご注意ください。.mp3" id="021" preload="none"></audio>' +
        '021_1_お忘れ物のないようご注意ください。<button class="play" value="021">a</button><br>' +

        '<audio src="../00-menu/sound/022_4_傘など、お忘れ物のないように.mp3" id="022" preload="none"></audio>' +
        '022_4_傘など、お忘れ物のないように<button class="play" value="022">a</button><br>' +

        '<audio src="../00-menu/sound/023_1_電車が通過します。.mp3" id="023" preload="none"></audio>' +
        '023_1_電車が通過します。<button class="play" value="023">a</button><br>' +

        '<audio src="../00-menu/sound/024_1_電車とホームが広く開いている駅.mp3" id="024" preload="none"></audio>' +
        '024_1_電車とホームが広く開いている駅<button class="play" value="024">a</button><br>' +

        '<audio src="../00-menu/sound/025_1_ホームが滑りやすいときの注意.mp3" id="025" preload="none"></audio>' +
        '025_1_ホームが滑りやすいときの注意<button class="play" value="025">a</button><br>' +

        '<audio src="../00-menu/sound/026_1_指詰め防止注意.mp3" id="026" preload="none"></audio>' +
        '026_1_指詰め防止注意<button class="play" value="026">a</button><br>' +

        '<audio src="../00-menu/sound/027_1_車内改札告知放送.mp3" id="027" preload="none"></audio>' +
        '027_1_車内改札告知放送<button class="play" value="027">a</button><br>' +

        '<audio src="../00-menu/sound/028_1_停止信号による停車中.mp3" id="028" preload="none"></audio>' +
        '028_1_停止信号による停車中<button class="play" value="028">a</button><br>' +

        '<audio src="../00-menu/sound/029_1_この電車は、この駅で車両の取替.mp3" id="029" preload="none"></audio>' +
        '029_1_この電車は、この駅で車両の取替<button class="play" value="029">a</button><br>' +

        '<audio src="../00-menu/sound/030_4_列車遅延時のお詫び放送.mp3" id="030" preload="none"></audio>' +
        '030_4_列車遅延時のお詫び放送<button class="play" value="030">a</button><br>' +

        '<audio src="../00-menu/sound/031_4_裏が白色の乗車券をお持ちのお客様.mp3" id="031" preload="none"></audio>' +
        '031_4_裏が白色の乗車券をお持ちのお客様<button class="play" value="031">a</button><br>' +

        '<audio src="../00-menu/sound/032_4_この放送が流れている車両、切り離し.mp3" id="032" preload="none"></audio>' +
        '032_4_この放送が流れている車両、切り離し<button class="play" value="032">a</button><br>' +

        '<audio src="../00-menu/sound/033_1_車内巡視告知放送.mp3" id="033" preload="none"></audio>' +
        '033_1_車内巡視告知放送<button class="play" value="033">a</button><br>' +

        '<audio src="../00-menu/sound/034_4_女性専用車両（途中大阪難波まで）.mp3" id="034" preload="none"></audio>' +
        '034_4_女性専用車両（途中大阪難波まで）<button class="play" value="034">a</button><br>' +

        '<audio src="../00-menu/sound/035_4_一番後ろの車両は、女性専用車両.mp3" id="035" preload="none"></audio>' +
        '035_4_一番後ろの車両は、女性専用車両<button class="play" value="035">a</button><br>' +

        '<audio src="../00-menu/sound/036_2_奈良線大阪難波方面、女性専用車.mp3" id="036" preload="none"></audio>' +
        '036_2_奈良線大阪難波方面、女性専用車<button class="play" value="036">a</button><br>' +

        '<audio src="../00-menu/sound/037_4_グループ専用席案内.mp3" id="037" preload="none"></audio>' +
        '037_4_グループ専用席案内<button class="play" value="037">a</button><br>' +

        '<audio src="../00-menu/sound/038_2_西大寺で前４両切り離し（１０両）.mp3" id="038" preload="none"></audio>' +
        '038_2_西大寺で前４両切り離し（１０両）<button class="play" value="038">a</button><br>' +

        '<audio src="../00-menu/sound/039_2_西大寺で前２両切り離し（８両）.mp3" id="039" preload="none"></audio>' +
        '039_2_西大寺で前２両切り離し（８両）<button class="play" value="039">a</button><br>' +

        '<audio src="../00-menu/sound/040_2_尼崎で後ろ４両切り離し（１０両）.mp3" id="040" preload="none"></audio>' +
        '040_2_尼崎で後ろ４両切り離し（１０両）<button class="play" value="040">a</button><br>' +

        '<audio src="../00-menu/sound/041_2_尼崎で後ろ２両切り離し（８両）.mp3" id="041" preload="none"></audio>' +
        '041_2_尼崎で後ろ２両切り離し（８両）<button class="play" value="041">a</button><br>' +

        '<audio src="../00-menu/sound/042_2_４号車前より扉なし.mp3" id="042" preload="none"></audio>' +
        '042_2_４号車前より扉なし<button class="play" value="042">a</button><br>' +

        '<audio src="../00-menu/sound/043_2_４号車後ろより扉なし.mp3" id="043" preload="none"></audio>' +
        '043_2_４号車後ろより扉なし<button class="play" value="043">a</button><br>' +

        '<audio src="../00-menu/sound/044_2_８号車前より扉なし.mp3" id="044" preload="none"></audio>' +
        '044_2_８号車前より扉なし<button class="play" value="044">a</button><br>' +

        '<audio src="../00-menu/sound/045_2_８号車後ろより扉なし.mp3" id="045" preload="none"></audio>' +
        '045_2_８号車後ろより扉なし<button class="play" value="045">a</button><br>' +

        '<audio src="../00-menu/sound/046_2_電車と行き違い.mp3" id="046" preload="none"></audio>' +
        '046_2_電車と行き違い<button class="play" value="046">a</button><br>' +

        '<audio src="../00-menu/sound/047_2_車内保温のため扉一旦閉.mp3" id="047" preload="none"></audio>' +
        '047_2_車内保温のため扉一旦閉<button class="play" value="047">a</button><br>' +

        '<audio src="../00-menu/sound/048_2_尼崎で後ろ２両切り離し（１０両）.mp3" id="048" preload="none"></audio>' +
        '048_2_尼崎で後ろ２両切り離し（１０両）<button class="play" value="048">a</button><br>' +

        '<audio src="../00-menu/sound/049_2_折戸案内放送（１から４と６号車）.mp3" id="049" preload="none"></audio>' +
        '049_2_折戸案内放送（１から４と６号車）<button class="play" value="049">a</button><br>' +

        '<audio src="../00-menu/sound/050_2_折戸案内放送（１から６と８号車）.mp3" id="050" preload="none"></audio>' +
        '050_2_折戸案内放送（１から６と８号車）<button class="play" value="050">a</button><br>' +

        '<audio src="../00-menu/sound/051_2_【あをによし】折戸案内放送（右側）.mp3" id="051" preload="none"></audio>' +
        '051_2_【あをによし】折戸案内放送（右側）<button class="play" value="051">a</button><br>' +

        '<audio src="../00-menu/sound/052_2_【あをによし】折戸案内放送（左側）.mp3" id="052" preload="none"></audio>' +
        '052_2_【あをによし】折戸案内放送（左側）<button class="play" value="052">a</button><br>' +

        '<audio src="../00-menu/sound/053_2_２号車サロンカー.mp3" id="053" preload="none"></audio>' +
        '053_2_２号車サロンカー<button class="play" value="053">a</button><br>' +

        '<audio src="../00-menu/sound/054_2_５号車サロンカー.mp3" id="054" preload="none"></audio>' +
        '054_2_５号車サロンカー<button class="play" value="054">a</button><br>' +

        '<audio src="../00-menu/sound/055_2_【特急】扉は内側に開きます.mp3" id="055" preload="none"></audio>' +
        '055_2_【特急】扉は内側に開きます<button class="play" value="055">a</button><br>' +

        '<audio src="../00-menu/sound/056_2_【特急】出口「左」１～４号車扉内側.mp3" id="056" preload="none"></audio>' +
        '056_2_【特急】出口「左」１～４号車扉内側<button class="play" value="056">a</button><br>' +

        '<audio src="../00-menu/sound/057_2_【特急】出口「右」１～４号車扉内側.mp3" id="057" preload="none"></audio>' +
        '057_2_【特急】出口「右」１～４号車扉内側<button class="play" value="057">a</button><br>' +

        '<audio src="../00-menu/sound/058_2_【特急】出口「左」５～８号車扉内側.mp3" id="058" preload="none"></audio>' +
        '058_2_【特急】出口「左」５～８号車扉内側<button class="play" value="058">a</button><br>' +

        '<audio src="../00-menu/sound/059_2_【特急】出口「右」５～８号車扉内側.mp3" id="059" preload="none"></audio>' +
        '059_2_【特急】出口「右」５～８号車扉内側<button class="play" value="059">a</button><br>' +

        '<audio src="../00-menu/sound/060_4_高安で後ろ６両切り離し（１０両）.mp3" id="060" preload="none"></audio>' +
        '060_4_高安で後ろ６両切り離し（１０両）<button class="play" value="060">a</button><br>' +

        '<audio src="../00-menu/sound/061_4_高安で後ろ４両切り離し（１０両）.mp3" id="061" preload="none"></audio>' +
        '061_4_高安で後ろ４両切り離し（１０両）<button class="play" value="061">a</button><br>' +

        '<audio src="../00-menu/sound/062_4_高安で後ろ４両切り離し（８両）.mp3" id="062" preload="none"></audio>' +
        '062_4_高安で後ろ４両切り離し（８両）<button class="play" value="062">a</button><br>' +

        '<audio src="../00-menu/sound/063_4_高安で後ろ２両切り離し（８両）.mp3" id="063" preload="none"></audio>' +
        '063_4_高安で後ろ２両切り離し（８両）<button class="play" value="063">a</button><br>' +

        '<audio src="../00-menu/sound/064_4_次の高安で後ろ６両切り離し（１０両）.mp3" id="064" preload="none"></audio>' +
        '064_4_次の高安で後ろ６両切り離し（１０両）<button class="play" value="064">a</button><br>' +

        '<audio src="../00-menu/sound/065_4_次の高安で後ろ４両切り離し（１０両）.mp3" id="065" preload="none"></audio>' +
        '065_4_次の高安で後ろ４両切り離し（１０両）<button class="play" value="065">a</button><br>' +

        '<audio src="../00-menu/sound/066_4_次の高安で後ろ４両切り離し（８両）.mp3" id="066" preload="none"></audio>' +
        '066_4_次の高安で後ろ４両切り離し（８両）<button class="play" value="066">a</button><br>' +

        '<audio src="../00-menu/sound/067_4_次の高安で後ろ２両切り離し（８両）.mp3" id="067" preload="none"></audio>' +
        '067_4_次の高安で後ろ２両切り離し（８両）<button class="play" value="067">a</button><br>' +

        '<audio src="../00-menu/sound/068_4_名張で後ろ４両切り離し（８両）.mp3" id="068" preload="none"></audio>' +
        '068_4_名張で後ろ４両切り離し（８両）<button class="play" value="068">a</button><br>' +

        '<audio src="../00-menu/sound/069_4_名張で後ろ２両切り離し（６両）.mp3" id="069" preload="none"></audio>' +
        '069_4_名張で後ろ２両切り離し（６両）<button class="play" value="069">a</button><br>' +

        '<audio src="../00-menu/sound/070_4_青山町で後ろ４両切り離し（８両）.mp3" id="070" preload="none"></audio>' +
        '070_4_青山町で後ろ４両切り離し（８両）<button class="play" value="070">a</button><br>' +

        '<audio src="../00-menu/sound/071_4_青山町で後ろ２両切り離し（８両）.mp3" id="071" preload="none"></audio>' +
        '071_4_青山町で後ろ２両切り離し（８両）<button class="play" value="071">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">マナー啓発放送</span></summary>' + 

        '<audio src="../00-menu/sound/085_4_【一般】携帯電話協力依頼.mp3" id="085" preload="none"></audio>' +
        '085_4_【一般】携帯電話協力依頼<button class="play" value="085">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">案内放送</span></summary>' + 

        '<audio src="../00-menu/sound/117_1_駅改良工事を行っています.mp3" id="117" preload="none"></audio>' +
        '117_1_駅改良工事を行っています<button class="play" value="117">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">異例時放送</span></summary>' + 

        '<audio src="../00-menu/sound/180_4_人身事故　運転見合わせ.mp3" id="180" preload="none"></audio>' +
        '180_4_人身事故　運転見合わせ<button class="play" value="180">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">台風</span></summary>' + 

        '<audio src="../00-menu/sound/216_4_台風の影響　運転見合わせ.mp3" id="216" preload="none"></audio>' +
        '216_4_台風の影響　運転見合わせ<button class="play" value="216">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">百貨店</span></summary>' + 

        '<audio src="../00-menu/sound/236_4_次は、大阪上本町、上本町、近鉄百貨店前です。.mp3" id="236" preload="none"></audio>' +
        '236_4_次は、大阪上本町、上本町、近鉄百貨店前です。<button class="play" value="236">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">PR放送</span></summary>' + 

        '<audio src="../00-menu/sound/251_1_①生駒山上遊園地PR放送（R元年）.mp3" id="251" preload="none"></audio>' +
        '251_1_①生駒山上遊園地PR放送（R元年）<button class="play" value="251">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">充当案内放送</span></summary>' + 

        '<audio src="../00-menu/sound/259_4_橿原神宮前行急行充当.mp3" id="259" preload="none"></audio>' +
        '259_4_橿原神宮前行急行充当<button class="play" value="259">a</button><br>' +

        // '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        // 'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '</details>'
    );

});
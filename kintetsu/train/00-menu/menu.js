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

        '<audio src="../00-menu/sound/072_4_次の名張で後ろ４両切り離し（８両）.mp3" id="072" preload="none"></audio>' +
        '072_4_次の名張で後ろ４両切り離し（８両）<button class="play" value="072">a</button><br>' +

        '<audio src="../00-menu/sound/073_4_次の名張で後ろ２両切り離し（６両）.mp3" id="073" preload="none"></audio>' +
        '073_4_次の名張で後ろ２両切り離し（６両）<button class="play" value="073">a</button><br>' +

        '<audio src="../00-menu/sound/074_4_次の青山町で後ろ４両切り離し（８両）.mp3" id="074" preload="none"></audio>' +
        '074_4_次の青山町で後ろ４両切り離し（８両）<button class="play" value="074">a</button><br>' +

        '<audio src="../00-menu/sound/075_4_次の青山町で後ろ２両切り離し（８両）.mp3" id="075" preload="none"></audio>' +
        '075_4_次の青山町で後ろ２両切り離し（８両）<button class="play" value="075">a</button><br>' +

        '<audio src="../00-menu/sound/076_4_次の高安で前に電車をつなぎます。.mp3" id="076" preload="none"></audio>' +
        '076_4_次の高安で前に電車をつなぎます。<button class="play" value="076">a</button><br>' +

        '<audio src="../00-menu/sound/077_4_次の名張で後ろに電車をつなぎます。.mp3" id="077" preload="none"></audio>' +
        '077_4_次の名張で後ろに電車をつなぎます。<button class="play" value="077">a</button><br>' +

        '<audio src="../00-menu/sound/078_4_この駅で前に電車をつなぎます。.mp3" id="078" preload="none"></audio>' +
        '078_4_この駅で前に電車をつなぎます。<button class="play" value="078">a</button><br>' +

        '<audio src="../00-menu/sound/079_4_この駅で後ろに電車をつなぎます。.mp3" id="079" preload="none"></audio>' +
        '079_4_この駅で後ろに電車をつなぎます。<button class="play" value="079">a</button><br>' +

        '<audio src="../00-menu/sound/080_4_一番【前】の車両貸切り専用.mp3" id="080" preload="none"></audio>' +
        '080_4_一番【前】の車両貸切り専用<button class="play" value="080">a</button><br>' +

        '<audio src="../00-menu/sound/081_4_一番【後ろ】の車両貸切り専用.mp3" id="081" preload="none"></audio>' +
        '081_4_一番【後ろ】の車両貸切り専用<button class="play" value="081">a</button><br>' +

        '<audio src="../00-menu/sound/082_4_一番【前】鮮魚専用車両.mp3" id="082" preload="none"></audio>' +
        '082_4_一番【前】鮮魚専用車両<button class="play" value="082">a</button><br>' +

        '<audio src="../00-menu/sound/083_4_一番【後ろ】鮮魚専用車両.mp3" id="083" preload="none"></audio>' +
        '083_4_一番【後ろ】鮮魚専用車両<button class="play" value="083">a</button><br>' +

        '<audio src="../00-menu/sound/084_1_電車とホームの間が広く開いています。（特に小さなお子様注意）.mp3" id="084" preload="none"></audio>' +
        '084_1_電車とホームの間が広く開いています。（特に小さなお子様注意）<button class="play" value="084">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">マナー啓発放送</span></summary>' +

        '<audio src="../00-menu/sound/085_4_【一般】携帯電話協力依頼.mp3" id="085" preload="none"></audio>' +
        '085_4_【一般】携帯電話協力依頼<button class="play" value="085">a</button><br>' +

        '<audio src="../00-menu/sound/086_4_【特急】携帯電話啓発放送.mp3" id="086" preload="none"></audio>' +
        '086_4_【特急】携帯電話啓発放送<button class="play" value="086">a</button><br>' +

        '<audio src="../00-menu/sound/087_4_迷惑行為防止放送.mp3" id="087" preload="none"></audio>' +
        '087_4_迷惑行為防止放送<button class="play" value="087">a</button><br>' +

        '<audio src="../00-menu/sound/088_4_リュックサック等の注意放送（大阪）.mp3" id="088" preload="none"></audio>' +
        '088_4_リュックサック等の注意放送（大阪）<button class="play" value="088">a</button><br>' +

        '<audio src="../00-menu/sound/089_4_ヘッドホンステレオ使用時の注意放送.mp3" id="089" preload="none"></audio>' +
        '089_4_ヘッドホンステレオ使用時の注意放送<button class="play" value="089">a</button><br>' +

        '<audio src="../00-menu/sound/090_4_ラッシュ時等の迷惑防止放送.mp3" id="090" preload="none"></audio>' +
        '090_4_ラッシュ時等の迷惑防止放送<button class="play" value="090">a</button><br>' +

        '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '<audio src="../00-menu/sound/091_4_濡れた傘の迷惑放送.mp3" id="091" preload="none"></audio>' +
        '091_4_濡れた傘の迷惑放送<button class="play" value="091">a</button><br>' +

        '<audio src="../00-menu/sound/092_4_座り込み防止放送.mp3" id="092" preload="none"></audio>' +
        '092_4_座り込み防止放送<button class="play" value="092">a</button><br>' +

        '<audio src="../00-menu/sound/093_4_鞄や手荷物を床に置く場合の迷惑防止.mp3" id="093" preload="none"></audio>' +
        '093_4_鞄や手荷物を床に置く場合の迷惑防止<button class="play" value="093">a</button><br>' +

        '<audio src="../00-menu/sound/094_4_マナー向上放送.mp3" id="094" preload="none"></audio>' +
        '094_4_マナー向上放送<button class="play" value="094">a</button><br>' +

        '<audio src="../00-menu/sound/095_4_座席整理（座席をお譲りください）.mp3" id="095" preload="none"></audio>' +
        '095_4_座席整理（座席をお譲りください）<button class="play" value="095">a</button><br>' +

        '<audio src="../00-menu/sound/096_4_座席整理・占有防止（大阪）.mp3" id="096" preload="none"></audio>' +
        '096_4_座席整理・占有防止（大阪）<button class="play" value="096">a</button><br>' +

        '<audio src="../00-menu/sound/097_4_優先座席（新）.mp3" id="097" preload="none"></audio>' +
        '097_4_優先座席（新）<button class="play" value="097">a</button><br>' +

        '<audio src="../00-menu/sound/098_4_駆け込み乗車防止放送.mp3" id="098" preload="none"></audio>' +
        '098_4_駆け込み乗車防止放送<button class="play" value="098">a</button><br>' +

        '<audio src="../00-menu/sound/099_4_不審物に対する放送.mp3" id="099" preload="none"></audio>' +
        '099_4_不審物に対する放送<button class="play" value="099">a</button><br>' +

        '<audio src="../00-menu/sound/100_2_リクライニング協力放送.mp3" id="100" preload="none"></audio>' +
        '100_2_リクライニング協力放送<button class="play" value="100">a</button><br>' +

        '<audio src="../00-menu/sound/101_4_先のお客様に続いてお降りください.mp3" id="101" preload="none"></audio>' +
        '101_4_先のお客様に続いてお降りください<button class="play" value="101">a</button><br>' +

        '<audio src="../00-menu/sound/102_4_出入り口は広く開けて（大阪）.mp3" id="102" preload="none"></audio>' +
        '102_4_出入り口は広く開けて（大阪）<button class="play" value="102">a</button><br>' +

        '<audio src="../00-menu/sound/103_4_扉付近は大変混雑します.mp3" id="103" preload="none"></audio>' +
        '103_4_扉付近は大変混雑します<button class="play" value="103">a</button><br>' +

        '<audio src="../00-menu/sound/104_4_読み終わった新聞や空き缶は、駅の.mp3" id="104" preload="none"></audio>' +
        '104_4_読み終わった新聞や空き缶は、駅の<button class="play" value="104">a</button><br>' +

        '<audio src="../00-menu/sound/105_4_歩きながらスマートフォンや携帯.mp3" id="105" preload="none"></audio>' +
        '105_4_歩きながらスマートフォンや携帯<button class="play" value="105">a</button><br>' +

        '<audio src="../00-menu/sound/106_4_窓から顔や手を出しますと大変.mp3" id="106" preload="none"></audio>' +
        '106_4_窓から顔や手を出しますと大変<button class="play" value="106">a</button><br>' +

        '<audio src="../00-menu/sound/107_1_お客様同士によるお声かけ放送（お願いいたします）.mp3" id="107" preload="none"></audio>' +
        '107_1_お客様同士によるお声かけ放送（お願いいたします）<button class="play" value="107">a</button><br>' +

        '<audio src="../00-menu/sound/108_1_お客様同士によるお声かけ放送.mp3" id="108" preload="none"></audio>' +
        '108_1_お客様同士によるお声かけ放送<button class="play" value="108">a</button><br>' +

        '<audio src="../00-menu/sound/109_4_中間車両悪戯防止.mp3" id="109" preload="none"></audio>' +
        '109_4_中間車両悪戯防止<button class="play" value="109">a</button><br>' +

        '<audio src="../00-menu/sound/110_2_フットレスト布地面.mp3" id="110" preload="none"></audio>' +
        '110_2_フットレスト布地面<button class="play" value="110">a</button><br>' +

        '<audio src="../00-menu/sound/111_4_リュックサック注意放送.mp3" id="ファ111イルid" preload="none"></audio>' +
        '111_4_リュックサック注意放送<button class="play" value="111">a</button><br>' +

        '<audio src="../00-menu/sound/112_4_危険品持込【荷物不明の場合途中駅で】.mp3" id="112" preload="none"></audio>' +
        '112_4_危険品持込【荷物不明の場合途中駅で】<button class="play" value="112">a</button><br>' +

        '<audio src="../00-menu/sound/113_4_危険品持込【荷物不明の場合途中駅、ロッカー使用中止】.mp3" id="113" preload="none"></audio>' +
        '113_4_危険品持込【荷物不明の場合途中駅、ロッカー使用中止】<button class="play" value="113">a</button><br>' +

        '<audio src="../00-menu/sound/114_4_【ひのとり】携帯電話啓発放送.mp3" id="114" preload="none"></audio>' +
        '114_4_【ひのとり】携帯電話啓発放送<button class="play" value="114">a</button><br>' +

        '<audio src="../00-menu/sound/115_4_リクライニング元の状態にお戻し.mp3" id="115" preload="none"></audio>' +
        '115_4_リクライニング元の状態にお戻し<button class="play" value="115">a</button><br>' +

        '<audio src="../00-menu/sound/116_4_ベビーカーやキャリーバック.mp3" id="116" preload="none"></audio>' +
        '116_4_ベビーカーやキャリーバック<button class="play" value="116">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">案内放送</span></summary>' +

        '<audio src="../00-menu/sound/117_1_駅改良工事を行っています.mp3" id="117" preload="none"></audio>' +
        '117_1_駅改良工事を行っています<button class="play" value="117">a</button><br>' +

        '<audio src="../00-menu/sound/118_4_平城宮跡景観放送（下り）.mp3" id="118" preload="none"></audio>' +
        '118_4_平城宮跡景観放送（下り）<button class="play" value="118">a</button><br>' +

        '<audio src="../00-menu/sound/119_4_平城宮跡景観放送（上り）.mp3" id="119" preload="none"></audio>' +
        '119_4_平城宮跡景観放送（上り）<button class="play" value="119">a</button><br>' +

        '<audio src="../00-menu/sound/120_1_さいくう平安の杜景観放送（左側に）.mp3" id="120" preload="none"></audio>' +
        '120_1_さいくう平安の杜景観放送（左側に）<button class="play" value="120">a</button><br>' +

        '<audio src="../00-menu/sound/121_1_さいくう平安の杜景観放送（右側に）.mp3" id="121" preload="none"></audio>' +
        '121_1_さいくう平安の杜景観放送（右側に）<button class="play" value="121">a</button><br>' +

        '<audio src="../00-menu/sound/122_4_新歌舞伎座、シェラトン都ホテル大阪.mp3" id="122" preload="none"></audio>' +
        '122_4_新歌舞伎座、シェラトン都ホテル大阪<button class="play" value="122">a</button><br>' +

        '<audio src="../00-menu/sound/123_4_あべのハルカスへは、近鉄バス.mp3" id="123" preload="none"></audio>' +
        '123_4_あべのハルカスへは、近鉄バス<button class="play" value="123">a</button><br>' +

        '<audio src="../00-menu/sound/124_1_タイムズプレイス西大寺.mp3" id="124" preload="none"></audio>' +
        '124_1_タイムズプレイス西大寺<button class="play" value="124">a</button><br>' +

        '<audio src="../00-menu/sound/125_2_なばなの里（長島駅臨停：バス案内）.mp3" id="125" preload="none"></audio>' +
        '125_2_なばなの里（長島駅臨停：バス案内）<button class="play" value="125">a</button><br>' +

        '<audio src="../00-menu/sound/126_2_なばなの里（アクセスバス運行）.mp3" id="126" preload="none"></audio>' +
        '126_2_なばなの里（アクセスバス運行）<button class="play" value="126">a</button><br>' +

        '<audio src="../00-menu/sound/128_2_志摩スペイン村景観放送（下り）.mp3" id="128" preload="none"></audio>' +
        '128_2_志摩スペイン村景観放送（下り）<button class="play" value="128">a</button><br>' +

        '<audio src="../00-menu/sound/129_2_賢島エスパーニャクルーズ案内放送（下り）.mp3" id="129" preload="none"></audio>' +
        '129_2_賢島エスパーニャクルーズ案内放送（下り）<button class="play" value="129">a</button><br>' +

        '<audio src="../00-menu/sound/130_1_鳥羽湾めぐり案内放送（下り）.mp3" id="130" preload="none"></audio>' +
        '130_1_鳥羽湾めぐり案内放送（下り）<button class="play" value="130">a</button><br>' +

        '<audio src="../00-menu/sound/131_4_特急には特急券が必要。座席番号.mp3" id="131" preload="none"></audio>' +
        '131_4_特急には特急券が必要。座席番号<button class="play" value="131">a</button><br>' +

        '<audio src="../00-menu/sound/132_4_特急には特急券が必要.mp3" id="132" preload="none"></audio>' +
        '132_4_特急には特急券が必要<button class="play" value="132">a</button><br>' +

        '<audio src="../00-menu/sound/133_4_ありがとうございます。特急には特急.mp3" id="133" preload="none"></audio>' +
        '133_4_ありがとうございます。特急には特急<button class="play" value="133">a</button><br>' +

        '<audio src="../00-menu/sound/134_2_ワゴンサービス中止放送.mp3" id="134" preload="none"></audio>' +
        '134_2_ワゴンサービス中止放送<button class="play" value="134">a</button><br>' +

        '<audio src="../00-menu/sound/135_2_【しまかぜ】プレミアムシートご案内（下り）.mp3" id="135" preload="none"></audio>' +
        '135_2_【しまかぜ】プレミアムシートご案内（下り）<button class="play" value="135">a</button><br>' +

        '<audio src="../00-menu/sound/136_2_【しまかぜ】プレミアムシートご案内（下り）.mp3" id="136" preload="none"></audio>' +
        '136_2_【しまかぜ】プレミアムシートご案内（下り）<button class="play" value="136">a</button><br>' +

        '<audio src="../00-menu/sound/137_2_ワゴンサービス事前告知放送.mp3" id="137" preload="none"></audio>' +
        '137_2_ワゴンサービス事前告知放送<button class="play" value="137">a</button><br>' +

        '<audio src="../00-menu/sound/138_2_ワゴンサービス利用促進放送.mp3" id="138" preload="none"></audio>' +
        '138_2_ワゴンサービス利用促進放送<button class="play" value="138">a</button><br>' +

        '<audio src="../00-menu/sound/139_1_生駒山上ＰＲ.mp3" id="139" preload="none"></audio>' +
        '139_1_生駒山上ＰＲ<button class="play" value="139">a</button><br>' +

        '<audio src="../00-menu/sound/140_4_全席座席指定で自由席なし.mp3" id="140" preload="none"></audio>' +
        '140_4_全席座席指定で自由席なし<button class="play" value="140">a</button><br>' +

        '<audio src="../00-menu/sound/141_4_奈良へは途中、西大寺で乗り換え.mp3" id="141" preload="none"></audio>' +
        '141_4_奈良へは途中、西大寺で乗り換え<button class="play" value="141">a</button><br>' +

        '<audio src="../00-menu/sound/143_4_伏見稲荷大社（この駅で）.mp3" id="143" preload="none"></audio>' +
        '143_4_伏見稲荷大社（この駅で）<button class="play" value="143">a</button><br>' +

        '<audio src="../00-menu/sound/144_4_伏見稲荷大社（丹波橋駅で）.mp3" id="144" preload="none"></audio>' +
        '144_4_伏見稲荷大社（丹波橋駅で）<button class="play" value="144">a</button><br>' +

        '<audio src="../00-menu/sound/145_2_吉野口駅でJR乗換えIC利用.mp3" id="145" preload="none"></audio>' +
        '145_2_吉野口駅でJR乗換えIC利用<button class="play" value="145">a</button><br>' +

        '<audio src="../00-menu/sound/146_2_あべのハルカス景観放送.mp3" id="146" preload="none"></audio>' +
        '146_2_あべのハルカス景観放送<button class="play" value="146">a</button><br>' +

        '<audio src="../00-menu/sound/147_4_降車の際に特急券確認の場合あり.mp3" id="147" preload="none"></audio>' +
        '147_4_降車の際に特急券確認の場合あり<button class="play" value="147">a</button><br>' +

        '<audio src="../00-menu/sound/148_4_東花園臨停（ラグビー開催）.mp3" id="148" preload="none"></audio>' +
        '148_4_東花園臨停（ラグビー開催）<button class="play" value="148">a</button><br>' +

        '<audio src="../00-menu/sound/149_4_東花園臨停.mp3" id="149" preload="none"></audio>' +
        '149_4_東花園臨停<button class="play" value="149">a</button><br>' +

        '<audio src="../00-menu/sound/150_4_向島臨停.mp3" id="150" preload="none"></audio>' +
        '150_4_向島臨停<button class="play" value="150">a</button><br>' +

        '<audio src="../00-menu/sound/151_4_興戸臨停.mp3" id="151" preload="none"></audio>' +
        '151_4_興戸臨停<button class="play" value="151">a</button><br>' +

        '<audio src="../00-menu/sound/152_4_長瀬臨停.mp3" id="152" preload="none"></audio>' +
        '152_4_長瀬臨停<button class="play" value="152">a</button><br>' +

        '<audio src="../00-menu/sound/153_4_大阪教育大前臨停.mp3" id="153" preload="none"></audio>' +
        '153_4_大阪教育大前臨停<button class="play" value="153">a</button><br>' +

        '<audio src="../00-menu/sound/154_3_吉野口駅での誤乗防止放送（桜花期）.mp3" id="154" preload="none"></audio>' +
        '154_3_吉野口駅での誤乗防止放送（桜花期）<button class="play" value="154">a</button><br>' +

        '<audio src="../00-menu/sound/155_3_吉野山ロープウェイ運休に伴う案内放送（桜花期）.mp3" id="155" preload="none"></audio>' +
        '155_3_吉野山ロープウェイ運休に伴う案内放送（桜花期）<button class="play" value="155">a</button><br>' +

        '<audio src="../00-menu/sound/156_3_吉野神宮駅からの代行バス案内放送（桜花期）.mp3" id="156" preload="none"></audio>' +
        '156_3_吉野神宮駅からの代行バス案内放送（桜花期）<button class="play" value="156">a</button><br>' +

        '<audio src="../00-menu/sound/157_4_花園ラグビー場へはこの駅で.mp3" id="157" preload="none"></audio>' +
        '157_4_花園ラグビー場へはこの駅で<button class="play" value="157">a</button><br>' +

        '<audio src="../00-menu/sound/158_4_花園ラグビー場へは次の東花園駅で.mp3" id="158" preload="none"></audio>' +
        '158_4_花園ラグビー場へは次の東花園駅で<button class="play" value="158">a</button><br>' +

        '<audio src="../00-menu/sound/159_2_【グループ席】６、７号車階下.mp3" id="159" preload="none"></audio>' +
        '159_2_【グループ席】６、７号車階下<button class="play" value="159">a</button><br>' +

        '<audio src="../00-menu/sound/160_2_駅バリアフリー工事を行っています.mp3" id="160" preload="none"></audio>' +
        '160_2_駅バリアフリー工事を行っています<button class="play" value="160">a</button><br>' +

        '<audio src="../00-menu/sound/161_4_連絡の京都行き特急４番.mp3" id="161" preload="none"></audio>' +
        '161_4_連絡の京都行き特急４番<button class="play" value="161">a</button><br>' +

        '<audio src="../00-menu/sound/162_4_近鉄京都方面へは竹田乗換え案内.mp3" id="162" preload="none"></audio>' +
        '162_4_近鉄京都方面へは竹田乗換え案内<button class="play" value="162">a</button><br>' +

        '<audio src="../00-menu/sound/163_4_ラグビー場帰り混雑切符先買い案内.mp3" id="163" preload="none"></audio>' +
        '163_4_ラグビー場帰り混雑切符先買い案内<button class="play" value="163">a</button><br>' +

        '<audio src="../00-menu/sound/164_4_【ひのとり】バックシェル案内.mp3" id="164" preload="none"></audio>' +
        '164_4_【ひのとり】バックシェル案内<button class="play" value="164">a</button><br>' +

        '<audio src="../00-menu/sound/165_4_【ひのとり】電動レッグレスト.mp3" id="165" preload="none"></audio>' +
        '165_4_【ひのとり】電動レッグレスト<button class="play" value="165">a</button><br>' +

        '<audio src="../00-menu/sound/166_4_【しまかぜ】特急には特急券としまかぜ車両券必要.mp3" id="166" preload="none"></audio>' +
        '166_4_【しまかぜ】特急には特急券としまかぜ車両券必要<button class="play" value="166">a</button><br>' +

        '<audio src="../00-menu/sound/167_4_特急には特急券と特別車両券必要.mp3" id="167" preload="none"></audio>' +
        '167_4_特急には特急券と特別車両券必要<button class="play" value="167">a</button><br>' +

        '<audio src="../00-menu/sound/168_4_フットレスト布地面は靴を脱いで.mp3" id="168" preload="none"></audio>' +
        '168_4_フットレスト布地面は靴を脱いで<button class="play" value="168">a</button><br>' +

        '<audio src="../00-menu/sound/169_4_竹田で急行連絡案内.mp3" id="169" preload="none"></audio>' +
        '169_4_竹田で急行連絡案内<button class="play" value="169">a</button><br>' +

        '<audio src="../00-menu/sound/170_4_竹田２号線急行先発（竹田到着前）.mp3" id="170" preload="none"></audio>' +
        '170_4_竹田２号線急行先発（竹田到着前）<button class="play" value="170">a</button><br>' +

        '<audio src="../00-menu/sound/171_4_郡山で天理方面案内.mp3" id="171" preload="none"></audio>' +
        '171_4_郡山で天理方面案内<button class="play" value="171">a</button><br>' +

        '<audio src="../00-menu/sound/172_4_郡山で橿原神宮前方面案内.mp3" id="172" preload="none"></audio>' +
        '172_4_郡山で橿原神宮前方面案内<button class="play" value="172">a</button><br>' +

        '<audio src="../00-menu/sound/174_2_大阪線特急：鶴橋停車中：奈良方面には行きません.mp3" id="174" preload="none"></audio>' +
        '174_2_大阪線特急：鶴橋停車中：奈良方面には行きません<button class="play" value="174">a</button><br>' +

        '<audio src="../00-menu/sound/175_4_花園ラグビー場へは東花園駅で降車.mp3" id="175" preload="none"></audio>' +
        '175_4_花園ラグビー場へは東花園駅で降車<button class="play" value="175">a</button><br>' +

        '<audio src="../00-menu/sound/176_4_花園ラグビー場へは奈良線・東花園駅降車.mp3" id="176" preload="none"></audio>' +
        '176_4_花園ラグビー場へは奈良線・東花園駅降車<button class="play" value="176">a</button><br>' +

        '<audio src="../00-menu/sound/177_4_車内禁煙放送.mp3" id="177" preload="none"></audio>' +
        '177_4_車内禁煙放送<button class="play" value="177">a</button><br>' +

        '<audio src="../00-menu/sound/178_4_伊勢市駅 誤出場防止放送.mp3" id="178" preload="none"></audio>' +
        '178_4_伊勢市駅 誤出場防止放送<button class="play" value="178">a</button><br>' +

        '<audio src="../00-menu/sound/179_4_誤乗防止放送（奈良方面にはまいりません）.mp3" id="179" preload="none"></audio>' +
        '179_4_誤乗防止放送（奈良方面にはまいりません）<button class="play" value="179">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">異例時放送</span></summary>' +

        '<audio src="../00-menu/sound/180_4_人身事故　運転見合わせ.mp3" id="180" preload="none"></audio>' +
        '180_4_人身事故　運転見合わせ<button class="play" value="180">a</button><br>' +

        '<audio src="../00-menu/sound/181_4_人身事故　ダイヤ乱れ.mp3" id="181" preload="none"></audio>' +
        '181_4_人身事故　ダイヤ乱れ<button class="play" value="181">a</button><br>' +
        
        '<audio src="../00-menu/sound/182_4_線路トラブル　運転見合わせ.mp3" id="182" preload="none"></audio>' +
        '182_4_線路トラブル　運転見合わせ<button class="play" value="182">a</button><br>' +

        '<audio src="../00-menu/sound/183_4_線路トラブル　ダイヤ乱れ.mp3" id="183" preload="none"></audio>' +
        '183_4_線路トラブル　ダイヤ乱れ<button class="play" value="183">a</button><br>' +

        '<audio src="../00-menu/sound/184_4_信号トラブル　運転見合わせ.mp3" id="184" preload="none"></audio>' +
        '184_4_信号トラブル　運転見合わせ<button class="play" value="184">a</button><br>' +

        '<audio src="../00-menu/sound/185_4_信号トラブル　ダイヤ乱れ.mp3" id="185" preload="none"></audio>' +
        '185_4_信号トラブル　ダイヤ乱れ<button class="play" value="185">a</button><br>' +

        '<audio src="../00-menu/sound/186_4_自動車接触　運転見合わせ.mp3" id="186" preload="none"></audio>' +
        '186_4_自動車接触　運転見合わせ<button class="play" value="186">a</button><br>' +

        '<audio src="../00-menu/sound/187_4_自動車接触　ダイヤ乱れ.mp3" id="187" preload="none"></audio>' +
        '187_4_自動車接触　ダイヤ乱れ<button class="play" value="187">a</button><br>' +

        '<audio src="../00-menu/sound/188_2_動物と接触　運転見合わせ.mp3" id="188" preload="none"></audio>' +
        '188_2_動物と接触　運転見合わせ<button class="play" value="188">a</button><br>' +

        '<audio src="../00-menu/sound/189_4_動物と接触　ダイヤ乱れ.mp3" id="189" preload="none"></audio>' +
        '189_4_動物と接触　ダイヤ乱れ<button class="play" value="189">a</button><br>' +

        '<audio src="../00-menu/sound/190_4_車両故障　運転見合わせ.mp3" id="190" preload="none"></audio>' +
        '190_4_車両故障　運転見合わせ<button class="play" value="190">a</button><br>' +

        '<audio src="../00-menu/sound/191_4_車両故障　ダイヤ乱れ.mp3" id="191" preload="none"></audio>' +
        '191_4_車両故障　ダイヤ乱れ<button class="play" value="191">a</button><br>' +

        '<audio src="../00-menu/sound/192_4_大雨のため　運転見合わせ.mp3" id="192" preload="none"></audio>' +
        '192_4_大雨のため　運転見合わせ<button class="play" value="192">a</button><br>' +

        '<audio src="../00-menu/sound/193_4_大雨のため　ダイヤ乱れ.mp3" id="193" preload="none"></audio>' +
        '193_4_大雨のため　ダイヤ乱れ<button class="play" value="193">a</button><br>' +

        '<audio src="../00-menu/sound/194_4_異音検知　ダイヤ乱れ.mp3" id="194" preload="none"></audio>' +
        '194_4_異音検知　ダイヤ乱れ<button class="play" value="194">a</button><br>' +

        '<audio src="../00-menu/sound/195_4_踏切から緊急停止　ダイヤ乱れ.mp3" id="195" preload="none"></audio>' +
        '195_4_踏切から緊急停止　ダイヤ乱れ<button class="play" value="195">a</button><br>' +

        '<audio src="../00-menu/sound/196_4_この先、行先変更、運転取りやめ.mp3" id="196" preload="none"></audio>' +
        '196_4_この先、行先変更、運転取りやめ<button class="play" value="196">a</button><br>' +

        '<audio src="../00-menu/sound/197_4_なお、この先、行先変更、運転取りやめ.mp3" id="197" preload="none"></audio>' +
        '197_4_なお、この先、行先変更、運転取りやめ<button class="play" value="197">a</button><br>' +

        '<audio src="../00-menu/sound/198_4_異例時、運転見合わせ（理由なし）.mp3" id="198" preload="none"></audio>' +
        '198_4_異例時、運転見合わせ（理由なし）<button class="play" value="198">a</button><br>' +

        '<audio src="../00-menu/sound/ファイル名.mp3" id="ファイルid" preload="none"></audio>' +
        'タイトル<button class="play" value="ファイルid">a</button><br>' +

        '<audio src="../00-menu/sound/199_4_異例時、ダイヤ乱れ発生（理由なし）.mp3" id="199" preload="none"></audio>' +
        '199_4_異例時、ダイヤ乱れ発生（理由なし）<button class="play" value="199">a</button><br>' +

        '<audio src="../00-menu/sound/200_4_運転取りやめ.mp3" id="200" preload="none"></audio>' +
        '200_4_運転取りやめ<button class="play" value="200">a</button><br>' +

        '<audio src="../00-menu/sound/201_4_地震の影響　運転見合わせ.mp3" id="201" preload="none"></audio>' +
        '201_4_地震の影響　運転見合わせ<button class="play" value="201">a</button><br>' +

        '<audio src="../00-menu/sound/202_4_地震影響　ダイヤ乱れ.mp3" id="202" preload="none"></audio>' +
        '202_4_地震影響　ダイヤ乱れ<button class="play" value="202">a</button><br>' +

        '<audio src="../00-menu/sound/203_4_地震　車外への避難誘導.mp3" id="203" preload="none"></audio>' +
        '203_4_地震　車外への避難誘導<button class="play" value="203">a</button><br>' +

        '<audio src="../00-menu/sound/204_4_地震　避難誘導告知.mp3" id="204" preload="none"></audio>' +
        '204_4_地震　避難誘導告知<button class="play" value="204">a</button><br>' +

        '<audio src="../00-menu/sound/205_4_地震　駅での避難誘導.mp3" id="205" preload="none"></audio>' +
        '205_4_地震　駅での避難誘導<button class="play" value="205">a</button><br>' +

        '<audio src="../00-menu/sound/206_4_降雪　今後運転を見合わせることがある.mp3" id="206" preload="none"></audio>' +
        '206_4_降雪　今後運転を見合わせることがある<button class="play" value="206">a</button><br>' +

        '<audio src="../00-menu/sound/207_4_濃霧　速度落として運転.mp3" id="207" preload="none"></audio>' +
        '207_4_濃霧　速度落として運転<button class="play" value="207">a</button><br>' +

        '<audio src="../00-menu/sound/208_4_雷鳴　今後見合わせる場合がある.mp3" id="208" preload="none"></audio>' +
        '208_4_雷鳴　今後見合わせる場合がある<button class="play" value="208">a</button><br>' +

        '<audio src="../00-menu/sound/209_4_雷鳴　運転見合わせ.mp3" id="209" preload="none"></audio>' +
        '209_4_雷鳴　運転見合わせ<button class="play" value="209">a</button><br>' +

        '<audio src="../00-menu/sound/210_4_停電　原因調査中.mp3" id="210" preload="none"></audio>' +
        '210_4_停電　原因調査中<button class="play" value="210">a</button><br>' +

        '<audio src="../00-menu/sound/211_4_津波　運転見合わせ.mp3" id="211" preload="none"></audio>' +
        '211_4_津波　運転見合わせ<button class="play" value="211">a</button><br>' +

        '<audio src="../00-menu/sound/212_4_津波　ダイヤ乱れ.mp3" id="212" preload="none"></audio>' +
        '212_4_津波　ダイヤ乱れ<button class="play" value="212">a</button><br>' +

        '<audio src="../00-menu/sound/213_4_運転再開まで【１時間】かかります.mp3" id="213" preload="none"></audio>' +
        '213_4_運転再開まで【１時間】かかります<button class="play" value="213">a</button><br>' +

        '<audio src="../00-menu/sound/214_4_二次元コード運行情報案内放送.mp3" id="214" preload="none"></audio>' +
        '214_4_二次元コード運行情報案内放送<button class="play" value="214">a</button><br>' +

        '<audio src="../00-menu/sound/215_4_二次元コード運行情報（平常時）.mp3" id="215" preload="none"></audio>' +
        '215_4_二次元コード運行情報（平常時）<button class="play" value="215">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">台風</span></summary>' +

        '<audio src="../00-menu/sound/216_4_台風の影響　運転見合わせ.mp3" id="216" preload="none"></audio>' +
        '216_4_台風の影響　運転見合わせ<button class="play" value="216">a</button><br>' +

        '<audio src="../00-menu/sound/217_4_台風の影響　ダイヤ乱れ.mp3" id="217" preload="none"></audio>' +
        '217_4_台風の影響　ダイヤ乱れ<button class="play" value="217">a</button><br>' +

        '<audio src="../00-menu/sound/218_4_【台風①】前日事前放送（早朝より見合わせの場合あり）.mp3" id="218" preload="none"></audio>' +
        '218_4_【台風①】前日事前放送（早朝より見合わせの場合あり）<button class="play" value="218">a</button><br>' +

        '<audio src="../00-menu/sound/219_4_【台風②】前日事前放送（明日は最終電車の時刻繰上げ）.mp3" id="219" preload="none"></audio>' +
        '219_4_【台風②】前日事前放送（明日は最終電車の時刻繰上げ）<button class="play" value="219">a</button><br>' +

        '<audio src="../00-menu/sound/220_4_【台風③】台風接近により本日は最終電車の時刻繰上げ.mp3" id="220" preload="none"></audio>' +
        '220_4_【台風③】台風接近により本日は最終電車の時刻繰上げ<button class="play" value="220">a</button><br>' +

        '<audio src="../00-menu/sound/221_4_【台風④】雨や風が強くなりますと見合わせます.mp3" id="221" preload="none"></audio>' +
        '221_4_【台風④】雨や風が強くなりますと見合わせます<button class="play" value="221">a</button><br>' +

        '<audio src="../00-menu/sound/222_4_【台風⑤】雨や風が強くなりますと見合わせる場合がある.mp3" id="222" preload="none"></audio>' +
        '222_4_【台風⑤】雨や風が強くなりますと見合わせる場合がある<button class="play" value="222">a</button><br>' +

        '<audio src="../00-menu/sound/223_4_【台風⑥】台風の影響で運転見合わせの場合あり.mp3" id="223" preload="none"></audio>' +
        '223_4_【台風⑥】台風の影響で運転見合わせの場合あり<button class="play" value="223">a</button><br>' +

        '<audio src="../00-menu/sound/224_4_【台風⑦】台風接近　影響により運転見合わせる.mp3" id="224" preload="none"></audio>' +
        '224_4_【台風⑦】台風接近　影響により運転見合わせる<button class="play" value="224">a</button><br>' +

        '<audio src="../00-menu/sound/225_4_【台風⑧】台風接近　順次運転本数減、見合わせる場合あり.mp3" id="225" preload="none"></audio>' +
        '225_4_【台風⑧】台風接近　順次運転本数減、見合わせる場合あり<button class="play" value="225">a</button><br>' +

        '<audio src="../00-menu/sound/226_4_【台風⑨】本日電車の運行は終了しています.mp3" id="226" preload="none"></audio>' +
        '226_4_【台風⑨】本日電車の運行は終了しています<button class="play" value="226">a</button><br>' +

        '<audio src="../00-menu/sound/227_4_【台風⑩】台風接近　順次運転本数減らす告知.mp3" id="227" preload="none"></audio>' +
        '227_4_【台風⑩】台風接近　順次運転本数減らす告知<button class="play" value="227">a</button><br>' +

        '<audio src="../00-menu/sound/228_4_【台風⑪】台風の影響により運転見合わせ中.mp3" id="228" preload="none"></audio>' +
        '228_4_【台風⑪】台風の影響により運転見合わせ中<button class="play" value="228">a</button><br>' +

        '<audio src="../00-menu/sound/229_4_【台風⑫】台風接近　順次運転見合わせ告知　再開見込みなし.mp3" id="229" preload="none"></audio>' +
        '229_4_【台風⑫】台風接近　順次運転見合わせ告知　再開見込みなし<button class="play" value="229">a</button><br>' +

        '<audio src="../00-menu/sound/230_4_【台風⑬】お詫び 一部見合わせ区間あり.mp3" id="230" preload="none"></audio>' +
        '230_4_【台風⑬】お詫び 一部見合わせ区間あり<button class="play" value="230">a</button><br>' +

        '<audio src="../00-menu/sound/231_4_【台風⑭】台風接近　順次運転本数減、見合わせる.mp3" id="231" preload="none"></audio>' +
        '231_4_【台風⑭】台風接近　順次運転本数減、見合わせる<button class="play" value="231">a</button><br>' +

        '<audio src="../00-menu/sound/232_4_【台風⑮】台風接近　順次運転本数減、見合わせる（減らしたうえ）.mp3" id="232" preload="none"></audio>' +
        '232_4_【台風⑮】台風接近　順次運転本数減、見合わせる（減らしたうえ）<button class="play" value="232">a</button><br>' +

        '<audio src="../00-menu/sound/233_4_台風計画運休事前告知①.mp3" id="233" preload="none"></audio>' +
        '233_4_台風計画運休事前告知①<button class="play" value="233">a</button><br>' +

        '<audio src="../00-menu/sound/234_4_台風計画運休事前告知②.mp3" id="234" preload="none"></audio>' +
        '234_4_台風計画運休事前告知②<button class="play" value="234">a</button><br>' +

        '<audio src="../00-menu/sound/235_4_台風計画運休事前告知③.mp3" id="235" preload="none"></audio>' +
        '235_4_台風計画運休事前告知③<button class="play" value="235">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">百貨店</span></summary>' +

        '<audio src="../00-menu/sound/236_4_次は、大阪上本町、上本町、近鉄百貨店前です。.mp3" id="236" preload="none"></audio>' +
        '236_4_次は、大阪上本町、上本町、近鉄百貨店前です。<button class="play" value="236">a</button><br>' +

        '<audio src="../00-menu/sound/237_4_大阪上本町、上本町、近鉄百貨店前です。.mp3" id="237" preload="none"></audio>' +
        '237_4_大阪上本町、上本町、近鉄百貨店前です。<button class="play" value="237">a</button><br>' +

        '<audio src="../00-menu/sound/238_4_まもなく、大阪上本町、上本町、近鉄百貨店前です。.mp3" id="238" preload="none"></audio>' +
        '238_4_まもなく、大阪上本町、上本町、近鉄百貨店前です。<button class="play" value="238">a</button><br>' +

        '<audio src="../00-menu/sound/239_4_次は、布施、布施、近鉄百貨店前です。.mp3" id="239" preload="none"></audio>' +
        '239_4_次は、布施、布施、近鉄百貨店前です。<button class="play" value="239">a</button><br>' +

        '<audio src="../00-menu/sound/240_4_布施、布施、近鉄百貨店前です。.mp3" id="240" preload="none"></audio>' +
        '240_4_布施、布施、近鉄百貨店前です。<button class="play" value="240">a</button><br>' +

        '<audio src="../00-menu/sound/241_4_次は、大和八木、八木、近鉄百貨店前です。.mp3" id="241" preload="none"></audio>' +
        '241_4_次は、大和八木、八木、近鉄百貨店前です。<button class="play" value="241">a</button><br>' +

        '<audio src="../00-menu/sound/242_4_大和八木、八木、近鉄百貨店前です。.mp3" id="242" preload="none"></audio>' +
        '242_4_大和八木、八木、近鉄百貨店前です。<button class="play" value="242">a</button><br>' +

        '<audio src="../00-menu/sound/243_4_次は、生駒、生駒、近鉄百貨店前です。.mp3" id="243" preload="none"></audio>' +
        '243_4_次は、生駒、生駒、近鉄百貨店前です。<button class="play" value="243">a</button><br>' +

        '<audio src="../00-menu/sound/244_4_生駒、生駒、近鉄百貨店前です。.mp3" id="244" preload="none"></audio>' +
        '244_4_生駒、生駒、近鉄百貨店前です。<button class="play" value="244">a</button><br>' +

        '<audio src="../00-menu/sound/245_4_次は、大和西大寺、西大寺、近鉄百貨店前です。.mp3" id="245" preload="none"></audio>' +
        '245_4_次は、大和西大寺、西大寺、近鉄百貨店前です。<button class="play" value="245">a</button><br>' +

        '<audio src="../00-menu/sound/246_4_大和西大寺、西大寺、近鉄百貨店前です。.mp3" id="246" preload="none"></audio>' +
        '246_4_大和西大寺、西大寺、近鉄百貨店前です。<button class="play" value="246">a</button><br>' +

        '<audio src="../00-menu/sound/247_4_次は、大阪阿部野橋、阿部野橋、近鉄百貨店前です。.mp3" id="247" preload="none"></audio>' +
        '247_4_次は、大阪阿部野橋、阿部野橋、近鉄百貨店前です。<button class="play" value="247">a</button><br>' +

        '<audio src="../00-menu/sound/248_4_大阪阿部野橋、阿部野橋、近鉄百貨店前です。.mp3" id="248" preload="none"></audio>' +
        '248_4_大阪阿部野橋、阿部野橋、近鉄百貨店前です。<button class="play" value="248">a</button><br>' +

        '<audio src="../00-menu/sound/249_4_まもなく、大阪阿部野橋、阿部野橋、近鉄百貨店前です。.mp3" id="249" preload="none"></audio>' +
        '249_4_まもなく、大阪阿部野橋、阿部野橋、近鉄百貨店前です。<button class="play" value="249">a</button><br>' +

        '<audio src="../00-menu/sound/250_2_近鉄百貨店前です。.mp3" id="250" preload="none"></audio>' +
        '250_2_近鉄百貨店前です。<button class="play" value="250">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">PR放送</span></summary>' +

        '<audio src="../00-menu/sound/251_1_①生駒山上遊園地PR放送（R元年）.mp3" id="251" preload="none"></audio>' +
        '251_1_①生駒山上遊園地PR放送（R元年）<button class="play" value="251">a</button><br>' +

        '<audio src="../00-menu/sound/252_1_②生駒山上遊園地PR放送（R元年）.mp3" id="252" preload="none"></audio>' +
        '252_1_②生駒山上遊園地PR放送（R元年）<button class="play" value="252">a</button><br>' +

        '<audio src="../00-menu/sound/253_1_③生駒山上遊園地PR放送（R元年）.mp3" id="253" preload="none"></audio>' +
        '253_1_③生駒山上遊園地PR放送（R元年）<button class="play" value="253">a</button><br>' +

        '<audio src="../00-menu/sound/254_4_古市古墳群世界遺産①.mp3" id="254" preload="none"></audio>' +
        '254_4_古市古墳群世界遺産①<button class="play" value="254">a</button><br>' +

        '<audio src="../00-menu/sound/255_4_古市古墳群世界遺産②.mp3" id="255" preload="none"></audio>' +
        '255_4_古市古墳群世界遺産②<button class="play" value="255">a</button><br>' +

        '<audio src="../00-menu/sound/256_4_古市古墳群世界遺産③.mp3" id="256" preload="none"></audio>' +
        '256_4_古市古墳群世界遺産③<button class="play" value="256">a</button><br>' +

        '<audio src="../00-menu/sound/257_4_古市古墳群世界遺産④.mp3" id="257" preload="none"></audio>' +
        '257_4_古市古墳群世界遺産④<button class="play" value="257">a</button><br>' +

        '<audio src="../00-menu/sound/258_1_定期券購入促進放送.mp3" id="258" preload="none"></audio>' +
        '258_1_定期券購入促進放送<button class="play" value="258">a</button><br>' +

        '</details>' +

        /////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        '<details>' +
        '<summary><span style="color: blue">充当案内放送</span></summary>' +

        '<audio src="../00-menu/sound/259_4_橿原神宮前行急行充当.mp3" id="259" preload="none"></audio>' +
        '259_4_橿原神宮前行急行充当<button class="play" value="259">a</button><br>' +

        '<audio src="../00-menu/sound/260_4_天理行急行充当.mp3" id="260" preload="none"></audio>' +
        '260_4_天理行急行充当<button class="play" value="260">a</button><br>' +

        '<audio src="../00-menu/sound/261_4_奈良行各駅停車充当.mp3" id="261" preload="none"></audio>' +
        '261_4_奈良行各駅停車充当<button class="play" value="261">a</button><br>' +

        '<audio src="../00-menu/sound/262_4_橿原神宮前行各駅停車充当.mp3" id="262" preload="none"></audio>' +
        '262_4_橿原神宮前行各駅停車充当<button class="play" value="262">a</button><br>' +

        '<audio src="../00-menu/sound/263_4_東花園行各駅停車充当.mp3" id="263" preload="none"></audio>' +
        '263_4_東花園行各駅停車充当<button class="play" value="263">a</button><br>' +

        '<audio src="../00-menu/sound/264_4_尼崎行各駅停車充当.mp3" id="264" preload="none"></audio>' +
        '264_4_尼崎行各駅停車充当<button class="play" value="264">a</button><br>' +

        '<audio src="../00-menu/sound/265_4_大阪難波行準急充当.mp3" id="265" preload="none"></audio>' +
        '265_4_大阪難波行準急充当<button class="play" value="265">a</button><br>' +

        '<audio src="../00-menu/sound/266_4_奈良行準急充当.mp3" id="266" preload="none"></audio>' +
        '266_4_奈良行準急充当<button class="play" value="266">a</button><br>' +

        '<audio src="../00-menu/sound/267_4_東生駒行各駅停車充当.mp3" id="267" preload="none"></audio>' +
        '267_4_東生駒行各駅停車充当<button class="play" value="267">a</button><br>' +

        '<audio src="../00-menu/sound/268_4_大和西大寺行各駅停車充当.mp3" id="268" preload="none"></audio>' +
        '268_4_大和西大寺行各駅停車充当<button class="play" value="268">a</button><br>' +

        '<audio src="../00-menu/sound/269_4_京都行各駅停車充当.mp3" id="269" preload="none"></audio>' +
        '269_4_京都行各駅停車充当<button class="play" value="269">a</button><br>' +

        '<audio src="../00-menu/sound/270_4_京都行準急充当.mp3" id="270" preload="none"></audio>' +
        '270_4_京都行準急充当<button class="play" value="270">a</button><br>' +

        '<audio src="../00-menu/sound/271_4_京都行急行充当.mp3" id="271" preload="none"></audio>' +
        '271_4_京都行急行充当<button class="play" value="271">a</button><br>' +

        '<audio src="../00-menu/sound/272_4_宮津行各駅停車充当.mp3" id="272" preload="none"></audio>' +
        '272_4_宮津行各駅停車充当<button class="play" value="272">a</button><br>' +

        '<audio src="../00-menu/sound/273_4_国際会館行各駅停車充当.mp3" id="273" preload="none"></audio>' +
        '273_4_国際会館行各駅停車充当<button class="play" value="273">a</button><br>' +

        '<audio src="../00-menu/sound/274_4_大阪上本町行急行充当.mp3" id="274" preload="none"></audio>' +
        '274_4_大阪上本町行急行充当<button class="play" value="274">a</button><br>' +

        '<audio src="../00-menu/sound/275_4_五十鈴川行急行充当.mp3" id="275" preload="none"></audio>' +
        '275_4_五十鈴川行急行充当<button class="play" value="275">a</button><br>' +

        '<audio src="../00-menu/sound/276_4_青山町行各駅停車充当.mp3" id="276" preload="none"></audio>' +
        '276_4_青山町行各駅停車充当<button class="play" value="276">a</button><br>' +

        '</details>'
    );

});
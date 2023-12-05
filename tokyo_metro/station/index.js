$(() => {
    let playing = []; //再生中の音声idのリスト、一括停止に使用

    // 全音声停止
    $("#stopall").click(() => {
        while (playing.length > 0) {
            $("#" + playing[0]).get(0).pause();
            $("#" + playing[0]).off();
            playing.shift();
        }
    });

    //音量
    $("#volume").on('input', () => {
        $("#voral_range").html($("#volume").val());
        let i = 0;
        while (i < playing.length) {
            $("#" + playing[i]).get(0).volume = $("#volume").val();
            i = i + 1;
        }
    });

    // 発車放送 再生ボタン押下////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    function playdep(lineInit) {
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).currentTime = 0;
            $("#" + selected).get(0).volume = $("#volume").val();
            $("#" + selected).get(0).play();
            return;
        }

        $("#" + selected + "_dep").get(0).currentTime = 0;
        $("#" + selected + "_dep").get(0).volume = $("#volume").val();
        $("#" + selected + "_dep").get(0).play();
        if ($.inArray(selected + "_dep", playing) == -1) {
            playing.push(selected + "_dep");

            $("#" + selected + "_dep").on("ended", () => {
                let index = $.inArray(selected + "_dep", playing);
                playing.splice(index, 1);
                $("#" + selected + "_dep").off();
            });
        }
    }
    //銀座線
    $("#playdepG").click(() => {
        let lineInit = "G";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //丸ノ内線
    $("#playdepM").click(() => {
        let lineInit = "M";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //日比谷線
    $("#playdepH").click(() => {
        let lineInit = "H";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //東西線
    $("#playdepT").click(() => {
        let lineInit = "T";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //千代田線
    $("#playdepC").click(() => {
        let lineInit = "C";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //有楽町線
    $("#playdepY").click(() => {
        let lineInit = "Y";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //半蔵門線
    $("#playdepZ").click(() => {
        let lineInit = "Z";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //南北線
    $("#playdepN").click(() => {
        let lineInit = "N";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });
    //副都心線
    $("#playdepF").click(() => {
        let lineInit = "F";
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            $("#" + selected).get(0).load();
        } else {
            $("#" + selected + "_dep").get(0).load();
        }
        playdep(lineInit);
    });

    // 発車放送 停止ボタン押下/////////////////////////////////////
    /////////////////////////////////////////////////////////////
    function stopdep(lineInit) {
        let selected = $("#selectDep" + lineInit).val();
        if (selected == "00-NA") {
            return;
        }
        $("#" + selected + "_dep").get(0).pause();
        let index = $.inArray(selected + "_dep", playing);
        playing.splice(index, 1);
        $("#" + selected + "_dep").off();
    }
    //銀座線
    $("#stopdepG").click(() => { stopdep("G"); });
    //丸ノ内線
    $("#stopdepM").click(() => { stopdep("M"); });
    //日比谷線
    $("#stopdepH").click(() => { stopdep("H"); });
    //東西線
    $("#stopdepT").click(() => { stopdep("T"); });
    //千代田線
    $("#stopdepC").click(() => { stopdep("C"); });
    //有楽町線
    $("#stopdepY").click(() => { stopdep("Y"); });
    //半蔵門線
    $("#stopdepH").click(() => { stopdep("H"); });
    //南北線
    $("#stopdepN").click(() => { stopdep("N"); });
    //副都心線
    $("#stopdepF").click(() => { stopdep("F"); });
})
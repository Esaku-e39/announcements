$(() => {
    let playList = []; //未再生の音声を流す順に格納。
    let playing = false;
    let played = []; //再生したことのある音声を格納。on("ended")の処理をダブらせない用

    //音量
    $("#volume").on('input', () => {
        $("#voral_range").html($("#volume").val());
        let i = 0;
        while (i < playList.length) {
            $("#" + playList[i]).get(0).volume = $("#volume").val();
            i = i + 1;
        }
    });

    function playaudio(selected) {
        $("#" + selected).get(0).load();
        $("#" + selected).get(0).currentTime = 0;
        $("#" + selected).get(0).volume = $("#volume").val();
        $("#" + selected).get(0).play();
        playing = true;

        if ($.inArray(selected, played) == -1) {
            //その音声が初めて再生されるときに、音声終了時の処理を追加
            played.push(selected);
            $("#" + selected).on("ended", () => {
                playList.splice(0, 1);
                if (playList.length == 0) {
                    playing = false;
                    return;
                } else {
                    selected = playList[0];
                    playaudio(selected);
                }

            });
        }
    }

    // 再生ボタン押下 /////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    $(".play").click(function () {
        let selected = $(this).val();

        if (selected == "resume") {
            if (playList.length > 0) {
                $("#" + playList[0]).get(0).play();
            }

            return;
        }

        playList.push(selected);

        let door = $('input:radio[name=' + "door-" + selected + ']:checked').val();
        if (door == "left") {
            playList.push("door_left");
        } else if (door == "bothleft") {
            playList.push("door_bothleft");
        } else if (door == "bothright") {
            playList.push("door_bothright");
        } else if (door == "right") {
            playList.push("door_right");
        }

        if (playing == false) {
            playaudio(selected);
        }

    });

    // 停止ボタン押下 /////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    $(".stop").click(function () {
        let selected = $(this).val();
        if (selected == "pause") {
            $("#" + playList[0]).get(0).pause();
        } else if (selected == "cancel") {
            $("#" + playList[0]).get(0).pause();
            playList = [];
            playing = false;
        }
    });
})
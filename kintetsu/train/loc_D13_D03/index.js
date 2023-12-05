$(() => {
    let playList = [];
    let playing = false;

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
        $("#" + selected).get(0).play();
        playing = true;

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
        } else if (door == "both") {
            playList.push("door_both");
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
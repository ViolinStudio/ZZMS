/* global ms */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.getDirectionStatus(true);
        ms.lockUI(1, 0);
        ms.getDirectionEffect(1, "", [6600]);
        ms.getDirectionStatus(true);
        ms.showWZEffect("Effect/Direction10.img/angelicTuto/Scene2");
    } else if (status === i++) {
        ms.lockUI(0);
        ms.dispose();
        ms.warp(940011110, 0);
    } else {
        ms.dispose();
    }
}

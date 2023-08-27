window.addEventListener('load', function theseFunc() {
    MinecraftAPI.getServerStatus('hoodliferp.xyz', {
            port: 25565
    }, function (err, status) {
            if (err) {
                    return document.querySelector('.players').innerHTML = 'Server is offline...';
            }
            document.querySelector('.players').innerHTML = status.players.now;
    });
  });
      function scheduleTurn(timeout) {
        if (timeout >= 0) {
          setTimeout(function() {
            var timeout = Module._handle_message();
            scheduleTurn(timeout);
          }, timeout);
        }
      }

      var Module = {
        noInitialRun: true,
        noExitRuntime: true,
        onRuntimeInitialized: function() {
          var url = new URLSearchParams(window.location.search);
          var request = new XMLHttpRequest();
          request.open("GET", url.get("snapshot"), true);
          request.responseType = "arraybuffer";
          request.onload = function (event) {
            var jsBuffer = new Uint8Array(request.response);
            var cBuffer = _malloc(jsBuffer.length);
            writeArrayToMemory(jsBuffer, cBuffer);
            Module._load_snapshot(cBuffer, jsBuffer.length);
            _free(cBuffer);
            scheduleTurn(0);
          };
          request.send();
        },
        print: function(text) {
          if (arguments.length > 1) {
            text = Array.prototype.slice.call(arguments).join(" ");
          }
          console.log(text);

          var pre = document.createElement("pre");
          pre.textContent = text;
          pre.style.color = "black";
          document.body.appendChild(pre);
          window.scrollTo(0, document.body.scrollHeight);
        },
        printErr: function(text) {
          if (arguments.length > 1) {
            text = Array.prototype.slice.call(arguments).join(" ");
          }
          console.error(text);

          var pre = document.createElement("pre");
          pre.textContent = text;
          pre.style.color = "red";
          document.body.appendChild(pre);
          window.scrollTo(0, document.body.scrollHeight);
        },
        setStatus: function(text) {
          console.log(text);
        },
      };

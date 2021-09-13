import React, { FC, useContext, useEffect } from "react";
import { EventContext, Styled } from "direflow-component";
import CodeMirror from "codemirror";

import { PrimordialSoup } from "./lib/primordialsoup";

CodeMirror;
interface IProps {
  snapshot: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => {
  useEffect(() => {
    function scheduleTurn(timeout: number) {
      if (timeout >= 0) {
        setTimeout(function () {
          var timeout = PrimordialSoup._handle_message();
          scheduleTurn(timeout);
        }, timeout);
      }
    }

    let ps = {
      noInitialRun: true,
      noExitRuntime: true,
      onRuntimeInitialized: function () {
        var url = new URLSearchParams(window.location.search);
        var request = new XMLHttpRequest();
        request.open("GET", url.get(props.snapshot) || "", true);
        request.responseType = "arraybuffer";
        request.onload = function (event) {
          var jsBuffer = new Uint8Array(request.response);
          var cBuffer = PrimordialSoup._malloc(jsBuffer.length);
          PrimordialSoup.writeArrayToMemory(jsBuffer, cBuffer);
          PrimordialSoup._load_snapshot(cBuffer, jsBuffer.length);
          PrimordialSoup._free(cBuffer);
          scheduleTurn(0);
        };
        request.send();
      },
      print: function (text: string | null) {
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
      printErr: function (text: string | null) {
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
      setStatus: function (text: any) {
        console.log(text);
      },
    };
    return () => {
      PrimordialSoup._cleanup();
    };
  }, []);

  return (
    <div>
      <script async type="text/javascript" src="primordialsoup.js"></script>
      <script src="CodeMirror/lib/codemirror.js"></script>
      <link rel="stylesheet" href="CodeMirror/lib/codemirror.css"></link>
      <script src="CodeMirror/addon/display/autorefresh.js"></script>
    </div>
  );
};

App.defaultProps = {
  snapshot: "ShapeRankWithIDE.vfuel",
};

export default App;

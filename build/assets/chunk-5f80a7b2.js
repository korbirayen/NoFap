chrome.runtime.onMessage.addListener(function(e,t,a){e.action==="fapSkipped"&&chrome.storage.local.get("fapCount",function(o){const n=o.fapCount||0;chrome.storage.local.set({fapCount:n+1})})});

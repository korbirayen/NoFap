const n=["Detour: Explore the real world instead.","Locked out of temptation, unlocked potential awaits.","Pause for thought: What will you choose next?","Blocked for your betterment: Seek inspiration elsewhere.","One small click for control, one giant leap for self-mastery.","Taking a detour from distraction, paving the way for focus.","Denied access: Elevating your digital experience.","Breaking chains: Your journey to freedom starts here.","You're worth more than this momentary pleasure.","Break the cycle, empower your self-control.","Opportunity for growth: choose wisely.","Stepping away from the screen, stepping into your potential.","Investing in your future self by blocking this site.","Resisting temptation, embracing progress."];function s(t){const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.display="flex",e.style.zIndex="999999999999999999999999999999",e.style.alignItems="center",e.style.justifyContent="center",e.style.backgroundColor="rgba(0, 0, 0, 1)",e.style.color="#FFFFFF",e.style.fontSize="24px",e.innerHTML=`
      <p style="text-align: center">
        ${t}
      </p>
    `,document.body.style.maxHeight="100vh",document.body.style.overflow="hidden",document.body.appendChild(e)}const i=n[Math.floor(Math.random()*n.length)],l=chrome.runtime.getURL("list.txt");fetch(l).then(t=>t.text()).then(t=>{const e=t.split(`,
`).filter(o=>o.trim()!==""),r=window.location.host;e.some(o=>r.includes(o.trim()))&&(s(i),chrome.runtime.sendMessage({action:"fapSkipped"}))}).catch(t=>console.error("Error reading blocked URLs file:",t));

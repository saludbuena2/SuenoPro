!function(c,l,a,r,i,t,y){a[c]("metadata",(function(e){function n(){var n=ga.getAll();for(var o in n){var s=n[o];if("UA-211495162-1"===s.get("trackingId")){s.set("dimension1",["https://clarity.microsoft.com/ga",e.projectId,e.userId,e.sessionId].join("/")),s.send("event",{eventCategory:"Clarity",nonInteraction:!0,eventAction:e.sessionId});break}}}try{ga&&ga(n)}catch(e){try{n()}catch(e){}}}));if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://h.clarity.ms/s/0.6.31/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop())}("clarity",document,window,"script",{"projectId":"9ae918rah7","upload":"https://h.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"fallback":"https://www.clarity.ms/eus-c/collect","content":true,"unmask":["body"],"report":"https://www.clarity.ms/report/eusc"});
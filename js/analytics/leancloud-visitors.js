!function(){function r(e){return e=encodeURI(e),document.getElementById(e).querySelector(".leancloud-visitors-count")}const{app_id:c,app_key:s,server_url:e}=CONFIG.leancloudVisitors;function t(n){var e=(e,t,o)=>fetch(`${n}/1.1${t}`,{method:e,headers:{"X-LC-Id":c,"X-LC-Key":s,"Content-Type":"application/json"},body:JSON.stringify(o)});CONFIG.page.isPost?function(t){var e=document.querySelector(".leancloud_visitors");const o=decodeURI(e.id),n=e.dataset.flagTitle;t("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:o}))).then(e=>e.json()).then(({results:e})=>{0<e.length?(e=e[0],r(o).innerText=e.time+1,t("put","/classes/Counter/"+e.objectId,{time:{__op:"Increment",amount:1}}).catch(e=>{console.error("Failed to save visitor count",e)})):t("post","/classes/Counter",{title:n,url:o,time:1}).then(e=>e.json()).then(()=>{r(o).innerText=1}).catch(e=>{console.error("Failed to create",e)})}).catch(e=>{console.error("LeanCloud Counter Error",e)})}(e):1<=document.querySelectorAll(".post-title-link").length&&function(e){const n=[...document.querySelectorAll(".leancloud_visitors")].map(e=>decodeURI(e.id));e("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:{$in:n}}))).then(e=>e.json()).then(({results:e})=>{for(let t of n){var o=e.find(e=>e.url===t);r(t).innerText=o?o.time:0}}).catch(e=>{console.error("LeanCloud Counter Error",e)})}(e)}var o="-MdYXbMMI"===c.slice(-9)?`https://${c.slice(0,8).toLowerCase()}.api.lncldglobal.com`:e;o?t(o):fetch("https://app-router.leancloud.cn/2/route?appId="+c).then(e=>e.json()).then(({api_server:e})=>{t("https://"+e)})}();
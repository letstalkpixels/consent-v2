(()=>{"use strict";(()=>{const t=(t,n)=>{const e=window;if(e.gtag=function(){e.dataLayer.push(arguments)},!e.dataLayer)return;const a={ad_storage:n.marketing?"granted":"denied",analytics_storage:n.analytics?"granted":"denied",functionality_storage:"granted",personalization_storage:n.personalization?"granted":"denied",security_storage:"granted"};e.gtag("consent",t,a)};(()=>{const n=window;n.FsCC&&n.FsCC.push((n=>{t("default",n.store.getConsents()),n.banner.on("allow",(()=>{t("update",n.store.getConsents())})),n.banner.on("deny",(()=>{t("update",n.store.getConsents())})),n.banner.on("updateconsents",(()=>{t("update",n.store.getConsents())}))}))})()})()})();
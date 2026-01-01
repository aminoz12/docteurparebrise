'use client';

import Script from 'next/script';

export function TawkToScript() {
  const propertyId = '6954a49d77947219771f1c9d';
  const widgetId = '1jdpa61o4';

  return (
    <Script id="tawkto-script" strategy="lazyOnload">
      {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/${propertyId}/${widgetId}';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `}
    </Script>
  );
}

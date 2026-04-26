import { useEffect, useRef } from 'react';

const AmoCRMForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Clear container to prevent duplicate forms on re-mount
      container.innerHTML = '';
      
      const script1 = document.createElement("script");
      script1.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1703794",hash:"3fd7075deb80224c6744d37eafcef91e",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
      
      const script2 = document.createElement("script");
      script2.id = "amoforms_script_1703794";
      script2.async = true;
      script2.charset = "utf-8";
      script2.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1777218346";

      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-[400px] flex items-center justify-center [&>iframe]:w-full [&>iframe]:rounded-xl"
    >
      <div className="animate-pulse text-navy/50">Forma yuklanmoqda...</div>
    </div>
  );
};

export default AmoCRMForm;

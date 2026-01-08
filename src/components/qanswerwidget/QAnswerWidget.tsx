import { useEffect, useRef } from 'react';

export default function QAnswerWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (el.querySelector('#qanswer-widget')) return;

    el.innerHTML = `
      <iframe
        src="https://app.qanswer.ai/widget?kb=Judith&user=marcushorv&type=text&isSharepoint=true"
        id="qanswer-widget"
        class="embed-ai"
        allow="microphone; clipboard-write"
        referrerpolicy="origin"
        frameborder="0"
        style="border:none;overflow:hidden;width:600px;min-height:500px;"
        allowtransparency="true"
        onload="
          var iframe = this;
          window.addEventListener('message', function (e) {
            if (e.origin !== 'https://app.qanswer.ai') return;
            if (e.data.type === 'eval') Function(e.data.code).call(null, iframe);
          });
        "
      ></iframe>
    `;
  }, []);

  return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} ref={containerRef} />;
}

import { useEffect } from 'react';

export default function QAnswerPopup() {
  useEffect(() => {
    // avoid duplicates (StrictMode / rerenders)
    if (document.getElementById('qanswer-widget')) return;

    const container = document.createElement('div');
    container.innerHTML = `
      <iframe
        src="https://app.qanswer.ai/widget?kb=Judith&user=marcushorv&type=text"
        id="qanswer-widget"
        class="popup-ai"
        allow="microphone; clipboard-write"
        referrerpolicy="origin"
        frameborder="0"
        style="border:none;overflow:hidden;display:none;position:fixed;right:16px;bottom:16px;z-index:9999;"
        allowtransparency="true"
        width="10px"
        height="10px"
        onload="
          var iframe = this;
          window.addEventListener('message', function (e) {
            if (e.origin !== 'https://app.qanswer.ai') return;
            if (e.data.type === 'eval') Function(e.data.code).call(null, iframe);
          });
        "
      ></iframe>
    `;

    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null;
}

/* eslint-disable react/prop-types */
export default function FooterHex({ hexScheme }) {
    function handleClick(event) {
      let hexcode = event.target.textContent;
      navigator.clipboard.writeText(hexcode);
      alert("Color " + hexcode + " copied!");
    }
  
    return (
      <section className="flex flex-row items-center justify-between w-full h-16 p-1 text-xs bg-slate-600">
        <p
          className="w-full h-full leading-10 text-center cursor-copy hover:text-sm hover:font-semibold"
          onClick={handleClick}
        >
          {hexScheme.first.toUpperCase()}
        </p>
        <p
          className="w-full h-full leading-10 text-center cursor-copy hover:text-sm hover:font-semibold"
          onClick={handleClick}
        >
          {hexScheme.second.toUpperCase()}
        </p>
        <p
          className="w-full h-full leading-10 text-center cursor-copy hover:text-sm hover:font-semibold"
          onClick={handleClick}
        >
          {hexScheme.third.toUpperCase()}
        </p>
        <p
          className="w-full h-full leading-10 text-center cursor-copy hover:text-sm hover:font-semibold"
          onClick={handleClick}
        >
          {hexScheme.fourth.toUpperCase()}
        </p>
        <p
          className="w-full h-full leading-10 text-center cursor-copy hover:text-sm hover:font-semibold"
          onClick={handleClick}
        >
          {hexScheme.fifth.toUpperCase()}
        </p>
      </section>
    );
  }
  
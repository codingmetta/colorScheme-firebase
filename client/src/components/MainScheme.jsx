/* eslint-disable react/prop-types */
export default function MainScheme({ colorScheme }) {
  return (
    <section className="flex flex-row justify-around h-full">
      <div
        className="w-full h-full"
        style={{ backgroundColor: colorScheme.first }}
      ></div>
      <div
        className="w-full h-full"
        style={{ backgroundColor: colorScheme.second }}
      ></div>
      <div
        className="w-full h-full"
        style={{ backgroundColor: colorScheme.third }}
      ></div>
      <div
        className="w-full h-full"
        style={{ backgroundColor: colorScheme.fourth }}
      ></div>
      <div
        className="w-full h-full"
        style={{ backgroundColor: colorScheme.fifth }}
      ></div>
    </section>
  );
}

/* eslint-disable react/prop-types */
export default function HeaderTools({ colorScheme, handleChange, handleMode }) {
  function changeColor(event) {
    handleChange(event.target.value);
  }

  function changeMode(event) {
    handleMode(event.target.value);
  }

  return (
    <section className="flex flex-row items-center justify-between w-full h-20 gap-4 p-3 bg-slate-600">
      <label htmlFor="colorpicker" className="visually-hidden">
        Choose a color
      </label>
      <input
        type="color"
        className="w-full border rounded cursor-pointer h-9 hover:border-2"
        value={colorScheme.first}
        onChange={changeColor}
      />
      <div className="w-full h-9">
        <select
          id="select"
          name="select"
          className="p-2.5 bg-transparent border rounded text-sm"
          onChange={changeMode}
        >
          <option value="0">Monochrome</option>
          <option value="1">Monochrome-dark</option>
          <option value="2">Monochrome-light</option>
          <option value="3">Analogic</option>
          <option value="4">Complement</option>
          <option value="5">Analogic-Complement</option>
          <option value="6">Triad</option>
        </select>
      </div>
    </section>
  );
}

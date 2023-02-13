export default function Homepage() {
  return (
    <div>
      <div className="text-7xl text-center text-purple-700 font-bold italic">
        Tomasz
      </div>
      <div className="text-center text-gray-700 text-xl">
        I'm a bootcamp student
      </div>

      <div id="book-grid" className="mt-20 grid grid-cols-3 bg-red-100 w-full">
        <div id="book1" className="bg-green-100 p-4">
          <p className="title mb-4 text-center text-xl font-medium">
            Game of Thrones
          </p>
          <p className="author text-sm text-gray-700 text-center">
            George RR Martin
          </p>
        </div>
        <div id="book2">
          <p className="title">Atomic Habits</p>
          <p className="author">James Clear</p>
        </div>
        <div id="book3">
          <p className="title">Born a Crime</p>
          <p className="author">Trevor Noah</p>
        </div>
      </div>
    </div>
  );
}

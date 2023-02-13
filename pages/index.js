import BookGrid from "@/components/home/book-grid";

export default function Homepage() {
  return (
    <div>
      <div className="text-7xl text-center text-purple-700 font-bold italic">
        Tomasz
      </div>
      <div className="text-center text-gray-700 text-xl">
        I'm a bootcamp student
      </div>
      <BookGrid></BookGrid>
    </div>
  );
}

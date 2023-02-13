import BookGrid from "@/components/home/book-grid";
import Hero from "@/components/home/hero";
import Bio from "../components/home/bio";

export default function Homepage() {
  return (
    <div>
      <Hero name="Tomasz"></Hero>

      <Bio text="I'm a bootcamp student"></Bio>

      <BookGrid></BookGrid>
    </div>
  );
}

import Navbar from "@/components/Navbar";

export default function Reports() {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] flex  flex-col ">
        <h2 className="text-[28px] font-bold mb-[25px]">Reports</h2>
        <p className="text-[gray] mb-[15px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh viverra non semper suscipit posuere a pede.
        </p>
      </div>
    </div>
  );
}

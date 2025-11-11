export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-4 sm:py-6 mt-10">
      <div className="text-center text-sm sm:text-base font-body px-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">Delaw Car Autos</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}

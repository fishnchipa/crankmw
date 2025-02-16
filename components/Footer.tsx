export default function Footer() {
  return (
    <div className="w-full sm:h-[500px] flex flex-col sm:flex-row justify-between bg-[#494949] text-white px-5 sm:px-[80px] py-10 gap-y-10">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-[20px] text-[#F5A329]">GET IN TOUCH</h1>
        <h2>Crank Motor Werkes</h2>
        <h2>+61 02 8044 3000</h2>
        <h2>Admin@crankmw.com.au</h2>
      </div>
      <div className="w-[250px] flex flex-col gap-y-5">
        <h1 className="text-[20px] text-[#F5A329]">LOOKING FOR DEALS ?</h1>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <input
          placeholder="Enter your email address"
          className="bg-transparent border-white border placeholder-white px-7 py-4 text-left"
        />
        <button className="bg-[#F5A329] px-7 py-4 text-black hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

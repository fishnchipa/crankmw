
export default function Video() {


  return (
    <div className="w-full h-[100vh] relative pb-[56.25%] font-noto-sans">
      <div className="flex flex-col gap-y-2 absolute left-14 bottom-48 z-10 text-white">
        <h3 className="text-[18px] ">CRANK MOTOR WERKES</h3>
        <h1 className="text-[34px] font-semibold">EURO TUNING SPECIALIST - A ONE STOP SHOP</h1>
      </div>
      <iframe 
        className="absolute w-full h-full pointer-events-none"
        src={"https://www.youtube.com/embed/l6bZ2UhnWUE?si=sC7rGeky7TZ9Ul36&autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&showinfo=0"} 
        title="720s Flamethrower" 
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

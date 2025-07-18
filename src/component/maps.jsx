const Maps = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold text-center mb-4">Lokasi Kami</h2>
      <div className="w-full aspect-video max-w-4xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.481039647104!2d110.681!3d-7.838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTAnMTcuMCJTIDExMMKwNDAnNTIuMCJF!5e0!3m2!1sid!2sid!4v1654678435240"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Maps

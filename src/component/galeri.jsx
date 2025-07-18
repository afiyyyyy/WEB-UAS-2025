const Galeri = () => {
  const images = [
   <img src="https://via.placeholder.com/300x200" alt="Placeholder" />
  ]

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6">Galeri Destinasi</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`destinasi-${i}`} className="rounded shadow" />
        ))}
      </div>
    </section>
  )
}

export default Galeri

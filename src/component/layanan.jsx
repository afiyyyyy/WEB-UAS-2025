const Layanan = () => {
  const services = [
    { title: 'Paket Wisata Domestik', desc: 'Jelajahi keindahan alam Indonesia bersama kami.' },
    { title: 'Paket Wisata Internasional', desc: 'Liburan ke luar negeri jadi lebih mudah.' },
    { title: 'Sewa Kendaraan', desc: 'Sewa mobil dan bus pariwisata untuk berbagai keperluan.' },
  ]
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Layanan

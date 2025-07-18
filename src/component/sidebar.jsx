const Sidebar = () => {
  const menu = [
    { id: 'hero', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'video', label: 'Video' },
    { id: 'lokasi', label: 'Lokasi' },
    { id: 'kontak', label: 'Kontak' }
  ]

  return (
    <aside className="sidebar">
      <h1>Laroyba Travel</h1>
      <nav>
        {menu.map(item => (
          <a key={item.id} href={`#${item.id}`}>{item.label}</a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

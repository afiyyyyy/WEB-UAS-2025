const VideoSection = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Video Perjalanan</h2>
      <div className="aspect-video w-full max-w-4xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xkRXnrvFCY0"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default VideoSection

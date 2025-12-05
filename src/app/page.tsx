import Image from 'next/image';

export default function Home() {
  const images = [
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.04890652492083758.png', alt: 'Hero' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9557001055549769.png', alt: 'Galeria 1 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2482441401251798.png', alt: 'Galeria 1 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8160836826111167.png', alt: 'Galeria 1 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6304276352856464.png', alt: 'Galeria 2 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.22366443685907333.png', alt: 'Galeria 2 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8951395140142531.png', alt: 'Galeria 2 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.23540066189633269.png', alt: 'Galeria 3 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.12545215779600805.png', alt: 'Galeria 3 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.36664727400421226.png', alt: 'Galeria 3 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.528031585236167.png', alt: 'Galeria 4 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.48541803970463615.png', alt: 'Galeria 4 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1623623161461204.png', alt: 'Galeria 4 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5636888470490611.png', alt: 'Galeria 5 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2573022805220907.png', alt: 'Galeria 5 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.42474111782368484.png', alt: 'Galeria 5 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.4629867504754698.png', alt: 'Galeria 6 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8122819465572874.png', alt: 'Galeria 6 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.3723883508418051.png', alt: 'Galeria 6 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1888339076872496.png', alt: 'Galeria 7 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.784261066362648.png', alt: 'Galeria 7 Imagem 2' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6865069080025197.png', alt: 'Galeria 7 Imagem 3' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.264205592148686.png', alt: 'Galeria 8 Imagem 1' },
    { src: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.37755352851536284.png', alt: 'Galeria 8 Imagem 2' },
  ];

  return (
    <main>
      <div className="flex flex-col items-center">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1080}
            height={1920}
            className="w-full h-auto"
            priority={index < 3}
          />
        ))}
      </div>
      <div className="text-center my-10 px-5">
        <button className="bg-[#ff4f8b] hover:bg-[#e04478] text-white font-bold py-4 px-8 rounded-lg text-2xl transition-colors duration-300">
          GARANTIR MEU ACESSO AO CURSO
        </button>
      </div>
    </main>
  );
}

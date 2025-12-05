import Image from 'next/image';

export default function Home() {
  const images = [
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.04890652492083758.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9557001055549769.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2482441401251798.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8160836826111167.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6304276352856464.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.22366443685907333.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8951395140142531.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.23540066189633269.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.12545215779600805.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.36664727400421226.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.528031585236167.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.48541803970463615.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1623623161461204.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5636888470490611.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2573022805220907.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.42474111782368484.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.4629867504754698.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8122819465572874.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.3723883508418051.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1888339076872496.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.784261066362648.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6865069080025197.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.264205592148686.png',
    'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.37755352851536284.png'
  ];

  return (
    <main>
      <div className="flex flex-col items-center">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Página de vendas, seção ${index + 1}`}
            width={1080} 
            height={1920}
            className="w-full h-auto"
            priority={index < 2} 
          />
        ))}
      </div>
    </main>
  );
}

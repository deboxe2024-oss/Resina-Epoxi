import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';


export const About = () => {
    const aboutVideo = getImage('about-us-video');
    return (
        <section id="about" className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
                            Conheça nossa história
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Somos a Isabelle e o Samuel, um casal de biólogos especialistas em botânica e na arte de transformar plantas naturais em joias. Temos mais de 3 mil clientes espalhados por todo o Brasil.
                        </p>
                        <p className="text-lg text-gray-700">
                            Nosso trabalho já foi reconhecido pela revista Pequenas Empresas & Grandes Negócios e nossa história já foi contada no programa Terra de Minas da Rede Globo de Televisão. Neste curso, ensinaremos você a criar suas próprias joias botânicas.
                        </p>
                    </div>
                     <div className="flex justify-center">
                        {aboutVideo &&
                             <video 
                                src={aboutVideo.imageUrl} 
                                controls 
                                className="rounded-lg shadow-lg w-full h-auto"
                                preload="metadata"
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

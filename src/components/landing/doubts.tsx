import { Button } from '../ui/button';
import { Instagram, MessageCircle } from 'lucide-react';

export const Doubts = () => {
    return (
        <section id="doubts" className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-primary mb-6">
                    Ficou com alguma dúvida?
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href="#">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chame no WhatsApp
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href="#">
                            <Instagram className="mr-2 h-5 w-5" />
                            Chame no Instagram
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

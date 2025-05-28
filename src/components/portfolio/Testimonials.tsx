import { motion } from 'framer-motion';
import type { TestimonialItem, TestimonialsProps } from "../../types";

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, displayMode = 'grid' }) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    const renderTestimonialCard = (testimonial: TestimonialItem) => (
        <motion.div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ amount: 0.2 }}
        >
            {testimonial.logoUrl && (
                <img
                    src={testimonial.logoUrl}
                    alt={testimonial.company || testimonial.author}
                    className="h-12 mb-4 object-contain dark:invert-[0.8]"
                />
            )}
            <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-lg leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center mt-auto">
                {testimonial.authorImageUrl && (
                    <img
                        src={testimonial.authorImageUrl}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                )}
                <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</p>
                    {testimonial.company && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <motion.section
            id="testimonials"
            className="py-12 md:py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-10 md:mb-16 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-cyan-300">
                    Testimonios
                </h2>

                {displayMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map(renderTestimonialCard)}
                    </div>
                ) : (
                    <div className="text-center text-gray-700 dark:text-gray-200">
                        <p>Modo Carousel no implementado en este ejemplo básico. Se mostrará como grid.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                            {testimonials.map(renderTestimonialCard)}
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

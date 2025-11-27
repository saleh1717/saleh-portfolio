import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() =>{

        }, 1500)
    }
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Interested in working together? I’m always open to new collaborations and meaningful projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Email</h4>
                                    <a
                                        href="mailto:salehsegeir1717@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        salehsegeir1717@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Phone</h4>
                                    <a
                                        href="tel:0895330308197"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        0895-3303-08197
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Location</h4>
                                    <p className="text-muted-foreground">
                                        Jalan Alfu No 5
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4> Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/saleh-muhammad-9266112b3" target="_blank">
                                        <Linkedin />
                                    </a>
                                    <a href="https://www.instagram.com/salehsegeir_?igsh=MXVhZzY0a2phcWRwdw==" target="_blank">
                                        <Instagram />
                                    </a>
                                    <a href="https://github.com/saleh1717" target="_blank">
                                        <Github />
                                    </a>  
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        {/* FORM FIXED */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Saleh Muhammad..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="salehsegeir1717@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'D like to talk about..."
                                />
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}
                            
                            >
                                <Send size={15}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

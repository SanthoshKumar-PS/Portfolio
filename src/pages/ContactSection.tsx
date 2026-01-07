import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailMessage, type ContactParams } from "@/services/emailservice";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "santhoshkumarsakthi2003@gmail.com",
    href: "mailto:santhoshkumarsakthi2003@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/santhosh-kumar-periyanahalli-sakthivel",
    href: "https://www.linkedin.com/in/santhosh-kumar-periyanahalli-sakthivel",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SanthoshKumar-PS",
    href: "https://github.com/SanthoshKumar-PS",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];
const ContactSection = () => {
  const [formData, setFormData] = useState<ContactParams>({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const sendPromise = sendEmailMessage(formData);
    toast.promise(sendPromise,{
      loading:'Send your message...',
      success: ()=>{
        return (
        <div className="flex flex-col gap-1">
          <b className="text-primary-foreground font-display">Message sent!</b>
          <p className="text-primary-foreground text-xs font-sans">
            Check your inbox for confirmation.
          </p>
        </div>
        );
      },
      error: 'Could not send message. Please try again.',
    })
    try{
      await sendPromise;
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch(error:any){
      console.log(error)
    } finally{
      setIsSubmitting(false)
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.2, duration:0.6}}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info,index)=>(
                <motion.div
                  key={info.label}
                  initial={{opacity:0, x:-20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{delay:0.3+index*0.1}}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http')?"_blank":undefined}
                      rel={info.href.startsWith("http")?"noopener noreferrer":undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-primary/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon size={24} className="text-primary"/>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ):(
                    <div className="flex items-center gap-4 p-4 rounded-2xl glass">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <info.icon size={24} className="text-primary"/>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}

                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.7}}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-glow-secondary/10 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"/>
                </span>
                <span className="font-semibold text-foreground">Available for opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to full-time positions, freelance projects, and interesting collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{opacity:0, x:30}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.3, duration:0.6}}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your2gmail.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                  <Button
                    type="submit"
                    variant='hero'
                    size='lg'
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting? (
                      <>
                        <CheckCircle size={18}/>
                        Message Sent
                      </>
                    ): isSubmitting?(
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"/>
                        Sending...
                      </>
                    ):(
                      <>
                        <Send size={18}/>
                        Send Message
                      </>
                    )}

                  </Button>


              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ContactSection
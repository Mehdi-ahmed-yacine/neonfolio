import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`New Project Inquiry from ${formData?.name}`);
    const body = encodeURIComponent(`From: ${formData?.name} <${formData?.email}>

${formData?.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yacinemehdi2005@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/yacine454-may', color: 'text-foreground hover:text-primary' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/ahmed-yacine-mehdi-5941a4303/', color: 'text-foreground hover:text-accent' },
    { name: 'Email', icon: 'Mail', url: 'mailto:yacinemehdi2005@gmail.com', color: 'text-foreground hover:text-success' }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into digital reality? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">yacinemehdi2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary/10">
                <p className="text-sm font-medium text-foreground mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks?.map((social) => (
                    <a
                      key={social?.name}
                      href={social?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-all duration-300 ${social?.color}`}
                      title={social?.name}
                    >
                      <Icon name={social?.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-effect rounded-xl p-6 border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-success rounded-full animate-pulse" />
                <div>
                  <p className="font-medium text-foreground">Currently Available</p>
                  <p className="text-sm text-muted-foreground">Open for new projects and collaborations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Start a Project</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <p className="text-success font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData?.email}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                fullWidth
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
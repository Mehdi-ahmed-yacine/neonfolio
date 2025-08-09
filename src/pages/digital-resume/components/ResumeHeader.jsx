import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResumeHeader = ({ personalInfo, onDownloadPDF }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-elevation-card border border-border/50">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-primary">
            <Image
              src={personalInfo?.profileImage}
              alt={personalInfo?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow-primary">
            <Icon name="CheckCircle" size={16} className="text-primary-foreground" />
          </div>
        </div>

        {/* Personal Information */}
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
              {personalInfo?.name}
            </h1>
            <p className="text-xl text-primary font-medium mb-2">
              {personalInfo?.title}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo?.summary}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">{personalInfo?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Phone" size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">{personalInfo?.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={16} className="text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">{personalInfo?.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Icon name="Globe" size={16} className="text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Portfolio</p>
                <p className="text-foreground font-medium">{personalInfo?.website}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mb-6">
            {personalInfo?.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-300 group"
              >
                <Icon name={link?.icon} size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {link?.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <Button
            variant="default"
            onClick={onDownloadPDF}
            iconName="Download"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
          >
            Download PDF
          </Button>
          <Button
            variant="outline"
            iconName="Share2"
            iconPosition="left"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Share Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
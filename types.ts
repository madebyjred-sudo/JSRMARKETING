import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  client: string;
  category: string;
  image: string;
  metrics: {
    roas: string;
    spend: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export enum ChatSender {
  User = 'user',
  Bot = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}
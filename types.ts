import React from 'react';

export type Language = 'th' | 'en';

export enum ViewState {
  HOME = 'HOME',
  ANALYZER = 'ANALYZER', // Input Image -> Output Text
  INFO = 'INFO', // Educational Content
}

export interface NavCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}
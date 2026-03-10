
import React from 'react';

export type PageType = 
  | 'home' 
  | 'claim' 
  | 'detail' 
  | 'profile' 
  | 'my_donations' 
  | 'my_claims' 
  | 'my_monthly'
  | 'donate_home'
  | 'monthly_donate_home'
  | 'donation_project_detail'
  | 'donation_certificate'
  | 'project_progress_list'
  | 'project_full_timeline'
  | 'project_progress_detail'
  | 'thank_you_letters'
  | 'thank_you_letter_detail'
  | 'recipient_feedback'
  | 'my_needs_feedback'
  | 'donation_process'
  | 'map_full'
  | 'public_welfare_matrix'
  | 'enterprise_detail';

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface Enterprise {
  id: string;
  name: string;
  fullName: string;
  type: string;
  logo: React.ReactNode;
  bannerColor: string;
  description: string;
  stats: {
    totalAmount: string;
    projectCount: number;
    days: number;
  };
  records: Array<{
    project: string;
    amount: string;
    date: string;
  }>;
}

export interface ClaimItem {
  id: string;
  title: string;
  deadline: string;
  image: string;
  description?: string;
}

export interface DonationRecord {
  id: string;
  projectTitle: string;
  date: string;
  amount: string;
  type: 'single' | 'monthly';
  orderNo: string;
}

export interface ProjectUpdate {
  date: string;
  title: string;
  content: string;
  images: string[];
}

export interface Project {
  id: number;
  title: string;
  donatedAmount: string;
  organization?: string;
  projectImage: string;
  updates: ProjectUpdate[];
}

export interface DonationProject {
  id: number | string;
  title: string;
  desc?: string;
  image: string;
  donors: number | string;
  tag?: string;
}

export interface ThankYouLetter {
  id: string;
  date: string;
  content: string;
  projectTitle: string;
}

export interface MapPoint {
  id: string;
  name: string;
  type: 'station' | 'center' | 'box';
  lat: number;
  lng: number;
  address: string;
  distance: string;
  status: 'open' | 'closed';
}

// Added missing FeedbackTemplate interface for RecipientFeedbackPage
export interface FeedbackTemplate {
  id: string;
  name: string;
  content: string;
  bgClass: string;
}

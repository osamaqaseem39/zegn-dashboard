import axiosInstance from './axiosConfig';

export interface ReferralCode {
  referralCode: string;
  shareUrl: string;
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalEarnings: number;
  thisMonthEarnings: number;
}

export interface ReferralEarnings {
  totalEarnings: number;
  pendingEarnings: number;
  paidEarnings: number;
  earningsHistory: Array<{
    date: string;
    amount: number;
    status: 'paid' | 'pending';
  }>;
}

export const referralApi = {
  // Get referral code
  getReferralCode: async (): Promise<ReferralCode> => {
    const response = await axiosInstance.get('/referrals/code');
    return response.data;
  },

  // Get referral statistics
  getReferralStats: async (): Promise<ReferralStats> => {
    const response = await axiosInstance.get('/referrals/stats');
    return response.data;
  },

  // Get referral earnings
  getReferralEarnings: async (): Promise<ReferralEarnings> => {
    const response = await axiosInstance.get('/referrals/earnings');
    return response.data;
  },
}; 
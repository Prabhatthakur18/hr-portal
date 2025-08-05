import { Company, Employee } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    industry: 'Technology',
    employees: 1250,
    location: 'San Francisco, CA',
    established: '2015',
    revenue: '$50M',
    description: 'Leading software development company specializing in enterprise solutions and cloud technologies.'
  },
  {
    id: '2',
    name: 'Global Manufacturing Inc',
    industry: 'Manufacturing',
    employees: 2800,
    location: 'Detroit, MI',
    established: '1998',
    revenue: '$120M',
    description: 'Automotive parts manufacturer with operations across North America and Europe.'
  },
  {
    id: '3',
    name: 'FinanceFirst Bank',
    industry: 'Financial Services',
    employees: 950,
    location: 'New York, NY',
    established: '2005',
    revenue: '$80M',
    description: 'Regional bank offering comprehensive financial services to businesses and individuals.'
  }
];

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Senior Software Engineer',
    department: 'Engineering',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2021-03-15',
    companyId: '1',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    about: {
      bio: 'Experienced software engineer with 8+ years in full-stack development. Passionate about creating scalable solutions and mentoring junior developers.',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
      experience: '8 years in software development, previously at Microsoft and startups',
      education: 'MS Computer Science, Stanford University'
    },
    kras: [
      {
        id: '1',
        title: 'Lead Platform Migration',
        description: 'Migrate legacy system to cloud-native architecture',
        target: 'Q2 2024',
        status: 'in-progress'
      },
      {
        id: '2',
        title: 'Team Performance',
        description: 'Improve team velocity by 25%',
        target: 'End of 2024',
        status: 'pending'
      }
    ],
    kpis: [
      {
        id: '1',
        metric: 'Code Review Turnaround',
        target: 24,
        current: 18,
        unit: 'hours',
        period: 'Monthly'
      },
      {
        id: '2',
        metric: 'Bug Resolution Rate',
        target: 95,
        current: 97,
        unit: '%',
        period: 'Monthly'
      }
    ],
    careerRoadmap: [
      {
        id: '1',
        position: 'Senior Software Engineer',
        timeline: 'Current',
        requirements: ['Technical Leadership', 'Mentoring'],
        status: 'current'
      },
      {
        id: '2',
        position: 'Staff Engineer',
        timeline: '6-12 months',
        requirements: ['Architecture Design', 'Cross-team Collaboration'],
        status: 'next'
      },
      {
        id: '3',
        position: 'Principal Engineer',
        timeline: '2-3 years',
        requirements: ['Technology Strategy', 'Industry Recognition'],
        status: 'future'
      }
    ],
    reviews: {
      internal: [
        {
          id: '1',
          reviewer: 'Mike Chen (Manager)',
          rating: 4.8,
          feedback: 'Exceptional technical skills and great team player. Consistently delivers high-quality code.',
          date: '2024-01-15'
        }
      ],
      external: [
        {
          id: '1',
          client: 'Enterprise Corp',
          project: 'E-commerce Platform',
          rating: 5.0,
          feedback: 'Outstanding work on the platform redesign. Exceeded expectations.',
          date: '2024-02-20'
        }
      ]
    },
    leaves: [
      {
        id: '1',
        type: 'Vacation',
        startDate: '2024-03-15',
        endDate: '2024-03-22',
        days: 6,
        status: 'approved',
        reason: 'Family vacation'
      },
      {
        id: '2',
        type: 'Sick Leave',
        startDate: '2024-01-08',
        endDate: '2024-01-10',
        days: 3,
        status: 'approved',
        reason: 'Medical appointment'
      }
    ]
  },
  {
    id: '2',
    name: 'David Rodriguez',
    position: 'Marketing Manager',
    department: 'Marketing',
    email: 'david.rodriguez@techcorp.com',
    phone: '+1 (555) 234-5678',
    joinDate: '2020-08-10',
    companyId: '1',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    about: {
      bio: 'Creative marketing professional with expertise in digital campaigns and brand strategy. Led successful product launches and market expansion initiatives.',
      skills: ['Digital Marketing', 'Brand Strategy', 'Analytics', 'Content Creation', 'SEO/SEM'],
      experience: '6 years in marketing, previously at advertising agencies',
      education: 'MBA Marketing, UC Berkeley'
    },
    kras: [
      {
        id: '1',
        title: 'Brand Awareness Campaign',
        description: 'Increase brand recognition by 40%',
        target: 'Q3 2024',
        status: 'in-progress'
      }
    ],
    kpis: [
      {
        id: '1',
        metric: 'Lead Generation',
        target: 500,
        current: 620,
        unit: 'leads',
        period: 'Monthly'
      }
    ],
    careerRoadmap: [
      {
        id: '1',
        position: 'Marketing Manager',
        timeline: 'Current',
        requirements: ['Campaign Management', 'Team Leadership'],
        status: 'current'
      }
    ],
    reviews: {
      internal: [
        {
          id: '1',
          reviewer: 'Lisa Park (Director)',
          rating: 4.6,
          feedback: 'Strong strategic thinking and excellent execution of marketing campaigns.',
          date: '2024-01-20'
        }
      ],
      external: []
    },
    leaves: [
      {
        id: '1',
        type: 'Personal',
        startDate: '2024-04-01',
        endDate: '2024-04-03',
        days: 3,
        status: 'pending',
        reason: 'Personal matters'
      }
    ]
  }
];
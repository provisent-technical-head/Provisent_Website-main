import CourseDetailsFull from '@/components/course-details-full'

const courseData = {
  courseTitle: 'Artificial Intelligence Fundamentals',
  instructor: 'Dr. Sarah Johnson | AI Research Lead | 10+ Years Experience',
  rating: 4.9,
  reviews: 1250,
  students: 15420,
  duration: '8 weeks',
  description: 'Master the fundamentals of Artificial Intelligence with hands-on projects and real-world applications. Learn from industry experts and build a career in AI.',
  syllabus: [
    {
      title: 'Introduction to AI',
      topics: ['What is AI?', 'History of AI', 'AI Applications', 'Career Opportunities', 'Tools & Frameworks'],
    },
    {
      title: 'Machine Learning Basics',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Model Evaluation'],
    },
    {
      title: 'Deep Learning',
      topics: ['Neural Networks', 'CNNs', 'RNNs', 'LSTMs', 'Backpropagation'],
    },
    {
      title: 'Natural Language Processing',
      topics: ['Text Processing', 'Tokenization', 'Embeddings', 'Sentiment Analysis', 'Transformers'],
    },
    {
      title: 'Computer Vision',
      topics: ['Image Processing', 'Object Detection', 'Image Classification', 'Segmentation', 'Face Recognition'],
    },
    {
      title: 'AI Tools & Libraries',
      topics: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK'],
    },
    {
      title: 'AI in the Cloud',
      topics: ['AWS AI Services', 'Google Cloud AI', 'Azure ML', 'Deployment', 'Scaling'],
    },
    {
      title: 'AI Project',
      topics: ['Project Planning', 'Data Collection', 'Model Development', 'Testing', 'Deployment'],
    },
  ],
  plans: [
    {
      name: 'Basic Plan',
      price: '₹15,000',
      description: 'Start your AI journey',
      features: ['Access to all modules', 'Community support', 'Certificate on completion'],
    },
    {
      name: 'Pro Plan',
      price: '₹15,000',
      description: 'Most popular choice',
      features: ['Everything in Basic', '1:1 Mentorship', 'Project feedback', 'Job-ready projects'],
    },
    {
      name: 'Premium Plan',
      price: '₹15,000',
      description: 'Complete mastery',
      features: ['Everything in Pro', 'Career guidance', 'Exclusive webinars', 'Lifetime access'],
    },
  ],
  reviews_list: [
    {
      id: '1',
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent course! The instructors are very knowledgeable and the curriculum is comprehensive. I learned a lot and got a great job offer.',
      date: '2 weeks ago',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Best AI course I have taken. The practical projects helped me understand real-world applications. Highly recommended!',
      date: '1 month ago',
    },
    {
      id: '3',
      name: 'Amit Patel',
      rating: 4,
      comment: 'Great content and supportive instructors. Some topics could use more depth, but overall excellent value for money.',
      date: '2 months ago',
    },
  ],
}

export const metadata = {
  title: 'Artificial Intelligence Fundamentals - Provisent EduTech',
  description: 'Master AI with our comprehensive course. Learn machine learning, deep learning, NLP, and computer vision. Get certified and launch your AI career with Provisent EduTech.',
  keywords: 'AI course, artificial intelligence, machine learning, deep learning, NLP, computer vision, certification',
  openGraph: {
    title: 'Artificial Intelligence Fundamentals',
    description: 'Become an AI expert with comprehensive training and real-world projects',
  },
}

export default function AICourse() {
  return <CourseDetailsFull {...courseData} />
}

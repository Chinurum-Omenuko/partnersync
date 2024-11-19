export interface User {
    id: string;
    role: 'faculty' | 'partner' | 'admin';
    username: string;
    email: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    userId: string;
    interestedFaculty?: User[];
  }
  
  export interface Course {
    id: string;
    title: string;
    description: string;
    userId: string;
    interestedPartners?: User[];
  }
  
  export interface ProjectInterest {
    id: string;
    projectId: string;
    userId: string;
  }
  
  export interface CourseInterest {
    id: string;
    courseId: string;
    userId: string;
  }
  
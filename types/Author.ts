export interface Author {
  id: string;
  fullname: string;
  jobTitle: string;
  bio: string;
  email: string;
  avatar: string;
  location: {
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  slug: string;
}

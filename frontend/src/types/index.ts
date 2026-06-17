export interface RSVP {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Tidak Hadir';
  message?: string;
  created_at: string;
}

export interface Gallery {
  id: string;
  image_url: string;
  created_at: string;
}

export interface Settings {
  id: string;
  wedding_title: string;
  groom_name: string;
  bride_name: string;
  event_date: string;
  location: string;
  map_url: string;
}

export interface Wish {
  name: string;
  message: string;
  created_at: string;
}

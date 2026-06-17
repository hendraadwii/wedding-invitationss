export interface RSVPBody {
  name: string;
  attendance: 'Hadir' | 'Tidak Hadir';
  message?: string;
}

export interface GalleryBody {
  image_url: string;
}

export interface Settings {
  wedding_title: string;
  groom_name: string;
  bride_name: string;
  event_date: string;
  location: string;
  map_url: string;
}

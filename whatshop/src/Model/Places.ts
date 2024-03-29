// Generated by https://quicktype.io

export interface Places {
    candidates: Candidate[];
    status:     string;
}

export interface Candidate {
    formatted_address: string;
    geometry:          Geometry;
    name:              string;
    opening_hours:     OpeningHours;
    photos:            Photo[];
    rating:            number;
}

export interface Geometry {
    location: Location;
    viewport: Viewport;
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: Location;
    southwest: Location;
}

export interface OpeningHours {
    open_now: boolean;
}

export interface Photo {
    height:            number;
    html_attributions: string[];
    photo_reference:   string;
    width:             number;
}

export interface Flight {
  id: string;
  airline: string;
  code: string;
  departure: {
    time: string;
    location: string;
    terminal: string;
  };
  arrival: {
    time: string;
    location: string;
    terminal: string;
  };
  duration: string;
  stops: string;
  price: string;
  seatsLeft: string;
}



import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native';
import { SlidersHorizontal } from 'lucide-react-native';
import FlightCard from '@/components/FlightCard';
import FlightHeader from '@/components/FlightHeader';

interface Flight {
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

const flights: Flight[] = [
  {
    id: '1',
    airline: 'Air India',
    code: 'AI - 2986',
    departure: { time: '00:50', location: 'Mumbai,MXB', terminal: 'Terminal 1' },
    arrival: { time: '00:50', location: 'New Delhi,HAK', terminal: 'Terminal 1' },
    duration: '06 h 10 m',
    stops: '1 stop',
    price: '₹4654',
    seatsLeft: '9 SEATS LEFT',
  },
  {
    id: '2',
    airline: 'Air India',
    code: 'AI - 2986',
    departure: { time: '00:50', location: 'Mumbai,MXB', terminal: 'Terminal 1' },
    arrival: { time: '00:50', location: 'New Delhi,HAK', terminal: 'Terminal 1' },
    duration: '06 h 10 m',
    stops: '1 stop',
    price: '₹4654',
    seatsLeft: '9 SEATS LEFT',
  },
  {
    id: '3',
    airline: 'SpiceJet',
    code: 'SG - 4573',
    departure: { time: '01:15', location: 'Chennai,MAA', terminal: 'Terminal 2' },
    arrival: { time: '01:15', location: 'Hyderabad,RGI', terminal: 'Terminal 2' },
    duration: '02 h 25 m',
    stops: 'Direct',
    price: '₹3200',
    seatsLeft: '5 SEATS LEFT',
  },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <FlightHeader />
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
            <SlidersHorizontal size={20} color="#0091FF" strokeWidth={2} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={flights}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FlightCard flight={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  filterContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0091FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0091FF',
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
});

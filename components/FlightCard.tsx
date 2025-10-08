import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

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

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  const isAirIndia = flight.airline === 'Air India';
  const airlineInitials = isAirIndia ? 'AI' : 'SJ';

  return (
    <View style={styles.card}>
      <View style={styles.airlineHeader}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>{airlineInitials}</Text>
        </View>
        <View>
          <Text style={styles.airlineName}>{flight.airline}</Text>
          <Text style={styles.flightNumber}>{flight.code}</Text>
        </View>
      </View>

      <View style={styles.flightDetailsRow}>
        <View style={styles.timeColumn}>
          <Text style={styles.time}>{flight.departure.time}</Text>
          <Text style={styles.location}>{flight.departure.location}</Text>
          <Text style={styles.terminal}>{flight.departure.terminal}</Text>
        </View>

        <View style={styles.durationColumn}>
          <Text style={styles.duration}>{flight.duration}</Text>
          <View style={styles.timeline}>
            <View style={styles.dot} />
            <View style={styles.line} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.stops}>{flight.stops}</Text>
        </View>

        <View style={styles.timeColumn}>
          <Text style={styles.time}>{flight.arrival.time}</Text>
          <Text style={styles.location}>{flight.arrival.location}</Text>
          <Text style={styles.terminal}>{flight.arrival.terminal}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <View style={styles.leftInfo}>
          <View style={styles.refundBadge}>
            <Text style={styles.refundText}>Non-Refundable</Text>
          </View>
          <Text style={styles.seatsLeft}>{flight.seatsLeft}</Text>
        </View>

        <View style={styles.rightInfo}>
          <Text style={styles.price}>{flight.price}</Text>
          <TouchableOpacity style={styles.selectButton} activeOpacity={0.7}>
            <Text style={styles.selectText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  airlineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#DC143C',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  airlineName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    lineHeight: 22,
  },
  flightNumber: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    marginTop: 2,
  },
  flightDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeColumn: {
    flex: 1,
    alignItems: 'center',
  },
  time: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  location: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    marginBottom: 2,
  },
  terminal: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
  },
  durationColumn: {
    flex: 1,
    alignItems: 'center',
  },
  duration: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    marginBottom: 8,
  },
  timeline: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CCCCCC',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  stops: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666666',
  },
  divider: {
    height: 1,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderStyle: 'dashed',
    marginVertical: 16,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftInfo: {
    flex: 1,
  },
  refundBadge: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  refundText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#DC143C',
  },
  seatsLeft: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FF4444',
  },
  rightInfo: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  selectButton: {
    backgroundColor: '#0091FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    minWidth: 100,
  },
  selectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
});

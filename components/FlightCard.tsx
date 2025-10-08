import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { colors } from '@/theme';
import type { Flight } from '@/types';

// Flight type imported from '@/types'

interface FlightCardProps {
  flight: Flight;
}

function AirlineHeader({ airline, code, initials }: { airline: string; code: string; initials: string }) {
  const isAirIndia = airline === 'Air India';
  return (
    <View style={styles.airlineHeader}>
      <View style={styles.logoFrame}>
        {isAirIndia ? (
          <Image
            source={require('../assets/images/AirIndiaLogo.png')}
            style={styles.logoInnerImage}
          />
        ) : airline === 'SpiceJet' ? (
          <Image
            source={require('../assets/images/SpiceJetLogo.png')}
            style={styles.logoInnerImage}
          />
        ) : (
          <View style={styles.logoInitialsBox}>
            <Text style={styles.logoInitialsText}>{initials}</Text>
          </View>
        )}
      </View>
      <View>
        <Text style={styles.airlineName}>{airline}</Text>
        <Text style={styles.flightNumber}>{code}</Text>
      </View>
    </View>
  );
}

function TimeColumn({ time, location, terminal, align = 'center' }: { time: string; location: string; terminal: string; align?: 'left' | 'center' | 'right' }) {
  const containerAlignment = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
  const textAlign = align as 'left' | 'center' | 'right';
  return (
    <View style={[styles.timeColumn, { alignItems: containerAlignment }]}>
      <Text style={[styles.time, { textAlign }]}>{time}</Text>
      <Text style={[styles.location, { textAlign }]}>{location}</Text>
      <Text style={[styles.terminal, { textAlign }]}>{terminal}</Text>
    </View>
  );
}

function DurationColumn({ duration, stops }: { duration: string; stops: string }) {
  return (
    <View style={styles.durationColumn}>
      <Text style={styles.duration}>{duration}</Text>
      <View style={styles.timeline}>
        <View style={styles.line} />
        <View style={styles.dotCenter} />
      </View>
      <Text style={styles.stops}>{stops}</Text>
    </View>
  );
}

function RightSummary({ price, seatsLeft }: { price: string; seatsLeft: string }) {
  return (
    <View style={styles.rightSummary}>
      <View style={styles.rightTexts}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.seatsLeft}>{seatsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.selectButton} activeOpacity={0.7}>
        <Text style={styles.selectText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
}

function RefundAndSeats() {
  return (
    <View style={styles.leftInfo}>
      <View style={styles.refundBadge}>
        <Text style={styles.refundText} numberOfLines={1} ellipsizeMode="clip">Non-Refundable</Text>
      </View>
    </View>
  );
}

export default function FlightCard({ flight }: FlightCardProps) {
  const isAirIndia = flight.airline === 'Air India';
  const airlineInitials = isAirIndia ? 'AI' : 'SJ';

  return (
    <View style={styles.card}>
      <AirlineHeader airline={flight.airline} code={flight.code} initials={airlineInitials} />

      <View style={styles.flightDetailsRow}>
        <TimeColumn align="left" time={flight.departure.time} location={flight.departure.location} terminal={flight.departure.terminal} />
        <DurationColumn duration={flight.duration} stops={flight.stops} />
        <TimeColumn align="right" time={flight.arrival.time} location={flight.arrival.location} terminal={flight.arrival.terminal} />
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <RefundAndSeats />
        <RightSummary price={flight.price} seatsLeft={flight.seatsLeft} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  airlineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoFrame: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoInnerImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  logoInitialsBox: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.airlineCrimson,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInitialsText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  airlineName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 20,
  },
  flightNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  flightDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  timeColumn: {
    flex: 1,
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  location: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  terminal: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.textMuted,
  },
  durationColumn: {
    flex: 1,
    alignItems: 'center',
  },
  duration: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textSecondary,
    marginBottom: 6,
  },
  timeline: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C5CAD3',
    marginHorizontal: 10,
  },
  dotCenter: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C5CAD3',
  },
  stops: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  divider: {
    borderTopWidth: 2,
    borderTopColor: colors.divider,
    borderStyle: 'dashed',
    marginVertical: 10,
    alignSelf: 'stretch',
    marginHorizontal: -16,
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  leftInfo: {
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  refundBadge: {
    backgroundColor: colors.refundBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 2,
    alignSelf: 'flex-start',
    marginBottom: 0,
    flexShrink: 0,
  },
  rightSummary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
    flexShrink: 1,
    minWidth: 0,
  },
  rightTexts: {
    alignItems: 'flex-end',
  },
  refundText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D92D20',
  },
  seatsLeft: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.danger,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 2,
  },
  selectButton: {
    backgroundColor: colors.accent,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
});
